/*
 * A fast javascript implementation of simplex noise by Jonas Wagner
 * Based on a speed-improved simplex noise algorithm for 2D, 3D and 4D in Java.
 * Which is based on example code by Stefan Gustavson (stegu@itn.liu.se).
 * With Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
 * Better rank ordering method by Stefan Gustavson in 2012.
 */

(function () {
  'use strict';

  var SimplexNoise = function (random) {
    if (!random) random = Math.random;
    this.p = new Uint8Array(256);
    for (var i = 0; i < 256; i++) {
      this.p[i] = i;
    }

    var n, q;
    for (var i = 255; i > 0; i--) {
      n = Math.floor((i + 1) * random());
      q = this.p[i];
      this.p[i] = this.p[n];
      this.p[n] = q;
    }

    this.perm = new Uint8Array(512);
    this.permMod12 = new Uint8Array(512);
    for (var i = 0; i < 512; i++) {
      this.perm[i] = this.p[i & 255];
      this.permMod12[i] = this.perm[i] % 12;
    }
  };

  SimplexNoise.prototype = {
    grad3: new Float32Array([
      1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0,
      -1, 1, 0, 1, -1, 0, -1, -1,
    ]),

    noise2D: function (xin, yin) {
      var permMod12 = this.permMod12;
      var perm = this.perm;
      var grad3 = this.grad3;
      var n0 = 0;
      var n1 = 0;
      var n2 = 0;
      var F2 = 0.5 * (Math.sqrt(3.0) - 1.0);
      var s = (xin + yin) * F2;
      var i = Math.floor(xin + s);
      var j = Math.floor(yin + s);
      var G2 = (3.0 - Math.sqrt(3.0)) / 6.0;
      var t = (i + j) * G2;
      var X0 = i - t;
      var Y0 = j - t;
      var x0 = xin - X0;
      var y0 = yin - Y0;
      var i1, j1;
      if (x0 > y0) {
        i1 = 1;
        j1 = 0;
      } else {
        i1 = 0;
        j1 = 1;
      }
      var x1 = x0 - i1 + G2;
      var y1 = y0 - j1 + G2;
      var x2 = x0 - 1.0 + 2.0 * G2;
      var y2 = y0 - 1.0 + 2.0 * G2;
      var ii = i & 255;
      var jj = j & 255;
      var t0 = 0.5 - x0 * x0 - y0 * y0;
      if (t0 >= 0) {
        var gi0 = permMod12[ii + perm[jj]] * 3;
        t0 *= t0;
        n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0);
      }
      var t1 = 0.5 - x1 * x1 - y1 * y1;
      if (t1 >= 0) {
        var gi1 = permMod12[ii + i1 + perm[jj + j1]] * 3;
        t1 *= t1;
        n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1);
      }
      var t2 = 0.5 - x2 * x2 - y2 * y2;
      if (t2 >= 0) {
        var gi2 = permMod12[ii + 1 + perm[jj + 1]] * 3;
        t2 *= t2;
        n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2);
      }
      return 70.0 * (n0 + n1 + n2);
    },
  };

  if (typeof define !== 'undefined' && define.amd)
    define(function () {
      return SimplexNoise;
    });
  else if (typeof window !== 'undefined') window.SimplexNoise = SimplexNoise;
  else if (typeof module !== 'undefined') module.exports = SimplexNoise;
})();
