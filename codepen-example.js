// load webfont from Google Fonts
WebFont.load({
    google: {
        families: ['Muli:600']
    },
    classes: false,
    active: () => {
        createCanvas()
        updateCanvas()
    }
})

// vertex shader
const vertexShader = `
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float time;
uniform float index;
uniform float divisions;
uniform float tOffsetX;
uniform vec4 tween;
attribute vec3 position;
attribute vec2 uv;
varying vec2 vUv;

mat2 scale2D(vec2 scale) {
return mat2(scale.x, 0.0, 0.0, scale.y);
}

void main() {
vUv = uv;
vec3 pos = position;

float scaleX = tween.x;
pos.x += tOffsetX;
pos.xy *= scale2D(vec2(scaleX, 1.0));
pos.x -= tOffsetX;

gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`

// fragment shader
const fragmentShader = `
precision highp float;

uniform sampler2D texture;
uniform float time;
uniform float index;
uniform float divisions;
uniform vec4 tween;
varying vec2 vUv;

void main() {
vec2 uv = vUv;
float startV = index * (1.0 / divisions);
vec2 tuv = vec2(uv.x, startV + uv.y * (1.0 / divisions));

vec4 color = texture2D(texture, tuv);

gl_FragColor = color;
//gl_FragColor = vec4(vec3(tuv.y), 1.0);
}
`

// general settings
const width = 960
const height = 540
const aspectRatio = width / height
const dpr = Math.min(window.devicePixelRatio, 2)
const sceneWidth = 2
const sceneHeight = sceneWidth / aspectRatio
let scene, camera, renderer

// title settings
const titleWidth = 2.0
const titleHeight = 0.5
const numDivisions = 40
const titleMeshes = []
let numMeshes = 0

// animation settings
const tweens1 = [] // array of tweens for title1
const tweens2 = [] // array of tweens for title2
const tweens3 = [] // array of tweens for title3

function createCanvas() {
    scene = new THREE.Scene()

    camera = new THREE.OrthographicCamera(
        -sceneWidth / 2,
        sceneWidth / 2,
        sceneHeight / 2,
        -sceneHeight / 2,
        0.01,
        1000
    )
    camera.position.set(0, 0, 1)

    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        canvas: document.getElementById('Canvas')
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(dpr)

    const texture1 = createFontTexture({
        width: 1024,
        height: 256,
        fontSize: 230,
        text: 'EXPLORE'
    })

    const texture2 = createFontTexture({
        width: 1024,
        height: 256,
        fontSize: 230,
        text: 'CREATE'
    })

    const texture3 = createFontTexture({
        width: 1024,
        height: 256,
        fontSize: 230,
        text: 'REPEAT'
    })

    createTitle({
        texture: texture1,
        tweens: tweens1,
    })

    createTitle({
        texture: texture2,
        tweens: tweens2,
    })

    createTitle({
        texture: texture3,
        tweens: tweens3,
    })

    numMeshes = titleMeshes.length

    animateTitle()
}

function createFontTexture(options) {
    const canvas = document.createElement('canvas')
    const width = options.width * dpr
    const height = options.height * dpr
    canvas.width = width
    canvas.height = height

    const ctx = canvas.getContext('2d')

    // ctx.fillStyle = 'rgba(255, 0, 0, 0.1)'
    // ctx.fillRect(0, 0, width, height)

    ctx.font = `600 ${options.fontSize * dpr}px 'Muli'`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = '#fff'
    ctx.fillText(options.text, width / 2, height / 2 + 25)

    const texture = new THREE.CanvasTexture(canvas)
    texture.minFilter = THREE.LinearFilter
    texture.magFilter = THREE.LinearFilter
    texture.format = THREE.RGBAFormat
    texture.needsUpdate = false

    return texture
}

function createTitle(params) {
    for (let i = 0; i < numDivisions; i++) {
        const dividedHeight = titleHeight / numDivisions
        const geometry = new THREE.PlaneBufferGeometry(titleWidth, dividedHeight)
        geometry.removeAttribute('normal')

        const material = new THREE.RawShaderMaterial({
            uniforms: {
                texture: { value: params.texture },
                time: { value: 0 },
                index: { value: i },
                divisions: { value: numDivisions },
                tOffsetX: { value: -1.0 },
                tween: { value: new THREE.Vector4(0, 0, 1, 1) },
            },
            vertexShader,
            fragmentShader,
            transparent: true,
        })

        const y = -titleHeight * 0.5 + i * dividedHeight + dividedHeight * 0.5

        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.y = y

        scene.add(mesh)
        titleMeshes.push(mesh)
        params.tweens.push(material.uniforms.tween.value)
    }
}

function animateTitle() {
    const tl = gsap.timeline({
        repeat: -1,
        defaults: {
            ease: "power3.inOut",
            duration: 0.8,
            stagger: 0.01,
        }
    })

    const setTransformOffset = (titleIndex, value) => {
        const startIndex = titleIndex * numDivisions
        const endIndex = startIndex + numDivisions
        for (let i = startIndex; i < endIndex; i++) {
            titleMeshes[i].material.uniforms.tOffsetX.value = value
        }
    }

    tl.to(tweens1, {
        x: 1.0,
        onStart: () => {
            setTransformOffset(0, -1.0)
        }
    }, 'start')
    tl.to(tweens1, {
        x: 0.0,
        onStart: () => {
            setTransformOffset(0, 1.0)
        }
    }, 'next1')

    tl.to(tweens2, {
        x: 1.0,
        onStart: () => {
            setTransformOffset(1, -1.0)
        }
    }, 'next1')
    tl.to(tweens2, {
        x: 0.0,
        onStart: () => {
            setTransformOffset(1, 1.0)
        }
    }, 'next2')

    tl.to(tweens3, {
        x: 1.0,
        onStart: () => {
            setTransformOffset(2, -1.0)
        }
    }, 'next2')
    tl.to(tweens3, {
        x: 0.0,
        onStart: () => {
            setTransformOffset(2, 1.0)
        }
    })
}

function updateCanvas() {
    requestAnimationFrame(updateCanvas)

    const time = performance.now() * 0.001
    for (let i = 0; i < numMeshes; i++) {
        const mesh = titleMeshes[i]
        mesh.material.uniforms.time.value = time
    }

    renderer.render(scene, camera)
}