/**
 * RWXT 3D Hero - Subtle wireframe grid wave animation
 * Lightweight Three.js implementation with performance optimizations
 * and accessibility features
 */

class RWXTHero3D {
  constructor() {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.mesh = null;
    this.geometry = null;
    this.material = null;
    this.canvas = null;
    this.animationId = null;
    this.clock = null;
    
    // Animation state
    this.isAnimating = false;
    this.isPaused = false;
    this.isReducedMotion = false;
    
    // Performance settings
    this.lastFrameTime = 0;
    this.targetFPS = 60;
    this.frameInterval = 1000 / this.targetFPS;
    
    // Interaction state
    this.mouse = { x: 0, y: 0 };
    this.targetMouse = { x: 0, y: 0 };
    
    // Initialize
    this.init();
  }

  init() {
    // Check for reduced motion preference
    this.checkReducedMotion();
    
    // Check WebGL support
    if (!this.checkWebGLSupport()) {
      this.showFallback();
      return;
    }

    this.setupScene();
    this.setupCamera();
    this.setupRenderer();
    this.setupGeometry();
    this.setupMaterial();
    this.setupMesh();
    this.setupEventListeners();
    this.startAnimation();
  }

  checkReducedMotion() {
    this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (this.isReducedMotion) {
      document.body.classList.add('is-reduced-motion');
    }
    
    // Listen for changes
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      this.isReducedMotion = e.matches;
      if (e.matches) {
        document.body.classList.add('is-reduced-motion');
        this.pauseAnimation();
      } else {
        document.body.classList.remove('is-reduced-motion');
        this.resumeAnimation();
      }
    });
  }

  checkWebGLSupport() {
    try {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      return !!context;
    } catch (e) {
      return false;
    }
  }

  showFallback() {
    console.info('WebGL not available, showing static gradient fallback');
    const canvas = document.getElementById('hero-canvas');
    if (canvas) {
      canvas.style.display = 'none';
    }
    
    // Create static gradient background
    const fallbackDiv = document.createElement('div');
    fallbackDiv.id = 'hero-fallback';
    fallbackDiv.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background: linear-gradient(135deg, 
        rgba(11, 12, 14, 1) 0%, 
        rgba(17, 19, 24, 0.8) 50%, 
        rgba(34, 211, 238, 0.05) 100%);
      pointer-events: none;
    `;
    
    document.body.appendChild(fallbackDiv);
  }

  setupScene() {
    this.scene = new THREE.Scene();
    this.clock = new THREE.Clock();
  }

  setupCamera() {
    this.camera = new THREE.PerspectiveCamera(
      45, // FOV
      window.innerWidth / window.innerHeight, // aspect ratio
      0.1, // near
      100 // far
    );
    this.camera.position.set(0, 0, 30);
  }

  setupRenderer() {
    this.canvas = document.getElementById('hero-canvas');
    
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'low-power' // Prefer integrated GPU for better battery life
    });
    
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
    this.renderer.setClearColor(0x000000, 0); // Transparent background
  }

  setupGeometry() {
    // Optimized grid size for performance - fewer vertices
    this.geometry = new THREE.PlaneGeometry(22, 22, 60, 60);
    
    // Store original positions for animation
    this.originalPositions = new Float32Array(this.geometry.attributes.position.array);
  }

  setupMaterial() {
    this.material = new THREE.MeshBasicMaterial({
      color: 0x22D3EE,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
      side: THREE.DoubleSide
    });
  }

  setupMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.rotation.x = -Math.PI * 0.3; // Slight angle for better visual
    this.scene.add(this.mesh);
  }

  setupEventListeners() {
    // Window resize
    window.addEventListener('resize', () => this.onWindowResize(), false);
    
    // Mouse movement for subtle parallax
    window.addEventListener('mousemove', (event) => this.onMouseMove(event), false);
    
    // Page visibility API for performance
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.pauseAnimation();
      } else if (!this.isReducedMotion) {
        this.resumeAnimation();
      }
    }, false);
    
    // Focus/blur events
    window.addEventListener('blur', () => this.pauseAnimation(), false);
    window.addEventListener('focus', () => {
      if (!this.isReducedMotion && !document.hidden) {
        this.resumeAnimation();
      }
    }, false);
  }

  onWindowResize() {
    if (!this.camera || !this.renderer) return;
    
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  onMouseMove(event) {
    if (this.isReducedMotion) return;
    
    // Normalize mouse position (-1 to 1)
    this.targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  updateWaveAnimation() {
    if (!this.geometry || this.isReducedMotion) return;
    
    const time = this.clock.getElapsedTime();
    const positions = this.geometry.attributes.position.array;
    
    // Update vertex positions with wave effect
    for (let i = 0; i < positions.length; i += 3) {
      const x = this.originalPositions[i];
      const y = this.originalPositions[i + 1];
      
      // Wave calculation with multiple frequencies for complexity
      const distance = Math.sqrt(x * x + y * y);
      const wave1 = Math.sin(distance * 0.1 + time * 0.5) * 2;
      const wave2 = Math.cos(distance * 0.05 + time * 0.3) * 1;
      
      positions[i + 2] = wave1 + wave2;
    }
    
    this.geometry.attributes.position.needsUpdate = true;
  }

  updateCameraParallax() {
    if (this.isReducedMotion) return;
    
    // Smooth mouse following
    this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.02;
    this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.02;
    
    // Subtle camera movement (clamped)
    const maxOffset = 2;
    this.camera.position.x = Math.max(-maxOffset, Math.min(maxOffset, this.mouse.x * 1));
    this.camera.position.y = Math.max(-maxOffset, Math.min(maxOffset, this.mouse.y * 0.5));
    
    this.camera.lookAt(this.scene.position);
  }

  animate() {
    if (!this.isAnimating) return;
    
    const currentTime = performance.now();
    
    // Frame rate limiting for better performance
    if (currentTime - this.lastFrameTime >= this.frameInterval) {
      this.updateWaveAnimation();
      this.updateCameraParallax();
      
      if (this.renderer && this.scene && this.camera) {
        this.renderer.render(this.scene, this.camera);
      }
      
      this.lastFrameTime = currentTime;
    }
    
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  startAnimation() {
    if (this.isReducedMotion) return;
    
    this.isAnimating = true;
    this.isPaused = false;
    this.animate();
  }

  pauseAnimation() {
    this.isAnimating = false;
    this.isPaused = true;
    
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  resumeAnimation() {
    if (!this.isPaused || this.isReducedMotion) return;
    
    this.startAnimation();
  }

  dispose() {
    this.pauseAnimation();
    
    if (this.geometry) this.geometry.dispose();
    if (this.material) this.material.dispose();
    if (this.renderer) this.renderer.dispose();
    
    // Remove event listeners
    window.removeEventListener('resize', this.onWindowResize);
    window.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('visibilitychange', this.pauseAnimation);
    window.removeEventListener('blur', this.pauseAnimation);
    window.removeEventListener('focus', this.resumeAnimation);
  }
}

// Initialize when DOM is loaded and Three.js is available
function initRWXTHero() {
  if (typeof THREE === 'undefined') {
    console.error('Three.js not loaded. Cannot initialize 3D hero.');
    return;
  }
  
  // Create canvas element
  const canvas = document.createElement('canvas');
  canvas.id = 'hero-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
  `;
  
  // Insert canvas before page wrapper
  const pageWrapper = document.getElementById('page-wrapper');
  if (pageWrapper) {
    document.body.insertBefore(canvas, pageWrapper);
  } else {
    document.body.appendChild(canvas);
  }
  
  // Initialize 3D hero
  window.rwxtHero = new RWXTHero3D();
}

// Initialize when ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initRWXTHero);
} else {
  initRWXTHero();
}