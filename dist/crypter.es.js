var k = Uint8Array, N = Uint16Array, nr = Uint32Array, vr = new k([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), fr = new k([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), hr = new k([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Ur = function(r, n) {
  for (var a = new N(31), e = 0; e < 31; ++e)
    a[e] = n += 1 << r[e - 1];
  for (var v = new nr(a[30]), e = 1; e < 30; ++e)
    for (var i = a[e]; i < a[e + 1]; ++i)
      v[i] = i - a[e] << 5 | e;
  return [a, v];
}, Br = Ur(vr, 2), Dr = Br[0], wr = Br[1];
Dr[28] = 258, wr[258] = 28;
var Nr = Ur(fr, 0), Rr = Nr[0], kr = Nr[1], cr = new N(32768);
for (var w = 0; w < 32768; ++w) {
  var $ = (w & 43690) >>> 1 | (w & 21845) << 1;
  $ = ($ & 52428) >>> 2 | ($ & 13107) << 2, $ = ($ & 61680) >>> 4 | ($ & 3855) << 4, cr[w] = (($ & 65280) >>> 8 | ($ & 255) << 8) >>> 1;
}
var Z = function(r, n, a) {
  for (var e = r.length, v = 0, i = new N(n); v < e; ++v)
    r[v] && ++i[r[v] - 1];
  var u = new N(n);
  for (v = 0; v < n; ++v)
    u[v] = u[v - 1] + i[v - 1] << 1;
  var h;
  if (a) {
    h = new N(1 << n);
    var l = 15 - n;
    for (v = 0; v < e; ++v)
      if (r[v])
        for (var o = v << 4 | r[v], f = n - r[v], g = u[r[v] - 1]++ << f, s = g | (1 << f) - 1; g <= s; ++g)
          h[cr[g] >>> l] = o;
  } else
    for (h = new N(e), v = 0; v < e; ++v)
      r[v] && (h[v] = cr[u[r[v] - 1]++] >>> 15 - r[v]);
  return h;
}, m = new k(288);
for (var w = 0; w < 144; ++w)
  m[w] = 8;
for (var w = 144; w < 256; ++w)
  m[w] = 9;
for (var w = 256; w < 280; ++w)
  m[w] = 7;
for (var w = 280; w < 288; ++w)
  m[w] = 8;
var ar = new k(32);
for (var w = 0; w < 32; ++w)
  ar[w] = 5;
var Yr = /* @__PURE__ */ Z(m, 9, 0), qr = /* @__PURE__ */ Z(m, 9, 1), Or = /* @__PURE__ */ Z(ar, 5, 0), Wr = /* @__PURE__ */ Z(ar, 5, 1), lr = function(r) {
  for (var n = r[0], a = 1; a < r.length; ++a)
    r[a] > n && (n = r[a]);
  return n;
}, I = function(r, n, a) {
  var e = n / 8 | 0;
  return (r[e] | r[e + 1] << 8) >> (n & 7) & a;
}, tr = function(r, n) {
  var a = n / 8 | 0;
  return (r[a] | r[a + 1] << 8 | r[a + 2] << 16) >> (n & 7);
}, Er = function(r) {
  return (r + 7) / 8 | 0;
}, ir = function(r, n, a) {
  (n == null || n < 0) && (n = 0), (a == null || a > r.length) && (a = r.length);
  var e = new (r.BYTES_PER_ELEMENT == 2 ? N : r.BYTES_PER_ELEMENT == 4 ? nr : k)(a - n);
  return e.set(r.subarray(n, a)), e;
}, Gr = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
], J = function(r, n, a) {
  var e = new Error(n || Gr[r]);
  if (e.code = r, Error.captureStackTrace && Error.captureStackTrace(e, J), !a)
    throw e;
  return e;
}, Hr = function(r, n, a) {
  var e = r.length;
  if (!e || a && a.f && !a.l)
    return n || new k(0);
  var v = !n || a, i = !a || a.i;
  a || (a = {}), n || (n = new k(e * 3));
  var u = function(er) {
    var p = n.length;
    if (er > p) {
      var j = new k(Math.max(p * 2, er));
      j.set(n), n = j;
    }
  }, h = a.f || 0, l = a.p || 0, o = a.b || 0, f = a.l, g = a.d, s = a.m, c = a.n, z = e * 8;
  do {
    if (!f) {
      h = I(r, l, 1);
      var S = I(r, l + 1, 3);
      if (l += 3, S)
        if (S == 1)
          f = qr, g = Wr, s = 9, c = 5;
        else if (S == 2) {
          var K = I(r, l, 31) + 257, G = I(r, l + 10, 15) + 4, P = K + I(r, l + 5, 31) + 1;
          l += 14;
          for (var T = new k(P), E = new k(19), t = 0; t < G; ++t)
            E[hr[t]] = I(r, l + t * 3, 7);
          l += G * 3;
          for (var Q = lr(E), U = (1 << Q) - 1, L = Z(E, Q, 1), t = 0; t < P; ) {
            var y = L[I(r, l, U)];
            l += y & 15;
            var C = y >>> 4;
            if (C < 16)
              T[t++] = C;
            else {
              var R = 0, A = 0;
              for (C == 16 ? (A = 3 + I(r, l, 3), l += 2, R = T[t - 1]) : C == 17 ? (A = 3 + I(r, l, 7), l += 3) : C == 18 && (A = 11 + I(r, l, 127), l += 7); A--; )
                T[t++] = R;
            }
          }
          var B = T.subarray(0, K), M = T.subarray(K);
          s = lr(B), c = lr(M), f = Z(B, s, 1), g = Z(M, c, 1);
        } else
          J(1);
      else {
        var C = Er(l) + 4, W = r[C - 4] | r[C - 3] << 8, b = C + W;
        if (b > e) {
          i && J(0);
          break;
        }
        v && u(o + W), n.set(r.subarray(C, b), o), a.b = o += W, a.p = l = b * 8, a.f = h;
        continue;
      }
      if (l > z) {
        i && J(0);
        break;
      }
    }
    v && u(o + 131072);
    for (var x = (1 << s) - 1, Y = (1 << c) - 1, O = l; ; O = l) {
      var R = f[tr(r, l) & x], V = R >>> 4;
      if (l += R & 15, l > z) {
        i && J(0);
        break;
      }
      if (R || J(2), V < 256)
        n[o++] = V;
      else if (V == 256) {
        O = l, f = null;
        break;
      } else {
        var q = V - 254;
        if (V > 264) {
          var t = V - 257, H = vr[t];
          q = I(r, l, (1 << H) - 1) + Dr[t], l += H;
        }
        var X = g[tr(r, l) & Y], D = X >>> 4;
        X || J(3), l += X & 15;
        var M = Rr[D];
        if (D > 3) {
          var H = fr[D];
          M += tr(r, l) & (1 << H) - 1, l += H;
        }
        if (l > z) {
          i && J(0);
          break;
        }
        v && u(o + 131072);
        for (var F = o + q; o < F; o += 4)
          n[o] = n[o - M], n[o + 1] = n[o + 1 - M], n[o + 2] = n[o + 2 - M], n[o + 3] = n[o + 3 - M];
        o = F;
      }
    }
    a.l = f, a.p = O, a.b = o, a.f = h, f && (h = 1, a.m = s, a.d = g, a.n = c);
  } while (!h);
  return o == n.length ? n : ir(n, 0, o);
}, _ = function(r, n, a) {
  a <<= n & 7;
  var e = n / 8 | 0;
  r[e] |= a, r[e + 1] |= a >>> 8;
}, d = function(r, n, a) {
  a <<= n & 7;
  var e = n / 8 | 0;
  r[e] |= a, r[e + 1] |= a >>> 8, r[e + 2] |= a >>> 16;
}, ur = function(r, n) {
  for (var a = [], e = 0; e < r.length; ++e)
    r[e] && a.push({ s: e, f: r[e] });
  var v = a.length, i = a.slice();
  if (!v)
    return [Mr, 0];
  if (v == 1) {
    var u = new k(a[0].s + 1);
    return u[a[0].s] = 1, [u, 1];
  }
  a.sort(function(P, T) {
    return P.f - T.f;
  }), a.push({ s: -1, f: 25001 });
  var h = a[0], l = a[1], o = 0, f = 1, g = 2;
  for (a[0] = { s: -1, f: h.f + l.f, l: h, r: l }; f != v - 1; )
    h = a[a[o].f < a[g].f ? o++ : g++], l = a[o != f && a[o].f < a[g].f ? o++ : g++], a[f++] = { s: -1, f: h.f + l.f, l: h, r: l };
  for (var s = i[0].s, e = 1; e < v; ++e)
    i[e].s > s && (s = i[e].s);
  var c = new N(s + 1), z = gr(a[f - 1], c, 0);
  if (z > n) {
    var e = 0, S = 0, C = z - n, W = 1 << C;
    for (i.sort(function(T, E) {
      return c[E.s] - c[T.s] || T.f - E.f;
    }); e < v; ++e) {
      var b = i[e].s;
      if (c[b] > n)
        S += W - (1 << z - c[b]), c[b] = n;
      else
        break;
    }
    for (S >>>= C; S > 0; ) {
      var K = i[e].s;
      c[K] < n ? S -= 1 << n - c[K]++ - 1 : ++e;
    }
    for (; e >= 0 && S; --e) {
      var G = i[e].s;
      c[G] == n && (--c[G], ++S);
    }
    z = n;
  }
  return [new k(c), z];
}, gr = function(r, n, a) {
  return r.s == -1 ? Math.max(gr(r.l, n, a + 1), gr(r.r, n, a + 1)) : n[r.s] = a;
}, yr = function(r) {
  for (var n = r.length; n && !r[--n]; )
    ;
  for (var a = new N(++n), e = 0, v = r[0], i = 1, u = function(l) {
    a[e++] = l;
  }, h = 1; h <= n; ++h)
    if (r[h] == v && h != n)
      ++i;
    else {
      if (!v && i > 2) {
        for (; i > 138; i -= 138)
          u(32754);
        i > 2 && (u(i > 10 ? i - 11 << 5 | 28690 : i - 3 << 5 | 12305), i = 0);
      } else if (i > 3) {
        for (u(v), --i; i > 6; i -= 6)
          u(8304);
        i > 2 && (u(i - 3 << 5 | 8208), i = 0);
      }
      for (; i--; )
        u(v);
      i = 1, v = r[h];
    }
  return [a.subarray(0, e), n];
}, rr = function(r, n) {
  for (var a = 0, e = 0; e < n.length; ++e)
    a += r[e] * n[e];
  return a;
}, sr = function(r, n, a) {
  var e = a.length, v = Er(n + 2);
  r[v] = e & 255, r[v + 1] = e >>> 8, r[v + 2] = r[v] ^ 255, r[v + 3] = r[v + 1] ^ 255;
  for (var i = 0; i < e; ++i)
    r[v + i + 4] = a[i];
  return (v + 4 + e) * 8;
}, Ar = function(r, n, a, e, v, i, u, h, l, o, f) {
  _(n, f++, a), ++v[256];
  for (var g = ur(v, 15), s = g[0], c = g[1], z = ur(i, 15), S = z[0], C = z[1], W = yr(s), b = W[0], K = W[1], G = yr(S), P = G[0], T = G[1], E = new N(19), t = 0; t < b.length; ++t)
    E[b[t] & 31]++;
  for (var t = 0; t < P.length; ++t)
    E[P[t] & 31]++;
  for (var Q = ur(E, 7), U = Q[0], L = Q[1], y = 19; y > 4 && !U[hr[y - 1]]; --y)
    ;
  var R = o + 5 << 3, A = rr(v, m) + rr(i, ar) + u, B = rr(v, s) + rr(i, S) + u + 14 + 3 * y + rr(E, U) + (2 * E[16] + 3 * E[17] + 7 * E[18]);
  if (R <= A && R <= B)
    return sr(n, f, r.subarray(l, l + o));
  var M, x, Y, O;
  if (_(n, f, 1 + (B < A)), f += 2, B < A) {
    M = Z(s, c, 0), x = s, Y = Z(S, C, 0), O = S;
    var V = Z(U, L, 0);
    _(n, f, K - 257), _(n, f + 5, T - 1), _(n, f + 10, y - 4), f += 14;
    for (var t = 0; t < y; ++t)
      _(n, f + 3 * t, U[hr[t]]);
    f += 3 * y;
    for (var q = [b, P], H = 0; H < 2; ++H)
      for (var X = q[H], t = 0; t < X.length; ++t) {
        var D = X[t] & 31;
        _(n, f, V[D]), f += U[D], D > 15 && (_(n, f, X[t] >>> 5 & 127), f += X[t] >>> 12);
      }
  } else
    M = Yr, x = m, Y = Or, O = ar;
  for (var t = 0; t < h; ++t)
    if (e[t] > 255) {
      var D = e[t] >>> 18 & 31;
      d(n, f, M[D + 257]), f += x[D + 257], D > 7 && (_(n, f, e[t] >>> 23 & 31), f += vr[D]);
      var F = e[t] & 31;
      d(n, f, Y[F]), f += O[F], F > 3 && (d(n, f, e[t] >>> 5 & 8191), f += fr[F]);
    } else
      d(n, f, M[e[t]]), f += x[e[t]];
  return d(n, f, M[256]), f + x[256];
}, Ir = /* @__PURE__ */ new nr([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), Mr = /* @__PURE__ */ new k(0), Jr = function(r, n, a, e, v, i) {
  var u = r.length, h = new k(e + u + 5 * (1 + Math.ceil(u / 7e3)) + v), l = h.subarray(e, h.length - v), o = 0;
  if (!n || u < 8)
    for (var f = 0; f <= u; f += 65535) {
      var g = f + 65535;
      g >= u && (l[o >> 3] = i), o = sr(l, o + 1, r.subarray(f, g));
    }
  else {
    for (var s = Ir[n - 1], c = s >>> 13, z = s & 8191, S = (1 << a) - 1, C = new N(32768), W = new N(S + 1), b = Math.ceil(a / 3), K = 2 * b, G = function(or) {
      return (r[or] ^ r[or + 1] << b ^ r[or + 2] << K) & S;
    }, P = new nr(25e3), T = new N(288), E = new N(32), t = 0, Q = 0, f = 0, U = 0, L = 0, y = 0; f < u; ++f) {
      var R = G(f), A = f & 32767, B = W[R];
      if (C[A] = B, W[R] = A, L <= f) {
        var M = u - f;
        if ((t > 7e3 || U > 24576) && M > 423) {
          o = Ar(r, l, 0, P, T, E, Q, U, y, f - y, o), U = t = Q = 0, y = f;
          for (var x = 0; x < 286; ++x)
            T[x] = 0;
          for (var x = 0; x < 30; ++x)
            E[x] = 0;
        }
        var Y = 2, O = 0, V = z, q = A - B & 32767;
        if (M > 2 && R == G(f - q))
          for (var H = Math.min(c, M) - 1, X = Math.min(32767, f), D = Math.min(258, M); q <= X && --V && A != B; ) {
            if (r[f + Y] == r[f + Y - q]) {
              for (var F = 0; F < D && r[f + F] == r[f + F - q]; ++F)
                ;
              if (F > Y) {
                if (Y = F, O = q, F > H)
                  break;
                for (var er = Math.min(q, F - 2), p = 0, x = 0; x < er; ++x) {
                  var j = f - q + x + 32768 & 32767, Pr = C[j], xr = j - Pr + 32768 & 32767;
                  xr > p && (p = xr, B = j);
                }
              }
            }
            A = B, B = C[A], q += A - B + 32768 & 32767;
          }
        if (O) {
          P[U++] = 268435456 | wr[Y] << 18 | kr[O];
          var Sr = wr[Y] & 31, Tr = kr[O] & 31;
          Q += vr[Sr] + fr[Tr], ++T[257 + Sr], ++E[Tr], L = f + Y, ++t;
        } else
          P[U++] = r[f], ++T[r[f]];
      }
    }
    o = Ar(r, l, i, P, T, E, Q, U, y, f - y, o), !i && o & 7 && (o = sr(l, o + 1, Mr));
  }
  return ir(h, 0, e + Er(o) + v);
}, Kr = function() {
  var r = 1, n = 0;
  return {
    p: function(a) {
      for (var e = r, v = n, i = a.length | 0, u = 0; u != i; ) {
        for (var h = Math.min(u + 2655, i); u < h; ++u)
          v += e += a[u];
        e = (e & 65535) + 15 * (e >> 16), v = (v & 65535) + 15 * (v >> 16);
      }
      r = e, n = v;
    },
    d: function() {
      return r %= 65521, n %= 65521, (r & 255) << 24 | r >>> 8 << 16 | (n & 255) << 8 | n >>> 8;
    }
  };
}, Qr = function(r, n, a, e, v) {
  return Jr(r, n.level == null ? 6 : n.level, n.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(r.length))) * 1.5) : 12 + n.mem, a, e, !v);
}, Vr = function(r, n, a) {
  for (; a; ++n)
    r[n] = a, a >>>= 8;
}, Xr = function(r, n) {
  var a = n.level, e = a == 0 ? 0 : a < 6 ? 1 : a == 9 ? 3 : 2;
  r[0] = 120, r[1] = e << 6 | (e ? 32 - 2 * e : 1);
}, Zr = function(r) {
  ((r[0] & 15) != 8 || r[0] >>> 4 > 7 || (r[0] << 8 | r[1]) % 31) && J(6, "invalid zlib data"), r[1] & 32 && J(6, "invalid zlib data: preset dictionaries not supported");
};
function _r(r, n) {
  n || (n = {});
  var a = Kr();
  a.p(r);
  var e = Qr(r, n, 2, 4);
  return Xr(e, n), Vr(e, e.length - 4, a.d()), e;
}
function $r(r, n) {
  return Hr((Zr(r), r.subarray(2, -4)), n);
}
var Fr = typeof TextEncoder < "u" && /* @__PURE__ */ new TextEncoder(), Cr = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), mr = 0;
try {
  Cr.decode(Mr, { stream: !0 }), mr = 1;
} catch {
}
var Lr = function(r) {
  for (var n = "", a = 0; ; ) {
    var e = r[a++], v = (e > 127) + (e > 223) + (e > 239);
    if (a + v > r.length)
      return [n, ir(r, a - 1)];
    v ? v == 3 ? (e = ((e & 15) << 18 | (r[a++] & 63) << 12 | (r[a++] & 63) << 6 | r[a++] & 63) - 65536, n += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023)) : v & 1 ? n += String.fromCharCode((e & 31) << 6 | r[a++] & 63) : n += String.fromCharCode((e & 15) << 12 | (r[a++] & 63) << 6 | r[a++] & 63) : n += String.fromCharCode(e);
  }
};
function zr(r, n) {
  if (n) {
    for (var a = new k(r.length), e = 0; e < r.length; ++e)
      a[e] = r.charCodeAt(e);
    return a;
  }
  if (Fr)
    return Fr.encode(r);
  for (var v = r.length, i = new k(r.length + (r.length >> 1)), u = 0, h = function(f) {
    i[u++] = f;
  }, e = 0; e < v; ++e) {
    if (u + 5 > i.length) {
      var l = new k(u + 8 + (v - e << 1));
      l.set(i), i = l;
    }
    var o = r.charCodeAt(e);
    o < 128 || n ? h(o) : o < 2048 ? (h(192 | o >> 6), h(128 | o & 63)) : o > 55295 && o < 57344 ? (o = 65536 + (o & 1023 << 10) | r.charCodeAt(++e) & 1023, h(240 | o >> 18), h(128 | o >> 12 & 63), h(128 | o >> 6 & 63), h(128 | o & 63)) : (h(224 | o >> 12), h(128 | o >> 6 & 63), h(128 | o & 63));
  }
  return ir(i, 0, u);
}
function br(r, n) {
  if (n) {
    for (var a = "", e = 0; e < r.length; e += 16384)
      a += String.fromCharCode.apply(null, r.subarray(e, e + 16384));
    return a;
  } else {
    if (Cr)
      return Cr.decode(r);
    var v = Lr(r), i = v[0], u = v[1];
    return u.length && J(8), i;
  }
}
const jr = () => ({ encrypt: (a) => {
  const e = zr(a), v = _r(e, { level: 9 }), i = br(v, !0);
  return btoa(i);
}, decrypt: (a) => {
  const e = atob(a);
  if (e.startsWith("x\xDA")) {
    const v = zr(e, !0), i = $r(v);
    return br(i);
  }
  return e;
} });
export {
  jr as useCrypter
};
