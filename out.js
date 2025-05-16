(() => {
  // node_modules/@cortex-js/compute-engine/dist/compute-engine.min.esm.js
  function xa(e12) {
    return e12 && typeof e12 == "object" && "because" in e12 && "value" in e12;
  }
  function ya(e12) {
    return e12 && typeof e12 == "object" && e12._tag === "boxed-rule";
  }
  var Ie = Math.cosh || function(e12) {
    return Math.abs(e12) < 1e-9 ? 1 - e12 : (Math.exp(e12) + Math.exp(-e12)) * 0.5;
  };
  var Ue = Math.sinh || function(e12) {
    return Math.abs(e12) < 1e-9 ? e12 : (Math.exp(e12) - Math.exp(-e12)) * 0.5;
  };
  var mc = function(e12) {
    var n = Math.PI / 4;
    if (-n > e12 || e12 > n) return Math.cos(e12) - 1;
    var i = e12 * e12;
    return i * (i * (i * (i * (i * (i * (i * (i / 20922789888e3 - 1 / 87178291200) + 1 / 479001600) - 1 / 3628800) + 1 / 40320) - 1 / 720) + 1 / 24) - 1 / 2);
  };
  var gc = function(e12, n) {
    var i = Math.abs(e12), t = Math.abs(n);
    return i < 3e3 && t < 3e3 ? Math.sqrt(i * i + t * t) : (i < t ? (i = t, t = e12 / n) : t = n / e12, i * Math.sqrt(1 + t * t));
  };
  var vi = function() {
    throw SyntaxError("Invalid Param");
  };
  function bo(e12, n) {
    var i = Math.abs(e12), t = Math.abs(n);
    return e12 === 0 ? Math.log(t) : n === 0 ? Math.log(i) : i < 3e3 && t < 3e3 ? Math.log(e12 * e12 + n * n) * 0.5 : (e12 = e12 / 2, n = n / 2, 0.5 * Math.log(e12 * e12 + n * n) + Math.LN2);
  }
  var hc = function(e12, n) {
    var i = { re: 0, im: 0 };
    if (e12 == null) i.re = i.im = 0;
    else if (n !== void 0) i.re = e12, i.im = n;
    else switch (typeof e12) {
      case "object":
        if ("im" in e12 && "re" in e12) i.re = e12.re, i.im = e12.im;
        else if ("abs" in e12 && "arg" in e12) {
          if (!Number.isFinite(e12.abs) && Number.isFinite(e12.arg)) return F.INFINITY;
          i.re = e12.abs * Math.cos(e12.arg), i.im = e12.abs * Math.sin(e12.arg);
        } else if ("r" in e12 && "phi" in e12) {
          if (!Number.isFinite(e12.r) && Number.isFinite(e12.phi)) return F.INFINITY;
          i.re = e12.r * Math.cos(e12.phi), i.im = e12.r * Math.sin(e12.phi);
        } else e12.length === 2 ? (i.re = e12[0], i.im = e12[1]) : vi();
        break;
      case "string":
        i.im = i.re = 0;
        var t = e12.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g), r = 1, o = 0;
        t === null && vi();
        for (var s = 0; s < t.length; s++) {
          var a = t[s];
          a === " " || a === "	" || a === `
` || (a === "+" ? r++ : a === "-" ? o++ : a === "i" || a === "I" ? (r + o === 0 && vi(), t[s + 1] !== " " && !isNaN(Number(t[s + 1])) ? (i.im += parseFloat((o % 2 ? "-" : "") + t[s + 1]), s++) : i.im += parseFloat((o % 2 ? "-" : "") + "1"), r = o = 0) : ((r + o === 0 || isNaN(Number(a))) && vi(), t[s + 1] === "i" || t[s + 1] === "I" ? (i.im += parseFloat((o % 2 ? "-" : "") + a), s++) : i.re += parseFloat((o % 2 ? "-" : "") + a), r = o = 0));
        }
        r + o > 0 && vi();
        break;
      case "number":
        i.im = 0, i.re = e12;
        break;
      default:
        vi();
    }
    return isNaN(i.re) || isNaN(i.im), i;
  };
  var F = class e {
    constructor(n, i) {
      this.re = 0, this.im = 0;
      var t = hc(n, i);
      this.re = t.re, this.im = t.im;
    }
    sign() {
      var n = this.abs();
      return new e(this.re / n, this.im / n);
    }
    add(n, i) {
      var t = new e(n, i);
      return this.isInfinite() && t.isInfinite() ? e.NAN : this.isInfinite() || t.isInfinite() ? e.INFINITY : new e(this.re + t.re, this.im + t.im);
    }
    sub(n, i) {
      var t = new e(n, i);
      return this.isInfinite() && t.isInfinite() ? e.NAN : this.isInfinite() || t.isInfinite() ? e.INFINITY : new e(this.re - t.re, this.im - t.im);
    }
    mul(n, i) {
      var t = new e(n, i);
      return this.isInfinite() && t.isZero() || this.isZero() && t.isInfinite() ? e.NAN : this.isInfinite() || t.isInfinite() ? e.INFINITY : t.im === 0 && this.im === 0 ? new e(this.re * t.re, 0) : new e(this.re * t.re - this.im * t.im, this.re * t.im + this.im * t.re);
    }
    div(n, i) {
      var t = new e(n, i);
      if (this.isZero() && t.isZero() || this.isInfinite() && t.isInfinite()) return e.NAN;
      if (this.isInfinite() || t.isZero()) return e.INFINITY;
      if (this.isZero() || t.isInfinite()) return e.ZERO;
      n = this.re, i = this.im;
      var r = t.re, o = t.im, s, a;
      return o === 0 ? new e(n / r, i / r) : Math.abs(r) < Math.abs(o) ? (a = r / o, s = r * a + o, new e((n * a + i) / s, (i * a - n) / s)) : (a = o / r, s = o * a + r, new e((n + i * a) / s, (i - n * a) / s));
    }
    pow(n, i) {
      var t = new e(n, i);
      if (n = this.re, i = this.im, t.isZero()) return e.ONE;
      if (t.im === 0) {
        if (i === 0 && n > 0) return new e(Math.pow(n, t.re), 0);
        if (n === 0) switch ((t.re % 4 + 4) % 4) {
          case 0:
            return new e(Math.pow(i, t.re), 0);
          case 1:
            return new e(0, Math.pow(i, t.re));
          case 2:
            return new e(-Math.pow(i, t.re), 0);
          case 3:
            return new e(0, -Math.pow(i, t.re));
        }
      }
      if (n === 0 && i === 0 && t.re > 0 && t.im >= 0) return e.ZERO;
      var r = Math.atan2(i, n), o = bo(n, i);
      return n = Math.exp(t.re * o - t.im * r), i = t.im * o + t.re * r, new e(n * Math.cos(i), n * Math.sin(i));
    }
    sqrt() {
      var n = this.re, i = this.im, t = this.abs(), r, o;
      if (n >= 0) {
        if (i === 0) return new e(Math.sqrt(n), 0);
        r = 0.5 * Math.sqrt(2 * (t + n));
      } else r = Math.abs(i) / Math.sqrt(2 * (t - n));
      return n <= 0 ? o = 0.5 * Math.sqrt(2 * (t - n)) : o = Math.abs(i) / Math.sqrt(2 * (t + n)), new e(r, i < 0 ? -o : o);
    }
    exp() {
      var n = Math.exp(this.re);
      return this.im, new e(n * Math.cos(this.im), n * Math.sin(this.im));
    }
    expm1() {
      var n = this.re, i = this.im;
      return new e(Math.expm1(n) * Math.cos(i) + mc(i), Math.exp(n) * Math.sin(i));
    }
    log() {
      var n = this.re, i = this.im;
      return i === 0 && n > 0, new e(bo(n, i), Math.atan2(i, n));
    }
    abs() {
      return gc(this.re, this.im);
    }
    arg() {
      return Math.atan2(this.im, this.re);
    }
    sin() {
      var n = this.re, i = this.im;
      return new e(Math.sin(n) * Ie(i), Math.cos(n) * Ue(i));
    }
    cos() {
      var n = this.re, i = this.im;
      return new e(Math.cos(n) * Ie(i), -Math.sin(n) * Ue(i));
    }
    tan() {
      var n = 2 * this.re, i = 2 * this.im, t = Math.cos(n) + Ie(i);
      return new e(Math.sin(n) / t, Ue(i) / t);
    }
    cot() {
      var n = 2 * this.re, i = 2 * this.im, t = Math.cos(n) - Ie(i);
      return new e(-Math.sin(n) / t, Ue(i) / t);
    }
    sec() {
      var n = this.re, i = this.im, t = 0.5 * Ie(2 * i) + 0.5 * Math.cos(2 * n);
      return new e(Math.cos(n) * Ie(i) / t, Math.sin(n) * Ue(i) / t);
    }
    csc() {
      var n = this.re, i = this.im, t = 0.5 * Ie(2 * i) - 0.5 * Math.cos(2 * n);
      return new e(Math.sin(n) * Ie(i) / t, -Math.cos(n) * Ue(i) / t);
    }
    asin() {
      var n = this.re, i = this.im, t = new e(i * i - n * n + 1, -2 * n * i).sqrt(), r = new e(t.re - i, t.im + n).log();
      return new e(r.im, -r.re);
    }
    acos() {
      var n = this.re, i = this.im, t = new e(i * i - n * n + 1, -2 * n * i).sqrt(), r = new e(t.re - i, t.im + n).log();
      return new e(Math.PI / 2 - r.im, r.re);
    }
    atan() {
      var n = this.re, i = this.im;
      if (n === 0) {
        if (i === 1) return new e(0, 1 / 0);
        if (i === -1) return new e(0, -1 / 0);
      }
      var t = n * n + (1 - i) * (1 - i), r = new e((1 - i * i - n * n) / t, -2 * n / t).log();
      return new e(-0.5 * r.im, 0.5 * r.re);
    }
    acot() {
      var n = this.re, i = this.im;
      if (i === 0) return new e(Math.atan2(1, n), 0);
      var t = n * n + i * i;
      return t !== 0 ? new e(n / t, -i / t).atan() : new e(n !== 0 ? n / 0 : 0, i !== 0 ? -i / 0 : 0).atan();
    }
    asec() {
      var n = this.re, i = this.im;
      if (n === 0 && i === 0) return new e(0, 1 / 0);
      var t = n * n + i * i;
      return t !== 0 ? new e(n / t, -i / t).acos() : new e(n !== 0 ? n / 0 : 0, i !== 0 ? -i / 0 : 0).acos();
    }
    acsc() {
      var n = this.re, i = this.im;
      if (n === 0 && i === 0) return new e(Math.PI / 2, 1 / 0);
      var t = n * n + i * i;
      return t !== 0 ? new e(n / t, -i / t).asin() : new e(n !== 0 ? n / 0 : 0, i !== 0 ? -i / 0 : 0).asin();
    }
    sinh() {
      var n = this.re, i = this.im;
      return new e(Ue(n) * Math.cos(i), Ie(n) * Math.sin(i));
    }
    cosh() {
      var n = this.re, i = this.im;
      return new e(Ie(n) * Math.cos(i), Ue(n) * Math.sin(i));
    }
    tanh() {
      var n = 2 * this.re, i = 2 * this.im, t = Ie(n) + Math.cos(i);
      return new e(Ue(n) / t, Math.sin(i) / t);
    }
    coth() {
      var n = 2 * this.re, i = 2 * this.im, t = Ie(n) - Math.cos(i);
      return new e(Ue(n) / t, -Math.sin(i) / t);
    }
    csch() {
      var n = this.re, i = this.im, t = Math.cos(2 * i) - Ie(2 * n);
      return new e(-2 * Ue(n) * Math.cos(i) / t, 2 * Ie(n) * Math.sin(i) / t);
    }
    sech() {
      var n = this.re, i = this.im, t = Math.cos(2 * i) + Ie(2 * n);
      return new e(2 * Ie(n) * Math.cos(i) / t, -2 * Ue(n) * Math.sin(i) / t);
    }
    asinh() {
      var n = this.im;
      this.im = -this.re, this.re = n;
      var i = this.asin();
      return this.re = -this.im, this.im = n, n = i.re, i.re = -i.im, i.im = n, i;
    }
    acosh() {
      var n = this.acos();
      if (n.im <= 0) {
        var i = n.re;
        n.re = -n.im, n.im = i;
      } else {
        var i = n.im;
        n.im = -n.re, n.re = i;
      }
      return n;
    }
    atanh() {
      var n = this.re, i = this.im, t = n > 1 && i === 0, r = 1 - n, o = 1 + n, s = r * r + i * i, a = s !== 0 ? new e((o * r - i * i) / s, (i * r + o * i) / s) : new e(n !== -1 ? n / 0 : 0, i !== 0 ? i / 0 : 0), u = a.re;
      return a.re = bo(a.re, a.im) / 2, a.im = Math.atan2(a.im, u) / 2, t && (a.im = -a.im), a;
    }
    acoth() {
      var n = this.re, i = this.im;
      if (n === 0 && i === 0) return new e(0, Math.PI / 2);
      var t = n * n + i * i;
      return t !== 0 ? new e(n / t, -i / t).atanh() : new e(n !== 0 ? n / 0 : 0, i !== 0 ? -i / 0 : 0).atanh();
    }
    acsch() {
      var n = this.re, i = this.im;
      if (i === 0) return new e(n !== 0 ? Math.log(n + Math.sqrt(n * n + 1)) : 1 / 0, 0);
      var t = n * n + i * i;
      return t !== 0 ? new e(n / t, -i / t).asinh() : new e(n !== 0 ? n / 0 : 0, i !== 0 ? -i / 0 : 0).asinh();
    }
    asech() {
      var n = this.re, i = this.im;
      if (this.isZero()) return e.INFINITY;
      var t = n * n + i * i;
      return t !== 0 ? new e(n / t, -i / t).acosh() : new e(n !== 0 ? n / 0 : 0, i !== 0 ? -i / 0 : 0).acosh();
    }
    inverse() {
      if (this.isZero()) return e.INFINITY;
      if (this.isInfinite()) return e.ZERO;
      var n = this.re, i = this.im, t = n * n + i * i;
      return new e(n / t, -i / t);
    }
    conjugate() {
      return new e(this.re, -this.im);
    }
    neg() {
      return new e(-this.re, -this.im);
    }
    ceil(n) {
      return n = Math.pow(10, n || 0), new e(Math.ceil(this.re * n) / n, Math.ceil(this.im * n) / n);
    }
    floor(n) {
      return n = Math.pow(10, n || 0), new e(Math.floor(this.re * n) / n, Math.floor(this.im * n) / n);
    }
    round(n) {
      return n = Math.pow(10, n || 0), new e(Math.round(this.re * n) / n, Math.round(this.im * n) / n);
    }
    equals(n, i) {
      var t = new e(n, i);
      return Math.abs(t.re - this.re) <= e.EPSILON && Math.abs(t.im - this.im) <= e.EPSILON;
    }
    clone() {
      return new e(this.re, this.im);
    }
    toString() {
      var n = this.re, i = this.im, t = "";
      return this.isNaN() ? "NaN" : this.isInfinite() ? "Infinity" : (Math.abs(n) < e.EPSILON && (n = 0), Math.abs(i) < e.EPSILON && (i = 0), i === 0 ? t + n : (n !== 0 ? (t += n, t += " ", i < 0 ? (i = -i, t += "-") : t += "+", t += " ") : i < 0 && (i = -i, t += "-"), i !== 1 && (t += i), t + "i"));
    }
    toVector() {
      return [this.re, this.im];
    }
    valueOf() {
      return this.im === 0 ? this.re : null;
    }
    isNaN() {
      return isNaN(this.re) || isNaN(this.im);
    }
    isZero() {
      return this.im === 0 && this.re === 0;
    }
    isFinite() {
      return isFinite(this.re) && isFinite(this.im);
    }
    isInfinite() {
      return !(this.isNaN() || this.isFinite());
    }
  };
  F.ZERO = new F(0, 0);
  F.ONE = new F(1, 0);
  F.I = new F(0, 1);
  F.PI = new F(Math.PI, 0);
  F.E = new F(Math.E, 0);
  F.INFINITY = new F(1 / 0, 1 / 0);
  F.NAN = new F(NaN, NaN);
  F.EPSILON = 1e-15;
  var Si = 9e15;
  var Fn = 1e9;
  var Eo = "0123456789abcdef";
  var sr = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
  var ar = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
  var No = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -Si, maxE: Si, crypto: false };
  var va;
  var Sn;
  var k = true;
  var lr = "[DecimalError] ";
  var Ln = lr + "Invalid argument: ";
  var Sa = lr + "Precision limit exceeded";
  var Ta = lr + "crypto unavailable";
  var _a = "[object Decimal]";
  var Be = Math.floor;
  var me = Math.pow;
  var xc = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
  var yc = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
  var bc = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
  var Ia = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
  var rn = 1e7;
  var I = 7;
  var Ec = 9007199254740991;
  var Nc = sr.length - 1;
  var vo = ar.length - 1;
  var x = { toStringTag: _a };
  x.absoluteValue = x.abs = function() {
    var e12 = new this.constructor(this);
    return e12.s < 0 && (e12.s = 1), S(e12);
  };
  x.ceil = function() {
    return S(new this.constructor(this), this.e + 1, 2);
  };
  x.clampedTo = x.clamp = function(e12, n) {
    var i, t = this, r = t.constructor;
    if (e12 = new r(e12), n = new r(n), !e12.s || !n.s) return new r(NaN);
    if (e12.gt(n)) throw Error(Ln + n);
    return i = t.cmp(e12), i < 0 ? e12 : t.cmp(n) > 0 ? n : new r(t);
  };
  x.comparedTo = x.cmp = function(e12) {
    var n, i, t, r, o = this, s = o.d, a = (e12 = new o.constructor(e12)).d, u = o.s, l = e12.s;
    if (!s || !a) return !u || !l ? NaN : u !== l ? u : s === a ? 0 : !s ^ u < 0 ? 1 : -1;
    if (!s[0] || !a[0]) return s[0] ? u : a[0] ? -l : 0;
    if (u !== l) return u;
    if (o.e !== e12.e) return o.e > e12.e ^ u < 0 ? 1 : -1;
    for (t = s.length, r = a.length, n = 0, i = t < r ? t : r; n < i; ++n) if (s[n] !== a[n]) return s[n] > a[n] ^ u < 0 ? 1 : -1;
    return t === r ? 0 : t > r ^ u < 0 ? 1 : -1;
  };
  x.cosine = x.cos = function() {
    var e12, n, i = this, t = i.constructor;
    return i.d ? i.d[0] ? (e12 = t.precision, n = t.rounding, t.precision = e12 + Math.max(i.e, i.sd()) + I, t.rounding = 1, i = vc(t, Ra(t, i)), t.precision = e12, t.rounding = n, S(Sn == 2 || Sn == 3 ? i.neg() : i, e12, n, true)) : new t(1) : new t(NaN);
  };
  x.cubeRoot = x.cbrt = function() {
    var e12, n, i, t, r, o, s, a, u, l, f = this, c = f.constructor;
    if (!f.isFinite() || f.isZero()) return new c(f);
    for (k = false, o = f.s * me(f.s * f, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (i = ve(f.d), e12 = f.e, (o = (e12 - i.length + 1) % 3) && (i += o == 1 || o == -2 ? "0" : "00"), o = me(i, 1 / 3), e12 = Be((e12 + 1) / 3) - (e12 % 3 == (e12 < 0 ? -1 : 2)), o == 1 / 0 ? i = "5e" + e12 : (i = o.toExponential(), i = i.slice(0, i.indexOf("e") + 1) + e12), t = new c(i), t.s = f.s) : t = new c(o.toString()), s = (e12 = c.precision) + 3; ; ) if (a = t, u = a.times(a).times(a), l = u.plus(f), t = U(l.plus(f).times(a), l.plus(u), s + 2, 1), ve(a.d).slice(0, s) === (i = ve(t.d)).slice(0, s)) if (i = i.slice(s - 3, s + 1), i == "9999" || !r && i == "4999") {
      if (!r && (S(a, e12 + 1, 0), a.times(a).times(a).eq(f))) {
        t = a;
        break;
      }
      s += 4, r = 1;
    } else {
      (!+i || !+i.slice(1) && i.charAt(0) == "5") && (S(t, e12 + 1, 1), n = !t.times(t).times(t).eq(f));
      break;
    }
    return k = true, S(t, e12, c.rounding, n);
  };
  x.decimalPlaces = x.dp = function() {
    var e12, n = this.d, i = NaN;
    if (n) {
      if (e12 = n.length - 1, i = (e12 - Be(this.e / I)) * I, e12 = n[e12], e12) for (; e12 % 10 == 0; e12 /= 10) i--;
      i < 0 && (i = 0);
    }
    return i;
  };
  x.dividedBy = x.div = function(e12) {
    return U(this, new this.constructor(e12));
  };
  x.dividedToIntegerBy = x.divToInt = function(e12) {
    var n = this, i = n.constructor;
    return S(U(n, new i(e12), 0, 1, 1), i.precision, i.rounding);
  };
  x.equals = x.eq = function(e12) {
    return this.cmp(e12) === 0;
  };
  x.floor = function() {
    return S(new this.constructor(this), this.e + 1, 3);
  };
  x.greaterThan = x.gt = function(e12) {
    return this.cmp(e12) > 0;
  };
  x.greaterThanOrEqualTo = x.gte = function(e12) {
    var n = this.cmp(e12);
    return n == 1 || n === 0;
  };
  x.hyperbolicCosine = x.cosh = function() {
    var e12, n, i, t, r, o = this, s = o.constructor, a = new s(1);
    if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN);
    if (o.isZero()) return a;
    i = s.precision, t = s.rounding, s.precision = i + Math.max(o.e, o.sd()) + 4, s.rounding = 1, r = o.d.length, r < 32 ? (e12 = Math.ceil(r / 3), n = (1 / cr(4, e12)).toString()) : (e12 = 16, n = "2.3283064365386962890625e-10"), o = Ti(s, 1, o.times(n), new s(1), true);
    for (var u, l = e12, f = new s(8); l--; ) u = o.times(o), o = a.minus(u.times(f.minus(u.times(f))));
    return S(o, s.precision = i, s.rounding = t, true);
  };
  x.hyperbolicSine = x.sinh = function() {
    var e12, n, i, t, r = this, o = r.constructor;
    if (!r.isFinite() || r.isZero()) return new o(r);
    if (n = o.precision, i = o.rounding, o.precision = n + Math.max(r.e, r.sd()) + 4, o.rounding = 1, t = r.d.length, t < 3) r = Ti(o, 2, r, r, true);
    else {
      e12 = 1.4 * Math.sqrt(t), e12 = e12 > 16 ? 16 : e12 | 0, r = r.times(1 / cr(5, e12)), r = Ti(o, 2, r, r, true);
      for (var s, a = new o(5), u = new o(16), l = new o(20); e12--; ) s = r.times(r), r = r.times(a.plus(s.times(u.times(s).plus(l))));
    }
    return o.precision = n, o.rounding = i, S(r, n, i, true);
  };
  x.hyperbolicTangent = x.tanh = function() {
    var e12, n, i = this, t = i.constructor;
    return i.isFinite() ? i.isZero() ? new t(i) : (e12 = t.precision, n = t.rounding, t.precision = e12 + 7, t.rounding = 1, U(i.sinh(), i.cosh(), t.precision = e12, t.rounding = n)) : new t(i.s);
  };
  x.inverseCosine = x.acos = function() {
    var e12, n = this, i = n.constructor, t = n.abs().cmp(1), r = i.precision, o = i.rounding;
    return t !== -1 ? t === 0 ? n.isNeg() ? tn(i, r, o) : new i(0) : new i(NaN) : n.isZero() ? tn(i, r + 4, o).times(0.5) : (i.precision = r + 6, i.rounding = 1, n = n.asin(), e12 = tn(i, r + 4, o).times(0.5), i.precision = r, i.rounding = o, e12.minus(n));
  };
  x.inverseHyperbolicCosine = x.acosh = function() {
    var e12, n, i = this, t = i.constructor;
    return i.lte(1) ? new t(i.eq(1) ? 0 : NaN) : i.isFinite() ? (e12 = t.precision, n = t.rounding, t.precision = e12 + Math.max(Math.abs(i.e), i.sd()) + 4, t.rounding = 1, k = false, i = i.times(i).minus(1).sqrt().plus(i), k = true, t.precision = e12, t.rounding = n, i.ln()) : new t(i);
  };
  x.inverseHyperbolicSine = x.asinh = function() {
    var e12, n, i = this, t = i.constructor;
    return !i.isFinite() || i.isZero() ? new t(i) : (e12 = t.precision, n = t.rounding, t.precision = e12 + 2 * Math.max(Math.abs(i.e), i.sd()) + 6, t.rounding = 1, k = false, i = i.times(i).plus(1).sqrt().plus(i), k = true, t.precision = e12, t.rounding = n, i.ln());
  };
  x.inverseHyperbolicTangent = x.atanh = function() {
    var e12, n, i, t, r = this, o = r.constructor;
    return r.isFinite() ? r.e >= 0 ? new o(r.abs().eq(1) ? r.s / 0 : r.isZero() ? r : NaN) : (e12 = o.precision, n = o.rounding, t = r.sd(), Math.max(t, e12) < 2 * -r.e - 1 ? S(new o(r), e12, n, true) : (o.precision = i = t - r.e, r = U(r.plus(1), new o(1).minus(r), i + e12, 1), o.precision = e12 + 4, o.rounding = 1, r = r.ln(), o.precision = e12, o.rounding = n, r.times(0.5))) : new o(NaN);
  };
  x.inverseSine = x.asin = function() {
    var e12, n, i, t, r = this, o = r.constructor;
    return r.isZero() ? new o(r) : (n = r.abs().cmp(1), i = o.precision, t = o.rounding, n !== -1 ? n === 0 ? (e12 = tn(o, i + 4, t).times(0.5), e12.s = r.s, e12) : new o(NaN) : (o.precision = i + 6, o.rounding = 1, r = r.div(new o(1).minus(r.times(r)).sqrt().plus(1)).atan(), o.precision = i, o.rounding = t, r.times(2)));
  };
  x.inverseTangent = x.atan = function() {
    var e12, n, i, t, r, o, s, a, u, l = this, f = l.constructor, c = f.precision, d = f.rounding;
    if (l.isFinite()) {
      if (l.isZero()) return new f(l);
      if (l.abs().eq(1) && c + 4 <= vo) return s = tn(f, c + 4, d).times(0.25), s.s = l.s, s;
    } else {
      if (!l.s) return new f(NaN);
      if (c + 4 <= vo) return s = tn(f, c + 4, d).times(0.5), s.s = l.s, s;
    }
    for (f.precision = a = c + 10, f.rounding = 1, i = Math.min(28, a / I + 2 | 0), e12 = i; e12; --e12) l = l.div(l.times(l).plus(1).sqrt().plus(1));
    for (k = false, n = Math.ceil(a / I), t = 1, u = l.times(l), s = new f(l), r = l; e12 !== -1; ) if (r = r.times(u), o = s.minus(r.div(t += 2)), r = r.times(u), s = o.plus(r.div(t += 2)), s.d[n] !== void 0) for (e12 = n; s.d[e12] === o.d[e12] && e12--; ) ;
    return i && (s = s.times(2 << i - 1)), k = true, S(s, f.precision = c, f.rounding = d, true);
  };
  x.isFinite = function() {
    return !!this.d;
  };
  x.isInteger = x.isInt = function() {
    return !!this.d && Be(this.e / I) > this.d.length - 2;
  };
  x.isNaN = function() {
    return !this.s;
  };
  x.isNegative = x.isNeg = function() {
    return this.s < 0;
  };
  x.isPositive = x.isPos = function() {
    return this.s > 0;
  };
  x.isZero = function() {
    return !!this.d && this.d[0] === 0;
  };
  x.lessThan = x.lt = function(e12) {
    return this.cmp(e12) < 0;
  };
  x.lessThanOrEqualTo = x.lte = function(e12) {
    return this.cmp(e12) < 1;
  };
  x.logarithm = x.log = function(e12) {
    var n, i, t, r, o, s, a, u, l = this, f = l.constructor, c = f.precision, d = f.rounding, m = 5;
    if (e12 == null) e12 = new f(10), n = true;
    else {
      if (e12 = new f(e12), i = e12.d, e12.s < 0 || !i || !i[0] || e12.eq(1)) return new f(NaN);
      n = e12.eq(10);
    }
    if (i = l.d, l.s < 0 || !i || !i[0] || l.eq(1)) return new f(i && !i[0] ? -1 / 0 : l.s != 1 ? NaN : i ? 0 : 1 / 0);
    if (n) if (i.length > 1) o = true;
    else {
      for (r = i[0]; r % 10 === 0; ) r /= 10;
      o = r !== 1;
    }
    if (k = false, a = c + m, s = On(l, a), t = n ? ur(f, a + 10) : On(e12, a), u = U(s, t, a, 1), mt(u.d, r = c, d)) do
      if (a += 10, s = On(l, a), t = n ? ur(f, a + 10) : On(e12, a), u = U(s, t, a, 1), !o) {
        +ve(u.d).slice(r + 1, r + 15) + 1 == 1e14 && (u = S(u, c + 1, 0));
        break;
      }
    while (mt(u.d, r += 10, d));
    return k = true, S(u, c, d);
  };
  x.minus = x.sub = function(e12) {
    var n, i, t, r, o, s, a, u, l, f, c, d, m = this, b = m.constructor;
    if (e12 = new b(e12), !m.d || !e12.d) return !m.s || !e12.s ? e12 = new b(NaN) : m.d ? e12.s = -e12.s : e12 = new b(e12.d || m.s !== e12.s ? m : NaN), e12;
    if (m.s != e12.s) return e12.s = -e12.s, m.plus(e12);
    if (l = m.d, d = e12.d, a = b.precision, u = b.rounding, !l[0] || !d[0]) {
      if (d[0]) e12.s = -e12.s;
      else if (l[0]) e12 = new b(m);
      else return new b(u === 3 ? -0 : 0);
      return k ? S(e12, a, u) : e12;
    }
    if (i = Be(e12.e / I), f = Be(m.e / I), l = l.slice(), o = f - i, o) {
      for (c = o < 0, c ? (n = l, o = -o, s = d.length) : (n = d, i = f, s = l.length), t = Math.max(Math.ceil(a / I), s) + 2, o > t && (o = t, n.length = 1), n.reverse(), t = o; t--; ) n.push(0);
      n.reverse();
    } else {
      for (t = l.length, s = d.length, c = t < s, c && (s = t), t = 0; t < s; t++) if (l[t] != d[t]) {
        c = l[t] < d[t];
        break;
      }
      o = 0;
    }
    for (c && (n = l, l = d, d = n, e12.s = -e12.s), s = l.length, t = d.length - s; t > 0; --t) l[s++] = 0;
    for (t = d.length; t > o; ) {
      if (l[--t] < d[t]) {
        for (r = t; r && l[--r] === 0; ) l[r] = rn - 1;
        --l[r], l[t] += rn;
      }
      l[t] -= d[t];
    }
    for (; l[--s] === 0; ) l.pop();
    for (; l[0] === 0; l.shift()) --i;
    return l[0] ? (e12.d = l, e12.e = fr(l, i), k ? S(e12, a, u) : e12) : new b(u === 3 ? -0 : 0);
  };
  x.modulo = x.mod = function(e12) {
    var n, i = this, t = i.constructor;
    return e12 = new t(e12), !i.d || !e12.s || e12.d && !e12.d[0] ? new t(NaN) : !e12.d || i.d && !i.d[0] ? S(new t(i), t.precision, t.rounding) : (k = false, t.modulo == 9 ? (n = U(i, e12.abs(), 0, 3, 1), n.s *= e12.s) : n = U(i, e12, 0, t.modulo, 1), n = n.times(e12), k = true, i.minus(n));
  };
  x.naturalExponential = x.exp = function() {
    return So(this);
  };
  x.naturalLogarithm = x.ln = function() {
    return On(this);
  };
  x.negated = x.neg = function() {
    var e12 = new this.constructor(this);
    return e12.s = -e12.s, S(e12);
  };
  x.plus = x.add = function(e12) {
    var n, i, t, r, o, s, a, u, l, f, c = this, d = c.constructor;
    if (e12 = new d(e12), !c.d || !e12.d) return !c.s || !e12.s ? e12 = new d(NaN) : c.d || (e12 = new d(e12.d || c.s === e12.s ? c : NaN)), e12;
    if (c.s != e12.s) return e12.s = -e12.s, c.minus(e12);
    if (l = c.d, f = e12.d, a = d.precision, u = d.rounding, !l[0] || !f[0]) return f[0] || (e12 = new d(c)), k ? S(e12, a, u) : e12;
    if (o = Be(c.e / I), t = Be(e12.e / I), l = l.slice(), r = o - t, r) {
      for (r < 0 ? (i = l, r = -r, s = f.length) : (i = f, t = o, s = l.length), o = Math.ceil(a / I), s = o > s ? o + 1 : s + 1, r > s && (r = s, i.length = 1), i.reverse(); r--; ) i.push(0);
      i.reverse();
    }
    for (s = l.length, r = f.length, s - r < 0 && (r = s, i = f, f = l, l = i), n = 0; r; ) n = (l[--r] = l[r] + f[r] + n) / rn | 0, l[r] %= rn;
    for (n && (l.unshift(n), ++t), s = l.length; l[--s] == 0; ) l.pop();
    return e12.d = l, e12.e = fr(l, t), k ? S(e12, a, u) : e12;
  };
  x.precision = x.sd = function(e12) {
    var n, i = this;
    if (e12 !== void 0 && e12 !== !!e12 && e12 !== 1 && e12 !== 0) throw Error(Ln + e12);
    return i.d ? (n = Ba(i.d), e12 && i.e + 1 > n && (n = i.e + 1)) : n = NaN, n;
  };
  x.round = function() {
    var e12 = this, n = e12.constructor;
    return S(new n(e12), e12.e + 1, n.rounding);
  };
  x.sine = x.sin = function() {
    var e12, n, i = this, t = i.constructor;
    return i.isFinite() ? i.isZero() ? new t(i) : (e12 = t.precision, n = t.rounding, t.precision = e12 + Math.max(i.e, i.sd()) + I, t.rounding = 1, i = Tc(t, Ra(t, i)), t.precision = e12, t.rounding = n, S(Sn > 2 ? i.neg() : i, e12, n, true)) : new t(NaN);
  };
  x.squareRoot = x.sqrt = function() {
    var e12, n, i, t, r, o, s = this, a = s.d, u = s.e, l = s.s, f = s.constructor;
    if (l !== 1 || !a || !a[0]) return new f(!l || l < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
    for (k = false, l = Math.sqrt(+s), l == 0 || l == 1 / 0 ? (n = ve(a), (n.length + u) % 2 == 0 && (n += "0"), l = Math.sqrt(n), u = Be((u + 1) / 2) - (u < 0 || u % 2), l == 1 / 0 ? n = "5e" + u : (n = l.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + u), t = new f(n)) : t = new f(l.toString()), i = (u = f.precision) + 3; ; ) if (o = t, t = o.plus(U(s, o, i + 2, 1)).times(0.5), ve(o.d).slice(0, i) === (n = ve(t.d)).slice(0, i)) if (n = n.slice(i - 3, i + 1), n == "9999" || !r && n == "4999") {
      if (!r && (S(o, u + 1, 0), o.times(o).eq(s))) {
        t = o;
        break;
      }
      i += 4, r = 1;
    } else {
      (!+n || !+n.slice(1) && n.charAt(0) == "5") && (S(t, u + 1, 1), e12 = !t.times(t).eq(s));
      break;
    }
    return k = true, S(t, u, f.rounding, e12);
  };
  x.tangent = x.tan = function() {
    var e12, n, i = this, t = i.constructor;
    return i.isFinite() ? i.isZero() ? new t(i) : (e12 = t.precision, n = t.rounding, t.precision = e12 + 10, t.rounding = 1, i = i.sin(), i.s = 1, i = U(i, new t(1).minus(i.times(i)).sqrt(), e12 + 10, 0), t.precision = e12, t.rounding = n, S(Sn == 2 || Sn == 4 ? i.neg() : i, e12, n, true)) : new t(NaN);
  };
  x.times = x.mul = function(e12) {
    var n, i, t, r, o, s, a, u, l, f = this, c = f.constructor, d = f.d, m = (e12 = new c(e12)).d;
    if (e12.s *= f.s, !d || !d[0] || !m || !m[0]) return new c(!e12.s || d && !d[0] && !m || m && !m[0] && !d ? NaN : !d || !m ? e12.s / 0 : e12.s * 0);
    for (i = Be(f.e / I) + Be(e12.e / I), u = d.length, l = m.length, u < l && (o = d, d = m, m = o, s = u, u = l, l = s), o = [], s = u + l, t = s; t--; ) o.push(0);
    for (t = l; --t >= 0; ) {
      for (n = 0, r = u + t; r > t; ) a = o[r] + m[t] * d[r - t - 1] + n, o[r--] = a % rn | 0, n = a / rn | 0;
      o[r] = (o[r] + n) % rn | 0;
    }
    for (; !o[--s]; ) o.pop();
    return n ? ++i : o.shift(), e12.d = o, e12.e = fr(o, i), k ? S(e12, c.precision, c.rounding) : e12;
  };
  x.toBinary = function(e12, n) {
    return _o(this, 2, e12, n);
  };
  x.toDecimalPlaces = x.toDP = function(e12, n) {
    var i = this, t = i.constructor;
    return i = new t(i), e12 === void 0 ? i : (Re(e12, 0, Fn), n === void 0 ? n = t.rounding : Re(n, 0, 8), S(i, e12 + i.e + 1, n));
  };
  x.toExponential = function(e12, n) {
    var i, t = this, r = t.constructor;
    return e12 === void 0 ? i = dn(t, true) : (Re(e12, 0, Fn), n === void 0 ? n = r.rounding : Re(n, 0, 8), t = S(new r(t), e12 + 1, n), i = dn(t, true, e12 + 1)), t.isNeg() && !t.isZero() ? "-" + i : i;
  };
  x.toFixed = function(e12, n) {
    var i, t, r = this, o = r.constructor;
    return e12 === void 0 ? i = dn(r) : (Re(e12, 0, Fn), n === void 0 ? n = o.rounding : Re(n, 0, 8), t = S(new o(r), e12 + r.e + 1, n), i = dn(t, false, e12 + t.e + 1)), r.isNeg() && !r.isZero() ? "-" + i : i;
  };
  x.toFraction = function(e12) {
    var n, i, t, r, o, s, a, u, l, f, c, d, m = this, b = m.d, y = m.constructor;
    if (!b) return new y(m);
    if (l = i = new y(1), t = u = new y(0), n = new y(t), o = n.e = Ba(b) - m.e - 1, s = o % I, n.d[0] = me(10, s < 0 ? I + s : s), e12 == null) e12 = o > 0 ? n : l;
    else {
      if (a = new y(e12), !a.isInt() || a.lt(l)) throw Error(Ln + a);
      e12 = a.gt(n) ? o > 0 ? n : l : a;
    }
    for (k = false, a = new y(ve(b)), f = y.precision, y.precision = o = b.length * I * 2; c = U(a, n, 0, 1, 1), r = i.plus(c.times(t)), r.cmp(e12) != 1; ) i = t, t = r, r = l, l = u.plus(c.times(r)), u = r, r = n, n = a.minus(c.times(r)), a = r;
    return r = U(e12.minus(i), t, 0, 1, 1), u = u.plus(r.times(l)), i = i.plus(r.times(t)), u.s = l.s = m.s, d = U(l, t, o, 1).minus(m).abs().cmp(U(u, i, o, 1).minus(m).abs()) < 1 ? [l, t] : [u, i], y.precision = f, k = true, d;
  };
  x.toHexadecimal = x.toHex = function(e12, n) {
    return _o(this, 16, e12, n);
  };
  x.toNearest = function(e12, n) {
    var i = this, t = i.constructor;
    if (i = new t(i), e12 == null) {
      if (!i.d) return i;
      e12 = new t(1), n = t.rounding;
    } else {
      if (e12 = new t(e12), n === void 0 ? n = t.rounding : Re(n, 0, 8), !i.d) return e12.s ? i : e12;
      if (!e12.d) return e12.s && (e12.s = i.s), e12;
    }
    return e12.d[0] ? (k = false, i = U(i, e12, 0, n, 1).times(e12), k = true, S(i)) : (e12.s = i.s, i = e12), i;
  };
  x.toNumber = function() {
    return +this;
  };
  x.toOctal = function(e12, n) {
    return _o(this, 8, e12, n);
  };
  x.toPower = x.pow = function(e12) {
    var n, i, t, r, o, s, a = this, u = a.constructor, l = +(e12 = new u(e12));
    if (!a.d || !e12.d || !a.d[0] || !e12.d[0]) return new u(me(+a, l));
    if (a = new u(a), a.eq(1)) return a;
    if (t = u.precision, o = u.rounding, e12.eq(1)) return S(a, t, o);
    if (n = Be(e12.e / I), n >= e12.d.length - 1 && (i = l < 0 ? -l : l) <= Ec) return r = ka(u, a, i, t), e12.s < 0 ? new u(1).div(r) : S(r, t, o);
    if (s = a.s, s < 0) {
      if (n < e12.d.length - 1) return new u(NaN);
      if (e12.d[n] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1) return a.s = s, a;
    }
    return i = me(+a, l), n = i == 0 || !isFinite(i) ? Be(l * (Math.log("0." + ve(a.d)) / Math.LN10 + a.e + 1)) : new u(i + "").e, n > u.maxE + 1 || n < u.minE - 1 ? new u(n > 0 ? s / 0 : 0) : (k = false, u.rounding = a.s = 1, i = Math.min(12, (n + "").length), r = So(e12.times(On(a, t + i)), t), r.d && (r = S(r, t + 5, 1), mt(r.d, t, o) && (n = t + 10, r = S(So(e12.times(On(a, n + i)), n), n + 5, 1), +ve(r.d).slice(t + 1, t + 15) + 1 == 1e14 && (r = S(r, t + 1, 0)))), r.s = s, k = true, u.rounding = o, S(r, t, o));
  };
  x.toPrecision = function(e12, n) {
    var i, t = this, r = t.constructor;
    return e12 === void 0 ? i = dn(t, t.e <= r.toExpNeg || t.e >= r.toExpPos) : (Re(e12, 1, Fn), n === void 0 ? n = r.rounding : Re(n, 0, 8), t = S(new r(t), e12, n), i = dn(t, e12 <= t.e || t.e <= r.toExpNeg, e12)), t.isNeg() && !t.isZero() ? "-" + i : i;
  };
  x.toSignificantDigits = x.toSD = function(e12, n) {
    var i = this, t = i.constructor;
    return e12 === void 0 ? (e12 = t.precision, n = t.rounding) : (Re(e12, 1, Fn), n === void 0 ? n = t.rounding : Re(n, 0, 8)), S(new t(i), e12, n);
  };
  x.toString = function() {
    var e12 = this, n = e12.constructor, i = dn(e12, e12.e <= n.toExpNeg || e12.e >= n.toExpPos);
    return e12.isNeg() && !e12.isZero() ? "-" + i : i;
  };
  x.truncated = x.trunc = function() {
    return S(new this.constructor(this), this.e + 1, 1);
  };
  x.valueOf = x.toJSON = function() {
    var e12 = this, n = e12.constructor, i = dn(e12, e12.e <= n.toExpNeg || e12.e >= n.toExpPos);
    return e12.isNeg() ? "-" + i : i;
  };
  function ve(e12) {
    var n, i, t, r = e12.length - 1, o = "", s = e12[0];
    if (r > 0) {
      for (o += s, n = 1; n < r; n++) t = e12[n] + "", i = I - t.length, i && (o += Pn(i)), o += t;
      s = e12[n], t = s + "", i = I - t.length, i && (o += Pn(i));
    } else if (s === 0) return "0";
    for (; s % 10 === 0; ) s /= 10;
    return o + s;
  }
  function Re(e12, n, i) {
    if (e12 !== ~~e12 || e12 < n || e12 > i) throw Error(Ln + e12);
  }
  function mt(e12, n, i, t) {
    var r, o, s, a;
    for (o = e12[0]; o >= 10; o /= 10) --n;
    return --n < 0 ? (n += I, r = 0) : (r = Math.ceil((n + 1) / I), n %= I), o = me(10, I - n), a = e12[r] % o | 0, t == null ? n < 3 ? (n == 0 ? a = a / 100 | 0 : n == 1 && (a = a / 10 | 0), s = i < 4 && a == 99999 || i > 3 && a == 49999 || a == 5e4 || a == 0) : s = (i < 4 && a + 1 == o || i > 3 && a + 1 == o / 2) && (e12[r + 1] / o / 100 | 0) == me(10, n - 2) - 1 || (a == o / 2 || a == 0) && (e12[r + 1] / o / 100 | 0) == 0 : n < 4 ? (n == 0 ? a = a / 1e3 | 0 : n == 1 ? a = a / 100 | 0 : n == 2 && (a = a / 10 | 0), s = (t || i < 4) && a == 9999 || !t && i > 3 && a == 4999) : s = ((t || i < 4) && a + 1 == o || !t && i > 3 && a + 1 == o / 2) && (e12[r + 1] / o / 1e3 | 0) == me(10, n - 3) - 1, s;
  }
  function or(e12, n, i) {
    for (var t, r = [0], o, s = 0, a = e12.length; s < a; ) {
      for (o = r.length; o--; ) r[o] *= n;
      for (r[0] += Eo.indexOf(e12.charAt(s++)), t = 0; t < r.length; t++) r[t] > i - 1 && (r[t + 1] === void 0 && (r[t + 1] = 0), r[t + 1] += r[t] / i | 0, r[t] %= i);
    }
    return r.reverse();
  }
  function vc(e12, n) {
    var i, t, r;
    if (n.isZero()) return n;
    t = n.d.length, t < 32 ? (i = Math.ceil(t / 3), r = (1 / cr(4, i)).toString()) : (i = 16, r = "2.3283064365386962890625e-10"), e12.precision += i, n = Ti(e12, 1, n.times(r), new e12(1));
    for (var o = i; o--; ) {
      var s = n.times(n);
      n = s.times(s).minus(s).times(8).plus(1);
    }
    return e12.precision -= i, n;
  }
  var U = /* @__PURE__ */ function() {
    function e12(t, r, o) {
      var s, a = 0, u = t.length;
      for (t = t.slice(); u--; ) s = t[u] * r + a, t[u] = s % o | 0, a = s / o | 0;
      return a && t.unshift(a), t;
    }
    function n(t, r, o, s) {
      var a, u;
      if (o != s) u = o > s ? 1 : -1;
      else for (a = u = 0; a < o; a++) if (t[a] != r[a]) {
        u = t[a] > r[a] ? 1 : -1;
        break;
      }
      return u;
    }
    function i(t, r, o, s) {
      for (var a = 0; o--; ) t[o] -= a, a = t[o] < r[o] ? 1 : 0, t[o] = a * s + t[o] - r[o];
      for (; !t[0] && t.length > 1; ) t.shift();
    }
    return function(t, r, o, s, a, u) {
      var l, f, c, d, m, b, y, N, T, R, _, L, be, Ne, Ni, ir, pt, xo, nn, tr, rr = t.constructor, yo = t.s == r.s ? 1 : -1, _e = t.d, H = r.d;
      if (!_e || !_e[0] || !H || !H[0]) return new rr(!t.s || !r.s || (_e ? H && _e[0] == H[0] : !H) ? NaN : _e && _e[0] == 0 || !H ? yo * 0 : yo / 0);
      for (u ? (m = 1, f = t.e - r.e) : (u = rn, m = I, f = Be(t.e / m) - Be(r.e / m)), nn = H.length, pt = _e.length, T = new rr(yo), R = T.d = [], c = 0; H[c] == (_e[c] || 0); c++) ;
      if (H[c] > (_e[c] || 0) && f--, o == null ? (Ne = o = rr.precision, s = rr.rounding) : a ? Ne = o + (t.e - r.e) + 1 : Ne = o, Ne < 0) R.push(1), b = true;
      else {
        if (Ne = Ne / m + 2 | 0, c = 0, nn == 1) {
          for (d = 0, H = H[0], Ne++; (c < pt || d) && Ne--; c++) Ni = d * u + (_e[c] || 0), R[c] = Ni / H | 0, d = Ni % H | 0;
          b = d || c < pt;
        } else {
          for (d = u / (H[0] + 1) | 0, d > 1 && (H = e12(H, d, u), _e = e12(_e, d, u), nn = H.length, pt = _e.length), ir = nn, _ = _e.slice(0, nn), L = _.length; L < nn; ) _[L++] = 0;
          tr = H.slice(), tr.unshift(0), xo = H[0], H[1] >= u / 2 && ++xo;
          do
            d = 0, l = n(H, _, nn, L), l < 0 ? (be = _[0], nn != L && (be = be * u + (_[1] || 0)), d = be / xo | 0, d > 1 ? (d >= u && (d = u - 1), y = e12(H, d, u), N = y.length, L = _.length, l = n(y, _, N, L), l == 1 && (d--, i(y, nn < N ? tr : H, N, u))) : (d == 0 && (l = d = 1), y = H.slice()), N = y.length, N < L && y.unshift(0), i(_, y, L, u), l == -1 && (L = _.length, l = n(H, _, nn, L), l < 1 && (d++, i(_, nn < L ? tr : H, L, u))), L = _.length) : l === 0 && (d++, _ = [0]), R[c++] = d, l && _[0] ? _[L++] = _e[ir] || 0 : (_ = [_e[ir]], L = 1);
          while ((ir++ < pt || _[0] !== void 0) && Ne--);
          b = _[0] !== void 0;
        }
        R[0] || R.shift();
      }
      if (m == 1) T.e = f, va = b;
      else {
        for (c = 1, d = R[0]; d >= 10; d /= 10) c++;
        T.e = c + f * m - 1, S(T, a ? o + T.e + 1 : o, s, b);
      }
      return T;
    };
  }();
  function S(e12, n, i, t) {
    var r, o, s, a, u, l, f, c, d, m = e12.constructor;
    e: if (n != null) {
      if (c = e12.d, !c) return e12;
      for (r = 1, a = c[0]; a >= 10; a /= 10) r++;
      if (o = n - r, o < 0) o += I, s = n, f = c[d = 0], u = f / me(10, r - s - 1) % 10 | 0;
      else if (d = Math.ceil((o + 1) / I), a = c.length, d >= a) if (t) {
        for (; a++ <= d; ) c.push(0);
        f = u = 0, r = 1, o %= I, s = o - I + 1;
      } else break e;
      else {
        for (f = a = c[d], r = 1; a >= 10; a /= 10) r++;
        o %= I, s = o - I + r, u = s < 0 ? 0 : f / me(10, r - s - 1) % 10 | 0;
      }
      if (t = t || n < 0 || c[d + 1] !== void 0 || (s < 0 ? f : f % me(10, r - s - 1)), l = i < 4 ? (u || t) && (i == 0 || i == (e12.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (i == 4 || t || i == 6 && (o > 0 ? s > 0 ? f / me(10, r - s) : 0 : c[d - 1]) % 10 & 1 || i == (e12.s < 0 ? 8 : 7)), n < 1 || !c[0]) return c.length = 0, l ? (n -= e12.e + 1, c[0] = me(10, (I - n % I) % I), e12.e = -n || 0) : c[0] = e12.e = 0, e12;
      if (o == 0 ? (c.length = d, a = 1, d--) : (c.length = d + 1, a = me(10, I - o), c[d] = s > 0 ? (f / me(10, r - s) % me(10, s) | 0) * a : 0), l) for (; ; ) if (d == 0) {
        for (o = 1, s = c[0]; s >= 10; s /= 10) o++;
        for (s = c[0] += a, a = 1; s >= 10; s /= 10) a++;
        o != a && (e12.e++, c[0] == rn && (c[0] = 1));
        break;
      } else {
        if (c[d] += a, c[d] != rn) break;
        c[d--] = 0, a = 1;
      }
      for (o = c.length; c[--o] === 0; ) c.pop();
    }
    return k && (e12.e > m.maxE ? (e12.d = null, e12.e = NaN) : e12.e < m.minE && (e12.e = 0, e12.d = [0])), e12;
  }
  function dn(e12, n, i) {
    if (!e12.isFinite()) return Da(e12);
    var t, r = e12.e, o = ve(e12.d), s = o.length;
    return n ? (i && (t = i - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Pn(t) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e12.e < 0 ? "e" : "e+") + e12.e) : r < 0 ? (o = "0." + Pn(-r - 1) + o, i && (t = i - s) > 0 && (o += Pn(t))) : r >= s ? (o += Pn(r + 1 - s), i && (t = i - r - 1) > 0 && (o = o + "." + Pn(t))) : ((t = r + 1) < s && (o = o.slice(0, t) + "." + o.slice(t)), i && (t = i - s) > 0 && (r + 1 === s && (o += "."), o += Pn(t))), o;
  }
  function fr(e12, n) {
    var i = e12[0];
    for (n *= I; i >= 10; i /= 10) n++;
    return n;
  }
  function ur(e12, n, i) {
    if (n > Nc) throw k = true, i && (e12.precision = i), Error(Sa);
    return S(new e12(sr), n, 1, true);
  }
  function tn(e12, n, i) {
    if (n > vo) throw Error(Sa);
    return S(new e12(ar), n, i, true);
  }
  function Ba(e12) {
    var n = e12.length - 1, i = n * I + 1;
    if (n = e12[n], n) {
      for (; n % 10 == 0; n /= 10) i--;
      for (n = e12[0]; n >= 10; n /= 10) i++;
    }
    return i;
  }
  function Pn(e12) {
    for (var n = ""; e12--; ) n += "0";
    return n;
  }
  function ka(e12, n, i, t) {
    var r, o = new e12(1), s = Math.ceil(t / I + 4);
    for (k = false; ; ) {
      if (i % 2 && (o = o.times(n), Ea(o.d, s) && (r = true)), i = Be(i / 2), i === 0) {
        i = o.d.length - 1, r && o.d[i] === 0 && ++o.d[i];
        break;
      }
      n = n.times(n), Ea(n.d, s);
    }
    return k = true, o;
  }
  function ba(e12) {
    return e12.d[e12.d.length - 1] & 1;
  }
  function wa(e12, n, i) {
    for (var t, r = new e12(n[0]), o = 0; ++o < n.length; ) if (t = new e12(n[o]), t.s) r[i](t) && (r = t);
    else {
      r = t;
      break;
    }
    return r;
  }
  function So(e12, n) {
    var i, t, r, o, s, a, u, l = 0, f = 0, c = 0, d = e12.constructor, m = d.rounding, b = d.precision;
    if (!e12.d || !e12.d[0] || e12.e > 17) return new d(e12.d ? e12.d[0] ? e12.s < 0 ? 0 : 1 / 0 : 1 : e12.s ? e12.s < 0 ? 0 : e12 : NaN);
    for (n == null ? (k = false, u = b) : u = n, a = new d(0.03125); e12.e > -2; ) e12 = e12.times(a), c += 5;
    for (t = Math.log(me(2, c)) / Math.LN10 * 2 + 5 | 0, u += t, i = o = s = new d(1), d.precision = u; ; ) {
      if (o = S(o.times(e12), u, 1), i = i.times(++f), a = s.plus(U(o, i, u, 1)), ve(a.d).slice(0, u) === ve(s.d).slice(0, u)) {
        for (r = c; r--; ) s = S(s.times(s), u, 1);
        if (n == null) if (l < 3 && mt(s.d, u - t, m, l)) d.precision = u += 10, i = o = a = new d(1), f = 0, l++;
        else return S(s, d.precision = b, m, k = true);
        else return d.precision = b, s;
      }
      s = a;
    }
  }
  function On(e12, n) {
    var i, t, r, o, s, a, u, l, f, c, d, m = 1, b = 10, y = e12, N = y.d, T = y.constructor, R = T.rounding, _ = T.precision;
    if (y.s < 0 || !N || !N[0] || !y.e && N[0] == 1 && N.length == 1) return new T(N && !N[0] ? -1 / 0 : y.s != 1 ? NaN : N ? 0 : y);
    if (n == null ? (k = false, f = _) : f = n, T.precision = f += b, i = ve(N), t = i.charAt(0), Math.abs(o = y.e) < 15e14) {
      for (; t < 7 && t != 1 || t == 1 && i.charAt(1) > 3; ) y = y.times(e12), i = ve(y.d), t = i.charAt(0), m++;
      o = y.e, t > 1 ? (y = new T("0." + i), o++) : y = new T(t + "." + i.slice(1));
    } else return l = ur(T, f + 2, _).times(o + ""), y = On(new T(t + "." + i.slice(1)), f - b).plus(l), T.precision = _, n == null ? S(y, _, R, k = true) : y;
    for (c = y, u = s = y = U(y.minus(1), y.plus(1), f, 1), d = S(y.times(y), f, 1), r = 3; ; ) {
      if (s = S(s.times(d), f, 1), l = u.plus(U(s, new T(r), f, 1)), ve(l.d).slice(0, f) === ve(u.d).slice(0, f)) if (u = u.times(2), o !== 0 && (u = u.plus(ur(T, f + 2, _).times(o + ""))), u = U(u, new T(m), f, 1), n == null) if (mt(u.d, f - b, R, a)) T.precision = f += b, l = s = y = U(c.minus(1), c.plus(1), f, 1), d = S(y.times(y), f, 1), r = a = 1;
      else return S(u, T.precision = _, R, k = true);
      else return T.precision = _, u;
      u = l, r += 2;
    }
  }
  function Da(e12) {
    return String(e12.s * e12.s / 0);
  }
  function To(e12, n) {
    var i, t, r;
    for ((i = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (t = n.search(/e/i)) > 0 ? (i < 0 && (i = t), i += +n.slice(t + 1), n = n.substring(0, t)) : i < 0 && (i = n.length), t = 0; n.charCodeAt(t) === 48; t++) ;
    for (r = n.length; n.charCodeAt(r - 1) === 48; --r) ;
    if (n = n.slice(t, r), n) {
      if (r -= t, e12.e = i = i - t - 1, e12.d = [], t = (i + 1) % I, i < 0 && (t += I), t < r) {
        for (t && e12.d.push(+n.slice(0, t)), r -= I; t < r; ) e12.d.push(+n.slice(t, t += I));
        n = n.slice(t), t = I - n.length;
      } else t -= r;
      for (; t--; ) n += "0";
      e12.d.push(+n), k && (e12.e > e12.constructor.maxE ? (e12.d = null, e12.e = NaN) : e12.e < e12.constructor.minE && (e12.e = 0, e12.d = [0]));
    } else e12.e = 0, e12.d = [0];
    return e12;
  }
  function Sc(e12, n) {
    var i, t, r, o, s, a, u, l, f;
    if (n.indexOf("_") > -1) {
      if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Ia.test(n)) return To(e12, n);
    } else if (n === "Infinity" || n === "NaN") return +n || (e12.s = NaN), e12.e = NaN, e12.d = null, e12;
    if (yc.test(n)) i = 16, n = n.toLowerCase();
    else if (xc.test(n)) i = 2;
    else if (bc.test(n)) i = 8;
    else throw Error(Ln + n);
    for (o = n.search(/p/i), o > 0 ? (u = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), s = o >= 0, t = e12.constructor, s && (n = n.replace(".", ""), a = n.length, o = a - o, r = ka(t, new t(i), o, o * 2)), l = or(n, i, rn), f = l.length - 1, o = f; l[o] === 0; --o) l.pop();
    return o < 0 ? new t(e12.s * 0) : (e12.e = fr(l, f), e12.d = l, k = false, s && (e12 = U(e12, r, a * 4)), u && (e12 = e12.times(Math.abs(u) < 54 ? me(2, u) : X.pow(2, u))), k = true, e12);
  }
  function Tc(e12, n) {
    var i, t = n.d.length;
    if (t < 3) return n.isZero() ? n : Ti(e12, 2, n, n);
    i = 1.4 * Math.sqrt(t), i = i > 16 ? 16 : i | 0, n = n.times(1 / cr(5, i)), n = Ti(e12, 2, n, n);
    for (var r, o = new e12(5), s = new e12(16), a = new e12(20); i--; ) r = n.times(n), n = n.times(o.plus(r.times(s.times(r).minus(a))));
    return n;
  }
  function Ti(e12, n, i, t, r) {
    var o, s, a, u, l = 1, f = e12.precision, c = Math.ceil(f / I);
    for (k = false, u = i.times(i), a = new e12(t); ; ) {
      if (s = U(a.times(u), new e12(n++ * n++), f, 1), a = r ? t.plus(s) : t.minus(s), t = U(s.times(u), new e12(n++ * n++), f, 1), s = a.plus(t), s.d[c] !== void 0) {
        for (o = c; s.d[o] === a.d[o] && o--; ) ;
        if (o == -1) break;
      }
      o = a, a = t, t = s, s = o, l++;
    }
    return k = true, s.d.length = c + 1, s;
  }
  function cr(e12, n) {
    for (var i = e12; --n; ) i *= e12;
    return i;
  }
  function Ra(e12, n) {
    var i, t = n.s < 0, r = tn(e12, e12.precision, 1), o = r.times(0.5);
    if (n = n.abs(), n.lte(o)) return Sn = t ? 4 : 1, n;
    if (i = n.divToInt(r), i.isZero()) Sn = t ? 3 : 2;
    else {
      if (n = n.minus(i.times(r)), n.lte(o)) return Sn = ba(i) ? t ? 2 : 3 : t ? 4 : 1, n;
      Sn = ba(i) ? t ? 1 : 4 : t ? 3 : 2;
    }
    return n.minus(r).abs();
  }
  function _o(e12, n, i, t) {
    var r, o, s, a, u, l, f, c, d, m = e12.constructor, b = i !== void 0;
    if (b ? (Re(i, 1, Fn), t === void 0 ? t = m.rounding : Re(t, 0, 8)) : (i = m.precision, t = m.rounding), !e12.isFinite()) f = Da(e12);
    else {
      for (f = dn(e12), s = f.indexOf("."), b ? (r = 2, n == 16 ? i = i * 4 - 3 : n == 8 && (i = i * 3 - 2)) : r = n, s >= 0 && (f = f.replace(".", ""), d = new m(1), d.e = f.length - s, d.d = or(dn(d), 10, r), d.e = d.d.length), c = or(f, 10, r), o = u = c.length; c[--u] == 0; ) c.pop();
      if (!c[0]) f = b ? "0p+0" : "0";
      else {
        if (s < 0 ? o-- : (e12 = new m(e12), e12.d = c, e12.e = o, e12 = U(e12, d, i, t, 0, r), c = e12.d, o = e12.e, l = va), s = c[i], a = r / 2, l = l || c[i + 1] !== void 0, l = t < 4 ? (s !== void 0 || l) && (t === 0 || t === (e12.s < 0 ? 3 : 2)) : s > a || s === a && (t === 4 || l || t === 6 && c[i - 1] & 1 || t === (e12.s < 0 ? 8 : 7)), c.length = i, l) for (; ++c[--i] > r - 1; ) c[i] = 0, i || (++o, c.unshift(1));
        for (u = c.length; !c[u - 1]; --u) ;
        for (s = 0, f = ""; s < u; s++) f += Eo.charAt(c[s]);
        if (b) {
          if (u > 1) if (n == 16 || n == 8) {
            for (s = n == 16 ? 4 : 3, --u; u % s; u++) f += "0";
            for (c = or(f, r, n), u = c.length; !c[u - 1]; --u) ;
            for (s = 1, f = "1."; s < u; s++) f += Eo.charAt(c[s]);
          } else f = f.charAt(0) + "." + f.slice(1);
          f = f + (o < 0 ? "p" : "p+") + o;
        } else if (o < 0) {
          for (; ++o; ) f = "0" + f;
          f = "0." + f;
        } else if (++o > u) for (o -= u; o--; ) f += "0";
        else o < u && (f = f.slice(0, o) + "." + f.slice(o));
      }
      f = (n == 16 ? "0x" : n == 2 ? "0b" : n == 8 ? "0o" : "") + f;
    }
    return e12.s < 0 ? "-" + f : f;
  }
  function Ea(e12, n) {
    if (e12.length > n) return e12.length = n, true;
  }
  function _c(e12) {
    return new this(e12).abs();
  }
  function Ic(e12) {
    return new this(e12).acos();
  }
  function Bc(e12) {
    return new this(e12).acosh();
  }
  function kc(e12, n) {
    return new this(e12).plus(n);
  }
  function wc(e12) {
    return new this(e12).asin();
  }
  function Dc(e12) {
    return new this(e12).asinh();
  }
  function Rc(e12) {
    return new this(e12).atan();
  }
  function Ac(e12) {
    return new this(e12).atanh();
  }
  function Mc(e12, n) {
    e12 = new this(e12), n = new this(n);
    var i, t = this.precision, r = this.rounding, o = t + 4;
    return !e12.s || !n.s ? i = new this(NaN) : !e12.d && !n.d ? (i = tn(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), i.s = e12.s) : !n.d || e12.isZero() ? (i = n.s < 0 ? tn(this, t, r) : new this(0), i.s = e12.s) : !e12.d || n.isZero() ? (i = tn(this, o, 1).times(0.5), i.s = e12.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, i = this.atan(U(e12, n, o, 1)), n = tn(this, o, 1), this.precision = t, this.rounding = r, i = e12.s < 0 ? i.minus(n) : i.plus(n)) : i = this.atan(U(e12, n, o, 1)), i;
  }
  function Cc(e12) {
    return new this(e12).cbrt();
  }
  function Pc(e12) {
    return S(e12 = new this(e12), e12.e + 1, 2);
  }
  function Oc(e12, n, i) {
    return new this(e12).clamp(n, i);
  }
  function Lc(e12) {
    if (!e12 || typeof e12 != "object") throw Error(lr + "Object expected");
    var n, i, t, r = e12.defaults === true, o = ["precision", 1, Fn, "rounding", 0, 8, "toExpNeg", -Si, 0, "toExpPos", 0, Si, "maxE", 0, Si, "minE", -Si, 0, "modulo", 0, 9];
    for (n = 0; n < o.length; n += 3) if (i = o[n], r && (this[i] = No[i]), (t = e12[i]) !== void 0) if (Be(t) === t && t >= o[n + 1] && t <= o[n + 2]) this[i] = t;
    else throw Error(Ln + i + ": " + t);
    if (i = "crypto", r && (this[i] = No[i]), (t = e12[i]) !== void 0) if (t === true || t === false || t === 0 || t === 1) if (t) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[i] = true;
    else throw Error(Ta);
    else this[i] = false;
    else throw Error(Ln + i + ": " + t);
    return this;
  }
  function Fc(e12) {
    return new this(e12).cos();
  }
  function qc(e12) {
    return new this(e12).cosh();
  }
  function Aa(e12) {
    var n, i, t;
    function r(o) {
      var s, a, u, l = this;
      if (!(l instanceof r)) return new r(o);
      if (l.constructor = r, Na(o)) {
        l.s = o.s, k ? !o.d || o.e > r.maxE ? (l.e = NaN, l.d = null) : o.e < r.minE ? (l.e = 0, l.d = [0]) : (l.e = o.e, l.d = o.d.slice()) : (l.e = o.e, l.d = o.d ? o.d.slice() : o.d);
        return;
      }
      if (u = typeof o, u === "number") {
        if (o === 0) {
          l.s = 1 / o < 0 ? -1 : 1, l.e = 0, l.d = [0];
          return;
        }
        if (o < 0 ? (o = -o, l.s = -1) : l.s = 1, o === ~~o && o < 1e7) {
          for (s = 0, a = o; a >= 10; a /= 10) s++;
          k ? s > r.maxE ? (l.e = NaN, l.d = null) : s < r.minE ? (l.e = 0, l.d = [0]) : (l.e = s, l.d = [o]) : (l.e = s, l.d = [o]);
          return;
        } else if (o * 0 !== 0) {
          o || (l.s = NaN), l.e = NaN, l.d = null;
          return;
        }
        return To(l, o.toString());
      } else if (u !== "string") throw Error(Ln + o);
      return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), l.s = -1) : (a === 43 && (o = o.slice(1)), l.s = 1), Ia.test(o) ? To(l, o) : Sc(l, o);
    }
    if (r.prototype = x, r.ROUND_UP = 0, r.ROUND_DOWN = 1, r.ROUND_CEIL = 2, r.ROUND_FLOOR = 3, r.ROUND_HALF_UP = 4, r.ROUND_HALF_DOWN = 5, r.ROUND_HALF_EVEN = 6, r.ROUND_HALF_CEIL = 7, r.ROUND_HALF_FLOOR = 8, r.EUCLID = 9, r.config = r.set = Lc, r.clone = Aa, r.isDecimal = Na, r.abs = _c, r.acos = Ic, r.acosh = Bc, r.add = kc, r.asin = wc, r.asinh = Dc, r.atan = Rc, r.atanh = Ac, r.atan2 = Mc, r.cbrt = Cc, r.ceil = Pc, r.clamp = Oc, r.cos = Fc, r.cosh = qc, r.div = $c, r.exp = Vc, r.floor = zc, r.hypot = Gc, r.ln = Uc, r.log = jc, r.log10 = Hc, r.log2 = Zc, r.max = Wc, r.min = Jc, r.mod = Yc, r.mul = Qc, r.pow = Xc, r.random = Kc, r.round = ed, r.sign = nd, r.sin = id, r.sinh = td, r.sqrt = rd, r.sub = od, r.sum = sd, r.tan = ad, r.tanh = ud, r.trunc = ld, e12 === void 0 && (e12 = {}), e12 && e12.defaults !== true) for (t = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < t.length; ) e12.hasOwnProperty(i = t[n++]) || (e12[i] = this[i]);
    return r.config(e12), r;
  }
  function $c(e12, n) {
    return new this(e12).div(n);
  }
  function Vc(e12) {
    return new this(e12).exp();
  }
  function zc(e12) {
    return S(e12 = new this(e12), e12.e + 1, 3);
  }
  function Gc() {
    var e12, n, i = new this(0);
    for (k = false, e12 = 0; e12 < arguments.length; ) if (n = new this(arguments[e12++]), n.d) i.d && (i = i.plus(n.times(n)));
    else {
      if (n.s) return k = true, new this(1 / 0);
      i = n;
    }
    return k = true, i.sqrt();
  }
  function Na(e12) {
    return e12 instanceof X || e12 && e12.toStringTag === _a || false;
  }
  function Uc(e12) {
    return new this(e12).ln();
  }
  function jc(e12, n) {
    return new this(e12).log(n);
  }
  function Zc(e12) {
    return new this(e12).log(2);
  }
  function Hc(e12) {
    return new this(e12).log(10);
  }
  function Wc() {
    return wa(this, arguments, "lt");
  }
  function Jc() {
    return wa(this, arguments, "gt");
  }
  function Yc(e12, n) {
    return new this(e12).mod(n);
  }
  function Qc(e12, n) {
    return new this(e12).mul(n);
  }
  function Xc(e12, n) {
    return new this(e12).pow(n);
  }
  function Kc(e12) {
    var n, i, t, r, o = 0, s = new this(1), a = [];
    if (e12 === void 0 ? e12 = this.precision : Re(e12, 1, Fn), t = Math.ceil(e12 / I), this.crypto) if (crypto.getRandomValues) for (n = crypto.getRandomValues(new Uint32Array(t)); o < t; ) r = n[o], r >= 429e7 ? n[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = r % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(t *= 4); o < t; ) r = n[o] + (n[o + 1] << 8) + (n[o + 2] << 16) + ((n[o + 3] & 127) << 24), r >= 214e7 ? crypto.randomBytes(4).copy(n, o) : (a.push(r % 1e7), o += 4);
      o = t / 4;
    } else throw Error(Ta);
    else for (; o < t; ) a[o++] = Math.random() * 1e7 | 0;
    for (t = a[--o], e12 %= I, t && e12 && (r = me(10, I - e12), a[o] = (t / r | 0) * r); a[o] === 0; o--) a.pop();
    if (o < 0) i = 0, a = [0];
    else {
      for (i = -1; a[0] === 0; i -= I) a.shift();
      for (t = 1, r = a[0]; r >= 10; r /= 10) t++;
      t < I && (i -= I - t);
    }
    return s.e = i, s.d = a, s;
  }
  function ed(e12) {
    return S(e12 = new this(e12), e12.e + 1, this.rounding);
  }
  function nd(e12) {
    return e12 = new this(e12), e12.d ? e12.d[0] ? e12.s : 0 * e12.s : e12.s || NaN;
  }
  function id(e12) {
    return new this(e12).sin();
  }
  function td(e12) {
    return new this(e12).sinh();
  }
  function rd(e12) {
    return new this(e12).sqrt();
  }
  function od(e12, n) {
    return new this(e12).sub(n);
  }
  function sd() {
    var e12 = 0, n = arguments, i = new this(n[e12]);
    for (k = false; i.s && ++e12 < n.length; ) i = i.plus(n[e12]);
    return k = true, S(i, this.precision, this.rounding);
  }
  function ad(e12) {
    return new this(e12).tan();
  }
  function ud(e12) {
    return new this(e12).tanh();
  }
  function ld(e12) {
    return S(e12 = new this(e12), e12.e + 1, 1);
  }
  x[Symbol.for("nodejs.util.inspect.custom")] = x.toString;
  x[Symbol.toStringTag] = "Decimal";
  var X = x.constructor = Aa(No);
  sr = new X(sr);
  ar = new X(ar);
  var ge = X;
  var dr = ["number", "finite_number", "complex", "finite_complex", "imaginary", "finite_imaginary", "real", "finite_real", "rational", "finite_rational", "integer", "finite_integer", "non_finite_number"];
  var pr = ["collection", "list", "set", "tuple", "map"];
  var mr = ["scalar", ...dr, "boolean", "string"];
  var Io = ["value", ...pr, ...mr];
  var Bo = ["expression", "symbol", "function", ...Io];
  var qn = ["any", "unknown", "nothing", "never", "error", ...Bo];
  var Ma = 3;
  var Ca = 1;
  var Pa = 2;
  var fd = 4;
  var cd = 5;
  var dd = 6;
  var pd = 7;
  var md = 8;
  var gd = 9;
  function P(e12, n = 0) {
    if (typeof e12 == "string") return e12;
    let i = "";
    switch (e12.kind) {
      case "value":
        i = e12.value.toString();
        break;
      case "reference":
        i = e12.ref;
        break;
      case "negation":
        i = `!${P(e12.type, Ma)}`;
        break;
      case "union":
        i = e12.types.map((u) => P(u, Ca)).join(" | ");
        break;
      case "intersection":
        i = e12.types.map((u) => P(u, Pa)).join(" & ");
        break;
      case "list":
        if (e12.dimensions && g(e12.elements, "number")) {
          if (e12.dimensions === void 0) e12.elements === "number" && (i = "tensor");
          else if (e12.dimensions.length === 1) e12.elements === "number" ? e12.dimensions[0] < 0 ? i = "vector" : i = `vector<${e12.dimensions[0]}>` : e12.dimensions[0] < 0 ? i = `vector<${e12.elements}>` : i = `vector<${e12.elements}^${e12.dimensions[0]}>`;
          else if (e12.dimensions.length === 2) {
            let u = e12.dimensions;
            e12.elements === "number" ? u[0] < 0 && u[1] < 0 ? i = "matrix" : i = `matrix<${u[0]}x${u[1]}>` : u[0] < 0 && u[1] < 0 ? i = `matrix<${e12.elements}>` : i = `matrix<${e12.elements}^(${u[0]}x${u[1]})>`;
          }
        }
        if (!i) {
          let u = e12.dimensions ? e12.dimensions.length === 1 ? `^${e12.dimensions[0].toString()}` : `^(${e12.dimensions.join("x")})` : "";
          i = `list<${P(e12.elements)}${u}>`;
        }
        break;
      case "map":
        i = `map<${Object.entries(e12.elements).map(([u, l]) => `${u}: ${P(l)}`).join(", ")}>`;
        break;
      case "set":
        i = `set<${P(e12.elements)}>`;
        break;
      case "collection":
        i = `collection<${P(e12.elements)}>`;
        break;
      case "tuple":
        if (e12.elements.length === 0) i = "tuple";
        else if (e12.elements.length === 1) {
          let [u] = e12.elements;
          i = `tuple<${gt(u)}>`;
        } else i = "tuple<" + e12.elements.map((u) => gt(u)).join(", ") + ">";
        break;
      case "signature":
        let r = e12.args ? e12.args.map((u) => gt(u)).join(", ") : "", o = e12.optArgs ? e12.optArgs.map((u) => gt(u) + "?").join(", ") : "", s = e12.restArg ? `...${gt(e12.restArg)}` : "";
        i = `(${[r, o, s].filter((u) => u).join(", ")}) -> ${P(e12.result)}`;
        break;
      default:
        i = "error";
    }
    return n > 0 && n > hd(e12.kind) ? `(${i})` : i;
  }
  function gt(e12) {
    return e12.name ? `${e12.name}: ${P(e12.type)}` : P(e12.type);
  }
  function hd(e12) {
    switch (e12) {
      case "negation":
        return Ma;
      case "union":
        return Ca;
      case "intersection":
        return Pa;
      case "list":
        return fd;
      case "map":
        return cd;
      case "set":
        return dd;
      case "collection":
        return pd;
      case "tuple":
        return md;
      case "signature":
        return gd;
      default:
        return 0;
    }
  }
  function xd(e12, n) {
    return e12 === n ? e12 : e12 === "nothing" || n === "nothing" ? "nothing" : e12 === "any" ? n : n === "any" ? e12 : e12 === "never" ? n : n === "never" ? e12 : e12 === "unknown" ? n : n === "unknown" || g(e12, n) ? e12 : g(n, e12) ? n : Oa(e12, n);
  }
  function yd(e12, n) {
    return e12 === n ? e12 : e12 === "any" || n === "any" ? "any" : e12 === "never" ? n : n === "never" ? e12 : e12 === "unknown" ? n : n === "unknown" ? e12 : e12 === "nothing" ? n : n === "nothing" ? e12 : g(e12, n) ? n : g(n, e12) ? e12 : Oa(e12, n);
  }
  function gr(...e12) {
    return e12.length === 0 ? "nothing" : e12.length === 1 ? e12[0] : e12.reduce(xd);
  }
  function Oe(...e12) {
    return e12.length === 0 ? "nothing" : e12.length === 1 ? e12[0] : e12.reduce(yd);
  }
  function ht(e12) {
    return e12 = typeof e12 == "string" ? B(e12) : e12, typeof e12 != "string" && e12.kind === "signature";
  }
  function Qn(e12) {
    if (e12 === "function") return "any";
    if (typeof e12 != "string" && e12.kind === "signature") return e12.result;
  }
  function Xn(e12) {
    if (e12 === "collection") return "any";
    if (typeof e12 != "string") {
      if (e12.kind === "collection" || e12.kind === "list") return e12.elements;
      if (e12.kind === "map") return B(`tuple<string, ${Oe(...Object.values(e12.elements))}>`);
      if (e12.kind === "set") return e12.elements;
      if (e12.kind === "tuple") return Oe(...e12.elements.map((n) => n.type));
    }
  }
  function Tn(e12) {
    return typeof e12 == "string" ? qn.includes(e12) : typeof e12 != "object" || !("kind" in e12) ? false : e12.kind === "signature" || e12.kind === "union" || e12.kind === "intersection" || e12.kind === "negation" || e12.kind === "tuple" || e12.kind === "list" || e12.kind === "map" || e12.kind === "set" || e12.kind === "function" || e12.kind === "collection" || e12.kind === "reference";
  }
  function Oa(e12, n) {
    return e12 === n ? e12 : e12 === "any" || n === "any" ? "any" : e12 === "never" ? n : n === "never" ? e12 : e12 === "unknown" ? n : n === "unknown" ? e12 : e12 === "nothing" ? n : n === "nothing" ? e12 : oe(e12, n, "non_finite_number") ? "non_finite_number" : oe(e12, n, "finite_integer") ? "finite_integer" : oe(e12, n, "integer") ? "integer" : oe(e12, n, "finite_rational") ? "finite_rational" : oe(e12, n, "rational") ? "rational" : oe(e12, n, "finite_real") ? "finite_real" : oe(e12, n, "real") ? "real" : oe(e12, n, "finite_imaginary") ? "finite_imaginary" : oe(e12, n, "imaginary") ? "imaginary" : oe(e12, n, "finite_complex") ? "finite_complex" : oe(e12, n, "complex") ? "complex" : oe(e12, n, "finite_number") ? "finite_number" : oe(e12, n, "number") ? "number" : oe(e12, n, "list") ? "list" : oe(e12, n, "map") ? "map" : oe(e12, n, "set") ? "set" : oe(e12, n, "tuple") ? "tuple" : oe(e12, n, "collection") ? "collection" : oe(e12, n, "scalar") ? "scalar" : oe(e12, n, "value") ? "value" : oe(e12, n, "function") ? "function" : oe(e12, n, "expression") ? "expression" : "any";
  }
  function oe(e12, n, i) {
    return !!(g(e12, i) && g(n, i));
  }
  var ko = class extends String {
    constructor(n) {
      super(n);
    }
    isSubtypeOf(n) {
      return g(this.toString(), n);
    }
  };
  function Ee(e12) {
    return typeof e12 == "string" ? Object.freeze(new ko(e12)) : (Object.defineProperty(e12, "toString", { value: () => P(e12) }), Object.defineProperty(e12, "isSubtypeOf", { value: (n) => g(e12, n) }), Object.freeze(e12));
  }
  function bd(e12, n) {
    let i = [];
    for (let t = 0; t <= n.length; t++) i[t] = [t];
    for (let t = 0; t <= e12.length; t++) i[0][t] = t;
    for (let t = 1; t <= n.length; t++) for (let r = 1; r <= e12.length; r++) n.charAt(t - 1) === e12.charAt(r - 1) ? i[t][r] = i[t - 1][r - 1] : i[t][r] = Math.min(i[t - 1][r - 1] + 1, i[t][r - 1] + 1, i[t - 1][r] + 1);
    return i[n.length][e12.length];
  }
  function La(e12, n) {
    let i = null, t = 1 / 0, r = 3;
    for (let o of n) {
      let s = bd(e12, o);
      s <= r && Math.abs(e12.length - o.length) <= 2 && s < t && (t = s, i = o);
    }
    return i;
  }
  var wo = class {
    constructor(n, i = { value: () => null, type: () => null }) {
      this.buffer = n, this.pos = 0, this._valueParser = i.value, this._typeParser = i.type;
    }
    error(...n) {
      throw new Error(`
Invalid type
|   ${this.buffer}
|   ${" ".repeat(this.pos)}^
|   
|   ${n.join(`
|   `)}
`);
    }
    peek() {
      return this.buffer[this.pos];
    }
    consume() {
      return this.buffer[this.pos++];
    }
    match(n) {
      if (n.length === 1 && this.buffer[this.pos] === n) return this.pos++, true;
      let i = this.pos;
      return this.buffer.slice(i, i + n.length) === n ? (this.pos += n.length, true) : false;
    }
    skipWhitespace() {
      for (; this.pos < this.buffer.length && /\s/.test(this.buffer[this.pos]); ) this.pos++;
    }
    isEOF() {
      return this.pos >= this.buffer.length;
    }
    parseValue() {
      this.skipWhitespace();
      let n = this._valueParser(this);
      return n === null ? null : Ee({ kind: "value", value: n });
    }
    parseTypeReference() {
      this.skipWhitespace();
      let n = this._typeParser(this);
      return n === null ? null : Ee({ kind: "reference", ref: n });
    }
    parsePrimitiveType() {
      this.skipWhitespace(), this.isEOF() && this.error("Unexpected end of input");
      for (let n of qn) if (this.match(n)) return n;
      return null;
    }
    parseArguments() {
      let n = [], i = [];
      for (; ; ) {
        let s = this.parseNamedElement();
        if (s === null || (this.match("?") ? i.push(s) : (i.length > 0 && this.error("Optional arguments must come after required arguments"), n.push(s)), this.skipWhitespace(), !this.match(","))) break;
      }
      let t = this.pos, r = this.parseRestArgument() ?? void 0;
      r && i.length > 0 && (this.pos = t, this.error("Optional arguments cannot be followed by a rest argument"));
      let o = Fa([...n, ...i, ...r ? [r] : []]);
      return o && this.error(`Duplicate argument name "${o}"`), [n, i, r];
    }
    parseRestArgument() {
      let n = this.pos, i = this.parseName();
      if (this.skipWhitespace(), !this.match("...")) return this.pos = n, null;
      let t = this.parsePrimitiveType() ?? this.parsePrimaryGroup();
      if (!t && !i && (this.pos = n, this.match("...") && this.parseName())) {
        let r = this.parsePrimitiveType() ?? this.parsePrimaryGroup();
        this.pos = n, this.error("The rest argument indicator is placed before the type, not the name", `Use "${i}: ...${r ? P(r) : "number"}"`);
      }
      return this.skipWhitespace(), this.match(":") && this.error('Unexpected ":" after rest argument. Use "x: ...number"'), t ?? (t = "any"), i ? { name: i, type: t } : { type: t };
    }
    parseFunctionSignature() {
      let n = [], i = [], t;
      this.skipWhitespace();
      let r = this.pos;
      if (!this.match("()")) {
        if (this.match("(")) {
          if ([n, i, t] = this.parseArguments(), this.skipWhitespace(), !this.match(")")) return t && (this.parseNamedElement() && (this.pos = r, this.error("The rest argument must be the last argument")), this.error("The rest argument must have a valid type")), i.length > 0 && (this.parseNamedElement() && this.error("Optional arguments cannot be followed by required arguments"), this.skipWhitespace(), r = this.pos, this.match("->") && (this.pos = r, this.error('Expected ")" to close the argument list')), this.error("Expected an argument")), this.pos = r, null;
        } else if (t = this.parseRestArgument() ?? void 0, t?.name && (this.pos = r, this.error("Named arguments must be enclosed in parentheses")), !t) return this.pos = r, null;
      }
      if (this.skipWhitespace(), !this.match("->")) return this.pos = r, null;
      let o = this.parseType();
      return o === null && this.error("Expected a return type.", "Use `any` for any type, `nothing` for no return value, or `never` for a function that never returns"), n.length === 0 && (n = void 0), i.length === 0 && (i = void 0), Ee({ kind: "signature", args: n, optArgs: i, restArg: t, result: o });
    }
    parseIntegerLiteral() {
      let n = 0;
      for (this.skipWhitespace(); /[1-9]/.test(this.peek()); ) n = n * 10 + parseInt(this.consume());
      return n === 0 ? null : n;
    }
    parseOptionalDimension() {
      let n = this.parseIntegerLiteral();
      return n === null && this.match("?") && (n = -1), n;
    }
    parseDimensions() {
      let n = this.match("("), i = [], t = this.parseOptionalDimension();
      t === null && this.error("Expected a positive integer literal.", "For example : `vector<3>]`");
      do {
        if (i.push(t), this.skipWhitespace(), !this.match("x")) break;
        this.skipWhitespace(), t = this.parseOptionalDimension(), t === null && this.error("Expected a positive integer literal or `?`.", "For example : `matrix<integer^2x3>` or `matrix<integer^?x?>`");
      } while (true);
      return this.skipWhitespace(), n && !this.match(")") && this.error('Expected ")".', "For example `matrix<integer^(2x3)>`"), i;
    }
    parseList() {
      if (this.skipWhitespace(), this.match("list<")) {
        let t = this.parseType(), r;
        return t && this.match("^") ? (r = this.parseDimensions(), r === void 0 && this.error("Expected dimensions after `^`.", "For example `list<number^2x3>`")) : t || (t = "any", r = this.parseDimensions()), this.skipWhitespace(), this.match(">") || this.error('Expected ">".', "For example `list<number>`"), Ee({ kind: "list", elements: t, dimensions: r });
      }
      if (this.match("list(") && this.error("Use `list<type>` instead of `list(type)`.", "For example `list<number>`"), this.match("vector<")) {
        let t = this.parseType(), r;
        if (t && this.match("^")) {
          let o = this.parseIntegerLiteral();
          o === null && this.error("Expected a positive integer literal.", "For example `vector<3>`", "Use `vector` for a vector of unknown size"), r = [o];
        } else t || (t = "number", r = this.parseDimensions());
        return this.skipWhitespace(), this.match(">") || this.error('Expected ">"', "For example `vector<integer>`"), Ee({ kind: "list", elements: t, dimensions: r });
      }
      if (this.match("vector")) return Ee({ kind: "list", elements: "number" });
      if (this.match("matrix<")) {
        let t = this.parseType(), r;
        return t && this.match("^") ? (r = this.parseDimensions(), r === void 0 && this.error("Expected dimensions", "For example `matrix<number^2x3>`", "Use `matrix` for a matrix of unknown size")) : t || (t = "number", r = this.parseDimensions()), this.match(">") || this.error('Expected ">".', "For example `matrix<integer>`"), Ee({ kind: "list", elements: t, dimensions: r });
      }
      if (this.match("matrix(") && this.error("Use `matrix<...>` instead of `matrix(...)`.", "For example `matrix<3x2>` or `matrix<integer^3x2>`"), this.match("vector(") && this.error("Use `vector<...>` instead of `vector(...)`.", "For example `vector<3>` or `vector<integer^3>`"), this.match("matrix")) return Ee({ kind: "list", elements: "number", dimensions: [-1, -1] });
      if (this.match("tensor")) return Ee({ kind: "list", elements: "number", dimensions: void 0 });
      if (!this.match("list<")) return null;
      let n = this.parseType();
      n === null && this.error('Expected a type. Use "[any]" for a collection of any type');
      let i = this.match("^") ? this.parseDimensions() : void 0;
      return this.skipWhitespace(), this.match(">") || this.error('Expected ">".', "For example `list<number^2x3>`"), Ee({ kind: "list", elements: n, dimensions: i });
    }
    parseName() {
      let n = this.pos;
      if (this.skipWhitespace(), this.isEOF() || !/[a-zA-Z_]/.test(this.peek())) return null;
      let i = "";
      for (; !this.isEOF() && /[a-zA-Z0-9_]/.test(this.peek()); ) i += this.consume();
      if (this.skipWhitespace(), !this.match(":")) {
        if (this.match("?:")) {
          let t = this.parseType();
          t && this.error("Optional qualifier must come after the type", `Use "${i}: ${P(t)}?"`), this.error("Optional qualifier must come after the type", `Use "${i}: number?"`);
        }
        return this.pos = n, null;
      }
      return i;
    }
    parseKey() {
      if (this.skipWhitespace(), this.isEOF()) return null;
      let n = "";
      if (this.match("`")) {
        for (; this.peek() !== "`"; ) this.isEOF() && this.error("Expected closing backtick"), this.match("\\`") ? n += "`" : n += this.consume();
        return n;
      }
      for (; !this.isEOF() && !/[:\s]/.test(this.peek()); ) n += this.consume();
      return n;
    }
    parseNamedElement() {
      let n = this.pos, i = this.parseName();
      if (i !== null) {
        let r = this.parseType();
        if (r === null) {
          if (this.skipWhitespace(), this.match("...")) return this.pos = n, null;
          this.pos = n, this.error(`Expected a valid type after "${i}:"`);
        }
        return this.skipWhitespace(), this.match("->") && (this.pos = n, this.error("Single named argument must be enclosed in parentheses")), { name: i, type: r };
      }
      let t = this.parseType();
      return t === null ? (this.pos = n, null) : { type: t };
    }
    parseTupleElements() {
      let n = [], i = this.pos, t = this.parseNamedElement();
      if (t === null) return [];
      for (; n.push(t), this.skipWhitespace(), !!this.match(","); ) i = this.pos, t = this.parseNamedElement(), t === null && (this.pos = i, this.error("Expected a type or unexpected comma"));
      let r = Fa(n);
      return r && this.error(`Duplicate tuple named element "${r}"`), n;
    }
    parseTuple() {
      if (this.skipWhitespace(), !this.match("tuple<")) return this.match("tuple(") && this.error("Use `tuple<type>` instead of `tuple(type)`.", "For example `tuple<number, boolean>` or `tuple<x: integer, y: integer>`"), null;
      let n = this.parseTupleElements();
      return this.skipWhitespace(), this.match(">") || this.error('Expected ">".', "For example `tuple<number, boolean>` or `tuple<x: integer, y: integer>`"), Ee({ kind: "tuple", elements: n });
    }
    parsePrimaryGroup() {
      let n = this.pos;
      if (this.skipWhitespace(), !this.match("(")) return null;
      let i = this.parseType();
      return i === null ? (this.pos = n, null) : (this.skipWhitespace(), this.match(")") && (this.skipWhitespace(), !this.match("->")) ? i : (this.pos = n, null));
    }
    parseSet() {
      if (this.skipWhitespace(), !this.match("set<")) return this.match("set(") && this.error("Use `set<type>` instead of `set(type)`.", "For example `set<number>`"), this.match("set") ? "set" : null;
      let n = this.parseType();
      return n === null && this.error("Expected a type.", "Use `set<number>` for a set of numbers"), this.skipWhitespace(), this.match(">") || this.error("Expected `>`.", "For example `set<number>`"), Ee({ kind: "set", elements: n });
    }
    parseMapElements() {
      let n = [];
      for (; ; ) {
        let t = this.parseKey();
        t === null && this.error("Expected a name for the key.", "For example `map<key: string>`.", "Use backticks for special characters.", "For example `map<`key with space`: string>`"), this.skipWhitespace(), this.match(":") || this.error("Expected a type separated by a `:` after the key.", `For example \`map<${t}: string>\``, "Use backticks for special characters.", "For example `map<`key with space`: string>`");
        let r = this.parseType();
        if (r === null && this.error("Expected a type for the value. Use `any` for any type.", `For example \`map<${t}: any>.\``), n.push([t, r]), this.skipWhitespace(), !this.match(",")) break;
      }
      if (new Set(n.map(([t]) => t)).size !== n.length) {
        let t = n.find(([r], o) => n.slice(o + 1).some(([s]) => s === r))?.[0];
        this.error(`Duplicate map key "${t}"`, "Keys in a map must be unique.");
      }
      return n;
    }
    parseMap() {
      if (this.skipWhitespace(), this.match("map(") && this.error('Use `map<key: type>` instead of `map(key: type)".', "For example `map<key: string>`"), this.match("map<")) {
        let n = this.parseMapElements();
        return this.skipWhitespace(), this.match(">") || this.error("Expected a closing `>`.", "For example `map<key: string>`"), Ee({ kind: "map", elements: Object.fromEntries(n) });
      }
      return this.match("map") ? "map" : null;
    }
    parseCollection() {
      if (this.skipWhitespace(), !this.match("collection<")) return this.match("collection(") && this.error("Use `collection<type>` instead of `collection(type)`.", "For example `collection<number>`"), this.match("collection") ? "collection" : null;
      let n = this.parseType();
      return n === null && this.error("Expected a type.", "Use `collection<number>` for a collection of numbers"), this.skipWhitespace(), this.match(">") || this.error('Expected ">".', "For example `collection<number>`"), Ee({ kind: "collection", elements: n });
    }
    parsePrimary() {
      let n = this.parseNegationType() ?? this.parseList() ?? this.parseSet() ?? this.parseMap() ?? this.parseCollection() ?? this.parseFunctionSignature() ?? this.parseTuple() ?? this.parsePrimitiveType() ?? this.parseValue() ?? this.parseTypeReference() ?? this.parsePrimaryGroup();
      if (n === null) {
        let i = "";
        for (; !this.isEOF() && /[a-zA-Z_]/.test(this.peek()); ) i += this.consume();
        if (!i) return null;
        let t = La(i, [...qn, "vector", "matrix"]);
        return t && this.error(`Unknown keyword "${i}"`, `Did you mean "${t}"?`), null;
      }
      if (this.skipWhitespace(), this.match("->")) {
        let i = this.parseType();
        i === null && this.error("Expected return type", "Use `any` for any type, `nothing` for no return value or `never` for a function that never returns"), n = { kind: "signature", args: [{ type: n }], result: i };
      }
      return n;
    }
    parseNegationType() {
      if (!this.match("!")) return null;
      let n = this.parsePrimary();
      return n === null && this.error("Expected type"), Ee({ kind: "negation", type: n });
    }
    parseIntersectionType() {
      let n = this.parsePrimary();
      if (n === null) return null;
      let i = [n];
      for (this.skipWhitespace(); this.match("&"); ) n = this.parsePrimary(), n === null && this.error("Expected type"), i.push(n);
      return i.length === 1 ? i[0] : Ee({ kind: "intersection", types: i });
    }
    parseUnionType() {
      let n = this.parseIntersectionType();
      if (n === null) return null;
      let i = [n];
      for (this.skipWhitespace(); this.match("|"); ) n = this.parseIntersectionType(), n === null && this.error("Expected type"), i.push(n);
      return i.length === 1 ? i[0] : Ee({ kind: "union", types: i });
    }
    parseType() {
      return this.skipWhitespace(), this.isEOF() ? null : this.parseUnionType();
    }
    parse() {
      let n = this.parseType(), i = this.pos;
      return this.parseNamedElement() !== null && (this.pos = i, this.error("Named elements must be enclosed in parentheses")), n === null && this.error("Syntax error. The type was not recognized."), this.skipWhitespace(), this.isEOF() || this.error("Unexpected character. Could be some mismatched parentheses."), n;
    }
  };
  function B(e12) {
    return e12 === void 0 ? void 0 : Tn(e12) ? e12 : typeof e12 != "string" ? void 0 : qn.includes(e12) ? e12 : new wo(e12).parse();
  }
  function Fa(e12) {
    let n = /* @__PURE__ */ new Set();
    for (let { name: i } of e12) if (i) {
      if (n.has(i)) return i;
      n.add(i);
    }
    return "";
  }
  var Ed = { number: dr, finite_number: ["finite_complex", "finite_imaginary", "finite_real", "finite_integer", "finite_rational"], non_finite_number: [], complex: ["finite_complex", "finite_imaginary", "finite_real", "finite_rational", "finite_integer", "non_finite_number", "imaginary", "real", "rational", "integer"], finite_complex: ["finite_imaginary", "finite_real", "finite_rational", "finite_integer"], imaginary: ["finite_imaginary", "non_finite_number"], finite_imaginary: [], real: ["finite_real", "finite_rational", "finite_integer", "non_finite_number", "rational", "integer"], finite_real: ["finite_rational", "finite_integer"], rational: ["finite_rational", "finite_integer", "integer", "non_finite_number"], finite_rational: ["finite_integer"], integer: ["finite_integer", "non_finite_number"], finite_integer: [], any: qn, unknown: [], nothing: [], never: [], error: [], value: Io, scalar: mr, collection: pr, list: [], set: [], tuple: [], map: [], function: [], symbol: [], boolean: [], string: [], expression: Bo };
  function Nd(e12, n) {
    return n === "any" || e12 === "never" ? true : e12 === "unknown" || n === "unknown" ? false : e12 === n ? true : Ed[n].includes(e12);
  }
  function g(e12, n) {
    if (typeof e12 == "string" && typeof n == "string" && e12 === n || (typeof e12 == "string" && (e12 = B(e12)), typeof n == "string" && (n = B(n)), n === "any")) return true;
    if (n === "never" || n === "error") return false;
    if (n === "nothing") return e12 === "nothing";
    if (e12 === "nothing" || e12 === "unknown" || n === "unknown") return false;
    if (typeof n == "string") return typeof e12 == "string" ? Nd(e12, n) : n === "numeric" ? qa(e12) : n === "function" ? Ga(e12) : n === "expression" ? vd(e12) : n === "scalar" ? $a(e12) : n === "value" ? za(e12) : n === "collection" ? Va(e12) : n === "tuple" ? e12.kind === "tuple" : n === "list" ? e12.kind === "list" : n === "set" ? e12.kind === "set" : n === "map" ? e12.kind === "map" : e12.kind === "union" ? e12.types.some((i) => g(i, n)) : false;
    if (n.kind === "union") return n.types.some((i) => g(e12, i));
    if (typeof e12 == "string") return false;
    if (e12.kind === "reference" && n.kind === "reference") return e12.ref === n.ref;
    if (e12.kind === "union") return e12.types.some((i) => g(i, n));
    if (e12.kind === "intersection" && n.kind === "intersection") return n.types.every((i) => e12.types.some((t) => g(t, i)));
    if (e12.kind === "intersection") return e12.types.every((i) => g(i, n));
    if (n.kind === "intersection") return n.types.every((i) => g(e12, i));
    if (e12.kind === "signature" && n.kind === "signature") {
      if (!g(e12.result, n.result)) return false;
      if (n.args) {
        if (!e12.args || e12.args.length !== n.args.length) return false;
        for (let i = 0; i < e12.args.length; i++) if (!g(n.args[i].type, e12.args[i].type)) return false;
      } else if (e12.args) return false;
      if (n.optArgs) {
        if (!e12.optArgs || e12.optArgs.length !== n.optArgs.length) return false;
        for (let i = 0; i < e12.optArgs.length; i++) if (!g(n.optArgs[i].type, e12.optArgs[i].type)) return false;
      } else if (e12.optArgs) return false;
      if (n.restArg) {
        if (!e12.restArg || !g(n.restArg.type, e12.restArg.type)) return false;
      } else if (e12.restArg) return false;
      return true;
    }
    if (e12.kind === "map" && n.kind === "map") {
      let i = Object.entries(e12.elements), t = Object.entries(n.elements);
      for (let r = 0; r < t.length; r++) {
        let [o, s] = t[r], a = i.findIndex((f) => f[0] === o);
        if (a === -1) return false;
        let u = s, l = i[a][1];
        if (!g(l, u)) return false;
      }
      return true;
    }
    if (n.kind === "collection") return e12.kind === "collection" || e12.kind === "list" || e12.kind === "set" ? !!g(e12.elements, n.elements) : e12.kind === "tuple" ? e12.elements.every((i) => g(i.type, n.elements)) : false;
    if (e12.kind === "tuple" && n.kind === "tuple") {
      if (e12.elements.length !== n.elements.length) return false;
      for (let i = 0; i < e12.elements.length; i++) if (!g(e12.elements[i].type, n.elements[i].type)) return false;
      return true;
    }
    if (n.kind === "list" && e12.kind === "list") {
      if (!g(e12.elements, n.elements)) return false;
      if (n.dimensions) {
        if (!e12.dimensions || e12.dimensions.length !== n.dimensions.length) return false;
        for (let i = 0; i < e12.dimensions.length; i++) if (n.dimensions[i] !== -1 && e12.dimensions[i] !== n.dimensions[i]) return false;
      }
      return true;
    }
    return n.kind === "set" && e12.kind === "set" ? !!g(e12.elements, n.elements) : false;
  }
  function qa(e12) {
    return typeof e12 == "string" ? dr.includes(e12) : false;
  }
  function $a(e12) {
    return qa(e12) ? true : typeof e12 == "string" ? mr.includes(e12) : false;
  }
  function Va(e12) {
    return typeof e12 == "string" ? pr.includes(e12) : ["collection", "list", "set", "tuple", "map"].includes(e12.kind);
  }
  function za(e12) {
    return $a(e12) || Va(e12);
  }
  function Ga(e12) {
    return e12 === "function" || typeof e12 != "string" && e12.kind === "signature";
  }
  function vd(e12) {
    return !!(typeof e12 == "string" && ["expression", "symbol", "function"].includes(e12) || za(e12) || Ga(e12));
  }
  function Sd(e12) {
    let n = [];
    for (let i = 0; i < e12.length; i++) {
      let t = e12.charCodeAt(i);
      if (t >= 55296 && t <= 56319) {
        let r = e12.charCodeAt(i + 1);
        if (r >= 56320 && r <= 57343) {
          let o = t - 55296, s = r - 56320;
          t = 2 ** 16 + o * 2 ** 10 + s, i++;
        }
      }
      n.push(t);
    }
    return n;
  }
  var hr = 8205;
  var Ua = [127462, 127487];
  function ja(e12) {
    return e12 === hr || e12 === 65038 || e12 === 65039 || e12 >= 127995 && e12 <= 128e3 || e12 >= 129456 && e12 <= 129460 || e12 >= 917536 && e12 <= 917632;
  }
  function Td(e12) {
    return e12 >= Ua[0] && e12 <= Ua[1];
  }
  function Za(e12) {
    if (/^[\u0020-\u00FF]*$/.test(e12)) return e12;
    let n = [], i = Sd(e12), t = 0;
    for (; t < i.length; ) {
      let r = i[t++], o = i[t];
      if (o === hr) {
        let s = t - 1;
        for (t += 2; i[t] === hr; ) t += 2;
        n.push(String.fromCodePoint(...i.slice(s, 2 * t - s + 1)));
      } else if (ja(o)) {
        let s = t - 1;
        for (; ja(i[t]); ) t += i[t] === hr ? 2 : 1;
        n.push(String.fromCodePoint(...i.slice(s, 2 * t - s - 1)));
      } else Td(r) ? (t += 1, n.push(String.fromCodePoint(...i.slice(t - 2, 2)))) : n.push(String.fromCodePoint(r));
    }
    return n;
  }
  var Do = class {
    constructor(n) {
      this.obeyspaces = false;
      n = n.replace(/[\u200E\u200F\u2066-\u2069\u202A-\u202E]/g, ""), n = n.replace(/\u2212/g, "-"), this.s = Za(n), this.pos = 0;
    }
    end() {
      return this.pos >= this.s.length;
    }
    get() {
      return this.pos < this.s.length ? this.s[this.pos++] : "";
    }
    peek() {
      return this.s[this.pos];
    }
    match(n) {
      let i;
      return typeof this.s == "string" ? i = n.exec(this.s.slice(this.pos)) : i = n.exec(this.s.slice(this.pos).join("")), i?.[0] ? (this.pos += i[0].length, i[0]) : null;
    }
    next() {
      if (this.end()) return null;
      if (!this.obeyspaces && this.match(/^[ \f\n\r\t\v\xA0\u2028\u2029]+/)) return "<space>";
      if (this.obeyspaces && this.match(/^[ \f\n\r\t\v\xA0\u2028\u2029]/)) return "<space>";
      let n = this.get();
      if (n === "\\") {
        if (!this.end()) {
          let i = this.match(/^[a-zA-Z]+/);
          if (i) this.match(/^[ \f\n\r\t\v\xA0\u2028\u2029]*/);
          else if (i = this.get(), i === " ") return "<space>";
          return "\\" + i;
        }
      } else {
        if (n === "{") return "<{>";
        if (n === "}") return "<}>";
        if (n === "^") {
          if (this.peek() === "^") {
            this.get();
            let i = this.match(/^(\^(\^(\^(\^[0-9a-f])?[0-9a-f])?[0-9a-f])?[0-9a-f])?[0-9a-f][0-9a-f]/);
            if (i) return String.fromCodePoint(parseInt(i.slice(i.lastIndexOf("^") + 1), 16));
          }
          return n;
        } else if (n === "#") {
          if (!this.end()) {
            let i = false;
            if (/[0-9?]/.test(this.peek()) && (i = true, this.pos + 1 < this.s.length)) {
              let t = this.s[this.pos + 1];
              i = /[^0-9A-Za-z]/.test(t);
            }
            return i ? "#" + this.get() : "#";
          }
        } else if (n === "$") return this.peek() === "$" ? (this.get(), "<$$>") : "<$>";
      }
      return n;
    }
  };
  function _d(e12, n) {
    let i = e12.next();
    if (!i) return [];
    let t = [];
    if (i !== "\\relax") {
      if (i === "\\noexpand") i = e12.next(), i && t.push(i);
      else if (i === "\\obeyspaces") e12.obeyspaces = true;
      else if (i === "\\space" || i === "~") t.push("<space>");
      else if (i === "\\bgroup") t.push("<{>");
      else if (i === "\\egroup") t.push("<}>");
      else if (i === "\\string") i = e12.next(), i && (i[0] === "\\" ? Array.from(i).forEach((r) => t.push(r === "\\" ? "\\backslash" : r)) : i === "<{>" ? t.push("\\{") : i === "<space>" ? t.push("~") : i === "<}>" && t.push("\\}"));
      else if (i === "\\csname") {
        for (; e12.peek() === "<space>"; ) e12.next();
        let r = "", o = false, s = [];
        do {
          if (s.length === 0) if (/^#[0-9?]$/.test(e12.peek())) {
            let a = e12.get().slice(1);
            s = de(n?.[a] ?? n?.["?"] ?? "\\placeholder{}", n), i = s[0];
          } else i = e12.next(), s = i ? [i] : [];
          o = s.length === 0, !o && i === "\\endcsname" && (o = true, s.shift()), o || (o = i === "<$>" || i === "<$$>" || i === "<{>" || i === "<}>" || !!i && i.length > 1 && i[0] === "\\"), o || (r += s.shift());
        } while (!o);
        r && t.push("\\" + r), t = t.concat(s);
      } else if (i !== "\\endcsname") if (i.length > 1 && i[0] === "#") {
        let r = i.slice(1);
        t = t.concat(de(n?.[r] ?? n?.["?"] ?? "\\placeholder{}", n));
      } else t.push(i);
    }
    return t;
  }
  function de(e12, n = []) {
    let i = e12.toString().split(/\r?\n/), t = "", r = "";
    for (let a of i) {
      t += r, r = " ";
      let u = a.match(/((?:\\%)|[^%])*/);
      u !== null && (t += u[0]);
    }
    let o = new Do(t), s = [];
    do
      s.push(..._d(o, n));
    while (!o.end());
    return s;
  }
  function xr(e12) {
    return de(e12).length;
  }
  function E(e12) {
    let n = "", i = "";
    for (let t of e12) t != null && (typeof t == "string" && (/[a-zA-Z]/.test(t[0]) && (i += n), /\\[a-zA-Z]+\*?$/.test(t) ? n = " " : n = ""), i += t.toString());
    return i;
  }
  function _i(e12, n, i) {
    return n.includes(e12) && (n = `{${n}}`), /^[0-9]$/.test(i) ? `${n}${e12}${i}` : `${n}${e12}{${i}}`;
  }
  function on(e12) {
    let n = [];
    if (Array.isArray(e12)) for (let t of e12) Array.isArray(t) ? n = [...n, ...t] : n.push(t);
    else n = [e12];
    return E(n.map((t) => ({ "<space>": " ", "<$$>": "$$", "<$>": "$", "<{>": "{", "<}>": "}" })[t] ?? t));
  }
  function Ha(e12) {
    return !("kind" in e12) || e12.kind === "expression";
  }
  function Wa(e12) {
    return "kind" in e12 && e12.kind === "symbol";
  }
  function xt(e12) {
    return "kind" in e12 && e12.kind === "matchfix";
  }
  function Ro(e12) {
    return "kind" in e12 && e12.kind === "infix";
  }
  function yr(e12) {
    return "kind" in e12 && e12.kind === "prefix";
  }
  function Ao(e12) {
    return "kind" in e12 && e12.kind === "postfix";
  }
  function Ja(e12) {
    return "kind" in e12 && e12.kind === "environment";
  }
  var Kn = [{ latexTrigger: ["\\not", "<"], kind: "infix", associativity: "any", precedence: 246, parse: "NotLess" }, { name: "NotLess", latexTrigger: ["\\nless"], kind: "infix", associativity: "any", precedence: 246 }, { latexTrigger: ["<"], kind: "infix", associativity: "any", precedence: 245, parse: "Less" }, { name: "Less", latexTrigger: ["\\lt"], kind: "infix", associativity: "any", precedence: 245 }, { latexTrigger: ["<", "="], kind: "infix", associativity: "any", precedence: 241, parse: "LessEqual" }, { name: "LessEqual", latexTrigger: ["\\le"], kind: "infix", associativity: "any", precedence: 241 }, { latexTrigger: ["\\leq"], kind: "infix", associativity: "any", precedence: 241, parse: "LessEqual" }, { latexTrigger: ["\\leqslant"], kind: "infix", associativity: "any", precedence: 250, parse: "LessEqual" }, { name: "LessNotEqual", latexTrigger: ["\\lneqq"], kind: "infix", associativity: "any", precedence: 245 }, { name: "NotLessNotEqual", latexTrigger: ["\\nleqq"], kind: "infix", associativity: "any", precedence: 245 }, { name: "LessOverEqual", latexTrigger: ["\\leqq"], kind: "infix", associativity: "any", precedence: 250 }, { name: "GreaterOverEqual", latexTrigger: ["\\geqq"], kind: "infix", associativity: "any", precedence: 250, parse: "GreaterEqual" }, { name: "Equal", latexTrigger: ["="], kind: "infix", associativity: "right", precedence: 245 }, { latexTrigger: ["*", "="], kind: "infix", associativity: "right", precedence: 245, parse: "StarEqual" }, { name: "StarEqual", latexTrigger: ["\\star", "="], kind: "infix", associativity: "right", precedence: 245 }, { name: "PlusEqual", latexTrigger: ["+", "="], kind: "infix", associativity: "right", precedence: 245 }, { name: "MinusEqual", latexTrigger: ["-", "="], kind: "infix", associativity: "right", precedence: 245 }, { name: "SlashEqual", latexTrigger: ["/", "="], kind: "infix", associativity: "right", precedence: 245 }, { name: "EqualEqual", latexTrigger: ["=", "="], kind: "infix", associativity: "right", precedence: 245 }, { name: "EqualEqualEqual", latexTrigger: ["=", "=", "="], kind: "infix", associativity: "right", precedence: 250 }, { name: "TildeFullEqual", latexTrigger: ["\\cong"], kind: "infix", associativity: "right", precedence: 245 }, { name: "NotTildeFullEqual", latexTrigger: ["\\ncong"], kind: "infix", associativity: "right", precedence: 245 }, { name: "Approx", latexTrigger: ["\\approx"], kind: "infix", associativity: "right", precedence: 247 }, { name: "NotApprox", latexTrigger: ["\\not", "\\approx"], kind: "infix", associativity: "right", precedence: 247 }, { name: "ApproxEqual", latexTrigger: ["\\approxeq"], kind: "infix", associativity: "right", precedence: 245 }, { name: "NotApproxEqual", latexTrigger: ["\\not", "\\approxeq"], kind: "infix", associativity: "right", precedence: 250 }, { name: "NotEqual", latexTrigger: ["\\ne"], kind: "infix", associativity: "right", precedence: 255 }, { name: "Unequal", latexTrigger: ["!", "="], kind: "infix", associativity: "right", precedence: 245 }, { name: "GreaterEqual", latexTrigger: ["\\ge"], kind: "infix", associativity: "right", precedence: 242 }, { latexTrigger: ["\\geq"], kind: "infix", associativity: "right", precedence: 242, parse: "GreaterEqual" }, { latexTrigger: [">", "="], kind: "infix", associativity: "right", precedence: 243, parse: "GreaterEqual" }, { latexTrigger: ["\\geqslant"], kind: "infix", associativity: "right", precedence: 250, parse: "GreaterEqual" }, { name: "GreaterNotEqual", latexTrigger: ["\\gneqq"], kind: "infix", associativity: "right", precedence: 245 }, { name: "NotGreaterNotEqual", latexTrigger: ["\\ngeqq"], kind: "infix", associativity: "right", precedence: 245 }, { latexTrigger: [">"], kind: "infix", associativity: "right", precedence: 245, parse: "Greater" }, { name: "Greater", latexTrigger: ["\\gt"], kind: "infix", associativity: "right", precedence: 245 }, { name: "NotGreater", latexTrigger: ["\\ngtr"], kind: "infix", associativity: "right", precedence: 244 }, { latexTrigger: ["\\not", ">"], kind: "infix", associativity: "right", precedence: 244, parse: "NotGreater" }, { name: "RingEqual", latexTrigger: ["\\circeq"], kind: "infix", associativity: "right", precedence: 245 }, { name: "TriangleEqual", latexTrigger: ["\\triangleq"], kind: "infix", associativity: "right", precedence: 245 }, { name: "DotEqual", latexTrigger: ["\\doteq"], kind: "infix", associativity: "right", precedence: 250 }, { name: "DotEqualDot", latexTrigger: ["\\doteqdot"], kind: "infix", associativity: "right", precedence: 250 }, { name: "FallingDotEqual", latexTrigger: ["\\fallingdotseq"], kind: "infix", associativity: "right", precedence: 250 }, { name: "RisingDotEqual", latexTrigger: ["\\fallingdotseq"], kind: "infix", associativity: "right", precedence: 250 }, { name: "QuestionEqual", latexTrigger: ["\\questeq"], kind: "infix", associativity: "right", precedence: 245 }, { name: "MuchLess", latexTrigger: ["\\ll"], kind: "infix", associativity: "right", precedence: 245 }, { name: "MuchGreater", latexTrigger: ["\\gg"], kind: "infix", associativity: "right", precedence: 245 }, { name: "Precedes", latexTrigger: ["\\prec"], kind: "infix", associativity: "right", precedence: 245 }, { name: "Succeeds", latexTrigger: ["\\succ"], kind: "infix", associativity: "right", precedence: 245 }, { name: "PrecedesEqual", latexTrigger: ["\\preccurlyeq"], kind: "infix", associativity: "right", precedence: 245 }, { name: "SucceedsEqual", latexTrigger: ["\\curlyeqprec"], kind: "infix", associativity: "right", precedence: 245 }, { name: "NotPrecedes", latexTrigger: ["\\nprec"], kind: "infix", associativity: "right", precedence: 245 }, { name: "NotSucceeds", latexTrigger: ["\\nsucc"], kind: "infix", associativity: "right", precedence: 245 }, { name: "Between", latexTrigger: ["\\between"], kind: "infix", associativity: "right", precedence: 250 }];
  function Mo(e12, n, i = {}) {
    let { contract: t = 0.125, step: r = 1, power: o = 2, atol: s = 1e-16, rtol: a = s > 0 ? 0 : Math.sqrt(Number.EPSILON), maxeval: u = 1e6, breaktol: l = 2 } = i;
    if (!isFinite(n)) return Mo((N) => e12(1 / N), 1 / n, { rtol: a, atol: s, maxeval: u, contract: Math.abs(t) > 1 ? 1 / t : t, step: 1 / r, power: o });
    let f = r, c = Math.pow(1 / t, o), d = e12(n + f), m = [d], b = 1 / 0, y = 1;
    for (; y < u; ) {
      y += 1, f *= t, m.push(e12(n + f));
      let N = c, T = 1 / 0;
      for (let R = m.length - 2; R >= 0; R--) {
        let _ = m[R];
        m[R] = m[R + 1] + (m[R + 1] - m[R]) / (N - 1);
        let L = Math.abs(m[R] - _);
        T = Math.min(T, L), L < b && (d = m[R], b = L), N *= c;
      }
      if (T > l * b || !isFinite(T) || b <= Math.max(a * Math.abs(d), s)) break;
    }
    return [d, b];
  }
  function K(e12) {
    if (typeof e12 == "bigint") return e12;
    if (typeof e12 == "number") return Number.isInteger(e12) ? e12 >= Number.MAX_SAFE_INTEGER && e12 <= Number.MAX_SAFE_INTEGER ? BigInt(e12) : K(e12.toString()) : null;
    if (e12 instanceof ge) return e12.isInteger() ? K(e12.toString()) : null;
    let n = e12.toLowerCase(), i = n.match(/([+-]?[0-9]*)(?:\.([0-9]+))?e([+-]?[0-9]+)$/);
    if (i) {
      let o = parseInt(i[3]) - (i[2] ? i[2].length : 0);
      if (o < 0) return null;
      n = (i[1] ?? "") + (i[2] ?? "") + "0".repeat(o);
    }
    if (n.indexOf(".") >= 0 || !/^[+-]?[0-9]+$/.test(n)) return null;
    try {
      return BigInt(n);
    } catch (r) {
      return console.error(r.message), null;
    }
  }
  var Ya = 1125899906842597;
  var Co = /* @__PURE__ */ new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997, 1009, 1013, 1019, 1021, 1031, 1033, 1039, 1049, 1051, 1061, 1063, 1069, 1087, 1091, 1093, 1097, 1103, 1109, 1117, 1123, 1129, 1151, 1153, 1163, 1171, 1181, 1187, 1193, 1201, 1213, 1217, 1223, 1229, 1231, 1237, 1249, 1259, 1277, 1279, 1283, 1289, 1291, 1297, 1301, 1303, 1307, 1319, 1321, 1327, 1361, 1367, 1373, 1381, 1399, 1409, 1423, 1427, 1429, 1433, 1439, 1447, 1451, 1453, 1459, 1471, 1481, 1483, 1487, 1489, 1493, 1499, 1511, 1523, 1531, 1543, 1549, 1553, 1559, 1567, 1571, 1579, 1583, 1597, 1601, 1607, 1609, 1613, 1619, 1621, 1627, 1637, 1657, 1663, 1667, 1669, 1693, 1697, 1699, 1709, 1721, 1723, 1733, 1741, 1747, 1753, 1759, 1777, 1783, 1787, 1789, 1801, 1811, 1823, 1831, 1847, 1861, 1867, 1871, 1873, 1877, 1879, 1889, 1901, 1907, 1913, 1931, 1933, 1949, 1951, 1973, 1979, 1987, 1993, 1997, 1999, 2003, 2011, 2017, 2027, 2029, 2039, 2053, 2063, 2069, 2081, 2083, 2087, 2089, 2099, 2111, 2113, 2129, 2131, 2137, 2141, 2143, 2153, 2161, 2179, 2203, 2207, 2213, 2221, 2237, 2239, 2243, 2251, 2267, 2269, 2273, 2281, 2287, 2293, 2297, 2309, 2311, 2333, 2339, 2341, 2347, 2351, 2357, 2371, 2377, 2381, 2383, 2389, 2393, 2399, 2411, 2417, 2423, 2437, 2441, 2447, 2459, 2467, 2473, 2477, 2503, 2521, 2531, 2539, 2543, 2549, 2551, 2557, 2579, 2591, 2593, 2609, 2617, 2621, 2633, 2647, 2657, 2659, 2663, 2671, 2677, 2683, 2687, 2689, 2693, 2699, 2707, 2711, 2713, 2719, 2729, 2731, 2741, 2749, 2753, 2767, 2777, 2789, 2791, 2797, 2801, 2803, 2819, 2833, 2837, 2843, 2851, 2857, 2861, 2879, 2887, 2897, 2903, 2909, 2917, 2927, 2939, 2953, 2957, 2963, 2969, 2971, 2999, 3001, 3011, 3019, 3023, 3037, 3041, 3049, 3061, 3067, 3079, 3083, 3089, 3109, 3119, 3121, 3137, 3163, 3167, 3169, 3181, 3187, 3191, 3203, 3209, 3217, 3221, 3229, 3251, 3253, 3257, 3259, 3271, 3299, 3301, 3307, 3313, 3319, 3323, 3329, 3331, 3343, 3347, 3359, 3361, 3371, 3373, 3389, 3391, 3407, 3413, 3433, 3449, 3457, 3461, 3463, 3467, 3469, 3491, 3499, 3511, 3517, 3527, 3529, 3533, 3539, 3541, 3547, 3557, 3559, 3571, 3581, 3583, 3593, 3607, 3613, 3617, 3623, 3631, 3637, 3643, 3659, 3671, 3673, 3677, 3691, 3697, 3701, 3709, 3719, 3727, 3733, 3739, 3761, 3767, 3769, 3779, 3793, 3797, 3803, 3821, 3823, 3833, 3847, 3851, 3853, 3863, 3877, 3881, 3889, 3907, 3911, 3917, 3919, 3923, 3929, 3931, 3943, 3947, 3967, 3989, 4001, 4003, 4007, 4013, 4019, 4021, 4027, 4049, 4051, 4057, 4073, 4079, 4091, 4093, 4099, 4111, 4127, 4129, 4133, 4139, 4153, 4157, 4159, 4177, 4201, 4211, 4217, 4219, 4229, 4231, 4241, 4243, 4253, 4259, 4261, 4271, 4273, 4283, 4289, 4297, 4327, 4337, 4339, 4349, 4357, 4363, 4373, 4391, 4397, 4409, 4421, 4423, 4441, 4447, 4451, 4457, 4463, 4481, 4483, 4493, 4507, 4513, 4517, 4519, 4523, 4547, 4549, 4561, 4567, 4583, 4591, 4597, 4603, 4621, 4637, 4639, 4643, 4649, 4651, 4657, 4663, 4673, 4679, 4691, 4703, 4721, 4723, 4729, 4733, 4751, 4759, 4783, 4787, 4789, 4793, 4799, 4801, 4813, 4817, 4831, 4861, 4871, 4877, 4889, 4903, 4909, 4919, 4931, 4933, 4937, 4943, 4951, 4957, 4967, 4969, 4973, 4987, 4993, 4999, 5003, 5009, 5011, 5021, 5023, 5039, 5051, 5059, 5077, 5081, 5087, 5099, 5101, 5107, 5113, 5119, 5147, 5153, 5167, 5171, 5179, 5189, 5197, 5209, 5227, 5231, 5233, 5237, 5261, 5273, 5279, 5281, 5297, 5303, 5309, 5323, 5333, 5347, 5351, 5381, 5387, 5393, 5399, 5407, 5413, 5417, 5419, 5431, 5437, 5441, 5443, 5449, 5471, 5477, 5479, 5483, 5501, 5503, 5507, 5519, 5521, 5527, 5531, 5557, 5563, 5569, 5573, 5581, 5591, 5623, 5639, 5641, 5647, 5651, 5653, 5657, 5659, 5669, 5683, 5689, 5693, 5701, 5711, 5717, 5737, 5741, 5743, 5749, 5779, 5783, 5791, 5801, 5807, 5813, 5821, 5827, 5839, 5843, 5849, 5851, 5857, 5861, 5867, 5869, 5879, 5881, 5897, 5903, 5923, 5927, 5939, 5953, 5981, 5987, 6007, 6011, 6029, 6037, 6043, 6047, 6053, 6067, 6073, 6079, 6089, 6091, 6101, 6113, 6121, 6131, 6133, 6143, 6151, 6163, 6173, 6197, 6199, 6203, 6211, 6217, 6221, 6229, 6247, 6257, 6263, 6269, 6271, 6277, 6287, 6299, 6301, 6311, 6317, 6323, 6329, 6337, 6343, 6353, 6359, 6361, 6367, 6373, 6379, 6389, 6397, 6421, 6427, 6449, 6451, 6469, 6473, 6481, 6491, 6521, 6529, 6547, 6551, 6553, 6563, 6569, 6571, 6577, 6581, 6599, 6607, 6619, 6637, 6653, 6659, 6661, 6673, 6679, 6689, 6691, 6701, 6703, 6709, 6719, 6733, 6737, 6761, 6763, 6779, 6781, 6791, 6793, 6803, 6823, 6827, 6829, 6833, 6841, 6857, 6863, 6869, 6871, 6883, 6899, 6907, 6911, 6917, 6947, 6949, 6959, 6961, 6967, 6971, 6977, 6983, 6991, 6997, 7001, 7013, 7019, 7027, 7039, 7043, 7057, 7069, 7079, 7103, 7109, 7121, 7127, 7129, 7151, 7159, 7177, 7187, 7193, 7207, 7211, 7213, 7219, 7229, 7237, 7243, 7247, 7253, 7283, 7297, 7307, 7309, 7321, 7331, 7333, 7349, 7351, 7369, 7393, 7411, 7417, 7433, 7451, 7457, 7459, 7477, 7481, 7487, 7489, 7499, 7507, 7517, 7523, 7529, 7537, 7541, 7547, 7549, 7559, 7561, 7573, 7577, 7583, 7589, 7591, 7603, 7607, 7621, 7639, 7643, 7649, 7669, 7673, 7681, 7687, 7691, 7699, 7703, 7717, 7723, 7727, 7741, 7753, 7757, 7759, 7789, 7793, 7817, 7823, 7829, 7841, 7853, 7867, 7873, 7877, 7879, 7883, 7901, 7907, 7919]);
  var Qa = 7919;
  function Xa(e12) {
    if (Number.isInteger(e12) && e12 >= 0 && e12 < Number.MAX_SAFE_INTEGER, e12 <= 3) return { [e12]: 1 };
    let n = {}, i = 0;
    for (; e12 % 2 === 0; ) i += 1, e12 /= 2;
    for (i > 0 && (n[2] = i), i = 0; e12 % 3 === 0; ) i += 1, e12 /= 3;
    i > 0 && (n[3] = i);
    let t = false;
    for (; !t; ) {
      if (e12 === 1) return n;
      let r = Math.sqrt(e12);
      t = true;
      for (let o = 6; o <= r + 6; o += 6) {
        if (e12 % (o - 1) === 0) {
          n[o - 1] = (n[o - 1] ?? 0) + 1, e12 /= o - 1, t = false;
          break;
        }
        if (e12 % (o + 1) === 0) {
          n[o + 1] = (n[o + 1] ?? 0) + 1, e12 /= o + 1, t = false;
          break;
        }
      }
    }
    return n[e12] !== void 0 ? n[e12] += 1 : n[e12] = 1, n;
  }
  function Po(e12) {
    if (!Number.isInteger(e12) || !Number.isFinite(e12) || Number.isNaN(e12) || e12 <= 1) return false;
    if (e12 <= Qa) return Co.has(e12);
    for (let n of Co) if (e12 % n === 0) return false;
    return e12 < Ya && Id(e12), kd(e12, 30) ? void 0 : false;
  }
  function Id(e12) {
    if (e12 === 1) return 1;
    if (e12 % 2 === 0) return 2;
    if (e12 % 3 === 0) return 3;
    if (e12 % 5 === 0) return 5;
    let n = Math.floor(Math.sqrt(e12)), i = 7;
    for (; i <= n; ) {
      if (e12 % i === 0) return i;
      if (e12 % (i + 4) === 0) return i + 4;
      if (e12 % (i + 6) === 0) return i + 6;
      if (e12 % (i + 10) === 0) return i + 10;
      if (e12 % (i + 12) === 0) return i + 12;
      if (e12 % (i + 16) === 0) return i + 16;
      if (e12 % (i + 22) === 0) return i + 22;
      if (e12 % (i + 24) === 0) return i + 24;
      i += 30;
    }
    return e12;
  }
  function Ka(e12) {
    if (e12 <= 1) return false;
    if (e12 <= Qa) return Po(Number(e12));
    for (let n of Co) if (e12 % BigInt(n) === BigInt(0)) return false;
    return e12 < Ya && (e12 = Bd(e12)), wd(e12, 30) ? void 0 : false;
  }
  function Bd(e12) {
    if (e12 === BigInt(1)) return BigInt(1);
    if (e12 % BigInt(2) === BigInt(0)) return BigInt(2);
    if (e12 % BigInt(3) === BigInt(0)) return BigInt(3);
    if (e12 % BigInt(5) === BigInt(0)) return BigInt(5);
    let n = BigInt(Math.floor(Math.sqrt(Number(e12)))), i = BigInt(7);
    for (; i <= n; ) {
      if (e12 % i === BigInt(0)) return i;
      if (e12 % (i + BigInt(4)) === BigInt(0)) return i + BigInt(4);
      if (e12 % (i + BigInt(6)) === BigInt(0)) return i + BigInt(6);
      if (e12 % (i + BigInt(10)) === BigInt(0)) return i + BigInt(10);
      if (e12 % (i + BigInt(12)) === BigInt(0)) return i + BigInt(12);
      if (e12 % (i + BigInt(16)) === BigInt(0)) return i + BigInt(16);
      if (e12 % (i + BigInt(22)) === BigInt(0)) return i + BigInt(22);
      if (e12 % (i + BigInt(24)) === BigInt(0)) return i + BigInt(24);
      i += BigInt(30);
    }
    return e12;
  }
  function kd(e12, n) {
    let i = 0, t = e12 - 1;
    for (; t % 2 === 0; ) t /= 2, ++i;
    e: do {
      let r = Math.pow(2 + Math.floor(Math.random() * (e12 - 3)), t) % e12;
      if (!(r === 1 || r === e12 - 1)) {
        for (let o = i - 1; o--; ) {
          if (r = r * r % e12, r === 1) return false;
          if (r === e12 - 1) continue e;
        }
        return false;
      }
    } while (--n);
    return true;
  }
  function wd(e12, n) {
    let i = 0, t = e12 - BigInt(1);
    for (; t % BigInt(2) === BigInt(0); ) t = t / BigInt(2), ++i;
    e: do {
      let r = BigInt(2 + Math.floor(Math.random() * (Number(e12) - 3))) ** t % e12;
      if (!(r === BigInt(1) || r === e12 - BigInt(1))) {
        for (let o = i - 1; o--; ) {
          if (r = r * r % e12, r === BigInt(1)) return false;
          if (r === e12 - BigInt(1)) continue e;
        }
        return false;
      }
    } while (--n);
    return true;
  }
  var pg = [BigInt(4), BigInt(2), BigInt(4), BigInt(2), BigInt(4), BigInt(6), BigInt(2), BigInt(6)];
  var Oo = 21;
  var Dd = 53;
  var pn = Math.floor(Math.log10(Math.pow(2, Dd)));
  var ni = 1e-10;
  var O = 1e6;
  var eu = 1024;
  var yt = 1e6;
  function Ii(e12, n) {
    if (e12 >= Number.MAX_SAFE_INTEGER) return [1, e12];
    if (e12 === 0) return [0, 0];
    if (e12 === 1) return [1, 1];
    if (Number.isInteger(e12) && e12 > 0 && e12 < Number.MAX_SAFE_INTEGER, n === 2) {
      let o = [[0, 0], [1, 1], [1, 2], [1, 3], [2, 1], [1, 5], [1, 6], [1, 7], [1, 8], [3, 1], [1, 10], [1, 11], [2, 3], [1, 13], [1, 14], [1, 15], [4, 1], [1, 17], [3, 2], [1, 19], [1, 20]][e12];
      if (o) return o;
    }
    let i = Xa(e12), t = 1, r = 1;
    for (let o of Object.keys(i)) {
      let s = parseInt(o);
      t = t * Math.pow(s, Math.floor(i[o] / n)), r = r * Math.pow(s, i[o] % n);
    }
    return [t, r];
  }
  function sn(e12, n) {
    if (e12 === 0) return n;
    if (n === 0 || e12 === n) return e12;
    if (!Number.isInteger(e12) || !Number.isInteger(n)) return NaN;
    for (; n !== 0; ) [e12, n] = [n, e12 % n];
    return e12 < 0 ? -e12 : e12;
  }
  function Bi(e12, n) {
    return e12 * n / sn(e12, n);
  }
  function nu(e12) {
    if (!Number.isInteger(e12) || e12 < 0) return NaN;
    if (e12 >= 170) return 1 / 0;
    let n = 1;
    for (let i = 2; i <= e12; i++) n = n * i;
    return n;
  }
  function iu(e12) {
    if (!Number.isInteger(e12) || e12 < 0) return NaN;
    if (e12 < 0) return NaN;
    if (e12 <= 1) return 1;
    let n = e12;
    for (; e12 > 2; ) e12 -= 2, n *= e12;
    return n;
  }
  function tu(e12, n = ni) {
    return typeof e12 == "number" && Math.abs(e12) <= n ? 0 : e12;
  }
  function ru(e12, n, i = 0.1) {
    return (e12(n - 4 * i) / 280 - 4 * e12(n - 3 * i) / 105 + e12(n - 2 * i) / 5 - 4 * e12(n - i) / 5 + 4 * e12(n + i) / 5 - e12(n + 2 * i) / 5 + 4 * e12(n + 3 * i) / 105 - e12(n + 4 * i) / 280) / i;
  }
  function ei(e12, n, i = 1) {
    if (i === 0) {
      let o = ei(e12, n, -1), s = ei(e12, n, 1);
      return o === void 0 || s === void 0 ? NaN : Math.abs(o - s) > 1e-5 ? NaN : (o + s) / 2;
    }
    let [t, r] = Mo(e12, n, { step: i > 0 ? 1 : -1 });
    return t;
  }
  function _n(e12) {
    return typeof e12 == "object" && e12 !== null && "engine" in e12;
  }
  function se(e12) {
    return e12.precision > pn;
  }
  function bt(e12) {
    return typeof e12 == "string" ? e12.startsWith("$") && e12.endsWith("$") : false;
  }
  function $n(e12) {
    if (typeof e12 == "number") return e12.toString();
    if (typeof e12 == "string") {
      let n = e12.trim();
      if (n.startsWith("$$") && n.endsWith("$$")) return n.slice(2, -2);
      if (n.startsWith("$") && n.endsWith("$")) return n.slice(1, -1);
    }
    return Array.isArray(e12) ? $n(E(e12)) : null;
  }
  function mn(e12) {
    let n = 0;
    for (let i = 0; i < e12.length; i++) n = Math.imul(31, n) + e12.charCodeAt(i) | 0;
    return Math.abs(n);
  }
  function Et(e12) {
    return e12 == null ? [] : typeof e12 == "string" ? [e12] : _n(e12) ? Et(e12.symbol) : typeof e12[Symbol.iterator] == "function" ? Array.from(e12).map((n) => typeof n == "string" ? n : n.symbol) : [];
  }
  function ke(e12) {
    return typeof e12 != "string" ? false : Kn.some((n) => n.name === e12);
  }
  function br(e12) {
    return ["Less", "LessEqual", "Greater", "GreaterEqual"].includes(e12);
  }
  function Er(e12) {
    return ["Equal", "NotEqual"].includes(e12);
  }
  function Vn(e12) {
    let n = e12.operator;
    return typeof n != "string" ? false : br(n);
  }
  function Lo(e12) {
    let n = e12.operator;
    return typeof n != "string" ? false : Er(n);
  }
  function ki(e12) {
    if (typeof e12 == "number") return;
    let n = e12.engine;
    if (e12.symbol === "ImaginaryUnit") return n.One;
    if (e12.re === 0) return n.number(e12.im);
    if (e12.operator === "Negate") return ki(e12.op1)?.neg();
    if (e12.operator === "Complex") return e12.op1.is(0) && !isNaN(e12.op2.re) ? n.number(e12.op2.re) : void 0;
    if (e12.operator === "Multiply" && e12.nops === 2) {
      let [i, t] = e12.ops;
      if (i.symbol === "ImaginaryUnit") return t;
      if (t.symbol === "ImaginaryUnit") return i;
      if (t.isNumberLiteral && t.re === 0 && t.im !== 0) return i.mul(t.im);
      if (i.isNumberLiteral && i.re === 0 && i.im !== 0) return t.mul(i.im);
    }
    if (e12.operator === "Divide") {
      let i = e12.op2;
      return i.is(0) ? void 0 : ki(e12.op1)?.div(i);
    }
  }
  function Fo(e12) {
    if (!e12) return;
    let n = { ...e12 };
    return n.odd && (n.even = false), n.even && (n.odd = false), n;
  }
  function Nt(e12) {
    if (e12 == null || typeof e12 != "object" || _n(e12)) return false;
    if ("value" in e12 || "constant" in e12 || "inferred" in e12) {
      if ("type" in e12 && typeof e12.type == "function") throw new Error("The `type` field of a symbol definition should be of type `string`");
      if ("signature" in e12) throw new Error("Symbol definition cannot have a `signature` field. Use a `type` field instead.");
      if ("sgn" in e12) throw new Error("Symbol definition cannot have a `sgn` field. Use a `flags.sgn` field instead.");
      return true;
    }
    return false;
  }
  function vt(e12) {
    if (e12 == null || typeof e12 != "object" || _n(e12)) return false;
    if (("signature" in e12 || "complexity" in e12) && "constant" in e12) throw new Error("Function definition cannot have a `constant` field and symbol definition cannot have a `signature` field.");
    if (!("evaluate" in e12) && !("signature" in e12) && !("sgn" in e12) && !("complexity" in e12) && !("canonical" in e12)) return false;
    if ("type" in e12 && typeof e12.type != "function") throw new Error("The `type` field of a function definition should be a function");
    if ("sgn" in e12 && typeof e12.sgn != "function") throw new Error("The `sgn` field of a function definition should be a function");
    return true;
  }
  function wi(e12, n) {
    return n.every((i) => _n(i)) ? n.every((i) => i.isCanonical) ? n : n.map((i) => i.canonical) : n.map((i) => e12.box(i));
  }
  function Le(e12, n) {
    return n.every((i) => _n(i) && i.isCanonical) ? n : n.map((i) => e12.box(i));
  }
  function Nr(e12) {
    return e12.symbol === "Booleans" ? "boolean" : e12.symbol === "Strings" ? "string" : e12.symbol === "Numbers" ? "number" : e12.symbol === "ComplexNumbers" ? "complex" : e12.symbol === "ImaginaryNumbers" ? "imaginary" : e12.symbol === "RealNumbers" ? "real" : e12.symbol === "RationalNumbers" ? "rational" : e12.symbol === "Integers" ? "integer" : "unknown";
  }
  function ii(e12) {
    let n = Rd(e12);
    return n === void 0 ? false : Number.isFinite(n);
  }
  function ti(e12) {
    return e12 = St(e12), e12.string !== null ? true : e12.functionDefinition?.collection?.at !== void 0;
  }
  function ie(e12) {
    if (e12 = St(e12), e12.string !== null) return true;
    let n = e12.functionDefinition;
    return n ? n.collection?.at !== void 0 && Number.isFinite(n.collection?.size?.(e12) ?? 1 / 0) : false;
  }
  function* ee(e12) {
    let n = Di(e12);
    if (!n) {
      yield e12;
      return;
    }
    let i = e12.engine.iterationLimit, t = 0;
    for (; ; ) {
      let { done: r, value: o } = n.next();
      if (r) return;
      if (t++ > i) {
        yield e12.engine.error("iteration-limit-exceeded");
        return;
      }
      yield o;
    }
  }
  function Rd(e12) {
    e12 = St(e12);
    let n = e12.string;
    return n !== null ? n.length : e12.functionDefinition?.collection?.size?.(e12);
  }
  function Di(e12) {
    e12 = St(e12);
    let n = e12.functionDefinition;
    if (n?.collection?.iterator) return n.collection.iterator(e12);
    let i = e12.string;
    if (i !== null) {
      if (i.length === 0) return { next: () => ({ done: true, value: void 0 }) };
      let t = 0;
      return { next: () => ({ value: e12.engine.string(i.charAt(t++)), done: t > i.length }) };
    }
  }
  function Ad(e12, n) {
    return typeof n == "number" ? (n < 0 && (n = 0), { next() {
      return n === 0 ? { done: true, value: void 0 } : (n--, { done: false, value: e12 });
    } }) : { next() {
      return { done: false, value: e12 };
    } };
  }
  function ou(e12) {
    if (!e12) return;
    let n = {};
    if (!e12.contains || !e12.size) throw new Error('A collection must have at least a "contains" and "size" handler');
    e12.contains && (n.contains = e12.contains), e12.size && (n.size = e12.size), e12.at && (n.at = e12.at), e12.iterator && (n.iterator = e12.iterator), e12.keys && (n.keys = e12.keys), e12.indexOf && (n.indexOf = e12.indexOf), e12.subsetOf && (n.subsetOf = e12.subsetOf);
    let i = n.iterator;
    return n.at && !i && (i = (t, r = 1, o = -1) => {
      let s = e12.at, a = r;
      return { next() {
        if (o >= 0 && a >= r + o) return { done: true, value: void 0 };
        let u = s(t, a);
        return u === void 0 ? { done: true, value: void 0 } : (a++, { done: false, value: u });
      } };
    }, n.iterator = i), n.indexOf || (n.indexOf = (t, r) => {
      let o = 1, s = i(t), a = s.next();
      for (; !a.done; ) {
        if (r.isSame(a.value)) return o;
        o++, a = s.next();
      }
    }), { contains: e12.contains, size: e12.size, at: e12.at, iterator: i, keys: e12.keys, indexOf: e12.indexOf, subsetOf: e12.subsetOf };
  }
  function St(e12) {
    return e12.symbolDefinition && e12.symbolDefinition.holdUntil === "never" ? e12.symbolDefinition.value ?? e12 : e12;
  }
  function su(e12) {
    e12 = e12.map((i) => St(i));
    let n = e12.map((i) => Di(i) ?? Ad(i));
    return { next() {
      let i = n.map((t) => t.next());
      return i.some((t) => t.done) ? { done: true, value: void 0 } : { done: false, value: i.map((t) => t.value) };
    } };
  }
  function W(e12, n) {
    let i = e12.every((r) => r.isCanonical) ? e12 : e12.map((r) => r.canonical);
    if (n) {
      let r = (s) => s.symbol === "Nothing" || s.operator === n || s.operator === "Sequence";
      if (i.every((s) => !r(s))) return i;
      let o = [];
      for (let s of i) s.symbol !== "Nothing" && (s.ops && (s.operator === n || s.operator === "Sequence") ? o.push(...W(s.ops, n)) : o.push(s));
      return o;
    }
    if (i.every((r) => !(r.symbol === "Nothing" || r.operator === "Sequence"))) return i;
    let t = [];
    for (let r of i) r.symbol !== "Nothing" && (r.ops && r.operator === "Sequence" ? t.push(...W(r.ops, n)) : t.push(r));
    return t;
  }
  function Ri(e12, n) {
    if (!n || e12.every((t) => !t.ops || t.operator !== n)) return e12;
    let i = [];
    for (let t of e12) !t.ops || t.operator !== n ? i.push(t) : i.push(...Ri(t.ops, n));
    return i.length, e12.length, i.length === e12.length ? e12 : i;
  }
  function qo(e12) {
    if (e12.every((i) => i.operator !== "Sequence" && i.operator !== "Delimiter")) return e12;
    let n = [];
    for (let i of e12) if (!i.isValid) n.push(i);
    else if (i.operator === "Delimiter") if (i.op1.operator === "Sequence") {
      let t = i.op1.ops ?? [];
      t.length === 0 ? n.push(i.engine.box(["Tuple"])) : n.push(...qo(t));
    } else n.push(i.op1);
    else i.operator === "Sequence" ? i.ops && n.push(...i.ops) : n.push(i);
    return n;
  }
  function Fe(e12, n, i) {
    if (n = W(n), !e12.strict || n.length === i) return n;
    let t = [...n.slice(0, i)], r = Math.min(i, n.length);
    for (; r < i; ) t.push(e12.error("missing")), r += 1;
    for (; r < n.length; ) t.push(e12.error("unexpected-argument", n[r].toString())), r += 1;
    return t;
  }
  function qe(e12, n, i) {
    let t = typeof i == "number" ? i : i?.count, r = typeof i == "number" ? void 0 : i?.flatten;
    if (n = W(n, r), !e12.strict) {
      for (let a of n) ie(a) || a.infer("real");
      return n;
    }
    let o = true;
    t ?? (t = n.length);
    let s = [];
    for (let a = 0; a <= Math.max(t - 1, n.length - 1); a++) {
      let u = n[a];
      if (a > t - 1) o = false, s.push(e12.error("unexpected-argument", u.toString()));
      else if (u === void 0) o = false, s.push(e12.error("missing"));
      else if (!u.isValid) o = false, s.push(u);
      else if (u.isNumber) s.push(u);
      else if (u.symbol && !e12.lookupSymbol(u.symbol) && !e12.lookupFunction(u.symbol)) s.push(u);
      else if (u.type === "unknown") s.push(u);
      else if (ie(u)) {
        for (let l of ee(u)) if (!l.isNumber) {
          o = false;
          break;
        }
        o ? s.push(u) : s.push(e12.typeError("number", u.type, u));
      } else u.symbolDefinition?.inferredType && g("number", u.type) || u.functionDefinition?.inferredSignature && g("number", u.type) || u.operator === "Hold" || u.symbolDefinition?.value?.operator === "Hold" ? s.push(u) : (o = false, s.push(e12.typeError("number", u.type, u)));
    }
    if (o) for (let a of s) if (ie(a)) for (let u of ee(a)) u.infer("real");
    else a.infer("real");
    return s;
  }
  function In(e12, n, i) {
    return n == null ? e12.error("missing") : i === void 0 ? e12.error("unexpected-argument", n.toString()) : (n = n.canonical, !n.isValid || g(n.type, i) ? n : e12.typeError(i, n.type, n));
  }
  function vr(e12, n, i) {
    if (n.length === i.length && n.every((r, o) => g(r.type, i[o]))) return n;
    let t = [];
    for (let r = 0; r <= i.length - 1; r++) t.push(In(e12, n[r], i[r]));
    for (let r = i.length; r <= n.length - 1; r++) t.push(e12.error("unexpected-argument", n[r].toString()));
    return t;
  }
  function Ai(e12, n, i, t, r) {
    if (!e12.strict || typeof i == "string" || i.kind !== "signature") return null;
    let o = [], s = true, a = i.args?.map((c) => c.type) ?? [], u = i.optArgs?.map((c) => c.type) ?? [], l = i.restArg?.type, f = 0;
    for (let c of a) {
      let d = n[f++];
      if (!d) {
        o.push(e12.error("missing")), s = false;
        continue;
      }
      if (t) {
        o.push(d);
        continue;
      }
      if (!d.isValid) {
        o.push(d), s = false;
        continue;
      }
      if (d.type === "unknown") {
        o.push(d);
        continue;
      }
      if (r && ie(d)) {
        o.push(d);
        continue;
      }
      if (d.symbolDefinition?.inferredType && g(d.type, c)) {
        o.push(d);
        continue;
      }
      if (d.functionDefinition?.inferredSignature && g(d.type, c)) {
        o.push(d);
        continue;
      }
      if (!g(d.type, c)) {
        o.push(e12.typeError(c, d.type, d)), s = false;
        continue;
      }
      o.push(d);
    }
    for (let c of u) {
      let d = n[f];
      if (!d) break;
      if (t) {
        o.push(d), f += 1;
        continue;
      }
      if (!d.isValid) {
        o.push(d), s = false, f += 1;
        continue;
      }
      if (d.type === "unknown") {
        o.push(d), f += 1;
        continue;
      }
      if (r && ie(d)) {
        o.push(d), f += 1;
        continue;
      }
      if (d.symbolDefinition?.inferredType && g(d.type, c)) {
        o.push(d), f += 1;
        continue;
      }
      if (!g(d.type, c)) {
        o.push(e12.typeError(c, d.type, d)), s = false, f += 1;
        continue;
      }
      o.push(d), f += 1;
    }
    if (l) for (let c of n.slice(f)) {
      if (f += 1, t) {
        o.push(c);
        continue;
      }
      if (!c.isValid) {
        o.push(c), s = false;
        continue;
      }
      if (c.type === "unknown") {
        o.push(c);
        continue;
      }
      if (r && ie(c)) {
        o.push(c);
        continue;
      }
      if (c.symbolDefinition?.inferredType && g(c.type, l)) {
        o.push(c);
        continue;
      }
      if (!g(c.type, l)) {
        o.push(e12.typeError(l, c.type, c)), s = false;
        continue;
      }
      o.push(c);
    }
    if (f < n.length) for (let c of n.slice(f)) o.push(e12.error("unexpected-argument", c.toString())), s = false;
    if (!s) return o;
    f = 0;
    for (let c of a) t || (!r || !ie(n[f])) && n[f].infer(c), f += 1;
    for (let c of u) {
      if (!n[f]) break;
      (!r || !ie(n[f])) && n[f]?.infer(c), f += 1;
    }
    if (l) for (let c of n.slice(f)) t || (!r || !ie(c)) && c.infer(l), f += 1;
    return null;
  }
  function Tt(e12, n) {
    for (; n !== BigInt(0); ) [e12, n] = [n, e12 % n];
    return e12 < 0 ? -e12 : e12;
  }
  function au(e12, n) {
    return e12 * n / Tt(e12, n);
  }
  function* $o(e12) {
    if (e12 < 0) return BigInt(0);
    if (e12 < 10) return BigInt([1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880][Number(e12)]);
    if (e12 % BigInt(2) === BigInt(1)) return e12 * (yield* $o(e12 - BigInt(1)));
    let n = e12, i = e12, t = e12, r = 0;
    for (; n > 2; ) n -= BigInt(2), i += n, t *= i, r++ % 5e4 === 0 && (yield t);
    return t;
  }
  function Bn(e12) {
    return e12 !== null && Array.isArray(e12);
  }
  function ne(e12) {
    return e12 !== null && Array.isArray(e12) && typeof e12[0] == "number";
  }
  function uu(e12) {
    return e12 !== null && Array.isArray(e12) && typeof e12[0] == "bigint";
  }
  function an(e12) {
    return e12[0] == 0;
  }
  function Vo(e12) {
    return e12[0] > 0;
  }
  function Se(e12) {
    return e12[0] == e12[1];
  }
  function _t(e12) {
    return e12[0] === -e12[1];
  }
  function ri(e12) {
    return e12[1] == 1;
  }
  function zo(e12) {
    return Number(e12[0]);
  }
  function Go(e12) {
    return Number(e12[1]);
  }
  function lu(e12) {
    return Number(e12[0]) / Number(e12[1]);
  }
  function oi(e12, n) {
    if (typeof e12[0] == "number" && !Number.isFinite(e12[0])) return e12;
    let i = n;
    if (i === null) return e12;
    if (uu(i)) return e12 = [BigInt(e12[0]), BigInt(e12[1])], [i[1] * e12[0] + i[0] * e12[1], i[1] * e12[1]];
    if (!Number.isFinite(i[0])) return i;
    if (uu(e12)) {
      let t = [BigInt(i[0]), BigInt(i[1])];
      return [t[1] * e12[0] + t[0] * e12[1], t[1] * e12[1]];
    }
    return [i[1] * e12[0] + i[0] * e12[1], i[1] * e12[1]];
  }
  function gn(e12, n) {
    return ne(e12) && ne(n) ? [e12[0] * n[0], e12[1] * n[1]] : ne(e12) ? [BigInt(e12[0]) * n[0], BigInt(e12[1]) * n[1]] : ne(n) ? [BigInt(n[0]) * e12[0], BigInt(n[1]) * e12[1]] : [e12[0] * n[0], e12[1] * n[1]];
  }
  function si(e12) {
    return [-e12[0], e12[1]];
  }
  function fu(e12) {
    return e12[0] < 0 ? [-e12[1], -e12[0]] : [e12[1], e12[0]];
  }
  function cu(e12) {
    return [Number(e12[0]), Number(e12[1])];
  }
  function Sr(e12, n) {
    return ne(e12) && ne(n) ? e12[1] === 1 && n[1] === 1 ? [sn(e12[0], n[0]), 1] : [sn(e12[0], n[0]), Bi(e12[1], n[1])] : e12[1] === 1 && n[1] === 1 ? [Tt(BigInt(e12[0]), BigInt(n[0])), BigInt(1)] : [Tt(BigInt(e12[0]), BigInt(n[0])), au(BigInt(e12[1]), BigInt(n[1]))];
  }
  function Mi(e12) {
    if (ne(e12)) {
      if (e12[0] === 1 || e12[1] === 1) return e12;
      if (e12[1] < 0 && (e12 = [-e12[0], -e12[1]]), !Number.isFinite(e12[1])) return [0, 1];
      let r = sn(e12[0], e12[1]);
      return r <= 1 ? e12 : [e12[0] / r, e12[1] / r];
    }
    e12[1] < 0 && (e12 = [-e12[0], -e12[1]]);
    let n = Tt(e12[0], e12[1]), [i, t] = n <= 1 ? e12 : [e12[0] / n, e12[1] / n];
    return i <= Number.MAX_SAFE_INTEGER && i >= Number.MIN_SAFE_INTEGER && t <= Number.MAX_SAFE_INTEGER ? [Number(i), Number(t)] : [i, t];
  }
  function du(e12) {
    if (!Number.isFinite(e12) || e12 % 1 === 0) return e12;
    let i = 1e-15, t = Math.floor(e12), r = 1, o = 0, s = t, a = 1;
    for (; e12 - t > i * a * a; ) {
      e12 = 1 / (e12 - t), t = Math.floor(e12);
      let u = r;
      r = s;
      let l = o;
      o = a, s = u + t * r, a = l + t * o;
    }
    return [s, a];
  }
  var V = class {
    get bignumRe() {
    }
    get bignumIm() {
    }
    isZeroWithTolerance(n) {
      return this.isZero;
    }
    valueOf() {
      return this.im === 0 ? this.bignumRe ? this.bignumRe.toFixed() : this.re : this.N().toString();
    }
    [Symbol.toPrimitive](n) {
      return n === "string" ? this.toString() : this.valueOf();
    }
    toJSON() {
      if (this.im === 0) {
        let n = this.re;
        if (Number.isFinite(n)) return n;
      }
      return this.N().toString();
    }
    print() {
      let n = console.log;
      n?.(this.toString());
    }
  };
  var Ci = ["Error", "'missing'"];
  function kn(e12) {
    return !!(typeof e12 == "number" || Pi(e12) || typeof e12 == "string" && /^[+-]?[0-9\.]/.test(e12));
  }
  function Pi(e12) {
    return e12 !== null && typeof e12 == "object" && "num" in e12;
  }
  function _r(e12) {
    return e12 !== null && typeof e12 == "object" && "sym" in e12;
  }
  function Md(e12) {
    return e12 !== null && typeof e12 == "object" && "str" in e12;
  }
  function It(e12) {
    return e12 !== null && typeof e12 == "object" && "fn" in e12;
  }
  function q(e12) {
    return e12 == null ? null : typeof e12 == "object" && "str" in e12 ? e12.str : typeof e12 != "string" || e12.length < 2 || e12.at(0) !== "'" || e12.at(-1) !== "'" ? null : e12.substring(1, e12.length - 1);
  }
  function jo(e12) {
    if (e12 == null || q(e12) !== null) return null;
    let n = h(e12);
    return n ? [n, ...v(e12).map((i) => jo(i)).filter((i) => i !== null)] : e12;
  }
  function h(e12) {
    return Array.isArray(e12) ? e12[0] : e12 == null ? "" : It(e12) ? e12.fn[0] : "";
  }
  function v(e12) {
    return Array.isArray(e12) ? e12.slice(1) : e12 !== void 0 && It(e12) ? e12.fn.slice(1) : [];
  }
  function p(e12, n) {
    return Array.isArray(e12) ? e12[n] ?? null : e12 === null || !It(e12) ? null : e12.fn[n] ?? null;
  }
  function J(e12) {
    return e12 == null ? 0 : Array.isArray(e12) ? Math.max(0, e12.length - 1) : It(e12) ? Math.max(0, e12.fn.length - 1) : 0;
  }
  function Zo(e12) {
    return e12 == null ? null : h(e12) === "Hold" ? p(e12, 1) : e12;
  }
  function D(e12) {
    if (typeof e12 == "string") return /^[+-]?[0-9\.]/.test(e12) || e12.length >= 2 && e12[0] === "'" && e12[e12.length - 1] === "'" ? null : e12;
    if (e12 == null) return null;
    let n = _r(e12) ? e12.sym : e12;
    return typeof n != "string" ? null : n;
  }
  function pu(e12) {
    let n = h(e12);
    if (n === "KeyValuePair" || n === "Tuple" || n === "Pair") {
      let [i, t] = v(e12), r = q(i);
      return r ? [r, t ?? "Nothing"] : null;
    }
    return null;
  }
  function Ho(e12) {
    if (e12 === null) return null;
    let n = pu(e12);
    if (n) return { [n[0]]: n[1] };
    if (h(e12) === "Dictionary") {
      let t = {}, r = v(e12);
      for (let o = 1; o < J(e12); o++) {
        let s = pu(r[o]);
        s && (t[s[0]] = s[1]);
      }
      return t;
    }
    return null;
  }
  function Ir(e12) {
    let n = Object.keys(e12);
    if (n.length === 0) return ["Dictionary"];
    if (n.length === 1) return ["Pair", { str: n[0] }, e12[n[0]]];
    let i = [];
    for (let t of n) i.push(["Pair", { str: t }, e12[t]]);
    return ["Dictionary", ...i];
  }
  function Cd(e12) {
    if (e12 = e12.toLowerCase().replace(/[nd]$/, "").replace(/[\u0009-\u000d\u0020\u00a0]/g, ""), e12 === "nan") return NaN;
    if (e12 === "infinity" || e12 === "+infinity") return 1 / 0;
    if (e12 === "-infinity") return -1 / 0;
    if (/\([0-9]+\)/.test(e12)) {
      let [n, i, t, r] = e12.match(/(.+)\(([0-9]+)\)(.*)$/) ?? [];
      e12 = i + t.repeat(Math.ceil(16 / t.length)) + (r ?? "");
    }
    return parseFloat(e12);
  }
  function w(e12) {
    return typeof e12 == "number" ? e12 : typeof e12 == "string" ? Cd(e12) : e12 !== void 0 && Pi(e12) ? w(e12.num) : null;
  }
  function Oi(e12) {
    if (e12 == null) return null;
    if (D(e12) === "Half") return [1, 2];
    let n = h(e12);
    if (!n) return null;
    let i = null, t = null;
    if (n === "Negate") {
      let r = Oi(v(e12)[0]);
      if (r) return [-r[0], r[1]];
    }
    if (n === "Rational" || n === "Divide") {
      let [r, o] = v(e12);
      i = w(r) ?? NaN, t = w(o) ?? NaN;
    }
    if (n === "Power") {
      let [r, o] = v(e12), s = w(o);
      s === 1 ? (i = w(r), t = 1) : s === -1 && (i = 1, t = w(r));
    }
    if (n === "Multiply") {
      let [r, o] = v(e12);
      if (h(o) === "Power") {
        let [s, a] = v(o);
        w(a) === -1 && (i = w(r), t = w(s));
      }
    }
    return i === null || t === null ? null : Number.isInteger(i) && Number.isInteger(t) ? [i, t] : null;
  }
  function Tr(e12, n) {
    let i = D(e12);
    if (i && n[i]) return n[i];
    let t = h(e12);
    return t ? [Tr(t, n), ...v(e12).map((r) => Tr(r, n))] : e12;
  }
  function Br(e12, n) {
    let i = null;
    if (Array.isArray(e12) && (i = e12), It(e12) && (i = e12.fn), i === null) return [];
    let t = 1, r = [];
    for (; t < i.length; ) r.push(n(i[t])), t += 1;
    return r;
  }
  function Li(e12, n, i) {
    let t = h(n), r = h(i);
    return t === e12 && r === e12 ? [e12, ...v(n), ...v(i)] : t === e12 ? [e12, ...v(n), i] : r === e12 ? [e12, n, ...v(i)] : [e12, n, i];
  }
  function wn(e12) {
    if (e12 == null) return null;
    let n = h(e12);
    if (n === "Delimiter") {
      if (e12 = p(e12, 1), e12 === null) return [];
      if (n = h(e12), n !== "Sequence") return [e12];
    }
    return n !== "Sequence" ? null : v(e12);
  }
  function G(e12) {
    return e12 == null || e12 === "Nothing" ? true : h(e12) === "Sequence" && J(e12) === 0;
  }
  function C(e12) {
    return G(e12) ? Ci : e12;
  }
  function Uo(e12) {
    return e12[0] === "Square" ? Uo(e12.slice(1)) + 2 : e12.reduce((n, i) => n + Bt(i), 0);
  }
  function Bt(e12) {
    if (e12 === null) return 0;
    if (typeof e12 == "number" || typeof e12 == "string" || kn(e12) || _r(e12) || Md(e12)) return 1;
    if (Array.isArray(e12)) return Uo(e12);
    if ("fn" in e12) return Uo(e12.fn);
    let n = Ho(e12);
    if (n) {
      let i = Object.keys(n);
      return 1 + i.length + i.reduce((t, r) => t + Bt(n[r]), 0);
    }
    return 0;
  }
  function Pd(e12) {
    if (e12 === "N") return [0, ""];
    let n = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1e3 }, i = 0, t = 0;
    e12 = e12.toUpperCase();
    for (let r = e12.length - 1; r >= 0; r--) {
      let o = n[e12[r]];
      if (o === void 0) return [i, e12.slice(r)];
      o < t ? i -= o : i += o, t = o;
    }
    return [i, ""];
  }
  function Fi(e12, n) {
    if (e12 = e12.trim(), e12.length === 0) return [NaN, ""];
    if (e12.startsWith("+")) return Fi(e12.slice(1), n);
    if (e12.startsWith("-")) {
      let [r, o] = Fi(e12.slice(1), n);
      return [-r, o];
    }
    let i = 10;
    if (typeof n == "string" && (n = n.toLowerCase()), e12.startsWith("0x")) i = 16, e12 = e12.slice(2);
    else if (e12.startsWith("0b")) i = 2, e12 = e12.slice(2);
    else {
      if (n === "roman") return Pd(e12);
      if (n === "base64" || n === "base-64") try {
        return [parseInt(btoa(e12)), ""];
      } catch {
        return [NaN, ""];
      }
      else typeof n == "number" ? i = n : typeof n == "string" && (i = parseInt(n));
    }
    let t = 0;
    for (let r = 0; r < e12.length; r++) {
      let o = { " ": -1, "\xA0": -1, "\u2000": -1, "\u2001": -1, "\u2002": -1, "\u2003": -1, "\u2004": -1, "\u2005": -1, "\u2006": -1, "\u2007": -1, "\u2008": -1, "\u2009": -1, "\u200A": -1, "\u200B": -1, "\u202F": -1, "\u205F": -1, _: -1, ",": -1, 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15, g: 16, h: 17, i: 18, j: 19, k: 20, l: 21, m: 22, n: 23, o: 24, p: 25, q: 26, r: 27, s: 28, t: 29, u: 30, v: 31, w: 32, x: 33, y: 34, z: 35 }[e12[r]];
      if (o !== -1) {
        if (o === void 0) return [t, e12.substring(r)];
        if (o >= i) return [t, e12.substring(r)];
        t = t * i + o;
      }
    }
    return [t, ""];
  }
  function he(e12, n) {
    if (typeof n == "number" && typeof e12 == "number") return e12.toFixed(n);
    let i = e12.toString();
    if (typeof e12 == "number" && Number.isInteger(e12) && i.includes("e")) {
      let t = BigInt(e12).toString(), r = t.match(/0+$/);
      if ((r ? r[0].length : 0) <= 5) return t;
    } else if (typeof e12 == "bigint") {
      let t = i.match(/0+$/), r = t ? t[0].length : 0;
      if (r > 5) return `${i.slice(0, -r)}e+${r}`;
    }
    return i;
  }
  function mu(e12) {
    if (typeof e12 == "number") return Number.isInteger(e12) ? BigInt(e12) : null;
    if (e12 == null || !kn(e12)) return null;
    let n = Pi(e12) ? e12.num : e12;
    if (typeof n == "number") return Number.isInteger(n) ? BigInt(n) : null;
    if (typeof n != "string") return null;
    let i = n.toLowerCase().replace(/[nd]$/, "").replace(/[\u0009-\u000d\u0020\u00a0]/g, "");
    return i === "nan" || i === "infinity" || i === "+infinity" || i === "-infinity" ? null : K(i);
  }
  function Ae(e12, n) {
    if (typeof e12 == "number") return isNaN(e12) ? "NaN" : Number.isFinite(e12) ? typeof n == "number" ? { num: e12.toFixed(n) } : e12 : e12 < 0 ? "NegativeInfinity" : "PositiveInfinity";
    if (e12 >= Number.MIN_SAFE_INTEGER && e12 <= Number.MAX_SAFE_INTEGER) return Number(e12);
    let i = he(e12);
    return Number(e12).toString() === i ? Number(e12) : { num: i };
  }
  var j = class e2 extends V {
    constructor(i, t, r) {
      super();
      this.im = 0;
      if (this.factory = t, this.bignum = r, typeof i == "number") {
        !Number.isFinite(i) || Number.isInteger(i), this.rational = [i, 1], this.radical = 1;
        return;
      }
      if (typeof i == "bigint") {
        this.rational = [i, BigInt(1)], this.radical = 1;
        return;
      }
      typeof i != "object" || "im" in i;
      let o = 1;
      if (typeof o != "number" || Number.isInteger(o), o == 0) {
        this.rational = [0, 1], this.radical = 1;
        return;
      }
      let s = i.rational ? [...i.rational] : [1, 1];
      o != 1 && (typeof o == "bigint" ? s = gn(s, [o, BigInt(1)]) : s = gn(s, [o, 1])), this.rational = s, this.radical = i.radical ?? 1, this.radical <= O && this.radical >= 1, this.normalize();
    }
    get type() {
      return this.isNaN || this.isPositiveInfinity || this.isNegativeInfinity ? "non_finite_number" : this.radical !== 1 ? (an(this.rational), "finite_real") : ri(this.rational) ? "finite_integer" : "finite_rational";
    }
    get isExact() {
      return true;
    }
    get asExact() {
      return this;
    }
    toJSON() {
      if (this.isNaN) return "NaN";
      if (this.isPositiveInfinity) return "PositiveInfinity";
      if (this.isNegativeInfinity) return "NegativeInfinity";
      if (this.isZero) return 0;
      if (this.isOne) return 1;
      if (this.isNegativeOne) return -1;
      let i = 0, t = (r) => ri(r) ? Ae(r[0]) : ["Rational", Ae(r[0]), Ae(r[1])];
      return an(this.rational) || (this.radical === 1 ? i = t(this.rational) : Se(this.rational) ? i = ["Sqrt", this.radical] : _t(this.rational) ? i = ["Negate", ["Sqrt", this.radical]] : i = ["Multiply", t(this.rational), ["Sqrt", this.radical]]), i;
    }
    clone(i) {
      return new e2(i, this.factory, this.bignum);
    }
    toString() {
      if (this.isZero) return "0";
      if (this.isOne) return "1";
      if (this.isNegativeOne) return "-1";
      let i = (r) => ri(r) ? he(r[0]) : `${he(r[0])}/${he(r[1])}`;
      if (this.radical === 1) return i(this.rational);
      let t = (r) => `sqrt(${he(r)})`;
      return Se(this.rational) ? t(this.radical) : _t(this.rational) ? `-${t(this.radical)}` : this.rational[0] == 1 ? `${t(this.radical)}/${he(this.rational[1])}` : this.rational[0] == -1 ? `-${t(this.radical)}/${he(this.rational[1])}` : `${i(this.rational)}${t(this.radical)}`;
    }
    get sign() {
      return an(this.rational) ? 0 : Vo(this.rational) ? 1 : -1;
    }
    get re() {
      return lu(this.rational) * Math.sqrt(this.radical);
    }
    get bignumRe() {
      let i, t = this.rational;
      return ne(t) ? i = this.bignum(t[0]).div(t[1]) : i = this.bignum(t[0].toString()).div(this.bignum(t[1].toString())), this.radical === 1 ? i : i.mul(this.bignum(this.radical).sqrt());
    }
    get numerator() {
      return this.rational[1] == 1 ? this : this.clone({ rational: ne(this.rational) ? [this.rational[0], 1] : [this.rational[0], BigInt(1)], radical: this.radical });
    }
    get denominator() {
      return ne(this.rational) ? this.clone(this.rational[1]) : this.clone({ rational: [this.rational[1], BigInt(1)] });
    }
    normalize() {
      if (Number.isInteger(this.radical) && this.radical > 0 && Number.isFinite(this.radical), isNaN(this.radical)) {
        this.rational = [NaN, 1], this.radical = 1;
        return;
      }
      let [i, t] = this.rational;
      if (t == 0) {
        this.rational = [NaN, 1], this.radical = 1;
        return;
      }
      if (this.radical === 0 || i === 0) {
        this.rational = [0, 1], this.radical = 1;
        return;
      }
      if (this.radical >= 4) {
        let [r, o] = Ii(this.radical, 2);
        typeof this.rational[0] == "number" ? this.rational[0] *= r : this.rational = gn(this.rational, [r, 1]), this.radical = o;
      }
      this.rational = Mi(this.rational);
    }
    get isNaN() {
      return Number.isNaN(this.rational[0]);
    }
    get isPositiveInfinity() {
      return this.rational[0] == 1 / 0;
    }
    get isNegativeInfinity() {
      return this.rational[0] == -1 / 0;
    }
    get isComplexInfinity() {
      return false;
    }
    get isZero() {
      return an(this.rational);
    }
    get isOne() {
      return !(this.rational[0] !== this.rational[1] || this.radical !== 1);
    }
    get isNegativeOne() {
      return !(this.rational[0] !== -this.rational[1] || this.radical !== 1);
    }
    sgn() {
      if (!Number.isNaN(this.rational[0])) return an(this.rational) ? 0 : Vo(this.rational) ? 1 : -1;
    }
    N() {
      return this.isZero || this.isOne || this.isNegativeOne ? this : this.rational[1] == 1 && this.radical === 1 ? this : this.factory(this.bignumRe);
    }
    neg() {
      return this.isZero ? this : this.clone({ rational: si(this.rational), radical: this.radical });
    }
    inv() {
      return this.isOne ? this : this.isNegativeOne ? this : this.clone({ rational: ne(this.rational) ? [this.rational[1], this.rational[0] * this.radical] : [this.rational[1], this.rational[0] * BigInt(this.radical)], radical: this.radical });
    }
    add(i) {
      return typeof i == "number" ? i === 0 ? this : Number.isInteger(i) && this.radical === 1 ? this.clone({ rational: ne(this.rational) ? [this.rational[0] + i * this.rational[1], this.rational[1]] : [this.rational[0] + BigInt(i) * this.rational[1], this.rational[1]] }) : this.factory(this.bignumRe).add(i) : i.isZero ? this : this.isZero ? i : i instanceof e2 ? this.radical === i.radical ? this.clone({ rational: oi(this.rational, i.rational), radical: this.radical }) : this.factory(this.bignumRe).add(i) : i.add(this);
    }
    sub(i) {
      return this.add(i.neg());
    }
    mul(i) {
      return i === 0 ? this.clone(0) : i === 1 ? this : i === -1 ? this.neg() : typeof i == "number" ? Number.isInteger(i) ? this.clone({ rational: ne(this.rational) ? [this.rational[0] * i, this.rational[1]] : [this.rational[0] * BigInt(i), this.rational[1]], radical: this.radical }) : this.factory(this.bignumRe).mul(i) : i instanceof ge ? this.factory(i).mul(this) : i.im !== 0 ? i.mul(this) : i.isZero ? i : i.isOne ? this : i.isNegativeOne ? this.neg() : i.isNaN ? i : this.isZero ? this : this.isOne ? i : this.isNegativeOne ? i.neg() : i instanceof e2 ? this.clone({ rational: gn(this.rational, i.rational), radical: this.radical * i.radical }) : i.mul(this);
    }
    div(i) {
      if (typeof i == "number") return i === 1 ? this : i === -1 ? this.neg() : i === 0 ? this.clone(NaN) : this.clone({ rational: ne(this.rational) ? [this.rational[0], this.rational[1] * i] : [this.rational[0], this.rational[1] * BigInt(i)], radical: this.radical });
      if (i.isOne) return this;
      if (i.isNegativeOne) return this.neg();
      if (this.isZero) return i.isZero ? this.clone(NaN) : i.isNaN ? i : this;
      if (i.isNaN) return i;
      if (i.isZero) return this.clone(this.sign * (1 / 0));
      if (!(i instanceof e2)) return this.factory(this.bignumRe).div(i);
      if (i.im !== 0) return this.factory(this.bignumRe).div(i);
      let t;
      if (ne(this.rational) && ne(i.rational)) {
        let [r, o] = this.rational, [s, a] = i.rational;
        t = [r * a, o * s * i.radical];
      } else t = gn(this.rational, [BigInt(i.rational[1]), BigInt(i.rational[0]) * BigInt(i.radical)]);
      return this.clone({ rational: t, radical: this.radical * i.radical });
    }
    pow(i) {
      if (Array.isArray(i), this.isNaN) return this;
      if (typeof i == "number" && isNaN(i)) return this.clone(NaN);
      if (i instanceof V) {
        if (i.isNaN) return this.clone(NaN);
        if (i.isZero) return this.clone(1);
        if (i.isOne) return this;
        if (i.im) i = { re: i.re, im: i.im };
        else {
          if (i instanceof e2 && i.radical === 1 && i.rational[0] == 1) return this.root(i.rational[0]);
          i = i.re;
        }
      }
      if (i === 0.5) return this.sqrt();
      if (typeof i == "object" && ("re" in i || "im" in i)) return this.factory(this.bignumRe).pow(i);
      if (this.isPositiveInfinity) {
        if (i === -1) return this.clone(0);
        if (i === 1 / 0) return this.clone(1 / 0);
        if (i === -1 / 0) return this.clone(0);
      } else if (this.isNegativeInfinity && i === 1 / 0) return this.clone(NaN);
      if ((i === 1 / 0 || i === -1 / 0) && (this.isOne || this.isNegativeOne)) return this.clone(NaN);
      if (i === 1) return this;
      if (i === -1) return this.inv();
      if (i === 0) return this.clone(1);
      if (this.isZero) {
        if (i > 0) return this;
        if (i < 0) return this.factory({ im: 1 / 0 });
      }
      if (i < 0) return this.pow(-i).inv();
      if (i % 1 === 0.5) return this.pow(Math.floor(i)).mul(this.sqrt());
      if (this.radical > O || this.rational[0] > O || this.rational[0] < -O || this.rational[1] > O) return this.factory(this.bignumRe).pow(i);
      if (this.sign < 0) {
        if (Number.isInteger(i)) {
          let t = i % 2 === 0 ? 1 : -1;
          return this.clone({ rational: ne(this.rational) ? [t * (-this.rational[0]) ** i, this.rational[1] ** i] : [BigInt(t) * (-this.rational[0]) ** BigInt(i), this.rational[1] ** BigInt(i)], radical: this.radical ** i });
        }
        return this.factory({ im: (-this.re) ** i });
      } else if (Number.isInteger(i)) return this.clone({ rational: ne(this.rational) ? [this.rational[0] ** i, this.rational[1] ** i] : [BigInt(this.rational[0]) ** BigInt(i), this.rational[1] ** BigInt(i)], radical: this.radical ** i });
      return this.factory(this.bignumRe).pow(i);
    }
    root(i) {
      if (i === 0) return this.clone(NaN);
      if (this.isNaN) return this;
      if (this.isZero) return this;
      if (i === 1) return this;
      if (i === -1) return this.inv();
      if (i < 0) return this.root(-i).inv();
      if (i % 1 === 0.5) return this.root(Math.floor(i)).sqrt();
      if (this.radical === 1) {
        if (this.sign > 0) {
          let t = this.re;
          if (Number.isInteger(t)) {
            if (t > 0) {
              let r = Math.pow(t, 1 / i);
              if (Number.isInteger(r)) return this.clone(r);
            }
            return this.factory(this.bignumRe).root(i);
          }
        }
        return this.factory(this.bignumRe).root(i);
      }
      if (this.sign < 0) return this.factory({ im: Math.pow(-this.re, 1 / i) });
      if (this.radical > O || this.rational[0] > O || this.rational[0] < -O || this.rational[1] > O) return this.factory(this.bignumRe).root(i);
      if (this.rational[1] == 1) {
        let t = Math.pow(this.rational[0], 1 / i);
        if (Number.isInteger(t)) return this.clone(t);
      }
      return this.factory(this.bignumRe).root(i);
    }
    sqrt() {
      if (this.isZero || this.isOne) return this;
      if (this.radical === 1) if (ne(this.rational)) {
        let [i, t] = this.rational;
        return i * t > O ? this.factory(this.bignumRe).sqrt() : i > 0 ? this.clone({ radical: i * t, rational: [1, t] }) : this.factory({ im: Math.sqrt(-i * t) / t });
      } else return this.factory(this.bignumRe).sqrt();
      if (this.sign > 0) {
        let i = Math.sqrt(this.re);
        if (Number.isInteger(i)) return this.clone(i);
      }
      return this.factory(this.bignumRe).sqrt();
    }
    gcd(i) {
      if (!(i instanceof e2)) return i.gcd(this);
      if (this.isOne || i.im !== 0 || i.isOne) return this.clone(1);
      let t = Sr(this.rational, i.rational), r = sn(this.radical, i.radical);
      return this.clone({ rational: t, radical: r });
    }
    abs() {
      return this.sign === -1 ? this.neg() : this;
    }
    ln(i) {
      return this.isZero ? this.clone(NaN) : this.isPositiveInfinity ? this.clone(1 / 0) : this.sign < 0 ? this.clone(NaN) : this.isOne ? this.clone(0) : this.isNegativeOne ? this.factory({ im: Math.PI }) : this.factory(this.bignumRe).ln(i);
    }
    exp() {
      return this.isNaN ? this.clone(NaN) : this.isZero ? this.clone(1) : this.isNegativeInfinity ? this.clone(0) : this.isPositiveInfinity ? this.clone(1 / 0) : this.factory(this.bignumRe).exp();
    }
    floor() {
      return this.isNaN ? this.clone(NaN) : this.type === "integer" ? this : this.clone(Math.floor(this.re));
    }
    ceil() {
      return this.isNaN ? this.clone(NaN) : this.type === "integer" ? this : this.clone(Math.ceil(this.re));
    }
    round() {
      return this.isNaN ? this.clone(NaN) : this.type === "integer" ? this : this.clone(Math.round(this.re));
    }
    eq(i) {
      return typeof i == "number" ? this.radical === 1 && ri(this.rational) && this.rational[0] == i : i instanceof e2 ? this.radical === i.radical && this.rational[0] == i.rational[0] && this.rational[1] == i.rational[1] : i.im === 0 && i.re === this.re;
    }
    lt(i) {
      return this.im, typeof i == "number" ? this.re < i : this.re < i.re;
    }
    lte(i) {
      return this.im, typeof i == "number" ? this.re <= i : this.re <= i.re;
    }
    gt(i) {
      return this.im, typeof i == "number" ? this.re > i : this.re > i.re;
    }
    gte(i) {
      return this.im, typeof i == "number" ? this.re >= i : this.re >= i.re;
    }
    static sum(i, t, r) {
      if (i.length === 1) return i;
      if (i.some((l) => !l.isExact)) {
        if (i.length === 2) return [i[0].add(i[1])];
        let l = t(0);
        for (let f of i) l = l.add(f);
        return [l];
      }
      let o = 0, s = [0, 1], a = [];
      for (let l of i) {
        if (l.isNaN) return [new e2(NaN, t, r)];
        if (!l.isZero) if (o += l.im, l instanceof e2) {
          let f = l.rational;
          if (l.radical === 1) s = oi(s, f);
          else {
            let c = a.findIndex((d) => d.radical === l.radical);
            c === -1 ? a.push({ multiple: f, radical: l.radical }) : a[c].multiple = oi(a[c].multiple, f);
          }
        } else g(l.type, "integer"), s = oi(s, [l.re, 1]);
      }
      if (an(s) && a.length === 0) return o === 0 ? [new e2(0, t, r)] : [t({ im: o })];
      let u = [];
      return o !== 0 && u.push(t({ im: o })), a.length === 0 ? u.push(new e2({ rational: s }, t, r)) : (a.push({ multiple: s, radical: 1 }), u.push(...a.map((l) => new e2({ rational: l.multiple, radical: l.radical }, t, r)))), u;
    }
  };
  function je(e12) {
    let n = e12.numericValue;
    if (n === null || typeof n == "number" && !Number.isFinite(n) || n instanceof V && (n.isNaN || n.isPositiveInfinity || n.isNegativeInfinity)) return;
    if (typeof n == "number") return Number.isInteger(n) ? [n, 1] : void 0;
    let i = n.type;
    if (i !== "finite_integer" && i !== "finite_rational" || n.im !== 0) return;
    if (n instanceof j) return n.radical !== 1 ? void 0 : n.rational;
    let t = n.bignumRe;
    if (t !== void 0 && Number.isInteger(t)) return [K(t), BigInt(1)];
    let r = n.re;
    if (Number.isInteger(r)) return [r, 1];
  }
  function kt(e12) {
    if (e12 == null) return null;
    let n = e12.numericValue;
    if (n === null) return null;
    if (typeof n == "number") return Number.isInteger(n) ? BigInt(n) : null;
    if (n.im !== 0) return null;
    let i = n.bignumRe;
    return i?.isInteger() ? K(i) : Number.isInteger(n.re) ? BigInt(n.re) : null;
  }
  function Wo(e12) {
    if (e12 == null) return null;
    let n = typeof e12 == "number" ? e12 : e12.numericValue;
    if (n === null) return null;
    if (typeof n == "number") return e12.engine.bignum(n);
    if (n.im !== 0) return null;
    let i = n.bignumRe ?? n.re;
    return typeof i == "number" && isNaN(i) ? null : e12.engine.bignum(i);
  }
  function z(e12) {
    if (e12 == null) return null;
    if (typeof e12 == "number") return Number.isInteger(e12) && e12 >= -O && e12 <= O ? e12 : null;
    let n = e12.numericValue;
    if (n === null) return null;
    if (typeof n == "number") return Number.isInteger(n) && n >= -O && n <= O ? n : null;
    if (n.im !== 0) return null;
    let i = n.re;
    return Number.isInteger(i) && i >= -O && i <= O ? Number(i) : null;
  }
  function we(e12) {
    if (e12.symbol && !e12.isConstant) return 1;
    if (e12.operator === "Power" && e12.op2.isNumberLiteral) {
      if (we(e12.op1) === 0) return 0;
      let n = z(e12.op2);
      return n !== null && n > 0 ? n : 0;
    }
    if (e12.operator === "Multiply") {
      let n = 0;
      for (let i of e12.ops) {
        let t = we(i);
        n = n + t;
      }
      return n;
    }
    if (e12.operator === "Add" || e12.operator === "Subtract") {
      let n = 0;
      for (let i of e12.ops) n = Math.max(n, we(i));
      return n;
    }
    return e12.operator === "Negate" || e12.operator === "Divide" ? we(e12.op1) : 0;
  }
  function Ze(e12) {
    if (e12.symbol && !e12.isConstant) return 1;
    if (e12.operator === "Power" && e12.op2.isNumberLiteral) {
      if (Ze(e12.op1) === 0) return 0;
      let n = z(e12.op2);
      return n !== null && n > 0 ? n : 0;
    }
    if (e12.operator === "Multiply" || e12.operator === "Add" || e12.operator === "Subtract") {
      let n = 0;
      for (let i of e12.ops) n = Math.max(n, we(i));
      return n;
    }
    return e12.operator === "Negate" || e12.operator === "Divide" ? Ze(e12.op1) : 0;
  }
  function gu(e12) {
    return e12.symbol && !e12.isConstant ? e12.symbol : e12.ops ? e12.ops.map((n) => gu(n)).join(" ").trim() : "";
  }
  function Jo(e12) {
    return gu(e12).split(" ").reverse().join(" ").trim();
  }
  function Y(e12, n, i, t) {
    if ((e12?.numericValue ?? null) === null) return;
    let r = e12.engine, o;
    if (e12.im !== 0) o = t?.(r.complex(e12.re, e12.im));
    else {
      let s = e12.bignumRe;
      if (s !== void 0 && se(r) && i) o = i(s);
      else {
        let a = e12.re;
        se(r) && i ? o = i(r.bignum(a)) : o = n(a);
      }
    }
    if (o !== void 0) return o instanceof F ? r.number(r._numericValue({ re: r.chop(o.re), im: r.chop(o.im) })) : r.number(r.chop(o));
  }
  function hn(e12, n, i, t, r) {
    if (e12.numericValue === null || n.numericValue === null) return;
    let o = e12.engine, s;
    if ((e12.im !== 0 || n.im !== 0) && (s = r?.(o.complex(e12.re, e12.im), o.complex(n.re, n.im))), s === void 0 && t) {
      let a = e12.bignumRe, u = n.bignumRe;
      (a !== void 0 || u !== void 0) && (a ?? (a = o.bignum(e12.re)), u ?? (u = o.bignum(n.re)), s = t(a, u));
    }
    if (s === void 0) {
      let a = e12.re, u = n.re;
      !isNaN(a) && !isNaN(u) && (se(o) && t ? s = t(o.bignum(e12.bignumRe ?? a), o.bignum(n.bignumRe ?? u)) : s = i(a, u));
    }
    if (s !== void 0) return s instanceof F ? o.number(o._numericValue({ re: o.chop(s.re), im: o.chop(s.im) })) : o.number(o.chop(s));
  }
  function Yo(e12, n) {
    for (e12.isInteger() && n.isInteger(); !n.isZero(); ) [e12, n] = [n, e12.modulo(n)];
    return e12.abs();
  }
  function hu(e12, n) {
    return e12.mul(n).div(Yo(e12, n));
  }
  function xu(e12, n) {
    if (!n.isInteger() || n.isNegative()) return e12._BIGNUM_NAN;
    if (n.lessThan(1)) return e12._BIGNUM_ONE;
    let i = n;
    for (; n.greaterThan(2); ) n = n.minus(2), i = i.mul(n);
    return i;
  }
  function ai(e12) {
    return e12.isFinite() ? e12.d.length > 3 || e12.d.length === 3 && e12.d[0] >= 90 ? false : (e12.precision() <= 16, e12.e < 308 && e12.e > -306) : true;
  }
  var ui = class e3 extends V {
    constructor(n, i) {
      if (super(), this.bignum = i, typeof n == "number") this.decimal = i(n), this.im = 0;
      else if (n instanceof ge) this.decimal = n, this.im = 0;
      else {
        let t = i(n.re ?? 0);
        this.decimal = t, this.im = n.im ?? 0;
      }
      this.decimal.isNaN() && (this.im = NaN), this.decimal.isNaN(), isNaN(this.im);
    }
    get type() {
      return this.im !== 0 ? Number.isFinite(this.im) ? this.decimal.isZero() ? "finite_imaginary" : "finite_complex" : "non_finite_number" : this.decimal.isFinite() ? this.decimal.isInteger() ? "finite_integer" : "finite_real" : "non_finite_number";
    }
    get isExact() {
      return this.im === 0 && this.decimal.isInteger();
    }
    get asExact() {
      if (this.isExact) return this._makeExact(K(this.decimal));
    }
    toJSON() {
      return this.isNaN ? "NaN" : this.isPositiveInfinity ? "PositiveInfinity" : this.isNegativeInfinity ? "NegativeInfinity" : this.isComplexInfinity ? "ComplexInfinity" : this.im === 0 ? ai(this.decimal) ? He(this.decimal.toNumber()) : { num: kr(this.decimal) } : ai(this.decimal) ? ["Complex", Ae(He(this.decimal.toNumber())), Ae(this.im)] : ["Complex", { num: kr(this.decimal) }, Ae(this.im)];
    }
    toString() {
      if (this.isZero) return "0";
      if (this.isOne) return "1";
      if (this.isNegativeOne) return "-1";
      if (this.im === 0) return kr(this.decimal);
      if (this.decimal.isZero()) return this.im === 1 ? "i" : this.im === -1 ? "-i" : `${he(this.im)}i`;
      if (this.isComplexInfinity) return "~oo";
      let n = "";
      return this.im === 1 ? n = "+ i" : this.im === -1 ? n = "- i" : this.im > 0 ? n = `+ ${this.im}i` : n = `- ${-this.im}i`, `(${kr(this.decimal)} ${n})`;
    }
    clone(n) {
      return new e3(n, this.bignum);
    }
    _makeExact(n) {
      return new j(n, (i) => this.clone(i), this.bignum);
    }
    get re() {
      return He(this.decimal.toNumber());
    }
    get bignumRe() {
      return this.decimal;
    }
    get numerator() {
      return this;
    }
    get denominator() {
      return this._makeExact(1);
    }
    get isNaN() {
      return this.decimal.isNaN();
    }
    get isPositiveInfinity() {
      return this.im === 0 && !this.decimal.isFinite() && !this.decimal.isNaN() && this.decimal.isPositive();
    }
    get isNegativeInfinity() {
      return this.im === 0 && !this.decimal.isFinite() && !this.decimal.isNaN() && this.decimal.isNegative();
    }
    get isComplexInfinity() {
      return !Number.isFinite(this.im) && !Number.isNaN(this.im);
    }
    get isZero() {
      return this.im === 0 && this.decimal.isZero();
    }
    isZeroWithTolerance(n) {
      if (this.im !== 0) return false;
      let i = typeof n == "number" ? this.bignum(n) : n;
      return this.decimal.abs().lte(i);
    }
    get isOne() {
      return this.im === 0 && this.decimal.eq(1);
    }
    get isNegativeOne() {
      return this.im === 0 && this.decimal.eq(-1);
    }
    sgn() {
      if (this.im === 0) {
        if (this.decimal.isZero()) return 0;
        if (this.decimal.isPositive()) return 1;
        if (this.decimal.isNegative()) return -1;
      }
    }
    N() {
      return this;
    }
    neg() {
      return this.isZero ? this : this.clone({ re: this.decimal.neg(), im: -this.im });
    }
    inv() {
      if (this.isOne) return this;
      if (this.isNegativeOne) return this;
      if (this.im === 0) return this.clone(this.decimal.pow(-1));
      let n = Math.hypot(this.re, this.im), i = this.decimal.mul(this.decimal).add(this.im * this.im).sqrt();
      return this.clone({ re: this.decimal.div(i), im: -this.im / n });
    }
    add(n) {
      return typeof n == "number" ? n === 0 ? this : this.clone({ re: this.decimal.add(n), im: this.im }) : n.isZero ? this : this.isZero ? this.clone(n) : this.clone({ re: this.decimal.add(n.bignumRe ?? n.re), im: this.im + n.im });
    }
    sub(n) {
      return this.add(n.neg());
    }
    mul(n) {
      if (this.isZero) return this;
      if (n === 1) return this;
      if (n === -1) return this.neg();
      if (n === 0) return this.clone(0);
      if (this.isOne) return typeof n == "number" || n instanceof ge ? this.clone(n) : this.clone({ re: n.bignumRe ?? n.re, im: n.im });
      if (typeof n == "number") return this.im === 0 ? this.clone(this.decimal.mul(n)) : this.clone({ re: this.decimal.mul(n), im: this.im * n });
      if (n instanceof ge) return this.im === 0 ? this.clone(this.decimal.mul(n)) : this.clone({ re: this.decimal.mul(n), im: He(this.im * n.toNumber()) });
      if (this.isNegativeOne) {
        let i = n.neg();
        return this.clone({ re: i.bignumRe ?? i.re, im: i.im });
      }
      return n.isOne ? this : n.isNegativeOne ? this.neg() : n.isZero ? this.clone(0) : this.im === 0 && n.im === 0 ? this.clone(this.decimal.mul(n.bignumRe ?? n.re)) : this.clone({ re: this.decimal.mul(n.bignumRe ?? n.re).sub(this.im * n.im), im: this.re * n.im + this.im * n.re });
    }
    div(n) {
      if (typeof n == "number") return n === 1 ? this : n === -1 ? this.neg() : n === 0 ? this.clone(NaN) : this.clone({ re: this.decimal.div(n), im: this.im / n });
      if (n.isOne) return this;
      if (n.isNegativeOne) return this.neg();
      if (n.isZero) return this.clone(this.isZero ? NaN : 1 / 0);
      if (this.im === 0 && n.im === 0) return this.clone(this.decimal.div(n.bignumRe ?? n.re));
      let [i, t] = [this.re, this.im], [r, o] = [n.re, n.im], s = r * r + o * o, a = n.bignumRe ?? this.bignum(n.re), u = a.mul(a).add(o * o);
      return this.clone({ re: this.decimal.mul(a).add(t * o).div(u), im: (t * r - i * o) / s });
    }
    pow(n) {
      if (Array.isArray(n), this.isNaN) return this;
      if (typeof n == "number" && isNaN(n)) return this.clone(NaN);
      if (n instanceof V) {
        if (n.isNaN) return this.clone(NaN);
        if (n.isZero) return this.clone(1);
        if (n.isOne) return this;
        n.im ? n = { re: n.re, im: n.im } : n = n.re;
      }
      if (typeof n == "object" && ("re" in n || "im" in n)) {
        let [u, l] = [n?.re ?? 0, n?.im ?? 0];
        if (Number.isNaN(l) || Number.isNaN(u)) return this.clone(NaN);
        if (l === 0) n = u;
        else {
          if (this.im === 1 / 0) return this.clone(NaN);
          if (this.isNegativeInfinity) return this.clone(0);
          if (this.isPositiveInfinity) return this.clone({ im: 1 / 0 });
          let f = this.pow(u), c = this.decimal.ln().mul(l), d = this.clone({ re: c.cos(), im: He(c.sin().toNumber()) });
          return f.mul(d);
        }
      }
      if (this.isPositiveInfinity) {
        if (n === -1) return this.clone(0);
        if (n === 1 / 0) return this.clone(1 / 0);
        if (n === -1 / 0) return this.clone(0);
      } else if (this.isNegativeInfinity && n === 1 / 0) return this.clone(NaN);
      if ((n === 1 / 0 || n === -1 / 0) && (this.isOne || this.isNegativeOne)) return this.clone(NaN);
      if (n === 1) return this;
      if (n === -1) return this.inv();
      if (n === 0) return this.clone(1);
      if (this.isZero) {
        if (n > 0) return this;
        if (n < 0) return this.clone({ im: 1 / 0 });
      }
      if (n < 0) return this.pow(-n).inv();
      if (this.im === 0) return this.clone(this.decimal.pow(n));
      let i = this.decimal, t = this.im, r = i.mul(i).add(t * t).sqrt(), o = ge.atan2(t, i), s = r.pow(n), a = o.mul(n);
      return this.clone({ re: s.mul(a.cos()), im: He(s.mul(a.sin()).toNumber()) });
    }
    root(n) {
      if (!Number.isInteger(n)) return this._makeExact(NaN);
      if (n === 0) return this._makeExact(NaN);
      if (n === 1) return this;
      if (this.isZero) return this;
      if (this.isOne) return this;
      if (this.isNegativeOne) return this;
      if (this.im === 0) return this.decimal.isNegative() ? this._makeExact(NaN) : n === 2 ? this.clone(this.decimal.sqrt()) : n === 3 ? this.clone(this.decimal.cbrt()) : this.clone(this.decimal.pow(1 / n));
      let i = this.decimal, t = this.im, r = i.mul(i).add(t * t).sqrt(), o = ge.atan2(t, i), s = r.pow(1 / n), a = o.div(n);
      return this.clone({ re: s.mul(a.cos()), im: He(s.mul(a.sin()).toNumber()) });
    }
    sqrt() {
      if (this.isZero || this.isOne) return this;
      if (this.im !== 0) {
        let n = this.decimal, i = this.im, t = n.mul(n).add(i * i).sqrt(), r = n.add(t).div(2).sqrt(), o = He(Math.sign(i) * t.sub(n).div(2).sqrt().toNumber());
        return this.clone({ re: r, im: o });
      }
      return this.decimal.isPositive() ? this.clone(this.decimal.sqrt()) : this.clone({ im: Math.sqrt(-this.re) });
    }
    gcd(n) {
      if (this.isZero) return n;
      if (n.isZero) return this;
      if (this.im !== 0 || n.im !== 0) return this._makeExact(NaN);
      if (!this.decimal.isInteger()) return this._makeExact(1);
      let i = this.bignum(n.bignumRe ?? n.re);
      if (!i.isInteger()) return this._makeExact(1);
      let t = this.decimal;
      for (; !i.isZero(); ) {
        let r = i;
        i = t.mod(i), t = r;
      }
      return this.clone(t.abs());
    }
    abs() {
      return this.im === 0 ? this.decimal.isPositive() ? this : this.clone(this.decimal.neg()) : this.clone(this.decimal.pow(2).add(this.im ** 2).sqrt());
    }
    ln(n) {
      if (this.isZero) return this._makeExact(NaN);
      if (this.isNegativeInfinity) return this._makeExact(NaN);
      if (this.isPositiveInfinity) return this._makeExact(1 / 0);
      if (this.im === 0) return this.decimal.isNegative() ? this._makeExact(NaN) : this.isOne ? this._makeExact(0) : this.isNegativeOne ? this.clone({ im: Math.PI }) : n === void 0 ? this.clone(this.decimal.ln()) : this.clone(this.decimal.log(n));
      let i = this.decimal, t = this.im, r = i.mul(i).add(t * t).sqrt(), o = He(ge.atan2(t, i).toNumber());
      return n === void 0 ? this.clone({ re: r.ln(), im: o }) : this.clone({ re: r.log(n), im: o });
    }
    exp() {
      if (this.isNaN) return this._makeExact(NaN);
      if (this.isZero) return this._makeExact(1);
      if (this.isNegativeInfinity) return this._makeExact(0);
      if (this.isPositiveInfinity) return this._makeExact(1 / 0);
      if (this.im !== 0) {
        let n = this.decimal.exp();
        return this.clone({ re: n.mul(He(Math.cos(this.im))), im: He(n.mul(Math.sin(this.im)).toNumber()) });
      }
      return this.clone(this.decimal.exp());
    }
    floor() {
      return this.isNaN || this.im !== 0 ? this._makeExact(NaN) : this.decimal.isInteger() ? this : this._makeExact(K(this.decimal.floor()));
    }
    ceil() {
      return this.isNaN || this.im !== 0 ? this._makeExact(NaN) : this.decimal.isInteger() ? this : this._makeExact(K(this.decimal.ceil()));
    }
    round() {
      return this.isNaN || this.im !== 0 ? this._makeExact(NaN) : this.decimal.isInteger() ? this : this._makeExact(K(this.decimal.round()));
    }
    eq(n) {
      return this.isNaN ? false : typeof n == "number" ? this.im === 0 && this.decimal.eq(n) : n.isNaN ? false : Number.isFinite(this.im) ? this.decimal.eq(n.bignumRe ?? n.re) && He(this.im - n.im) === 0 : !Number.isFinite(n.im);
    }
    lt(n) {
      return this.im, typeof n == "number" ? this.decimal.lt(n) : this.decimal.lt(n.bignumRe ?? n.re);
    }
    lte(n) {
      return this.im, typeof n == "number" ? this.decimal.lte(n) : this.decimal.lte(n.bignumRe ?? n.re);
    }
    gt(n) {
      return this.im, typeof n == "number" ? this.decimal.gt(n) : this.decimal.gt(n.bignumRe ?? n.re);
    }
    gte(n) {
      return this.im, typeof n == "number" ? this.decimal.gte(n) : this.decimal.gte(n.bignumRe ?? n.re);
    }
  };
  function kr(e12) {
    let n = e12.toString();
    if (e12.isInteger() && n.includes("e")) {
      let i = e12.toFixed(), t = i.match(/0+$/);
      if ((t ? t[0].length : 0) <= 5) return i;
    }
    return n;
  }
  function He(e12) {
    return Math.abs(e12) <= ni ? 0 : e12;
  }
  var li = class e4 extends V {
    constructor(n, i) {
      if (super(), this.bignum = i, typeof n == "number") this.decimal = n, this.im = 0;
      else if (n instanceof ge) this.decimal = n.toNumber(), this.im = 0;
      else {
        let t = n.re === void 0 ? 0 : n.re instanceof ge ? n.re.toNumber() : n.re;
        this.decimal = t, this.im = n.im ?? 0, isFinite(this.im) || (this.decimal = this.im);
      }
      isNaN(this.im);
    }
    _makeExact(n) {
      return new j(n, (i) => this.clone(i), this.bignum);
    }
    get type() {
      return this.im !== 0 ? Number.isFinite(this.im) ? this.decimal === 0 ? "finite_imaginary" : "finite_complex" : "non_finite_number" : Number.isFinite(this.decimal) ? Number.isInteger(this.decimal) ? "finite_integer" : "finite_real" : "non_finite_number";
    }
    get isExact() {
      return this.im === 0 && Number.isInteger(this.decimal);
    }
    get asExact() {
      if (this.isExact) return this._makeExact(this.decimal);
    }
    toJSON() {
      return this.isNaN ? "NaN" : this.isPositiveInfinity ? "PositiveInfinity" : this.isNegativeInfinity ? "NegativeInfinity" : this.im === 0 ? Ae(this.decimal) : ["Complex", Ae(this.decimal), Ae(this.im)];
    }
    toString() {
      if (this.isZero) return "0";
      if (this.isOne) return "1";
      if (this.isNegativeOne) return "-1";
      if (this.im === 0) return he(this.decimal);
      if (this.decimal === 0) return this.im === 1 ? "i" : this.im === -1 ? "-i" : `${he(this.im)}i`;
      if (this.isComplexInfinity) return "~oo";
      let n = "";
      return this.im === 1 ? n = "+ i" : this.im === -1 ? n = "- i" : this.im > 0 ? n = `+ ${he(this.im)}i` : n = `- ${he(-this.im)}i`, `(${he(this.decimal)} ${n})`;
    }
    clone(n) {
      return new e4(n, this.bignum);
    }
    get re() {
      return this.decimal;
    }
    get bignumRe() {
    }
    get numerator() {
      return this;
    }
    get denominator() {
      return this._makeExact(1);
    }
    get isNaN() {
      return Number.isNaN(this.decimal);
    }
    get isPositiveInfinity() {
      return !Number.isFinite(this.decimal) && this.decimal > 0 && this.im === 0;
    }
    get isNegativeInfinity() {
      return !Number.isFinite(this.decimal) && this.decimal < 0 && this.im === 0;
    }
    get isComplexInfinity() {
      return !Number.isFinite(this.im) && !Number.isNaN(this.im);
    }
    get isZero() {
      return this.im === 0 && this.decimal === 0;
    }
    isZeroWithTolerance(n) {
      if (this.im !== 0) return false;
      let i = n instanceof ge ? n.toNumber() : n;
      return Math.abs(this.decimal) < i;
    }
    get isOne() {
      return this.im === 0 && this.decimal === 1;
    }
    get isNegativeOne() {
      return this.im === 0 && this.decimal === -1;
    }
    sgn() {
      if (!(this.im !== 0 || !Number.isFinite(this.decimal))) return Math.sign(this.decimal);
    }
    N() {
      return this;
    }
    neg() {
      return this.isNaN ? this._makeExact(NaN) : this.isZero ? this : this.clone({ re: -this.decimal, im: -this.im });
    }
    inv() {
      if (this.isNaN) return this._makeExact(NaN);
      if (this.isOne) return this;
      if (this.isNegativeOne) return this;
      if (this.im === 0) return this.clone(1 / this.decimal);
      let n = Math.hypot(this.re, this.im);
      return this.clone({ re: this.decimal / n, im: -this.im / n });
    }
    add(n) {
      return this.isNaN ? this._makeExact(NaN) : typeof n == "number" ? n === 0 ? this : this.clone({ re: this.decimal + n, im: this.im }) : n.isZero ? this : this.isZero ? this.clone({ re: n.bignumRe ?? n.re, im: n.im }) : this.clone({ re: this.decimal + n.re, im: this.im + n.im });
    }
    sub(n) {
      return this.add(n.neg());
    }
    mul(n) {
      if (this.isNaN) return this._makeExact(NaN);
      if (this.isZero) return this;
      if (n instanceof ge && (n = n.toNumber()), n === 1) return this;
      if (n === -1) return this.neg();
      if (n === 0) return this.clone(0);
      if (this.isOne) return typeof n == "number" || n instanceof ge ? this.clone(n) : this.clone({ re: n.bignumRe ?? n.re, im: n.im });
      if (typeof n == "number") return this.im === 0 ? this.clone(this.decimal * n) : this.clone({ re: this.decimal * n, im: this.im * n });
      if (this.isNegativeOne) {
        let i = n.neg();
        return this.clone({ re: i.bignumRe ?? i.re, im: i.im });
      }
      return n.isOne ? this : n.isNegativeOne ? this.neg() : n.isZero ? this.clone(0) : this.im === 0 && n.im === 0 ? this.clone(this.decimal * n.re) : this.clone({ re: this.decimal * n.re - this.im * n.im, im: this.re * n.im + this.im * n.re });
    }
    div(n) {
      if (this.isNaN) return this._makeExact(NaN);
      if (typeof n == "number") return n === 1 ? this : n === -1 ? this.neg() : n === 0 ? this.clone(NaN) : this.clone({ re: this.decimal / n, im: this.im / n });
      if (n.isOne) return this;
      if (n.isNegativeOne) return this.neg();
      if (n.isZero) return this.clone(this.isZero ? NaN : 1 / 0);
      if (this.im === 0 && n.im === 0) return this.clone(this.decimal / n.re);
      let [i, t] = [this.decimal, this.im], [r, o] = [n.re, n.im], s = r * r + o * o;
      return this.clone({ re: (i * r + t * o) / s, im: (t * r - i * o) / s });
    }
    pow(n) {
      if (Array.isArray(n), this.isNaN) return this._makeExact(NaN);
      if (typeof n == "number" && isNaN(n)) return this.clone(NaN);
      if (n instanceof V) {
        if (n.isNaN) return this.clone(NaN);
        if (n.isZero) return this.clone(1);
        if (n.isOne) return this;
        n.im ? n = { re: n.re, im: n.im } : n = n.re;
      }
      if (typeof n == "object" && ("re" in n || "im" in n)) {
        let [u, l] = [n?.re ?? 0, n?.im ?? 0];
        if (Number.isNaN(l) || Number.isNaN(u)) return this.clone(NaN);
        if (l === 0) n = u;
        else {
          if (this.im === 1 / 0) return this.clone(NaN);
          if (this.isNegativeInfinity) return this.clone(0);
          if (this.isPositiveInfinity) return this.clone({ im: 1 / 0 });
          let f = this.pow(u).re, c = Math.log(this.decimal) * l;
          return this.clone({ re: wt(f * Math.cos(c)), im: wt(f * Math.sin(c)) });
        }
      }
      if (this.isPositiveInfinity) {
        if (n === -1) return this.clone(0);
        if (n === 1 / 0) return this.clone(1 / 0);
        if (n === -1 / 0) return this.clone(0);
      } else if (this.isNegativeInfinity && n === 1 / 0) return this.clone(NaN);
      if ((n === 1 / 0 || n === -1 / 0) && (this.isOne || this.isNegativeOne)) return this.clone(NaN);
      if (n === 1) return this;
      if (n === -1) return this.inv();
      if (n === 0) return this.clone(1);
      if (this.isZero) {
        if (n > 0) return this;
        if (n < 0) return this.clone({ im: 1 / 0 });
      }
      if (n < 0) return this.pow(-n).inv();
      if (this.im === 0) return this.clone(this.decimal ** n);
      let i = this.decimal, t = this.im, r = Math.sqrt(i * i + t * t), o = Math.atan2(t, i), s = r ** n, a = o ** n;
      return this.clone({ re: s * Math.cos(a), im: s * Math.sin(a) });
    }
    root(n) {
      if (this.isNaN) return this._makeExact(NaN);
      if (n === 0) return this.clone(NaN);
      if (this.isNaN) return this;
      if (this.isZero) return this;
      if (this.isOne) return this;
      if (this.isNegativeOne) return this;
      if (n === 1) return this;
      if (n === 2) return this.sqrt();
      if (n === 3) return this.clone(Math.cbrt(this.decimal));
      if (this.im === 0) return this.decimal < 0 ? n % 2 === 0 ? this.clone(NaN) : this.clone(-Math.pow(-this.decimal, 1 / n)) : this.clone(Math.pow(this.decimal, 1 / n));
      let i = this.decimal, t = this.im, r = Math.hypot(i, t), o = Math.atan2(t, i), s = Math.pow(r, 1 / n), a = o / n;
      return this.clone({ re: s * Math.cos(a), im: s * Math.sin(a) });
    }
    sqrt() {
      if (this.isNaN) return this._makeExact(NaN);
      if (this.isZero || this.isOne) return this;
      if (this.im !== 0) {
        let n = this.decimal, i = this.im, t = Math.sqrt(n * n + i * i), r = Math.sqrt((n + t) / 2), o = Math.sign(i) * Math.sqrt((t - n) / 2);
        return this.clone({ re: r, im: o });
      }
      return this.decimal > 0 ? this.clone(Math.sqrt(this.decimal)) : this.clone({ im: Math.sqrt(-this.decimal) });
    }
    gcd(n) {
      if (this.isNaN) return this._makeExact(NaN);
      if (this.isZero) return n;
      if (n.isZero) return this;
      if (this.im !== 0 || n.im !== 0) return this._makeExact(NaN);
      if (!Number.isInteger(this.decimal)) return this._makeExact(1);
      let i = n.re;
      if (!Number.isInteger(i)) return this._makeExact(1);
      let t = this.decimal;
      for (; i !== 0; ) {
        let r = i;
        i = t % i, t = r;
      }
      return this.clone(Math.abs(t));
    }
    abs() {
      return this.isNaN ? this._makeExact(NaN) : this.im === 0 ? this.decimal > 0 ? this : this.clone(-this.decimal) : this.clone(Math.sqrt(this.decimal ** 2 + this.im ** 2));
    }
    ln(n) {
      if (this.isNaN) return this._makeExact(NaN);
      if (this.isZero) return this._makeExact(NaN);
      if (this.isNegativeInfinity) return this._makeExact(NaN);
      if (this.isPositiveInfinity) return this._makeExact(1 / 0);
      if (this.im === 0) return this.decimal < 0 ? this._makeExact(NaN) : this.isOne ? this._makeExact(0) : this.isNegativeOne ? this.clone({ im: Math.PI }) : n === void 0 ? this.clone(Math.log(this.decimal)) : this.clone(Math.log(this.decimal) / Math.log(n));
      let i = this.decimal, t = this.im, r = Math.hypot(i, t), o = Math.atan2(t, i), s = n === void 0 ? Math.log(r) : Math.log(r) / Math.log(n);
      return this.clone({ re: s, im: o });
    }
    exp() {
      if (this.isNaN) return this._makeExact(NaN);
      if (this.isZero) return this._makeExact(1);
      if (this.isNegativeInfinity) return this._makeExact(0);
      if (this.isPositiveInfinity) return this._makeExact(1 / 0);
      if (this.im !== 0) {
        let n = Math.exp(this.decimal);
        return this.clone({ re: n * Math.cos(this.im), im: n * Math.sin(this.im) });
      }
      return this.clone(Math.exp(this.decimal));
    }
    floor() {
      return this.isNaN || this.im !== 0 ? this._makeExact(NaN) : Number.isInteger(this.decimal) ? this : this._makeExact(Math.floor(this.decimal));
    }
    ceil() {
      return this.isNaN || this.im !== 0 ? this._makeExact(NaN) : Number.isInteger(this.decimal) ? this : this._makeExact(Math.ceil(this.decimal));
    }
    round() {
      return this.isNaN || this.im !== 0 ? this._makeExact(NaN) : Number.isInteger(this.decimal) ? this : this._makeExact(Math.round(this.decimal));
    }
    eq(n) {
      return this.isNaN ? false : typeof n == "number" ? this.im === 0 && wt(this.decimal - n) === 0 : n.isNaN ? false : Number.isFinite(this.im) ? wt(this.decimal - n.re) === 0 && wt(this.im - n.im) === 0 : !Number.isFinite(n.im);
    }
    lt(n) {
      return this.im, typeof n == "number" ? this.decimal < n : this.decimal < n.re;
    }
    lte(n) {
      return this.im, typeof n == "number" ? this.decimal <= n : this.decimal <= n.re;
    }
    gt(n) {
      return this.im, typeof n == "number" ? this.decimal > n : this.decimal > n.re;
    }
    gte(n) {
      return this.im, typeof n == "number" ? this.decimal >= n : this.decimal >= n.re;
    }
  };
  function wt(e12) {
    return Math.abs(e12) <= ni ? 0 : e12;
  }
  var Dt = class {
    constructor(n, i) {
      this.terms = [];
      this.engine = n;
      let t = 0, r = 0, o = [];
      for (let s of i) {
        if ((s.type === "imaginary" || s.type === "complex") && s.isInfinity) {
          this.terms = [{ term: n.ComplexInfinity, coef: [] }];
          return;
        }
        if (s.isNaN || s.symbol === "Undefined") {
          this.terms = [{ term: n.NaN, coef: [] }];
          return;
        }
        let [a, u] = s.toNumericValue();
        a.isPositiveInfinity ? t += 1 : a.isNegativeInfinity && (r += 1), u.is(1) ? a.isZero || o.push(a) : this.add(a, u);
      }
      if (t > 0 && r > 0) {
        this.terms = [{ term: n.NaN, coef: [] }];
        return;
      }
      if (t > 0) {
        this.terms = [{ term: n.PositiveInfinity, coef: [] }];
        return;
      }
      if (r > 0) {
        this.terms = [{ term: n.NegativeInfinity, coef: [] }];
        return;
      }
      o.length === 1 ? this.add(o[0], n.One) : o.length > 0 && yu(n, o).forEach((s) => this.add(s, n.One));
    }
    add(n, i) {
      if (i.is(0) || n.isZero) return;
      if (i.is(1)) {
        let r = this.engine;
        this.terms.push({ coef: [], term: r.number(n) });
        return;
      }
      if (i.operator === "Add") {
        for (let r of i.ops) {
          let [o, s] = r.toNumericValue();
          this.add(n.mul(o), s);
        }
        return;
      }
      if (i.operator === "Negate") {
        this.add(n.neg(), i.op1);
        return;
      }
      let t = this.find(i);
      if (t >= 0) {
        this.terms[t].coef.push(n);
        return;
      }
      i.numericValue === null || i.is(1), this.terms.push({ coef: [n], term: i });
    }
    find(n) {
      return this.terms.findIndex((i) => i.term.isSame(n));
    }
    N() {
      let n = this.engine, i = this.terms;
      if (i.length === 0) return n.Zero;
      let t = [], r = [];
      for (let { coef: s, term: a } of i) if (s.length === 0) a.isNumberLiteral ? typeof a.numericValue == "number" ? r.push(n._numericValue(a.numericValue)) : r.push(a.numericValue) : t.push(a);
      else {
        let u = s.reduce((l, f) => l.add(f)).N();
        if (u.isZero) continue;
        u.eq(1) ? t.push(a.N()) : u.eq(-1) ? t.push(a.N().neg()) : t.push(a.N().mul(n.box(u)));
      }
      let o = Od(n, r);
      if (!o.isZero) {
        if (t.length === 0) return n.box(o);
        t.push(n.box(o));
      }
      return $e(n, t);
    }
    asExpression() {
      let n = this.engine, i = this.terms;
      return i.length === 0 ? n.Zero : $e(n, i.map(({ coef: t, term: r }) => {
        if (t.length === 0) return r;
        let o = yu(n, t);
        if (o.length === 0) return r;
        if (o.length > 1) return ae(n, [$e(n, o.map((a) => n.box(a))), r]);
        let s = o[0];
        return s.isNaN ? n.NaN : s.isZero ? n.Zero : s.eq(1) ? r : s.eq(-1) ? r.neg() : r.is(1) ? n.box(s) : r.mul(n.box(s));
      }));
    }
  };
  function yu(e12, n) {
    let i = (o) => e12.bignum(o), t = (o) => new j(o, r, i), r = e12.precision > pn ? (o) => new ui(o, i) : (o) => new li(o, t);
    return j.sum(n, r, i);
  }
  function Od(e12, n) {
    let i = (s) => e12.bignum(s), t = (s) => new j(s, r, i), r = e12.precision > pn ? (s) => new ui(s, i) : (s) => new li(s, t), o = j.sum(n, r, i);
    return o.length === 0 ? t(0) : o.length === 1 ? o[0].N() : o.reduce((s, a) => s.add(a).N());
  }
  function $e(e12, n) {
    if (n = W(n, "Add"), n = n.filter((t) => t.numericValue === null || !t.is(0)), n.length === 0) return e12.Zero;
    if (n.length === 1 && !ti(n[0])) return n[0];
    let i = [];
    for (let t = 0; t < n.length; t++) {
      let r = n[t];
      if (r.isNumberLiteral) {
        let o = r.numericValue;
        if (typeof o == "number" || g(o.type, "real") && !o.isExact || g(o.type, "integer")) {
          let s = n[t + 1];
          if (s) {
            let a = ki(s)?.numericValue;
            if (a !== void 0) {
              let u = typeof a == "number" ? a : a?.re;
              if (u !== 0) {
                let l = typeof o == "number" ? o : o.re;
                i.push(e12.number(e12._numericValue({ re: l, im: u ?? 0 }))), t++;
                continue;
              }
            }
          }
        }
      }
      i.push(r);
    }
    return i.length === 1 ? i[0] : e12._fn("Add", [...i].sort(Rt));
  }
  function bu(e12) {
    return e12.length === 0 ? "finite_integer" : e12.length === 1 ? e12[0].type : Oe(...e12.map((n) => n.type));
  }
  function Z(...e12) {
    return e12.length > 0, e12.every((n) => n.isValid) ? new Dt(e12[0].engine, e12).asExpression() : e12[0].engine._fn("Add", e12);
  }
  function Eu(...e12) {
    return e12.length > 0, e12.every((n) => n.isValid) ? (e12 = e12.map((n) => n.isNumberLiteral ? n.evaluate() : n.N()), new Dt(e12[0].engine, e12).N()) : e12[0].engine._fn("Add", e12);
  }
  function xn(e12, n) {
    if (e12.operator === "Negate" && n.operator === "Negate") return xn(e12.op1, n.op1);
    let i = e12.engine;
    if (e12.operator === "Negate") return xn(e12.op1, n).neg();
    if (n.operator === "Negate") return xn(e12, n.op1).neg();
    if (e12.operator === "Divide" && n.operator === "Divide") {
      let t = e12.op2.mul(n.op2);
      return xn(e12.op1, n.op1).div(t);
    }
    return e12.operator === "Divide" ? xn(e12.op1, n).div(e12.op2) : n.operator === "Divide" ? xn(e12, n.op1).div(n.op2) : e12.operator === "Add" ? Z(...e12.ops.map((t) => xn(t, n))) : n.operator === "Add" ? Z(...n.ops.map((t) => xn(e12, t))) : new Te(i, [e12, n]).asExpression();
  }
  function Mt(e12, n) {
    if (n.length === 0) return null;
    if (n.length === 1) return n[0];
    if (n.length === 2) return xn(n[0], n[1]);
    let i = Mt(e12, n.slice(1));
    return i === null ? null : xn(n[0], i);
  }
  var At = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1], [1, 6, 15, 20, 15, 6, 1], [1, 7, 21, 35, 35, 21, 7, 1], [1, 8, 28, 56, 70, 56, 28, 8, 1]];
  function Xo(e12, n) {
    for (; e12 >= At.length; ) {
      let i = At.length, t = [1], r = At[i - 1];
      for (let o = 1; o < i; o++) t[o] = r[o - 1] + r[o];
      t[i] = 1, At.push(t);
    }
    return At[e12][n];
  }
  function Ld(e12) {
    let n = e12.reduce((t, r) => t + r, 0), i = 1;
    for (let t = 0; t < e12.length; t += 1) i *= Xo(n, e12[t]), n -= e12[t];
    return i;
  }
  function* Nu(e12, n) {
    if (e12 === 1) {
      yield [n];
      return;
    }
    for (let i = 0; i <= n; i += 1) for (let t of Nu(e12 - 1, n - i)) yield [i, ...t];
  }
  function Qo(e12, n) {
    let i = e12.engine;
    if (n < 0) {
      let s = Qo(e12, -n);
      return s ? s.inv() : null;
    }
    if (n === 0) return i.One;
    if (n === 1) return Me(e12);
    if (e12.operator === "Negate" && Number.isInteger(n)) {
      let s = n % 2 === 0 ? 1 : -1, a = Qo(e12.op1, n);
      return a === null ? null : s > 0 ? a : a.neg();
    }
    if (e12.operator, e12.operator !== "Add") return null;
    let t = e12.ops, r = Nu(t.length, n), o = [];
    for (let s of r) {
      let a = [i.number(Ld(s))];
      for (let u = 0; u < s.length; u += 1) s[u] !== 0 && (s[u] === 1 ? a.push(t[u]) : a.push(t[u].pow(s[u])));
      o.push(ue(...a));
    }
    return Z(...o);
  }
  function vu(e12, n, i) {
    let t = null;
    if (n === "Divide") {
      let r = Me(i[0]);
      return r === null ? null : r.operator === "Add" ? Z(...r.ops.map((o) => o.div(i[1]))) : e12._fn("Divide", [r, i[1]]);
    }
    if (n === "Multiply") return Mt(e12, i);
    if (n === "Negate") return Me(i[0])?.neg() ?? null;
    if (n === "Add") return Z(...i.map((r) => Me(r) ?? r));
    if (n === "Power") {
      let r = z(i[1]);
      t = r !== null ? Qo(i[0], r) : null;
    }
    return t;
  }
  function Me(e12) {
    return e12 = e12?.canonical, !e12 || typeof e12.operator != "string" ? null : ke(e12.operator) ? e12.engine._fn(e12.operator, e12.ops.map((n) => Me(n) ?? n)) : vu(e12.engine, e12.operator, e12.ops ?? []);
  }
  function Su(e12) {
    if (!e12.operator || !e12.ops) return null;
    let n = e12.engine, i = e12.ops.map((r) => r.ops ? vu(n, r.operator, r.ops) ?? r : r), t = e12.engine.function(e12.operator, i);
    return Me(t) ?? t;
  }
  function Tu(e12) {
    let n = -1;
    for (; e12.operator === "Negate"; ) e12 = e12.op1, n = -n;
    return n === 1 ? e12 : e12.isNumberLiteral ? e12.neg() : e12.engine._fn("Negate", [e12]);
  }
  function fi(e12) {
    let n = -1;
    for (; e12.operator === "Negate"; ) e12 = e12.op1, n = -n;
    if (n === 1) return e12;
    if (e12.numericValue !== null) return e12.neg();
    let i = e12.engine;
    return e12.operator === "Subtract" ? e12.op2.sub(e12.op1) : e12.operator === "Add" ? Z(...e12.ops.map((t) => fi(t))) : e12.operator === "Multiply" ? Ko(i, e12.ops) : e12.operator === "Divide" ? fi(e12.op1).div(e12.op2) : i._fn("Negate", [e12]);
  }
  function Ko(e12, n) {
    if (n.length === 0) return e12.NegativeOne;
    if (n.length === 1) return fi(n[0]);
    let i = [], t = false;
    for (let r of n) !t && r.operator === "Negate" ? (t = true, r.op1.is(1) || i.push(r.op1)) : i.push(r);
    if (!t) {
      i = [];
      for (let r of n) t || r.numericValue === null && !r.isInteger ? i.push(r) : (t = true, r.is(-1) || i.push(r.neg()));
    }
    if (t) return e12._fn("Multiply", i.sort(ce));
    if (!t) {
      i = [];
      for (let r of n) t || r.numericValue === null || !r.isNumber ? i.push(r) : (t = true, r.is(-1) || i.push(r.neg()));
    }
    return t ? e12._fn("Multiply", i.sort(ce)) : e12._fn("Negate", [e12._fn("Multiply", [...n].sort(ce))]);
  }
  function ae(e12, n) {
    let i = 1, t = [];
    for (let o of n) {
      let [s, a] = Fd(o);
      i *= a, t.push(s);
    }
    t = t.filter((o) => !o.is(1));
    let r = [];
    for (let o = 0; o < t.length; o++) {
      let s = t[o];
      if (o + 1 >= t.length) {
        r.push(s);
        continue;
      }
      let a = t[o + 1];
      if (s.isNumberLiteral) {
        if (a.operator === "Sqrt" && a.op1.isNumberLiteral && g(a.op1.type, "finite_integer")) {
          let u = a.op1.numericValue;
          if (typeof u != "number" && (u = u.re), u >= O) {
            r.push(s);
            continue;
          }
          if (g(s.type, "finite_rational")) {
            let l = s.numericValue, [f, c] = typeof l == "number" ? [l, 1] : [l.numerator.re, l.denominator.re];
            r.push(e12.number(e12._numericValue({ rational: [f, c], radical: u }))), o++;
            continue;
          }
        } else if (a.isNumberLiteral && a.numericValue instanceof V) {
          let u = a.numericValue;
          if (u instanceof j && Se(u.rational) && u.radical !== 1) {
            let l = je(s);
            if (l) {
              r.push(e12.number(e12._numericValue({ rational: l, radical: u.radical }))), o++;
              continue;
            }
          } else if (u.im === 1) {
            let l = s.numericValue;
            if (typeof l == "number") {
              r.push(e12.number(e12.complex(0, l))), o++;
              continue;
            } else if (l.im === 0) {
              if (Number.isInteger(l.re)) {
                r.push(e12.number(e12.complex(0, l.re))), o++;
                continue;
              } else if (!l.isExact) {
                r.push(e12.number(e12.complex(0, l.re))), o++;
                continue;
              }
            }
          }
        }
      }
      r.push(s);
    }
    return i < 0 ? r.length === 0 ? e12.number(-1) : r.length === 1 ? r[0].neg() : Ko(e12, r) : r.length === 0 ? e12.number(1) : r.length === 1 ? r[0] : e12._fn("Multiply", [...r].sort(ce));
  }
  function Fd(e12) {
    let n = 1;
    for (; e12.operator === "Negate"; ) n = -n, e12 = e12.op1;
    return e12.isNumberLiteral && e12.isNegative && (n = -n, e12 = e12.neg()), [e12, n];
  }
  function ue(...e12) {
    if (e12.length > 0, e12.length === 1) return e12[0];
    let n = e12[0].engine, i = Mt(n, e12);
    if (i) {
      if (i.operator !== "Multiply") return i;
      e12 = i.ops;
    }
    return new Te(n, e12).asRationalExpression();
  }
  function _u(...e12) {
    e12.length > 0;
    let n = e12[0].engine;
    e12 = e12.map((t) => t.N());
    let i = Mt(n, e12);
    if (i) {
      if (i.operator !== "Multiply") return i;
      e12 = i.ops;
    }
    return new Te(n, e12).asExpression({ numericApproximation: true });
  }
  function We(e12, n) {
    let i = e12.engine;
    if (!e12.isValid || !n.isValid) return i._fn("Divide", [e12, n]);
    if (e12.isNaN || n.isNaN) return i.NaN;
    if (n.is(0)) return e12.is(0) ? i.NaN : i.ComplexInfinity;
    if (e12.is(0)) return i.Zero;
    if (n.is(0) === false && (e12.symbol !== null && e12.symbol === n.symbol && e12.isConstant || e12.isSame(n))) return i.One;
    if (e12.operator === "Negate" && n.operator === "Negate" && (e12 = e12.op1, n = n.op1), e12.operator === "Divide" && n.operator === "Divide") return We(ae(i, [e12.op1, n.op2]), ae(i, [e12.op2, n.op1]));
    if (e12.operator === "Divide") return We(e12.op1, ae(i, [e12.op2, n]));
    if (n.operator === "Divide") return We(ae(i, [e12, n.op2]), n.op1);
    if (n.is(1)) return e12;
    if (n.is(-1)) return e12.neg();
    if (e12.is(1)) return n.inv();
    if (n.isInfinity) return e12.isInfinity ? i.NaN : i.Zero;
    if (e12.operator === "Sqrt" && n.operator === "Sqrt") {
      let f = z(e12.op1), c = z(n.op1);
      if (f !== null && c !== null) return i.number(i._numericValue({ radical: f * c, rational: [1, c] }));
    } else if (e12.operator === "Sqrt") {
      let f = z(e12.op1), c = z(n);
      if (f !== null && c !== null) return i.number(i._numericValue({ radical: f, rational: [1, c] }));
    } else if (n.operator === "Sqrt") {
      let f = z(e12), c = z(n.op1);
      if (f !== null && c !== null) return i.number(i._numericValue({ radical: c, rational: [f, c] }));
    }
    let t = e12.numericValue, r = n.numericValue;
    if (t !== null && r !== null) {
      if (typeof t != "number" && t.im !== 0 || typeof r != "number" && r.im !== 0) return i._fn("Divide", [e12, n]);
      if (typeof t == "number" && Number.isInteger(t) && typeof r == "number" && Number.isInteger(r)) return i.number([t, r]);
      if (typeof t == "number" && Number.isInteger(t)) {
        if (t === 0) return i.Zero;
        if (typeof r != "number" && g(r.type, "integer")) {
          let f = r.bignumRe;
          if (f !== void 0) {
            if (f.isInteger()) return i.number([K(t), K(f)]);
          } else {
            let c = r.re;
            if (Number.isInteger(c)) return i.number([t, c]);
          }
        }
      }
      return i._fn("Divide", [e12, n]);
    }
    let [o, s] = e12.toNumericValue();
    if (o.isZero) return i.Zero;
    let [a, u] = n.toNumericValue();
    if (a.isZero) return i.NaN;
    let l = o.div(a);
    return l.isOne ? u.is(1) ? s : i._fn("Divide", [s, u]) : l.isNegativeOne ? u.is(1) ? s.neg() : i._fn("Divide", [s.neg(), u]) : l.isExact ? s.is(1) && u.is(1) ? i.number(l) : u.is(1) ? ae(i, [i.number(l), s]) : i._fn("Divide", [ae(i, [i.number(l.numerator), s]), ae(i, [i.number(l.denominator), u])]) : i._fn("Divide", [e12, n]);
  }
  function qi(e12, n) {
    let i = e12.engine;
    if (e12 = e12.canonical, typeof n != "number" && (n = n.canonical), e12.isNaN) return i.NaN;
    if (typeof n == "number") {
      if (isNaN(n)) return i.NaN;
      if (e12.is(0)) return n === 0 || !isFinite(n) ? i.NaN : e12;
      if (n === 1) return e12;
      if (n === -1) return e12.neg();
      if (n === 0) return i.NaN;
      if (e12.isNumberLiteral) {
        let r = e12.numericValue;
        if (typeof r == "number") {
          if (Number.isInteger(r) && Number.isInteger(n)) return i.number(i._numericValue({ rational: [r, n] }));
        } else if (r.isExact && Number.isInteger(n)) return i.number(r.asExact.div(n));
      }
    } else {
      if (n.isNaN) return i.NaN;
      if (e12.is(0)) return n.is(0) || n.isFinite === false ? i.NaN : i.Zero;
      if (n.is(1)) return e12;
      if (n.is(-1)) return e12.neg();
      if (n.is(0)) return i.NaN;
      if (e12.isNumberLiteral && n.isNumberLiteral) {
        let r = e12.numericValue, o = n.numericValue;
        if (typeof r == "number" && typeof o == "number" && Number.isInteger(r) && Number.isInteger(o)) return i.number(i._numericValue({ rational: [r, o] }));
        if (typeof r == "number" && Number.isInteger(r) && typeof o != "number") {
          if (o.isExact) return i.number(i._numericValue(r).div(o.asExact));
        } else if (typeof o == "number" && Number.isInteger(o) && typeof r != "number") {
          if (r.isExact) return i.number(r.asExact.div(o));
        } else if (typeof r != "number" && typeof o != "number" && r.isExact && o.isExact) return i.number(r.asExact.div(o.asExact));
      }
    }
    let t = new Te(i, [e12]);
    return t.div(typeof n == "number" ? i._numericValue(n) : n), t.asRationalExpression();
  }
  var Te = class e5 {
    constructor(n, i, t) {
      this.options = t;
      this.terms = [];
      this._isCanonical = true;
      if (t = t ? { ...t } : {}, "canonical" in t || (t.canonical = true), this._isCanonical = t.canonical, this.engine = n, this.coefficient = n._numericValue(1), i) for (let r of i) this.mul(r);
    }
    static from(n) {
      return new e5(n.engine, [n]);
    }
    mul(n, i) {
      if (n.isCanonical || n.isStructural, this.coefficient.isNaN) return;
      if (n.isNaN) {
        this.coefficient = this.engine._numericValue(NaN);
        return;
      }
      if (n.operator === "Multiply") {
        for (let o of n.ops) this.mul(o, i);
        return;
      }
      if (n.operator === "Negate") {
        this.mul(n.op1, i), this.coefficient = this.coefficient.neg();
        return;
      }
      if (this._isCanonical) {
        if (n.symbol === "Nothing") return;
        i ?? (i = [1, 1]);
        let o = n.numericValue;
        if (o !== null) {
          if (n.is(1)) return;
          if (n.is(0)) {
            this.coefficient = this.engine._numericValue(an(i) ? NaN : 0);
            return;
          }
          if (n.is(-1)) {
            Se(i) ? this.coefficient = this.coefficient.neg() : this.coefficient = this.coefficient.mul(this.engine._numericValue(-1).pow(this.engine._numericValue(i)));
            return;
          }
          if (n.isInfinity) {
            Se(i) ? this.coefficient = this.engine._numericValue(n.isNegative ? -1 / 0 : 1 / 0) : this.terms.push({ term: n, exponent: i });
            return;
          }
          Se(i) ? this.coefficient = this.coefficient.mul(o) : this.coefficient = this.coefficient.mul(this.engine._numericValue(o).pow(this.engine._numericValue(i)));
          return;
        }
        let s = Dr(n);
        if (s !== null) {
          this.coefficient = this.coefficient.mul(this.engine._numericValue({ radical: s[0] * s[1], rational: [1, Number(s[1])] }).pow(this.engine._numericValue(i)));
          return;
        }
        if (!n.symbol) {
          let a;
          [a, n] = n.toNumericValue(), i && !Se(i) && (a = a.pow(this.engine._numericValue(i))), this.coefficient = this.coefficient.mul(a);
        }
      }
      if (n.is(1) && (!i || Se(i)) || n.is(0) === false && i && an(i)) return;
      if (n.is(0)) {
        i && an(i) ? this.coefficient = this.engine._numericValue(NaN) : this.coefficient = this.engine._numericValue(0);
        return;
      }
      let t = i ?? [1, 1];
      if (n.operator === "Power") {
        let o = je(n.op2);
        if (o) {
          this.mul(n.op1, gn(t, o));
          return;
        }
      }
      if (n.operator === "Sqrt") {
        this.mul(n.op1, gn(t, [1, 2]));
        return;
      }
      if (n.operator === "Root") {
        let o = je(n.op2);
        if (o) {
          this.mul(n.op1, gn(t, fu(o)));
          return;
        }
      }
      if (n.operator === "Divide") {
        this.mul(n.op1, t), this.mul(n.op2, si(t));
        return;
      }
      let r = false;
      for (let o of this.terms) if (o.term.isSame(n)) {
        o.exponent = oi(o.exponent, t), r = true;
        break;
      }
      r || this.terms.push({ term: n, exponent: t });
    }
    div(n) {
      n instanceof V ? this.coefficient = this.coefficient.div(n) : this.mul(n, [-1, 1]);
    }
    groupedByDegrees(n) {
      n ?? (n = {}), "mode" in n || (n.mode = "expression");
      let i = n.mode;
      if (i === "numeric" && (this.coefficient.isNegativeInfinity || this.coefficient.isPositiveInfinity)) return [];
      if (this.coefficient.isZero) return [];
      let t = this.engine;
      if (this.terms.length === 0) if (i === "numeric") {
        let o = this.coefficient.N();
        return [{ exponent: [1, 1], terms: [t.number(o)] }];
      } else return [{ exponent: [1, 1], terms: [t.number(this.coefficient)] }];
      let r = [];
      if (!this.coefficient.isOne) if (i === "rational" && this.coefficient.type === "finite_rational") {
        let o = this.coefficient.numerator;
        o.isOne || r.push({ exponent: [1, 1], terms: [t.number(o)] });
        let s = this.coefficient.denominator;
        s.isOne || r.push({ exponent: [-1, 1], terms: [t.number(s)] });
      } else if (i === "numeric") {
        let o = this.coefficient.N();
        r.push({ exponent: [1, 1], terms: [t.number(o)] });
      } else r.push({ exponent: [1, 1], terms: [t.number(this.coefficient)] });
      for (let o of this.terms) {
        let s = Mi(o.exponent);
        if (s[0] === 0) continue;
        let a = false;
        for (let u of r) if (s[0] === u.exponent[0] && s[1] === u.exponent[1]) {
          u.terms.push(o.term), a = true;
          break;
        }
        a || r.push({ exponent: s, terms: [o.term] });
      }
      return r;
    }
    asExpression(n = { numericApproximation: false }) {
      let i = this.engine, t = this.coefficient;
      if (t.isNaN) return i.NaN;
      if (t.isPositiveInfinity) return i.PositiveInfinity;
      if (t.isNegativeInfinity) return i.NegativeInfinity;
      if (t.isZero) return i.Zero;
      let r = t.isNegativeOne;
      r && (this.coefficient = i._numericValue(1));
      let o = this.groupedByDegrees({ mode: n.numericApproximation ? "numeric" : "expression" });
      if (o === null) return i.NaN;
      if (r) {
        let s = wr(i, o).neg();
        return this.coefficient = i._numericValue(-1), s;
      }
      return wr(i, o);
    }
    asNumeratorDenominator() {
      let n = this.engine, i = this.coefficient;
      if (i.isZero) return [n.Zero, n.One];
      if (i.isPositiveInfinity || i.isNegativeInfinity) return this.terms.length === 0 ? [i.isPositiveInfinity ? n.PositiveInfinity : n.NegativeInfinity, n.One] : [n.NaN, n.NaN];
      let t = i.isNegativeOne;
      t && (this.coefficient = n._numericValue(1));
      let r = this.groupedByDegrees({ mode: "rational" });
      if (this.coefficient = i, r === null) return [n.NaN, n.NaN];
      let o = r.filter((u) => u.exponent[0] >= 0), s = r.filter((u) => u.exponent[0] < 0).map((u) => ({ exponent: si(u.exponent), terms: u.terms })), a = wr(n, o);
      return [t ? a.neg() : a, wr(n, s)];
    }
    asRationalExpression() {
      let [n, i] = this.asNumeratorDenominator();
      return We(n, i);
    }
  };
  function Iu(e12, n) {
    let i = e12.engine, t = e12.coefficient.gcd(n.coefficient);
    if (t.isOne) return [i._numericValue(1), i.One];
    let r = [];
    for (let o of e12.terms) {
      let s = n.terms.find((u) => o.term.isSame(u.term));
      if (!s) continue;
      let a = Sr(o.exponent, s.exponent);
      if (Se(a)) r.push(o.term);
      else {
        let [u, l] = cu(a);
        l === 1 ? r.push(o.term.pow(u)) : u === 1 ? r.push(o.term.root(l)) : r.push(o.term.pow(u).root(l));
      }
    }
    return [t, r.length === 0 ? i.One : ue(...r)];
  }
  function wr(e12, n) {
    let i = n.map(({ terms: t, exponent: r }) => {
      let o = W(t, "Multiply"), s = o.length <= 1 ? o[0] : e12._fn("Multiply", [...o].sort(ce));
      return Se(r) ? s : s.pow(e12.number(r));
    });
    return i = W(i, "Multiply"), i.length === 0 ? e12.One : i.length === 1 ? i[0] : e12._fn("Multiply", i.sort(ce));
  }
  function Ct(e12) {
    let n = e12.engine, i = e12.operator;
    if (ke(i)) return n.function(i, e12.ops.map(Ct));
    if (i === "Divide") return e12.ops[0].div(e12.ops[1]);
    if (i === "Negate") return Ct(e12.ops[0]).neg();
    if (i === "Add") {
      let [t, r] = e12.ops.reduce((o, s) => (s.operator === "Divide" ? (o[0].push(s.ops[0]), o[1].push(s.ops[1])) : o[0].push(s), o), [[], []]);
      return Z(...t).div(Z(...r));
    }
    return e12;
  }
  function Gn(e12) {
    let n = e12.operator;
    if (ke(n)) {
      let i = Te.from(e12.op1), t = Te.from(e12.op2), [r, o] = Iu(i, t), s = r.sgn() === -1;
      return r.isOne || (i.div(r), t.div(r)), o.is(1) || (o.isPositive ? (i.div(o), t.div(o)) : o.isNegative && (i.div(o.neg()), t.div(o.neg()), s = !s)), s && ([i, t] = [t, i]), e12.engine.function(n, [i.asExpression(), t.asExpression()]);
    }
    if (n === "Negate") return Gn(e12.ops[0]).neg();
    if (n === "Add") {
      let i = e12.engine, t, r = [];
      for (let s of e12.ops) {
        let [a, u] = s.toNumericValue();
        t = t ? t.gcd(a) : a, a.isZero || r.push({ coeff: a, term: u });
      }
      if (!t || t.isOne) return e12;
      let o = r.map(({ coeff: s, term: a }) => ue(a, i.box(s.div(t))));
      return ue(i.number(t), Z(...o));
    }
    return Te.from(Ct(e12)).asExpression();
  }
  function zn(e12) {
    let n = e12.engine;
    if (e12.symbol === "Pi") return [n._numericValue(1), n._numericValue(0)];
    if (e12.operator === "Negate") {
      let [i, t] = zn(e12.ops[0]);
      return [i.neg(), t.neg()];
    }
    if (e12.operator === "Add" && e12.nops === 2) {
      let [i, t] = zn(e12.op1), [r, o] = zn(e12.op2);
      return [i.add(r), t.add(o)];
    }
    if (e12.operator === "Multiply" && e12.nops === 2) {
      if (e12.op1.isNumberLiteral) {
        let [i, t] = zn(e12.op2), r = e12.op1.numericValue;
        return [i.mul(r), t.mul(r)];
      }
      if (e12.op2.isNumberLiteral) {
        let [i, t] = zn(e12.op1), r = e12.op2.numericValue;
        return [i.mul(r), t.mul(r)];
      }
    }
    if (e12.operator === "Divide" && e12.op2.isNumberLiteral) {
      let [i, t] = zn(e12.op1), r = e12.op2.numericValue;
      return [i.div(r), t.div(r)];
    }
    return [n._numericValue(0), n._numericValue(e12.N().numericValue ?? 0)];
  }
  var qd = { Sin: [[1, "Sin"], [1, "Cos"], [-1, "Sin"], [-1, "Cos"]], Cos: [[1, "Cos"], [-1, "Sin"], [-1, "Cos"], [1, "Sin"]], Sec: [[1, "Sec"], [-1, "Csc"], [-1, "Sec"], [1, "Csc"]], Csc: [[1, "Csc"], [1, "Sec"], [-1, "Csc"], [-1, "Sec"]], Tan: [[1, "Tan"], [-1, "Cot"], [1, "Tan"], [-1, "Cot"]], Cot: [[1, "Cot"], [-1, "Tan"], [1, "Cot"], [-1, "Tan"]] };
  var Un = ["Sqrt", 2];
  var $i = ["Sqrt", 3];
  var Vi = ["Sqrt", 5];
  var Rr = ["Sqrt", 6];
  var $d = [[[0, 1], { Sin: 0, Cos: 1, Tan: 0, Cot: "ComplexInfinity", Sec: 1, Csc: "ComplexInfinity" }], [[1, 12], { Sin: ["Divide", ["Subtract", Rr, Un], 4], Cos: ["Divide", ["Add", Rr, Un], 4], Tan: ["Subtract", 2, $i], Cot: ["Add", 2, $i], Sec: ["Subtract", Rr, Un], Csc: ["Add", Rr, Un] }], [[1, 10], { Sin: ["Divide", ["Subtract", Vi, 1], 4], Cos: ["Divide", ["Sqrt", ["Add", 10, ["Multiply", 2, Vi]]], 4], Tan: ["Divide", ["Sqrt", ["Subtract", 25, ["Multiply", 10, Vi]]], 5], Cot: ["Sqrt", ["Add", 5, ["Multiply", 2, Vi]]], Sec: ["Divide", ["Sqrt", ["Subtract", 50, ["Multiply", 10, Vi]]], 5], Csc: ["Add", 1, Vi] }], [[1, 8], { Sin: "$\\frac{\\sqrt{2-\\sqrt2}}{2}$", Cos: "$\\frac{\\sqrt {2+{\\sqrt {2}}}}{2}$", Tan: "$\\sqrt{2} - 1$", Cot: "$\\sqrt{2} + 1$", Sec: "$\\sqrt{ 4 - 2\\sqrt{2}}$", Csc: "$\\sqrt{ 4 + 2\\sqrt{2}}$" }], [[1, 6], { Sin: "$\\frac{1}{2}$", Cos: "$\\frac{\\sqrt{3}}{2}$", Tan: "$\\frac{\\sqrt{3}}{3}$", Cot: "$\\sqrt{3}$", Sec: "$\\frac{2\\sqrt{3}}{3}$", Csc: 2 }], [[1, 5], { Sin: "$\\frac{\\sqrt{10- 2\\sqrt{5}}} {4}$", Cos: "$\\frac{1+ \\sqrt{5}} {4}$", Tan: "$\\sqrt{5-2\\sqrt5}$", Cot: "$\\frac{\\sqrt{25+10\\sqrt5}} {5}$", Sec: "$\\sqrt{5} - 1$", Csc: "$\\frac{\\sqrt{50+10\\sqrt{5}}} {5}$" }], [[1, 4], { Sin: ["Divide", Un, 2], Cos: ["Divide", Un, 2], Tan: 1, Cot: 1, Sec: Un, Csc: Un }], [[3, 10], { Sin: "$\\frac{1+ \\sqrt5} {4}$", Cos: "$\\frac{\\sqrt{10- 2\\sqrt5}} {4}$", Tan: "$\\frac{\\sqrt{25+10\\sqrt5}} {5}$", Cot: "$\\sqrt{5-2\\sqrt5}$", Sec: "$\\frac{\\sqrt{50+10\\sqrt5}} {5}$", Csc: "$\\sqrt5-1$" }], [[1, 3], { Sin: ["Divide", $i, 2], Cos: "Half", Tan: $i, Cot: ["Divide", $i, 3], Sec: 2, Csc: ["Divide", ["Multiply", 2, $i], 3] }], [[3, 8], { Sin: "$\\frac{ \\sqrt{2 + \\sqrt{2}} } {2}$", Cos: "$\\frac{ \\sqrt{2 - \\sqrt{2}} } {2}$", Tan: "$\\sqrt{2} + 1$", Cot: "$\\sqrt{2} - 1$", Sec: "$\\sqrt{ 4 + 2 \\sqrt{2} }$", Csc: "$\\sqrt{ 4 - 2 \\sqrt{2} }$" }], [[2, 5], { Sin: "$\\frac{\\sqrt{10+ 2\\sqrt{5}}} {4}$", Cos: "$\\frac{\\sqrt{5}-1} {4}$", Tan: "$\\sqrt{5+2\\sqrt{5}}$", Cot: "$\\frac{\\sqrt{25-10\\sqrt{5}}} {5}$", Sec: "$1 + \\sqrt{5}$", Csc: "$\\frac{\\sqrt{50-10\\sqrt{5}}} {5}$" }], [[5, 12], { Sin: "$\\frac{\\sqrt{6} + \\sqrt{2}} {4}$", Cos: "$\\frac{ \\sqrt{6} - \\sqrt{2}} {4}$", Tan: "$2+\\sqrt{3}$", Cot: "$2-\\sqrt{3}$", Sec: "$\\sqrt{6}+\\sqrt{2}$", Csc: "$\\sqrt{6} - \\sqrt{2}$" }], [[1, 2], { Sin: 1, Cos: 0, Tan: "ComplexInfinity", Cot: 0, Sec: "ComplexInfinity", Csc: 1 }]];
  function Je(e12, n, i, t) {
    let r = ts(e12)?.N();
    if (r !== void 0) return Y(r, n, i, t);
  }
  function Vd(e12) {
    if (!e12) return e12;
    let n = e12.engine, i = n.angularUnit;
    return i === "rad" || (i === "deg" && (e12 = e12.mul(n.Pi).div(180)), i === "grad" && (e12 = e12.mul(n.Pi).div(200)), i === "turn" && (e12 = e12.mul(n.Pi).mul(2))), e12;
  }
  function Ye(e12) {
    if (!e12) return e12;
    let n = e12.engine, i = n.angularUnit;
    if (i === "rad") return e12;
    let t = e12.N().re;
    return Number.isNaN(t) ? e12 : i === "deg" ? n.number(t * (180 / Math.PI)) : i === "grad" ? n.number(t * (200 / Math.PI)) : i === "turn" ? n.number(t / (2 * Math.PI)) : e12;
  }
  function Pt(e12, n) {
    if (!n) return;
    let i = n.engine;
    switch (e12) {
      case "Arccos":
        return Ye(Y(n, Math.acos, (t) => t.acos(), (t) => t.acos()));
      case "Arccot":
        return Ye(Y(n, (t) => Math.atan2(1, t), (t) => ge.atan2(i._BIGNUM_ONE, t), (t) => t.inverse().atan()));
      case "Arccsc":
        return Ye(Y(n, (t) => Math.asin(1 / t), (t) => i._BIGNUM_ONE.div(t).asin(), (t) => t.inverse().asin()));
      case "Arcosh":
        return Ye(Y(n, Math.acosh, (t) => t.acosh(), (t) => t.acosh()));
      case "Arcoth":
        return Ye(Y(n, (t) => Math.log((1 + t) / (t - 1)) / 2, (t) => i._BIGNUM_ONE.add(t).div(t.sub(i._BIGNUM_ONE)).log().div(2), (t) => i.complex(1).add(t).div(t.sub(1)).log().div(2)));
      case "Arcsch":
        return Ye(Y(n, (t) => Math.log(1 / t + Math.sqrt(1 / (t * t) + 1)), (t) => i._BIGNUM_ONE.div(t.mul(t)).add(i._BIGNUM_ONE).sqrt().add(i._BIGNUM_ONE.div(t)).log(), (t) => t.mul(t).inverse().add(1).sqrt().add(t.inverse()).log()));
      case "Arcsec":
        return Ye(Y(n, (t) => Math.acos(1 / t), (t) => i._BIGNUM_ONE.div(t).acos(), (t) => t.inverse().acos()));
      case "Arcsin":
        return Ye(Y(n, Math.asin, (t) => t.asin(), (t) => t.asin()));
      case "Arsech":
        return Ye(Y(n, (t) => Math.log((1 + Math.sqrt(1 - t * t)) / t), (t) => i._BIGNUM_ONE.sub(t.mul(t).add(i._BIGNUM_ONE).div(t)).log(), (t) => i.complex(1).sub(t.mul(t)).add(1).div(t).log()));
      case "Arsinh":
        return Ye(Y(n, Math.asinh, (t) => t.asinh(), (t) => t.asinh()));
      case "Arctan":
        return Ye(Y(n, Math.atan, (t) => t.atan(), (t) => t.atan()));
      case "Artanh":
        return Ye(Y(n, Math.atanh, (t) => t.atanh(), (t) => t.atanh()));
      case "Cos":
        return Je(n, Math.cos, (t) => t.toSignificantDigits(i.precision + 4).cos().toSignificantDigits(i.precision), (t) => t.cos());
      case "Cosh":
        return Je(n, Math.cosh, (t) => t.cosh(), (t) => t.cosh());
      case "Cot":
        return Je(n, (t) => 1 / Math.tan(t), (t) => i._BIGNUM_ONE.div(t.tan()), (t) => t.tan().inverse());
      case "Coth":
        return Je(n, (t) => 1 / Math.tanh(t), (t) => i._BIGNUM_ONE.div(t.tanh()), (t) => t.tanh().inverse());
      case "Csc":
        return Je(n, (t) => 1 / Math.sin(t), (t) => i._BIGNUM_ONE.div(t.sin()), (t) => t.sin().inverse());
      case "Csch":
        return Je(n, (t) => 1 / Math.sinh(t), (t) => i._BIGNUM_ONE.div(t.sinh()), (t) => t.sinh().inverse());
      case "Sec":
        return Je(n, (t) => 1 / Math.cos(t), (t) => i._BIGNUM_ONE.div(t.cos()), (t) => t.cos().inverse());
      case "Sech":
        return Je(n, (t) => 1 / Math.cosh(t), (t) => i._BIGNUM_ONE.div(t.cosh()), (t) => t.cosh().inverse());
      case "Sin":
        return Je(n, Math.sin, (t) => t.toSignificantDigits(i.precision + 4).sin().toSignificantDigits(i.precision), (t) => t.sin());
      case "Sinh":
        return Je(n, Math.sinh, (t) => t.sinh(), (t) => t.sinh());
      case "Tan":
        return Je(n, (r) => {
          let o = Math.tan(r);
          return o > 1e6 || o < -1e6 ? i.ComplexInfinity : o;
        }, (r) => {
          let o = r.tan();
          return o.greaterThan(1e6) || o.lessThan(-1e6) ? i.ComplexInfinity : o;
        }, (r) => r.tan());
      case "Tanh":
        return Je(n, Math.tanh, (t) => t.tanh(), (t) => t.tanh());
    }
  }
  function zd(e12) {
    return !!(e12.startsWith("Ar") && es(e12));
  }
  function es(e12) {
    return { Sin: "Arcsin", Cos: "Arccos", Tan: "Arctan", Sec: "Arcsec", Csc: " Arccsc", Sinh: "Arsinh", Cosh: "Arcosh", Tanh: "Artanh", Sech: "Arcsech", Csch: "Arcsch", Arcosh: "Cosh", Arccos: "Cos", Arccsc: "Csc", Arcsch: "Csch", Arcsec: "Sec", Arcsin: "Sin", Arsinh: "Sinh", Arctan: "Tan", Artanh: "Tanh" }[e12];
  }
  function Ot(e12, n) {
    if (n.length !== 1 || !n[0].isValid) return;
    let i = n[0], t = i.symbol;
    if (typeof t != "string") return;
    if (t === "InverseFunction") return i.op1;
    let r = es(t);
    return r ? e12.symbol(r) : void 0;
  }
  function Bu(e12) {
    return e12 !== "Cos" && e12 !== "Sec" ? -1 : 1;
  }
  function Gd(e12, n, i, t) {
    if (!i) return;
    let r = i.N().re;
    if (Number.isNaN(r)) return;
    let o = es(n), s = e12.cache("constructible-inverse-trigonometric-values-" + n, () => {
      let u = [];
      for (let [[l, f], c] of t) {
        let d = c[o];
        if (d === void 0) continue;
        let m = d.N().re;
        Number.isNaN(m) || u.push([[d, m], [l, f]]);
      }
      return u;
    }, (u) => {
      for (let [[l, f], [c, d]] of u) l.reset();
      return u;
    }), a = 0;
    r < 0 && (a = Bu(o) == -1 ? -1 : 1, r = -r, i = i.neg());
    for (let [[u, l], [f, c]] of s) if (e12.chop(r - l) === 0) {
      let d = e12.Pi.mul(f).div(c);
      return a == -1 ? d = d.neg() : a == 1 && (d = e12.Pi.sub(d)), d.evaluate();
    }
  }
  function ns(e12, n) {
    let [i, t] = Ud(n);
    if (i !== void 0) return t !== void 0 && ((e12 === "Sin" || e12 === "Tan") && (t === 0 || t === 2) || (e12 === "Cos" || e12 === "Cot") && (t === 1 || t === 3)) ? "zero" : { Sin: ["positive", "positive", "negative", "negative"], Cos: ["positive", "negative", "negative", "positive"], Sec: ["positive", "negative", "negative", "positive"], Csc: ["positive", "positive", "negative", "negative"], Tan: ["positive", "negative", "positive", "negative"], Cot: ["positive", "negative", "positive", "negative"] }[e12]?.[i];
  }
  function is(e12) {
    return ["Sin", "Cos", "Tan", "Csc", "Sec", "Cot"].includes(typeof e12 == "string" ? e12 : e12.operator);
  }
  function Lt(e12, n) {
    if (!n || !is(e12)) return;
    let i = n.engine;
    if (n = n.N(), n.im !== 0) return;
    let t = n.re;
    if (Number.isNaN(t)) return;
    let r = i.cache("constructible-trigonometric-values", () => $d.map(([l, f]) => [l, Object.fromEntries(Object.entries(f).map(([c, d]) => [c, (i.parse($n(d)) ?? i.box(d)).simplify()]))]), (l) => {
      for (let [f, c] of l) for (let d of Object.values(c)) d.reset();
      return l;
    });
    if (zd(e12)) return Gd(i, e12, n, r);
    let o = i.angularUnit;
    o !== "rad" && (o === "deg" && (t *= Math.PI / 180), o === "grad" && (t *= Math.PI / 200), o === "turn" && (t *= 2 * Math.PI));
    let s = Bu(e12) == -1 ? Math.sign(t) : 1;
    t = Math.abs(t % (2 * Math.PI));
    let a = Math.floor(t * 2 / Math.PI);
    t = t % (Math.PI / 2);
    let u;
    [u, e12] = qd[e12]?.[a] ?? [1, e12];
    for (let [[l, f], c] of r) {
      let d = c[e12];
      if (d && Math.abs(t - Math.PI * l / f) <= 1e-12) return d.symbol === "ComplexInfinity" ? d : s * u < 0 ? d.neg() : d;
    }
  }
  function Ud(e12) {
    if (!e12.isValid || !e12.isNumberLiteral) return [void 0, void 0];
    if (e12.im !== 0) return [void 0, void 0];
    let n = e12.re;
    if (isNaN(n)) return [void 0, void 0];
    let i = (n % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
    return Math.abs(i) < 1e-12 ? [1, 0] : Math.abs(i - Math.PI / 2) < 1e-12 ? [2, 1] : Math.abs(i - Math.PI) < 1e-12 ? [3, 2] : Math.abs(i - 3 * Math.PI / 2) < 1e-12 ? [4, 3] : [Math.floor(i / (Math.PI / 2)) + 1, void 0];
  }
  function ts(e12) {
    if (!e12) return e12;
    let n = Vd(e12);
    if (!n) return;
    if (n.N().im !== 0) return n;
    let i = n.engine, [t, r] = zn(n);
    if (t.isZero) return i.number(r);
    let o = i._numericValue(t.bignumRe ? t.bignumRe.mod(2) : t.re % 2);
    return i.number(r.add(i.Pi.mul(o).N().numericValue));
  }
  function ku(e12) {
    return e12.operator === "Sqrt" || e12.operator === "Power" && e12.op2.im === 0 && e12.op2.re === 0.5 || e12.operator === "Root" && e12.op2.im === 0 && e12.op2.re === 2;
  }
  function Dr(e12) {
    if (ku(e12)) return je(e12.op1) ?? null;
    if (e12.operator === "Divide" && e12.op1.is(1) && ku(e12.op2)) {
      let n = e12.op2.re;
      return Number.isInteger(n) ? [1, n] : null;
    }
    return null;
  }
  function zi(e12, n) {
    let i = e12.engine;
    if (e12 = e12.canonical, n = n.canonical, e12.is(0)) {
      if (n.is(0)) return i.NaN;
      if (n.isPositive) return i.Zero;
      if (n.isNegative) return i.ComplexInfinity;
    }
    if (e12.is(1) || n.is(0)) return i.One;
    if (n.is(1)) return e12;
    if (n.is(0.5)) return ci(e12, 2);
    let t = je(n);
    return t !== void 0 && t[0] === 1 ? ci(e12, i.number(t[1])) : i._fn("Power", [e12, n]);
  }
  function ci(e12, n) {
    e12 = e12.canonical;
    let i = e12.engine, t;
    if (typeof n == "number" ? t = n : (n = n.canonical, n.isNumberLiteral && n.im === 0 && (t = n.re)), t === 1) return e12;
    if (t === 2) {
      if (e12.isNumberLiteral && g(e12.type, "rational") && e12.re < O) {
        let r = e12.sqrt();
        if (typeof r.numericValue == "number" || r.numericValue.isExact) return r;
      }
      return i._fn("Sqrt", [e12]);
    }
    return i._fn("Root", [e12, typeof n == "number" ? i.number(n) : n]);
  }
  function pe(e12, n, { numericApproximation: i }) {
    if (!e12.isCanonical) return e12.canonical.pow(n);
    if (i && e12.isNumberLiteral) {
      if (typeof n == "number") return Y(e12, (o) => Math.pow(o, n), (o) => o.pow(n), (o) => o.pow(n)) ?? pe(e12, n, { numericApproximation: false });
      if (n.isNumberLiteral) return hn(e12, n, (o, s) => Math.pow(o, s), (o, s) => o.pow(s), (o, s) => o.pow(s)) ?? pe(e12, n, { numericApproximation: false });
    }
    let t = e12.engine;
    typeof n != "number" && (n = n.canonical);
    let r = typeof n == "number" ? n : n.im === 0 ? n.re : void 0;
    if (r === 0) return t.One;
    if (r === 1) return e12;
    if (r === -1) return e12.isInfinity && e12.isNegative ? t.Zero : e12.is(-1) ? t.NegativeOne : e12.is(0) ? t.ComplexInfinity : e12.is(1) ? t.One : e12.isInfinity && e12.isPositive ? t.Zero : e12.inv();
    if (r === Number.POSITIVE_INFINITY) {
      if (e12.is(0)) return t.Zero;
      if (e12.is(1) || e12.is(-1)) return t.NaN;
      if (e12.isInfinity) {
        if (e12.isPositive) return t.PositiveInfinity;
        if (e12.isNegative) return t.NaN;
      }
    }
    if (r === Number.NEGATIVE_INFINITY) {
      if (e12.is(-1)) return t.NaN;
      if (e12.isInfinity) {
        if (e12.isPositive) return t.Zero;
        if (e12.isNegative) return t.NegativeInfinity;
      }
    }
    if (typeof n != "number") {
      if (n.isInfinity && !n.isPositive && !n.isNegative) return t.NaN;
      if (e12.isInfinity) {
        if (n.type === "imaginary") return t.NaN;
        if (n.type === "complex" && !isNaN(n.re)) {
          if (n.re > 0) return t.ComplexInfinity;
          if (n.re < 0) return t.Zero;
        }
      }
    }
    if (r === Number.POSITIVE_INFINITY) {
      if (e12.isGreater(1)) return t.PositiveInfinity;
      if (e12.isPositive && e12.isLess(1)) return t.Zero;
    }
    if (r === Number.NEGATIVE_INFINITY) {
      if (e12.isGreater(1)) return t.Zero;
      if (e12.isPositive && e12.isLess(1)) return t.PositiveInfinity;
    }
    if (typeof n != "number" && n.operator === "Negate") return pe(e12, n.op1, { numericApproximation: i }).inv();
    if (e12.symbol === "ComplexInfinity") return t.NaN;
    if (e12.symbol === "ExponentialE") {
      let o = ki(n);
      if (o !== void 0) {
        if (o = ts(o), o !== void 0) return t.function("Cos", [o]).add(t.function("Sin", [o]).mul(t.I)).simplify();
      } else if (i) {
        if (typeof n == "number") return t.number(t._numericValue(t.E.N().numericValue).pow(n));
        if (n.isNumberLiteral) return t.number(t._numericValue(t.E.N().numericValue).pow(n.numericValue));
      }
    }
    if (e12.operator === "Power") {
      let [o, s] = e12.ops;
      return pe(o, s.mul(n), { numericApproximation: i });
    }
    if (e12.operator === "Divide") {
      let [o, s] = e12.ops;
      return pe(o, n, { numericApproximation: i }).div(pe(s, n, { numericApproximation: i }));
    }
    if (e12.operator === "Negate" && r !== void 0) return r % 2 === 0 ? pe(e12.op1, n, { numericApproximation: i }) : pe(e12.op1, n, { numericApproximation: i }).neg();
    if (e12.operator === "Sqrt") return r === 2 ? e12.op1 : r !== void 0 && r % 2 === 0 ? e12.op1.pow(r / 2) : pe(e12.op1, n, { numericApproximation: i }).sqrt();
    if (e12.operator === "Exp") return pe(t.E, e12.op1.mul(n), { numericApproximation: i });
    if (e12.operator === "Multiply") {
      let o = e12.ops.map((s) => pe(s, n, { numericApproximation: i }));
      return t._fn("Multiply", o);
    }
    if (typeof n != "number" && n.isNumberLiteral) {
      let o = je(n);
      if (o !== void 0 && o[0] === 1) return Ar(e12, t.number(o[1]), { numericApproximation: i });
    }
    if (e12.operator === "Root") {
      let [o, s] = e12.ops;
      return pe(o, t.box(n).div(s), { numericApproximation: i });
    }
    if (e12.isNumberLiteral && Number.isInteger(r)) {
      let o = e12.numericValue;
      if (typeof o == "number") {
        if (Number.isInteger(o)) return Y(e12, (s) => Math.pow(s, r), (s) => s.pow(r), (s) => s.pow(r)) ?? t._fn("Power", [e12, t.box(n)]);
      } else if (o.isExact) {
        let s = o.asExact.pow(r);
        if (s.isExact) return t.number(s);
      }
    }
    return t._fn("Power", [e12, t.box(n)]);
  }
  function Ar(e12, n, { numericApproximation: i }) {
    if (i && e12.isNumberLiteral && n.isNumberLiteral) return hn(e12, n, (t, r) => Math.pow(t, 1 / r), (t, r) => t.pow(r.pow(-1)), (t, r) => t.pow(typeof r == "number" ? 1 / r : r.inverse())) ?? Ar(e12, n, { numericApproximation: false });
    if (e12.isNumberLiteral && n.isNumberLiteral && n.isInteger) {
      let t = typeof n == "number" ? n : n.im === 0 ? n.re : void 0;
      if (t !== void 0) if (typeof e12.numericValue == "number") {
        let r = e12.engine._numericValue(e12.numericValue)?.root(t);
        if (r?.isExact) return e12.engine.number(r);
      } else {
        let r = e12.numericValue.asExact?.root(t);
        if (r?.isExact) return e12.engine.number(r);
      }
    }
    return e12.engine._fn("Root", [e12, n]);
  }
  var jn = 1e5;
  var jd = { Sin: true, Cos: true, Tan: true, Cot: true, Sec: true, Csc: true, Sinh: true, Cosh: true, Tanh: true, Coth: true, Sech: true, Csch: true, Arcsin: true, Arccos: true, Arctan: true, Arccot: true, Arcsec: true, Arccsc: true, Arsinh: true, Arcosh: true, Artanh: true, Arcoth: true, Arcsch: true, Arsech: true, Arcsech: true };
  function Zd(e12) {
    return !e12 || typeof e12 != "string" ? false : e12 in jd;
  }
  function Rt(e12, n) {
    let i = we(e12), t = we(n);
    if (i !== t) return t - i;
    let r = Ze(e12), o = Ze(n);
    if (r !== o) return o - r;
    let s = Jo(e12), a = Jo(n);
    if (s || a) {
      if (!s) return 1;
      if (!a || s < a) return -1;
      if (s > a) return 1;
    }
    return ce(e12, n);
  }
  var wu = ["integer", "rational", "radical", "real", "complex", "constant", "symbol", "multiply", "divide", "add", "trig", "fn", "power", "string", "other"];
  function Du(e12) {
    if (typeof e12.numericValue == "number") return Number.isInteger(e12.numericValue) ? "integer" : "real";
    if (e12.numericValue) {
      let n = e12.numericValue.type;
      return n === "integer" || n === "finite_integer" ? "integer" : n === "rational" || n === "finite_rational" ? "rational" : n === "real" || n === "finite_real" ? "real" : n === "complex" || n === "finite_complex" || n === "imaginary" || n === "finite_imaginary" || n === "finite_number" ? "complex" : n === "non_finite_number" ? "constant" : n === "number" ? "real" : "other";
    }
    return e12.symbol === "ImaginaryUnit" ? "complex" : Dr(e12) ? "radical" : e12.symbol && e12.isConstant ? "constant" : e12.symbol ? "symbol" : Zd(e12.operator) ? "trig" : e12.operator === "Add" ? "add" : e12.operator === "Power" || e12.operator === "Root" ? "power" : e12.operator === "Multiply" || e12.operator === "Negate" ? "multiply" : e12.operator === "Divide" ? "divide" : e12.operator === "Rational" ? "rational" : e12.operator === "Complex" ? e12.im !== 0 ? "complex" : "real" : e12.operator === "Sqrt" ? e12.op1.isNumberLiteral && (e12.op1.isInteger || e12.op1.isRational) ? "radical" : "power" : e12.ops ? "fn" : e12.string ? "string" : "other";
  }
  function ce(e12, n) {
    if (e12 === n) return 0;
    let i = Du(e12), t = Du(n);
    if (i !== t) return wu.indexOf(i) - wu.indexOf(t);
    if (i === "complex") {
      let [r, o] = Ru(e12), [s, a] = Ru(n);
      return o !== a ? o - a : r - s;
    }
    if (i === "integer" || i === "rational" || i === "real") {
      let r = e12.numericValue, o = n.numericValue;
      r === null && e12.operator === "Rational" && (r = e12.op1.re / e12.op2.re), o === null && n.operator === "Rational" && (o = n.op1.re / n.op2.re);
      let s = typeof r == "number" ? r : r.re, a = typeof o == "number" ? o : o.re;
      return s - a;
    }
    if (i === "radical") return ce(e12.op1, n.op1);
    if (i === "constant" || i === "symbol") return e12.symbol === n.symbol ? 0 : e12.symbol > n.symbol ? 1 : -1;
    if (i === "add") {
      let r = e12.ops, o = n.ops;
      if (r.length !== o.length) return o.length - r.length;
      for (let s = 0; s < r.length; s++) {
        let a = ce(r[s], o[s]);
        if (a !== 0) return a;
      }
      return 0;
    }
    if (i === "power") {
      let r = we(e12), o = we(n);
      if (r !== o) return o - r;
      let s = Ze(e12), a = Ze(n);
      return s !== a ? s - a : ce(e12.op1, n.op1);
    }
    if (i === "multiply") {
      let r = we(e12), o = we(n);
      if (r !== o) return o - r;
      let s = Ze(e12), a = Ze(n);
      if (s !== a) return s - a;
      let u = e12.ops, l = n.ops;
      if (u.length !== l.length) return l.length - u.length;
      for (let f = 0; f < u.length; f++) {
        let c = ce(u[f], l[f]);
        if (c !== 0) return c;
      }
      return 0;
    }
    if (i === "divide") {
      let r = we(e12.op1), o = we(n.op1);
      if (r !== o) return o - r;
      let s = Ze(e12.op1), a = Ze(n.op1);
      if (s !== a) return s - a;
      let u = ce(e12.op1, n.op1);
      return u !== 0 ? u : ce(e12.op2, n.op2);
    }
    if (i === "fn" || i === "trig") {
      if (e12.operator == n.operator && e12.nops === 1 && n.nops === 1) return ce(e12.op1, n.op1);
      let r = e12.functionDefinition?.complexity ?? jn, o = n.functionDefinition?.complexity ?? jn;
      return r === o ? e12.operator === n.operator ? rs(e12) - rs(n) : e12.operator < n.operator ? 1 : -1 : r - o;
    }
    return i === "string" ? e12.string === n.string ? 0 : n.string < e12.string ? -1 : 1 : (e12.complexity ?? jn) - (n.complexity ?? jn);
  }
  function os(e12, { recursive: n = false }) {
    if (e12.isCanonical || !e12.ops) return e12;
    let i = e12.ops;
    return n && (i = i.map((t) => os(t, { recursive: n }))), i = Ft(e12.operator, i), e12.engine._fn(e12.operator, i, { canonical: false });
  }
  function Ft(e12, n) {
    if (n.length === 0) return n;
    let i = n[0].engine;
    if (e12 === "Add") return [...n].sort(Rt);
    if (e12 === "Multiply") return [...n].sort(ce);
    let t = i.lookupFunction(e12);
    return !t || !t.commutative ? n : t.commutativeOrder ? [...n].sort(t.commutativeOrder) : [...n].sort(ce);
  }
  function rs(e12) {
    return e12.ops ? 1 + [...e12.ops].reduce((n, i) => n + rs(i), 0) : 1;
  }
  function Ru(e12) {
    if (e12.symbol === "ImaginaryUnit") return [0, 1];
    if (e12.numericValue) {
      if (typeof e12.numericValue == "number") return [e12.numericValue, 0];
      let n = e12.numericValue;
      return [n.re, n.im];
    }
    if (e12.operator === "Complex") {
      let n = e12.op1.numericValue;
      if (n === null) return [0, 0];
      let i = typeof n == "number" ? n : n.re, t = e12.op2.numericValue;
      if (t === null) return [0, 0];
      let r = typeof t == "number" ? t : t.re;
      return [i, r];
    }
    return [0, 0];
  }
  var Mr = 7;
  var Au = [0.9999999999998099, 676.5203681218851, -1259.1392167224028, 771.3234287776531, -176.6150291621406, 12.507343278686905, -0.13857109526572012, 9984369578019572e-21, 15056327351493116e-23];
  function qt(e12) {
    if (e12 < 0) return NaN;
    let n = Math.PI, i = e12 * e12 * e12;
    return e12 * Math.log(e12) - e12 - 0.5 * Math.log(e12) + 0.5 * Math.log(2 * n) + 1 / (12 * e12) - 1 / (360 * i) + 1 / (1260 * i * e12 * e12);
  }
  function Gi(e12) {
    if (e12 < 0.5) return Math.PI / (Math.sin(Math.PI * e12) * Gi(1 - e12));
    if (e12 > 100) return Math.exp(qt(e12));
    e12 -= 1;
    let n = Au[0];
    for (let t = 1; t < Mr + 2; t++) n += Au[t] / (e12 + t);
    let i = e12 + Mr + 0.5;
    return Math.sqrt(2 * Math.PI) * Math.pow(i, e12 + 0.5) * Math.exp(-i) * n;
  }
  function Mu(e12) {
    let n = Math.PI, i = n * n, t = i * n, r = e12 * e12, o = e12 * r, s = o * r, a = s * r;
    return Math.sqrt(n) / 2 * (e12 + n / 12 * o + 7 * i / 480 * s + 127 * t / 40320 * a + 4369 * i * i / 5806080 * a * r + 34807 * t * i / 182476800 * a * r * r);
  }
  function ss(e12) {
    let n = 0.254829592, i = -0.284496736, t = 1.421413741, r = -1.453152027, o = 1.061405429, s = 0.3275911, a = e12 < 0 ? -1 : 1;
    e12 = Math.abs(e12);
    let u = 1 / (1 + s * e12), l = ((((o * u + r) * u + t) * u + i) * u + n) * u;
    return a * (1 - l * Math.exp(-e12 * e12));
  }
  function as(e12, n) {
    if (n.isNegative()) return e12._BIGNUM_NAN;
    let i = e12.cache("gamma-p-ln", () => ["0.99999999999999709182", "57.156235665862923517", "-59.597960355475491248", "14.136097974741747174", "-0.49191381609762019978", "0.33994649984811888699e-4", "0.46523628927048575665e-4", "-0.98374475304879564677e-4", "0.15808870322491248884e-3", "-0.21026444172410488319e-3", "0.2174396181152126432e-3", "-0.16431810653676389022e-3", "0.84418223983852743293e-4", "-0.2619083840158140867e-4", "0.36899182659531622704e-5"].map((s) => e12.bignum(s))), t = i[0];
    for (let s = i.length - 1; s > 0; --s) t = t.add(i[s].div(n.add(s)));
    let r = e12.cache("gamma-g-ln", () => e12.bignum(607).div(128)), o = n.add(r).add(e12._BIGNUM_HALF);
    return e12._BIGNUM_NEGATIVE_ONE.acos().mul(e12._BIGNUM_TWO).log().mul(e12._BIGNUM_HALF).add(o.log().mul(n.add(e12._BIGNUM_HALF)).minus(o).add(t.log()).minus(n.log()));
  }
  function us(e12, n) {
    if (n.lessThan(e12._BIGNUM_HALF)) {
      let o = e12._BIGNUM_NEGATIVE_ONE.acos();
      return o.div(o.mul(n).sin().mul(us(e12, e12._BIGNUM_ONE.sub(n))));
    }
    if (n.greaterThan(100)) return as(e12, n).exp();
    n = n.sub(1);
    let i = e12.cache("lanczos-7-c", () => ["0.99999999999980993227684700473478", "676.520368121885098567009190444019", "-1259.13921672240287047156078755283", "771.3234287776530788486528258894", "-176.61502916214059906584551354", "12.507343278686904814458936853", "-0.13857109526572011689554707", "9.984369578019570859563e-6", "1.50563273514931155834e-7"].map((o) => e12.bignum(o))), t = i[0];
    for (let o = 1; o < Mr + 2; o++) t = t.add(i[o].div(n.add(o)));
    let r = n.add(Mr).add(e12._BIGNUM_HALF);
    return e12._BIGNUM_NEGATIVE_ONE.acos().times(e12._BIGNUM_TWO).sqrt().mul(t.mul(r.neg().exp()).mul(r.pow(n.add(e12._BIGNUM_HALF))));
  }
  function $t(e12, n) {
    if (e12 === n) return true;
    if (e12.ops) return e12.operator !== n.operator || e12.nops !== n.nops ? false : e12.ops.every((i, t) => $t(i, n.ops[t]));
    if (e12.isNumberLiteral) {
      if (!n.isNumberLiteral) return false;
      let i = e12.numericValue, t = n.numericValue;
      return i === t ? true : typeof i == "number" ? typeof t == "number" ? i === t : t.eq(i) : i.eq(t);
    }
    if (e12.string || n.string) return e12.string === n.string;
    if (e12.symbol || n.symbol) return e12.symbol === n.symbol;
    if (e12.rank !== 0) {
      if (e12.rank !== n.rank) return false;
      for (let i = 0; i < e12.rank; i++) if (e12.shape[i] !== n.shape[i]) return false;
      return e12.tensor.equals(n.tensor);
    }
    return false;
  }
  function Cr(e12, n) {
    if (e12.functionDefinition?.eq) {
      let r = e12.functionDefinition.eq(e12, e12.engine.box(n));
      if (r !== void 0) return r;
    }
    if (typeof n != "number" && n.functionDefinition?.eq) {
      let r = n.functionDefinition.eq(n, e12);
      if (r !== void 0) return r;
    }
    e12 = e12.N();
    let i = typeof n != "number" ? n.N() : e12.engine.box(n);
    if (e12.ops || i.ops) {
      let r = e12.functionDefinition?.eq?.(e12, i);
      return r !== void 0 || (r = i.functionDefinition?.eq?.(i, e12), r !== void 0) ? r : e12.isSame(i) ? true : e12.unknowns.length === 0 && i.unknowns.length === 0 ? e12.isFinite && i.isFinite ? Cu(e12.sub(i).simplify().N()) : e12.isNaN || i.isNaN ? false : !!(e12.isInfinity && i.isInfinity && e12.sgn === i.sgn) : void 0;
    }
    if (e12.symbol) {
      let r = e12.symbolDefinition?.eq?.(i);
      if (r !== void 0) return r;
    }
    if (i.symbol) {
      let r = i.symbolDefinition?.eq?.(e12);
      if (r !== void 0) return r;
    }
    if (e12.symbol && i.symbol) return e12.symbol === i.symbol;
    let t = e12.engine;
    if (e12.isNumberLiteral && i.isNumberLiteral) return e12.isFinite && i.isFinite ? Cu(e12.sub(i)) : e12.isNaN || i.isNaN ? false : !!(e12.isInfinity && i.isInfinity && e12.sgn === i.sgn);
    if (t.ask(t.box(["Equal", e12, i])).length > 0) return true;
    if (t.ask(t.box(["NotEqual", e12, i])).length > 0) return false;
    if (!(e12.unknowns.length > 0 || i.unknowns.length > 0)) return $t(e12, i);
  }
  function Ui(e12, n) {
    if (e12.isNumberLiteral) {
      if (typeof n != "number" && typeof n.numericValue == "number" && (n = n.numericValue), typeof n == "number") {
        if (n === 0) {
          let r = e12.sgn;
          return r === void 0 ? void 0 : r === "zero" ? "=" : r === "positive" || r === "positive-infinity" ? ">" : r === "negative" || r === "negative-infinity" ? "<" : r === "non-negative" ? ">=" : r === "non-positive" ? "<=" : void 0;
        }
        if (e12.isNumberLiteral) {
          let r = e12.numericValue;
          return typeof r == "number" ? Math.abs(r - n) <= e12.engine.tolerance ? "=" : r < n ? "<" : ">" : r.eq(n) ? "=" : r.lt(n) ? "<" : ">";
        }
        return;
      }
      if (!n.isNumberLiteral) return;
      let i = e12.numericValue, t = n.numericValue;
      return typeof i == "number" ? t.eq(i) ? "=" : t.lt(i) ? ">" : "<" : i.eq(t) ? "=" : i.lt(t) ? "<" : ">";
    }
    if (typeof n != "number") {
      if (e12.ops || n.ops) {
        if (e12.functionDefinition?.eq?.(e12, n) !== void 0) return "=";
        let t = e12.sub(n).N();
        if (!t.isNumberLiteral) return;
        if (typeof t.numericValue == "number") return t.numericValue === 0 ? "=" : t.numericValue < 0 ? "<" : ">";
        let r = e12.engine.tolerance;
        return t.numericValue.isZeroWithTolerance(r) ? "=" : t.numericValue.lt(0) ? "<" : ">";
      }
      if (e12.symbol) {
        if (e12.symbol === n.symbol) return "=";
        let i = e12.symbolDefinition?.cmp?.(n);
        return i || (e12.symbolDefinition?.eq?.(n) === true ? "=" : void 0);
      }
      if (e12.string) return n.string ? e12.string === n.string ? "=" : e12.string < n.string ? "<" : ">" : void 0;
      if (e12.tensor) return n.tensor && e12.tensor.equals(n.tensor) ? "=" : void 0;
    }
  }
  function Cu(e12) {
    if (!e12.isNumberLiteral) return false;
    let n = e12.numericValue, i = e12.engine;
    return typeof n == "number" ? i.chop(n) === 0 : n.isZeroWithTolerance(i.tolerance);
  }
  function Pr(e12, n = []) {
    let i = n.map((s, a) => !s.symbol || s.symbol === "Nothing" ? `_${a + 1}` : s.symbol), t = e12.unknowns;
    t.includes("_") && (e12 = e12.subs({ _: "_1" }), t = e12.unknowns);
    let r = i.length;
    for (let s of t) if (s.startsWith("_")) {
      let a = Number(s.slice(1));
      a <= i.length && (e12 = e12.subs({ [s]: i[a - 1] })), a > r && (r = a);
    }
    for (let s = i.length; s < r; s++) i.push(`_${s + 1}`);
    let o = r;
    for (; o > 0 && i[o - 1] === `_${o}`; ) {
      t.includes(`_${o}`) || i.pop();
      o--;
    }
    return [e12, ...i];
  }
  function ls(e12) {
    let n = e12.engine;
    if (e12.symbol) {
      let a = n.lookupFunction(e12.symbol);
      if (a) {
        let u = a.evaluate;
        return u ? (l) => u(l, { engine: n }) ?? n._fn(e12.symbol, l) : (l) => n._fn(e12.symbol, l);
      }
    }
    let i;
    e12.operator === "Function" ? i = Pr(e12.op1, e12.ops.slice(1)) : i = Pr(e12);
    let [t, ...r] = i;
    n.pushScope();
    for (let a of r) n.declare(a, { inferred: true, type: void 0 });
    let o = t.canonical;
    o.bind(), n.popScope();
    let s = o.scope;
    return s ? r.length === 0 ? () => {
      let a = n.swapScope(s);
      n.resetContext();
      let u = o.N() ?? o.evaluate();
      return n.swapScope(a), u;
    } : (a) => {
      if (a.length > r.length || n.strict && !a.every((c) => c.isValid)) return;
      if (a.length < r.length) {
        let c = r.slice(a.length).map((m, b) => n.symbol(`_${b + 1}`)), d = ji(n.function("Function", [t, ...r]), [...a, ...c]).evaluate();
        return n.function("Function", [d]);
      }
      a = a.map((c) => c.evaluate());
      let u = n.swapScope(s);
      n.resetContext();
      let l = 0;
      for (let c of r) n.assign(c, a[l++]);
      let f = o.evaluate();
      return n.swapScope(u), f.isValid ? f : void 0;
    } : () => o.N() ?? o.evaluate();
  }
  function ji(e12, n) {
    let i = ls(e12)?.(n);
    return i || e12.engine.function("Apply", [e12, ...n]);
  }
  function Ve(e12) {
    return ls(e12) ?? ((n) => e12.engine.function("Apply", [e12.N(), ...n]).N());
  }
  function fs(e12) {
    let n = e12.engine, i = ls(e12);
    return i ? (t) => i([n.number(t)])?.value ?? NaN : (t) => n.function("Apply", [e12.evaluate(), n.number(t)]).value;
  }
  function cs(e12) {
    let n = e12.match(/(.+)\((.*)\)/);
    if (!n) return [e12, void 0];
    let i = n[1], t = n[2].split(",").map((r) => r.trim());
    return [i, t];
  }
  function Zi(e12) {
    if (e12.operator === "Interval") {
      let n = e12.op1, i = e12.op2, t = false, r = false;
      n.operator === "Open" ? (t = true, n = n.op1) : n.operator === "Closed" && (n = n.op1), i.operator === "Open" ? (r = true, i = i.op1) : i.operator === "Closed" && (i = i.op1);
      let o = n.N(), s = i.N();
      return !o.isNumberLiteral || !s.isNumberLiteral ? void 0 : { start: o.re, openStart: t, end: s.re, openEnd: r };
    }
    if (e12.symbol === "EmptySet") return { start: 0, openStart: true, end: 0, openEnd: true };
    if (e12.symbol === "RealNumbers") return { start: -1 / 0, openStart: false, end: 1 / 0, openEnd: false };
    if (e12.symbol === "NegativeNumbers") return { start: -1 / 0, openStart: false, end: 0, openEnd: true };
    if (e12.symbol === "NonPositiveNumbers") return { start: -1 / 0, openStart: false, end: 0, openEnd: false };
    if (e12.symbol === "PositiveNumbers") return { start: 0, openStart: true, end: 1 / 0, openEnd: false };
    if (e12.symbol === "NonNegativeNumbers") return { start: 0, openStart: false, end: 1 / 0, openEnd: false };
  }
  var Vt = 50;
  var $u = { List: { complexity: 8200, signature: "(...any) -> list", type: (e12) => B(`list<${Oe(...e12.map((n) => n.type))}>`), canonical: Hd, eq: qu, collection: ds() }, Set: { complexity: 8200, signature: "(...any) -> set", type: (e12) => B(`set<${Oe(...e12.map((n) => n.type))}>`), canonical: Wd, eq: (e12, n) => {
    if (e12.operator !== n.operator || e12.nops !== n.nops) return false;
    let i = (t) => n.ops.some((r) => t.isSame(r));
    return e12.ops.every(i);
  }, collection: { ...ds(), at: void 0, indexOf: void 0 } }, Dictionary: { complexity: 8200, signature: "(...any) -> map", type: (e12) => B(`tuple<${Object.entries(Or(e12)).map(([n, i]) => n ? `${n}: ${P(i.type)}` : P(i.type)).join(", ")}>`), canonical: (e12, { engine: n }) => {
    let i = Or(e12);
    return n._fn("Dictionary", Object.entries(i).map(([t, r]) => n._fn("Tuple", [n.string(t), r])));
  }, eq: (e12, n) => {
    if (e12.operator !== n.operator || e12.nops !== n.nops) return false;
    let i = Or(e12.ops), t = Or(n.ops);
    return Object.entries(i).every(([r, o]) => {
      let s = t[r];
      return s && o.isSame(s);
    });
  }, collection: { ...ds(), at: (e12, n) => {
  }, indexOf: (e12, n) => {
  }, elttype: (e12) => B("tuple<string, any>") } }, Range: { complexity: 8200, signature: "(number, number?, step: number?) -> collection<integer>", eq: (e12, n) => {
    if (e12.operator !== n.operator) return false;
    let [i, t, r] = Qe(e12), [o, s, a] = Qe(n);
    return i === o && t === s && r === a;
  }, collection: { size: (e12) => {
    let [n, i, t] = Qe(e12);
    return t === 0 ? 0 : !isFinite(n) || !isFinite(i) ? 1 / 0 : 1 + Math.max(0, Math.floor((i - n) / t));
  }, contains: (e12, n) => {
    if (n.type !== "integer") return false;
    let i = n.re, [t, r, o] = Qe(e12);
    return o === 0 ? false : o > 0 ? i >= t && i <= r : i <= t && i >= r;
  }, iterator: (e12, n, i) => {
    let [t, r, o] = Qe(e12), s = n ?? 1, a = o === 0 ? 0 : Math.floor((r - t) / o) + 1;
    return i = Math.min(i ?? a, a), i <= 0 ? { next: () => ({ value: void 0, done: true }) } : { next: () => i > 0 ? (i--, { value: e12.engine.number(t + o * (s++ - 1)), done: false }) : { value: void 0, done: true } };
  }, at: (e12, n) => {
    if (typeof n != "number") return;
    let [i, t, r] = Qe(e12);
    if (!(n < 1 || n > 1 + (t - i) / r)) return e12.engine.number(i + r * (n - 1));
  }, indexOf: void 0, subsetOf: (e12, n) => {
    if (n.operator === "Range") {
      let [r, o, s] = Qe(e12), [a, u, l] = Qe(n);
      return r >= a && o <= u && s % l === 0;
    }
    if (!ii(n)) return false;
    let i = n.baseDefinition;
    if (!i?.collection?.iterator || !i?.collection?.at) return false;
    let t = 1;
    for (let r of ee(n)) {
      if (!e12.contains(r) || !e12.at(t)?.isSame(r)) return false;
      t++;
    }
    return true;
  }, eltsgn: (e12) => {
    let [n, i, t] = Qe(e12);
    return t === 0 ? "zero" : t > 0 ? n <= i ? "positive" : "negative" : n >= i ? "positive" : "negative";
  }, elttype: (e12) => "finite_integer" } }, Interval: { description: "A set of real numbers between two endpoints. The endpoints may or may not be included.", complexity: 8200, lazy: true, signature: "(expression, expression) -> set<real>", eq: (e12, n) => {
    let i = Zi(e12), t = Zi(n);
    return !i || !t ? false : i.start === t.start && i.end === t.end && i.openStart === t.openStart && i.openEnd === t.openEnd;
  }, collection: { size: (e12) => 1 / 0, contains: (e12, n) => {
    let i = Zi(e12);
    return !i || i.openStart && n.isLessEqual(i.start) || i.openEnd && n.isGreaterEqual(i.end) ? false : n.isGreaterEqual(i.start) && n.isLessEqual(i.end);
  }, eltsgn: (e12) => {
    let n = Zi(e12);
    if (!n) return "unsgined";
    if (n.start === n.end) return "unsigned";
    if (n.start >= 0 && !n.openStart) return "non-negative";
    if (n.end <= 0 && !n.openEnd) return "non-positive";
    if (n.start > 0 && n.end > 0) return "positive";
    if (n.start < 0 && n.end < 0) return "negative";
  }, elttype: (e12) => {
    let n = Zi(e12);
    return n ? isFinite(n.start) && isFinite(n.end) ? "finite_real" : "real" : "never";
  } } }, Linspace: { complexity: 8200, signature: "(start: number, end: number?, count: number?) -> collection", collection: { size: (e12) => {
    let n = e12.op3.re;
    return isFinite(n) || (n = Vt), Math.max(0, Math.floor(n));
  }, at: (e12, n) => {
    if (typeof n != "number") return;
    let i = e12.op1.re, t = e12.op2.re, r = e12.op3.re;
    if (isFinite(r) || (r = Vt), !(!isFinite(i) || !isFinite(t)) && !(n < 1 || n > r)) return e12.engine.number(i + (t - i) * (n - 1) / r);
  }, iterator: (e12, n, i) => {
    let t = e12.op1.re, r = e12.op2.re, o;
    isFinite(r) ? o = Math.max(0, isFinite(e12.op3.re) ? e12.op3.re : Vt) : (r = t, t = 1, o = Vt);
    let s = n ?? 1;
    return i = Math.min(i ?? o, o), i <= 0 ? { next: () => ({ value: void 0, done: true }) } : { next: () => i > 0 ? (i--, { value: e12.engine.number(t + (r - t) * (s++ - 1) / o), done: false }) : { value: void 0, done: true } };
  }, contains: (e12, n) => {
    if (!g(n.type, "finite_real")) return false;
    let i = n.re, t = e12.op1.re, r = e12.op2.re;
    if (i < t || i > r) return false;
    let o = e12.op3.re;
    if (isFinite(o) || (o = Vt), o === 0) return false;
    let s = (r - t) / o;
    return (i - t) % s === 0;
  } } }, Tuple: { description: "A fixed number of heterogeneous elements", complexity: 8200, signature: "(...any) -> tuple", type: (e12) => B(`tuple<${e12.map((n) => n.type).join(", ")}>`), canonical: (e12, { engine: n }) => n.tuple(...e12), eq: qu, collection: { size: (e12) => e12.nops, contains: (e12, n) => e12.ops.some((i) => i.isSame(n)), keys: (e12) => ["first", "second", "last"], at: (e12, n) => {
    if (typeof n == "number") return e12.ops[n - 1];
  } } }, KeyValuePair: { description: "A key/value pair", complexity: 8200, signature: "(key: string, value: any) -> tuple<string, any>", type: ([e12, n]) => B(`tuple<string, ${n.type}>`), canonical: (e12, { engine: n }) => {
    let [i, t] = vr(n, e12, ["string", "any"]);
    return !i.isValid || !t.isValid ? n._fn("KeyValuePair", [i, t]) : n.tuple(i, t);
  } }, Single: { description: "A tuple with a single element", complexity: 8200, signature: "(value: any) -> tuple<any>", type: ([e12]) => B(`tuple<${e12.type}>`), canonical: (e12, { engine: n }) => n.tuple(...Fe(n, e12, 1)) }, Pair: { description: "A tuple of two elements", complexity: 8200, signature: "(first: any, second: any) -> tuple<any, any>", type: ([e12, n]) => B(`tuple<${e12.type}, ${n.type}>`), canonical: (e12, { engine: n }) => n.tuple(...Fe(n, e12, 2)) }, Triple: { description: "A tuple of three elements", complexity: 8200, signature: "(first: any, second: any, third: any) -> tuple<any, any, any>", type: ([e12, n, i]) => B(`tuple<${e12.type}, ${n.type}, ${i.type}>`), canonical: (e12, { engine: n }) => n.tuple(...Fe(n, e12, 3)) }, String: { threadable: true, signature: "(...any) -> string", evaluate: (e12, { engine: n }) => e12.length === 0 ? n.string("") : n.string(e12.map((i) => i.string ?? i.toString()).join("")) }, Length: { complexity: 8200, signature: "any -> integer", evaluate: ([e12], { engine: n }) => n.number(Wi(e12)), sgn: ([e12]) => Wi(e12) === 0 ? "zero" : "positive" }, IsEmpty: { complexity: 8200, signature: "any -> boolean", evaluate: ([e12], { engine: n }) => Wi(e12) === 0 ? n.True : n.False }, At: { description: ["Access an element of a collection or a character of a string.", "If the index is negative, it is counted from the end.", "If the collection has a rank greater than 1, the index is a tuple of indexes.", "If the index is a list, each element of the list is used as an index and the result if a list of the elements."], complexity: 8200, signature: "(value: list|tuple|string, index: number | string) -> unknown", evaluate: (e12, { engine: n }) => {
    let i = e12[0], t = 1;
    for (; e12[t]; ) {
      let o = i.baseDefinition?.collection?.at;
      if (!o) return;
      let s = e12[t].string;
      if (s !== null) i = o(i, s) ?? n.Nothing;
      else {
        let a = e12[t].re;
        if (!Number.isInteger(a)) return;
        i = o(i, a) ?? n.Nothing;
      }
      t += 1;
    }
    return i;
  } }, Take: { description: ["Take a range of elements from a collection or a string.", "If the index is negative, it is counted from the end."], complexity: 8200, signature: "(value: collection|string, count: number) -> list|string", type: (e12) => e12[0].type === "string" ? "string" : B(`list<${Xn(e12[0].type)}>`), evaluate: (e12, { engine: n }) => {
    if (e12.length < 2) return;
    let i = e12[0].string;
    if (i !== null) {
      let r = e12.slice(1).map((o) => Hi(o, i.length));
      return n.string(Pu(i, r));
    }
    let t = Wi(e12[0]);
    return zt(e12[0], e12.slice(1).map((r) => Hi(r, t)));
  } }, Drop: { complexity: 8200, signature: "(value: collection|string, indexes: ...(number | string)) -> list", evaluate: (e12, { engine: n }) => {
    if (e12.length < 2) return;
    let i = e12[0].string;
    if (i !== null) {
      let u = Ou(e12.slice(1).map((l) => Hi(l, i.length)));
      return n.string(i.split("").filter((l, f) => !u.includes(f + 1)).join(""));
    }
    let t = e12[0].baseDefinition, r = Wi(e12[0]);
    if (r === 0) return n.Nothing;
    let o = t?.collection?.at;
    if (!o) return;
    let s = Ou(e12.slice(1).map((u) => Hi(u, r))), a = [];
    for (let u = 1; u <= r; u++) if (!s.includes(u)) {
      let l = o(e12[0], u);
      l && a.push(l);
    }
    return n.function("List", a);
  } }, First: { complexity: 8200, signature: "(value: collection|string) -> any", evaluate: ([e12], { engine: n }) => ps(e12, 1) ?? n.Nothing }, Second: { complexity: 8200, signature: "(value: collection|string) -> any", evaluate: ([e12], { engine: n }) => ps(e12, 2) ?? n.Nothing }, Last: { complexity: 8200, signature: "(value: collection|string) -> any", evaluate: ([e12], { engine: n }) => ps(e12, -1) ?? n.Nothing }, Rest: { complexity: 8200, signature: "(value: collection|string) -> list", evaluate: (e12) => zt(e12[0], [[2, -1, 1]]) }, Slice: { description: ["Return a range of elements from a collection or a string.", "If the index is negative, it is counted from the end."], complexity: 8200, signature: "(value: collection|string, start: number, end: number) -> list|string", type: (e12) => e12[0].type === "string" ? "string" : B(`list<${Xn(e12[0].type)}>`), evaluate: (e12, { engine: n }) => {
    if (e12.length < 3) return;
    let i = e12[0].string;
    if (i !== null) {
      let [s, a] = e12.slice(1).map((u) => Hi(u, i.length));
      return n.string(Pu(i, [s, a]));
    }
    let t = Wi(e12[0]), [r, o] = e12.slice(1).map((s) => Hi(s, t));
    return zt(e12[0], [r, o]);
  } }, Most: { complexity: 8200, signature: "(value: collection|string) -> list", evaluate: (e12) => zt(e12[0], [[1, -2, 1]]) }, Reverse: { complexity: 8200, signature: "(value: collection|string) -> collection", type: (e12) => e12[0].type, evaluate: ([e12]) => zt(e12, [[-1, 2, 1]]) }, Ordering: { complexity: 8200, lazy: true, signature: "(value: collection, f: function?) -> list<integer>", evaluate: (e12) => {
  } }, Sort: { complexity: 8200, lazy: true, signature: "(value: collection, f: function?) -> collection", type: (e12) => e12[0].type, evaluate: (e12) => {
  } }, Shuffle: { complexity: 8200, signature: "(value: collection) -> collection", type: (e12) => e12[0].type, evaluate: (e12) => {
  } }, Map: { complexity: 8200, lazy: true, signature: "(collection, function) -> collection", evaluate: (e12, { engine: n }) => {
    let [i, t] = Jd(e12);
    if (!t) return;
    let r = [];
    for (let a of i) r.push(t([a]) ?? n.Nothing);
    let o = e12[0].operator, s = { List: "List", Set: "Set", Range: "List", Linspace: "List", Single: "List", Pair: "List", Triple: "List", Tuple: "List", String: "String" }[o] ?? "List";
    return n.function(s, r);
  } }, Filter: { complexity: 8200, lazy: true, signature: "(collection, function) -> collection", type: (e12) => e12[0].type, evaluate: (e12, { engine: n }) => {
    let i = Ve(e12[1]);
    if (!i) return;
    let t = e12[0];
    if (t.string) return n.string(t.string.split("").map((a) => i([n.string(a)])?.symbol === "True" ? a : "").join(""));
    if (!ie(e12[0]) || !e12[1]) return;
    let r = [];
    for (let a of ee(t)) i([a])?.symbol === "True" && r.push(a);
    let o = t.operator, s = { List: "List", Set: "Set", Range: "List", Linspace: "List", Single: "List", Pair: "List", Triple: "List", Tuple: "List" }[o] ?? "List";
    return n.function(s, r);
  } }, Reduce: { complexity: 8200, lazy: true, signature: "(collection, function, initial:value) -> collection", evaluate: (e12) => {
  } }, Tabulate: { complexity: 8200, lazy: true, signature: "(function, integer, integer?) -> collection", evaluate: (e12, { engine: n }) => {
    let i = Ve(e12[0]);
    if (!i) return;
    if (e12.length === 1) return n.function("List", []);
    let t = e12.slice(1).map((o) => z(o));
    if (t.some((o) => o === null || o <= 0)) return;
    if (t.length === 1) return n.function("List", Array.from({ length: t[0] ?? 0 }, (o, s) => i([n.number(s + 1)]) ?? n.Nothing));
    let r = (o, s, a = 0) => {
      if (a === o.length) {
        let l = s.map((f) => n.number(f));
        return i(l);
      }
      let u = ["List"];
      for (let l = 1; l <= o[a]; l++) s[a] = l, u.push(r(o, s, a + 1));
      return u;
    };
    return n.box(r(t, Array(t.length).fill(0)));
  } }, Tally: { complexity: 8200, signature: "(collection) -> tuple<list, list<integer>>", type: (e12) => B(`tuple<list<${Xn(e12[0].type)}>, list<integer>>`), evaluate: (e12, { engine: n }) => {
    if (!ii(e12[0])) return;
    let [i, t] = Lu(e12[0]);
    return n.tuple(n.function("List", i), n.function("List", t));
  } }, Unique: { complexity: 8200, signature: "(collection) -> list", type: (e12) => B(`list<${Xn(e12[0].type)}>`), evaluate: (e12, { engine: n }) => {
    if (!ii(e12[0])) return;
    let [i, t] = Lu(e12[0]);
    return n.function("List", i);
  } }, Zip: { complexity: 8200, signature: "(collection, ...collection) -> list", evaluate: (e12) => {
  } }, RotateLeft: { complexity: 8200, signature: "(collection, integer?) -> collection", evaluate: (e12) => {
  } }, RotateRight: { complexity: 8200, signature: "(collection, integer?) -> collection", evaluate: (e12) => {
  } }, Join: { description: ["Join the elements of a sequence of collections or scalar values.", "If all collections are `Set`, return a `Set`.", "If all collections are `Map`, return a `Map`."], complexity: 8200, signature: "(...any) -> collection", type: Fu, evaluate: (e12, { engine: n }) => {
    let i = Fu(e12);
    if (g(i, "map")) {
      let t = {};
      for (let r of e12) if (t = Gu(t, r), !t) return;
      return n.function("Dictionary", Object.entries(t).map(([r, o]) => n.function("KeyValuePair", [n.string(r), o])));
    }
    if (g(i, "set")) {
      let t = [];
      for (let r of e12) if (t = Uu(t, r), !t) return;
      return n.function("Set", t);
    }
    if (g(i, "list")) {
      let t = [];
      for (let r of e12) if (t = ju(t, r), !t) return;
      return n.function("List", t);
    }
  } }, Iterate: { complexity: 8200, signature: "(function, initial: any?) -> list", evaluate: (e12) => {
  } }, Repeat: { complexity: 8200, signature: "(value: any) -> list", type: (e12) => B(`collection<${e12[0].type}>`), evaluate: (e12) => {
  } }, Cycle: { complexity: 8200, signature: "(list) -> list", type: (e12) => B(`list<${e12[0].type}>`), evaluate: (e12) => {
  } }, Fill: { complexity: 8200, signature: "(function, tuple) -> list", evaluate: (e12) => {
  } } };
  function Qe(e12) {
    if (e12.nops === 0) return [1, 0, 0];
    let n = Math.round(e12.op1.re);
    if (isFinite(n) || (n = 1), e12.nops === 1) return [1, n, 1];
    let i = Math.round(e12.op2.re);
    if (isFinite(i) || (i = 1), e12.nops === 2) return [n, i, i > n ? 1 : -1];
    let t = Math.abs(Math.round(e12.op3.re));
    return isFinite(t) || (t = 1), [n, i, n < i ? t : -t];
  }
  function Vu(e12) {
    let [n, i, t] = e12;
    return Number.isFinite(i) ? t > 0 ? i - (i - n) % t : i + (n - i) % t : t > 0 ? 1 / 0 : -1 / 0;
  }
  function Hi(e12, n) {
    if (!e12) return [0, 0, 0];
    let i = e12.re;
    if (isFinite(i)) {
      if (i = Math.round(i), i < 0) {
        if (n === void 0) return [0, 0, 0];
        i = n + i + 1;
      }
      return [i, i, 1];
    }
    let t = e12.operator;
    if (!t || typeof t != "string" || !/^(Single|Pair|Triple|Tuple|)$/.test(t)) return [0, 0, 0];
    let [r, o, s] = Qe(e12);
    return (r < 0 || o < 0) && n === void 0 ? [0, 0, 0] : (r < 0 && (r = n + r + 1), o < 0 && (o = n + o + 1), s = Math.abs(Math.round(s)), s === 0 ? [0, 0, 0] : (r > o && (s = -s), [r, o, s]));
  }
  function zt(e12, n) {
    let i = e12.engine, r = e12.baseDefinition?.collection?.at;
    if (!r) return i.Nothing;
    let o = [];
    for (let s of n) {
      let [a, u, l] = s;
      if (l !== 0) if (l < 0) for (let f = a; f >= u; f += l) {
        let c = r(e12, f);
        c && o.push(c);
      }
      else for (let f = a; f <= u; f += l) {
        let c = r(e12, f);
        c && o.push(c);
      }
    }
    return i.function("List", o);
  }
  function Pu(e12, n) {
    let i = "";
    for (let t of n) {
      let [r, o, s] = t;
      if (s === 1) i += e12.slice(r - 1, o);
      else if (s < 0) for (let a = r; a >= o; a += s) i += e12[a - 1];
      else for (let a = r; a <= o; a += s) i += e12[a - 1];
    }
    return i;
  }
  function Ou(e12) {
    let n = [];
    for (let i of e12) {
      let [t, r, o] = i;
      if (o !== 0) if (o < 0) for (let s = t; s >= r; s += o) n.push(s);
      else for (let s = t; s <= r; s += o) n.push(s);
    }
    return n;
  }
  function Hd(e12, { engine: n }) {
    let i = e12[0];
    if (e12.length === 1 && i.operator === "Matrix") {
      let [t, r, o] = i.ops;
      if (!r || r.string === "..") return o ? n._fn("Matrix", [t, n.string("[]"), o]) : n._fn("Matrix", [t, r]);
    }
    return e12 = e12.map((t) => t.operator === "Delimiter" ? t.op1.operator === "Sequence" ? n._fn("List", Le(n, t.op1.ops)) : n._fn("List", [t.op1?.canonical ?? n.Nothing]) : t.canonical), n._fn("List", e12);
  }
  function Wd(e12, { engine: n }) {
    let i = [], t = (r) => i.some((o) => o.isSame(r));
    for (let r of e12) t(r) || i.push(r);
    return n._fn("Set", i);
  }
  function Jd(e12) {
    if (e12.length !== 2) return [[], void 0];
    let n = Ve(e12[1]);
    return n ? e12[0].string ? [[e12[0]], (i) => {
      let t = i[0].string;
      if (t === null) return;
      let r = i[0].engine;
      return r.string(t.split("").map((o) => n([r.string(o)])?.string ?? "").join(""));
    }] : !ie(e12[0]) || !e12[1] ? [[], void 0] : [ee(e12[0]), n] : [[], void 0];
  }
  function Lu(e12) {
    let n = [], i = [], t = (r) => {
      for (let o = 0; o < n.length; o++) if (n[o].isSame(r)) return o;
      return -1;
    };
    for (let r of ee(e12)) {
      let o = t(r);
      o >= 0 ? i[o]++ : (n.push(r), i.push(1));
    }
    return [n, i];
  }
  function zu(e12, n, i) {
    let t = i;
    for (let r of ee(e12)) {
      let o = n(t, r);
      if (o === null) return;
      t = o;
    }
    return t;
  }
  function Fu(e12) {
    return e12.some((n) => n.type === "map") ? "map" : e12.some((n) => n.type === "set") ? "set" : "list";
  }
  function Gu(e12, n) {
    if (n.operator === "KeyValuePair") {
      let i = n.op1.string;
      return i ? (e12[i] = n.op2, e12) : void 0;
    }
    if (n.operator === "Tuple") {
      let [i, t] = n.ops;
      return i.string ? (e12[i.string] = t, e12) : void 0;
    }
    if (n.operator === "List" || n.operator === "Set" || n.operator === "Dictionary") {
      for (let i of n.ops) {
        let t = Gu(e12, i);
        if (!t) return;
        e12 = t;
      }
      return e12;
    }
  }
  function Uu(e12, n) {
    if (n.operator === "Set" || n.operator === "List") {
      for (let t of n.ops) if (e12 = Uu(e12, t), !e12) return;
    }
    return ((t) => e12.some((r) => r.isSame(t)))(n) || e12.push(n), e12;
  }
  function ju(e12, n) {
    if (n.operator === "List" || n.operator === "Set") {
      for (let i of n.ops) if (e12 = ju(e12, i), !e12) return;
    }
    return e12.push(n), e12;
  }
  function Yd(e12, n, i) {
    if (e12.string && n.string) return i && e12.string === n.string ? false : e12.string?.includes(n.string ?? "") ?? false;
    if (!e12.isCollection || !n.isCollection) return false;
    for (let t of ee(e12)) if (!n.contains(t)) return false;
    if (i) {
      let t = e12.size, r = n.size;
      if (t === r || t === void 0 || r === void 0) return false;
    }
    return true;
  }
  function ds() {
    return { size: (e12) => e12.nops, contains: (e12, n) => e12.ops.some((i) => i.isSame(n)), iterator: (e12, n, i) => {
      let t = (n ?? 1) - 1;
      return i = Math.min(i ?? e12.nops, e12.nops), { next: () => i <= 0 ? { value: void 0, done: true } : (i--, { value: e12.ops[t++], done: false }) };
    }, at: (e12, n) => {
      if (typeof n == "number" && !(n < 1 || n > e12.nops)) return e12.ops[n - 1];
    }, keys: (e12) => [], indexOf: (e12, n, i) => {
      if (i ?? (i = 1), i < 0) {
        if (i < -e12.nops) return;
        i = e12.nops + i + 1;
        for (let t = i; t >= 1; t--) if (e12.ops[t - 1].isSame(n)) return t;
        return;
      }
      for (let t = i; t <= e12.nops; t++) if (e12.ops[t - 1].isSame(n)) return t;
    }, subsetOf: Yd, eltsgn: (e12) => {
    }, elttype: (e12) => e12.nops === 0 ? "unknown" : e12.nops === 1 ? e12.ops[0].type : Oe(...e12.ops.map((n) => n.type)) };
  }
  function Or(e12) {
    let n = {}, i = 1;
    for (let t of e12) {
      if (t.operator === "KeyValuePair" || t.operator === "Tuple" || t.operator === "Pair") {
        let [r, o] = t.ops;
        if (r.symbol === "Nothing") continue;
        n[r?.string ?? r?.toString() ?? i.toString()] = o ?? t.engine.Nothing;
      } else n[i.toString()] = t;
      i += 1;
    }
    return n;
  }
  function Wi(e12) {
    if (e12.operator === "List" || e12.operator === "Set") return e12.nops;
    let n = e12.baseDefinition;
    if (n?.collection?.size) return n.collection.size(e12);
    let i = e12.string;
    return i !== null ? i.length : 0;
  }
  function ps(e12, n) {
    let i = e12.baseDefinition;
    if (i?.collection?.at) return i.collection.at(e12, n);
  }
  function qu(e12, n) {
    return e12.operator !== n.operator || e12.nops !== n.nops ? false : e12.ops.every((i, t) => i.isSame(n.ops[t]));
  }
  function ms(e12, n) {
    return Array.from({ length: n - e12 + 1 }, (i, t) => e12 + t);
  }
  function Ji(e12) {
    e12?.operator;
    let n = 1, i = n + yt, t, r = true;
    return t = e12.op1.symbol, n = Math.floor(e12.op2.re), isNaN(n) && (n = 1), Number.isFinite(n) || (r = false), e12.op3.symbol === "Nothing" || e12.op3.isInfinity ? r = false : (isNaN(e12.op3.re) || (i = Math.floor(e12.op3.re ?? i)), Number.isFinite(i) || (r = false)), !r && Number.isFinite(n) && (i = n + yt), { index: t, lower: n, upper: i, isFinite: r };
  }
  function Qd(e12) {
    return e12.map((n) => Ji(n));
  }
  function Xd(e12) {
    e12.length > 0;
    let { index: n, lower: i, upper: t, isFinite: r } = e12[0];
    r || (t = i + yt);
    let o = ms(i, t).map((s) => [s]);
    if (e12.length === 1) return o;
    for (let s = 1; s < e12.length; s++) {
      let { index: a, lower: u, upper: l, isFinite: f } = e12[s];
      f || (l = u + yt), o = Kd(o.map((c) => c[0]), ms(u, l));
    }
    return o;
  }
  function Kd(e12, n) {
    return e12.flatMap((i) => n.map((t) => [i, t]));
  }
  function ep(e12) {
    let n = e12.engine, i, t = null, r = null;
    if (e12.operator === "Tuple" || e12.operator === "Triple" || e12.operator === "Pair" || e12.operator === "Single" ? (i = e12.op1, r = e12.ops[1]?.canonical ?? null, t = e12.ops[2]?.canonical ?? null) : i = e12, i.operator === "Hold" && (i = i.op1), !!i.symbol) return i.symbol && i.symbol !== "Nothing" && n.declare(i.symbol, "integer"), t && r ? n.tuple(i, r, t) : t ? n.tuple(i, n.One, t) : r ? n.tuple(i, r) : n.tuple(i);
  }
  function gs(e12, n, i) {
    let t = n.engine;
    t.pushScope(), n ?? (n = t.error("missing"));
    let r = i.map((s) => ep(s)).filter((s) => s !== void 0), o = t._fn(e12, [n.canonical, ...r]);
    return t.popScope(), o;
  }
  function Yi(e12, n, i, t) {
    if (e12.isCollection) return zu(e12.evaluate(), i, t);
    if (n.length === 0) return i(t, e12) ?? void 0;
    let r = e12.engine, o = r.swapScope(e12.scope), s = Qd(n), a = Xd(s), u = t;
    for (let l of a) if (s.forEach((f, c) => r.assign(f.index, l[c])), u = i(u, e12) ?? void 0, u === void 0) break;
    for (let l of s) r.assign(l.index, void 0);
    return r.swapScope(o), u ?? void 0;
  }
  var hs = class extends Error {
    constructor({ message: n, value: i, cause: t } = {}) {
      super(n ?? "Operation canceled"), i && (this.value = i), this.cause = t, this.name = "CancellationError";
    }
  };
  function Zu(e12, n) {
    let i = Date.now();
    for (; ; ) {
      let { done: t, value: r } = e12.next();
      if (t) return r;
      if (Date.now() - i >= n) throw new hs({ value: r, cause: "timeout", message: `Timeout exceeded (${n}ms)` });
    }
  }
  function xs(e12) {
    if (e12 !== void 0) return isNaN(e12) ? "unsigned" : e12 > 0 ? "positive" : e12 < 0 ? "negative" : "zero";
  }
  function Lr(e12) {
    return e12 === "positive" ? "negative" : e12 === "non-negative" ? "non-positive" : e12 === "negative" ? "positive" : e12 === "non-positive" ? "non-negative" : e12;
  }
  function Qi(e12) {
    if (e12.isGreater(1)) return "positive";
    if (e12.isGreaterEqual(1)) return "non-negative";
    if (e12.isLessEqual(1) && e12.isGreaterEqual(0)) return "non-positive";
    if (e12.isLess(1) && e12.isGreaterEqual(0)) return "negative";
    if (e12.is(1)) return "zero";
    if (e12.isNegative || e12.isReal === false) return "unsigned";
  }
  var Wu = [{ Abs: { wikidata: "Q3317982", threadable: true, idempotent: true, complexity: 1200, signature: "number -> number", type: ([e12]) => e12.type, sgn: ([e12]) => e12.is(0) ? "zero" : e12.isNumberLiteral ? "positive" : "non-negative", evaluate: ([e12]) => np(e12) }, Add: { wikidata: "Q32043", associative: true, commutative: true, commutativeOrder: Rt, threadable: true, idempotent: true, complexity: 1300, lazy: true, signature: "(number, ...number) -> number", type: bu, sgn: (e12) => {
    if (e12.some((n) => n.isReal === false || n.isNaN)) return "unsigned";
    if (e12.every((n) => n.is(0))) return "zero";
    if (e12.every((n) => n.isNonNegative)) return e12.every((n) => n.isPositive) ? "positive" : "non-negative";
    if (e12.every((n) => n.isNonPositive)) return e12.every((n) => n.isNegative) ? "negative" : "non-positive";
    if (e12.every((n) => n.isReal)) return "real";
  }, evaluate: (e12, { numericApproximation: n }) => n ? Eu(...e12) : Z(...e12.map((i) => i.evaluate())) }, Ceil: { description: "Rounds a number up to the next largest integer", complexity: 1250, threadable: true, signature: "real -> integer", sgn: ([e12]) => {
    if (e12.isLessEqual(-1)) return "negative";
    if (e12.isPositive) return "positive";
    if (e12.isNegative && e12.isGreater(-1) || e12.is(0)) return "zero";
    if (e12.isNonPositive) return "non-positive";
    if (e12.isReal == false && e12.isNumberLiteral) return e12.im > 0 || e12.im <= -1 ? "unsigned" : xs(e12.re);
  }, evaluate: ([e12]) => Y(e12, Math.ceil, (n) => n.ceil(), (n) => n.ceil(0)) }, Chop: { associative: true, threadable: true, idempotent: true, complexity: 1200, signature: "number -> number", type: ([e12]) => e12.type, evaluate: (e12) => {
    let n = e12[0], i = n.engine;
    return Y(n, (t) => i.chop(t), (t) => i.chop(t), (t) => i.complex(i.chop(t.re), i.chop(t.im)));
  } }, Divide: { wikidata: "Q1226939", complexity: 2500, threadable: true, signature: "(number, ...number) -> number", type: ([e12, n]) => n.is(1) ? e12.type : n.isFinite === false || e12.isFinite === false ? "non_finite_number" : n.isInteger && e12.isInteger ? "finite_rational" : n.isReal && e12.isReal ? "finite_real" : "finite_number", sgn: (e12) => {
    let [n, i] = [e12[0], e12[1]];
    if (i.is(0)) return "unsigned";
    if (i.is(0) === false && n.is(0)) return "zero";
    if (i.isPositive) return n.sgn;
    if (i.isNegative) return Lr(n.sgn);
    if (n.is(0) && i.isFinite) return "zero";
    if (!n.is(0) && !i.is(0)) return "real-not-zero";
  }, canonical: (e12, { engine: n }) => {
    let i = n;
    e12 = qe(i, e12);
    let t = e12[0];
    if (t === void 0) return i.error("missing");
    if (e12.length < 2) return t;
    let r = e12.slice(1);
    for (let o of r) t = We(t, o);
    return t;
  }, evaluate: ([e12, n]) => e12.div(n) }, Exp: { wikidata: "Q168698", threadable: true, complexity: 3500, signature: "number -> number", canonical: (e12, { engine: n }) => (e12 = qe(n, e12, 1), n.function("Power", [n.E, ...e12])) }, Factorial: { description: "Factorial function: the product of all positive integers less than or equal to n", wikidata: "Q120976", threadable: true, complexity: 9e3, signature: "integer -> integer", sgn: ([e12]) => e12.isNonNegative ? "positive" : e12.isNegative || e12.isReal === false ? "unsigned" : void 0, canonical: (e12, { engine: n }) => {
    let i = e12[0];
    return i.isNumberLiteral && i.isNegative ? n._fn("Factorial", [i.neg()]).neg() : n._fn("Factorial", [i]);
  }, evaluate: ([e12]) => {
    let n = e12.engine;
    if (e12.im !== 0 && e12.im !== void 0) return n.number(n.complex(e12.re, e12.im).add(1));
    if (e12.isFinite) return e12.isNegative ? n.number(Gi(1 + e12.re)) : n.number(Zu($o(BigInt((e12.bignumRe ?? e12.re).toFixed())), n.timeLimit * 1e3));
  } }, Factorial2: { description: "Double Factorial Function", complexity: 9e3, threadable: true, signature: "integer -> integer", sgn: ([e12]) => e12.isNonNegative ? "positive" : e12.isNegative || e12.isReal === false ? "unsigned" : void 0, evaluate: (e12) => {
    let n = e12[0], i = z(n);
    if (i === null) return;
    let t = n.engine;
    return se(t) ? t.number(xu(t, t.bignum(i))) : t.number(iu(i));
  } }, Floor: { wikidata: "Q56860783", complexity: 1250, threadable: true, signature: "number -> integer", sgn: ([e12]) => {
    if (e12.isNegative) return "negative";
    if (e12.isGreaterEqual(1)) return "positive";
    if (e12.isPositive && e12.isLess(1) || e12.is(0)) return "zero";
    if (e12.isNonNegative) return "non-negative";
    if (e12.isReal == false && e12.isNumberLiteral) return e12.im < 0 || e12.im >= 1 ? "unsigned" : xs(e12.re);
  }, evaluate: ([e12]) => Y(e12, Math.floor, (n) => n.floor(), (n) => n.floor(0)) }, Gamma: { wikidata: "Q190573", complexity: 8e3, threadable: true, signature: "number -> number", sgn: ([e12]) => e12.isPositive ? "positive" : e12.is(0) ? "zero" : void 0, evaluate: ([e12], { numericApproximation: n, engine: i }) => n ? Y(e12, (t) => Gi(t), (t) => us(i, t), (t) => t) : void 0 }, GammaLn: { complexity: 8e3, threadable: true, signature: "number -> number", evaluate: (e12, { numericApproximation: n, engine: i }) => n ? Y(e12[0], (t) => qt(t), (t) => as(i, t), (t) => t) : void 0 }, Ln: { description: "Natural Logarithm", wikidata: "Q204037", complexity: 4e3, threadable: true, signature: "(number, base: number?) -> number", sgn: ([e12]) => Qi(e12), evaluate: ([e12], { numericApproximation: n, engine: i }) => n ? Y(e12, (t) => t === 0 ? -1 / 0 : t >= 0 ? Math.log(t) : i.complex(t).log(), (t) => t.isZero() ? -1 / 0 : t.isNeg() ? i.complex(t.toNumber()).log() : t.ln(), (t) => t.isZero() ? NaN : t.log()) : e12.ln() }, Log: { description: "Log(z, b = 10) = Logarithm of base b", wikidata: "Q11197", complexity: 4100, threadable: true, signature: "(number, base: number?) -> number", sgn: ([e12, n]) => {
    if (!n) return Qi(e12);
    if (n.is(1) || n.isReal == false) return "unsigned";
    if (n.isGreater(1)) return Qi(e12);
    if (n.isLess(1)) return Lr(Qi(e12));
  }, evaluate: (e12, { numericApproximation: n, engine: i }) => {
    if (!n) return e12[0]?.ln(e12[1] ?? 10) ?? void 0;
    let t = i;
    return e12[1] === void 0 ? Y(e12[0], (r) => r === 0 ? -1 / 0 : r >= 0 ? Math.log10(r) : t.complex(r).log().div(Math.LN10), (r) => r.isZero() ? -1 / 0 : r.isNeg() ? t.complex(r.toNumber()).log().div(Math.LN10) : X.log10(r), (r) => r.isZero() ? NaN : r.log().div(Math.LN10)) : hn(e12[0], e12[1], (r, o) => Math.log(r) / Math.log(o), (r, o) => r.log(o), (r, o) => r.log().div(typeof o == "number" ? Math.log(o) : o.log()));
  } }, Lb: { description: "Base-2 Logarithm", wikidata: "Q581168", complexity: 4100, threadable: true, signature: "(number, base: number?) -> number", sgn: ([e12]) => Qi(e12), canonical: ([e12], { engine: n }) => n._fn("Log", [e12, n.number(2)]) }, Lg: { description: "Base-10 Logarithm", wikidata: "Q966582", complexity: 4100, threadable: true, signature: "number -> number", sgn: ([e12]) => Qi(e12), canonical: ([e12], { engine: n }) => n._fn("Log", [e12]) }, Mod: { description: "Modulo", wikidata: "Q1799665", complexity: 2500, threadable: true, signature: "(number, number) -> number", sgn: (e12) => {
    let n = e12[1];
    if (!(n === void 0 || n.isReal == false)) {
      if (n.is(0)) return "unsigned";
      if (e12[0].isNumberLiteral && n.isNumberLiteral) return hn(e12[0], n, (t, r) => (t % r + r) % r, (t, r) => t.modulo(r))?.sgn ?? void 0;
    }
  }, evaluate: ([e12, n]) => hn(e12, n, (i, t) => (i % t + t) % t, (i, t) => i.modulo(t)) }, Multiply: { wikidata: "Q40276", associative: true, commutative: true, idempotent: true, complexity: 2100, threadable: true, lazy: true, signature: "(number, ...number) -> number", type: (e12) => e12.length === 0 ? "finite_integer" : e12.length === 1 ? e12[0].type : e12.some((n) => n.isFinite === false) ? "non_finite_number" : e12.every((n) => n.isInteger) ? "finite_integer" : e12.every((n) => n.isReal) ? "finite_real" : e12.every((n) => n.isRational) ? "finite_rational" : "finite_number", sgn: (e12) => {
    if (!e12.some((n) => n.sgn === void 0 || n.isReal === false)) {
      if (e12.some((n) => n.is(0))) return e12.every((n) => n.isFinite) ? "zero" : e12.some((n) => n.isFinite === false) ? "unsigned" : void 0;
      if (!(e12.some((n) => n.isFinite === false || n.isFinite === void 0) && e12.some((n) => n.is(0) === void 0))) {
        if (e12.every((n) => n.isPositive || n.isNegative)) {
          let n = 0;
          return e12.forEach((i) => {
            i.isNegative && n++;
          }), n % 2 === 0 ? "positive" : "negative";
        }
        if (e12.every((n) => n.isNonPositive || n.isNonNegative)) {
          let n = 0;
          return e12.forEach((i) => {
            i.isNonPositive && n++;
          }), n % 2 === 0 ? "non-positive" : "non-negative";
        }
        if (e12.every((n) => !n.is(0) && n.isReal)) return "real-not-zero";
        if (e12.every((n) => !n.is(0))) return "not-zero";
        if (e12.every((n) => n.isReal)) return "real";
      }
    }
  }, evaluate: (e12, { numericApproximation: n }) => n ? _u(...e12) : ue(...e12.map((i) => i.evaluate())) }, Negate: { description: "Additive Inverse", wikidata: "Q715358", complexity: 2e3, threadable: true, signature: "number -> number", type: ([e12]) => e12.type, sgn: ([e12]) => Lr(e12.sgn), canonical: (e12, { engine: n }) => (e12 = qe(n, e12), e12.length === 0 ? n.error("missing") : e12[0].neg()), evaluate: ([e12]) => e12.neg() }, PlusMinus: { description: "Plus or Minus", wikidata: "Q120812", complexity: 1200, involution: true, signature: "value -> tuple", type: ([e12]) => B(`tuple(${P(e12.type)}, ${P(e12.type)})`), evaluate: ([e12], { engine: n }) => n.tuple(e12.abs(), e12.abs().neg()) }, Power: { wikidata: "Q33456", threadable: true, complexity: 3500, signature: "(number, number) -> number", type: ([e12, n]) => n.isFinite ? e12.isInteger && n.isInteger ? "finite_integer" : e12.isRational && n.isInteger ? "finite_rational" : e12.isReal && n.isReal ? "finite_real" : "finite_number" : "non_finite_number", canonical: (e12, { engine: n }) => {
    if (e12 = qe(n, e12, 2), e12.length !== 2) return n._fn("Power", e12);
    let [i, t] = e12;
    return zi(i, t);
  }, sgn: ([e12, n]) => {
    let i = e12.sgn, t = n.sgn;
    if (!(e12.isReal === false || n.isReal === false || e12.isNaN || n.isNaN || i === void 0 || t === void 0)) {
      if (e12.is(0)) return n.isNonPositive ? "unsigned" : n.isPositive ? "zero" : void 0;
      if (e12.is(0) && n.is(0)) return "unsigned";
      if (e12.isNonNegative || n.numerator.isOdd && n.denominator.isOdd) return e12.sgn;
      if (n.numerator.isEven && n.denominator.isOdd) return e12.isReal ? e12.is(0) ? "non-negative" : "positive" : e12.type === "imaginary" ? "negative" : e12.is(0) ? void 0 : "not-zero";
      if (n.isRational === false || n.numerator.isOdd && n.denominator.isEven && e12.isNonPositive) return "unsigned";
    }
  }, evaluate: ([e12, n], { numericApproximation: i }) => pe(e12, n, { numericApproximation: i ?? false }) }, Rational: { complexity: 2400, signature: "(number, integer?) -> rational", sgn: ([e12]) => e12.sgn, canonical: (e12, { engine: n }) => {
    let i = n;
    return e12 = W(e12), e12.length === 0 ? i._fn("Rational", [i.error("missing")]) : e12.length === 1 ? i._fn("Rational", [In(i, e12[0], "real")]) : (e12 = vr(i, e12, ["integer", "integer"]), e12.length !== 2 || !e12[0].isValid || !e12[1].isValid ? i._fn("Rational", e12) : e12[0].div(e12[1]));
  }, evaluate: (e12, { numericApproximation: n, engine: i }) => {
    let t = i;
    if (e12.length === 1) {
      let s = e12[0].N();
      return s.numericValue === null || s.im !== 0 ? void 0 : t.number(du(s.re));
    }
    if (n) return hn(e12[0], e12[1], (s, a) => s / a, (s, a) => s.div(a), (s, a) => s.div(a));
    let [r, o] = [z(e12[0]), z(e12[1])];
    if (r !== null && o !== null) return t.number([r, o]);
  } }, Root: { complexity: 3200, threadable: true, signature: "(number, number) -> number", type: ([e12, n]) => e12.isFinite === false || n.isFinite === false ? "non_finite_number" : n.is(0) ? "finite_integer" : n.is(1) ? e12.type : e12.isReal && n.isReal && e12.isPositive === true ? "finite_real" : "finite_number", sgn: ([e12, n]) => {
    if (e12.isReal === false || n.isReal === false) return "unsigned";
    if (e12.is(0)) return n.is(0) ? "unsigned" : "zero";
    if (e12.isPositive === true) return "positive";
    if (n.isOdd === true) return "negative";
    if (n.isEven === true) return "unsigned";
  }, canonical: (e12, { engine: n }) => {
    e12 = qe(n, e12, 2);
    let [i, t] = e12;
    return ci(i, t);
  }, evaluate: ([e12, n], { numericApproximation: i }) => Ar(e12, n, { numericApproximation: i }) }, Round: { complexity: 1250, threadable: true, signature: "number -> integer", type: ([e12]) => e12.isFinite === false || e12.isReal === false ? "non_finite_number" : "finite_integer", sgn: ([e12]) => {
    if (e12.isNaN) return "unsigned";
    if (e12.isNumberLiteral) return e12.im >= 0.5 || e12.im <= -0.5 ? "unsigned" : xs(Math.round(e12.re));
    if (e12.isGreaterEqual(0.5)) return "positive";
    if (e12.isLessEqual(-0.5)) return "negative";
    if (e12.isLess(0.5) && e12.isGreater(-0.5)) return "zero";
    if (e12.isNonNegative) return "non-negative";
    if (e12.isNonPositive) return "non-positive";
    if (e12.isReal) return "real";
  }, evaluate: ([e12]) => Y(e12, Math.round, (n) => n.round(), (n) => n.round(0)) }, Sign: { complexity: 1200, threadable: true, signature: "number -> integer", sgn: ([e12]) => e12.sgn, evaluate: ([e12], { engine: n }) => {
    if (e12.is(0)) return n.Zero;
    if (e12.isPositive) return n.One;
    if (e12.isNegative) return n.NegativeOne;
  } }, Sqrt: { description: "Square Root", wikidata: "Q134237", complexity: 3e3, threadable: true, signature: "number -> number", type: ([e12]) => e12.isFinite === false ? "non_finite_number" : e12.isReal ? "finite_real" : "finite_number", sgn: ([e12]) => {
    if (e12.isPositive) return "positive";
    if (e12.isNegative) return "unsigned";
    if (e12.isNonNegative) return "non-negative";
    if (!e12.is(0)) return "not-zero";
  }, evaluate: ([e12], { numericApproximation: n, engine: i }) => {
    if (!n) return e12.sqrt();
    let [t, r] = e12.toNumericValue();
    return r.is(1) ? i.number(t.sqrt().N()) : i.number(t.sqrt().N()).mul(r);
  } }, Square: { wikidata: "Q3075175", complexity: 3100, threadable: true, signature: "number -> number", sgn: ([e12]) => {
    if (e12.is(0)) return "zero";
    if (e12.isReal) return e12.is(0) ? "non-negative" : "positive";
    if (e12.type === "imaginary" || e12.type === "complex") return "negative";
    if (e12.isReal == false || e12.isNaN) return "unsigned";
  }, canonical: (e12, { engine: n }) => {
    let i = n;
    return e12 = W(e12), e12.length !== 1 ? i._fn("Square", e12) : i._fn("Power", [e12[0], i.number(2)]).canonical;
  } }, Subtract: { wikidata: "Q40754", complexity: 1350, threadable: true, signature: "(number, ...number) -> number", canonical: (e12, { engine: n }) => {
    if (e12 = qe(n, e12), e12.length === 0) return n.error("missing");
    let i = e12[0], t = e12.slice(1);
    return $e(n, [i, ...t.map((r) => r.neg())]);
  } } }, { ImaginaryUnit: { type: "finite_imaginary", constant: true, holdUntil: "never", wikidata: "Q193796", value: (e12) => e12.I }, i: { type: "finite_imaginary", constant: true, holdUntil: "never", value: (e12) => e12.I }, ExponentialE: { type: "finite_real", wikidata: "Q82435", constant: true, holdUntil: "N", value: (e12) => e12.number(se(e12) ? e12._BIGNUM_ONE.exp() : Math.exp(1)) }, e: { type: "finite_real", constant: true, holdUntil: "never", value: "ExponentialE" }, ComplexInfinity: { type: "non_finite_number", constant: true, holdUntil: "never", value: (e12) => e12.ComplexInfinity }, PositiveInfinity: { type: "non_finite_number", constant: true, holdUntil: "never", value: 1 / 0 }, NegativeInfinity: { type: "non_finite_number", constant: true, holdUntil: "never", value: -1 / 0 }, NaN: { type: "non_finite_number", constant: true, holdUntil: "never", value: (e12) => e12.NaN }, MachineEpsilon: { type: "finite_real", holdUntil: "N", constant: true, value: { num: Number.EPSILON.toString() } }, Half: { type: "finite_rational", constant: true, holdUntil: "never", value: ["Rational", 1, 2] }, GoldenRatio: { type: "finite_real", wikidata: "Q41690", constant: true, holdUntil: "N", value: ["Divide", ["Add", 1, ["Sqrt", 5]], 2] }, CatalanConstant: { type: "finite_real", wikidata: "Q855282", constant: true, holdUntil: "N", value: { num: `0.91596559417721901505460351493238411077414937428167
                  21342664981196217630197762547694793565129261151062
                  48574422619196199579035898803325859059431594737481
                  15840699533202877331946051903872747816408786590902
                  47064841521630002287276409423882599577415088163974
                  70252482011560707644883807873370489900864775113225
                  99713434074854075532307685653357680958352602193823
                  23950800720680355761048235733942319149829836189977
                  06903640418086217941101917532743149978233976105512
                  24779530324875371878665828082360570225594194818097
                  53509711315712615804242723636439850017382875977976
                  53068370092980873887495610893659771940968726844441
                  66804621624339864838916280448281506273022742073884
                  31172218272190472255870531908685735423498539498309
                  91911596738846450861515249962423704374517773723517
                  75440708538464401321748392999947572446199754961975
                  87064007474870701490937678873045869979860644874974
                  64387206238513712392736304998503539223928787979063
                  36440323547845358519277777872709060830319943013323
                  16712476158709792455479119092126201854803963934243
                  ` } }, EulerGamma: { type: "finite_real", wikidata: "Q273023", holdUntil: "N", constant: true, value: { num: `0.57721566490153286060651209008240243104215933593992359880576723488486772677766
          467093694706329174674951463144724980708248096050401448654283622417399764492353
          625350033374293733773767394279259525824709491600873520394816567085323315177661
          152862119950150798479374508570574002992135478614669402960432542151905877553526
          733139925401296742051375413954911168510280798423487758720503843109399736137255
          306088933126760017247953783675927135157722610273492913940798430103417771778088
          154957066107501016191663340152278935867965497252036212879226555953669628176388
          792726801324310104765059637039473949576389065729679296010090151251959509222435
          014093498712282479497471956469763185066761290638110518241974448678363808617494
          551698927923018773910729457815543160050021828440960537724342032854783670151773
          943987003023703395183286900015581939880427074115422278197165230110735658339673` } } }, { PreIncrement: { signature: "number -> number" }, PreDecrement: { signature: "number -> number" } }, { IsPrime: { description: "`IsPrime(n)` returns `True` if `n` is a prime number", wikidata: "Q49008", complexity: 1200, threadable: true, signature: "(number) -> boolean", evaluate: ([e12], { engine: n }) => {
    let i = qr(e12);
    if (i !== void 0) return n.symbol(i ? "True" : "False");
  } }, IsComposite: { description: "`IsComposite(n)` returns `True` if `n` is not a prime number", complexity: 1200, threadable: true, signature: "(number) -> boolean", canonical: (e12, { engine: n }) => n.box(["Not", ["IsPrime", ...e12]]) }, IsOdd: { description: "`IsOdd(n)` returns `True` if `n` is an odd number", complexity: 1200, threadable: true, signature: "(number) -> boolean", evaluate: (e12, { engine: n }) => {
    let i = false, t = e12.every((r) => {
      if (r.im !== 0) return false;
      let o = kt(r);
      if (o !== null) return o % BigInt(2) !== BigInt(0);
      let s = r.re;
      return Number.isInteger(s) ? s % 2 !== 0 : (i = true, false);
    });
    if (!i) return n.symbol(t ? "False" : "True");
  } }, isEven: { description: "Odd Number", complexity: 1200, threadable: true, signature: "(number) -> boolean", canonical: (e12, { engine: n }) => n.box(["Not", ["IsOdd", ...e12]]) } }, { GCD: { description: "Greatest Common Divisor", complexity: 1200, threadable: false, signature: "(...any) -> integer", sgn: () => "positive", evaluate: (e12) => Hu(e12, "GCD") }, LCM: { description: "Least Common Multiple", complexity: 1200, threadable: false, signature: "(...any) -> integer", sgn: () => "positive", evaluate: (e12) => Hu(e12, "LCM") }, Numerator: { description: "Numerator of an expression", complexity: 1200, threadable: true, lazy: true, signature: "(number) -> number | nothing", canonical: (e12, { engine: n }) => {
    if (e12.length === 0) return n.Nothing;
    let i = e12[0];
    return i.operator === "Rational" || i.operator === "Divide" ? i.op1 : n._fn("Numerator", Le(n, e12));
  }, sgn: ([e12]) => e12.sgn, evaluate: (e12, { engine: n }) => {
    let i = n;
    if (e12.length === 0) return i.Nothing;
    let t = e12[0];
    return t.operator === "Rational" || t.operator === "Divide" ? t.op1.evaluate() : t.numerator;
  } }, Denominator: { description: "Denominator of an expression", complexity: 1200, threadable: true, lazy: true, signature: "(number) -> number | nothing", canonical: (e12, { engine: n }) => {
    if (e12.length === 0) return n.Nothing;
    let i = e12[0];
    if (i.operator === "Rational" || i.operator === "Divide") return i.op2;
    let t = je(i);
    return t !== void 0 ? n.number(t[1]) : n._fn("Denominator", Le(n, e12));
  }, sgn: () => "positive", evaluate: (e12, { engine: n }) => {
    let i = n;
    if (e12.length === 0) return i.Nothing;
    let t = e12[0];
    return t.operator === "Rational" || t.operator === "Divide" ? t.op2.evaluate() : t.denominator;
  } }, NumeratorDenominator: { description: "Sequence of Numerator and Denominator of an expression", complexity: 1200, threadable: true, lazy: true, signature: "(number) -> tuple<number, number> | nothing", canonical: (e12, { engine: n }) => {
    if (e12.length === 0) return n.Nothing;
    let i = e12[0];
    if (i.operator === "Rational" || i.operator === "Divide") return n.tuple(...i.ops);
    let t = je(i.evaluate());
    return t !== void 0 ? n.tuple(n.number(t[0]), n.number(t[1])) : n._fn("NumeratorDenominator", e12.map((r) => r.evaluate()));
  }, evaluate: (e12, { engine: n }) => {
    let i = n;
    if (e12.length === 0) return i.Nothing;
    let t = e12[0];
    return t.operator === "Rational" || t.operator === "Divide" ? i.tuple(...t.ops) : i.tuple(...t.numeratorDenominator);
  } } }, { Max: { description: "Maximum of two or more numbers", complexity: 1200, threadable: false, signature: "(...value) -> number | list", sgn: (e12) => {
    if (e12.some((n) => n.isReal == false || n.isNaN)) return "unsigned";
    if (!e12.some((n) => n.isReal == false || n.isNaN !== false)) {
      if (e12.some((n) => n.isPositive)) return "positive";
      if (e12.every((n) => n.isNonPositive)) return e12.some((n) => n.is(0)) ? "zero" : "non-positive";
      if (e12.some((n) => n.isNonNegative)) return "non-negative";
      if (e12.every((n) => n.isNegative)) return "negative";
      if (e12.some((n) => !n.is(0))) return "real-not-zero";
    }
  }, evaluate: (e12, { engine: n }) => Fr(n, e12, "Max") }, Min: { description: "Minimum of two or more numbers", complexity: 1200, threadable: false, signature: "(...value) -> number | list", sgn: (e12) => {
    if (e12.some((n) => n.isReal == false || n.isNaN)) return "unsigned";
    if (!e12.some((n) => n.isReal == false || n.isNaN !== false)) {
      if (e12.some((n) => n.isNegative)) return "negative";
      if (e12.every((n) => n.isNonNegative)) return e12.some((n) => n.is(0)) ? "zero" : "non-negative";
      if (e12.some((n) => n.isNonPositive)) return "non-positive";
      if (e12.every((n) => n.isPositive)) return "positive";
      if (e12.some((n) => !n.is(0))) return "real-not-zero";
    }
  }, evaluate: (e12, { engine: n }) => Fr(n, e12, "Min") }, Supremum: { description: "Like Max, but defined for open sets", complexity: 1200, threadable: false, signature: "(...value) -> number | list", evaluate: (e12, { engine: n }) => Fr(n, e12, "Supremum") }, Infimum: { description: "Like Min, but defined for open sets", complexity: 1200, threadable: false, signature: "(...value) -> number | list", evaluate: (e12, { engine: n }) => Fr(n, e12, "Infimum") }, Product: { description: "`Product(f, a, b)` computes the product of `f` from `a` to `b`", wikidata: "Q901718", complexity: 1e3, threadable: false, lazy: true, signature: "(collection|function, ...(tuple<symbol>|tuple<symbol, integer>|tuple<symbol, integer, integer>)) -> number", canonical: ([e12, ...n]) => gs("Product", e12, n), sgn: (e12) => {
    let n = e12[0]?.sgn;
    if (n === void 0) return;
    if (["positive", "zero"].includes(n)) return n;
    let i = Yi(e12[0], e12.slice(1), (f, c) => f + 1, 0);
    if (n === "real-not-zero" || n === "negative") return i % 2 === 0 ? "positive" : n;
    if (e12[0]?.type === "imaginary") return i % 2 === 0 ? "negative" : "unsigned";
    if (n === "unsigned") return;
    let t = false, r = false, o = false, s = false, a = "positive", u = false, l = Yi(e12[0], e12.slice(1), (f, c) => (c.isInfinity ? (s = true, o = true) : c.isInfinity !== false && (o = true), c.is(0) && (t = true, r = true), c.is(0) && (r = true), c.isNonPositive ? a = Lr(a) : c.isNonNegative !== true && (u = true), f + 1), 0);
    if (s && t) return "unsigned";
    if (!(u || o && r)) return r ? a === "positive" ? "non-negative" : "non-positive" : a;
  }, evaluate: (e12, n) => {
    let i = (r, o) => (o = o.evaluate(n), o.isNumberLiteral ? r.mul(o.numericValue) : null), t = Yi(e12[0], e12.slice(1), i, n.engine._numericValue(1));
    return n.engine.number(t ?? NaN);
  } }, Sum: { description: "`Sum(f, a, b)` computes the sum of `f` from `a` to `b`", wikidata: "Q218005", complexity: 1e3, threadable: false, lazy: true, signature: "(collection|function, ...(tuple<symbol>|tuple<symbol, integer>|tuple<symbol, integer, integer>)) -> number", sgn: (e12) => {
    let n = e12[0]?.sgn;
    if (n === void 0) return;
    if (["positive", "negative", "zero"].includes(n)) return n;
    let i = [], t = Yi(e12[0], e12.slice(1), (r, o) => (i.push(o.sgn), r + 1), 0);
    if (!i.some((r) => [void 0, "unsigned"].includes(r))) {
      if (i.every((r) => r === "zero")) return "zero";
      if (i.every((r) => r === "positive" || r === "non-negative")) return i.some((r) => r === "positive") ? "positive" : "non-negative";
      if (i.every((r) => r === "negative" || r === "non-negative")) return i.some((r) => r === "negative") ? "negative" : "non-positive";
      if (i.every((r) => r === "real" || r === "real-not-zero")) return "real";
    }
  }, canonical: ([e12, ...n]) => gs("Sum", e12, n), evaluate: (e12, { engine: n }) => n.number(Yi(e12[0], e12.slice(1), (i, t) => (t = t.evaluate(), t.isNumberLiteral ? i.add(t.numericValue) : null), n._numericValue(0)) ?? NaN) } }, { BaseForm: { description: "`BaseForm(expr, base=10)`", complexity: 9e3, signature: "(number, (string|integer)?) -> string | nothing", type: ([e12]) => e12 === void 0 ? "nothing" : e12.type, evaluate: ([e12]) => e12 }, FromDigits: { description: "`FromDigits(s, base=10)`       return an integer representation of the string `s` in base `base`.", signature: "(string, (string|integer)?) -> integer", evaluate: (e12, { engine: n }) => {
    let i = e12[0]?.string, t = n;
    if (!i) return t.typeError("string", e12[0]?.type, e12[0]);
    if (i = i.trim(), i.startsWith("0x")) return t.number(parseInt(i.slice(2), 16));
    if (i.startsWith("0b")) return t.number(parseInt(i.slice(2), 2));
    let r = e12[1] ?? t.Nothing;
    if (r.symbol === "Nothing") return t.number(Number.parseInt(i, 10));
    let o = r.re;
    if (r.type !== "integer" || !Number.isFinite(o) || o < 2 || o > 36) return t.error(["unexpected-base", o.toString()], r.toString());
    let [s, a] = Fi(i, r.string ?? r.symbol ?? 10);
    return a ? t.error(["unexpected-digit", a[0]], a) : t.number(s);
  } }, IntegerString: { description: "`IntegerString(n, base=10)`       return a string representation of the integer `n` in base `base`.", threadable: true, signature: "(integer, integer?) -> string", evaluate: (e12, { engine: n }) => {
    let i = n, t = e12[0];
    if (t.type !== "integer") return i.typeError("integer", t.type, t);
    let r = t.re;
    if (!Number.isFinite(r)) return i.typeError("integer", t.type, t);
    let o = e12[1] ?? i.Nothing;
    if (o.symbol === "Nothing") return t.bignumRe !== void 0 ? i.string(t.bignumRe.abs().toString()) : i.string(Math.abs(r).toString());
    let s = z(o);
    return s === null ? i.typeError("integer", o.type, o) : s < 2 || s > 36 ? i.error(["out-of-range", "2", "36", s.toString()], o.toString()) : i.string(Math.abs(r).toString(s));
  } } }];
  function np(e12) {
    let n = e12.engine, i = e12.numericValue;
    if (i !== null) return typeof i == "number" ? n.number(Math.abs(i)) : n.number(i.abs());
    if (e12.isNonNegative) return e12;
    if (e12.isNegative) return e12.neg();
  }
  function Ju(e12, n) {
    let i = e12.engine, t = n === "Max" || n === "Supremum";
    if (e12.operator === "Interval") {
      let r = t ? e12.op2 : e12.op1;
      return !r.isNumber || r.numericValue === null ? [void 0, [e12]] : [r, []];
    }
    if (e12.operator === "Range") {
      let r = Qe(e12), o = Vu(r);
      return [i.number(Math.max(r[0], o)), []];
    }
    if (e12.operator === "Linspace") return e12.nops === 1 ? e12 = t ? e12.op1 : i.One : t ? e12 = e12.op2 : e12 = e12.op1, [e12, []];
    if (e12.isCollection) {
      let r, o = [];
      for (let s of ee(e12)) {
        let [a, u] = Ju(s, n);
        a && (r ? (t && a.isGreater(r) || !t && a.isLess(r)) && (r = a) : r = a), o.push(...u);
      }
      return [r, o];
    }
    return !e12.isNumber || e12.numericValue === null ? [void 0, [e12]] : [e12, []];
  }
  function Fr(e12, n, i) {
    let t = i === "Max" || i === "Supremum";
    if (n.length === 0) return t ? e12.NegativeInfinity : e12.PositiveInfinity;
    let r, o = [];
    for (let s of n) {
      let [a, u] = Ju(s, i);
      a && (r ? (t && a.isGreater(r) || !t && a.isLess(r)) && (r = a) : r = a), o.push(...u);
    }
    return o.length > 0 ? e12.box(r ? [i, r, ...o] : [i, ...o]) : r ?? (t ? e12.NegativeInfinity : e12.PositiveInfinity);
  }
  function Hu(e12, n) {
    let i = e12[0].engine, t = n === "LCM" ? Bi : sn, r = n === "LCM" ? hu : Yo, o = [];
    if (se(i)) {
      let a = null;
      for (let u of e12) if (a === null) a = Wo(u), (a === null || !a.isInteger()) && o.push(u);
      else {
        let l = Wo(u);
        l && l.isInteger() ? a = r(a, l) : o.push(u);
      }
      return o.length === 0 ? a === null ? i.One : i.number(a) : a === null ? i._fn(n, o) : i._fn(n, [i.number(a), ...o]);
    }
    let s = null;
    for (let a of e12) s === null ? g(a.type, "integer") && o.push(a) : a.isInteger ? s = t(s, a.re) : o.push(a);
    return o.length === 0 ? s === null ? i.One : i.number(s) : s === null ? i._fn(n, o) : i._fn(n, [i.number(s), ...o]);
  }
  function qr(e12) {
    if (!e12.isInteger || e12.isNegative || e12.numericValue === null) return;
    let i = z(e12);
    if (i !== null) return Po(i);
    let t = kt(e12);
    if (t !== null) return Ka(t);
  }
  var Ku = { boolean: (e12) => e12.type === "boolean", string: (e12) => e12.string !== null, number: (e12) => e12.isNumberLiteral, symbol: (e12) => e12.symbol !== null, expression: (e12) => true, numeric: (e12) => {
    let [n, i] = e12.toNumericValue();
    return i.is(1);
  }, integer: (e12) => e12.isInteger, rational: (e12) => e12.isRational, irrational: (e12) => e12.isRational === false, real: (e12) => e12.isReal, notreal: (e12) => !e12.isReal, complex: (e12) => g(e12.type, "complex"), imaginary: (e12) => e12.type === "imaginary", positive: (e12) => e12.isPositive, negative: (e12) => e12.isNegative, nonnegative: (e12) => e12.isNonNegative, nonpositive: (e12) => e12.isNonPositive, even: (e12) => e12.isEven, odd: (e12) => e12.isOdd, prime: (e12) => qr(e12) === true, composite: (e12) => qr(e12) === false, notzero: (e12) => e12.is(0) === false, notone: (e12) => e12.is(1) === false, finite: (e12) => e12.isFinite, infinite: (e12) => e12.isFinite === false, constant: (e12) => e12.symbolDefinition?.isConstant ?? false, variable: (e12) => !(e12.symbolDefinition?.isConstant ?? true), function: (e12) => e12.symbolDefinition?.isFunction ?? false, relation: (e12) => ke(e12.operator), equation: (e12) => e12.operator === "Equal", inequality: (e12) => Vn(e12), collection: (e12) => e12.isCollection, list: (e12) => e12.operator === "List", set: (e12) => e12.operator === "Set", tuple: (e12) => e12.operator === "Tuple" || e12.operator === "Single" || e12.operator === "Pair" || e12.operator === "Triple", single: (e12) => e12.operator === "Single", pair: (e12) => e12.operator === "Pair", triple: (e12) => e12.operator === "Triple", scalar: (e12) => e12.rank === 0, tensor: (e12) => e12.rank > 0, vector: (e12) => e12.rank === 1, matrix: (e12) => e12.rank === 2, unit: (e12) => e12.operator === "Unit", dimension: (e12) => e12.operator === "Dimension", angle: (e12) => e12.operator === "Angle", polynomial: (e12) => e12.unknowns.length === 1 };
  function el(e12, n) {
    for (let i of n) if (Ku[i](e12) !== true) return false;
    return true;
  }
  function ip(e12) {
    let n = /\\[a-zA-Z]+|[{}]|[\d]+|[+\-*/^_=()><,.;]|[a-zA-Z]/g, i = e12.match(n);
    return i ? i.filter((t) => !/^[ \f\n\r\t\v\xA0\u2028\u2029]+$/.test(t)) : [];
  }
  function tp(e12) {
    let n = e12.peek, i = null;
    if (n === "\\mathrm") e12.nextToken(), i = e12.parseStringGroup();
    else if (/^[a-z]$/.test(n)) for (i = e12.nextToken(); /^[a-z]$/.test(e12.peek); ) i += e12.nextToken();
    else {
      let t = { ">0": "positive", "\\gt0": "positive", "<0": "negative", "\\lt0": "negative", ">=0": "nonnegative", "\\geq0": "nonnegative", "<=0": "nonpositive", "\\leq0": "nonpositive", "!=0": "notzero", "\\neq0": "notzero", "\\neq1": "notone", "!=1": "notone", "\\in\\Z": "integer", "\\in\\mathbb{Z}": "integer", "\\in\\N": "natural", "\\in\\mathbb{N}": "natural", "\\in\\R": "real", "\\in\\mathbb{R}": "real", "\\in\\C": "complex", "\\in\\mathbb{C}": "complex", "\\in\\Q": "rational", "\\in\\mathbb{Q}": "rational", "\\in\\Z^+": "integer,positive", "\\in\\Z^-": "intger,negative", "\\in\\Z^*": "nonzero", "\\in\\R^+": "positive", "\\in\\R^-": "negative", "\\in\\R^*": "real,nonzero", "\\in\\N^*": "integer,positive", "\\in\\N_0": "integer,nonnegative", "\\in\\R\\backslash\\Q": "irrational" };
      for (let r in t) if (e12.matchAll(ip(r))) {
        i = t[r];
        break;
      }
    }
    if (!i) return null;
    if (!Object.keys(Ku).includes(i)) throw new Error(`Unexpected condition "${i}" in a rule`);
    return i;
  }
  function Yu(e12) {
    let n = [];
    do {
      let i = tp(e12);
      if (!i) break;
      n.push(i);
    } while (e12.match(","));
    return n.join(",");
  }
  function ys(e12) {
    let n = null;
    if (e12.match(":")) n = Yu(e12);
    else if (e12.matchAll(["_", "<{>"]) && (n = Yu(e12), !e12.match("<}>"))) return null;
    return n;
  }
  function Qu(e12, n, i) {
    if (!(n === void 0 || typeof n == "function")) {
      if (typeof n == "string") {
        let t = e12.parse(n, { canonical: i?.canonical ?? false });
        return t = t.map((r) => r.symbol && r.symbol.length === 1 ? e12.symbol("_" + r.symbol) : r, { canonical: false }), t;
      }
      return e12.box(n, { canonical: i?.canonical ?? false });
    }
  }
  function rp(e12, n, i) {
    let t = (d) => ({ kind: "symbol", latexTrigger: d, parse: (m, b) => {
      o[d] || (o[d] = `_${d}`);
      let y = ys(m);
      return y !== null && (s[d] ? s[d] += "," + y : s[d] = y), o[d];
    } }), r = e12.latexDictionary, o = {}, s = {};
    e12.latexDictionary = [...r, { kind: "prefix", precedence: 100, latexTrigger: "...", parse: (d, m) => {
      let b = d.nextToken();
      if (!"abcfghjklmnopqrstuvwxyz".includes(b)) return null;
      let y = "__";
      if (d.match("?") && (y = "___"), o[b] && o[b] !== `${y}${b}`) throw new Error(`Duplicate wildcard "${b}"`);
      o[b] || (o[b] = `${y}${b}`);
      let N = ys(d);
      return N === null ? null : (s[b] ? s[b] += "," + N : s[b] = N, `${y}${b}`);
    } }, ..."abcfghjklmnopqrstuvwxyz".split("").map(t), { kind: "infix", precedence: 100, latexTrigger: "->", parse: (d, m, b) => {
      let y = d.parseExpression({ ...b, minPrec: 20 });
      if (y === null) return null;
      let N = null;
      if (d.match(";")) {
        let _ = false, L = d.index;
        do {
          d.skipSpace();
          let be = d.nextToken();
          if (o[be]) {
            let Ne = ys(d);
            if (Ne === null || !Ne) {
              _ = true, d.index = L;
              break;
            }
            s[be] ? s[be] += "," + Ne : s[be] = Ne;
          }
        } while (!_ && !d.atEnd);
        N = d.parseExpression(b);
      }
      let T = [];
      for (let _ in s) {
        let L = s[_].split(",");
        L.length !== 0 && (L.length === 1 ? T.push(["Condition", o[_], L[0]]) : T.push(["Condition", o[_], ["And", ...L]]));
      }
      let R;
      return N && T.length > 0 ? R = ["And", N, ...T] : N ? R = N : T.length === 1 ? R = T[0] : T.length > 1 && (R = ["And", ...T]), R ? ["Rule", m, y, R] : ["Rule", m, y];
    } }];
    let a = e12.parse(n, { canonical: i?.canonical ?? false });
    if (e12.latexDictionary = r, !a.isValid || a.operator !== "Rule") throw new Error(`Invalid rule "${n}"
|   ${$r(a).toString()}
|   A rule should be of the form:
|   <match> -> <replace>; <condition>`);
    let [u, l, f] = a.ops;
    if (!Xu(l, u)) throw new Error(`Invalid rule "${n}"
|   The replace expression contains wildcards not present in the match expression`);
    if (u.isSame(l)) throw new Error(`Invalid rule "${n}"
|   The match and replace expressions are the same.
|   This may be because the rule is not necessary due to canonical simplification`);
    let c;
    if (f !== void 0) {
      if (!Xu(f, u)) throw new Error(`Invalid rule "${n}"
|   The condition expression contains wildcards not present in the match expression`);
      c = (d) => f.subs(d).evaluate()?.symbol === "True";
    }
    return nl(e12, { match: u, replace: l, condition: c, id: n }, i);
  }
  function nl(e12, n, i) {
    if (n == null) throw new Error("Expected a rule, not " + n);
    if (ya(n)) return n;
    if (typeof n == "string") return rp(e12, n, i);
    if (typeof n == "function") return { _tag: "boxed-rule", match: void 0, replace: n, condition: void 0, id: n.toString().replace(/\n/g, " ") };
    let { match: t, replace: r, condition: o, id: s } = n;
    if (r === void 0) throw new Error(`Invalid rule "${s ?? JSON.stringify(n)}"
|   A rule must include at least a replace property`);
    let a;
    if (typeof o == "string") {
      let f = $n(o);
      if (f) {
        let c = e12.parse(f, { canonical: i?.canonical ?? false });
        a = (d, m) => c.subs(d).evaluate()?.symbol === "True";
      }
    } else {
      if (o !== void 0 && typeof o != "function") throw new Error(`Invalid rule ${s ?? JSON.stringify(n)}
|   condition is not a valid function`);
      a = o;
    }
    if (typeof t == "function") throw new Error(`Invalid rule ${s ?? JSON.stringify(n)}
|   match is not a valid expression.
|   Use a replace function instead to validate and replace the expression`);
    let u = Qu(e12, t, i), l = Qu(e12, r, i);
    if (s || (typeof t == "string" ? s = t : s = JSON.stringify(t), r && (s += " -> ", typeof r == "string" ? s += r : typeof r == "function" ? s += r?.toString().replace(/\n/g, " ") : s = JSON.stringify(r)), typeof o == "string" ? s += `; ${o}` : typeof o == "function" && (s += `; ${o.toString().replace(/\n/g, " ")}`)), u && !u.isValid) throw new Error(`Invalid rule ${s}
|   the match expression is not valid: ${u.toString()}`);
    if (l && !l.isValid) throw new Error(`Invalid rule ${s ?? JSON.stringify(n)}
|   The replace expression is not valid: ${l?.toString()}`);
    if (!l && typeof r != "function") throw new Error(`Invalid rule ${s ?? JSON.stringify(n)}
|   The replace expression could not be parsed`);
    return { _tag: "boxed-rule", match: u, replace: l ?? r, condition: a, useVariations: n.useVariations, id: s };
  }
  function Ut(e12, n, i) {
    if (!n) return { rules: [] };
    if (typeof n == "object" && "rules" in n) return n;
    Array.isArray(n) || (n = [n]);
    let t = [];
    for (let r of n) try {
      t.push(nl(e12, r, i));
    } catch (o) {
      throw new Error(`
${o.message}
|   Skipping rule ${JSON.stringify(r)}

`);
    }
    return { rules: t };
  }
  function bs(e12, n, i, t) {
    let r = t?.canonical ?? (n.isCanonical || n.isStructural), o = false;
    if (n.ops && t?.recursive) {
      let b = n.ops.map((y) => {
        let N = bs(e12, y, {}, t);
        return N ? (o = true, N.value) : y;
      });
      o && (n = n.engine.function(n.operator, b, { canonical: r }));
    }
    let { match: s, replace: a, condition: u, id: l } = e12, f = l ?? "";
    if (r && s) {
      let b = Gt(s), y = s;
      s = s.canonical;
      let N = Gt(s);
      if (!b.every((T) => N.includes(T))) throw new Error(`
|   Invalid rule "${e12.id}"
|   The canonical form of ${$r(y).toString()} is "${$r(s).toString()}" and it does not contain all the wildcards of the original match.
|   This could indicate that the match expression in canonical form is already simplified and this rule may not be necessary`);
    }
    let c = e12.useVariations ?? t?.useVariations ?? false, d = s ? n.match(s, { substitution: i, ...t, useVariations: c }) : {};
    if (d === null) return o ? { value: n, because: f } : null;
    if (typeof u == "function") {
      let b = { ...Object.fromEntries(Object.entries(d).map(([y, N]) => [y.slice(1), N])), ...d };
      try {
        if (!u(b, n.engine)) return o ? { value: n, because: f } : null;
      } catch (y) {
        return console.error(`
|   Rule "${e12.id}"
|   Error while checking condition
|    ${y.message}`), null;
      }
    }
    let m = typeof a == "function" ? a(n, d) : a.subs(d, { canonical: r });
    return m ? xa(m) ? r ? { ...m, value: m.value.canonical } : m : { value: r ? m.canonical : m, because: f } : null;
  }
  function Dn(e12, n, i) {
    if (!n) throw new Error("replace(): Expected one or more rules");
    let t = i?.iterationLimit ?? 1, r = 0, o = i?.once ?? false, s;
    typeof n == "object" && "rules" in n ? s = n.rules : s = e12.engine.rules(Array.isArray(n) ? n : [n]).rules;
    let a = false, u = [];
    for (; !a && r < t; ) {
      a = true;
      for (let l of s) try {
        let f = bs(l, e12, {}, i);
        if (f !== null && f.value !== e12 && !f.value.isSame(e12)) {
          if (o) return [f];
          if (u.some((c) => c.value.isSame(f.value))) return u;
          u.push(f), a = false, e12 = f.value;
        }
      } catch (f) {
        return console.error(`
${e12.toString()}
${l.id}
${f.message}`), u;
      }
      r += 1;
    }
    return u;
  }
  function jt(e12, n, i, t) {
    let r = [];
    for (let o of n.rules) {
      let s = bs(o, e12, i, t);
      s !== null && !r.some((a) => a.isSame(s.value)) && r.push(s.value);
    }
    return r;
  }
  function $r(e12) {
    let n = e12.symbol;
    if (n && n.startsWith("_")) return e12.engine.symbol(n.slice(1));
    if (e12.ops) {
      let i = e12.ops.map((t) => $r(t));
      return e12.engine.function(e12.operator, i, { canonical: false });
    }
    return e12;
  }
  function Gt(e12) {
    let n = [];
    return e12.symbol && e12.symbol.startsWith("_") && n.push(e12.symbol), e12.ops && e12.ops.forEach((i) => n.push(...Gt(i))), n;
  }
  function Xu(e12, n) {
    let i = Gt(e12), t = Gt(n);
    return i.every((r) => t.includes(r));
  }
  var tl = [{ match: ["Multiply", "_x", "__a"], replace: 0, id: "ax", condition: ({ __a: e12 }) => !e12.has("_x") }, { match: ["Add", ["Divide", "_a", "_x"], "__b"], replace: 1 / 0, useVariations: true, condition: ({ _a: e12, __b: n }) => !e12.has("_x") && !n.has("_x") }, { match: ["Add", ["Multiply", "_x", "__a"], "__b"], replace: ["Divide", ["Negate", "__b"], "__a"], useVariations: true, condition: ({ __a: e12, __b: n }) => !e12.has("_x") && !n.has("_x") }, { match: ["Add", ["Multiply", "_a", ["Power", "_x", "_n"]], "__b"], replace: ["Power", ["Divide", ["Negate", "__b"], "_a"], ["Divide", 1, "_n"]], useVariations: true, condition: ({ _a: e12, __b: n, _n: i }) => !e12.has("_x") && !n.has("_x") && !i.is(0) }, { match: ["Add", ["Multiply", "_a", ["Power", "_x", "_n"]], "__b"], replace: ["Negate", ["Power", ["Divide", ["Negate", "__b"], "_a"], ["Divide", 1, "_n"]]], useVariations: true, condition: ({ _a: e12, __b: n, _n: i }) => !e12.has("_x") && !n.has("_x") && !i.is(0) && (i.isEven ?? false) }, { match: ["Add", ["Multiply", "__a", ["Power", "_x", 2]], ["Multiply", "__b", "_x"], "__c"], replace: ["Divide", ["Add", ["Negate", "__b"], ["Sqrt", ["Subtract", ["Square", "__b"], ["Multiply", 4, "__a", "__c"]]]], ["Multiply", 2, "__a"]], useVariations: true, condition: ({ __a: e12, __b: n, __c: i }) => !e12.has("_x") && !n.has("_x") && !i.has("_x") }, { match: ["Add", ["Multiply", "__a", ["Power", "_x", 2]], ["Multiply", "__b", "_x"], "__c"], replace: ["Divide", ["Subtract", ["Negate", "__b"], ["Sqrt", ["Subtract", ["Square", "__b"], ["Multiply", 4, "__a", "__c"]]]], ["Multiply", 2, "__a"]], useVariations: true, condition: ({ __a: e12, __b: n, __c: i }) => !e12.has("_x") && !n.has("_x") && !i.has("_x") }, { match: ["Add", ["Multiply", "__a", ["Exp", ["Multiply", "__b", "_x"]]], "__c"], replace: ["Divide", ["Ln", ["Negate", ["Divide", "__c", "__a"]]], "__b"], useVariations: true, condition: ({ __a: e12, __c: n }) => ((!e12.is(0) && n.div(e12).isNegative) ?? false) && !e12.has("_x") && !n.has("_x") }, { match: ["Add", ["Multiply", "__a", ["Exp", "_x"]], "__c"], replace: ["Ln", ["Negate", ["Divide", "__c", "__a"]]], useVariations: true, condition: ({ __a: e12, __c: n }) => ((!e12.is(0) && n.div(e12).isNegative) ?? false) && !e12.has("_x") && !n.has("_x") }, { match: ["Add", ["Exp", "_x"], "__c"], replace: ["Ln", ["Negate", "__c"]], useVariations: true, condition: ({ __c: e12 }) => e12.isNegative ?? false }, { match: ["Add", ["Exp", ["Multiply", "__b", "_x"]], "__c"], replace: ["Divide", ["Ln", ["Negate", "__c"]], "__b"], useVariations: true, condition: ({ __c: e12 }) => e12.isNegative ?? false }, { match: ["Add", ["Multiply", "__a", ["Log", "_x", "__b"]], "__c"], replace: ["Power", "__b", ["Negate", ["Divide", "__c", "__a"]]], useVariations: true, condition: ({ __a: e12, __b: n }) => (!e12.is(0) && n.isPositive) ?? false }, { match: ["Multiply", "__a", ["Log", "_x", "__b"]], replace: ["Power", "__b", ["Negate", ["Divide", "__c", "__a"]]], useVariations: true, condition: ({ __a: e12, __b: n }) => (!e12.is(0) && n.isPositive) ?? false }, { match: ["Add", ["Abs", ["Add", ["Multiply", "__a", "_x"], "__b"]], "__c"], replace: ["Divide", ["Subtract", "__b", "__c"], "__a"] }, { match: ["Add", ["Abs", ["Add", ["Multiply", "__a", "_x"], "__b"]], "__c"], replace: ["Divide", ["Negate", ["Add", "__b", "__c"], "__a"]] }];
  function Vr(e12, n) {
    let i = e12.engine;
    e12.operator === "Equal" && (e12 = e12.op1.canonical.sub(e12.op2).simplify());
    let t = i.getRuleSet("solve-univariate"), r = [e12.subs({ [n]: "_x" }, { canonical: false })], o = r.flatMap((s) => jt(s, t, { _x: i.symbol("_x") }, { useVariations: true, canonical: true }));
    return o.length === 0 && (r = r.flatMap((s) => il(s)), o = r.flatMap((s) => jt(s, t, { _x: i.symbol(n) }))), o.length === 0 && (r = r.flatMap((s) => Me(s.canonical)).filter((s) => s !== null), r = r.flatMap((s) => il(s)), o = r.flatMap((s) => jt(s, t, { _x: i.symbol(n) }))), o.map((s) => s.evaluate().simplify());
  }
  var rl = [{ match: ["Add", ["Abs", ["Add", ["Multiply", "__a", "_x"], "__b"]], "__c"], replace: ["Add", ["Multiply", "__a", "_x"], "__b", "__c"] }, { match: ["Add", ["Abs", ["Add", ["Multiply", "__a", "_x"], "__b"]], "__c"], replace: ["Add", ["Negate", ["Multiply", "__a", "_x"]], ["Negate", "__b"], "__c"] }, { match: ["Multiply", "__a", ["Power", "_b", "_n"]], replace: "_b", condition: ({ __a: e12, _b: n, _n: i }) => !e12.has("_x") && n.has("_x") && !i.is(0) && !i.has("_x") }, { match: ["Multiply", "__a", ["Sqrt", "_b"]], replace: ["Multiply", ["Square", "_a"], "__b"], condition: ({ _b: e12 }) => e12.has("_x") }, { match: ["Divide", "_a", "_b"], replace: "_a", condition: ({ _a: e12, _b: n }) => e12.has("_x") && !n.is(0) }, { match: ["Multiply", "__a", "_b"], replace: "_b", condition: ({ __a: e12, _b: n }) => !e12.has("_x") && n.has("_x") }, { match: ["Add", ["Ln", "_a"], ["Ln", "_b"], "__c"], replace: ["Add", ["Ln", ["Multiply", "_a", "_b"]], "__c"] }, { match: ["Multiply", ["Exp", "__a"], ["Exp", "__b"], "__c"], replace: ["Multiply", ["Exp", ["Add", "_a", "_b"]], "__c"] }, { match: ["Ln", "_a"], replace: ["Subtract", "_a", 1], condition: ({ _a: e12 }) => e12.has("_x") }, { match: ["Sin", "_a"], replace: "_a", condition: ({ _a: e12 }) => e12.has("_x") }, { match: ["Cos", "_a"], replace: ["Subtract", "_a", ["Divide", "Pi", 2]], condition: ({ _a: e12 }) => e12.has("_x") }, { match: ["Tan", "_a"], replace: "_a", condition: ({ _a: e12 }) => e12.has("_x") }, { match: ["Add", ["Sin", "_a"], ["Cos", "_a"]], replace: 1, condition: ({ _a: e12 }) => e12.has("_x") }, { match: ["Subtract", ["Square", ["Sin", "_a"]], ["Square", ["Cos", "_a"]]], replace: ["PlusMinus", ["Sin", "_a"], ["Divide", ["Sqrt", 2], 2]], condition: ({ _a: e12 }) => e12.has("_x") }];
  function il(e12) {
    let n = e12.engine, i = n.getRuleSet("harmonization");
    return jt(e12, i, { _x: n.symbol("_x") });
  }
  function ol(e12) {
    if (e12.operator === "Element") return ap(e12);
    if (e12.operator === "Equal") return op(e12);
    if (Vn(e12)) return sp(e12);
    throw new Error("Unsupported assumption. Use `Element`, `Equal` or an inequality");
  }
  function op(e12) {
    e12.operator;
    let n = e12.unknowns;
    if (n.length === 0) {
      let r = e12.evaluate();
      return r.symbol === "True" ? "tautology" : r.symbol === "False" ? "contradiction" : (e12.canonical.evaluate(), "not-a-predicate");
    }
    let i = e12.engine, t = e12.op1.symbol;
    if (t && !lp(i, t) && !e12.op2.has(t)) {
      let r = e12.op2.evaluate();
      if (!r.isValid) return "not-a-predicate";
      let o = i.lookupSymbol(t);
      return o ? o.type && !g(r.type, o.type) && !o.inferredType ? "contradiction" : (o.value = r, o.inferredType && (o.type = r.type), "ok") : (i.defineSymbol(t, { value: r }), "ok");
    }
    if (n.length === 1) {
      let r = n[0], o = Vr(e12, r);
      o.length === 0 && i.assumptions.set(i.function("Equal", [e12.op1.sub(e12.op2), 0]), true);
      let s = o.length === 1 ? o[0] : i.function("List", o), a = i.lookupSymbol(r);
      return a ? a.type && !o.every((u) => !u.type || g(s.type, u.type)) ? "contradiction" : (a.value = s, "ok") : (i.defineSymbol(r, { value: s }), "ok");
    }
    return i.assumptions.set(e12, true), "ok";
  }
  function sp(e12) {
    let n = e12.engine;
    if (e12.op1.symbol && !Es(n, e12.op1.symbol)) return e12.op2.is(0) ? e12.operator === "Less" ? n.defineSymbol(e12.op1.symbol, { type: "real", flags: { sgn: "negative" } }) : e12.operator === "LessEqual" ? n.defineSymbol(e12.op1.symbol, { type: "real", flags: { sgn: "non-positive" } }) : e12.operator === "Greater" ? n.defineSymbol(e12.op1.symbol, { type: "real", flags: { sgn: "positive" } }) : e12.operator === "GreaterEqual" && n.defineSymbol(e12.op1.symbol, { type: "real", flags: { sgn: "non-negative" } }) : (n.defineSymbol(e12.op1.symbol, { type: "real" }), n.assumptions.set(e12, true)), "ok";
    let i = "", t, r;
    if (e12.operator === "Less" ? (t = e12.op1, r = e12.op2, i = "<") : e12.operator === "LessEqual" ? (t = e12.op1, r = e12.op2, i = "<=") : e12.operator === "Greater" ? (t = e12.op2, r = e12.op1, i = "<") : e12.operator === "GreaterEqual" && (t = e12.op2, r = e12.op1, i = "<="), !i) return "internal-error";
    let o = t.sub(r), s = n.box([i === "<" ? "Less" : "LessEqual", o, 0]).evaluate();
    if (s.symbol === "True") return "tautology";
    if (s.symbol === "False") return "contradiction";
    let a = s.unknowns;
    return a.length === 0 ? "not-a-predicate" : (a.length === 1 && (n.lookupSymbol(a[0]) || n.defineSymbol(a[0], { type: "real" })), s.operator === "Less" || s.operator, n.assumptions.set(s, true), "ok");
  }
  function ap(e12) {
    e12.operator;
    let n = e12.engine, i = up(e12.op1);
    if (i.length === 1) {
      let r = e12.op2.evaluate();
      if (!r.isValid) return "not-a-predicate";
      let o = Nr(r);
      if (o === "unknown") throw new Error(`Invalid domain "${r.toString()}"`);
      return n.declare(i[0], o), "ok";
    }
    if (e12.op1.symbol && Es(n, e12.op1.symbol)) {
      let r = e12.op2.evaluate();
      if (!r.isValid) return "not-a-predicate";
      let o = Nr(r);
      n.context?.ids?.has(e12.op1.symbol) || n.declare(e12.op1.symbol, Nr(r));
      let s = n.lookupSymbol(e12.op1.symbol);
      if (s) return s.type && !g(o, s.type) ? "contradiction" : (s.type = o, "ok");
      let a = n.lookupFunction(e12.op1.symbol);
      return a ? g(o, Qn(a.signature)) ? "ok" : "contradiction" : "not-a-predicate";
    }
    if (i.length > 0) return n.assumptions.set(e12, true), "ok";
    let t = e12.evaluate();
    return t.symbol === "True" ? "tautology" : t.symbol === "False" ? "contradiction" : "not-a-predicate";
  }
  function Es(e12, n) {
    return (e12.lookupSymbol(n) ?? e12.lookupFunction(n)) !== void 0;
  }
  function up(e12) {
    return e12.symbols.filter((n) => !Es(e12.engine, n));
  }
  function lp(e12, n) {
    return e12.lookupFunction(n) ? false : e12.lookupSymbol(n)?.value !== void 0;
  }
  var Ns;
  function ul(e12) {
    if (!Ns) {
      let i = `^[${["Zyyy", "Zinh", "Arab", "Armn", "Beng", "Bopo", "Cyrl", "Deva", "Ethi", "Geor", "Grek", "Gujr", "Guru", "Hang", "Hani", "Hebr", "Hira", "Kana", "Knda", "Khmr", "Laoo", "Latn", "Mlym", "Mymr", "Orya", "Sinh", "Taml", "Telu", "Thaa", "Thai", "Tibt"].map((t) => `\\p{Script=${t}}`).join("")}]*$`;
      Ns = new RegExp(i, "u");
    }
    return Ns.test(e12);
  }
  function xe(e12) {
    return /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(e12) || Xi.test(e12) ? true : ul(e12) ? /^[\p{XIDS}_]\p{XIDC}*$/u.test(e12) : false;
  }
  var fp = "\\u{FE0F}";
  var cp = "\\u{20E3}";
  var dp = "\\u{200D}";
  var pp = "\\p{RI}\\p{RI}";
  var mp = "(?:[\\u{E0020}-\\u{E007E}]+\\u{E007F})";
  var sl = `(?:\\p{EMod}|${fp}${cp}?|${mp})`;
  var gp = "(?:(?=\\P{XIDC})\\p{Emoji})";
  var al = `(?:${gp}${sl}*|\\p{Emoji}${sl}+|${pp})`;
  var ll = `(?:${al})(${dp}${al})*`;
  var hp = new RegExp(`(?:${ll})+`, "u");
  var Xi = new RegExp(`^(?:${ll})+$`, "u");
  function Xe(e12) {
    return typeof e12 != "string" ? "not-a-string" : e12 === "" ? "empty-string" : e12.normalize() !== e12 ? "expected-nfc" : /[\u200E\u200F\u2066-\u2069\u202A-\u202E]/.test(e12) ? "unexpected-bidi-marker" : Xi.test(e12) ? "valid" : /\p{XIDC}/u.test(e12) && hp.test(e12) ? "unexpected-mixed-emoji" : ul(e12) ? xe(e12) ? "valid" : xe(e12[0]) ? "invalid-char" : "invalid-first-char" : "unexpected-script";
  }
  function zr(e12, n, i, t = 1e5) {
    let r = 0;
    if (n === -1 / 0 && i === 1 / 0) for (let o = 0; o < t; o++) {
      let s = Math.random(), a = Math.tan(Math.PI * (s - 0.5)), u = Math.PI * (1 + a * a);
      r += e12(a) / u;
    }
    else if (n === -1 / 0) for (let o = 0; o < t; o++) {
      let s = Math.random(), a = i - Math.log(1 - s), u = 1 / (1 - s);
      r += e12(a) / u;
    }
    else if (i === 1 / 0) for (let o = 0; o < t; o++) {
      let s = Math.random(), a = n + Math.log(s), u = 1 / s;
      r += e12(a) / u;
    }
    else for (let o = 0; o < t; o++) r += e12(n + Math.random() * (i - n));
    return r / t * (i - n);
  }
  function Gr(e12) {
    let n = 0, i = 0;
    for (let t of e12) n += t, i++;
    return i === 0 ? NaN : n / i;
  }
  function fl(e12, n) {
    let i = e12(0), t = 0;
    for (let r of n) i = i.add(r), t++;
    return t === 0 ? e12(NaN) : i.div(t);
  }
  function Rn(e12) {
    let n = [...e12].sort((t, r) => t - r), i = Math.floor(n.length / 2);
    return n.length % 2 === 0 ? (n[i - 1] + n[i]) / 2 : n[i];
  }
  function di(e12) {
    let n = [...e12].sort((t, r) => t.cmp(r)), i = Math.floor(n.length / 2);
    return n.length % 2 === 0 ? n[i - 1].add(n[i]).div(2) : n[i];
  }
  function Ki(e12) {
    let n = 0, i = 0, t = 0;
    for (let r of e12) n += r, i += r * r, t++;
    return t === 0 ? NaN : (i - n * n / t) / (t - 1);
  }
  function vs(e12, n) {
    let i = e12(0), t = e12(0), r = 0;
    for (let o of n) i = i.add(o), t = t.add(o.mul(o)), r++;
    return r === 0 ? e12(NaN) : t.sub(i.mul(i).div(r)).div(r - 1);
  }
  function et(e12) {
    let n = 0, i = 0, t = 0;
    for (let r of e12) n += r, i += r * r, t++;
    return t === 0 ? NaN : (i - n * n / t) / t;
  }
  function Ss(e12, n) {
    let i = e12(0), t = e12(0), r = 0;
    for (let o of n) i = i.add(o), t = t.add(o.mul(o)), r++;
    return r === 0 ? e12(NaN) : t.sub(i.mul(i).div(r)).div(r);
  }
  function cl(e12) {
    return Math.sqrt(Ki(e12));
  }
  function dl(e12) {
    return Math.sqrt(et(e12));
  }
  function Ur(e12) {
    let n = 0, i = 0, t = 0, r = 0;
    for (let s of e12) {
      let a = s;
      if (!Number.isFinite(a)) return NaN;
      n += a, i += a * a, t += a * a * a * a, r++;
    }
    if (r === 0) return NaN;
    let o = (i - n * n / r) / (r - 1);
    return (t - 4 * n * i / r + 6 * n * n * n / r / r - 3 * n * n * n * n / r / r / r) / (o * o);
  }
  function pl(e12, n) {
    let i = e12(0), t = e12(0), r = e12(0), o = 0;
    for (let a of n) {
      let u = a;
      if (!u.isFinite()) return e12(NaN);
      i = i.add(u), t = t.add(u.mul(u)), r = r.add(u.mul(u).mul(u).mul(u)), o++;
    }
    if (o === 0) return e12(NaN);
    let s = t.sub(i.mul(i).div(o)).div(o - 1);
    return r.sub(i.mul(t).mul(4).div(o)).add(i.mul(i).mul(i).mul(6).div(o).div(o)).sub(i.mul(i).mul(i).mul(i).div(o).div(o).div(o)).div(s.mul(s));
  }
  function jr(e12) {
    let n = 0, i = 0, t = 0, r = 0;
    for (let a of e12) {
      let u = a;
      if (!Number.isFinite(u)) return NaN;
      n += u, i += u * u, t += u * u * u, r++;
    }
    if (r === 0) return NaN;
    let o = (i - n * n / r) / (r - 1);
    return (t - i * n / r) / (r - 1) / Math.pow(o, 3 / 2) * Math.sqrt(r * 1);
  }
  function ml(e12, n) {
    let i = e12(0), t = e12(0), r = e12(0), o = 0;
    for (let u of n) {
      let l = u;
      if (!l.isFinite()) return e12(NaN);
      i = i.add(l), t = t.add(l.mul(l)), r = r.add(l.mul(l).mul(l)), o++;
    }
    if (o === 0) return e12(NaN);
    let s = t.sub(i.mul(i).div(o)).div(o - 1);
    return r.sub(t.mul(i).div(o)).div(o - 1).div(s.pow(3 / 2)).mul(o).sqrt();
  }
  function Zr(e12) {
    let n = {};
    for (let r of e12) n[r] = (n[r] ?? 0) + 1;
    let i = 0, t = NaN;
    for (let r in n) {
      let o = n[r];
      o > i && (i = o, t = +r);
    }
    return t;
  }
  function gl(e12, n) {
    let i = {};
    for (let o of n) i[o.toString()] = (i[o.toString()] ?? 0) + 1;
    let t = 0, r = e12(NaN);
    for (let o in i) {
      let s = i[o];
      s > t && (t = s, r = e12(o));
    }
    return r;
  }
  function Hr(e12) {
    let n = [...e12].sort((s, a) => s - a), i = Math.floor(n.length / 2), t = Rn(n.slice(0, i)), r = Rn(n), o = Rn(n.slice(i));
    return [t, r, o];
  }
  function hl(e12) {
    let n = [...e12].sort((s, a) => s.cmp(a)), i = Math.floor(n.length / 2), t = di(n.slice(0, i)), r = di(n), o = di(n.slice(i));
    return [t, r, o];
  }
  function Wr(e12) {
    let n = [...e12].sort((o, s) => o - s), i = Math.floor(n.length / 2), t = n.slice(0, i), r = n.slice(i + 1);
    return Rn(r) - Rn(t);
  }
  function xl(e12) {
    let n = [...e12].sort((o, s) => o.cmp(s)), i = Math.floor(n.length / 2), t = n.slice(0, i), r = n.slice(i + 1);
    return di(r).sub(di(t));
  }
  var xp = { Add: ["+", 11], Negate: ["-", 14], Subtract: ["-", 11], Multiply: ["*", 12], Divide: ["/", 13], Equal: ["===", 8], NotEqual: ["!==", 8], LessEqual: ["<=", 9], GreaterEqual: [">=", 9], Less: ["<", 9], Greater: [">", 9], And: ["&&", 4], Or: ["||", 3], Not: ["!", 14] };
  var yp = { Abs: "Math.abs", Add: (e12, n) => e12.length === 1 ? n(e12[0]) : `(${e12.map((i) => n(i)).join(" + ")})`, Arccos: "Math.acos", Arcosh: "Math.acosh", Arccot: ([e12], n) => {
    if (e12 === null) throw new Error("Arccot: no argument");
    return `Math.atan(1 / (${n(e12)}))`;
  }, Arccoth: ([e12], n) => {
    if (e12 === null) throw new Error("Arccoth: no argument");
    return `Math.atanh(1 / (${n(e12)}))`;
  }, Arccsc: ([e12], n) => {
    if (e12 === null) throw new Error("Arccsc: no argument");
    return `Math.asin(1 / (${n(e12)}))`;
  }, Arccsch: ([e12], n) => {
    if (e12 === null) throw new Error("Arccsch: no argument");
    return `Math.asinh(1 / (${n(e12)}))`;
  }, Arcsec: ([e12], n) => {
    if (e12 === null) throw new Error("Arcsec: no argument");
    return `Math.acos(1 / (${n(e12)}))`;
  }, Arcsech: ([e12], n) => {
    if (e12 === null) throw new Error("Arcsech: no argument");
    return `Math.acosh(1 / (${n(e12)}))`;
  }, Arcsin: "Math.asin", Arsinh: "Math.asinh", Arctan: "Math.atan", Artanh: "Math.atanh", Ceiling: "Math.ceil", Chop: "_SYS.chop", Cos: "Math.cos", Cosh: "Math.cosh", Cot: ([e12], n) => {
    if (e12 === null) throw new Error("Cot: no argument");
    return yl("Math.cos(${x}) / Math.sin(${x})", n(e12));
  }, Coth: ([e12], n) => {
    if (e12 === null) throw new Error("Coth: no argument");
    return yl("(Math.cosh(${x}) / Math.sinh(${x}))", n(e12));
  }, Csc: ([e12], n) => {
    if (e12 === null) throw new Error("Csc: no argument");
    return `1 / Math.sin(${n(e12)})`;
  }, Csch: ([e12], n) => {
    if (e12 === null) throw new Error("Csch: no argument");
    return `1 / Math.sinh(${n(e12)})`;
  }, Exp: "Math.exp", Floor: "Math.floor", Gamma: "_SYS.gamma", GCD: "_SYS.gcd", Integrate: (e12, n, i) => Np(e12, n, i), LCM: "_SYS.lcm", Limit: (e12, n) => `_SYS.limit(${n(e12[0])}, ${n(e12[1])})`, Ln: "Math.log", List: (e12, n) => `[${e12.map((i) => n(i)).join(", ")}]`, Log: (e12, n) => e12.length === 1 ? `Math.log10(${n(e12[0])})` : `(Math.log(${n(e12[0])}) / Math.log(${n(e12[1])}))`, LogGamma: "_SYS.lngamma", Lb: "Math.log2", Max: "Math.max", Mean: (e12, n) => e12.length === 0 ? "NaN" : e12.length === 1 ? `_SYS.mean(${n(e12[0])})` : `_SYS.mean([${e12.map((i) => n(i)).join(", ")}])`, Median: (e12, n) => e12.length === 0 ? "NaN" : e12.length === 1 ? `_SYS.median(${n(e12[0])})` : `_SYS.median([${e12.map((i) => n(i)).join(", ")}])`, Variance: (e12, n) => e12.length === 0 ? "NaN" : e12.length === 1 ? `_SYS.variance(${n(e12[0])})` : `_SYS.variance([${e12.map((i) => n(i)).join(", ")}])`, PopulationVariance: (e12, n) => e12.length === 0 ? "NaN" : e12.length === 1 ? `_SYS.populationVariance(${n(e12[0])})` : `_SYS.populationVariance([${e12.map((i) => n(i)).join(", ")}])`, StandardDeviation: (e12, n) => e12.length === 0 ? "NaN" : e12.length === 1 ? `_SYS.standardDeviation(${n(e12[0])})` : `_SYS.standardDeviation([${e12.map((i) => n(i)).join(", ")}])`, PopulationStandardDeviation: (e12, n) => e12.length === 0 ? "NaN" : e12.length === 1 ? `_SYS.populationStandardDeviation(${n(e12[0])})` : `_SYS.populationStandardDeviation([${e12.map((i) => n(i)).join(", ")}])`, Kurtosis: (e12, n) => e12.length === 0 ? "NaN" : e12.length === 1 ? `_SYS.kurtosis(${n(e12[0])})` : `_SYS.kurtosis([${e12.map((i) => n(i)).join(", ")}])`, Skewness: (e12, n) => e12.length === 0 ? "NaN" : e12.length === 1 ? `_SYS.skewness(${n(e12[0])})` : `_SYS.skewness([${e12.map((i) => n(i)).join(", ")}])`, Mode: (e12, n) => e12.length === 0 ? "NaN" : e12.length === 1 ? `_SYS.mode(${n(e12[0])})` : `_SYS.mode([${e12.map((i) => n(i)).join(", ")}])`, Quartiles: (e12, n) => e12.length === 0 ? "NaN" : e12.length === 1 ? `_SYS.quartiles(${n(e12[0])})` : `_SYS.quartiles([${e12.map((i) => n(i)).join(", ")}])`, InterquartileRange: (e12, n) => e12.length === 0 ? "NaN" : e12.length === 1 ? `_SYS.interquartileRange(${n(e12[0])})` : `_SYS.interquartileRange([${e12.map((i) => n(i)).join(", ")}])`, Min: "Math.min", Power: (e12, n) => {
    let i = e12[0];
    if (i === null) throw new Error("Power: no argument");
    let t = e12[1].re;
    return t === 0.5 ? `Math.sqrt(${n(i)})` : t === 1 / 3 ? `Math.cbrt(${n(i)})` : t === 1 ? n(i) : t === -1 ? `(1 / (${n(i)}))` : t === -0.5 ? `(1 / Math.sqrt(${n(i)}))` : `Math.pow(${n(i)}, ${n(e12[1])})`;
  }, Range: (e12, n) => {
    if (e12.length === 0) return "[]";
    if (e12.length === 1) return `Array.from({length: ${n(e12[0])}}, (_, i) => i)`;
    let i = n(e12[0]), t = n(e12[1]), r = e12[2] ? n(e12[2]) : "1";
    if (i === null) throw new Error("Range: no start");
    if (t === null && (t = i, i = "1"), r === "0") throw new Error("Range: step cannot be zero");
    if (parseFloat(r) === 1) {
      let o = parseFloat(t), s = parseFloat(i);
      return o !== null && s !== null ? o - s < 50 ? `[${Array.from({ length: o - s + 1 }, (a, u) => s + u).join(", ")}]` : `Array.from({length: ${o - s + 1} 
        }, (_, i) => ${i} + i)` : `Array.from({length: ${t} - ${i} + 1
      }, (_, i) => ${i} + i)`;
    }
    return `Array.from({length: Math.floor((${t} - ${i}) / ${r}) + 1}, (_, i) => ${i} + i * ${r})`;
  }, Root: ([e12, n], i) => {
    if (e12 === null) throw new Error("Root: no argument");
    return n === null ? `Math.sqrt(${i(e12)})` : n?.re === 2 ? `Math.sqrt(${i(e12)})` : n?.re === 3 ? `Math.cbrt(${i(e12)})` : isNaN(n?.re) ? `Math.pow(${i(e12)}, 1 / (${i(n)}))` : `Math.pow(${i(e12)},  ${1 / n.re})`;
  }, Random: "Math.random", Round: "Math.round", Square: (e12, n) => {
    let i = e12[0];
    if (i === null) throw new Error("Square: no argument");
    return `Math.pow(${n(i)}, 2)`;
  }, Sec: (e12, n) => {
    let i = e12[0];
    if (i === null) throw new Error("Sec: no argument");
    return `1 / Math.cos(${n(i)})`;
  }, Sech: (e12, n) => {
    let i = e12[0];
    if (i === null) throw new Error("Sech: no argument");
    return `1 / Math.cosh(${n(i)})`;
  }, Sgn: "Math.sign", Sin: "Math.sin", Sinh: "Math.sinh", Sqrt: "Math.sqrt", Tan: "Math.tan", Tanh: "Math.tanh" };
  var Ts = class extends Function {
    constructor(i, t = "") {
      super("_SYS", "_", `${t};return ${i}`);
      this.sys = { chop: tu, factorial: nu, gamma: Gi, gcd: sn, integrate: (i2, t2, r) => zr(i2, t2, r, 1e7), lcm: Bi, lngamma: qt, limit: ei, mean: Gr, median: Rn, variance: Ki, populationVariance: et, standardDeviation: cl, populationStandardDeviation: dl, kurtosis: Ur, skewness: jr, mode: Zr, quartiles: Hr, interquartileRange: Wr };
      return new Proxy(this, { apply: (r, o, s) => super.apply(o, [this.sys, ...s]), get: (r, o) => o === "toString" ? () => i : r[o] });
    }
  };
  function bp(e12, n) {
    let i = ye(e12, n);
    return new Ts(i, n.preamble);
  }
  function bl(e12, n, i, t = [], r) {
    let o = e12.unknowns, s = t.map((u) => {
      if (typeof u == "function") return u.toString();
      throw new Error(`Unsupported import \`${u}\``);
    }).join(`
`), a = n ? Object.fromEntries(Object.entries(n).filter((u, l) => typeof l != "string")) : {};
    if (n) for (let [u, l] of Object.entries(n)) typeof l == "function" && (vp(l) ? (s += `${l.toString()};
`, a[u] = l.name) : (s += `const ${u} = ${l.toString()};
`, a[u] = u));
    return bp(e12, { operators: (u) => xp[u], functions: (u) => a?.[u] ? a[u] : yp[u], var: (u) => {
      if (i && u in i) return JSON.stringify(i[u]);
      let l = { Pi: "Math.PI", ExponentialE: "Math.E", NaN: "Number.NaN", ImaginaryUnit: "Number.NaN", Half: "0.5", MachineEpsilon: "Number.EPSILON", GoldenRatio: "((1 + Math.sqrt(5)) / 2)", CatalanConstant: "0.91596559417721901", EulerGamma: "0.57721566490153286" }[u];
      if (l !== void 0) return l;
      if (o.includes(u)) return `_.${u}`;
    }, string: (u) => JSON.stringify(u), number: (u) => u.toString(), indent: 0, ws: (u) => u ?? "", preamble: (r ?? "") + s });
  }
  function El(e12, n, i, t, r) {
    if (n === "Error") throw new Error("Error");
    if (n === "Sequence") return i.length === 0 ? "" : `(${i.map((s) => ye(s, r, t)).join(", ")})`;
    if (n === "Sum" || n === "Product") return Ep(n, i, r);
    if (i.every((s) => !s.isCollection)) {
      let s = r.operators?.(n);
      if (ke(n) && i.length > 2 && s) {
        let a = [];
        for (let u = 0; u < i.length - 1; u++) a.push(El(e12, n, [i[u], i[u + 1]], s[1], r));
        return `(${a.join(") && (")})`;
      }
      if (s !== void 0) {
        if (i === null) return "";
        let a;
        return i.length === 1 ? a = `${s[0]}${ye(i[0], r, s[1])}` : a = i.map((u) => ye(u, r, s[1])).join(` ${s[0]} `), s[1] < t ? `(${a})` : a;
      }
    }
    if (n === "Function") {
      let s = i.slice(1).map((a) => a.symbol);
      return `((${s.join(", ")}) => ${ye(i[0].canonical, { ...r, var: (a) => s.includes(a) ? a : r.var(a) })})`;
    }
    if (n === "Declare") return `let ${i[0].symbol}`;
    if (n === "Assign") return `${i[0].symbol} = ${ye(i[1], r)}`;
    if (n === "Return") return `return ${ye(i[0], r)}`;
    if (n === "If") {
      if (i.length !== 3) throw new Error("If: wrong number of arguments");
      return `((${ye(i[0], r)}) ? (${ye(i[1], r)}) : (${ye(i[2], r)}))`;
    }
    if (n === "Block") {
      let s = [];
      for (let u of i) u.operator === "Declare" && s.push(u.ops[0].symbol);
      if (i.length === 1 && s.length === 0) return ye(i[0], r);
      let a = i.map((u) => ye(u, { ...r, var: (l) => s.includes(l) ? l : r.var(l) }));
      return a[a.length - 1] = `return ${a[a.length - 1]}`, `(() => {${r.ws(`
`)}${a.join(`;${r.ws(`
`)}`)}${r.ws(`
`)}})()`;
    }
    let o = r.functions?.(n);
    if (!o) throw new Error(`Unknown function \`${n}\``);
    if (typeof o == "function") {
      if (e12.lookupFunction(n)?.threadable && i.length === 1 && ie(i[0])) {
        let a = nt();
        return `(${ye(i[0], r)}).map((${a}) => ${o([i[0].engine.box(a)], (u) => ye(u, r), r)})`;
      }
      return o(i, (a) => ye(a, r), r);
    }
    return i === null ? `${o}()` : `${o}(${i.map((s) => ye(s, r)).join(", ")})`;
  }
  function ye(e12, n, i = 0) {
    if (e12 === void 0) return "";
    if (!e12.isValid) throw new Error(`Cannot compile invalid expression: "${e12.toString()}"`);
    let t = e12.symbol;
    if (t !== null) return n.var?.(t) ?? t;
    let r = e12.re;
    if (!isNaN(r)) {
      if (e12.im !== 0) throw new Error("Complex numbers are not supported");
      return n.number(r);
    }
    return e12.string !== null ? n.string(t) : El(e12.engine, e12.operator, e12.ops, i, n);
  }
  function Ep(e12, n, i) {
    if (n === null) throw new Error("Sum/Product: no arguments");
    if (!n[0]) throw new Error("Sum/Product: no body");
    let { index: t, lower: r, upper: o, isFinite: s } = Ji(n[1]), a = e12 === "Sum" ? "+" : "*";
    if (!t) {
      let c = nt(), d = nt();
      return `${ye(n[0], i)}.reduce((${d}, ${c}) => ${d} ${a} ${c}, ${a === "+" ? "0" : "1"})`;
    }
    let u = ye(n[0], { ...i, var: (c) => c === t ? t : i.var(c) }), l = nt(), f = nt();
    return `(() => {
  let ${f} = ${a === "+" ? "0" : "1"};
  let ${t} = ${r};
  const _fn = () => ${u};
  while (${l} <= ${o}) {
    ${f} ${a}= _fn();
    ${l}++;
  }
  return ${f};
})()`;
  }
  function yl(e12, n) {
    if (/^[\p{L}_][\p{L}\p{N}_]*$/u.test(n) || /^[0-9]+$/.test(n)) return new Function("x", `return \`${e12}\`;`)(n);
    {
      let t = nt();
      return new Function("x", `return \`(() => { const ${t} = \${x}; return ${e12.replace(/\\\${x}/g, t)}; })()\`;`)(n);
    }
  }
  function nt() {
    return `_${Math.random().toString(36).substring(4)}`;
  }
  function Np(e12, n, i) {
    let { index: t, lower: r, upper: o } = Ji(e12[1]), s = ye(e12[0], { ...i, var: (a) => a === t ? a : i.var(a) });
    return `_SYS.integrate((${t}) => (${s}), ${r}, ${o})`;
  }
  function vp(e12) {
    let n = e12.toString();
    return n.includes("=>") ? false : n.startsWith("function ") && n.includes(e12.name);
  }
  function Nl(e12, n) {
    return "normal";
  }
  function vl(e12, n) {
    return "normal";
  }
  function Sl(e12, n) {
    return n > 2 ? "solidus" : "radical";
  }
  function Tl(e12, n) {
    if (n > 3) return "inline-solidus";
    if (h(e12) === "Divide") {
      let [i, t] = v(e12), [r, o] = [Bt(i), Bt(t)];
      if (o <= 2 && r > 5) return "factor";
      if (r <= 2 && o > 5) return "reciprocal";
    }
    return "quotient";
  }
  function _l(e12, n) {
    return "boolean";
  }
  function Il(e12, n) {
    return "solidus";
  }
  function Bl(e12, n) {
    return "compact";
  }
  function it(e12, n, i) {
    e12.indexOf("#1") < 0 && e12.indexOf("#2") < 0 && (e12 = `#1 ${e12} #2`);
    let t = e12.split(/(#\d+)/).filter((r) => r.trim() !== "").map((r) => r.trim());
    return E(t.map((r) => {
      switch (r) {
        case "#1":
          return n;
        case "#2":
          return i;
        default:
          return r;
      }
    }));
  }
  function wl(e12, n, i) {
    if (i.repeatingDecimal && i.repeatingDecimal !== "none") {
      let o = e12.slice(0, -1);
      for (let s = 0; s < e12.length - 16; s++) {
        let a = o.substring(0, s);
        for (let u = 0; u < 17; u++) {
          let l = o.substring(s, s + u + 1), f = Math.floor((o.length - a.length) / l.length);
          if (f <= 3) break;
          if ((a + l.repeat(f + 1)).startsWith(o)) {
            if (l === "0") return _s(a, i);
            let c = { vinculum: "\\overline{#}", parentheses: "(#)", dots: "\\overset{\\cdots}{#1}#2\\overset{\\cdots}{#3}", arc: "\\wideparen{#}" }[i.repeatingDecimal] ?? "\\overline{#}";
            return c = c.replace(/#1/g, l[0]).replace(/#2/g, l.slice(1)).replace(/#3/g, l.slice(-1)).replace(/#/, l), _s(a, i) + c;
          }
        }
      }
    }
    let t = typeof i.fractionalDigits == "number" ? i.fractionalDigits : 1 / 0;
    t < 0 && (t = t - n), t < 0 && (t = 0);
    let r = e12.length > t;
    return r && (e12 = e12.substring(0, t)), e12 = _s(e12, i), r && (e12 += i.truncationMarker), e12;
  }
  function Dl(e12, n) {
    return !e12 || e12 === "0" ? "" : n.beginExponentMarker ? n.beginExponentMarker + e12 + (n.endExponentMarker ?? "") : `10^{${e12}}`;
  }
  function Rl(e12, n) {
    if (e12 === null) return "";
    let i;
    if (typeof e12 == "number" || typeof e12 == "string") i = e12;
    else if (typeof e12 == "object" && "num" in e12) i = e12.num;
    else return "";
    if (typeof i == "number") {
      if (i === 1 / 0) return n.positiveInfinity;
      if (i === -1 / 0) return n.negativeInfinity;
      if (Number.isNaN(i)) return n.notANumber;
      let o;
      return n.notation === "engineering" ? o = Jr(i.toExponential(), n, 3) : n.notation === "scientific" && (o = Jr(i.toExponential(), n)), o ?? Is(i.toString(), n);
    }
    if (i = i.toLowerCase().replace(/[\u0009-\u000d\u0020\u00a0]/g, ""), i === "infinity" || i === "+infinity") return n.positiveInfinity;
    if (i === "-infinity") return n.negativeInfinity;
    if (i === "nan") return n.notANumber;
    if (!/^[-+\.]?[0-9]/.test(i)) return "";
    if (i = i.replace(/[nd]$/, ""), /\([0-9]+\)/.test(i)) {
      let [o, s, a, u] = i.match(/(.+)\(([0-9]+)\)(.*)$/) ?? [];
      i = s + a.repeat(6) + u;
    }
    let t = "";
    for (i[0] === "-" ? (t = "-", i = i.substring(1)) : i[0] === "+" && (i = i.substring(1)); i[0] === "0"; ) i = i.substring(1);
    i.length === 0 ? i = "0" : i[0] === "." && (i = "0" + i);
    let r;
    return n.notation === "engineering" ? r = Jr(i, n, 3) : n.notation === "scientific" && (r = Jr(i, n)), t + (r ?? Is(i, n));
  }
  function Jr(e12, n, i = 1) {
    let t = e12.match(/^(.*)[e|E]([-+]?[0-9]+)$/);
    if (!t) {
      let f = "";
      if (e12[0] === "-" ? (f = "-", e12 = e12.substring(1)) : e12[0] === "+" && (e12 = e12.substring(1)), e12.indexOf(".") < 0) e12.length === 1 ? e12 = f + e12 + "e+0" : e12 = f + e12[0] + "." + e12.slice(1) + "e+" + (e12.length - 1).toString();
      else {
        let [c, d, m] = e12.match(/^(.*)\.(.*)$/);
        for (m || (m = ""); d.startsWith("0"); ) d = d.substring(1);
        d ? e12 = f + d[0] + "." + d.slice(1) + m + "e+" + (d.length - 1).toString() : e12 = f + "0." + m + "e+0";
      }
      t = e12.match(/^(.*)[e|E]([-+]?[0-9]+)$/);
    }
    if (!t) return Is(e12, n);
    let r = parseInt(t[2]), o = t[1];
    if (Math.abs(r) % i !== 0) {
      let f = r > 0 ? r % i : -((i + r) % i);
      r = r >= 0 ? r - f : r + f;
      let [c, d, m] = o.match(/^(.*)\.(.*)$/) ?? ["", o, ""];
      o = d + (m + "00000000000000000").slice(0, Math.abs(f)) + "." + m.slice(Math.abs(f));
    }
    let s = n.avoidExponentsInRange;
    if (s && r >= s[0] && r <= s[1]) return;
    let a = "", u = o;
    t = u.match(/^(.*)\.(.*)$/), t && (u = t[1], a = t[2]);
    let l = Dl(Number(r).toString(), n);
    if (a = wl(a, u.length, n), u = Ml(u, n), a && (a = n.decimalSeparator + a), !l) return u + a;
    if (!a) {
      if (u === "1") return l;
      if (u === "-1") return "-" + l;
    }
    return u + a + n.exponentProduct + l;
  }
  function Is(e12, n) {
    let i = e12.match(/^(.*)[e|E]([-+]?[0-9]+)$/i), t = 0;
    i?.[1] && i[2] && (t = parseInt(i[2]), e12 = i[1]);
    let r = i?.[1] ?? e12, o = "";
    i = e12.match(/^(.*)\.(.*)$/), i?.[1] && i[2] && (r = i[1], o = i[2]), t !== 0 && o && (r += o, t -= o.length, o = "");
    let s = n.avoidExponentsInRange;
    t !== 0 && s && t >= s[0] && t <= s[1] && ([r, o] = _p(r, o, t), t = 0);
    let a = Dl(t.toString(), n);
    if (o && (o = n.decimalSeparator + wl(o, r.length, n)), r = Ml(r, n), !a) return r + o;
    if (!o) {
      if (r === "1") return a;
      if (r === "-1") return "-" + a;
    }
    return r + o + n.exponentProduct + a;
  }
  function kl(e12, n, i) {
    let t = new RegExp(`(\\d{${n}})(?=\\d)`, "g");
    return e12.replace(t, `$1${i}`);
  }
  function Sp(e12, n, i) {
    let t = new RegExp(`(\\d{${n}})(?=\\d)`, "g"), r = i.split("").reverse().join("");
    return e12.split("").reverse().join("").replace(t, `$1${r}`).split("").reverse().join("");
  }
  function Tp(e12, n) {
    let i = e12.split("").reverse().join(""), t = n.split("").reverse().join(""), r = i.replace(/(\d{3})(?=\d)/, `$1${t}`);
    return r = r.replace(/(\d{2})(?=(\d{2})+,)/g, `$1${t}`), r.split("").reverse().join("");
  }
  function Al(e12, n, i) {
    let t = n.digitGroup;
    typeof t != "string" && Array.isArray(t) && (t = t[i]);
    let r = typeof n.digitGroupSeparator == "string" ? n.digitGroupSeparator : n.digitGroupSeparator[i];
    return r ? t === "lakh" ? i === 0 ? Tp(e12, r) : kl(e12, 3, r) : t === false || t <= 0 ? e12 : i === 1 ? kl(e12, t, r) : Sp(e12, t, r) : e12;
  }
  function _s(e12, n) {
    return Al(e12, n, 1);
  }
  function Ml(e12, n) {
    return Al(e12, n, 0);
  }
  function _p(e12, n, i) {
    let t = e12 + n, o = e12.length + i, s, a;
    return o > 0 ? o >= t.length ? (t = t + "0".repeat(o - t.length), s = t, a = "") : (s = t.slice(0, o), a = t.slice(o)) : (s = "0", a = "0".repeat(-o) + t), [s, a];
  }
  var un = [["alpha", "\\alpha", 945], ["beta", "\\beta", 946], ["gamma", "\\gamma", 947], ["delta", "\\delta", 948], ["epsilon", "\\epsilon", 949], ["epsilonSymbol", "\\varepsilon", 1013], ["zeta", "\\zeta", 950], ["eta", "\\eta", 951], ["theta", "\\theta", 952], ["thetaSymbol", "\\vartheta", 977], ["iota", "\\iota", 953], ["kappa", "\\kappa", 954], ["kappaSymbol", "\\varkappa", 1008], ["lambda", "\\lambda", 955], ["mu", "\\mu", 956], ["nu", "\\nu", 957], ["xi", "\\xi", 958], ["omicron", "\\omicron", 959], ["pi", "\\pi", 960], ["piSymbol", "\\varpi", 982], ["rho", "\\rho", 961], ["rhoSymbol", "\\varrho", 1009], ["sigma", "\\sigma", 963], ["finalSigma", "\\varsigma", 962], ["tau", "\\tau", 964], ["phi", "\\phi", 981], ["phiLetter", "\\varphi", 966], ["upsilon", "\\upsilon", 965], ["chi", "\\chi", 967], ["psi", "\\psi", 968], ["omega", "\\omega", 969], ["Alpha", "\\Alpha", 913], ["Beta", "\\Beta", 914], ["Gamma", "\\Gamma", 915], ["Delta", "\\Delta", 916], ["Epsilon", "\\Epsilon", 917], ["Zeta", "\\Zeta", 918], ["Eta", "\\Eta", 919], ["Theta", "\\Theta", 920], ["Iota", "\\Iota", 921], ["Kappa", "\\Kappa", 922], ["Lambda", "\\Lambda", 923], ["Mu", "\\Mu", 924], ["Nu", "\\Nu", 925], ["Xi", "\\Xi", 926], ["Omicron", "\\Omicron", 927], ["Rho", "\\Rho", 929], ["Sigma", "\\Sigma", 931], ["Tau", "\\Tau", 932], ["Phi", "\\Phi", 934], ["Upsilon", "\\Upsilon", 933], ["Chi", "\\Chi", 935], ["Psi", "\\Psi", 936], ["Omega", "\\Omega", 937], ["digamma", "\\digamma", 989], ["aleph", "\\aleph", 8501], ["bet", "\\beth", 8502], ["gimel", "\\gimel", 8503], ["dalet", "\\daleth", 8504], ["ell", "\\ell", 8499], ["turnedCapitalF", "\\Finv", 8498], ["turnedCapitalG", "\\Game", 8513], ["weierstrass", "\\wp", 8472], ["eth", "\\eth", 240], ["invertedOhm", "\\mho", 8487], ["hBar", "\\hbar", 295], ["hSlash", "\\hslash", 8463], ["blackClubSuit", "\\clubsuit", 9827], ["whiteHeartSuit", "\\heartsuit", 9825], ["blackSpadeSuit", "\\spadesuit", 9824], ["whiteDiamondSuit", "\\diamondsuit", 9826], ["sharp", "\\sharp", 9839], ["flat", "\\flat", 9837], ["natural", "\\natural", 9838]];
  var Cl = [...un.map(([e12, n, i]) => ({ kind: "symbol", name: e12, latexTrigger: [n], parse: e12 })), ...un.map(([e12, n, i]) => ({ kind: "symbol", latexTrigger: [String.fromCodePoint(i)], parse: e12 }))];
  function Bs(e12, n, i, t, r) {
    if (n && n.minPrec >= t) return null;
    let o = i ? [i] : ["Nothing"], s = false;
    for (; !s; ) {
      for (s = true, e12.skipSpace(); e12.match(r); ) o.push("Nothing"), e12.skipSpace();
      if (e12.atTerminator(n)) o.push("Nothing");
      else {
        let a = e12.parseExpression({ ...n, minPrec: t });
        o.push(a ?? "Nothing"), s = a === null;
      }
      s || (e12.skipSpace(), s = !e12.match(r));
    }
    return o;
  }
  function tt(e12 = "") {
    return (n, i) => {
      if (!i) return "";
      let t = v(i);
      if (t.length === 0) return "";
      if (t.length === 1) return n.serialize(t[0]);
      e12 = { "&": "\\&", ":": "\\colon", "|": "\\mvert", "-": "-", "\xB7": "\\cdot", "\u2012": "-", "\u2013": "--", "\u2014": "---", "\u2015": "-", "\u2022": "\\bullet", "\u2026": "\\ldots" }[e12] ?? e12;
      let r = t.reduce((o, s) => (o.push(n.serialize(s), e12), o), []);
      return r.pop(), E(r);
    };
  }
  var Pl = [{ latexTrigger: ["\\placeholder"], kind: "symbol", parse: (e12) => {
    for (; e12.match("<space>"); ) ;
    if (e12.match("[")) for (; !e12.match("]") && !e12.atBoundary; ) e12.nextToken();
    for (; e12.match("<space>"); ) ;
    if (e12.match("<{>")) for (; !e12.match("<}>") && !e12.atBoundary; ) e12.nextToken();
    return "Nothing";
  } }, { name: "Function", latexTrigger: ["\\mapsto"], kind: "infix", precedence: 270, parse: (e12, n) => {
    let i = [];
    if (h(n) === "Delimiter" && (n = p(n, 1) ?? "Nothing"), h(n) === "Sequence") for (let r of v(n)) {
      if (!D(r)) return null;
      i.push(D(r));
    }
    else {
      if (!D(n)) return null;
      i = [D(n)];
    }
    let t = e12.parseExpression({ minPrec: 270 }) ?? "Nothing";
    return h(t) === "Delimiter" && (t = p(t, 1) ?? "Nothing"), h(t) === "Sequence" && (t = ["Block", ...v(t)]), ["Function", t, ...i];
  }, serialize: (e12, n) => {
    let i = v(n);
    return i.length < 1 ? "()\\mapsto()" : i.length === 1 ? E(["()", "\\mapsto", e12.serialize(p(n, 1))]) : i.length === 2 ? E([e12.serialize(p(n, 2)), "\\mapsto", e12.serialize(p(n, 1))]) : E([e12.wrapString(v(n)?.slice(1).map((t) => e12.serialize(t)).join(", "), "normal"), "\\mapsto", e12.serialize(p(n, 1))]);
  } }, { name: "Apply", kind: "function", identifierTrigger: "apply", serialize: (e12, n) => {
    let i = p(n, 1), t = h(i);
    if (t === "InverseFunction" || t === "Derivative") {
      let s = e12.options.applyFunctionStyle(n, e12.level), a = v(n).slice(1);
      return e12.serializeFunction(i, e12.dictionary.ids.get(t)) + e12.wrapString(a.map((u) => e12.serialize(u)).join(", "), s);
    }
    let r = p(n, 2);
    if (typeof i == "string" || !r) {
      let s = v(n).slice(1);
      return e12.serialize(s);
    }
    if (J(n) === 2) return E([e12.wrap(i, 20), "\\lhd", e12.wrap(r, 20)]);
    let o = e12.options.applyFunctionStyle(n, e12.level);
    return E(["\\operatorname{apply}", e12.wrapString(e12.serialize(t) + ", " + e12.serialize(["List", ...v(n)]), o)]);
  } }, { latexTrigger: "\\lhd", kind: "infix", precedence: 20, parse: "Apply" }, { latexTrigger: "\\rhd", kind: "infix", precedence: 20, parse: (e12, n) => ["Apply", e12.parseExpression({ minPrec: 21 }) ?? "Nothing", n] }, { name: "Assign", latexTrigger: "\\coloneq", kind: "infix", associativity: "right", precedence: 260, serialize: (e12, n) => {
    let i = Zo(p(n, 1));
    if (h(p(n, 2)) === "Function") {
      let t = p(n, 2), r = Zo(p(t, 1)), o = v(t).slice(1);
      return E([e12.serialize(i), e12.wrapString(o.map((s) => e12.serialize(s)).join(", "), e12.options.applyFunctionStyle(n, e12.level)), "\\coloneq", e12.serialize(r)]);
    }
    return E([e12.serialize(i), "\\coloneq", e12.serialize(p(n, 2))]);
  }, parse: Qr }, { latexTrigger: "\\coloneqq", kind: "infix", associativity: "right", precedence: 260, parse: Qr }, { latexTrigger: "\\colonequals", kind: "infix", associativity: "right", precedence: 260, parse: Qr }, { latexTrigger: [":", "="], kind: "infix", associativity: "right", precedence: 260, parse: Qr }, { name: "BaseForm", serialize: (e12, n) => {
    let i = w(p(n, 2)) ?? NaN;
    if (isFinite(i) && i >= 2 && i <= 36) {
      let t = w(p(n, 1)) ?? NaN;
      if (isFinite(t) && Number.isInteger(t)) {
        let r = Number(t).toString(i), o = 0;
        if (i === 2 || i === 10 ? o = 4 : i === 16 ? o = 2 : i > 16 && (o = 4), o > 0) {
          let s = r;
          r = "";
          for (let a = 0; a < s.length; a++) a > 0 && a % o === 0 && (r = "\\, " + r), r = s[s.length - a - 1] + r;
        }
        return `(\\text{${r}}_{${i}}`;
      }
    }
    return "\\operatorname{BaseForm}(" + e12.serialize(p(n, 1)) + ", " + e12.serialize(p(n, 2)) + ")";
  } }, { name: "Sequence", serialize: tt(" ") }, { name: "InvisibleOperator", serialize: tt("") }, { name: "Delimiter", serialize: (e12, n) => {
    let i = e12.options.groupStyle(n, e12.level + 1), t = p(n, 1), r = { Set: "{,}", List: "[,]", Tuple: "(,)", Single: "(,)", Pair: "(,)", Triple: "(,)", Sequence: "(,)", String: '""' }[h(t)], o = r ? t : ["Sequence", t];
    if (r ?? (r = "(,)"), J(n) > 1) {
      let f = q(p(n, 2));
      typeof f == "string" && f.length <= 3 && (r = f);
    }
    let [s, a, u] = ["", "", ""];
    r.length === 3 ? [s, a, u] = r : r.length === 2 ? [s, u] = r : r.length === 1 && (a = r);
    let l = t ? o ? tt(a)(e12, o) : e12.serialize(t) : "";
    return e12.wrapString(l, i, s + u);
  } }, { name: "Domain", serialize: (e12, n) => h(n) === "Error" ? e12.serialize(n) : `\\mathbf{${e12.serialize(p(n, 1))}}` }, { latexTrigger: ["\\mathtip"], parse: (e12) => {
    let n = e12.parseGroup();
    return e12.parseGroup(), n;
  } }, { latexTrigger: ["\\texttip"], parse: (e12) => {
    let n = e12.parseGroup();
    return e12.parseGroup(), n;
  } }, { latexTrigger: ["\\error"], parse: (e12) => ["Error", e12.parseGroup()] }, { name: "Error", serialize: (e12, n) => {
    let i = p(n, 1);
    if (q(i) === "missing") return `\\error{${e12.options.missingSymbol ?? "\\placeholder{}"}}`;
    let t = kp(e12, n) || "\\blacksquare", r = h(i) === "ErrorCode" ? q(p(i, 1)) : q(i);
    return r === "incompatible-domain" ? D(p(i, 3)) === "Undefined" ? `\\mathtip{\\error{${t}}}{\\notin ${e12.serialize(p(i, 2))}}` : `\\mathtip{\\error{${t}}}{\\in ${e12.serialize(p(i, 3))}\\notin ${e12.serialize(p(i, 2))}}` : typeof r == "string" ? `\\error{${t}}` : `\\error{${t}}`;
  } }, { name: "ErrorCode", serialize: (e12, n) => {
    let i = q(p(n, 1));
    return i === "missing" ? e12.options.missingSymbol ?? "\\placeholder{}" : i === "unexpected-command" || i === "unexpected-operator" || i === "unexpected-token" || i === "invalid-identifier" || i === "unknown-environment" || i === "unexpected-base" || i === "incompatible-domain" || i === "invalid-domain" ? "" : `\\texttip{\\error{\\blacksquare}}{\\mathtt{${i}}}`;
  } }, { name: "FromLatex", serialize: (e12, n) => `\\texttt{${Bp(q(p(n, 1)))}}` }, { name: "Latex", serialize: (e12, n) => n === null ? "" : E(Br(n, (i) => q(i) ?? e12.serialize(i))) }, { name: "LatexString", serialize: (e12, n) => n === null ? "" : E(Br(n, (i) => e12.serialize(i))) }, { name: "LatexTokens", serialize: Ip }, { name: "At", kind: "postfix", precedence: 810, latexTrigger: ["["], parse: Xr("]"), serialize: (e12, n) => E(["\\lbrack", tt(", ")(e12, n), "\\rbrack"]) }, { kind: "postfix", precedence: 810, latexTrigger: ["\\lbrack"], parse: Xr("\\rbrack") }, { kind: "postfix", precedence: 810, latexTrigger: ["\\left", "\\lbrack"], parse: Xr("\\right", "\\rbrack") }, { kind: "postfix", latexTrigger: ["_"], parse: Xr() }, { name: "List", kind: "matchfix", openTrigger: "[", closeTrigger: "]", parse: Ol, serialize: Dp }, { kind: "matchfix", openTrigger: "(", closeTrigger: ")", parse: wp }, { latexTrigger: [","], kind: "infix", precedence: 20, parse: (e12, n, i) => {
    let t = Bs(e12, i, n, 20, ",");
    return t === null ? null : ["Delimiter", ["Sequence", ...t], { str: "," }];
  } }, { latexTrigger: [","], kind: "prefix", precedence: 20, parse: (e12, n) => {
    let i = Bs(e12, n, null, 20, ",");
    return i === null ? null : ["Delimiter", ["Sequence", ...i], { str: "," }];
  } }, { name: "Range", latexTrigger: [".", "."], kind: "infix", precedence: 800, parse: Rp, serialize: (e12, n) => {
    let i = v(n);
    if (i.length === 0) return "";
    if (i.length === 1) return "1.." + e12.serialize(p(n, 1));
    if (i.length === 2) return e12.wrap(p(n, 1), 10) + ".." + e12.wrap(p(n, 2), 10);
    if (i.length === 3) {
      let t = w(p(n, 3)), r = w(p(n, 1));
      return t !== null && r !== null ? e12.wrap(p(n, 1), 10) + ".." + e12.wrap(r + t, 10) + ".." + e12.wrap(p(n, 2), 10) : e12.wrap(p(n, 1), 10) + "..(" + (e12.wrap(p(n, 1), 275) + "+" + e12.wrap(p(n, 3), 275)) + ").." + e12.wrap(p(n, 2), 10);
    }
    return "";
  } }, { latexTrigger: [";"], kind: "infix", precedence: 19, parse: (e12, n, i) => {
    let t = Bs(e12, i, n, 19, ";");
    return t === null ? null : ["Delimiter", ["Sequence", ...t], "';'"];
  } }, { name: "String", latexTrigger: ["\\text"], parse: (e12) => ws(e12), serialize: (e12, n) => {
    let i = v(n);
    return i.length === 0 ? "\\text{}" : E(["\\text{", i.map((t) => e12.serialize(t)).join(""), "}"]);
  } }, { name: "Subscript", latexTrigger: ["_"], kind: "infix", serialize: (e12, n) => J(n) === 2 ? e12.serialize(p(n, 1)) + "_{" + e12.serialize(p(n, 2)) + "}" : "_{" + e12.serialize(p(n, 1)) + "}" }, { name: "Superplus", latexTrigger: ["^", "+"], kind: "postfix" }, { name: "Subplus", latexTrigger: ["_", "+"], kind: "postfix" }, { name: "Superminus", latexTrigger: ["^", "-"], kind: "postfix" }, { name: "Subminus", latexTrigger: ["_", "-"], kind: "postfix" }, { latexTrigger: ["^", "*"], kind: "postfix", parse: (e12, n) => ["Superstar", n] }, { latexTrigger: ["_", "*"], kind: "postfix", parse: (e12, n) => ["Substar", n] }, { name: "Substar", latexTrigger: ["_", "\\star"], kind: "postfix" }, { name: "Superdagger", latexTrigger: ["^", "\\dagger"], kind: "postfix" }, { latexTrigger: ["^", "\\dag"], kind: "postfix", parse: (e12, n) => ["Superdagger", n] }, { name: "Prime", latexTrigger: ["^", "\\prime"], kind: "postfix", parse: (e12, n) => An(e12, n, 1), serialize: (e12, n) => {
    let i = w(p(n, 2)) ?? 1, t = e12.serialize(p(n, 1));
    return i === 1 ? t + "^\\prime" : i === 2 ? t + "^\\doubleprime" : i === 3 ? t + "^\\tripleprime" : t + "^{(" + e12.serialize(p(n, 2)) + ")}";
  } }, { latexTrigger: "^{\\prime\\prime}", kind: "postfix", parse: (e12, n) => An(e12, n, 2) }, { latexTrigger: "^{\\prime\\prime\\prime}", kind: "postfix", parse: (e12, n) => An(e12, n, 3) }, { latexTrigger: ["^", "\\doubleprime"], kind: "postfix", parse: (e12, n) => An(e12, n, 2) }, { latexTrigger: ["^", "\\tripleprime"], kind: "postfix", parse: (e12, n) => An(e12, n, 3) }, { latexTrigger: "'", kind: "postfix", precedence: 810, parse: (e12, n) => An(e12, n, 1) }, { latexTrigger: "\\prime", kind: "postfix", precedence: 810, parse: (e12, n) => An(e12, n, 1) }, { latexTrigger: "\\doubleprime", kind: "postfix", precedence: 810, parse: (e12, n) => An(e12, n, 2) }, { latexTrigger: "\\tripleprime", kind: "postfix", precedence: 810, parse: (e12, n) => An(e12, n, 3) }, { latexTrigger: ["^", "<{>", "("], kind: "postfix", parse: (e12, n, i) => {
    let t = D(n);
    if (!t || e12.getIdentifierType(t) !== "function") return null;
    e12.addBoundary([")"]);
    let r = e12.parseExpression(i);
    return !e12.matchBoundary() || !e12.match("<}>") ? null : ["Derivative", n, r];
  } }, { name: "InverseFunction", latexTrigger: "^{-1", kind: "postfix", parse: (e12, n) => {
    let i = D(n);
    if (!i || e12.getIdentifierType(i) !== "function") return null;
    let t = 0;
    for (; !e12.atEnd && !e12.match("<}>"); ) if (e12.match("'")) t++;
    else if (e12.match("\\prime")) t++;
    else if (e12.match("\\doubleprime")) t += 2;
    else if (e12.match("\\tripleprime")) t += 3;
    else return null;
    return t === 1 ? ["Derivative", ["InverseFunction", n]] : t > 0 ? ["Derivative", ["InverseFunction", n], t] : ["InverseFunction", n];
  }, serialize: (e12, n) => e12.serialize(p(n, 1)) + "^{-1}" }, { name: "Derivative", serialize: (e12, n) => {
    let i = w(p(n, 2)) ?? 1, t = e12.serialize(p(n, 1));
    return i === 1 ? t + "^{\\prime}" : i === 2 ? t + "^{\\doubleprime}" : i === 3 ? t + "^{\\tripleprime}" : t + "^{(" + e12.serialize(p(n, 2)) + ")}";
  } }, { kind: "environment", name: "Which", identifierTrigger: "cases", parse: ks, serialize: (e12, n) => {
    let i = [], t = v(n);
    if (t.length > 0) for (let r = 0; r <= t.length - 2; r += 2) {
      let o = [];
      o.push(e12.serialize(t[r + 1])), o.push(e12.serialize(t[r])), i.push(o.join("&"));
    }
    return E(["\\begin{cases}", i.join("\\\\"), "\\end{cases}"]);
  } }, { kind: "environment", identifierTrigger: "dcases", parse: ks }, { kind: "environment", identifierTrigger: "rcases", parse: ks }];
  function ws(e12, n) {
    if (!e12.match("<{>")) return "''";
    let i = [], t = "", r = null;
    for (; !e12.atEnd && !e12.match("<}>"); ) if (e12.peek === "<{>") i.push(ws(e12));
    else if (e12.match("\\textbf") && e12.match("<{>")) i.push(ws(e12, { "font-weight": "bold" }));
    else if (e12.match("\\color")) {
      let s = e12.parseStringGroup();
      s !== null && (r !== null && t ? i.push(["Style", t, Ir(r)]) : t && i.push(["String", t]), t = "", r = { color: s });
    } else if (e12.match("<space>")) t += " ";
    else if (e12.match("<$>")) {
      let s = e12.index, a = e12.parseExpression() ?? "Nothing";
      e12.skipSpace(), e12.match("<$>") ? i.push(a) : (t += "$", e12.index = s);
    } else if (e12.match("<$$>")) {
      let s = e12.index, a = e12.parseExpression() ?? "Nothing";
      e12.skipSpace(), e12.match("<$$>") ? i.push(a) : (t += "$$", e12.index = s);
    } else {
      let s = e12.matchChar() ?? e12.nextToken();
      t += { "\\enskip": "\u2002", "\\enspace": "\u2002", "\\quad": "\u2003", "\\qquad": "\u2003\u2003", "\\space": "\u2003", "\\ ": "\u2003", "\\;": "\u2004", "\\,": "\u2009", "\\:": "\u205F", "\\!": "", "\\{": "{", "\\}": "}", "\\$": "$", "\\&": "&", "\\#": "#", "\\%": "%", "\\_": "_", "\\textbackslash": "\\", "\\textasciitilde": "~", "\\textasciicircum": "^", "\\textless": "<", "\\textgreater": ">", "\\textbar": "|", "\\textunderscore": "_", "\\textbraceleft": "{", "\\textbraceright": "}", "\\textasciigrave": "`", "\\textquotesingle": "'", "\\textquotedblleft": "\u201C", "\\textquotedblright": "\u201D", "\\textquotedbl": '"', "\\textquoteleft": "\u2018", "\\textquoteright": "\u2019", "\\textbullet": "\u2022", "\\textdagger": "\u2020", "\\textdaggerdbl": "\u2021", "\\textsection": "\xA7", "\\textparagraph": "\xB6", "\\textperiodcentered": "\xB7", "\\textellipsis": "\u2026", "\\textemdash": "\u2014", "\\textendash": "\u2013", "\\textregistered": "\xAE", "\\texttrademark": "\u2122", "\\textdegree": "\xB0" }[s] ?? s;
    }
    r !== null && t ? i.push(["Style", `'${t}'`, Ir(r)]) : t && i.push(`'${t}'`);
    let o;
    return i.length === 1 ? o = i[0] : i.every((s) => q(s) !== null) ? o = "'" + i.map((s) => q(s)).join() + "'" : o = ["String", ...i], n ? ["Style", o, Ir(n)] : o;
  }
  function Ip(e12, n) {
    return n === null ? "" : E(Br(n, (i) => {
      let t = q(i);
      return t === null ? e12.serialize(i) : t === "<{>" ? "{" : t === "<}>" ? "}" : t === "<$>" ? "$" : t === "<$$>" ? "$$" : t === "<space>" ? " " : t;
    }));
  }
  function Bp(e12) {
    return e12 === null ? "" : e12.replace(/[{}\[\]\\:\-\$%]/g, (n) => ({ "{": "\\lbrace ", "}": "\\rbrace ", "[": "\\lbrack ", "]": "\\rbrack ", ":": "\\colon ", "\\": "\\backslash " })[n] ?? "\\" + n);
  }
  function kp(e12, n) {
    let i = p(n, 2);
    return i ? h(i) === "LatexString" ? q(p(i, 1)) ?? "" : h(i) === "Hold" ? e12.serialize(p(i, 1)) : e12.serialize(i) : "";
  }
  function An(e12, n, i) {
    let t = h(n);
    if (t === "Derivative" || t === "Prime") {
      let o = w(p(n, 2)) ?? 1;
      return [t, C(p(n, 1)), o + i];
    }
    let r = D(n);
    return r && e12.getIdentifierType(r) === "function" || h(n) ? i === 1 ? ["Derivative", n] : ["Derivative", n, i] : i === 1 ? ["Prime", C(n)] : ["Prime", C(n), i];
  }
  function wp(e12, n) {
    if (G(n)) return ["Delimiter"];
    let i = h(n);
    if (i === "Delimiter" && p(n, 2) !== null) {
      let t = q(p(n, 2));
      if (t?.length === 1) return ["Delimiter", p(n, 1) ?? "Nothing", { str: `(${t})` }];
    }
    return i === "Matrix" && (q(p(n, 2)) ?? "..") === ".." ? ["Matrix", p(n, 1)] : ["Delimiter", n];
  }
  function Ol(e12, n) {
    if (G(n)) return ["List"];
    let i = h(n);
    if (i === "Range" || i === "Linspace") return n;
    if (i === "Sequence") return ["List", ...v(n)];
    if (i === "Delimiter") {
      let t = q(p(n, 2)) ?? "...";
      if (t === ";" || t === ".;.") return ["List", ...(v(p(n, 1)) ?? []).map((r) => Ol(e12, r))];
      if (t === "," || t === ".,.") return n = p(n, 1), h(n) === "Sequence" ? ["List", ...v(n)] : ["List", n ?? "Nothing"];
    }
    return ["List", n];
  }
  function Dp(e12, n) {
    return J(n) > 1 && v(n).every((i) => {
      let t = h(i);
      return Er(t) || br(t);
    }) ? E(["\\begin{cases}", tt("\\\\")(e12, n), "\\end{cases}"]) : E(["\\bigl\\lbrack", tt(", ")(e12, n), "\\bigr\\rbrack"]);
  }
  function Rp(e12, n) {
    if (n === null) return null;
    let i = e12.parseExpression({ minPrec: 270 });
    if (i === null) return null;
    if (e12.matchAll([".", "."])) {
      let t = e12.parseExpression({ minPrec: 270 });
      if (t === null) return null;
      let r = w(n), o = w(i);
      return r !== null && o !== null ? o <= r ? null : o - r === 1 ? ["Range", n, t] : ["Range", n, t, o - r] : ["Range", n, t, ["Subtract", i, n]];
    }
    return ["Range", n, i];
  }
  var rt = { "(": "(", ")": ")", "[": "\\lbrack", "]": "\\rbrack", "\u27E6": "\\llbrack", "\u27E7": "\\rrbrack", "{": "\\lbrace", "}": "\\rbrace", "<": "\\langle", ">": "\\rangle", "\u2016": "\\Vert", "\\": "\\backslash", "\u2308": "\\lceil", "\u2309": "\\rceil", "\u230A": "\\lfloor", "\u230B": "\\rfloor", "\u231C": "\\ulcorner", "\u231D": "\\urcorner", "\u231E": "\\llcorner", "\u231F": "\\lrcorner", "\u23B0": "\\lmoustache", "\u23B1": "\\rmoustache" };
  function Qr(e12, n) {
    if (h(n) === "InvisibleOperator" && J(n) === 2 && h(p(n, 2)) === "Delimiter") {
      let r = D(p(n, 1));
      if (!r) return null;
      let o = e12.parseExpression({ minPrec: 0 });
      if (o === null) return null;
      let s = p(p(n, 2), 1), a = [];
      return h(s) === "Sequence" ? a = [...v(s)] : s && (a = [s]), ["Assign", r, ["Function", o, ...a ?? []]];
    }
    let i = h(n);
    if (i) {
      let r = v(n), o = e12.parseExpression({ minPrec: 0 });
      return o === null ? null : ["Assign", i, ["Function", o, ...r]];
    }
    if (!D(n)) return null;
    let t = e12.parseExpression({ minPrec: 0 });
    return t === null ? null : ["Assign", n, t];
  }
  function ks(e12) {
    let n = e12.parseTabular();
    if (!n) return ["List"];
    if (n.every((t) => {
      if (t.length !== 1) return false;
      let r = h(t[0]);
      return br(r) || Er(r);
    })) return ["List", ...n.map((t) => t[0])];
    let i = [];
    for (let t of n) if (t.length === 1) i.push("True"), i.push(t[0]);
    else if (t.length === 2) {
      let r = q(t[1]);
      i.push(r ? "True" : jo(t[1]) ?? "True"), i.push(t[0]);
    }
    return ["Which", ...i];
  }
  function Xr(...e12) {
    return (n, i) => {
      if (!D(i) && h(i) !== "List") return null;
      let t = null;
      return e12.length === 0 && (t = n.parseGroup()), t ?? (t = n.parseExpression({ minPrec: 0 })), t === null || e12.length > 0 && !n.matchAll(e12) || q(t) !== null ? null : (h(t) === "Delimiter" && (t = p(t, 1) ?? "Nothing"), h(t) === "Sequence" ? ["At", i, ...v(t)] : ["At", i, t]);
    };
  }
  var Rs = { deg: (e12) => `${e12}\\degree`, prime: (e12) => `${e12}^{\\prime}`, dprime: (e12) => `${e12}^{\\doubleprime}`, ring: (e12) => `\\mathring{${e12}}`, hat: (e12) => `\\hat{${e12}}`, tilde: (e12) => `\\tilde{${e12}}`, vec: (e12) => `\\vec{${e12}}`, bar: (e12) => `\\overline{${e12}}`, underbar: (e12) => `\\underline{${e12}}`, dot: (e12) => `\\dot{${e12}}`, ddot: (e12) => `\\ddot{${e12}}`, tdot: (e12) => `\\dddot{${e12}}`, qdot: (e12) => `\\ddddot{${e12}}`, acute: (e12) => `\\acute{${e12}}`, grave: (e12) => `\\grave{${e12}}`, breve: (e12) => `\\breve{${e12}}`, check: (e12) => `\\check{${e12}}` };
  var As = { upright: (e12) => `\\mathrm{${e12}}`, italic: (e12) => `\\mathit{${e12}}`, bold: (e12) => `\\mathbf{${e12}}`, script: (e12) => `\\mathscr{${e12}}`, fraktur: (e12) => `\\mathfrak{${e12}}`, doublestruck: (e12) => `\\mathbb{${e12}}`, blackboard: (e12) => `\\mathbb{${e12}}`, calligraphic: (e12) => `\\mathcal{${e12}}`, gothic: (e12) => `\\mathfrak{${e12}}`, sansserif: (e12) => `\\mathsf{${e12}}`, monospace: (e12) => `\\mathtt{${e12}}` };
  var Ms = class {
    constructor(n, i) {
      this.level = -1;
      this.dictionary = n, this.options = i;
    }
    wrap(n, i) {
      if (n == null) return "";
      if (i === void 0) return this.wrapString(this.serialize(n), this.options.groupStyle(n, this.level + 1));
      if (typeof n == "number" || Pi(n)) {
        let r = w(n);
        return r !== null && r < 0 && i > 275 ? this.wrap(n) : this.serialize(n);
      }
      let t = h(n);
      if (t && t !== "Delimiter" && t !== "Subscript") {
        let r = this.dictionary.ids.get(t);
        if (r && (r.kind === "symbol" || r.kind === "expression" || r.kind === "prefix" || r.kind === "infix" || r.kind === "postfix") && r.precedence < i) return this.wrapString(this.serialize(n), this.options.applyFunctionStyle(n, this.level));
      }
      return this.serialize(n);
    }
    wrapShort(n) {
      if (n == null) return "";
      let i = this.serialize(n);
      if (D(n) !== null || kn(n) && !/^(-|\.)/.test(i)) return i;
      let r = h(n);
      return r === "Delimiter" && J(n) === 1 || r !== "Add" && r !== "Negate" && r !== "Subtract" && r !== "PlusMinus" && r !== "Multiply" ? i : this.wrapString(i, this.options.groupStyle(n, this.level + 1));
    }
    wrapString(n, i, t) {
      if (i === "none") return n;
      t ?? (t = "()");
      let r = t?.[0] ?? ".", o = t?.[1] ?? ".";
      return r === '"' ? r = "``" : r === "|" ? r = "\\lvert" : r = rt[r] ?? r, o === '"' ? o = "''" : o === "|" ? o = "\\rvert" : o = rt[o] ?? o, r === "." && o === "." ? n : ((r === "." || o === ".") && i === "normal" && (i = "scaled"), i === "scaled" ? `\\left${r}${n}\\right${o}}` : i === "big" ? `${`\\Bigl${r}`}${n}${`\\Bigr${o}`})` : r + n + o);
    }
    wrapArguments(n) {
      return this.wrapString(v(n).map((i) => this.serialize(i)).join(", "), this.options.applyFunctionStyle(n, this.level));
    }
    serializeSymbol(n, i) {
      return typeof n == "string" || _r(n), i?.kind === "function" ? Ds(D(n) ?? "") ?? "" : i?.serialize?.(this, n) ?? Ds(D(n)) ?? "";
    }
    serializeFunction(n, i) {
      if (i?.serialize) return i.serialize(this, n);
      let t = h(n);
      return Ds(t, "auto") + this.wrapArguments(n);
    }
    serialize(n) {
      if (n == null) return "";
      this.level += 1;
      try {
        let i = (() => {
          let t = Rl(n, this.options);
          if (t) return t;
          let r = q(n);
          if (r !== null) return `\\text{${r}}`;
          let o = D(n);
          if (o !== null) return this.serializeSymbol(n, this.dictionary.ids.get(o));
          let s = h(n);
          if (s) {
            let a = this.dictionary.ids.get(s);
            return this.serializeFunction(n, a);
          }
          throw Error(`Syntax error ${n ? JSON.stringify(n) : ""}`);
        })();
        return this.level -= 1, i ?? "";
      } catch {
      }
      return this.level -= 1, "";
    }
    applyFunctionStyle(n, i) {
      return this.options.applyFunctionStyle(n, i);
    }
    groupStyle(n, i) {
      return this.options.groupStyle(n, i);
    }
    rootStyle(n, i) {
      return this.options.rootStyle(n, i);
    }
    fractionStyle(n, i) {
      return this.options.fractionStyle(n, i);
    }
    logicStyle(n, i) {
      return this.options.logicStyle(n, i);
    }
    powerStyle(n, i) {
      return this.options.powerStyle(n, i);
    }
    numericSetStyle(n, i) {
      return this.options.numericSetStyle(n, i);
    }
  };
  function Ap(e12) {
    let n = e12.match(/^([^_]+)/)?.[1] ?? "", i = un.findIndex((s) => n === s[0]);
    if (i >= 0) return [un[i][1], e12.substring(un[i][0].length)];
    let t = { zero: "0", one: "1", two: "2", three: "3", four: "4", five: "5", six: "6", seven: "7", eight: "8", nine: "9", ten: "10" };
    if (i = Object.keys(t).findIndex((s) => e12.startsWith(s)), i >= 0) {
      let s = Object.keys(t)[i];
      return [t[s], e12.substring(s.length)];
    }
    let r = e12.codePointAt(0);
    if (i = un.findIndex((s) => s[2] === r), i >= 0) return [un[i][1], e12.substring(1)];
    let o = { plus: "+", minus: "-", pm: "\\pm", ast: "\\ast", dag: "\\dag", ddag: "\\ddag", hash: "\\#", bottom: "\\bot", top: "\\top", bullet: "\\bullet", circle: "\\circ", diamond: "\\diamond", times: "\\times", square: "\\square", star: "\\star" };
    if (i = Object.keys(o).findIndex((s) => n === s), i >= 0) {
      let s = Object.keys(o)[i];
      return [o[s], e12.substring(s.length)];
    }
    return [n, e12.substring(n.length)];
  }
  function Mp(e12) {
    let [n, i] = Ap(e12), t = [];
    for (; i.length > 0; ) {
      let o = i.match(/^_([a-zA-Z]+)(.*)/);
      if (!o || !Rs[o[1]]) break;
      t.push(o[1]), i = o[2];
    }
    let r = [];
    for (; i.length > 0; ) {
      let o = i.match(/^_([a-zA-Z]+)(.*)/);
      if (!o || !As[o[1]]) break;
      r.push(o[1]), i = o[2];
    }
    return [n, t, r, i];
  }
  function Kr(e12, n = true, i = "auto") {
    let [t, r, o, s] = Mp(e12);
    for (let a of r) Rs[a] && (t = Rs[a](t));
    if (n) {
      let a = [], u = [], l = t.match(/^([^\d].*?)(\d+)$/);
      for (l && (u.push(l[2]), t = l[1]); s.length > 0; ) if (s.startsWith("__")) {
        let [f, c] = Kr(s.substring(2), false, "none");
        a.push(f), s = c;
      } else if (s.startsWith("_")) {
        let [f, c] = Kr(s.substring(1), false, "none");
        u.push(f), s = c;
      } else break;
      a.length > 0 && (t = _i("^", t, a.join(","))), u.length > 0 && (t = _i("_", t, u.join(",")));
    }
    for (let a of o) As[a] && (t = As[a](t));
    if (o.length === 0 && i !== "none") switch (i) {
      case "auto":
        xr(t) > 1 && (t = `\\mathrm{${t}}`);
        break;
      case "operator":
        t = `\\operatorname{${t}}`;
        break;
      case "italic":
        t = `\\mathit{${t}}`;
        break;
      case "upright":
        t = `\\mathrm{${t}}`;
        break;
    }
    return [t, s];
  }
  function Ds(e12, n = "auto") {
    if (e12 === null) return null;
    if (Xi.test(e12)) return e12;
    let i = e12.match(/^(_+)(.*)/);
    if (i) {
      let [o, s] = Kr(i[2], true, "none");
      return `\\operatorname{${"\\_".repeat(i[1].length) + o + s}}`;
    }
    let [t, r] = Kr(e12, true, n);
    return r.length > 0 ? `\\operatorname{${e12}}` : t;
  }
  function Ll(e12, n, i) {
    return new Ms(n, i).serialize(e12);
  }
  var Fl = { PositiveInfinity: "+oo", NegativeInfinity: "-oo", ComplexInfinity: "~oo", NaN: "NaN", Pi: "pi", ExponentialE: "e", ImaginaryUnit: "i", alpha: "alpha", beta: "beta", gamma: "gamma", delta: "delta", epsilon: "epsilon", epsilonSymbol: "varepsilon", zeta: "zeta", eta: "eta", theta: "theta", thetaSymbol: "vartheta", iota: "iota", kappa: "kappa", lambda: "lambda", mu: "mu", nu: "nu", xi: "xi", omicron: "omicron", pi: "pi", rho: "rho", sigma: "sigma", tau: "tau", upsilon: "upsilon", phi: "phi", phiSymbol: "varphi", chi: "chi", psi: "psi", omega: "omega", Gamma: "Gamma", Delta: "Delta", Theta: "Theta", Lambda: "Lambda", Xi: "Xi", Sigma: "Sigma", Upsilon: "Upsilon", Phi: "Phi", Psi: "Psi", Omega: "Omega" };
  var ql = { Add: [(e12, n) => e12.ops?.reduce((i, t) => {
    if (t.operator === "Negate") {
      let r = n(t.op1, 10);
      return i === "" ? `-${r}` : r.startsWith("+") ? `${i} - ${r.substring(1)}` : r.startsWith("-") ? `${i} + ${r.substring(1)}` : `${i} - ${r}`;
    }
    return $l(i, n(t, 10));
  }, "") ?? "", 11], Negate: [(e12, n) => {
    let i = n(e12.op1, 14);
    return i === "Power" ? `-(${i})` : `-${i}`;
  }, 14], Subtract: [(e12, n) => e12.ops?.reduce((i, t) => {
    let r = n(t, 10);
    return i === "" ? r : r.startsWith("-") ? `${i} - (${r})` : `${i} - ${r}`;
  }, "") ?? "", 11], Multiply: [(e12, n) => {
    if (!e12.ops) return "";
    if (e12.nops === 2) {
      let i = e12.op1.numericValue;
      if (i !== null) {
        typeof i != "number" && i.im !== 0 && Ps(n(e12.op2, 12), $l(i.re.toString(), `${i.im}i`));
        let t = e12.op2;
        if ((t.symbol || t.operator === "Power" || t.operator === "Square" || typeof Os[t.operator] == "string") && Bn(i) && i[0] === 1) {
          let r = i[1];
          return `${n(t, 12)}/${r}`;
        }
        return Ps(n(e12.op1, 12), n(e12.op2, 12));
      }
    }
    return e12.ops.reduce((i, t) => Ps(i, n(t, 12)), "");
  }, 12], Divide: ["/", 13], Power: [(e12, n) => {
    let i = n(e12.op2, 14);
    if (i === "1") return n(e12.op1);
    if (i === "(1/2)" || i === "1/2" || i === "0.5") return `sqrt(${n(e12.op1)})`;
    if (i === "-0.5") return `(1/sqrt(${n(e12.op1)}))`;
    let t = n(e12.op1, 14);
    return t.startsWith("-") && (t = `(${t})`), i.length === 1 ? `${t}^${i}` : `${t}^${pi(i)}`;
  }, 15], Equal: ["===", 8], NotEqual: ["!==", 8], LessEqual: ["<=", 9], GreaterEqual: [">=", 9], Less: ["<", 9], Greater: [">", 9], And: ["&&", 4], Or: ["||", 3], Not: ["!", 14] };
  var Os = { Abs: (e12, n) => `|${n(e12.op1)}|`, Sin: "sin", Cos: "cos", Tan: "tan", Sec: "sec", Csc: "csc", Arcsin: "arcsin", Arccos: "arccos", Arctan: "arctan", Sinh: "sinh", Cosh: "cosh", Tanh: "tanh", Sech: "sech", Csch: "csch", Coth: "coth", Ceil: "ceil", Exp: "exp", Factorial: (e12, n) => `${n(e12.op1, 12)}!`, Floor: "floor", Log: "log", Ln: "ln", Log10: "log10", Sqrt: "sqrt", Root: (e12, n) => {
    let i = e12.op1, t = e12.op2;
    return t.is(2) ? `sqrt${pi(n(i))}` : `root${pi(n(t))}${pi(n(i))}`;
  }, Square: (e12, n) => `${n(e12.op1, 12)}^2`, Det: "det", Dim: "dim", Mod: "mod", GCD: "gcd", LCM: "lcm", Lub: "lub", Glb: "glb", Max: "max", Min: "min", Sum: (e12, n) => Cs(e12, "sum", n), Product: (e12, n) => Cs(e12, "prod", n), Integrate: (e12, n) => Cs(e12, "int", n), Delimiter: (e12, n) => Cp(e12.ops[0], e12.ops[1]?.string, n), Sequence: (e12, n) => e12.nops === 0 ? "" : e12.ops.map((i) => n(i)).join(" "), List: (e12, n) => `[${e12.ops?.map((i) => n(i)) ?? ""}]`, Single: (e12, n) => `(${e12.ops.map((i) => n(i)).join(", ")})`, Pair: (e12, n) => `(${e12.ops.map((i) => n(i)).join(", ")})`, Triple: (e12, n) => `(${e12.ops.map((i) => n(i)).join(", ")})`, Tuple: (e12, n) => `(${e12.ops.map((i) => n(i)).join(", ")})`, Function: (e12, n) => `(${e12.ops.slice(1).map((i) => n(i)).join(", ")}) |-> {${n(e12.op1)}}`, Domain: (e12) => JSON.stringify(e12.json), Error: (e12, n) => e12.nops === 1 ? `Error(${n(e12.op1)})` : e12.nops === 2 ? e12.op1.string ? `Error("${e12.op1.string}", ${n(e12.op2)})` : `Error(${n(e12.op1)}, ${n(e12.op2)})` : `Error(${e12.ops.map((i) => n(i)).join(", ")})`, LatexString: (e12) => `"${e12.op1.string ?? ""}"` };
  function Cs(e12, n, i) {
    let t = e12.op2, r = t?.op1, o = t?.op2, s = t?.op3;
    r.symbol === "Nothing" && (r = null), o.symbol === "Nothing" && (o = null), s.symbol === "Nothing" && (s = null);
    let a = n;
    return r && o && (a += `_(${i(r)}=${i(o)})`), s && (a += `^${pi(i(s))}`), a + pi(i(e12.op1));
  }
  function Cp(e12, n, i) {
    n || (n = "(,)");
    let t = "", r = "", o = "";
    if (n.length === 1 && (t = n), n.length === 2 && (r = n[0], o = n[1]), n.length === 3 && (r = n[0], t = n[1], o = n[2]), !e12) return `${r}${o}`;
    let s = [e12.op1];
    return e12.op1.operator === "Sequence" && (s = e12.op1.ops), `${r}${s.map((a) => i(a)).join(t)}${o}`;
  }
  function pi(e12, n = 0, i = -1) {
    return n > i && !/^\(.+\)$/.test(e12) ? `(${e12})` : e12;
  }
  function eo(e12, n = {}) {
    return n.symbols?.[e12] ? n.symbols[e12] : Fl[e12] ? Fl[e12] : e12.length === 1 ? e12 : `"${e12}"`;
  }
  function no(e12, n = {}, i = 0) {
    if (e12.symbol) return eo(e12.symbol, n);
    let t = (o, s = 0) => no(o, n, s);
    if (e12.string) return e12.string;
    let r = e12.numericValue;
    if (r !== null) {
      let o = e12.engine;
      return e12.isNaN ? eo("NaN", n) : e12.isFinite === false ? e12.isNegative !== true && e12.isPositive !== true ? eo("ComplexInfinity", n) : eo(e12.isNegative ? "NegativeInfinity" : "PositiveInfinity", n) : r.toString();
    }
    if (e12.operator) {
      let o = n.operators ? { ...ql, ...n.operators } : ql, [s, a] = o[e12.operator] ?? [];
      if (s) {
        let f = "";
        if (typeof s == "function") f = s(e12, t);
        else {
          if (e12.nops === 1) return `${s}${t(e12.op1, a + 1)}`;
          f = e12.ops?.map((c) => t(c, a + 1)).join(` ${s} `) ?? "";
        }
        return pi(f, i, a);
      }
      let l = (n.functions ? { ...Os, ...n.functions } : Os)[e12.operator];
      return typeof l == "function" ? l(e12, t) : typeof l == "string" ? `${l}(${e12.ops?.map((f) => t(f)).join(", ") ?? ""})` : `${e12.operator}(${e12.ops?.map((f) => t(f)).join(", ") ?? ""})`;
    }
    return JSON.stringify(e12.json);
  }
  function Ps(e12, n) {
    return e12 ? n ? (n.startsWith("-") && (n = `(${n})`), e12 === "-1" ? `-${n}` : n === "-1" ? `-${e12}` : e12.match(/^[-+]?\d+$/) && n.match(/^[a-zA-Z\(]/) ? e12 + n : `${e12} * ${n}`) : e12 : n;
  }
  function $l(e12, n) {
    return e12 ? n ? e12 === "0" ? n : n === "0" ? e12 : n.startsWith("-") ? `${e12} - ${n.substring(1)}` : `${e12} + ${n}` : e12 : n;
  }
  function Vl(e12, n, i, t, r) {
    if (n.numericValue !== null && n.isNegative) {
      let o = n.numericValue;
      if (typeof o == "number") return M(e12, "Subtract", [i, e12.number(-o)], t, r);
      if (g(n.type, "rational")) return M(e12, "Subtract", [i, e12.number(o.neg())], t, r);
    }
    return n.operator === "Negate" && i.operator !== "Negate" ? M(e12, "Subtract", [i, n.op1], t, r) : null;
  }
  function Pp(e12, n, i, t, r) {
    let o = t.exclude;
    if (n === "Add" && i.length === 2 && !o.includes("Subtract")) {
      let s = Vl(e12, i[0], i[1], t, r) ?? Vl(e12, i[1], i[0], t, r);
      if (s) return s;
    }
    if (n === "Divide" && i.length === 2 && o.includes("Divide")) return M(e12, "Multiply", [i[0], e12._fn("Power", [i[1], e12.NegativeOne])], t, r);
    if (n === "Multiply" && !o.includes("Negate") && i[0].im === 0 && i[0].re === -1) return i.length === 2 ? M(e12, "Negate", [i[1]], t) : M(e12, "Negate", [e12._fn("Multiply", [...i.slice(1)].sort(ce))], t, r);
    if (n === "Multiply" && !o.includes("Divide")) {
      let s = new Te(e12, i, { canonical: false }).asRationalExpression();
      if (s.operator === "Divide") return M(e12, s.operator, s.ops, t, r);
    }
    if (n === "Power") {
      if (!o.includes("Exp") && i[0]?.symbol === "ExponentialE") return M(e12, "Exp", [i[1]], t, r);
      if (i[1]?.numericValue !== null) {
        let s = z(i[1]);
        if (s === 2 && !o.includes("Square")) return M(e12, "Square", [i[0]], t, r);
        if (s !== null && s < 0 && !o.includes("Divide")) return M(e12, "Divide", [e12.One, s === -1 ? i[0] : i[0].pow(-s)], t, r);
        let a = i[1].re;
        if (!o.includes("Sqrt") && a === 0.5) return M(e12, "Sqrt", [i[0]], t, r);
        if (!o.includes("Sqrt") && a === -0.5) return M(e12, "Divide", [e12.One, e12._fn("Sqrt", [i[0]])], t, r);
        if (Bn(a)) {
          let u = zo(a), l = Go(a);
          if (u === 1) {
            if (!o.includes("Sqrt") && l === 2) return M(e12, "Sqrt", [i[0]], t, r);
            if (!o.includes("Root")) return M(e12, "Root", [i[0], e12.number(a[1])], t, r);
          }
          if (u === -1) {
            if (!o.includes("Sqrt") && l === 2) return M(e12, "Divide", [e12.One, e12._fn("Sqrt", [i[0]])], t, r);
            if (!o.includes("Root")) return M(e12, "Divide", [e12.One, e12._fn("Root", [i[0], e12.number(a[1])])], t, r);
          }
        }
      }
    }
    if (n === "Add" && i.length === 2 && !o.includes("Subtract")) {
      if (i[1]?.numericValue !== null) {
        let s = z(i[1]);
        if (s !== null && s < 0) return M(e12, "Subtract", [i[0], e12.number(-s)], t, r);
      }
      if (i[1]?.operator === "Negate") return M(e12, "Subtract", [i[0], i[1].op1], t, r);
    }
    if (n === "Tuple") {
      if (i.length === 1 && !o.includes("Single")) return M(e12, "Single", i, t, r);
      if (i.length === 2 && !o.includes("Pair")) return M(e12, "Pair", i, t, r);
      if (i.length === 3 && !o.includes("Triple")) return M(e12, "Triple", i, t, r);
    }
    return M(e12, n, i, t, r);
  }
  function M(e12, n, i, t, r) {
    let o = t.exclude;
    if (n === "Negate" && i.length === 1) {
      let l = i[0]?.numericValue;
      if (l !== null) {
        if (typeof l == "number") return yn(e12, -l, t);
        if (l instanceof X || l instanceof F) return yn(e12, l.neg(), t);
        if (Bn(l)) return yn(e12, si(l), t);
      }
    }
    if (typeof n == "string" && o.includes(n)) {
      if (n === "Rational" && i.length === 2) return M(e12, "Divide", i, t, r);
      if (n === "Complex" && i.length === 2) return M(e12, "Add", [i[0], e12._fn("Multiply", [i[1] ?? e12.symbol("Undefined"), e12.I])], t, r);
      if (n === "Sqrt" && i.length === 1) return M(e12, "Power", [i[0], o.includes("Half") ? e12.number([1, 2]) : e12.Half], t, r);
      if (n === "Root" && i.length === 2 && i[1]?.numericValue !== null) {
        let l = z(i[1]);
        if (l === 2) return M(e12, "Sqrt", [i[0]], t);
        if (l !== null) return l < 0 ? M(e12, "Divide", [e12.One, e12._fn("Power", [i[0] ?? e12.symbol("Undefined"), e12.number([1, -l])])], t, r) : M(e12, "Power", [i[0], e12.number([1, -l])], t, r);
      }
      if (n === "Square" && i.length === 1) return M(e12, "Power", [i[0], e12.number(2)], t, r);
      if (n === "Exp" && i.length === 1) return M(e12, "Power", [e12.E, i[0]], t, r);
      if (n === "Pair" || n == "Single" || n === "Triple") return M(e12, "Tuple", i, t, r);
      if (n === "Subtract" && i.length === 2) return M(e12, "Add", [i[0], e12._fn("Negate", [i[1] ?? e12.symbol("Undefined")])], t, r);
      if (n === "Subtract" && i.length === 1) return M(e12, "Negate", i, t, r);
    }
    let a = [n, ...i.map((l) => l ? Ls(e12, l, t) : "Undefined")], u = { ...r ?? {} };
    return t.metadata.includes("latex") ? u.latex = u.latex ?? e12.box({ fn: a }).latex : u.latex = "", t.metadata.includes("wikidata") || (u.wikidata = ""), !u.latex && !u.wikidata && t.shorthands.includes("function") ? a : u.latex && u.wikidata ? { fn: a, latex: u.latex, wikidata: u.wikidata } : u.latex ? { fn: a, latex: u.latex } : u.wikidata ? { fn: a, wikidata: u.wikidata } : { fn: a };
  }
  function Op(e12, n) {
    return e12 = e12, n.shorthands.includes("string") ? `'${e12}'` : { str: e12 };
  }
  function Hn(e12, n, i, t) {
    if (n === "Half" && i.exclude.includes("Half")) return yn(e12, [1, 2], i, t);
    if (t = { ...t }, i.metadata.includes("latex") ? (t.latex = t.latex ?? e12.box({ sym: n }).latex, t.latex !== void 0 && (t.latex = t.latex)) : t.latex = void 0, i.metadata.includes("wikidata")) {
      if (t.wikidata === void 0) {
        let r = e12.lookupSymbol(n)?.wikidata;
        r !== void 0 && (t.wikidata = r);
      }
    } else t.wikidata = void 0;
    return n = n, t.latex === void 0 && t.wikidata === void 0 && i.shorthands.includes("symbol") ? n : t.latex !== void 0 && t.wikidata !== void 0 ? { sym: n, latex: t.latex, wikidata: t.wikidata } : t.latex !== void 0 ? { sym: n, latex: t.latex } : t.wikidata !== void 0 ? { sym: n, wikidata: t.wikidata } : { sym: n };
  }
  function zl(e12, n) {
    if (!n.repeatingDecimal) return e12;
    let [i, t, r, o] = e12.match(/^(.*)\.([0-9]+)([e|E][-+]?[0-9]+)?$/) ?? [];
    if (!r) return e12.toLowerCase();
    let s = r[r.length - 1];
    r = r.slice(0, -1);
    let a = 16, u = "";
    for (let l = 0; l < r.length - a; l++) {
      u = r.substring(0, l);
      for (let f = 0; f <= a; f++) {
        let c = r.substring(l, l + f + 1), d = Math.floor((r.length - u.length) / c.length);
        if (d < 3) break;
        if ((u + c.repeat(d + 1)).startsWith(r)) return c === "0" ? s === "0" ? t + "." + u + (o ?? "") : e12 : t + "." + u + "(" + c + ")" + (o ?? "");
      }
    }
    for (r += s; r.endsWith("0"); ) r = r.slice(0, -1);
    return typeof n.fractionalDigits == "number" && (r = r.slice(0, n.fractionalDigits)), o ? `${t}.${r}${o.toLowerCase()}` : `${t}.${r}`;
  }
  function yn(e12, n, i, t) {
    t = { ...t }, i.metadata.includes("latex") || (t.latex = void 0);
    let r = t.latex === void 0 && t.wikidata === void 0 && !i.metadata.includes("latex") && i.shorthands.includes("number"), o = i.exclude;
    if (n instanceof V) {
      if (n.isNaN) return Hn(e12, "NaN", i, t);
      if (n.isPositiveInfinity) return Hn(e12, "PositiveInfinity", i, t);
      if (n.isNegativeInfinity) return Hn(e12, "NegativeInfinity", i, t);
      if (n.isComplexInfinity) return Hn(e12, "ComplexInfinity", i, t);
      if (r) {
        if (n.isZero) return 0;
        if (n.isOne) return 1;
        if (n.isNegativeOne) return -1;
      }
      if (n instanceof j) {
        let u;
        return ri(n.rational) ? u = yn(e12, n.rational[0], i) : u = ["Rational", yn(e12, n.rational[0], i), yn(e12, n.rational[1], i)], n.radical === 1 ? n.im === 0 ? u : typeof u == "number" ? ["Complex", u, n.im] : ["Add", u, ["Complex", 0, n.im]] : Se(n.rational) ? n.im === 0 ? ["Sqrt", n.radical] : ["Add", ["Sqrt", n.radical], ["Complex", 0, n.im]] : _t(n.rational) ? n.im === 0 ? ["Negate", ["Sqrt", n.radical]] : ["Add", ["Negate", ["Sqrt", n.radical]], ["Complex", 0, n.im]] : n.im === 0 ? ["Multiply", u, ["Sqrt", n.radical]] : ["Add", ["Multiply", u, ["Sqrt", n.radical]], ["Complex", 0, n.im]];
      }
      if (n.im === 0) {
        let u = n.bignumRe ?? n.re;
        return yn(e12, u, i, t);
      }
      return Number.isFinite(n.im) ? M(e12, "Complex", [e12.number(n.bignumRe ?? n.re), e12.number(n.im)], i, { ...t, wikidata: "Q11567" }) : Hn(e12, "ComplexInfinity", i, t);
    }
    let s = "";
    if (n instanceof X) {
      let u;
      if (n.isNaN()) u = "NaN";
      else if (!n.isFinite()) u = n.isPositive() ? "PositiveInfinity" : "NegativeInfinity";
      else {
        if (r && ai(n)) return n.toNumber();
        if (n.isInteger() && n.e < n.precision() + 4) s = n.toFixed(0);
        else {
          let l = i.fractionalDigits, f;
          if (l === "max" ? f = n.toString() : l === "auto" ? f = n.toPrecision(e12.precision) : f = n.toDecimalPlaces(l).toString(), s = zl(f, i), r) {
            let c = n.toNumber();
            if (c.toString() === s) return c;
          }
        }
      }
      return i.metadata.includes("latex") && (t.latex = t.latex ?? e12.box(u ?? { num: s }).latex), u ? t.latex !== void 0 ? { sym: u, latex: t.latex } : r ? u : { sym: u } : t.latex !== void 0 ? { num: s, latex: t.latex } : r ? s : { num: s };
    }
    if (n instanceof F) return n.isInfinite() ? Hn(e12, "ComplexInfinity", i, t) : n.isNaN() ? (s = "NaN", i.metadata.includes("latex") && (t.latex = t.latex ?? e12.box({ num: s }).latex), t.latex !== void 0 ? { num: s, latex: t.latex } : { num: s }) : M(e12, "Complex", [e12.number(n.re), e12.number(n.im)], i, { ...t, wikidata: "Q11567" });
    if (Bn(n)) {
      let u = !o.includes("Rational");
      return r && i.shorthands.includes("function") && ne(n) ? n[0] === 1 && n[1] === 2 && !o.includes("Half") ? Hn(e12, "Half", i, t) : [u ? "Rational" : "Divide", n[0], n[1]] : M(e12, u ? "Rational" : "Divide", [e12.number(n[0]), e12.number(n[1])], i, { ...t });
    }
    if (typeof n == "bigint") if (n >= Number.MIN_SAFE_INTEGER && n <= Number.MAX_SAFE_INTEGER) n = Number(n);
    else return i.metadata.includes("latex") && (t.latex = t.latex ?? e12.box({ num: n.toString() }).latex), t.latex !== void 0 ? { num: n.toString(), latex: t.latex } : r ? Ae(n, i.fractionalDigits) : { num: he(n, i.fractionalDigits) };
    let a;
    return Number.isNaN(n) ? a = "NaN" : Number.isFinite(n) ? s = zl(n.toString(), i) : a = n > 0 ? "PositiveInfinity" : "NegativeInfinity", i.metadata.includes("latex") && (t.latex = t.latex ?? e12.box({ num: s }).latex), a ? t.latex !== void 0 ? { sym: a, latex: t.latex } : r ? a : { sym: a } : t.latex !== void 0 ? { num: s, latex: t.latex } : r && s === n.toString() ? n : { num: s };
  }
  function Ls(e12, n, i) {
    let t = n.scope ? n.wikidata : void 0;
    return n.numericValue !== null ? yn(e12, n.numericValue, i, { latex: n.verbatimLatex }) : n.rank > 0 ? n.json : n.string !== null ? Op(n.string, i) : n.symbol !== null ? Hn(e12, n.symbol, i, { latex: n.verbatimLatex, wikidata: t }) : n.ops ? n.isValid && (n.isCanonical || n.isStructural) && i.prettify ? Pp(e12, n.operator, n.structural.ops, i, { latex: n.verbatimLatex, wikidata: t }) : M(e12, n.operator, n.structural.ops, i, { latex: n.verbatimLatex, wikidata: t }) : n.json;
  }
  var Q = class {
    get head() {
      return this.operator;
    }
    constructor(n, i) {
      this.engine = n, i?.latex !== void 0 && (this.verbatimLatex = i.latex);
    }
    isSame(n) {
      return $t(this, n);
    }
    isEqual(n) {
      return Cr(this, n);
    }
    isLess(n) {
      let i = Ui(this, n);
      if (i !== void 0) return i === "<";
    }
    isLessEqual(n) {
      let i = Ui(this, n);
      if (i !== void 0) return i === "<=" || i === "<" || i === "=";
    }
    isGreater(n) {
      let i = Ui(this, n);
      if (i !== void 0) return i === ">";
    }
    isGreaterEqual(n) {
      let i = Ui(this, n);
      if (i !== void 0) return i === ">=" || i === ">" || i === "=";
    }
    valueOf() {
      return this.symbol === "True" ? true : this.symbol === "False" ? false : this.symbol === "NaN" ? NaN : this.symbol === "PositiveInfinity" ? 1 / 0 : this.symbol === "NegativeInfinity" ? -1 / 0 : this.isInfinity ? this.isPositive ? 1 / 0 : this.isNegative ? -1 / 0 : NaN : typeof this.string == "string" ? this.string : typeof this.symbol == "string" ? this.symbol : this.im === 0 ? this.re : this.toString();
    }
    toAsciiMath(n = {}) {
      return no(this, n);
    }
    toString() {
      return no(this);
    }
    print() {
      let n = console.info;
      n?.(this.toString());
    }
    [Symbol.toPrimitive](n) {
      if (n === "number") {
        let i = this.valueOf();
        return typeof i == "number" ? i : null;
      }
      return this.toString();
    }
    toJSON() {
      return this.json;
    }
    toMathJson(n) {
      let i = { exclude: [], shorthands: ["function", "symbol", "string", "number"], metadata: [], fractionalDigits: "max", repeatingDecimal: true, prettify: true };
      n && ((typeof n.shorthands == "string" && n.shorthands === "all" || n.shorthands?.includes("all")) && (i.shorthands = ["function", "symbol", "string", "number"]), Array.isArray(n.shorthands) && (i.shorthands = n.shorthands), (typeof n.metadata == "string" && n.metadata === "all" || n.metadata?.includes("all")) && (i.metadata = ["latex", "wikidata"]), n.fractionalDigits === "auto" && (i.fractionalDigits = -this.engine.precision), typeof n.fractionalDigits == "number" && (i.fractionalDigits = n.fractionalDigits));
      let t = { ...i, ...n, fractionalDigits: i.fractionalDigits, shorthands: i.shorthands, metadata: i.metadata };
      return Ls(this.engine, this, t);
    }
    toLatex(n) {
      let i = this.toMathJson(), t = { imaginaryUnit: "\\imaginaryI", positiveInfinity: "\\infty", negativeInfinity: "-\\infty", notANumber: "\\operatorname{NaN}", decimalSeparator: this.engine.decimalSeparator, digitGroupSeparator: "\\,", exponentProduct: "\\cdot", beginExponentMarker: "10^{", endExponentMarker: "}", digitGroup: 3, truncationMarker: "\\ldots", repeatingDecimal: "vinculum", fractionalDigits: "max", notation: "auto", avoidExponentsInRange: [-7, 20], prettify: true, invisibleMultiply: "", invisiblePlus: "", multiply: "\\times", missingSymbol: "\\blacksquare", applyFunctionStyle: Nl, groupStyle: vl, rootStyle: Sl, fractionStyle: Tl, logicStyle: _l, powerStyle: Il, numericSetStyle: Bl };
      return n?.fractionalDigits === "auto" ? t.fractionalDigits = -this.engine.precision : t.fractionalDigits = n?.fractionalDigits ?? "max", typeof t.fractionalDigits == "number" && t.fractionalDigits > this.engine.precision && (t.fractionalDigits = this.engine.precision), t = { ...t, ...n ?? {}, fractionalDigits: t.fractionalDigits }, !t.prettify && this.verbatimLatex ? this.verbatimLatex : Ll(i, this.engine.indexedLatexDictionary, t);
    }
    toNumericValue() {
      return [this.engine._numericValue(1), this];
    }
    get scope() {
      return null;
    }
    is(n) {
      return typeof n == "number" || typeof n == "bigint" ? false : typeof n == "boolean" ? this.symbol === "True" && n === true || this.symbol === "False" && n === false : n == null ? false : $t(this, this.engine.box(n));
    }
    get canonical() {
      return this;
    }
    get structural() {
      return this;
    }
    get isStructural() {
      return true;
    }
    get latex() {
      return this.toLatex();
    }
    set latex(n) {
      this.verbatimLatex = n;
    }
    get symbol() {
      return null;
    }
    get tensor() {
      return null;
    }
    get string() {
      return null;
    }
    getSubexpressions(n) {
      return Zl(this, n);
    }
    get subexpressions() {
      return this.getSubexpressions("");
    }
    get symbols() {
      let n = /* @__PURE__ */ new Set();
      return Ul(this, n), Array.from(n);
    }
    get unknowns() {
      let n = /* @__PURE__ */ new Set();
      return jl(this, n), Array.from(n);
    }
    get freeVariables() {
      let n = /* @__PURE__ */ new Set();
      return Gl(this, n), Array.from(n);
    }
    get errors() {
      return this.getSubexpressions("Error");
    }
    get ops() {
      return null;
    }
    get nops() {
      return 0;
    }
    get op1() {
      return this.engine.Nothing;
    }
    get op2() {
      return this.engine.Nothing;
    }
    get op3() {
      return this.engine.Nothing;
    }
    get isValid() {
      return true;
    }
    get isPure() {
      return false;
    }
    get isConstant() {
      return true;
    }
    get isNaN() {
    }
    get isInfinity() {
    }
    get isFinite() {
    }
    get isEven() {
    }
    get isOdd() {
    }
    get numericValue() {
      return null;
    }
    get isNumberLiteral() {
      return false;
    }
    get isFunctionExpression() {
      return false;
    }
    get re() {
      return NaN;
    }
    get im() {
      return NaN;
    }
    get bignumRe() {
    }
    get bignumIm() {
    }
    get numerator() {
      return this;
    }
    get denominator() {
      return this.engine.One;
    }
    get numeratorDenominator() {
      return [this, this.engine.One];
    }
    neg() {
      return this.engine.NaN;
    }
    inv() {
      return this.engine.NaN;
    }
    abs() {
      return this.engine.NaN;
    }
    add(n) {
      return this.engine.NaN;
    }
    sub(n) {
      return this.add(n.neg());
    }
    mul(n) {
      return this.engine.NaN;
    }
    div(n) {
      return this.engine.NaN;
    }
    pow(n) {
      return this.engine.NaN;
    }
    root(n) {
      return this.engine.NaN;
    }
    sqrt() {
      return this.engine.NaN;
    }
    ln(n) {
      return this.engine.NaN;
    }
    get sgn() {
    }
    get shape() {
      return [];
    }
    get rank() {
      return 0;
    }
    subs(n, i) {
      return i?.canonical === true ? this.canonical : this;
    }
    map(n, i) {
      if (!this.ops) return n(this);
      let t = i?.canonical ?? this.isCanonical, r = i?.recursive ?? true, o = this.ops.map((s) => r ? s.map(n, i) : n(s));
      return n(this.engine.function(this.operator, o, { canonical: t }));
    }
    solve(n) {
      return null;
    }
    replace(n) {
      return null;
    }
    has(n) {
      return false;
    }
    get isPositive() {
    }
    get isNonNegative() {
    }
    get isNegative() {
    }
    get isNonPositive() {
    }
    get description() {
      if (this.baseDefinition && this.baseDefinition.description) return typeof this.baseDefinition.description == "string" ? [this.baseDefinition.description] : this.baseDefinition.description;
    }
    get url() {
      return this.baseDefinition?.url ?? void 0;
    }
    get wikidata() {
      return this.baseDefinition?.wikidata ?? void 0;
    }
    get complexity() {
    }
    get baseDefinition() {
    }
    get symbolDefinition() {
    }
    get functionDefinition() {
    }
    infer(n) {
      return false;
    }
    bind() {
    }
    reset() {
    }
    get value() {
      return this.N().valueOf();
    }
    set value(n) {
      throw new Error(`Can't change the value of \\(${this.latex}\\)`);
    }
    get type() {
      return "unknown";
    }
    set type(n) {
      throw new Error(`Can't change the type of \\(${this.latex}\\)`);
    }
    get isNumber() {
    }
    get isInteger() {
    }
    get isRational() {
    }
    get isReal() {
    }
    simplify(n) {
      return this;
    }
    expand() {
      return Me(this) ?? this;
    }
    evaluate(n) {
      return this.simplify();
    }
    N() {
      return this.evaluate({ numericApproximation: true });
    }
    compile(n) {
      if (n?.to && n.to !== "javascript") throw new Error("Unknown target");
      n ?? (n = { optimize: ["simplify"] });
      let i = this;
      return n?.optimize?.includes("simplify") && (i = i.simplify()), n?.optimize?.includes("evaluate") && (i = i.evaluate()), bl(i, n?.functions, n?.vars, n?.imports, n?.preamble);
    }
    get isCollection() {
      return false;
    }
    contains(n) {
      return false;
    }
    subsetOf(n, i) {
      return false;
    }
    get size() {
      return 0;
    }
    each(n, i) {
      return { next() {
        return { done: true, value: void 0 };
      } };
    }
    at(n) {
    }
    get(n) {
    }
    indexOf(n) {
      return -1;
    }
  };
  function Gl(e12, n) {
    if (e12.operator, e12.symbol) {
      let i = e12.engine.lookupSymbol(e12.symbol);
      if (i && i.value !== void 0) return;
      let t = e12.engine.lookupFunction(e12.symbol);
      if (t && t.evaluate) return;
      n.add(e12.symbol);
      return;
    }
    if (e12.ops) for (let i of e12.ops) Gl(i, n);
  }
  function Ul(e12, n) {
    if (e12.symbol) {
      n.add(e12.symbol);
      return;
    }
    if (e12.ops) for (let i of e12.ops) Ul(i, n);
  }
  function jl(e12, n) {
    if (e12.symbol) {
      let i = e12.symbol;
      if (i === "Unknown" || i === "Undefined" || i === "Nothing") return;
      let t = e12.engine.lookupSymbol(i);
      if (t && t.value !== void 0) return;
      let r = e12.engine.lookupFunction(i);
      if (r && r.evaluate) return;
      n.add(i);
      return;
    }
    if (e12.ops) for (let i of e12.ops) jl(i, n);
  }
  function Zl(e12, n) {
    let i = !n || e12.operator === n ? [e12] : [];
    if (e12.ops) for (let t of e12.ops) i.push(...Zl(t, n));
    return i;
  }
  function Fs(e12) {
    let n = [], i = (t, r = []) => {
      if (t.length === 0) n.push(r);
      else for (let o = 0; o < t.length; o++) {
        let s = t.slice(), a = s.splice(o, 1);
        i(s.slice(), r.concat(a));
      }
    };
    return i(e12), n;
  }
  function Hl(e12) {
    for (let n in e12) n.startsWith("_") && e12.hasOwnProperty(n) && Object.defineProperty(e12, n, { enumerable: false, configurable: true, writable: true, value: e12[n] });
  }
  function io(e12, n) {
    if (!e12.ops) return [];
    let i = e12.ops, t = e12.functionDefinition;
    if (!t || i.length === 0) return i;
    let r = t?.associative ? t.name : "";
    if (i = Ri(i, r), t.lazy) return i;
    let o = [];
    for (let s of i) {
      let a = s.operator;
      if (a === "Hold") o.push(s);
      else {
        let u = a === "ReleaseHold" ? s.op1 : s;
        if (u) {
          let l = n(u);
          l !== null && o.push(l);
        }
      }
    }
    return Ri(o, r);
  }
  function Wn(e12, n, i) {
    if (((s) => i && i.some((a) => a.value.isSame(s)))(e12) || (i || (i = [{ value: e12, because: "initial" }]), !e12.isValid)) return i;
    if (!(e12.isCanonical || e12.isStructural)) {
      let s = e12.canonical;
      return s.isCanonical || s.isStructural ? Wn(s, n, i) : i;
    }
    let r = e12.engine, o = n?.rules ? r.rules(n.rules, { canonical: true }) : r.getRuleSet("standard-simplification");
    n = { ...n, rules: o };
    do {
      let s = Fp(e12, o, n, i);
      if (s.length <= i.length) break;
      e12 = s.at(-1).value, i = s;
    } while (!i.slice(0, -1).some((s) => s.value.isSame(e12)));
    return i;
  }
  function Lp(e12, n, i) {
    if (n == null || e12 === n || e12.isSame(n)) return false;
    let t = e12.engine;
    return i ?? (i = (r) => t.costFunction(r)), i(n) <= 1.2 * i(e12);
  }
  function Wl(e12, n) {
    return e12.ops ? e12.engine.function(e12.operator, io(e12, (i) => Wn(i, n).at(-1).value)) : e12;
  }
  function Fp(e12, n, i, t) {
    if (e12.isNumberLiteral || e12.string) return t;
    if (e12.symbol) {
      let s = Dn(e12, n, { recursive: false, canonical: true, useVariations: false });
      return s.length > 0 ? [...t, ...s] : t;
    }
    let r = Wl(e12, i);
    r.isSame(e12) || (t = [...t, { value: r, because: "simplified operands" }], e12 = r);
    let o = qp(e12, n, i, t);
    return o.length > t.length ? o : t;
  }
  function qp(e12, n, i, t) {
    let r = Dn(e12, n, { recursive: false, canonical: true, useVariations: i.useVariations ?? false });
    if (r.length === 0) return t;
    let o = r.at(-1).value;
    return o.isSame(e12) || (o = Wl(o), !Lp(e12, o, i?.costFunction)) ? t : (r.at(-1).value = o, [...t, ...r]);
  }
  function mi(e12) {
    return e12.symbol?.startsWith("_") ?? (e12.operator === "Wildcard" || e12.operator === "WildcardSequence" || e12.operator === "WildcardOptionalSequence");
  }
  function gi(e12) {
    if (e12.symbol?.startsWith("_")) return e12.symbol;
    if (e12.nops === 1) {
      let n = e12.op1;
      if (e12.operator === "Wildcard") return `_${n}`;
      if (e12.operator === "WildcardSequence") return `__${n}`;
      if (e12.operator === "WildcardOptionalSequence") return `___${n}`;
    }
    return e12.operator === "Wildcard" ? "_" : e12.operator === "WildcardSequence" ? "__" : e12.operator === "WildcardOptionalSequence" ? "___" : null;
  }
  function $s(e12) {
    return typeof e12 == "string" ? e12.startsWith("_") : mi(e12) ? true : e12.ops ? $s(e12.operator) || e12.ops.some($s) : false;
  }
  function to(e12, n, i) {
    return e12.startsWith("_"), e12 === "_" || e12 === "__" || e12 === "___" ? i : e12 in i ? n.isSame(i[e12]) ? i : null : $s(n) ? null : { ...i, [e12]: n };
  }
  function hi(e12, n, i, t) {
    if (mi(n)) return to(gi(n), e12, i);
    let r = t.acceptVariants ?? true;
    if (t = { ...t, acceptVariants: true }, n.numericValue !== null) return e12.numericValue === null ? null : n.isEqual(e12) ? i : r ? qs(e12, n, i, t) : null;
    let o = n.string;
    if (o !== null) return e12.string === o ? i : null;
    let s = n.symbol;
    if (s !== null) return s === e12.symbol ? i : r ? qs(e12, n, i, t) : null;
    if (n.ops) {
      let a = t.useVariations ?? false, u = e12.engine, l = null, f = n.operator;
      if (f.startsWith("_") ? (l = to(f, u.box(e12.operator), i), l !== null && (l = Vs(e12, n.ops, l, t))) : f === e12.operator && (l = u.lookupFunction(f)?.commutative ? Vp(e12, n, i, t) : Vs(e12, n.ops, i, t)), l === null && a) {
        if (!r) return null;
        l = qs(e12, n, i, t);
      }
      return l !== null && (i = l), t.recursive && e12.ops && (l = $p(e12, n, i, { ...t, acceptVariants: r }) ?? l), l;
    }
    return null;
  }
  function $p(e12, n, i, t) {
    e12.ops;
    let r = null;
    for (let o of e12.ops) {
      let s = hi(o, n, i, t);
      s !== null && (r = s, i = s);
    }
    return r;
  }
  function qs(e12, n, i, t) {
    if (!t.useVariations) return null;
    let r = e12.engine, o = { ...t, acceptVariants: false }, s = (u, l) => hi(r.function(u, l, { canonical: false }), n, i, o), a = n.operator;
    if (a === "Negate" && e12.is(0)) return hi(r.Zero, n.op1, i, o);
    if (a === "Add") {
      let u = s("Add", [0, e12]);
      if (u !== null || (e12.operator === "Subtract" && (u = s("Add", [e12.op1, ["Negate", e12.op2]])), u !== null)) return u;
    }
    if (a === "Subtract") {
      let u = s("Subtract", [e12, 0]);
      if (u !== null || (e12.operator === "Negate" && (u = s("Subtract", [0, e12.op1])), u !== null)) return u;
    }
    if (a === "Multiply") {
      let u = s("Multiply", [1, e12]);
      if (u !== null || e12.operator === "Negate" && (u = s("Multiply", [-1, e12.op1]), u !== null) || e12.operator === "Divide" && (u = s("Multiply", [e12.op1, ["Divide", 1, e12.op2]]), u !== null)) return u;
    }
    if (a === "Divide") {
      let u = s("Divide", [e12, 1]);
      if (u !== null) return u;
    }
    if (a === "Square") {
      let u = s("Power", [e12, 2]);
      if (u !== null) return u;
    }
    if (a === "Exp") {
      let u = s("Power", [r.E, e12]);
      if (u !== null) return u;
    }
    if (a === "Power") {
      if (n.op2.re === 2 && n.op2.im === 0) {
        let u = s("Square", [e12]);
        if (u !== null) return u;
      }
      if (n.op1.symbol === "ExponentialE") {
        let u = s("Exp", [e12]);
        if (u !== null) return u;
      }
      {
        let u = s("Power", [e12, 1]);
        if (u !== null) return u;
      }
    }
    return null;
  }
  function Vp(e12, n, i, t) {
    e12.operator, n.operator;
    let r = Fs(n.ops);
    for (let o of r) {
      let s = Vs(e12, o, i, t);
      if (s !== null) return s;
    }
    return null;
  }
  function Vs(e12, n, i, t) {
    if (n.length === 0) return e12.ops && e12.ops.length === 0 ? i : null;
    let r = n[0].engine, o = { ...i }, s = [...e12.ops], a = 0;
    for (; a < n.length; ) {
      let u = n[a], l = gi(u);
      if (l !== null) if (l.startsWith("__")) {
        let f = 0;
        if (n[a + 1] === void 0) f = s.length + 1;
        else {
          let d = false;
          for (; !d && f < s.length; ) d = hi(s[f], n[a + 1], o, t) !== null, f += 1;
          if (!d && l.startsWith("___")) return null;
        }
        if (!l.startsWith("___") && f <= 1) return null;
        let c;
        if (f <= 1) e12.operator === "Add" ? c = r.Zero : e12.operator === "Multiply" ? c = r.One : c = r.Nothing;
        else if (f === 2) {
          if (s.length === 0) return null;
          c = s.shift();
        } else {
          let d = r.lookupFunction(e12.operator), m = s.splice(0, f - 1);
          d?.associative ? c = r.function(e12.operator, m, { canonical: false }) : c = r.function("Sequence", m, { canonical: false });
        }
        o = to(l, c, o);
      } else if (l.startsWith("_")) {
        if (s.length === 0) return null;
        o = to(l, s.shift(), o);
      } else o = hi(s.shift(), u, o, t);
      else {
        let f = s.shift();
        if (!f) return null;
        o = hi(f, u, o, t);
      }
      if (o === null) return null;
      a += 1;
    }
    return s.length > 0 ? null : o;
  }
  function ot(e12, n, i) {
    n = n.structural;
    let t = i?.useVariations ?? false, r = { recursive: i?.recursive ?? false, useVariations: t, acceptVariants: t }, o = i?.substitution ?? {};
    return hi(e12.structural, n.structural, o, r);
  }
  function Jl(e12) {
    let n = e12.engine;
    if (e12.operator === "Hold") return;
    let i;
    if (e12.ops) {
      let t = e12.functionDefinition;
      if (t?.sgn) {
        let r = n.swapScope(e12.scope);
        i = t.sgn(e12.ops, { engine: n }), n.swapScope(r);
      }
      return i;
    }
    return e12.symbol ? e12.symbolDefinition?.sgn : e12.isNumberLiteral ? e12.sgn : "unsigned";
  }
  function st(e12) {
    if (e12 !== void 0) {
      if (e12 === "positive") return true;
      if (["non-positive", "zero", "unsigned", "negative", "negative-infinity"].includes(e12)) return false;
    }
  }
  function at(e12) {
    if (e12 !== void 0) {
      if (e12 === "positive" || e12 === "positive-infinity" || e12 === "non-negative") return true;
      if (["negative", "negative-infinity", "zero", "unsigned"].includes(e12)) return false;
    }
  }
  function ut(e12) {
    if (e12 !== void 0) {
      if (e12 === "negative" || e12 === "negative-infinity") return true;
      if (["non-negative", "zero", "unsigned", "positive", "positive-infinity"].includes(e12)) return false;
    }
  }
  function lt(e12) {
    if (e12 !== void 0) {
      if (e12 === "negative" || e12 === "negative-infinity" || e12 === "non-positive") return true;
      if (["positive", "zero", "unsigned"].includes(e12)) return false;
    }
  }
  function ro(e12, n, i) {
    return e12.generation === void 0 || e12.generation === n ? (e12.value === null && (e12.value = i()), e12.value) : (e12.generation = n, e12.value = i(), e12.value);
  }
  var ze = class extends Q {
    constructor(i, t, r, o) {
      super(i, o?.metadata);
      this._value = { value: null, generation: -1 };
      this._valueN = { value: null, generation: -1 };
      this._sgn = { value: null, generation: -1 };
      this._type = { value: null, generation: -1 };
      this._name = t, this._ops = r, this._isStructural = o?.structural ?? false, o?.canonical && (this._canonical = this), (o?.canonical || this._isStructural) && this.bind(), i._register(this);
    }
    get hash() {
      if (this._hash !== void 0) return this._hash;
      let i = 0;
      for (let t of this._ops) i = i << 1 ^ t.hash | 0;
      return i = i ^ mn(this._name) | 0, this._hash = i, i;
    }
    infer(i) {
      let t = this.functionDefinition;
      return !t || !t.inferredSignature ? false : (typeof t.signature != "string" && t.signature.kind === "signature" && (t.signature = { ...t.signature, result: gr(t.signature.result, i) }), true);
    }
    bind() {
      this._def = void 0, this._scope = this.engine.context, this._def = this.engine.lookupFunction(this._name);
      for (let i of this._ops) i.bind();
    }
    reset() {
    }
    get isCanonical() {
      return this._canonical === this;
    }
    set isCanonical(i) {
      this._canonical = i ? this : void 0;
    }
    get isPure() {
      if (this._isPure !== void 0) return this._isPure;
      if (!this.isCanonical) return this._isPure = false, false;
      let i = this.functionDefinition?.pure ?? false;
      return i && (i = this._ops.every((t) => t.isPure)), this._isPure = i, i;
    }
    get isConstant() {
      return this.isPure ? this._ops.every((i) => i.isConstant) : false;
    }
    get json() {
      return [this._name, ...this.structural.ops.map((i) => i.json)];
    }
    get scope() {
      return this._scope;
    }
    get operator() {
      return this._name;
    }
    get ops() {
      return this._ops;
    }
    get nops() {
      return this._ops.length;
    }
    get op1() {
      return this._ops[0] ?? this.engine.Nothing;
    }
    get op2() {
      return this._ops[1] ?? this.engine.Nothing;
    }
    get op3() {
      return this._ops[2] ?? this.engine.Nothing;
    }
    get isValid() {
      return this._name === "Error" ? false : this._ops.every((i) => i?.isValid);
    }
    get canonical() {
      return this._canonical ?? (this._canonical = this.isValid ? this.engine.function(this._name, this._ops) : this), this._canonical;
    }
    get structural() {
      if (this.isStructural) return this;
      let i = this.functionDefinition;
      if (i?.associative || i?.commutative) {
        let t = this.ops.map((o) => o.structural), r = [];
        if (!i.associative) r = t;
        else for (let o of t) o.operator === this.operator ? r.push(...o.ops) : r.push(o);
        return this.engine.function(this._name, this.isValid ? Ft(this._name, r) : r, { canonical: false, structural: true });
      }
      return this.engine.function(this._name, this.ops.map((t) => t.structural), { canonical: false, structural: true });
    }
    get isStructural() {
      return this._isStructural;
    }
    toNumericValue() {
      this.isCanonical || this.isStructural;
      let i = this.engine;
      if (this.operator === "Complex") return [i._numericValue({ re: this.op1.re, im: this.op2.re }), i.One];
      let t = this;
      if (t.operator === "Add" && (t = Gn(this), t.numericValue !== null)) {
        if (typeof t.numericValue == "number") {
          if (Number.isInteger(t.numericValue)) return [i._numericValue(t.numericValue), i.One];
        } else if (t.numericValue.isExact) return [t.numericValue, i.One];
      }
      if (t.operator === "Negate") {
        let [r, o] = t.op1.toNumericValue();
        return [r.neg(), o];
      }
      if (t.operator === "Multiply") {
        let r = [], o = i._numericValue(1);
        for (let s of t.ops) {
          let [a, u] = s.toNumericValue();
          o = o.mul(a), u.is(1) || r.push(u);
        }
        return r.length === 0 ? [o, i.One] : r.length === 1 ? [o, r[0]] : [o, ae(this.engine, r)];
      }
      if (t.operator === "Divide") {
        let [r, o] = t.op1.toNumericValue(), [s, a] = t.op2.toNumericValue(), u = r.div(s);
        return a.is(1) ? [u, o] : [u, i.function("Divide", [o, a])];
      }
      if (t.operator === "Power") {
        if (t.op2.numericValue === null) return [i._numericValue(1), this];
        let [r, o] = t.op1.toNumericValue();
        if (r.isOne) return [r, this];
        let s = z(t.op2);
        return s !== null ? [r.pow(s), i.function("Power", [o, t.op2])] : t.op2.is(0.5) ? [r.sqrt(), i.function("Sqrt", [o])] : [i._numericValue(1), this];
      }
      if (t.operator === "Sqrt") {
        let [r, o] = t.op1.toNumericValue();
        return o.is(1) || o.is(0) ? r.isOne || r.isZero ? [r, o] : [r.sqrt(), o] : [r.sqrt(), i.function("Sqrt", [o])];
      }
      if (t.operator === "Root") {
        let r = t.op2.re;
        if (isNaN(r) || t.op2.im !== 0) return [i._numericValue(1), this];
        let [o, s] = t.op1.toNumericValue();
        return r === 2 ? [o.sqrt(), i.function("Sqrt", [s])] : [o.root(r), i.function("Root", [s, t.op2])];
      }
      if (t.operator === "Abs") {
        let [r, o] = t.op1.toNumericValue();
        return [r.abs(), i.function("Abs", [o])];
      }
      if (t.operator, t.operator, t.operator === "Log" || t.operator === "Ln") {
        let r = t.op2.re;
        isNaN(r) && t.operator === "Log" && (r = 10);
        let [o, s] = t.op1.toNumericValue();
        return o.isOne ? [o, this] : i.box(o.ln(r)).add(i.function(t.operator, [s, t.op2])).toNumericValue();
      }
      return [i._numericValue(1), t];
    }
    subs(i, t) {
      let r = this._ops.map((o) => o.subs(i, t));
      return r.every((o) => o.isValid) ? this.engine.function(this._name, r, t) : this.engine.function(this._name, r, { canonical: false });
    }
    replace(i, t) {
      return Dn(this, i, t).at(-1)?.value ?? null;
    }
    match(i, t) {
      return ot(this, i, t);
    }
    has(i) {
      if (typeof i == "string") {
        if (this._name === i) return true;
      } else if (i.includes(this._name)) return true;
      return this._ops.some((t) => t.has(i));
    }
    get sgn() {
      let i = this.isPure && this._ops.every((t) => t.isConstant) ? void 0 : this.engine.generation;
      return ro(this._sgn, i, () => {
        if (!(!this.isValid || this.isNumber !== true)) return Jl(this);
      });
    }
    get isNaN() {
      return this.sgn === "nan";
    }
    get isInfinity() {
      let i = this.sgn;
      return i === "positive-infinity" || i === "negative-infinity" || i === "complex-infinity";
    }
    get isFinite() {
      if (this.isNumber !== true) return false;
      if (!(this.isNaN === void 0 || this.isInfinity === void 0)) return !(this.isNaN || this.isInfinity);
    }
    get isOne() {
      if (this.isNonPositive === true || this.isReal === false) return false;
    }
    get isNegativeOne() {
      if (this.isNonNegative === true || this.isReal === false) return false;
    }
    get isPositive() {
      return st(this.sgn);
    }
    get isNonNegative() {
      return at(this.sgn);
    }
    get isNegative() {
      return ut(this.sgn);
    }
    get isNonPositive() {
      return lt(this.sgn);
    }
    get numerator() {
      return this.numeratorDenominator[0];
    }
    get denominator() {
      return this.numeratorDenominator[1];
    }
    get numeratorDenominator() {
      if (!this.isCanonical) return this.canonical.numeratorDenominator;
      if (this.isNumber !== true) return [this.engine.Nothing, this.engine.Nothing];
      let i = this.operator;
      if (i === "Divide") return [this.op1, this.op2];
      if (i === "Negate") {
        let [t, r] = this.op1.numeratorDenominator;
        return [t.neg(), r];
      }
      if (i === "Power") {
        let [t, r] = this.op1.numeratorDenominator;
        return [t.pow(this.op2), r.pow(this.op2)];
      }
      if (i === "Root") {
        let [t, r] = this.op1.numeratorDenominator;
        return [t.root(this.op2), r.root(this.op2)];
      }
      if (i === "Sqrt") {
        let [t, r] = this.op1.numeratorDenominator;
        return [t.sqrt(), r.sqrt()];
      }
      if (i === "Abs") {
        let [t, r] = this.op1.numeratorDenominator;
        return [t.abs(), r.abs()];
      }
      return i === "Multiply" ? new Te(this.engine, this.ops).asNumeratorDenominator() : [this, this.engine.One];
    }
    neg() {
      return fi(this.canonical);
    }
    inv() {
      if (!this.isCanonical) return this.canonical.inv();
      if (this.isOne) return this;
      if (this.isNegativeOne) return this;
      if (this.operator === "Sqrt") return this.op1.inv().sqrt();
      if (this.operator === "Divide") return this.op2.div(this.op1);
      if (this.operator === "Power") {
        let i = this.op2.neg();
        return i.operator !== "Negate" ? this.op1.pow(i) : this.engine.function("Power", [this.op1, i]);
      }
      if (this.operator === "Root") {
        let i = this.op2.neg();
        return i.operator !== "Negate" ? this.op1.root(i) : this.engine.function("Root", [this.op1, i]);
      }
      return this.operator === "Exp" ? this.engine.E.pow(this.op1.neg()) : this.operator === "Rational" ? this.op2.div(this.op1) : this.operator === "Negate" ? this.op1.inv().neg() : this.engine._fn("Divide", [this.engine.One, this.canonical]);
    }
    abs() {
      return this.isCanonical ? this.operator === "Abs" || this.operator === "Negate" ? this : this.isNonNegative ? this : this.isNonPositive ? this.neg() : this.engine._fn("Abs", [this]) : this.canonical.abs();
    }
    add(i) {
      return i === 0 ? this : Z(this.canonical, this.engine.box(i));
    }
    mul(i) {
      if (i === 0) return this.engine.Zero;
      if (i === 1) return this;
      if (i === -1) return this.neg();
      if (i instanceof V) {
        if (i.isZero) return this.engine.Zero;
        if (i.isOne) return this.canonical;
        if (i.isNegativeOne) return this.neg();
      }
      return ue(this.canonical, this.engine.box(i));
    }
    div(i) {
      return qi(this, i);
    }
    pow(i) {
      return pe(this, i, { numericApproximation: false });
    }
    root(i) {
      if (!this.isCanonical) return this.canonical.root(i);
      typeof i != "number" && (i = i.canonical);
      let t = typeof i == "number" ? i : i.im === 0 ? i.re : void 0;
      if (t === 0) return this.engine.NaN;
      if (t === 1) return this;
      if (t === -1) return this.inv();
      if (t === 2) return this.engine.function("Sqrt", [this]);
      if (this.operator === "Power" && t !== void 0) {
        let [r, o] = this.ops;
        return r.pow(o.div(t));
      }
      if (this.operator === "Divide") {
        let [r, o] = this.ops;
        return r.root(i).div(o.root(i));
      }
      if (this.operator === "Negate" && t !== void 0) return t % 2 === 0 ? this.op1.root(i) : this.op1.root(i).neg();
      if (this.operator === "Sqrt") {
        if (t !== void 0) return this.op1.root(t + 2);
        if (typeof i != "number") return this.op1.root(i.add(2));
      }
      if (this.operator === "Multiply") {
        let r = this.ops.map((o) => o.root(i));
        return ue(...r);
      }
      if (this.operator === "Root") {
        let [r, o] = this.ops;
        return r.root(o.mul(i));
      }
      if (this.isNumberLiteral) {
        let r = this.numericValue;
        if (typeof r == "number") {
          if (r < 0) return this.engine.NaN;
          if (r === 0) return this.engine.Zero;
          if (r === 1) return this.engine.One;
          if (t !== void 0) {
            let o = this.engine.number(Math.pow(r, 1 / t));
            if (!o.isFinite || o.isInteger) return o;
          }
        } else {
          if (r.isOne) return this.engine.One;
          if (r.isZero) return this.engine.Zero;
          if (t !== void 0) {
            let o = r.root(t);
            if (o.isExact) return this.engine.number(o);
          }
        }
      }
      return this.engine._fn("Root", [this, this.engine.box(i)]);
    }
    sqrt() {
      return this.root(2);
    }
    ln(i) {
      let t = i ? this.engine.box(i) : void 0;
      if (!this.isCanonical) return this.canonical.ln(t);
      if (this.is(0)) return this.engine.NegativeInfinity;
      if (this.operator === "Exp") return this.op1;
      if (t && this.isSame(t)) return this.engine.One;
      if (!t && this.isSame(this.engine.E)) return this.engine.One;
      if (this.operator === "Power") {
        let [r, o] = this.ops;
        return r.isSame(this.engine.E) ? o : o.mul(r.ln(t));
      }
      if (this.operator === "Root") {
        let [r, o] = this.ops;
        return o.div(r.ln(t));
      }
      return this.operator === "Sqrt" ? this.op1.ln(t).div(2) : this.operator === "Divide" ? this.op1.ln(t).sub(this.op2.ln(t)) : t && t.type === "finite_integer" ? t.re === 10 ? this.engine._fn("Log", [this]) : this.engine._fn("Log", [this, t]) : this.engine._fn("Ln", [this]);
    }
    get complexity() {
      if (this.isCanonical) return this.functionDefinition?.complexity ?? jn;
    }
    get baseDefinition() {
      return this._def;
    }
    get functionDefinition() {
      return this._def;
    }
    get isNumber() {
      let i = this.type;
      if (i !== "unknown") return g(i, "number");
    }
    get isInteger() {
      let i = this.type;
      if (i !== "unknown") return g(i, "integer");
    }
    get isRational() {
      let i = this.type;
      if (i !== "unknown") return g(i, "rational");
    }
    get isReal() {
      let i = this.type;
      if (i !== "unknown") return g(i, "real");
    }
    get isFunctionExpression() {
      return true;
    }
    get type() {
      let i = this.isPure && this._ops.every((t) => t.isConstant) ? void 0 : this.engine.generation;
      return ro(this._type, i, () => zp(this)) ?? "unknown";
    }
    simplify(i) {
      return Wn(this, i).at(-1)?.value ?? this;
    }
    evaluate(i) {
      let t = () => {
        if (!this.isValid) return this;
        let r = i?.numericApproximation ?? false;
        if (r) {
          let u = this.operator;
          if (u === "Integrate" || u === "Limit") return this.engine.box(["N", this], { canonical: true }).evaluate(i);
        }
        if (!this.isCanonical) {
          this.engine.pushScope();
          let u = this.canonical;
          return this.engine.popScope(), !u.isCanonical || !u.isValid ? this : u.evaluate(i);
        }
        let o = this.functionDefinition;
        if (o?.threadable && this.ops.some((u) => ie(u))) {
          let u = su(this._ops);
          if (!u) return this.engine.Nothing;
          let l = [];
          for (; ; ) {
            let { done: f, value: c } = u.next();
            if (f) break;
            l.push(this.engine._fn(this.operator, c).evaluate(i));
          }
          return l.length === 0 ? this.engine.Nothing : l.length === 1 ? l[0] : this.engine._fn("List", l);
        }
        let s = io(this, (u) => u.evaluate(i)), a;
        if (o) {
          let u = this.engine, l = u.swapScope(this.scope);
          a = o.evaluate?.(s, { numericApproximation: r, engine: u }), u.swapScope(l);
        }
        return a ?? this.engine.function(this._name, s);
      };
      return ro(i?.numericApproximation ? this._valueN : this._value, this.engine.generation, t);
    }
    N() {
      return this.evaluate({ numericApproximation: true });
    }
    solve(i) {
      let t = Et(i);
      return t.length !== 1 ? null : Vr(this.simplify(), t[0]);
    }
    get isCollection() {
      let i = this.functionDefinition;
      return i ? i.collection?.contains !== void 0 || i.collection?.size !== void 0 : false;
    }
    contains(i) {
      return this.functionDefinition?.collection?.contains?.(this, i) ?? false;
    }
    get size() {
      return this.functionDefinition?.collection?.size?.(this) ?? 0;
    }
    each(i, t) {
      let r = this.functionDefinition?.collection?.iterator?.(this, i, t);
      return r || { next() {
        return { done: true, value: void 0 };
      } };
    }
    at(i) {
      return this.functionDefinition?.collection?.at?.(this, i);
    }
    get(i) {
      if (typeof i == "string") return this.functionDefinition?.collection?.at?.(this, i);
      if (i.string) return this.functionDefinition?.collection?.at?.(this, i.string);
    }
    indexOf(i) {
      return this.functionDefinition?.collection?.indexOf?.(this, i) ?? -1;
    }
    subsetOf(i, t) {
      return this.functionDefinition?.collection?.subsetOf?.(this, i, t) ?? false;
    }
  };
  function zp(e12) {
    if (!e12.isValid) return "error";
    if (e12.ops) {
      let n = e12.functionDefinition;
      if (!n) return "function";
      let i = Qn(n.signature) ?? "any";
      return typeof n.type == "function" ? B(n.type(e12.ops, { engine: e12.engine })) ?? i : i;
    }
    if (e12.symbol || e12.isNumberLiteral) return e12.type;
    if (e12.string) return "string";
    if (e12.tensor) return e12.type;
  }
  var bn = class e6 extends Q {
    constructor(n, i, t) {
      super(n, t), this._string = i.normalize(), n._register(this);
    }
    get json() {
      return `'${this._string}'`;
    }
    get hash() {
      return mn("String" + this._string);
    }
    get operator() {
      return "String";
    }
    get isPure() {
      return true;
    }
    get isCanonical() {
      return true;
    }
    set isCanonical(n) {
    }
    get type() {
      return "string";
    }
    get complexity() {
      return 19;
    }
    get string() {
      return this._string;
    }
    match(n, i) {
      return _n(n) || (n = this.engine.box(n, { canonical: false })), mi(n) ? { [gi(n)]: this } : n instanceof e6 && this._string === n._string ? {} : null;
    }
    get isCollection() {
      return true;
    }
    contains(n) {
      return n.string ? this._string.includes(n.string) : false;
    }
    get size() {
      return this._string.length;
    }
    each(n, i) {
      let t = this.string, r = n ?? 1;
      return i = Math.min(i ?? t.length, t.length), i <= 0 ? { next: () => ({ value: void 0, done: true }) } : { next: () => i > 0 ? (i--, { value: this.engine.string(t[r++ - 1]), done: false }) : { value: void 0, done: true } };
    }
    at(n) {
      return this.engine.string(this._string[n - 1]);
    }
    get(n) {
    }
    indexOf(n) {
      return n.string ? this._string.indexOf(n.string) : -1;
    }
  };
  function oo(e12, n) {
    switch (n) {
      case "float64":
      case "float32":
      case "int32":
      case "uint8":
        return new zs(e12);
      case "complex128":
      case "complex64":
        return new Us(e12);
      case "bool":
      case "string":
      case "expression":
        return new Gs(e12);
    }
    throw new Error(`Unknown dtype ${n}`);
  }
  var zs = class {
    constructor(n) {
      this.ce = n;
      this.one = 1;
      this.zero = 0;
      this.nan = NaN;
    }
    cast(n, i) {
      let t = this.ce;
      switch (i) {
        case "float64":
        case "float32":
        case "int32":
        case "uint8":
          return n;
        case "complex128":
        case "complex64":
          return Array.isArray(n) ? n.map((r) => t.complex(r)) : this.ce.complex(n);
        case "bool":
          return Array.isArray(n) ? n.map((r) => r !== 0) : n !== 0;
        case "string":
          return Array.isArray(n) ? n.map((r) => Number(r).toString()) : Number(n).toString();
        case "expression":
          return Array.isArray(n) ? n.map((r) => t.number(r)) : t.number(n);
      }
      throw new Error(`Cannot cast ${n} to ${i}`);
    }
    expression(n) {
      return this.ce.number(n);
    }
    isZero(n) {
      return n === 0;
    }
    isOne(n) {
      return n === 1;
    }
    equals(n, i) {
      return n === i;
    }
    add(n, i) {
      return n + i;
    }
    addn(...n) {
      return n.reduce((i, t) => i + t, 0);
    }
    neg(n) {
      return -n;
    }
    sub(n, i) {
      return n - i;
    }
    mul(n, i) {
      return n * i;
    }
    muln(...n) {
      return n.reduce((i, t) => i * t, 1);
    }
    div(n, i) {
      return n / i;
    }
    pow(n, i) {
      return n ** i;
    }
    conjugate(n) {
      return n;
    }
  };
  var Gs = class {
    constructor(n) {
      this.one = n.One, this.zero = n.Zero, this.nan = n.NaN, this.ce = n;
    }
    cast(n, i) {
      if (Array.isArray(n)) return n.map((r) => this.cast(r, i));
      let t = n.value;
      switch (i) {
        case "float64":
        case "float32":
          return typeof t == "number" ? t : void 0;
        case "int32":
          return typeof t == "number" ? Math.round(t) : void 0;
        case "uint8":
          if (typeof t != "number") return;
          let r = Math.round(t);
          return r >= 0 && r <= 255 ? r : void 0;
        case "complex128":
        case "complex64":
          return typeof t == "number" ? this.ce.complex(t) : isNaN(n.im) ? void 0 : this.ce.complex(n.re, n.im);
        case "bool":
          return typeof t == "boolean" ? t : void 0;
        case "string":
          return typeof t == "string" ? t : void 0;
        case "expression":
          return n;
      }
      throw new Error(`Cannot cast ${n} to ${i}`);
    }
    expression(n) {
      return n;
    }
    isZero(n) {
      return n.is(0);
    }
    isOne(n) {
      return n.is(1);
    }
    equals(n, i) {
      return n.isSame(i) === true;
    }
    add(n, i) {
      return n.add(i);
    }
    addn(...n) {
      return Z(...n);
    }
    neg(n) {
      return n.neg();
    }
    sub(n, i) {
      return n.sub(i);
    }
    mul(n, i) {
      return n.mul(i);
    }
    muln(...n) {
      return ue(...n);
    }
    div(n, i) {
      return n.div(i);
    }
    pow(n, i) {
      return n.pow(i);
    }
    conjugate(n) {
      return this.ce.function("Conjugate", [n]).evaluate();
    }
  };
  var Us = class {
    constructor(n) {
      this.ce = n, this.one = n.complex(1), this.zero = n.complex(0), this.nan = n.complex(NaN);
    }
    cast(n, i) {
      if (Array.isArray(n)) return n.map((t) => this.cast(t, i));
      switch (i) {
        case "float64":
          return n.im === 0 ? n.re : void 0;
        case "float32":
          return n.im === 0 ? n.re : void 0;
        case "int32":
          return n.im === 0 ? Math.round(n.re) : void 0;
        case "uint8":
          if (n.im !== 0) return;
          let t = Math.round(n.re);
          return t >= 0 && t <= 255 ? t : void 0;
        case "complex128":
          return n;
        case "complex64":
          return n;
        case "bool":
          return !(n.im === 0 && n.re === 0);
        case "string":
          return n.toString();
        case "expression":
          return this.ce.number(n);
      }
      throw new Error(`Cannot cast ${n} to ${i}`);
    }
    expression(n) {
      return this.ce.number(n);
    }
    isZero(n) {
      return n.isZero();
    }
    isOne(n) {
      return n.re === 1 && n.im === 0;
    }
    equals(n, i) {
      return n.equals(i);
    }
    add(n, i) {
      return n.add(i);
    }
    addn(...n) {
      return n.reduce((i, t) => i.add(t), this.zero);
    }
    neg(n) {
      return n.neg();
    }
    sub(n, i) {
      return n.sub(i);
    }
    mul(n, i) {
      return n.mul(i);
    }
    muln(...n) {
      return n.reduce((i, t) => i.mul(t), this.one);
    }
    div(n, i) {
      return n.div(i);
    }
    pow(n, i) {
      return n.pow(i);
    }
    conjugate(n) {
      return n.conjugate();
    }
  };
  function so(e12, n) {
    return e12 === void 0 ? n : e12 === n ? e12 : e12 === "expression" || n === "expression" || e12 === "string" || n === "string" ? "expression" : e12 === "complex128" || n === "complex128" ? "complex128" : e12 === "complex64" || n === "complex64" ? "complex64" : e12 === "float64" || n === "float64" ? "float64" : e12 === "float32" || n === "float32" ? "float32" : e12 === "int32" || n === "int32" ? "int32" : e12 === "uint8" || n === "uint8" ? "uint8" : e12 === "bool" || n === "bool" ? "bool" : "expression";
  }
  function Yl(e12) {
    if (ke(e12)) return "bool";
    if (!e12.isNumberLiteral) return "expression";
    switch (e12.type) {
      case "real":
      case "rational":
      case "finite_real":
      case "finite_rational":
      case "integer":
        return "float64";
      case "complex":
      case "finite_complex":
      case "imaginary":
      case "finite_imaginary":
        return "complex128";
      case "finite_integer": {
        let n = e12.re;
        return n >= 0 && n <= 255 ? "uint8" : "int32";
      }
      case "boolean":
        return "bool";
      case "string":
        return "string";
      default:
        return "expression";
    }
  }
  var Jn = class e7 {
    constructor(n, i) {
      this.ce = n;
      this.shape = i.shape, this.rank = this.shape.length, this._strides = Gp(this.shape), this.field = oo(n, i.dtype);
    }
    static align(n, i) {
      if (n.dtype === i.dtype) return [n, i];
      let t = so(n.dtype, i.dtype);
      return n.dtype === t ? [n, i.upcast(t)] : [n.upcast(t), i];
    }
    static broadcast(n, i, t) {
      if (!(t instanceof e7)) return i.map1(n, t);
      let [r, o] = e7.align(i, t), s = r.data.map((a, u) => n(a, o.data[u]));
      return En(r.ce, { dtype: r.dtype, shape: r.shape, data: s });
    }
    get expression() {
      let n = this.shape, i = this.rank, t = this.data, r = this._index.bind(this), o = this.field.expression.bind(this.field), s = (a) => {
        if (a.length === i - 1) {
          let u = r(a), l = this.ce._fn("List", t.slice(u, u + n[i - 1]).map((f) => o(f)));
          return l.isCanonical = l.ops.every((f) => f.isCanonical), l;
        } else {
          let u = [];
          for (let f = 0; f <= n[a.length] - 1; f++) u.push(s([...a, f + 1]));
          let l = this.ce._fn("List", u);
          return l.isCanonical = l.ops.every((f) => f.isCanonical), l;
        }
      };
      return s([]);
    }
    get array() {
      let n = this.shape, i = this.rank, t = this.data;
      if (i === 1) return t;
      if (i === 2) {
        let [s, a] = n, u = new Array(s);
        for (let l = 0; l < s; l++) u[l] = t.slice(l * a, (l + 1) * a);
        return u;
      }
      let r = this._index.bind(this), o = (s) => {
        if (s.length === i - 1) {
          let a = r(s);
          return t.slice(a, a + n[i - 1]);
        } else {
          let a = [];
          for (let u = 0; u < n[s.length]; u++) a.push(o([...s, u + 1]));
          return a;
        }
      };
      return o([]);
    }
    _index(n) {
      let i = this._strides;
      return n.reduce((t, r, o) => t + (r - 1) * i[o], 0);
    }
    get isSquare() {
      let n = this.shape;
      return n.length === 2 && n[0] === n[1];
    }
    get isSymmetric() {
      if (!this.isSquare) return false;
      let n = this.shape[0], i = this.data, t = this.field.equals.bind(this.field);
      for (let r = 0; r < n; r++) for (let o = r + 1; o < n; o++) if (!t(i[r * n + o], i[o * n + r])) return false;
      return true;
    }
    get isSkewSymmetric() {
      if (!this.isSquare) return false;
      let n = this.shape[0], i = this.data, t = this.field.equals.bind(this.field), r = this.field.neg.bind(this.field);
      for (let o = 0; o < n; o++) for (let s = o + 1; s < n; s++) if (!t(i[o * n + s], r(i[s * n + o]))) return false;
      return true;
    }
    get isUpperTriangular() {
      if (!this.isSquare) return false;
      let n = this.shape[0], i = this.data, t = this.field.isZero.bind(this.field);
      for (let r = 1; r < n; r++) for (let o = 0; o < r; o++) if (t(i[r * n + o])) return false;
      return true;
    }
    get isLowerTriangular() {
      if (!this.isSquare) return false;
      let n = this.shape[0], i = this.data, t = this.field.isZero.bind(this.field);
      for (let r = 0; r < n - 1; r++) for (let o = r + 1; o < n; o++) if (!t(i[r * n + o])) return false;
      return true;
    }
    get isTriangular() {
      if (!this.isSquare) return false;
      let n = this.shape[0], i = this.data, t = this.field.isZero.bind(this.field);
      for (let r = 0; r < n; r++) for (let o = 0; o < n; o++) if (r < o && !t(i[r * n + o]) || r > o && !t(i[r * n + o])) return false;
      return true;
    }
    get isDiagonal() {
      if (!this.isSquare) return false;
      let n = this.shape[0], i = this.data, t = this.field.isZero.bind(this.field);
      for (let r = 0; r < n; r++) for (let o = 0; o < n; o++) if (r === o && !t(i[r * n + o]) || r !== o && !t(i[r * n + o])) return false;
      return true;
    }
    get isIdentity() {
      if (!this.isSquare) return false;
      let [n, i] = this.shape, t = this.data, r = this.field.isOne.bind(this.field), o = this.field.isZero.bind(this.field);
      for (let s = 0; s < i; s++) for (let a = 0; a < i; a++) if (s === a && !r(t[s * i + a]) || s !== a && !o(t[s * i + a])) return false;
      return true;
    }
    get isZero() {
      let n = this.field.isZero.bind(this.field);
      return this.data.every((i) => n(i));
    }
    at(...n) {
      let i = this.data.length;
      return this.data[this._index(n) % i];
    }
    diagonal(n, i) {
      if (n ?? (n = 1), i ?? (i = 2), n === i || n <= 0 || n > this.shape.length || this.shape[n - 1] !== this.shape[i - 1]) return;
      let t = new Array(this.shape[n - 1]), r = this.data, o = this.shape[n - 1];
      for (let s = 0; s < o; s++) t[s] = r[s * o + s];
      return t;
    }
    trace(n, i) {
      if (this.rank !== 2) return;
      let [t, r] = this.shape;
      if (t !== r) return;
      let o = this.data, s = new Array(t);
      for (let a = 0; a < t; a++) s[a] = o[a * t + a];
      return this.field.addn(...s);
    }
    reshape(...n) {
      return En(this.ce, { dtype: this.dtype, shape: n, data: this.data });
    }
    flatten() {
      return this.data;
    }
    upcast(n) {
      let i = this.field.cast(this.data, n);
      if (i === void 0) throw Error(`Cannot cast tensor to ${n}`);
      return En(this.ce, { dtype: n, shape: this.shape, data: i });
    }
    transpose(n, i, t) {
      if (this.rank !== 2) return;
      if (n ?? (n = 1), i ?? (i = 2), n === i) return this;
      if (n <= 0 || n > 2 || i <= 0 || i > 2) return;
      let [r, o] = this.shape, s = this.data;
      t && (s = s.map((f) => t(f)));
      let a = 0, u = new Array(r * o), l = o;
      for (let f = 0; f < o; f++) for (let c = 0; c < r; c++) u[a++] = s[c * l + f];
      return En(this.ce, { dtype: this.dtype, shape: [o, r], data: u });
    }
    conjugateTranspose(n, i) {
      let t = this.field.conjugate.bind(this.field);
      return this.transpose(n, i, t);
    }
    determinant() {
      if (this.rank !== 2) return;
      let [n, i] = this.shape;
      if (n !== i) return;
      if (n === 1) return this.data[0];
      let t = this.field.add.bind(this.field), r = this.field.mul.bind(this.field), o = this.field.neg.bind(this.field);
      if (n === 2) {
        let [y, N, T, R] = this.data;
        return t(r(y, R), o(r(N, T)));
      }
      let s = this.field.addn.bind(this.field), a = this.field.muln.bind(this.field);
      if (n === 3) {
        let [y, N, T, R, _, L, be, Ne, Ni] = this.data;
        return s([a(y, _, Ni), a(N, L, be), a(T, R, Ne), o(a(T, _, be)), o(a(N, R, Ni)), o(a(y, L, Ne))]);
      }
      let u = this.shape[0], l = false, f = this.field.div.bind(this.field), c = this.field.sub.bind(this.field), d = new Array(u).fill(0).map((y, N) => N), m = [...this.data];
      for (let y = 0; y < u; y++) {
        let N = d[y - 1];
        if (this.at(N, y) === 0) {
          let _;
          for (_ = y + 1; _ < u; _++) if (this.at(d[_], y) !== 0) {
            N = d[_], d[_ - 1] = d[y - 1], d[y - 1] = N, l = !l;
            break;
          }
          if (_ === u) return this.at(N, y);
        }
        let T = this.at(N, y), R = y === 0 ? 1 : this.at(d[y - 2], y - 2);
        for (let _ = y + 1; _ < u; _++) {
          let L = d[_ - 1];
          for (let be = y + 1; be < u; be++) m[L][be] = f(c(r(m[L][be], T), r(m[L][y], m[N][be])), R);
        }
      }
      let b = m[d[u - 1]][u - 1];
      return l ? this.field.neg(b) : b;
    }
    inverse() {
      if (this.rank !== 2) return;
      let [n, i] = this.shape;
      if (n !== i) return;
      if (n === 2) {
        let [d, m, b, y] = this.data, N = this.determinant();
        if (N === void 0 || this.field.isZero(N)) return;
        let T = this.field.div.bind(this.field), R = this.field.neg.bind(this.field), _ = [T(y, N), R(T(m, N)), R(T(b, N)), T(d, N)];
        return En(this.ce, { dtype: this.dtype, shape: [i, i], data: _ });
      }
      let t = this.shape[0], r = this.field.div.bind(this.field), o = this.field.sub.bind(this.field), s = this.field.mul.bind(this.field), a = this.array, u = new Array(t).fill(0).map((d, m) => {
        let b = new Array(t).fill(0);
        return b[m] = 1, b;
      }), l = a.map((d, m) => [...d, ...u[m]]), f = new Array(t).fill(0).map((d, m) => m);
      for (let d = 0; d < t; d++) {
        let m = f[d - 1];
        if (this.at(m, d) === 0) {
          let N;
          for (N = d + 1; N < t; N++) if (this.at(f[N], d) !== 0) {
            m = f[N], f[N - 1] = f[d - 1], f[d - 1] = m;
            break;
          }
          if (N === t) return;
        }
        let b = this.at(m, d), y = d === 0 ? 1 : this.at(f[d - 2], d - 2);
        for (let N = d + 1; N < t; N++) {
          let T = f[N - 1];
          for (let R = d + 1; R < t * 2; R++) l[T][R] = o(l[T][R], s(r(s(l[T][d], l[m][R]), b), y));
        }
      }
      for (let d = t - 1; d >= 0; d--) {
        let m = l[f[d], d];
        for (let b = 0; b < d; b++) {
          let y = f[b];
          for (let N = t; N < t * 2; N++) l[y][N] = o(l[y][N], s(r(s(l[y][d], l[d][N]), m), m));
        }
        for (let b = t; b < t * 2; b++) l[d][b] = r(l[d][b], m);
      }
      let c = l.map((d) => d.slice(t));
      return En(this.ce, { dtype: this.dtype, shape: [i, i], data: c });
    }
    pseudoInverse() {
    }
    adjugateMatrix() {
    }
    minor(n, i) {
    }
    map1(n, i) {
      return En(this.ce, { dtype: this.dtype, shape: this.shape, data: this.data.map((t) => n(t, i)) });
    }
    map2(n, i) {
      let t = i.data;
      return En(this.ce, { dtype: this.dtype, shape: this.shape, data: this.data.map((r, o) => n(r, t[o])) });
    }
    add(n) {
      return e7.broadcast(this.field.add.bind(this.field), this, n);
    }
    subtract(n) {
      return e7.broadcast(this.field.sub.bind(this.field), this, n);
    }
    multiply(n) {
      return e7.broadcast(this.field.mul.bind(this.field), this, n);
    }
    divide(n) {
      return e7.broadcast(this.field.div.bind(this.field), this, n);
    }
    power(n) {
      return e7.broadcast(this.field.pow.bind(this.field), this, n);
    }
    equals(n) {
      if (this.rank !== n.rank || !this.shape.every((o, s) => o === n.shape[s])) return false;
      let i = this.field.equals.bind(this.field), t = this.field.cast.bind(this.field), r = this.dtype;
      return this.dtype !== n.dtype ? !!this.data.every((o, s) => i(o, t(n.data[s], r))) : this.data.every((o, s) => i(o, n.data[s]));
    }
  };
  function Gp(e12) {
    let n = new Array(e12.length);
    for (let i = e12.length - 1, t = 1; i >= 0; i--) n[i] = t, t *= e12[i];
    return n;
  }
  var js = class extends Jn {
    constructor(i, t) {
      super(i, t);
      this.dtype = "float64";
      this.data = t.data;
    }
    get isZero() {
      return this.data.every((i) => i === 0);
    }
  };
  var Zs = class extends Jn {
    constructor(i, t) {
      super(i, t);
      this.dtype = "complex128";
      this.data = t.data;
    }
  };
  var Hs = class extends Jn {
    constructor(i, t) {
      super(i, t);
      this.dtype = "bool";
      this.data = t.data;
    }
  };
  var Ws = class extends Jn {
    constructor(i, t) {
      super(i, t);
      this.dtype = "expression";
      this.data = t.data;
    }
  };
  function En(e12, n) {
    let i = n.dtype;
    return i === "float64" || i === "float32" || i === "uint8" || i === "int32" ? new js(e12, n) : i === "bool" ? new Hs(e12, n) : i === "complex64" || i === "complex128" ? new Zs(e12, n) : new Ws(e12, n);
  }
  var Zt = class e8 extends Q {
    constructor(i, t, r) {
      super(i, r?.metadata);
      this.options = r;
      if (t instanceof Jn) this._tensor = t;
      else {
        let o = r?.canonical ?? true;
        this._operator = t.op ?? "List", this._ops = o ? Le(i, t.ops) : t.ops, this._expression = i._fn(this._operator, this._ops, { canonical: o });
      }
      i._register(this);
    }
    get structural() {
      return this._expression ?? (this._expression = this._tensor.expression), this._expression;
    }
    get tensor() {
      if (this._tensor === void 0) {
        this._operator, this._ops;
        let i = Ql(this._operator, this._ops);
        if (i === void 0) {
          let t = Ql(this._operator, this._ops);
          throw new Error("Invalid tensor");
        }
        this._tensor = En(this.engine, i);
      }
      return this._tensor;
    }
    get baseDefinition() {
      return this.structural.baseDefinition;
    }
    get functionDefinition() {
      return this.structural.functionDefinition;
    }
    bind() {
      this.structural.bind();
    }
    reset() {
    }
    get hash() {
      return mn("BoxedTensor");
    }
    get canonical() {
      return this.isCanonical ? this : new e8(this.engine, { op: this._operator, ops: this._ops }, { canonical: true });
    }
    get isCanonical() {
      return this._tensor ? true : this._expression.isCanonical;
    }
    set isCanonical(i) {
      this._tensor || (this.structural.isCanonical = i);
    }
    get isPure() {
      return this._tensor ? true : this.structural.isPure;
    }
    get isValid() {
      return this._tensor ? true : this.structural.isValid;
    }
    get complexity() {
      return 97;
    }
    get operator() {
      return this._tensor ? "List" : this._operator;
    }
    get nops() {
      return this._tensor ? this._tensor.shape[0] : this.structural.nops;
    }
    get ops() {
      return this.structural.ops;
    }
    get op1() {
      if (this._tensor) {
        let i = this._tensor.data;
        return i.length === 0 ? this.engine.Nothing : this.engine.box(i[0]);
      }
      return this.structural.op1;
    }
    get op2() {
      if (this._tensor) {
        let i = this._tensor.data;
        return i.length < 2 ? this.engine.Nothing : this.engine.box(i[1]);
      }
      return this.structural.op2;
    }
    get op3() {
      if (this._tensor) {
        let i = this._tensor.data;
        return i.length < 3 ? this.engine.Nothing : this.engine.box(i[2]);
      }
      return this.structural.op3;
    }
    neg() {
      return this.structural.neg();
    }
    inv() {
      return this.engine.One.div(this.structural);
    }
    abs() {
      return this.structural.abs();
    }
    add(i) {
      return this.structural.add(i);
    }
    sub(i) {
      return this.structural.sub(i);
    }
    mul(i) {
      return this.structural.mul(i);
    }
    div(i) {
      return this.structural.div(i);
    }
    pow(i) {
      return this.structural.pow(i);
    }
    root(i) {
      return this.structural.root(i);
    }
    sqrt() {
      return this.structural.sqrt();
    }
    get shape() {
      return this.tensor.shape;
    }
    get rank() {
      return this.tensor.rank;
    }
    get type() {
      return this.isValid ? B("list<number>") : "error";
    }
    get json() {
      return this.structural.json;
    }
    isEqual(i) {
      return this === i ? true : i instanceof e8 ? this.tensor.equals(i.tensor) : this.structural.isEqual(i);
    }
    get isCollection() {
      return true;
    }
    contains(i) {
      let t = this.tensor.data, r = this.tensor.field.cast(i, this.tensor.dtype);
      if (typeof r == "number") return t.includes(r);
      let o = t.map((s) => this.tensor.field.cast(s, "expression") ?? i.engine.Nothing);
      for (let s of o) if (i.isSame(s)) return true;
      return false;
    }
    get size() {
      return this.tensor.shape.reduce((i, t) => i * t, 1);
    }
    each(i, t) {
      let r = this.tensor.data, o = i ?? 1;
      return t = Math.min(t ?? r.length, r.length), t <= 0 ? { next: () => ({ value: void 0, done: true }) } : { next: () => t > 0 ? (t--, { value: this.engine.box(r[o++ - 1]), done: false }) : { value: void 0, done: true } };
    }
    at(i) {
    }
    indexOf(i) {
      return -1;
    }
    match(i, t) {
      return _n(i) || (i = this.engine.box(i, { canonical: false })), mi(i) ? { [gi(i)]: this } : this.structural.match(i, t);
    }
    evaluate(i) {
      return this._tensor ? this : this.structural.evaluate(i);
    }
    simplify(i) {
      return this._tensor ? this : this.structural.simplify(i);
    }
    N() {
      return this._tensor ? this : this.structural.N();
    }
  };
  function Ce(e12) {
    return e12 instanceof Zt;
  }
  function Js(e12, n) {
    let i, t = [], r = true, o = (s, a = 0) => {
      if (s.length !== 0) {
        s.length > 1 && t[a] !== void 0 ? r = r && t[a] === s.length : t[a] = Math.max(t[a] ?? 0, s.length);
        for (let u of s) if (u.operator === e12 ? o(u.ops, a + 1) : i = so(i, Yl(u)), !r) return;
      }
    };
    return o(n), r ? { shape: t, dtype: i } : void 0;
  }
  function Ql(e12, n) {
    let { shape: i, dtype: t } = Js(e12, n) ?? { shape: [], dtype: void 0 };
    if (t === void 0) return;
    let r = true, o = [], s = oo(n[0].engine, "expression"), a = s.cast.bind(s), u = (l) => {
      for (let f of l) if (f.operator === e12) u(f.ops);
      else {
        let c = a(f, t);
        if (c === void 0) {
          r = false;
          return;
        }
        o.push(c);
      }
    };
    if (u(n), !!r) return { shape: i, data: o, dtype: t };
  }
  function ao(e12, { engine: n }) {
    if (e12.length === 0) return null;
    let i = e12[0];
    if (e12.length === 1) return i.canonical;
    if (e12.length === 2) {
      let t = i.canonical.re;
      if (Number.isInteger(t)) {
        let o = e12[1];
        if (o.operator === "Divide" || o.operator === "Rational") {
          let [s, a] = [o.op1.canonical.re, o.op2.canonical.re];
          if (s > 0 && s <= 1e3 && a > 1 && a <= 1e3 && Number.isInteger(s) && Number.isInteger(a)) {
            let u = o.canonical;
            return t < 0 && (u = u.neg()), n._fn("Add", [i.canonical, u]);
          }
        }
      }
      let r = e12[1];
      if (!isNaN(t)) {
        let o = r.canonical;
        if (o.re === 0 && o.im === 1) return n.number(n.complex(0, t));
      }
      if (i.symbol && r.operator === "Delimiter" && !n.lookupSymbol(i.symbol)) {
        if (r.nops === 0) return n.lookupFunction(i.symbol) || n.declare(i.symbol, "function"), n.box([i.symbol]);
        let o = r.op1.operator === "Sequence" ? r.op1.ops : [r.op1];
        if (o = W(o), !n.lookupSymbol(i.symbol)) return n.lookupFunction(i.symbol) || n.declare(i.symbol, "function"), n.function(i.symbol, o);
      }
      if (i.symbol && r.operator === "Delimiter" && (r.op2.string === "[,]" || r.op2.string === "[;]")) {
        let o = r.op1.operator === "Sequence" ? r.op1.ops : [r.op1];
        return n.function("At", [i, ...o]);
      }
    }
    return e12 = Xl(e12), e12 = W(e12), e12.every((t) => t.isValid && (t.type === "unknown" || g(t.type, "number") || ti(t) && !t.string)) ? ae(n, e12) : n._fn("Tuple", e12);
  }
  function Xl(e12) {
    let n = [];
    for (let i of e12) i.operator === "InvisibleOperator" ? n.push(...Xl(i.ops)) : n.push(i);
    return n;
  }
  function xi(e12, n) {
    if (n === false) return e12;
    if (n === true) return e12.canonical;
    typeof n == "string" && (n = [n]);
    for (let i of n) switch (i) {
      case "InvisibleOperator":
        e12 = Qs(e12);
        break;
      case "Number":
        e12 = Kl(e12);
        break;
      case "Multiply":
        e12 = ef(e12);
        break;
      case "Add":
        e12 = nf(e12);
        break;
      case "Power":
        e12 = ft(e12);
        break;
      case "Divide":
        e12 = tf(e12);
        break;
      case "Flatten":
        e12 = Ys(e12);
        break;
      case "Order":
        e12 = os(e12, { recursive: true });
        break;
      default:
        throw Error("Invalid canonical form");
    }
    return e12;
  }
  function Ys(e12) {
    if (!e12.operator || !e12.ops || e12.nops === 0) return e12;
    if (e12.operator === "Delimiter") return Ys(e12.op1);
    let n = e12.engine, i = e12.operator === "Add" || e12.operator === "Multiply";
    return i || n.lookupFunction(e12.operator)?.associative && (i = true), i ? n.function(e12.operator, Ri(e12.ops.map(Ys), e12.operator)) : e12;
  }
  function Qs(e12) {
    return e12.ops ? e12.operator === "InvisibleOperator" ? ao(e12.ops.map(Qs), { engine: e12.engine }) ?? e12 : e12.engine._fn(e12.operator, e12.ops.map(Qs)) : e12;
  }
  function Kl(e12) {
    return e12.isNumberLiteral ? e12.canonical : e12.ops ? e12.engine._fn(e12.operator, e12.ops.map(Kl)) : e12;
  }
  function ef(e12) {
    if (!e12.ops) return e12;
    let n = e12.ops.map(ef);
    return e12.operator === "Multiply" ? ae(e12.engine, n.map((i) => i.canonical)) : e12.operator === "Negate" ? ae(e12.engine, [n[0], e12.engine.NegativeOne]) : e12;
  }
  function nf(e12) {
    if (!e12.ops) return e12;
    let n = e12.ops.map(nf);
    return e12.operator === "Add" ? $e(e12.engine, n) : e12.operator === "Subtract" ? $e(e12.engine, [n[0], n[1].neg()]) : e12.engine._fn(e12.operator, n);
  }
  function ft(e12) {
    return e12.ops ? e12.operator === "Power" ? ft(e12.op1).pow(ft(e12.op2)) : e12.ops ? e12.engine._fn(e12.operator, e12.ops.map(ft)) : e12 : e12;
  }
  function tf(e12) {
    return e12.operator === "Divide" ? We(ft(e12.op1), ft(e12.op2)) : e12.ops ? e12.engine._fn(e12.operator, e12.ops.map(tf)) : e12;
  }
  function Xs(e12, n, i) {
    if (n instanceof Q) return n;
    if (n = C(n), typeof n == "string") return ln(e12, n, i);
    if (Array.isArray(n)) {
      let [t, ...r] = n;
      return new ze(e12, t, r.map((o) => Xs(e12, o, i)));
    }
    if (typeof n == "object") {
      if ("fn" in n) return Xs(e12, n.fn, i);
      if ("str" in n) return new bn(e12, n.str);
      if ("sym" in n) return ln(e12, n.sym, i);
      if ("num" in n) return ln(e12, n.num, i);
    }
    return ln(e12, n, i);
  }
  function uo(e12, n, i, t) {
    if (t = t ? { ...t } : {}, "canonical" in t || (t.canonical = true), !xe(n)) throw new Error(`Unexpected function name: "${n}" (not a valid identifier: ${Xe(n)})`);
    let r = t.structural ?? false;
    if (n === "Hold") return new ze(e12, "Hold", [Xs(e12, i[0], t)], { ...t, canonical: true, structural: r });
    if (n === "Error" || n === "ErrorCode") return e12._fn(n, i.map((s) => e12.box(s, { canonical: false })), t.metadata);
    if (n === "String") return i.length === 0 ? new bn(e12, "", t.metadata) : new bn(e12, i.map((s) => rf(s) ?? "").join(""), t.metadata);
    if (n === "Symbol" && i.length > 0) return e12.symbol(i.map((s) => rf(s) ?? "").join(""), t);
    if (n === "Number" && i.length === 1) return ln(e12, i[0], t);
    if (r === false && (t.canonical === true || t.canonical === "Number" || Array.isArray(t.canonical) && t.canonical.includes("Number"))) {
      if ((n === "Divide" || n === "Rational") && i.length === 2) {
        let s = of(i[0]);
        if (s !== null) {
          let a = of(i[1]);
          if (a !== null) return e12.number([s, a], t);
        }
        n = "Divide";
      }
      if (n === "Complex") {
        if (i.length === 1) {
          let s = i[0];
          if (s instanceof Q && s.isNumberLiteral) return e12.number(e12.complex(0, s.re), t);
          let a = w(i[0]);
          return a !== null && a !== 0 ? e12.number(e12.complex(0, a), t) : e12.box(s).mul(e12.I);
        }
        if (i.length === 2) {
          let s = i[0] instanceof Q ? i[0].re : w(i[0]), a = i[1] instanceof Q ? i[1].re : w(i[1]);
          return a !== null && s !== null && !isNaN(a) && !isNaN(s) ? a === 0 && s === 0 ? e12.Zero : a !== 0 ? e12.number(e12._numericValue({ re: s, im: a }), t) : ln(e12, i[0], t) : ln(e12, i[0], t).add(ln(e12, i[1], t).mul(e12.I));
        }
        throw new Error("Expected one or two arguments with Complex expression");
      }
      if (n === "Negate" && i.length === 1) {
        let s = i[0];
        if (typeof s == "number") return e12.number(-s, t);
        if (s instanceof X) return e12.number(s.neg(), t);
        let a = e12.box(s, t), u = a.numericValue;
        if (u !== null) return e12.number(typeof u == "number" ? -u : u.neg(), t);
        i = [a];
      }
    }
    return t.canonical === true ? Up(e12, n, i, t.metadata) : xi(new ze(e12, n, i.map((s) => ln(e12, s, { canonical: t.canonical, structural: r })), { metadata: t.metadata, canonical: false, structural: r }), t.canonical ?? false);
  }
  function ln(e12, n, i) {
    if (n == null) return e12.error("missing");
    if (n instanceof V) return Zp(e12, n);
    if (n instanceof Q) return xi(n, i?.canonical ?? true);
    i = i ? { ...i } : {}, "canonical" in i || (i.canonical = true);
    let t = i.canonical === true, r = i.structural ?? false;
    if (Array.isArray(n)) {
      if (typeof n[0] != "string") throw new Error(`The first element of an array should be a string (the function name): ${JSON.stringify(n)}`);
      return xi(uo(e12, n[0], n.slice(1), { canonical: t, structural: r }), i.canonical);
    }
    if (typeof n == "number" || n instanceof X || n instanceof F) return e12.number(n);
    if (typeof n == "string") return n.startsWith("'") && n.endsWith("'") ? new bn(e12, n.slice(1, -1)) : /^[+-]?[0-9]/.test(n) ? e12.number(n) : xe(n) ? e12.symbol(n, { canonical: t }) : e12.error("invalid-identifier", n);
    if (typeof n == "object") {
      if ("fn" in n) {
        let [o, ...s] = n.fn;
        return xi(uo(e12, o, s, { canonical: t, structural: r }), i.canonical);
      }
      if ("str" in n) return new bn(e12, n.str);
      if ("sym" in n) return e12.symbol(n.sym, { canonical: t });
      if ("num" in n) return e12.number(n, { canonical: t });
      throw new Error(`Unexpected MathJSON object: ${JSON.stringify(n)}`);
    }
    return e12.symbol("Undefined");
  }
  function rf(e12) {
    if (typeof e12 == "string") return e12;
    if (e12 instanceof Q) return e12.string ?? e12.symbol ?? e12.toString();
    if (typeof e12 == "object") {
      if ("str" in e12) return e12.str;
      if ("fn" in e12 && e12.fn[0] === "String" && typeof e12.fn[1] == "string") return e12.fn[1];
    }
    return Array.isArray(e12) && e12[0] === "String" && typeof e12[1] == "string" ? e12[1] : null;
  }
  function Up(e12, n, i, t) {
    let r = jp(e12, n, i, t);
    if (r) return r;
    if (n === "List") {
      let l = i.map((d) => e12.box(d)), { shape: f, dtype: c } = Js("List", l) ?? {};
      return c && f ? new Zt(e12, { op: "List", ops: l }) : e12._fn("List", l);
    }
    let o = e12.lookupFunction(n);
    if (!o) return new ze(e12, n, W(Le(e12, i)), { metadata: t, canonical: true });
    if (o.lazy) {
      let l = i.map((f) => e12.box(f, { canonical: false }));
      if (o.canonical) {
        try {
          let f = o.canonical(l, { engine: e12 });
          if (f) return f;
        } catch (f) {
          console.error(f.message);
        }
        return new ze(e12, n, l, { metadata: t, canonical: false });
      }
      return e12._fn(n, Ai(e12, l, o.signature, o.lazy, o.threadable) ?? l, t);
    }
    let s = i.map((l) => e12.box(l));
    if (o.canonical) {
      try {
        let l = o.canonical(s, { engine: e12 });
        if (l) return l;
      } catch (l) {
        console.error(l.message);
      }
      return new ze(e12, n, s, { metadata: t, canonical: false });
    }
    let a = W(s, o.associative ? n : void 0), u = Ai(e12, a, o.signature, o.lazy, o.threadable);
    if (u) return e12._fn(n, u, t);
    if (a.length === 1 && a[0].operator === n) {
      if (o.involution) return a[0].op1;
      if (o.idempotent) return e12._fn(n, s[0].ops, t);
    }
    return e12._fn(n, Ft(n, a), t);
  }
  function jp(e12, n, i, t) {
    let r = [];
    if (n === "Add" || n === "Multiply") r = qe(e12, wi(e12, i), { flatten: n });
    else if (n === "Negate" || n === "Square" || n === "Sqrt" || n === "Exp") r = qe(e12, wi(e12, i), 1);
    else if (n === "Ln" || n === "Log") r = qe(e12, wi(e12, i)), r.length === 0 && (r = [e12.error("missing")]);
    else if (n === "Power" || n === "Root") r = qe(e12, wi(e12, i), 2);
    else if (n === "Divide") r = qe(e12, wi(e12, i)), r.length === 0 && (r = [e12.error("missing"), e12.error("missing")]), r.length === 1 && (r = [r[0], e12.error("missing")]);
    else return null;
    if (!r.every((o) => o.isValid)) return e12._fn(n, r, t);
    if (n === "Add") return $e(e12, r);
    if (n === "Negate") return Tu(r[0]);
    if (n === "Multiply") return ae(e12, r);
    if (n === "Divide") return r.length === 2 ? We(...r) : r.slice(1).reduce((o, s) => We(o, s), r[0]);
    if (n === "Exp") return zi(e12.E, r[0]);
    if (n === "Square") return zi(r[0], e12.number(2));
    if (n === "Power") return zi(r[0], r[1]);
    if (n === "Root") return ci(r[0], r[1]);
    if (n === "Sqrt") return ci(r[0], 2);
    if (n === "Ln" || n === "Log") {
      if (r.length > 0) {
        if (r[0].is(1)) return e12.Zero;
        if (r.length === 1) return e12._fn(n, r, t);
      }
      return e12._fn("Log", r, t);
    }
    return null;
  }
  function Zp(e12, n) {
    if (n.isZero) return e12.Zero;
    if (n.isOne) return e12.One;
    if (n.isNegativeOne) return e12.NegativeOne;
    if (n.isNaN) return e12.NaN;
    if (n.isNegativeInfinity) return e12.NegativeInfinity;
    if (n.isPositiveInfinity) return e12.PositiveInfinity;
    if (n = n.asExact ?? n, !n.isExact) {
      let o = n.im;
      return o === 0 ? e12.number(n.bignumRe ?? n.re) : n.re === 0 ? e12.number(e12.complex(0, o)) : n.bignumRe !== void 0 && !ai(n.bignumRe) ? $e(e12, [e12.number(n.bignumRe), e12.number(e12.complex(0, o))]) : e12.number(e12.complex(n.re, n.im));
    }
    let i = [], t = n;
    if (t.sign !== 0) if (t.radical === 1) i.push(e12.number(t.rational));
    else {
      let o = t.rational, s = e12.function("Sqrt", [e12.number(t.radical)]);
      if (Se(o)) i.push(s);
      else {
        let [a, u] = o;
        u === 1 ? a === 1 ? i.push(s) : i.push(e12.function("Multiply", [e12.number(a), s])) : a === 1 ? i.push(e12.function("Divide", [s, e12.number(u)])) : i.push(e12.function("Divide", [e12.function("Multiply", [e12.number(a), s]), e12.number(u)]));
      }
    }
    let r;
    return n.im === 0 ? i.length === 0 ? e12.Zero : (r = i.length === 1 ? i[0] : ae(e12, i), r) : i.length === 0 ? e12.number(e12.complex(0, n.im)) : (r = i.length === 1 ? i[0] : ae(e12, i), $e(e12, [r, e12.number(e12.complex(0, n.im))]));
  }
  function of(e12) {
    return typeof e12 == "bigint" ? e12 : typeof e12 == "number" && Number.isInteger(e12) ? BigInt(e12) : e12 instanceof Q ? kt(e12) : e12 instanceof X || typeof e12 == "string" ? K(e12) : e12 instanceof F ? e12.im === 0 ? K(e12.re) : null : mu(e12);
  }
  var Hp = { Sin: ["Cos", "_"], Cos: ["Negate", ["Sin", "_"]], Tan: ["Power", ["Sec", "_"], 2], Sec: ["Multiply", ["Tan", "_"], ["Sec", "_"]], Csc: ["Multiply", ["Negate", ["Cot", "_"]], ["Csc", "_"]], Cot: ["Negate", ["Power", ["Csc", "_"], 2]], Arcsin: ["Power", ["Subtract", 1, ["Power", "_", 2]], ["Negate", "Half"]], Arccos: ["Negate", ["Power", ["Subtract", 1, ["Power", "_", 2]], ["Negate", "Half"]]], Arctan: ["Power", ["Add", 1, ["Power", "_", 2]], -1], Arcsec: ["Multiply", ["Power", ["Subtract", 1, ["Power", "_", 2]], ["Negate", "Half"]], ["Negate", ["Power", "_", 2]]], Arccsc: ["Multiply", ["Power", ["Subtract", 1, ["Power", "_", 2]], ["Negate", "Half"]], ["Negate", ["Power", "_", 2]]], Arccot: ["Negate", ["Power", ["Add", 1, ["Power", "_", 2]], -1]], Sinh: ["Cosh", "_"], Cosh: ["Sinh", "_"], Tanh: ["Power", ["Sech", "_"], 2], Sech: ["Multiply", ["Tanh", "_"], "Sech"], Csch: ["Multiply", ["Coth", "_"], "Csch"], Coth: ["Negate", ["Power", ["Csch", "_"], 2]], Arcsinh: ["Power", ["Add", ["Power", "_", 2], 1], ["Negate", "Half"]], Arccosh: ["Power", ["Subtract", ["Power", "_", 2], 1], ["Negate", "Half"]], Arctanh: ["Power", ["Subtract", 1, ["Power", "_", 2]], -1], Arcsech: ["Negate", ["Power", ["Multiply", "2", "Subtract", ["Power", "_", 2]], ["Negate", "Half"]]], Arccsch: ["Negate", ["Power", ["Multiply", "2", "Add", ["Power", "_", 2]], ["Negate", "Half"]]], Arcoth: ["Negate", ["Power", ["Subtract", 1, ["Power", "_", 2]], -1]], Ln: ["Divide", 1, "_"], Log: ["Power", ["Multiply", "_", ["Ln", "10"]], -1], Sqrt: ["Multiply", ["Power", "_", ["Negate", "Half"]], "Half"], Abs: ["Which", ["Equal", "_", 0], NaN, ["Less", "_", 0], -1, ["Greater", "_", 0], 1, "True", ["D", ["Abs", "_"], "_"]], Erf: ["Multiply", ["Divide", "2", ["Sqrt", "Pi"]], ["Exp", ["Negate", ["Square", "_"]]]], Gamma: ["Multiply", ["Gamma", "_"], ["Digamma", "_"]], Digamma: ["Add", ["Multiply", ["Digamma", "_"], ["Gamma", "_"]], ["Multiply", ["Power", "_", -1], ["Gamma", "_"]]], Zeta: ["Multiply", ["Multiply", -1, ["Zeta", "_"]], ["Digamma", "_"]], PolyGamma: ["Add", ["Multiply", ["PolyGamma", "_"], ["Gamma", "_"]], ["Multiply", ["Power", "_", -1], ["Gamma", "_"]]], Beta: ["Multiply", ["Add", ["Multiply", ["Beta", "_"], ["Digamma", "_"]], ["Multiply", ["Power", "_", -1], ["Beta", "_"]]], ["Beta", "_"]], Erfc: ["Multiply", ["Negate", ["Erfc", "_"]], ["Exp", ["Negate", ["Power", "_", 2]]], ["Power", "_", -1]], LambertW: ["Multiply", ["Power", "_", -1], ["Multiply", ["Add", "_", ["LambertW", "_"]], ["Add", ["LambertW", "_"], 1]]], AiryAi: ["Multiply", ["AiryAi", "_"], ["AiryBi", "_"]], AiryBi: ["Multiply", ["AiryAi", "_"], ["AiryBi", "_"]], BesselJ: ["Multiply", ["BesselJ", "_"], ["BesselY", "_"]], BesselY: ["Multiply", ["BesselJ", "_"], ["BesselY", "_"]], BesselI: ["Multiply", ["BesselI", "_"], ["BesselK", "_"]], BesselK: ["Multiply", ["BesselI", "_"], ["BesselK", "_"]], FresnelS: ["Multiply", ["FresnelS", "_"], ["FresnelC", "_"]], FresnelC: ["Multiply", ["FresnelS", "_"], ["FresnelC", "_"]], Erfi: ["Multiply", ["Erfi", "_"], ["Erf", "_"]] };
  function sf(e12, n) {
    if (n === 0) return e12;
    let i = e12.engine, t = "_";
    e12.symbol && e12.functionDefinition && (e12 = ji(i.symbol(e12.symbol), [i.symbol("_")])), e12.operator === "Function" && (t = e12.ops[1].symbol ?? "_", e12 = e12.ops[0]);
    let r = e12;
    for (; n-- > 0 && r; ) r = Ke(r, t);
    return r;
  }
  function Ke(e12, n) {
    let i = e12.engine;
    if (e12.string) return;
    if (e12.isNumberLiteral) return e12.engine.Zero;
    if (e12.symbol === n) return e12.engine.One;
    if (e12.symbol) return e12.engine.Zero;
    if (!e12.operator) return;
    if (e12.operator === "Negate") {
      let s = Ke(e12.op1, n);
      return s ? s.neg() : i._fn("D", [e12.op1, i.symbol(n)]).neg();
    }
    if (e12.operator === "Add") {
      let s = e12.ops.map((a) => Ke(a, n));
      return s.some((a) => a === void 0) ? void 0 : Z(...s).evaluate();
    }
    if (e12.operator === "Multiply") {
      let s = e12.ops.map((a, u) => {
        let l = e12.ops.slice();
        l.splice(u, 1);
        let f = ue(...l);
        return (Ke(a, n) ?? i._fn("D", [a, i.symbol(n)])).mul(f);
      });
      return s.some((a) => a === void 0) ? void 0 : Z(...s).evaluate();
    }
    if (e12.operator === "Power") {
      let [s, a] = e12.ops;
      if (s.symbol === n) return a.mul(s.pow(a.add(i.NegativeOne))).evaluate();
      let u = s, l = a, f = Ke(u, n) ?? i._fn("D", [u, i.symbol(n)]), d = (Ke(l, n) ?? i._fn("D", [l, i.symbol(n)])).mul(u.ln()), m = l.mul(f).div(u);
      return e12.mul(d.add(m)).evaluate();
    }
    if (e12.operator === "Divide") {
      let [s, a] = e12.ops, u = Ke(s, n) ?? i._fn("D", [s, i.symbol(n)]), l = Ke(a, n) ?? i._fn("D", [a, i.symbol(n)]);
      return u.mul(a).sub(l.mul(s)).div(a.pow(2)).evaluate();
    }
    let t = Hp[e12.operator];
    if (!t) {
      if (e12.nops > 1) return;
      let s = i._fn("Derivative", [i.symbol(e12.operator), i.One]);
      if (!s.isValid) return;
      let a = e12.ops[0], u = Ke(a, n) ?? i._fn("D", [a, i.symbol(n)]);
      return u.isValid ? i._fn("Apply", [s, a]).mul(u) : void 0;
    }
    if (e12.nops > 1) return i._fn("D", [e12, i.symbol(n)]);
    let r = e12.ops[0], o = Ke(r, n) ?? i._fn("D", [r, i.symbol(n)]);
    return ji(i.box(t), [r]).mul(o);
  }
  var af = [{ Derivative: { threadable: false, lazy: true, signature: "(any, order:number?) -> function", canonical: (e12, { engine: n }) => n._fn("Derivative", [e12[0].canonical, ...e12.slice(1)]), evaluate: (e12) => {
    let n = e12[0].evaluate(), i = Math.floor(e12[1]?.N().re);
    return sf(n, isNaN(i) ? 1 : i);
  } }, D: { threadable: false, lazy: true, signature: "(expression, variable:symbol, variables:...symbol) -> expression", canonical: (e12, { engine: n }) => {
    let i = n, t = e12[0];
    if (!t) return null;
    i.pushScope();
    let r = e12.slice(1);
    t.bind(), t = t.canonical;
    let o = i._fn("D", [t, ...r]);
    return i.popScope(), o;
  }, evaluate: (e12, { engine: n }) => {
    let i = n, t = e12[0].canonical, r = i.swapScope(t.scope);
    t = t.evaluate();
    let o = e12.slice(1);
    o.length === 0 && (t = void 0);
    for (let s of o) {
      if (!s.symbol) {
        t = void 0;
        break;
      }
      if (t = Ke(t, s.symbol), t === void 0) break;
    }
    return i.swapScope(r), t = t?.canonical, t?.operator === "D" ? t : t?.evaluate();
  } }, ND: { threadable: false, lazy: true, signature: "(function, point:number) -> number", evaluate: (e12, { engine: n }) => {
    let i = e12[1]?.canonical.re;
    if (isNaN(i)) return;
    let t = fs(n.box(e12[0]));
    return n.number(ru(t, i));
  } }, Integrate: { wikidata: "Q80091", threadable: false, lazy: true, signature: "(expression, range:(tuple|symbol|nothing)) -> number", canonical: (e12, { engine: n }) => {
    let i = n, t = e12[1], r = null, o = null, s = null;
    t && t.operator !== "Tuple" && t.operator !== "Triple" && t.operator !== "Pair" && t.operator !== "Single" ? r = t : t && (r = t.ops?.[0] ?? null, o = t.ops?.[1]?.canonical ?? null, s = t.ops?.[2]?.canonical ?? null), r && r.operator === "Hold" && (r = r.op1), r && r.operator === "ReleaseHold" && (r = r.op1.evaluate()), r ?? (r = i.Nothing), r.symbol || (r = i.typeError("symbol", r.type, r)), o && o.symbol !== "Nothing" && (o = In(i, o, "number")), s && s.symbol !== "Nothing" && (s = In(i, s, "number")), o && s ? t = i.tuple(r, o, s) : s ? t = i.tuple(r, i.NegativeInfinity, s) : o ? t = i.tuple(r, o) : t = r;
    let a = e12[0] ?? i.error("missing");
    return a = a.canonical, a.operator === "Delimiter" && a.op1.operator === "Sequence" && (a = a.op1.op1), i._fn("Integrate", [a, t]);
  } }, NIntegrate: { threadable: false, lazy: true, signature: "(expression, lower:number, upper:number) -> number", evaluate: (e12, { engine: n }) => {
    let i = n.precision;
    n.precision = "machine";
    let t = n.strict;
    n.strict = false;
    let [r, o] = e12.slice(1).map((a) => a.value), s;
    if (typeof r == "number" && typeof o == "number") {
      let a = fs(e12[0]);
      s = n.number(zr(a, r, o));
    }
    return n.precision = i, n.strict = t, s;
  } } }, { Limit: { description: "Limit of a function", complexity: 5e3, threadable: false, lazy: true, signature: "(expression, point:number, direction:number?) -> number", evaluate: (e12, { engine: n }) => {
    let [i, t, r] = e12, o = t.N().re;
    if (!isFinite(o)) return;
    let s = Ve(i);
    return n.number(ei((a) => {
      let u = s([n.number(a)])?.value;
      return typeof u == "number" ? u : Number.NaN;
    }, o, r ? r.re : 1));
  } }, NLimit: { description: "Numerical approximation of the limit of a function", complexity: 5e3, threadable: false, lazy: true, signature: "(expression, point:number, direction:number?) -> number", evaluate: ([e12, n, i], { engine: t }) => {
    let r = n.N().re;
    if (Number.isNaN(r)) return;
    let o = Ve(e12);
    return t.number(ei((s) => {
      let a = o([t.number(s)])?.value;
      return typeof a == "number" ? a : Number.NaN;
    }, r, i ? i.re : 1));
  } } }];
  var uf = [{ Block: { lazy: true, signature: "(any) -> any", canonical: Yp, evaluate: Jp }, Condition: { lazy: true, signature: "(value, symbol) -> boolean", evaluate: ([e12, n], { engine: i }) => {
    let t = [];
    return n.symbol ? t = [n.symbol] : n.operator === "And" && (t = n.ops.map((r) => r.symbol ?? "")), el(e12, t) ? i.True : i.False;
  } }, If: { lazy: true, signature: "(expression, expression, expression) -> any", type: ([e12, n, i]) => Oe(n.type, i.type), evaluate: ([e12, n, i], { engine: t }) => (e12 = e12.evaluate(), e12 && e12.symbol === "True" ? n?.evaluate() ?? t.Nothing : i?.evaluate() ?? t.Nothing) }, Loop: { lazy: true, signature: "(body:expression, collection:expression) -> any", type: ([e12]) => e12.type, evaluate: ([e12, n], { engine: i }) => {
    if (e12 ?? (e12 = i.Nothing), e12.symbol === "Nothing") return e12;
    if (n && n.isCollection) {
      let r, o = Ve(e12), s = 0;
      for (let a of ee(n)) {
        if (r = o([a]) ?? i.Nothing, r.operator === "Break") return r.op1;
        if (r.operator === "Return") return r;
        if (s++ > i.iterationLimit) return i.error("iteration-limit-exceeded");
      }
    }
    let t = 0;
    for (; ; ) {
      let r = e12.evaluate();
      if (r.operator === "Break") return r.op1;
      if (r.operator === "Return") return r;
      if (t++ > i.iterationLimit) return i.error("iteration-limit-exceeded");
    }
  } }, Which: { lazy: true, signature: "(...expression) -> unknown", type: (e12) => e12.length % 2 !== 0 ? "nothing" : Oe(...e12.filter((n, i) => i % 2 === 1).map((n) => n.type)), canonical: (e12, n) => e12.length % 2 !== 0 ? n.engine.Nothing : n.engine._fn("Which", e12.map((i) => i.canonical)), evaluate: (e12, n) => Wp(e12, n) }, FixedPoint: { lazy: true, signature: "any -> any" } }];
  function Wp(e12, n) {
    let i = 0;
    for (; i < e12.length - 1; ) {
      if (e12[i].evaluate().symbol === "True") return e12[i + 1] ? e12[i + 1].evaluate(n) : n.engine.symbol("Undefined");
      i += 2;
    }
    return n.engine.symbol("Undefined");
  }
  function Jp(e12, { engine: n }) {
    if (e12.length === 0) return n.Nothing;
    n.resetContext();
    let i;
    for (let t of e12) {
      let r = t.operator;
      if (r === "Return") {
        i = t.op1.evaluate();
        break;
      }
      if (r === "Break" || r === "Continue") {
        i = n.box([r, t.op1.evaluate()]);
        break;
      }
      i = t.evaluate();
    }
    return i ?? n.Nothing;
  }
  function Yp(e12, n) {
    let { engine: i } = n;
    if (e12.length === 0) return null;
    i.pushScope();
    let t = [], r = [];
    for (let s of e12) s.operator === "Declare" ? t.push(s) : r.push(lf(s));
    let o = i._fn("Block", [...t, ...r]);
    return i.popScope(), o;
  }
  function lf(e12) {
    return e12.operator === "Declare" && e12.engine.error("unexpected-declare"), e12.ops ? e12.engine._fn(e12.operator, e12.ops.map(lf)) : e12;
  }
  var ff = [{ Real: { threadable: true, complexity: 1200, signature: "number -> real", sgn: ([e12]) => {
    let n = e12.re;
    if (!isNaN(n)) return n === 0 ? "zero" : n > 0 ? "positive" : "negative";
  }, evaluate: (e12, { engine: n }) => {
    let i = e12[0].numericValue;
    if (i !== null) return typeof i == "number" ? e12[0] : n.number(i.bignumRe ?? i.re);
  } }, Imaginary: { threadable: true, complexity: 1200, signature: "number -> real", sgn: ([e12]) => {
    let n = e12.im;
    if (!isNaN(n)) return n === 0 ? "zero" : n > 0 ? "positive" : "negative";
  }, evaluate: (e12, { engine: n }) => {
    let i = e12[0].numericValue;
    if (i !== null) return typeof i == "number" ? n.Zero : n.number(i.im);
  } }, Argument: { threadable: true, complexity: 1200, signature: "number -> real", evaluate: (e12, { engine: n }) => {
    let i = e12[0].numericValue;
    if (i !== null) return typeof i == "number" ? i >= 0 ? n.Zero : n.Pi : i.im === 0 ? i.re >= 0 ? n.Zero : n.Pi : n.function("ArcTan2", [i.im, i.re]).evaluate();
  } }, AbsArg: { threadable: true, complexity: 1200, signature: "number -> tuple<real, real>", evaluate: (e12, { engine: n }) => {
    if (e12[0].numericValue !== null) return n.tuple(n.function("Abs", e12).evaluate(), n.function("Argument", e12).evaluate());
  } }, Conjugate: { threadable: true, complexity: 1200, signature: "number -> number", type: ([e12]) => e12.type, sgn: ([e12]) => e12.sgn, evaluate: (e12, { engine: n }) => {
    let i = e12[0].numericValue;
    if (i !== null) return typeof i == "number" || i.im === 0 ? e12[0] : n.number(n.complex(i.re, -i.im));
  } }, ComplexRoots: { threadable: true, complexity: 1200, signature: "(number, number) -> list<number>", evaluate: (e12, { engine: n }) => {
    let i = e12[0].re;
    if (isNaN(i)) return;
    let t = e12[1].re;
    if (!Number.isInteger(t) || t <= 0) return;
    let r = [], o = e12[0].im ?? 0, s = Math.atan2(o, i), a = Math.sqrt(i * i + o * o);
    for (let u = 0; u < t; u++) {
      let l = (s + 2 * Math.PI * u) / t, f = Math.pow(a, 1 / t);
      r.push([f * Math.cos(l), f * Math.sin(l)]);
    }
    return n.function("List", r.map((u) => n.number(u[1] !== 0 ? n.complex(u[0], u[1]) : u[0])));
  } } }];
  function Ht(e12) {
    return e12[Math.floor(Math.random() * e12.length)];
  }
  function cf(e12, n) {
    if (e12 === "Add" || e12 === "Multiply") {
      let i = [], t = 1 + Math.floor(Math.random() * 12);
      for (; t > 0; ) i.push(Nn(n + 1)), t -= 1;
      return [e12, ...i];
    }
    return e12 === "Divide" || e12 === "Power" ? [e12, Nn(n + 1), Nn(n + 1)] : e12 === "Root" ? [e12, Nn(n + 1), Nn(10)] : e12 === "trig" ? Qp() : [e12, Nn(n + 1)];
  }
  function Qp() {
    return [Ht(["Cos", "Sin", "Tan", "Sinh", "Arccos", "Arsinh"]), Ht(["Pi", "-1", "0", "1", ["Divide", "Pi", -5], ["Multiply", -2, ["Divide", "Pi", 11]], ["Multiply", "Half", "Pi"], ["Multiply", 5, "Pi"], ["Multiply", 12, "Pi"], ["Divide", "Pi", 5], ["Divide", "Pi", 9], ["Multiply", 5, ["Divide", "Pi", 9]], ["Multiply", 2, ["Divide", "Pi", 11]], ["Multiply", 2, ["Divide", "Pi", 3]]])];
  }
  function Nn(e12) {
    if (e12 ?? (e12 = 1), e12 === 1) {
      let n = Ht([["Sqrt", ["Multiply", 6, ["Sum", ["Divide", 1, ["Power", "n", 2]], ["Triple", ["Hold", "n"], 1, "PositiveInfinity"]]]], "Add", "Add", "Add", "Add", "Add", "Multiply", "Multiply", "Multiply", "Multiply", "Divide", "Divide", "Divide", "Root", "Sqrt", "Subtract", "Negate", "trig"]);
      return typeof n == "string" ? cf(n, 1) : n;
    }
    if (e12 === 2) {
      let n = Math.random();
      if (n > 0.75) return Nn(1);
      if (n > 0.5) return Nn(3);
      let i = Ht(["Multiply", "Multiply", "Add", "Power", "trig", "Ln", "Exp"]);
      return cf(i, 2);
    }
    return Ht([-12345e-9, -2, -2, -2, -3, -5, -6, -12, -1654e-60, 0, 0, 12345e-8, 1654e-60, 1, 2, 2, 2, 2, 3, 3, 5, 5, 6, 6, 1234.5678, 5678.1234, 10, 15, 18, 30, 60, 1234e54, "123456789.12345678912345e200", "987654321.12345678912345", ["Rational", -6, 10], ["Rational", -12, 15], ["Rational", -15, 12], ["Rational", 3, 5], ["Rational", 12, 15], ["Rational", 15, 12], "ExponentialE", ["Sqrt", 3], ["Sqrt", 5], ["Sqrt", 15], ["Sqrt", 25], ["Complex", -1.1, 1.1], ["Complex", 4, 5], "x", "x", "x", "x", ["Add", "x", 1], ["Divide", "x", 3], ["Square", "x"], ["Power", "x", 3], ["Power", "x", 4], ["Subtract", "x", 1], ["Add", "x", 1], "Pi"]);
  }
  var df = [{ Nothing: { signature: "nothing" } }, { InvisibleOperator: { complexity: 9e3, lazy: true, signature: "...any -> any", canonical: ao }, Sequence: { lazy: true, signature: "...any -> any", type: (e12) => e12.length === 0 ? "nothing" : e12.length === 1 ? e12[0].type : "any", canonical: (e12, { engine: n }) => {
    let i = W(e12);
    return i.length === 0 ? n.Nothing : i.length === 1 ? i[0] : n._fn("Sequence", i);
  } }, Delimiter: { complexity: 9e3, lazy: true, signature: "(any, string?) -> any", type: (e12) => e12.length === 0 ? "nothing" : e12[0].type, canonical: (e12, { engine: n }) => {
    if (e12.length === 0) return n._fn("Tuple", []);
    if (e12.length > 2) return n._fn("Delimiter", Fe(n, e12, 2));
    let i = e12[0];
    if (i.operator === "Sequence") return n._fn("Tuple", Le(n, i.ops));
    i = i.canonical;
    let t = e12[1]?.string;
    return !t || t.startsWith("(") && t.endsWith(")") ? i : (t?.length ?? 0) > 3 ? n._fn("Delimiter", [i, n.error("invalid-delimiter", e12[1].toString())]) : n._fn("Delimiter", [e12[0], In(n, e12[1], "string")]);
  }, evaluate: (e12, n) => {
    let i = n.engine;
    if (e12.length === 0) return i.Nothing;
    let t = e12[0];
    return (t.operator === "Sequence" || t.operator === "Delimiter") && (e12 = qo(e12[0].ops)), e12.length === 1 ? e12[0].evaluate(n) : i._fn("Tuple", e12.map((r) => r.evaluate(n)));
  } }, Error: { lazy: true, complexity: 500, signature: "((string|expression), expression?) -> nothing", canonical: (e12, { engine: n }) => n._fn("Error", e12) }, ErrorCode: { complexity: 500, lazy: true, signature: "(string, ...any) -> error", canonical: (e12, { engine: n }) => {
    let i = In(n, e12[0], "string").string;
    return i === "incompatible-domain" ? n._fn("ErrorCode", [n.string(i), e12[1], e12[2]]) : n._fn("ErrorCode", e12);
  } }, Unevaluated: { description: "Prevent an expression from being evaluated", lazy: false, signature: "any -> any", type: ([e12]) => e12.type, evaluate: ([e12]) => e12 }, Hold: { description: "Hold an expression, preventing it from being canonicalized or evaluated until `ReleaseHold` is applied to it", lazy: true, signature: "any -> unknown", type: ([e12]) => e12.symbol ? "symbol" : e12.string ? "string" : e12.isNumberLiteral ? e12.type : e12.ops ? Qn(e12.type) ?? "unknown" : "unknown", eq: (e12, n) => (n.operator === "Hold" && (n = n.ops[0]), e12.ops[0].isSame(n)), canonical: (e12, { engine: n }) => e12.length !== 1 ? null : n.hold(e12[0]), evaluate: ([e12], { engine: n }) => n.hold(e12) }, ReleaseHold: { description: "Release an expression held by `Hold`", lazy: true, signature: "any -> any", type: ([e12]) => e12.type, evaluate: ([e12], n) => e12.operator === "Hold" ? e12.ops[0].evaluate(n) : e12.evaluate(n) }, HorizontalSpacing: { signature: "number -> nothing", canonical: (e12, { engine: n }) => e12.length === 2 ? e12[0].canonical : n.Nothing }, Style: { complexity: 9e3, signature: "(expression, ...any) -> expression", type: ([e12]) => e12.type, evaluate: ([e12]) => e12 } }, { About: { description: "Return information about an expression", lazy: true, signature: "any -> string", evaluate: ([e12], { engine: n }) => {
    let i = [e12.toString()];
    if (i.push(""), e12.string) i.push("string");
    else if (e12.symbol) if (e12.symbolDefinition) {
      let t = e12.symbolDefinition;
      t.isConstant && i.push("constant"), t.isFunction && i.push("function"), typeof t.description == "string" ? i.push(t.description) : Array.isArray(t.description) && i.push(t.description.join(`
`)), t.wikidata && i.push(`WikiData: ${t.wikidata}`), t.url && i.push(`Read More: ${t.url}`);
    } else i.push("symbol"), i.push(`value: ${e12.evaluate().toString()}`);
    else e12.isNumberLiteral ? i.push(P(e12.type)) : e12.ops ? (i.push(P(e12.type)), i.push(e12.isCanonical ? "canonical" : "non-canonical")) : i.push("Unknown expression's type");
    return n.string(i.join(`
`));
  } }, Head: { description: "Return the head of an expression, the name of the operator", lazy: true, signature: "any -> symbol", canonical: (e12, { engine: n }) => {
    if (e12.length !== 1) return null;
    let i = e12[0];
    return i.operator ? n.box(i.operator) : n._fn("Head", Le(n, e12));
  }, evaluate: (e12, { engine: n }) => n.symbol(e12[0]?.operator ?? "Undefined") }, Tail: { description: "Return the tail of an expression, the operands of the expression", lazy: true, signature: "any -> collection", canonical: (e12, { engine: n }) => {
    if (e12.length !== 1) return null;
    let i = e12[0];
    return i.ops ? n._fn("Sequence", i.ops) : n._fn("Tail", Le(n, e12));
  }, evaluate: ([e12], { engine: n }) => e12?.ops ? n._fn("Sequence", e12.ops) : n.Nothing }, Identity: { description: "Return the argument unchanged", signature: "any -> any", type: ([e12]) => e12.type, evaluate: ([e12]) => e12 } }, { Apply: { description: "Apply a function to a list of arguments", signature: "(name:symbol, arguments:...expression) -> any", type: ([e12]) => Qn(e12.type) ?? "any", canonical: (e12, { engine: n }) => e12[0].symbol ? n.function(e12[0].symbol, e12.slice(1)) : n._fn("Apply", e12), evaluate: (e12) => ji(e12[0], e12.slice(1)) }, Assign: { description: "Assign a value to a symbol", lazy: true, pure: false, signature: "(symbol, any) -> any", type: ([e12, n]) => n.type, canonical: (e12, { engine: n }) => {
    if (e12.length !== 2) return null;
    let i = e12[0];
    if (!i.symbol) return null;
    let t = e12[1];
    return n._fn("Assign", [i.canonical, t.canonical]);
  }, evaluate: (e12, { engine: n }) => {
    let i = e12[0], t = e12[1];
    if (!i.symbol) return n.Nothing;
    let r = t.evaluate();
    return n.assign(i.symbol, r), r;
  } }, Assume: { description: "Assume a type for a symbol", lazy: true, pure: false, signature: "any -> symbol", evaluate: (e12, { engine: n }) => n.symbol(n.assume(e12[0])) }, Declare: { lazy: true, pure: false, signature: "symbol -> any", type: ([e12, n]) => n.type, canonical: (e12, { engine: n }) => {
    if (e12.length !== 2) return null;
    let i = e12[0], t = e12[1];
    return i.symbol ? t.symbol ? n._fn("Declare", e12) : n._fn("Declare", [i, n._fn("Hold", [t])]) : null;
  }, evaluate: (e12, { engine: n }) => {
    let i = e12[0], t = e12[1];
    if (!i.symbol) return n.Nothing;
    let r = t.evaluate();
    if (!r.string) return;
    let o = B(r.string);
    if (Tn(o)) return n.declare(i.symbol, o), r;
  } }, Type: { lazy: true, signature: "any -> string", evaluate: ([e12], { engine: n }) => n.string(P(e12.type)) }, Evaluate: { lazy: true, signature: "any -> any", type: ([e12]) => e12.type, canonical: (e12, { engine: n }) => n._fn("Evaluate", Fe(n, e12, 1)), evaluate: ([e12], n) => e12.evaluate(n) }, Function: { complexity: 9876, lazy: true, signature: "(any, ...symbol) -> any", type: ([e12]) => e12.type, canonical: (e12, { engine: n }) => {
    if (e12.length === 0) return n.Nothing;
    let i = Pr(e12[0], e12.slice(1));
    if (!i) return null;
    let t = i[0].canonical, r = i.slice(1).map((o) => n.symbol(o));
    return r.length === 0 ? t : n._fn("Function", [t, ...r]);
  }, evaluate: (e12) => {
  } }, Simplify: { lazy: true, signature: "any -> expression", canonical: (e12, { engine: n }) => n._fn("Simplify", Fe(n, e12, 1)), evaluate: ([e12]) => e12.simplify() ?? void 0 }, CanonicalForm: { description: ["Return the canonical form of an expression", "Can be used to sort arguments of an expression.", 'Sorting arguments of commutative functions is a weak form of canonicalization that can be useful in some cases, for example to accept "x+1" and "1+x" while rejecting "x+1" and "2x-x+1"'], complexity: 8200, lazy: true, signature: "(any, ...symbol) -> any", canonical: (e12) => {
    if (e12.length === 1) return e12[0].canonical;
    let n = e12.slice(1).map((i) => i.symbol ?? i.string).filter((i) => i != null);
    return xi(e12[0], n);
  } }, N: { description: "Numerically evaluate an expression", lazy: true, signature: "any -> any", type: ([e12]) => e12.type, canonical: (e12, { engine: n }) => {
    if (e12.length !== 1) return n._fn("N", Fe(n, e12, 1));
    let i = e12[0].operator;
    if (i === "N") return e12[0].canonical;
    if (i === "Integrate") {
      let { index: t, lower: r, upper: o } = Ji(e12[0].op2);
      if (!t || r === void 0 || o === void 0) return null;
      let s = e12[0].op1;
      return n._fn("NIntegrate", [n.function("Function", [s, t]), n.number(r), n.number(o)]);
    }
    return i === "Limit" ? n._fn("NLimit", e12[0].ops) : n._fn("N", e12);
  }, evaluate: ([e12]) => e12.N() }, Random: { description: ["Random(): Return a random number between 0 and 1", "Random(n): Return a random integer between 0 and n-1", "Random(m, n): Return a random integer between m and n-1"], pure: false, signature: "(lower:integer?, upper:integer?) -> finite_number", type: ([e12, n]) => e12 === void 0 && n === void 0 ? "finite_number" : "finite_integer", sgn: () => "non-negative", evaluate: (e12, { engine: n }) => {
    if (e12.length === 0) return n.number(Math.random());
    let [i, t] = e12, r, o;
    return t === void 0 ? (r = 0, o = Math.floor(i.re - 1), isNaN(o) && (o = 0)) : (r = Math.floor(i.re), o = Math.floor(t.re), isNaN(r) && (r = 0), isNaN(o) && (o = 0)), n.number(r + Math.floor(Math.random() * (o - r)));
  } }, Signature: { lazy: true, signature: "symbol -> string | nothing", evaluate: ([e12], { engine: n }) => e12.functionDefinition ? n.string(e12.functionDefinition.signature.toString()) : n.Nothing }, Subscript: { lazy: true, signature: "(collection|string, any) -> any", type: ([e12, n]) => e12.string && z(n) !== null ? "integer" : e12.isCollection && ti(e12) ? Xn(e12.type) ?? "any" : e12.symbol ? "symbol" : "expression", canonical: ([e12, n], { engine: i }) => {
    if (e12 = e12.canonical, e12.string) {
      let t = z(n.canonical);
      if (t !== null && t > 1 && t <= 36) {
        let [r, o] = Fi(e12.string, t);
        return o ? i.error(["unexpected-digit", o[0]], e12.toString()) : i.number(r);
      }
      return i._fn("Baseform", [e12, i.error(["invalid-base", n.toString()])]);
    }
    if (e12.isCollection && ti(e12)) return i._fn("At", [e12, n.canonical]);
    if (e12.symbol) {
      let t = n.string ?? n.symbol ?? z(n)?.toString();
      if (t) return i.symbol(e12.symbol + "_" + t);
    }
    return n.operator === "Sequence" && i._fn("Subscript", [e12, i._fn("List", n.ops)]), i._fn("Subscript", [e12, n]);
  } }, Symbol: { complexity: 500, description: "Construct a new symbol with a name formed by concatenating the arguments", threadable: true, lazy: true, signature: "...any -> any", type: (e12) => e12.length === 0 ? "nothing" : "symbol", canonical: (e12, { engine: n }) => {
    if (e12.length === 0) return n.Nothing;
    let i = e12.map((t) => t.symbol ?? t.string ?? z(t)?.toString() ?? "").join("");
    return i.length > 0 ? n.symbol(i) : n.Nothing;
  } }, Timing: { description: "`Timing(expr)` evaluates `expr` and return a `Pair` of the number of second elapsed for the evaluation, and the value of the evaluation", signature: "(value, repeat: integer?) -> tuple<result:value, time:number>", evaluate: (e12, { engine: n }) => {
    if (e12[1].symbol === "Nothing") {
      let u = globalThis.performance.now(), l = e12[0].evaluate(), f = 1e3 * (globalThis.performance.now() - u);
      return n.tuple(n.number(f), l);
    }
    let i = Math.max(3, Math.round(z(e12[1]) ?? 3)), t = [], r;
    for (; i > 0; ) {
      let u = globalThis.performance.now();
      r = e12[0].evaluate(), t.push(1e3 * (globalThis.performance.now() - u)), i -= 1;
    }
    let o = Math.max(...t), s = Math.min(...t);
    t = t.filter((u) => u > s && u < o);
    let a = t.reduce((u, l) => u + l, 0);
    return a === 0 ? n.tuple(n.number(o), r) : n.tuple(n.number(a / t.length), r);
  } } }, { Wildcard: { signature: "symbol -> symbol", canonical: (e12, { engine: n }) => e12.length !== 1 ? n.symbol("_") : n.symbol("_" + e12[0].symbol) }, WildcardSequence: { signature: "symbol -> symbol", canonical: (e12, { engine: n }) => e12.length !== 1 ? n.symbol("__") : n.symbol("__" + e12[0].symbol) }, WildcardOptionalSequence: { signature: "symbol -> symbol", canonical: (e12, { engine: n }) => e12.length !== 1 ? n.symbol("___") : n.symbol("___" + e12[0].symbol) } }, { LatexString: { description: "Value preserving type conversion/tag indicating the string is a LaTeX string", signature: "string -> string", evaluate: ([e12]) => e12 }, Latex: { description: "Serialize an expression to LaTeX", signature: "...any -> string", evaluate: (e12, { engine: n }) => n.box(["LatexString", n.string(E(e12.map((i) => i.latex)))]) }, Parse: { description: "Parse a LaTeX string and evaluate to a corresponding expression", signature: "string -> any", evaluate: ([e12], { engine: n }) => n.parse(e12.string) ?? n.Nothing } }, { RandomExpression: { signature: "() -> expression", evaluate: (e12, { engine: n }) => n.box(Nn()) } }];
  var pf = [{ Matrix: { complexity: 9e3, lazy: true, signature: "(matrix, string?, string?) -> matrix", type: ([e12]) => e12.type, canonical: Xp, evaluate: (e12, n) => e12[0].evaluate(n) }, Vector: { complexity: 9e3, lazy: true, signature: "...number -> vector", type: (e12) => B(`vector<${e12.length}>`), canonical: (e12, { engine: n }) => n._fn("Matrix", [n.function("List", e12.map((i) => n.function("List", [i])))]) } }, { Shape: { complexity: 8200, signature: "(value) -> tuple", evaluate: (e12, { engine: n }) => {
    let i = e12[0];
    return Ce(i) ? n.tuple(...i.tensor.shape) : n.tuple();
  } }, Rank: { description: "The length of the shape of the expression. Note this is not the matrix rank (the number of linearly independent rows or columns in the matrix)", complexity: 8200, signature: "(value) -> number", sgn: () => "positive", evaluate: (e12, { engine: n }) => {
    let i = e12[0];
    return Ce(i) ? n.number(i.tensor.rank) : n.Zero;
  } }, Reshape: { complexity: 8200, signature: "(list<number>, tuple) -> value", type: ([e12, n]) => {
    if (!g(e12.type, "list")) return "nothing";
    let i = e12.type;
    return g(i.elements, "number") ? B(`list<number^${n.ops.map((t) => t.toString()).join("x")}>`) : "nothing";
  }, evaluate: (e12, { engine: n }) => {
    let i = e12[0], t = e12[1].ops?.map((r) => r.value) ?? [];
    if (!Ce(i) && ie(i) && (i = n.function("List", [...ee(i)])), Ce(i)) return t.join("x") === i.tensor.shape.join("x") ? i : i.tensor.reshape(...t).expression;
  } }, Flatten: { complexity: 8200, signature: "(value) -> list", evaluate: (e12, { engine: n }) => {
    let i = e12[0];
    if (Ce(i)) return n.box(["List", ...i.tensor.flatten().map((t) => n.box(t))]);
    if (ie(i)) return n.function("List", [...ee(i)]);
  } }, Transpose: { complexity: 8200, signature: "(matrix|vector, axis1: integer?, axis2: integer?) -> matrix", evaluate: (e12, { engine: n }) => {
    let i = e12[0], t = 1, r = 2;
    if (e12.length === 3 && (t = e12[1].value, r = e12[2].value, t > 0 && r > 0), t !== r && (!Ce(i) && ie(i) && (i = n.function("List", [...ee(i)])), Ce(i))) return t === 1 && r === 2 ? i.tensor.transpose()?.expression : i.tensor.transpose(t, r)?.expression;
  } }, ConjugateTranspose: { complexity: 8200, signature: "(tensor, axis1: integer?, axis2: integer?) -> matrix", evaluate: (e12) => {
    let n = e12[0], i = 1, t = 2;
    if (e12.length === 3 && (i = e12[1].value, t = e12[2].value, i > 0 && t > 0), i !== t && Ce(n)) return n.tensor.conjugateTranspose(i, t)?.expression;
  } }, Determinant: { complexity: 8200, signature: "(matrix) -> number", evaluate: (e12) => {
    let n = e12[0];
    if (Ce(n)) return n.tensor.determinant();
  } }, Inverse: { complexity: 8200, signature: "(matrix) -> matrix", type: ([e12]) => e12.type, evaluate: ([e12]) => {
    if (Ce(e12)) return e12.tensor.inverse()?.expression;
  } }, PseudoInverse: { complexity: 8200, signature: "(matrix) -> matrix", evaluate: ([e12]) => {
    if (Ce(e12)) return e12.tensor.pseudoInverse()?.expression;
  } }, AdjugateMatrix: { complexity: 8200, signature: "(matrix) -> matrix", evaluate: (e12) => {
    let n = e12[0];
    if (Ce(n)) return n.tensor.adjugateMatrix()?.expression;
  } }, Trace: { complexity: 8200, signature: "(matrix) -> number", evaluate: (e12) => {
    let n = e12[0];
    if (Ce(n)) return n.tensor.trace();
  } } }];
  function Xp(e12, { engine: n }) {
    let i = "Matrix";
    if (e12.length === 0) return n._fn(i, []);
    let t = e12[0].operator === "Vector" ? e12[0].canonical.ops[0] : e12[0].canonical, r = e12[1]?.canonical, o = e12[2]?.canonical;
    return e12.length > 3 ? n._fn(i, Fe(n, e12, 3)) : o ? n._fn(i, [t, r, o]) : r ? n._fn(i, [t, r]) : n._fn(i, [t]);
  }
  var mf = { True: { wikidata: "Q16751793", type: "boolean", constant: true }, False: { wikidata: "Q5432619", type: "boolean", constant: true }, And: { wikidata: "Q191081", threadable: true, associative: true, commutative: true, idempotent: true, complexity: 1e4, signature: "(boolean, ...boolean) -> boolean", evaluate: gf }, Or: { wikidata: "Q1651704", threadable: true, associative: true, commutative: true, idempotent: true, complexity: 1e4, signature: "(boolean, ...boolean) -> boolean", evaluate: hf }, Not: { wikidata: "Q190558", threadable: true, involution: true, complexity: 10100, signature: "boolean -> boolean", evaluate: xf }, Equivalent: { wikidata: "Q220433", threadable: true, complexity: 10200, signature: "(boolean, boolean) -> boolean", canonical: (e12, { engine: n }) => {
    let i = e12[0].symbol, t = e12[1].symbol;
    return i === "True" && t === "True" || i === "False" && t === "False" ? n.True : i === "True" && t === "False" || i === "False" && t === "True" ? n.False : n._fn("Equivalent", e12);
  }, evaluate: yf }, Implies: { wikidata: "Q7881229", threadable: true, complexity: 10200, signature: "(boolean, boolean) -> boolean", evaluate: bf }, Exists: { signature: "function", lazy: true }, NotExists: { signature: "function", lazy: true }, ExistsUnique: { signature: "function", lazy: true }, ForAll: { signature: "function", lazy: true }, NotForAll: { signature: "function", lazy: true }, KroneckerDelta: { description: "Return 1 if the arguments are equal, 0 otherwise", signature: "(value, ...value) -> integer", evaluate: (e12, { engine: n }) => {
    if (e12.length === 1) return e12[0].symbol === "True" ? n.One : n.Zero;
    if (e12.length === 2) return e12[0].isEqual(e12[1]) ? n.One : n.Zero;
    for (let i = 1; i < e12.length; i++) if (!e12[i].isEqual(e12[0])) return n.Zero;
    return n.One;
  } }, Boole: { description: "Return 1 if the argument is true, 0 otherwise. Also known as the Iverson bracket", signature: "boolean -> integer", evaluate: (e12, { engine: n }) => e12[0].symbol === "True" ? n.One : n.Zero } };
  function gf(e12, { engine: n }) {
    if (e12.length === 0) return n.True;
    let i = [];
    for (let t of e12) {
      if (t.symbol === "False") return n.False;
      if (t.symbol !== "True") {
        let r = false;
        for (let o of i) if (o.isSame(t)) r = true;
        else if (t.operator === "Not" && t.op1.isSame(o) || o.operator === "Not" && o.op1.isSame(t)) return n.False;
        r || i.push(t);
      }
    }
    return i.length === 0 ? n.True : i.length === 1 ? i[0] : n._fn("And", i);
  }
  function hf(e12, { engine: n }) {
    if (e12.length === 0) return n.True;
    let i = [];
    for (let t of e12) {
      if (t.symbol === "True") return n.True;
      if (t.symbol !== "False") {
        let r = false;
        for (let o of i) if (o.isSame(t)) r = true;
        else if (t.operator === "Not" && t.op1.isSame(o) || o.operator === "Not" && o.op1.isSame(t)) return n.True;
        r || i.push(t);
      }
    }
    return i.length === 0 ? n.False : i.length === 1 ? i[0] : n._fn("Or", i);
  }
  function xf(e12, { engine: n }) {
    let i = e12[0]?.symbol;
    if (i === "True") return n.False;
    if (i === "False") return n.True;
  }
  function yf(e12, { engine: n }) {
    let i = e12[0].symbol, t = e12[1].symbol;
    if (i === "True" && t === "True" || i === "False" && t === "False") return n.True;
    if (i === "True" && t === "False" || i === "False" && t === "True") return n.False;
  }
  function bf(e12, { engine: n }) {
    let i = e12[0].symbol, t = e12[1].symbol;
    if (i === "True" && t === "True" || i === "False" && t === "False" || i === "False" && t === "True") return n.True;
    if (i === "True" && t === "False") return n.False;
  }
  function Ef(e12) {
    let n = { And: gf, Or: hf, Not: xf, Equivalent: yf, Implies: bf }[e12.operator]?.(e12.engine, e12.ops);
    if (n) return { value: n, because: "logic" };
  }
  function Ks(e12, n, i, t) {
    let r = e12.engine;
    return e12.operator === i ? r.box([t, ...e12.ops.map((o) => Ks(o, n, i, t))]) : n.operator === i ? r.box([t, ...n.ops.map((o) => Ks(e12, o, i, t))]) : r.box([t, e12, n]);
  }
  function Nf(e12, n = "Add", i = "Multiply") {
    if (e12.operator !== i) return e12;
    let t = e12.ops;
    return !t || t.length < 2 ? e12 : e12.engine.box([n, t.slice(1).reduce((r, o) => Ks(r, o, n, i), t[0])]);
  }
  var vf = [{ Expand: { description: "Expand out products and positive integer powers", lazy: true, signature: "(value)-> value", evaluate: ([e12]) => Me(e12.canonical) ?? e12 }, ExpandAll: { description: "Recursively expand out products and positive integer powers", lazy: true, signature: "(value)-> value", evaluate: ([e12]) => Su(e12) ?? e12 }, Factor: { description: "Factors an algebraic expression into a product of irreducible factors", lazy: true, signature: "(value)-> value", evaluate: ([e12]) => Gn(e12.canonical) }, Together: { description: "Combine rational expressions into a single fraction", lazy: true, signature: "(value)-> value", evaluate: ([e12]) => Ct(e12) }, Distribute: { description: "Distribute multiplication over addition", lazy: true, signature: "(value)-> value", evaluate: ([e12]) => e12 && Nf(e12) } }];
  var Tf = { Congruent: { description: "Indicate that two expressions are congruent modulo a number", complexity: 11e3, signature: "(number, number, modulo: integer) -> boolean", evaluate: (e12, { engine: n }) => {
    if (e12.length < 3) return;
    let [i, t, r] = e12, o = i.value, s = t.value, a = r.value;
    if (typeof o == "number" && typeof s == "number" && typeof a == "number") return o % a === s % a ? n.True : n.False;
  } }, IsSame: { description: "Compare two expressions for structural equality", lazy: true, signature: "(any, any) -> boolean", evaluate: (e12, { engine: n }) => {
    if (e12.length !== 2) return;
    let [i, t] = e12;
    return i.isSame(t) ? n.True : n.False;
  } }, Equal: { complexity: 11e3, signature: "(any, any) -> boolean", lazy: true, canonical: (e12, { engine: n }) => te(n, "Equal", e12), eq: (e12, n) => e12.operator !== n.operator ? false : e12.op1.sub(e12.op2).N().isEqual(n.op1.sub(n.op2).N()), evaluate: (e12, { engine: n }) => {
    if (e12.length < 2) return n.True;
    let i;
    for (let t of e12) if (!i) i = t;
    else if (Cr(i, t) !== true) return n.False;
    return n.True;
  } }, NotEqual: { wikidata: "Q28113351", complexity: 11e3, signature: "(any, any) -> boolean", canonical: (e12, { engine: n }) => te(n, "NotEqual", e12), eq: (e12, n) => e12.operator !== n.operator ? false : !!(e12.op1.isEqual(n.op1) && e12.op2.isEqual(n.op2) || e12.op1.isEqual(n.op2) && e12.op2.isEqual(n.op1)), evaluate: (e12, { engine: n }) => {
    if (e12.length < 2) return n.False;
    let i;
    for (let t of e12) if (!i) i = t;
    else if (i.isEqual(t) === true) return n.False;
    return n.True;
  } }, Less: { complexity: 11e3, signature: "(any, any, ...any) -> boolean", canonical: (e12, { engine: n }) => te(n, "Less", e12), eq: (e12, n) => Sf(e12, n, "Greater"), evaluate: (e12, { engine: n }) => {
    if (e12.length === 2) {
      let [t, r] = e12, o = t.isLess(r);
      return o === void 0 ? void 0 : o ? n.True : n.False;
    }
    if (e12.length < 2) return n.True;
    let i;
    for (let t of e12) if (!i) i = t;
    else {
      let r = t.isLess(i);
      if (r === void 0) return;
      if (r === false) return n.False;
      i = t;
    }
    return n.True;
  } }, NotLess: { complexity: 11e3, signature: "(any, any, ...any) -> boolean", canonical: (e12, { engine: n }) => n._fn("Not", [te(n, "Less", e12)]) }, Greater: { complexity: 11e3, signature: "(any, any, ...any) -> boolean", canonical: (e12, { engine: n }) => te(n, "Less", [...e12].reverse()) }, NotGreater: { complexity: 11e3, signature: "(any, any, ...any) -> boolean", canonical: (e12, { engine: n }) => n._fn("Not", [n._fn("Greater", e12)]) }, LessEqual: { complexity: 11e3, signature: "(any, any, ...any) -> boolean", canonical: (e12, { engine: n }) => te(n, "LessEqual", e12), eq: (e12, n) => Sf(e12, n, "LessGreater"), evaluate: (e12, { engine: n }) => {
    if (e12.length === 2) {
      let [t, r] = e12, o = t.isLessEqual(r);
      return o === void 0 ? void 0 : o ? n.True : n.False;
    }
    if (e12.length < 2) return n.True;
    let i;
    for (let t of e12) if (!i) i = t;
    else {
      let r = t.isLessEqual(i);
      if (r === void 0) return;
      if (r === false) return n.False;
      i = t;
    }
    return n.True;
  } }, NotLessNotEqual: { complexity: 11e3, signature: "(any, any, ...any) -> boolean", canonical: (e12, { engine: n }) => n._fn("Not", [te(n, "LessEqual", e12)]) }, GreaterEqual: { complexity: 11e3, signature: "(any, any, ...any) -> boolean", canonical: (e12, { engine: n }) => te(n, "LessEqual", [...e12].reverse()) }, NotGreaterNotEqual: { complexity: 11e3, signature: "(any, any, ...any) -> boolean", canonical: (e12, { engine: n }) => n._fn("Not", [te(n, "GreaterEqual", e12)]) }, TildeFullEqual: { description: "Indicate isomorphism, congruence and homotopic equivalence", signature: "(any, any, ...any) -> boolean", canonical: (e12, { engine: n }) => te(n, "TildeFullEqual", e12) }, NotTildeFullEqual: { complexity: 11100, signature: "(any, any, ...any) -> boolean", canonical: (e12, { engine: n }) => n._fn("Not", [te(n, "TildeFullEqual", e12)]) }, TildeEqual: { description: "Approximately or asymptotically equal", complexity: 11e3, signature: "(any, any, ...any) -> boolean", canonical: (e12, { engine: n }) => te(n, "TildeEqual", e12) }, NotTildeEqual: { complexity: 11100, signature: "(any, any, ...any) -> boolean", canonical: (e12, { engine: n }) => n._fn("Not", [te(n, "TildeEqual", e12)]) }, Approx: { complexity: 11100, signature: "(any, any, ...any) -> boolean", canonical: (e12, { engine: n }) => te(n, "Approx", e12) }, NotApprox: { complexity: 11100, signature: "(any, any, ...any) -> boolean", canonical: (e12, { engine: n }) => n._fn("Not", [te(n, "Approx", e12)]) }, ApproxEqual: { complexity: 11100, signature: "(any, any, ...any) -> boolean", canonical: (e12, { engine: n }) => te(n, "ApproxEqual", e12) }, NotApproxEqual: { complexity: 11100, canonical: (e12, { engine: n }) => n._fn("Not", [te(n, "ApproxEqual", e12)]) }, ApproxNotEqual: { complexity: 11100, signature: "(any, any, ...any) -> boolean", canonical: (e12, { engine: n }) => te(n, "ApproxNotEqual", e12) }, NotApproxNotEqual: { complexity: 11100, signature: "(any, any, ...any) -> boolean", canonical: (e12, { engine: n }) => n._fn("Not", [te(n, "ApproxNotEqual", e12)]) }, Precedes: { complexity: 11100, signature: "(any, any, ...any) -> boolean", canonical: (e12, { engine: n }) => te(n, "Precedes", e12) }, NotPrecedes: { complexity: 11100, signature: "(any, any, ...any) -> boolean", canonical: (e12, { engine: n }) => n._fn("Not", [te(n, "Precedes", e12)]) }, Succeeds: { signature: "(any, any, ...any) -> boolean", canonical: (e12, { engine: n }) => te(n, "Succeeds", e12) }, NotSucceeds: { complexity: 11100, signature: "(any, any, ...any) -> boolean", canonical: (e12, { engine: n }) => n._fn("Not", [te(n, "Succeeds", e12)]) } };
  function te(e12, n, i) {
    i = W(i, n);
    let t = [], r = [];
    for (let o of i) ke(o) ? (t.push(o), r.push(o.ops[o.ops.length - 1])) : r.push(o);
    return t.length === 0 ? e12._fn(n, r) : e12._fn("And", [e12._fn(n, r), ...t]);
  }
  function Sf(e12, n, i) {
    return e12.operator === n.operator ? e12.nops !== n.nops ? false : e12.ops.every((t, r) => t.isEqual(n.ops[r])) : n.operator === i ? e12.nops !== n.nops ? false : e12.ops.every((t, r) => t.isEqual(n.ops[n.nops - 1 - r])) : false;
  }
  var _f = { EmptySet: { type: "set", constant: true, wikidata: "Q226183", eq: (e12) => g(e12.type, "set") && e12.size === 0, collection: { size: () => 0, contains: () => false, subsetOf: () => true, eltsgn: () => {
  }, elttype: () => "never" } }, Numbers: { type: "set<number>", constant: true, collection: { size: () => 1 / 0, contains: (e12, n) => g(n.type, "number"), subsetOf: (e12, n, i) => n.operator === "Range" || n.operator === "Linspace" ? true : g(n.type, "set<number>") && (!i || n.symbol !== "Numbers"), eltsgn: () => "unsigned", elttype: () => "number" } }, ComplexNumbers: { type: "set<complex>", constant: true, collection: { size: () => 1 / 0, contains: (e12, n) => g(n.type, "complex"), subsetOf: (e12, n, i) => n.operator === "Range" || n.operator === "Linspace" ? true : g(n.type, "set<complex>") && (!i || n.symbol !== "ComplexNumbers"), eltsgn: () => "unsigned", elttype: () => "complex" } }, ImaginaryNumbers: { type: "set<imaginary>", constant: true, collection: { size: () => 1 / 0, contains: (e12, n) => g(n.type, "imaginary"), subsetOf: (e12, n, i) => g(n.type, "set<imaginary>") && (!i || n.symbol !== "ImaginaryNumbers"), eltsgn: () => "unsigned", elttype: () => "complex" } }, Integers: { type: "set<integer>", constant: true, collection: { contains: (e12, n) => g(n.type, "integer"), size: () => 1 / 0, subsetOf: (e12, n, i) => n.operator === "Range" ? true : g(n.type, "set<integer>") && (!i || n.symbol !== "Integers"), eltsgn: () => {
  }, elttype: () => "integer" } }, RationalNumbers: { type: "set<rational>", constant: true, collection: { size: () => 1 / 0, contains: (e12, n) => g(n.type, "rational"), subsetOf: (e12, n, i) => g(n.type, "set<rational>") && (!i || n.symbol !== "RationalNumbers"), eltsgn: () => {
  }, elttype: () => "rational" } }, NegativeNumbers: { type: "set<real>", constant: true, collection: { size: () => 1 / 0, contains: (e12, n) => g(n.type, "real") && n.isNegative === true, subsetOf: (e12, n, i) => {
    if (n.operator === "Range" || n.operator === "Linspace") {
      let t = n.ops[0].re, r = n.ops[1].re;
      return t < 0 && r < 0;
    }
    return g(n.type, "set<real>") && n.symbolDefinition?.collection?.eltsgn?.(n) === "negative" && (!i || n.symbol !== "NegativeNumbers");
  }, eltsgn: () => "negative", elttype: () => "real" } }, NonPositiveNumbers: { type: "set<real>", constant: true, collection: { contains: (e12, n) => g(n.type, "real") && n.isNonPositive === true, size: () => 1 / 0, subsetOf: (e12, n, i) => {
    if (n.operator === "Range" || n.operator === "Linspace") {
      let t = n.ops[0].re, r = n.ops[1].re;
      return t >= 0 && r >= 0;
    }
    return g(n.type, "set<real>") && n.symbolDefinition?.collection?.eltsgn?.(n) === "non-positive" && (!i || n.symbol !== "NonPositiveNumbers");
  }, eltsgn: () => "non-positive", elttype: () => "real" } }, PositiveNumbers: { type: "set<real>", constant: true, collection: { contains: (e12, n) => g(n.type, "real") && n.isPositive === true, size: () => 1 / 0, subsetOf: (e12, n, i) => {
    if (n.operator === "Range" || n.operator === "Linspace") {
      let t = n.ops[0].re, r = n.ops[1].re;
      return t > 0 && r > 0;
    }
    return g(n.type, "set<real>") && n.symbolDefinition?.collection?.eltsgn?.(n) === "positive" && (!i || n.symbol !== "PositiveNumbers");
  }, eltsgn: () => "positive", elttype: () => "real" } }, NegativeIntegers: { type: "set<integer>", constant: true, collection: { contains: (e12, n) => g(n.type, "integer") && n.isNegative === true, size: () => 1 / 0, subsetOf: (e12, n, i) => {
    if (n.operator === "Range") {
      let t = n.ops[0].re, r = n.ops[1].re;
      return t < 0 && r < 0;
    }
    return g(n.type, "set<integer>") && n.symbolDefinition?.collection?.eltsgn?.(n) === "negative" && (!i || n.symbol !== "NegativeIntegers");
  }, eltsgn: () => "negative", elttype: () => "integer" } }, NonPositiveIntegers: { type: "set<integer>", constant: true, collection: { contains: (e12, n) => g(n.type, "integer") && n.isNonPositive === true, size: () => 1 / 0, subsetOf: (e12, n, i) => {
    if (n.operator === "Range") {
      let t = n.ops[0].re, r = n.ops[1].re;
      return t <= 0 && r <= 0;
    }
    return g(n.type, "set<integer>") && n.symbolDefinition?.collection?.eltsgn?.(n) === "non-positive" && (!i || n.symbol !== "NonPositiveIntegers");
  }, eltsgn: () => "non-positive", elttype: () => "integer" } }, PositiveIntegers: { type: "set<integer>", constant: true, collection: { contains: (e12, n) => g(n.type, "integer") && n.isPositive === true, size: () => 1 / 0, subsetOf: (e12, n, i) => {
    if (n.operator === "Range") {
      let t = n.ops[0].re, r = n.ops[1].re;
      return t > 0 && r > 0;
    }
    return g(n.type, "set<integer>") && n.symbolDefinition?.collection?.eltsgn?.(n) === "positive" && (!i || n.symbol !== "PositiveIntegers");
  }, eltsgn: () => "non-positive", elttype: () => "integer" } }, NonNegativeIntegers: { type: "set<integer>", constant: true, collection: { contains: (e12, n) => g(n.type, "integer") && n.isNonNegative === true, size: () => 1 / 0, subsetOf: (e12, n, i) => {
    if (n.operator === "Range") {
      let t = n.ops[0].re, r = n.ops[1].re;
      return t > 0 && r > 0;
    }
    return g(n.type, "set<integer>") && n.symbolDefinition?.collection?.eltsgn?.(n) === "non-negative" && (!i || n.symbol !== "NonNegativeInteger" && n.symbol !== "NaturalNumbers");
  }, eltsgn: () => "non-negative", elttype: () => "integer" } }, RealNumbers: { type: "set<real>", constant: true, collection: { contains: (e12, n) => g(n.type, "real"), size: () => 1 / 0, subsetOf: (e12, n, i) => g(n.type, "set<real>") && (!i || n.symbol !== "RealNumbers"), eltsgn: () => {
  }, elttype: () => "real" } }, NaturalNumbers: { type: "set<integer>", constant: true, collection: { contains: (e12, n) => g(n.type, "integer") && n.isNonNegative === true, size: () => 1 / 0, subsetOf: (e12, n, i) => {
    if (n.operator === "Range") {
      let t = n.ops[0].re, r = n.ops[1].re;
      return t > 0 && r > 0;
    }
    return g(n.type, "set<integer>") && n.symbolDefinition?.collection?.eltsgn?.(n) === "non-negative" && (!i || n.symbol !== "NonNegativeInteger" && n.symbol !== "NaturalNumbers");
  }, eltsgn: () => "non-negative", elttype: () => "integer" } }, Element: { complexity: 11200, signature: "(value, collection|string) -> boolean", evaluate: ([e12, n], { engine: i }) => {
    let t = n.contains(e12);
    if (t === true) return i.True;
    if (t === false) return i.False;
  } }, NotElement: { complexity: 11200, signature: "(value, collection|string) -> boolean", evaluate: ([e12, n], { engine: i }) => {
    let t = n.contains(e12);
    if (t === true) return i.False;
    if (t === false) return i.True;
  } }, Subset: { complexity: 11200, signature: "(lhs:collection, rhs: collection) -> boolean", evaluate: ([e12, n], { engine: i }) => {
    let t = yi(e12, n);
    if (t === true) return i.True;
    if (t === false) return i.False;
  } }, SubsetEqual: { complexity: 11200, signature: "(lhs:collection, rhs: collection) -> boolean", evaluate: ([e12, n], { engine: i }) => {
    let t = yi(e12, n, false);
    if (t === true) return i.True;
    if (t === false) return i.False;
  } }, NotSubset: { complexity: 11200, signature: "(lhs:collection, rhs: collection) -> boolean", evaluate: ([e12, n], { engine: i }) => {
    let t = yi(e12, n);
    if (t === true) return i.False;
    if (t === false) return i.True;
  } }, Superset: { complexity: 11200, signature: "(lhs:collection, rhs: collection) -> boolean", evaluate: ([e12, n], { engine: i }) => {
    let t = yi(n, e12);
    if (t === true) return i.True;
    if (t === false) return i.False;
  } }, SupersetEqual: { complexity: 11200, signature: "(lhs:collection, rhs: collection) -> boolean", evaluate: ([e12, n], { engine: i }) => {
    let t = yi(n, e12, true);
    if (t === true) return i.True;
    if (t === false) return i.False;
  } }, NotSuperset: { complexity: 11200, signature: "(lhs:collection, rhs: collection) -> boolean", evaluate: ([e12, n], { engine: i }) => {
    let t = yi(n, e12);
    if (t === true) return i.False;
    if (t === false) return i.True;
  } }, NotSupersetEqual: { complexity: 11200, signature: "(lhs:collection, rhs: collection) -> boolean", evaluate: ([e12, n], { engine: i }) => {
    let t = yi(n, e12, true);
    if (t === true) return i.False;
    if (t === false) return i.True;
  } }, CartesianProduct: { wikidata: "Q173740", signature: "(set, ...set) -> set" }, Complement: { wikidata: "Q242767", signature: "(set, ...set) -> set" }, Intersection: { wikidata: "Q185837", signature: "(set, ...set) -> set", canonical: (e12, { engine: n }) => e12.length === 0 || e12.length === 1 ? n.symbol("EmptySet") : (e12 = Ai(n, W(e12, "Intersection"), B("(set, ...set) -> set")) ?? e12, n._fn("Intersection", e12)), evaluate: nm }, Union: { wikidata: "Q185359", signature: "(collection, ...collection) -> set", canonical: (e12, { engine: n }) => e12.length === 0 ? n.symbol("EmptySet") : (e12 = Ai(n, W(e12, "Union"), B("(collection, ...collection) -> set")) ?? e12, n._fn("Union", e12)), evaluate: em, collection: { contains: (e12, n) => e12.ops.some((i) => i.contains(n)), size: (e12) => {
    if (e12.ops.some((t) => t.size === 1 / 0)) return 1 / 0;
    let n = [], i = 0;
    for (let t of e12.ops) {
      for (let r of ee(t)) n.every((o) => !o.contains(r)) && (i += 1);
      n.push(t);
    }
    return i;
  }, iterator: (e12) => {
    let n = [], i = 0, t = Di(e12.ops[i]);
    return t ? { next: () => {
      let r = false, o;
      do {
        if (o = t.next(), o.done) {
          if (n.push(e12.ops[i]), i += 1, i === e12.ops.length) return { value: void 0, done: true };
          if (t = Di(e12.ops[i]), !t) return { value: void 0, done: true };
        }
        r = n.every((s) => !s.contains(o.value));
      } while (!r);
      return { value: o.value, done: false };
    } } : { next: () => ({ value: void 0, done: true }) };
  } } }, SetMinus: { wikidata: "Q18192442", signature: "(set, ...value) -> set", evaluate: im, collection: { contains: (e12, n) => {
    let [i, ...t] = e12.ops;
    return (i.contains(n) ?? false) && !t.some((r) => r.isSame(n));
  }, iterator: (e12) => {
    let [n, ...i] = e12.ops, t = Di(n);
    return t ? { next() {
      let r = t.next();
      for (; !r.done && i.some((o) => o.isSame(r.value)); ) r = t.next();
      return r;
    } } : { next: () => ({ value: void 0, done: true }) };
  } } }, SymmetricDifference: { wikidata: "Q1147242", signature: "(set, set) -> set" } };
  function yi(e12, n, i = true) {
    return !e12.isCollection || !n.isCollection ? false : !!e12.symbolDefinition?.collection?.subsetOf?.(e12, n, i);
  }
  function em(e12, { engine: n }) {
    let i = e12.map((o) => o.isCollection ? o : n.function("Set", [o]));
    if (i.reduce((o, s) => o + (s.size ?? 0), 0) > 100) return n._fn("Union", i);
    let r = [];
    for (let o of i) for (let s of ee(o)) r.every((a) => !a.isSame(s)) && r.push(s);
    return r.length === 0 ? n.symbol("EmptySet") : n._fn("Set", r);
  }
  function nm(e12, { engine: n }) {
    let i = [...e12[0].ops ?? []];
    for (let t of e12.slice(1)) ie(t) ? i = i.filter((r) => [...ee(t)].some((o) => r.isSame(o))) : i = i.filter((r) => r.isSame(t));
    return i.length === 0 ? n.symbol("EmptySet") : n._fn("Set", i);
  }
  function im(e12, { engine: n }) {
    return n.symbol("EmptySet");
  }
  var ct = class e9 {
    constructor(n) {
      n ? n instanceof e9 ? this._items = new Map(n._items) : this._items = new Map(n) : this._items = /* @__PURE__ */ new Map();
    }
    has(n) {
      for (let i of this._items.keys()) if (i.isSame(n)) return true;
      return false;
    }
    get(n) {
      for (let [i, t] of this._items) if (i.isSame(n)) return t;
    }
    clear() {
      this._items.clear();
    }
    set(n, i) {
      for (let t of this._items.keys()) if (t.isSame(n)) {
        this._items.set(t, i);
        return;
      }
      this._items.set(n, i);
    }
    delete(n) {
      this._items.delete(n);
    }
    [Symbol.iterator]() {
      return this._items.entries();
    }
    entries() {
      return this._items.entries();
    }
  };
  var De = class extends Q {
    constructor(n, i, t) {
      super(n, t?.metadata), i instanceof V || typeof i == "number" ? this._value = i : this._value = n._numericValue(i);
    }
    get hash() {
      return this._hash ?? (this._hash = mn(this._value.toString())), console.info("hash BoxedNumber ", this._hash), this._hash;
    }
    get json() {
      let n = this._value;
      return typeof n == "number" ? Number.isNaN(n) ? "NaN" : Number.isFinite(n) ? n : n > 0 ? "PositiveInfinity" : "NegativeInfinity" : n.toJSON();
    }
    get operator() {
      return "Number";
    }
    get isPure() {
      return true;
    }
    get isCanonical() {
      return true;
    }
    set isCanonical(n) {
    }
    get complexity() {
      return 1;
    }
    get numericValue() {
      return this._value;
    }
    get isNumberLiteral() {
      return true;
    }
    get re() {
      return typeof this._value == "number" ? this._value : this._value.re;
    }
    get im() {
      return typeof this._value == "number" ? 0 : this._value.im;
    }
    get bignumRe() {
      if (typeof this._value != "number") return this._value.bignumRe;
    }
    get bignumIm() {
    }
    neg() {
      let n = this._value;
      return n === 0 ? this : typeof n == "number" ? this.engine.number(-n) : this.engine.number(n.neg());
    }
    inv() {
      return this.value === 1 || this.value === -1 ? this : typeof this._value == "number" ? Number.isInteger(this._value) ? this.engine.number(this.engine._numericValue({ rational: [1, this._value] })) : this.engine.number(1 / this._value) : this.engine.number(this._value.inv());
    }
    abs() {
      return this.isPositive ? this : typeof this._value == "number" ? this.engine.number(-this._value) : this.engine.number(this._value.abs());
    }
    add(n) {
      let i = this.engine;
      return this.is(0) ? i.box(n) : typeof n == "number" ? n === 0 ? this : typeof this._value == "number" ? i.number(this._value + n) : i.number(this._value.add(n)) : n.numericValue !== null ? typeof this._value == "number" ? typeof n.numericValue == "number" ? i.number(this._value + n.numericValue) : i.number(n.numericValue.add(this._value)) : i.number(this._value.add(n.numericValue)) : Z(this.canonical, n.canonical);
    }
    mul(n) {
      if (this.is(1)) return this.engine.box(n);
      if (this.is(-1)) return this.engine.box(n).neg();
      let i = this.engine;
      return typeof n == "number" ? n === 1 ? this : n === 0 || this.is(0) ? this.engine.Zero : n === -1 ? this.neg() : i.number(typeof this._value == "number" ? this._value * n : this._value.mul(n)) : typeof this._value == "number" && typeof n == "number" ? i.number(this._value * n) : n instanceof V ? this.is(1) ? i.number(n) : this.is(-1) ? i.number(n.neg()) : i.number(n.mul(this._value)) : n.numericValue !== null ? i.number(i._numericValue(this._value).mul(n.numericValue)) : ue(this, n);
    }
    div(n) {
      return qi(this, n);
    }
    pow(n) {
      return pe(this, n, { numericApproximation: false });
    }
    root(n) {
      if (!this.isCanonical) return this.canonical.root(n);
      if (typeof n == "number") {
        if (n === 0) return this.engine.NaN;
        if (n === 1) return this;
        if (n === -1) return this.inv();
        if (n === 2) return this.sqrt();
        if (this.isNegative) {
          if (n % 2 === 1) return this.neg().root(n).neg();
          if (n % 2 === 0) return this.neg().root(n);
        }
      } else {
        if (n = n.canonical, n.is(0)) return this.engine.NaN;
        if (n.is(1)) return this;
        if (n.is(-1)) return this.inv();
        if (n.is(2)) return this.sqrt();
        if (this.isNegative) {
          if (n.isOdd) return this.neg().root(n).neg();
          if (n.isEven) return this.neg().root(n);
        }
      }
      let i = typeof n == "number" ? n : n.re;
      if (Number.isInteger(i)) if (typeof this._value == "number") {
        let t = this._value ** (1 / i);
        if (Number.isInteger(t)) return this.engine.number(t);
      } else {
        let t = this._value.root(i);
        if (g(t.type, "integer")) return this.engine.number(t);
      }
      return this.engine._fn("Root", [this, this.engine.box(n)]);
    }
    sqrt() {
      return typeof this._value == "number" ? this._value === 0 || this._value === 1 ? this : this._value === -1 ? this.engine.I : this._value > 0 && Number.isInteger(this._value) && this._value < O ? this.engine.number(this.engine._numericValue({ radical: this._value })) : this.engine.number(this.engine._numericValue(this._value).sqrt()) : this.is(0) || this.is(1) ? this : this.engine.number(this._value.sqrt());
    }
    ln(n) {
      let i = n ? this.engine.box(n) : void 0;
      if (!this.isCanonical) return this.canonical.ln(i);
      if (this.is(0)) return this.engine.NegativeInfinity;
      if (i && this.isSame(i)) return this.engine.One;
      if ((!i || i.symbol === "ExponentialE") && this.symbol === "ExponentialE") return this.engine.One;
      let t = this.re;
      if (Number.isInteger(t) && t > 0) {
        let r = this.engine, [o, s] = Ii(t, 3);
        if (o !== 1) return r.number(o).ln(i).mul(3).add(r.number(s).ln(i));
        if ([o, s] = Ii(t, 2), o !== 1) return r.number(o).ln(i).mul(2).add(r.number(s).ln(i));
      }
      return i && g(i.type, "integer") ? typeof this._value == "number" ? this.engine.number(Math.log(this._value) / Math.log(i.re)) : this.engine.number(this._value.ln(i.re)) : i === void 0 ? typeof this._value == "number" ? this.engine.number(Math.log(this._value)) : this.engine.number(this._value.ln()) : this.engine._fn("Ln", [this]);
    }
    get type() {
      return typeof this._value == "number" ? Number.isFinite(this._value) ? Number.isInteger(this._value) ? "finite_integer" : "finite_real" : "non_finite_number" : this._value.type;
    }
    get sgn() {
      if (this._value === 0) return "zero";
      let n;
      if (typeof this._value == "number") {
        if (Number.isNaN(this._value)) return "unsigned";
        n = Math.sign(this._value);
      } else n = this._value.sgn();
      return n === void 0 || Number.isNaN(n) ? "unsigned" : n === 0 ? "zero" : n > 0 ? "positive" : "negative";
    }
    get numerator() {
      return typeof this._value == "number" ? this : this.engine.number(this._value.numerator);
    }
    get denominator() {
      return typeof this._value == "number" ? this.engine.One : this.engine.number(this._value.denominator);
    }
    get numeratorDenominator() {
      if (typeof this._value == "number") return [this, this.engine.One];
      let n = this.engine;
      return [n.number(this._value.numerator), n.number(this._value.denominator)];
    }
    subs(n, i) {
      return this.isStructural ? this : this.structural.subs(n, i);
    }
    replace(n, i) {
      return Dn(this.structural, n, i).at(-1)?.value ?? null;
    }
    match(n, i) {
      return ot(this.structural, n, i);
    }
    get isPositive() {
      return typeof this._value == "number" ? !Number.isNaN(this._value) && this._value > 0 : st(this.sgn);
    }
    get isNonNegative() {
      return typeof this._value == "number" ? !Number.isNaN(this._value) && this._value >= 0 : at(this.sgn);
    }
    get isNegative() {
      return typeof this._value == "number" ? !Number.isNaN(this._value) && this._value < 0 : ut(this.sgn);
    }
    get isNonPositive() {
      return typeof this._value == "number" ? !Number.isNaN(this._value) && this._value <= 0 : lt(this.sgn);
    }
    get isOdd() {
      if (this.is(1) || this.is(-1)) return true;
      if (this.is(0)) return false;
      if (!this.isFinite || !this.isInteger) return;
      if (typeof this._value == "number") return this._value % 2 !== 0;
      let [n, i] = [this._value.numerator, this._value.denominator];
      return i.isOne ? n.re % 2 !== 0 : n.re % 2 !== 0 && i.re % 2 === 0;
    }
    get isEven() {
      let n = this.isOdd;
      return n !== void 0 ? !n : void 0;
    }
    get isInfinity() {
      return typeof this._value == "number" ? !Number.isFinite(this._value) && !Number.isNaN(this._value) : Number.isFinite(this._value.im) ? this._value.isPositiveInfinity || this._value.isNegativeInfinity : true;
    }
    get isNaN() {
      return typeof this._value == "number" ? Number.isNaN(this._value) : this._value.isNaN;
    }
    get isFinite() {
      return this.isInfinity === false && this.isNaN === false;
    }
    get isNumber() {
      return true;
    }
    get isInteger() {
      return typeof this._value == "number" ? Number.isInteger(this._value) : g(this._value.type, "integer");
    }
    get isRational() {
      return typeof this._value == "number" ? Number.isInteger(this._value) : g(this._value.type, "rational");
    }
    get isReal() {
      return typeof this._value == "number" ? true : g(this._value.type, "real");
    }
    is(n) {
      return typeof n == "number" ? typeof this._value == "number" ? this._value === n : this._value.eq(n) : false;
    }
    get canonical() {
      return this;
    }
    get isStructural() {
      return typeof this._value == "number" || g(this.type, "rational") ? true : !(this._value instanceof j);
    }
    get structural() {
      return this.isStructural ? this : this.engine.box(this.json, { canonical: false, structural: true });
    }
    toNumericValue() {
      let n = this._value;
      return typeof n == "number" ? [this.engine._numericValue(n), this.engine.One] : [n, this.engine.One];
    }
    simplify(n) {
      return Wn(this.canonical.structural, n).at(-1).value ?? this;
    }
    evaluate(n) {
      return n?.numericApproximation ? this.N() : this;
    }
    N() {
      let n = this._value;
      if (typeof n == "number") return this;
      let i = n.N();
      return n === i ? this : this.engine.number(i);
    }
  };
  function lo(e12, n) {
    if (n instanceof V) return n;
    if (typeof n == "number") return Number.isInteger(n) && n >= -O && n <= O || !Number.isFinite(n) ? n : e12._numericValue(n);
    if (n instanceof X) {
      let i = n.toNumber();
      return n.isInteger() && Math.abs(i) <= O ? i : n.isNaN() ? NaN : n.isFinite() ? e12._numericValue(n) : i > 0 ? 1 / 0 : -1 / 0;
    }
    if (typeof n == "bigint") return n >= -O && n <= O ? Number(n) : e12._numericValue(n);
    if (n instanceof F) return n.im === 0 ? lo(e12, n.re) : n.isNaN() ? NaN : !n.isFinite() && n.im === 0 ? n.re > 0 ? 1 / 0 : -1 / 0 : e12._numericValue({ re: n.re, im: n.im });
    if (typeof n == "object" && "num" in n) {
      if (typeof n.num == "number") return lo(e12, n.num);
      if (typeof n.num != "string") throw new Error("MathJSON `num` property should be a string of digits");
      return If(e12, n.num);
    }
    if (typeof n == "string") return If(e12, n);
    if (n[1] == 0) return NaN;
    if (typeof n[1] == "number" && !Number.isFinite(n[1])) return Number.isFinite(n[0]) ? 0 : NaN;
    if (typeof n[0] == "number" && !Number.isFinite(n[0])) {
      let i = n[0] > 0 ? 1 : -1;
      return n[0] > 0 ? i > 0 ? 1 / 0 : -1 / 0 : n[0] < 0 ? i > 0 ? -1 / 0 : 1 / 0 : NaN;
    }
    return e12._numericValue(n);
  }
  function If(e12, n) {
    if (n = n.toLowerCase(), /[0-9][nd]$/.test(n) && (n = n.slice(0, -1)), n = n.replace(/[\u0009-\u000d\u0020\u00a0]/g, ""), n === "nan") return NaN;
    if (n === "infinity" || n === "+infinity") return Number.POSITIVE_INFINITY;
    if (n === "-infinity") return Number.NEGATIVE_INFINITY;
    if (n === "0") return 0;
    if (n === "1") return 1;
    if (n === "-1") return -1;
    if (/\([0-9]+\)/.test(n)) {
      let [t, r, o, s] = n.match(/(.+)\(([0-9]+)\)(.+)?$/) ?? [];
      n = r + o.repeat(Math.ceil(e12.precision / o.length)) + (s ?? "");
    }
    let i = K(n);
    return i !== null ? i >= -O && i <= O ? Number(i) : e12._numericValue(i) : e12._numericValue(e12.bignum(n));
  }
  var Bf = ["\\varphi -> \\frac{1+\\sqrt{5}}{2}", tm, rm, (e12) => {
    let n = Me(e12);
    return n ? { value: n, because: "expand" } : void 0;
  }, (e12) => {
    if (e12.operator === "Add") return { value: Z(...e12.ops.map((n) => n.canonical.simplify())), because: "addition" };
  }, (e12) => {
    if (e12.operator === "Negate") return { value: e12.op1.neg(), because: "negation" };
  }, (e12) => {
    if (e12.operator === "Multiply") return { value: ue(...e12.ops.map((n) => n.canonical.simplify())), because: "multiplication" };
  }, (e12) => {
    if (e12.operator === "Divide") return { value: e12.op1.div(e12.op2), because: "division" };
    if (e12.operator === "Rational" && e12.nops === 2) return { value: e12.op1.div(e12.op2), because: "rational" };
  }, (e12) => {
    if (e12.operator === "Power") return { value: e12.op1.pow(e12.op2), because: "power" };
    if (e12.operator === "Root") return { value: e12.op1.root(e12.op2), because: "root" };
    if (e12.operator === "Sqrt") return { value: e12.op1.sqrt(), because: "sqrt" };
  }, (e12) => {
    if (e12.operator !== "Abs") return;
    let n = e12.op1;
    if (n.isNonNegative) return { value: n, because: "|x| -> x" };
    if (n.isNegative) return { value: n.neg(), because: "|x| -> -x" };
  }, (e12) => {
    if (e12.operator !== "Sign") return;
    let n = e12.sgn, i = e12.engine;
    if (n !== void 0) {
      if (n === "positive") return { value: i.One, because: "sign positive" };
      if (n === "negative") return { value: i.One, because: "sign negative" };
      if (n === "zero") return { value: i.Zero, because: "sign zero" };
      if (n === "unsigned") return { value: i.NaN, because: "sign unsinged" };
    }
  }, (e12) => {
    if (e12.operator === "Ln") return { value: e12.op1.ln(e12.ops[1]), because: "ln" };
    if (e12.operator === "Log") return { value: e12.op1.ln(e12.ops[1] ?? 10), because: "log" };
  }, (e12) => {
    if (e12.operator === "Max") {
      if (e12.nops === 0) return { value: e12.engine.NegativeInfinity, because: "max" };
      if (e12.nops === 1) return { value: e12.op1, because: "max" };
    } else if (e12.operator === "Min") {
      if (e12.nops === 0) return { value: e12.engine.PositiveInfinity, because: "min" };
      if (e12.nops === 1) return { value: e12.op1, because: "min" };
    } else if (e12.operator === "Supremum") {
      if (e12.nops === 0) return { value: e12.engine.NegativeInfinity, because: "sup" };
      if (e12.nops === 1) return { value: e12.op1, because: "sup" };
    } else if (e12.operator === "Infimum") {
      if (e12.nops === 0) return { value: e12.engine.PositiveInfinity, because: "inf" };
      if (e12.nops === 1) return { value: e12.op1, because: "inf" };
    }
  }, (e12) => {
    if (e12.operator !== "Derivative") return;
    let n = e12.engine, [i, t] = e12.ops;
    if (e12.nops === 2) return { value: n.function("Derivative", [i.simplify(), t]), because: "derivative" };
    if (e12.nops === 1) return { value: n.function("Derivative", [i.simplify()]), because: "derivative" };
  }, (e12) => e12.operator !== "Hypot" ? void 0 : { value: e12.engine.box(["Sqrt", ["Add", ["Square", e12.op1], ["Square", e12.op2]]]).simplify(), because: "hypot(x,y) -> sqrt(x^2+y^2)" }, (e12) => {
    if (e12.operator !== "Congruent" || e12.nops < 3) return;
    let n = e12.engine;
    return { value: n._fn("Equal", [n.function("Mod", [e12.ops[0], e12.ops[2]]).simplify(), n.function("Mod", [e12.ops[1], e12.ops[2]]).simplify()]).simplify(), because: "congruent" };
  }, (e12) => {
    e12.operator;
  }, (e12) => {
    if (!is(e12)) return;
    let n = Lt(e12.operator, e12.op1);
    if (n) return { value: n, because: "constructible value" };
  }, (e12) => {
    if (e12.operator !== "InverseFunction") return;
    let n = Ot(e12.engine, e12.ops);
    if (n) return { value: n, because: "inverse function" };
  }, (e12) => {
    if (e12.operator !== "Arctan2") return;
    let [n, i] = e12.ops, t = e12.engine;
    return n.isFinite === false && i.isFinite === false ? { value: t.NaN, because: "arctan2" } : n.is(0) && i.is(0) ? { value: t.Zero, because: "arctan2" } : i.isFinite === false ? { value: i.isPositive ? t.Zero : t.Pi, because: "arctan2" } : n.isFinite === false ? { value: n.isPositive ? t.Pi.div(2) : t.Pi.div(-2), because: "arctan2" } : n.is(0) ? { value: i.isPositive ? t.Zero : t.Pi, because: "arctan2" } : { value: t.function("Arctan", [n.div(i)]).simplify(), because: "arctan2" };
  }, "\\arsinh(x) -> \\ln(x+\\sqrt{x^2+1})", "\\arcosh(x) -> \\ln(x+\\sqrt{x^2-1})", "\\artanh(x) -> \\frac{1}{2}\\ln(\\frac{1+x}{1-x})", "\\operatorname{arcoth}(x) -> \\frac{1}{2}\\ln(\\frac{x+1}{x-1})", "\\arsech(x) -> \\ln(\\frac{1+\\sqrt{1-x^2}}{x})", "\\operatorname{arccsch}(x) -> \\ln(\\frac{1}{x} + \\sqrt{\\frac{1}{x^2}+1})", Ef];
  function tm(e12) {
    if (!Vn(e12) && !Lo(e12)) return;
    let n = e12, i = e12.engine, t = e12.op1.simplify(), r = e12.op2.simplify();
    if (e12 = i.function(e12.operator, [t, r]), e12 = Gn(e12) ?? e12, ke(e12.operator), e12.nops === 2 && !e12.op2.is(0)) {
      let o = Gn(i.function(e12.operator, [e12.op1.sub(e12.op2), i.Zero]));
      i.costFunction(o) < i.costFunction(e12) && (e12 = o);
    }
    if (!e12.isSame(n)) return { value: e12, because: "simplify-relational-operator" };
  }
  function rm(e12) {
    return e12.operator !== "List" || !e12.ops.every((i) => Lo(i) || Vn(i)) ? void 0 : { value: e12.engine.function("List", e12.ops.map((i) => i.simplify())), because: "simplify-system-of-equations" };
  }
  var kf = [{ Choose: { complexity: 1200, signature: "(n:number, m:number) -> number", evaluate: (e12, { engine: n }) => {
    let i = e12[0].re, t = e12[1].re;
    if (!(!Number.isFinite(i) || !Number.isFinite(t))) return i < 0 || t < 0 || t > i ? n.NaN : n.number(Xo(i, t));
  } } }, { Mean: { complexity: 1200, threadable: false, signature: "((collection|number)...) -> number", evaluate: (e12, { engine: n }) => n.number(se(n) ? fl(n.bignum.bind(n), cn(e12)) : Gr(fn(e12))) }, Median: { complexity: 1200, threadable: false, signature: "((collection|number)...) -> number", evaluate: (e12, { engine: n }) => n.number(se(n) ? di(cn(e12)) : Rn(fn(e12))) }, Variance: { complexity: 1200, threadable: false, signature: "((collection|number)...) -> number", evaluate: (e12, { engine: n }) => n.number(se(n) ? vs(n.bignum.bind(n), cn(e12)) : Ki(fn(e12))) }, PopulationVariance: { complexity: 1200, threadable: false, signature: "((collection|number)...) -> number", evaluate: (e12, { engine: n }) => n.number(se(n) ? Ss(n.bignum.bind(n), cn(e12)) : et(fn(e12))) }, StandardDeviation: { complexity: 1200, threadable: false, description: "Sample Standard Deviation of a collection of numbers.", signature: "((collection|number)...) -> number", evaluate: (e12, { engine: n }) => n.number(se(n) ? vs(n.bignum.bind(n), cn(e12)).sqrt() : Math.sqrt(Ki(fn(e12)))) }, PopulationStandardDeviation: { complexity: 1200, threadable: false, description: "Population Standard Deviation of a collection of numbers.", signature: "((collection|number)...) -> number", evaluate: (e12, { engine: n }) => n.number(se(n) ? Ss(n.bignum.bind(n), cn(e12)).sqrt() : Math.sqrt(et(fn(e12)))) }, Kurtosis: { complexity: 1200, threadable: false, signature: "((collection|number)...) -> number", evaluate: (e12, { engine: n }) => n.number(se(n) ? pl(n.bignum.bind(n), cn(e12)) : Ur(fn(e12))) }, Skewness: { complexity: 1200, threadable: false, signature: "((collection|number)...) -> number", evaluate: (e12, { engine: n }) => n.number(se(n) ? ml(n.bignum.bind(n), cn(e12)) : jr(fn(e12))) }, Mode: { complexity: 1200, threadable: false, signature: "((collection|number)...) -> number", evaluate: (e12, { engine: n }) => n.number(se(n) ? gl(n.bignum.bind(n), cn(e12)) : Zr(fn(e12))) }, Quartiles: { complexity: 1200, threadable: false, signature: "((collection|number)...) -> tuple<mid:number, lower:number, upper:number>", evaluate: (e12, { engine: n }) => {
    let [i, t, r] = (se(n) ? hl(cn(e12)) : Hr(fn(e12))).map((o) => n.number(o));
    return n.tuple(i, t, r);
  } }, InterquartileRange: { complexity: 1200, threadable: false, signature: "((collection|number)...) -> number", evaluate: (e12, { engine: n }) => n.number(se(n) ? xl(cn(e12)) : Wr(fn(e12))) }, Erf: { complexity: 7500, signature: "number -> number", evaluate: (e12, { engine: n }) => {
    let i = e12[0].re;
    if (Number.isFinite(i)) return n.number(ss(i));
  } }, Erfc: { complexity: 7500, signature: "number -> number", evaluate: (e12, { engine: n }) => {
    let i = e12[0].re;
    if (Number.isFinite(i)) return n.number(1 - ss(i));
  } }, ErfInv: { complexity: 7500, signature: "number -> number", evaluate: (e12, { engine: n }) => {
    let i = e12[0].re;
    if (Number.isFinite(i)) return n.number(Mu(i));
  } } }];
  function* wf(e12) {
    if (e12.length === 1 && ii(e12[0])) yield* ee(e12[0]);
    else for (let n of e12) ii(n) ? yield* ee(n) : yield n;
  }
  function* fn(e12) {
    for (let n of wf(e12)) yield n.re;
  }
  function* cn(e12) {
    for (let n of wf(e12)) yield n.bignumRe ?? n.engine.bignum(n.re);
  }
  var Df = [{ Pi: { type: "real", constant: true, holdUntil: "N", wikidata: "Q167", value: (e12) => e12.number(se(e12) ? e12._BIGNUM_PI : Math.PI) } }, { Degrees: { signature: "real -> real", canonical: (e12, { engine: n }) => {
    let i = n;
    if (i.angularUnit === "deg") return e12[0];
    if (e12.length !== 1) return i._fn("Degrees", e12);
    let t = e12[0];
    if (t.numericValue === null || !t.isValid) return i._fn("Degrees", e12);
    let r = t.re;
    if (Number.isNaN(r)) return t.mul(i.Pi).div(180);
    if (r = r % 360, r < 0 && (r += 360), Number.isInteger(r)) {
      let o = Mi([r, 180]);
      return o[0] === 0 ? i.Zero : o[0] === 1 && o[1] === 1 ? i.Pi : o[0] === 1 ? i.Pi.div(o[1]) : i.number(o).mul(i.Pi);
    }
    return i.number(r).div(180).mul(i.Pi);
  }, evaluate: (e12, n) => n.engine.angularUnit === "deg" ? e12[0] : e12[0].mul(n.engine.Pi.div(180)).evaluate(n) }, Hypot: { threadable: true, signature: "(real, real) -> real", sgn: () => "non-negative", evaluate: ([e12, n], { engine: i }) => i.box(["Sqrt", ["Add", ["Square", e12], ["Square", n]]]) }, Sin: re("Sin", 5e3) }, { Arctan: { wikidata: "Q2257242", complexity: 5200, threadable: true, signature: "number -> real", sgn: ([e12]) => ns("Arctan", e12), evaluate: ([e12], { numericApproximation: n }) => n ? Pt("Arctan", e12) : Lt("Arctan", e12) ?? Pt("Arctan", e12) }, Arctan2: { wikidata: "Q776598", complexity: 5200, threadable: true, signature: "(y:number, x: number) -> real", evaluate: ([e12, n], { engine: i, numericApproximation: t }) => t ? hn(e12, n, Math.atan2, (r, o) => X.atan2(r, o)) : e12.isFinite === false && n.isFinite === false ? i.NaN : e12.is(0) && n.is(0) ? i.Zero : n.isFinite === false ? n.isPositive ? i.Zero : i.Pi : e12.isFinite === false ? e12.isPositive ? i.Pi.div(2) : i.Pi.div(-2) : e12.is(0) ? n.isPositive ? i.Zero : i.Pi : i.function("Arctan", [e12.div(n)]).evaluate() }, Cos: re("Cos", 5050), Tan: re("Tan", 5100) }, { Arcosh: re("Arcosh", 6200), Arcsin: re("Arcsin", 5500), Arsinh: re("Arsinh", 6100), Artanh: re("Artanh", 6300), Cosh: re("Cosh", 6050), Cot: re("Cot", 5600), Csc: re("Csc", 5600, "Cosecant"), Sec: re("Sec", 5600, "Secant, inverse of cosine"), Sinh: re("Sinh", 6e3), Haversine: { wikidata: "Q2528380", threadable: true, signature: "real -> number", evaluate: ([e12], { engine: n }) => n.box(["Divide", ["Subtract", 1, ["Cos", e12]], 2]) }, InverseHaversine: { threadable: true, signature: "real -> real", evaluate: ([e12], { engine: n }) => n.box(["Multiply", 2, ["Arcsin", ["Sqrt", e12]]]) } }, { Csch: re("Csch", 6200, "Hyperbolic cosecant"), Sech: re("Sech", 6200, "Hyperbolic secant"), Tanh: re("Tanh", 6200, "Hyperbolic tangent") }, { Arccos: re("Arccos", 5550), Arccot: re("Arccot", 5650), Arcoth: re("Arcoth", 6350), Arcsch: re("Arcsch", 6250), Arcsec: re("Arcsec", 5650), Arsech: re("Arsech", 6250), Arccsc: re("Arccsc", 5650), Coth: re("Coth", 6300), InverseFunction: { lazy: true, signature: "(function) -> function", canonical: (e12, { engine: n }) => (e12 = Fe(n, e12, 1), Ot(n, e12) ?? n._fn("InverseFunction", e12)), evaluate: (e12, { engine: n }) => Ot(n, e12) } }];
  function re(e12, n, i) {
    return { complexity: n, description: i, threadable: true, signature: "number -> number", sgn: ([t]) => ns(e12, t), evaluate: ([t], { numericApproximation: r }) => r ? Pt(e12, t) : Lt(e12, t) ?? Pt(e12, t) };
  }
  var fe = class {
    constructor(n, i, t) {
      this.constant = false;
      this.holdUntil = "evaluate";
      if (!n.context) throw Error("No context available");
      this.name = i, this._engine = n, this.scope = n.context, this.update(t);
    }
    get isFunction() {
      return g(this.type, "function");
    }
    get isConstant() {
      return this.constant;
    }
    update(n) {
      if (n.wikidata && (this.wikidata = n.wikidata), n.description && (this.description = n.description), n.url && (this.url = n.url), n.flags && (this._flags = Fo(n.flags)), n.holdUntil && (this.holdUntil = n.holdUntil), this.constant && n.constant === false) throw new Error(`The constant "${this.name}" cannot be changed to a variable`);
      if (n.constant && (this.constant = n.constant, this._defValue = n.value), this._value = Rf(this._engine, n.value), n.type) {
        let i = B(n?.type);
        if (!Tn(i)) throw new Error(`Invalid type: "${n.type}"`);
        this._type = i, this.inferredType = false;
      }
      if (this._value) {
        if (!this._type || this._type === "unknown") this._type = this._value.type, this.inferredType = true;
        else if (!g(this._value.type, this._type)) throw new Error([`Symbol "${this.name}"`, `The value "${this._value.toString()}" of type "${P(this._value.type)}" is not compatible with the type "${P(this._type)}"`].join(`
|   `));
      }
      n.eq && (this.eq = n.eq), n.neq && (this.neq = n.neq), n.cmp && (this.cmp = n.cmp), n.collection && (this.collection = ou(n.collection));
    }
    reset() {
      this.constant && (this._value = null);
    }
    get value() {
      return this._value === null && (this._value = Rf(this._engine, this._defValue)), this._value;
    }
    set value(n) {
      if (this.constant) throw new Error(`The value of the constant "${this.name}" cannot be changed`);
      if (this._defValue, n !== void 0) {
        let i = this._engine.box(n);
        this.inferredType ? (this._value = i, this._type = this._type ? Oe(this._type, i.type) : i.type) : !this._type || this.type === "unknown" || !i.type || g(i.type, this._type) ? this._value = i : this._value = void 0;
      } else this._value = void 0;
    }
    get type() {
      return this._type ?? this._value?.type ?? "unknown";
    }
    set type(n) {
      if (this.constant) throw new Error(`The type of the constant "${this.name}" cannot be changed`);
      if (!this.inferredType && this.type !== "unknown") throw Error(`The type of "${this.name}" cannot be changed because it has already been declared`);
      if (n === "unknown") {
        this._defValue = void 0, this._value = void 0, this._flags = void 0, this._type = "unknown";
        return;
      }
      if (this._type === "unknown") {
        this._type = n;
        return;
      }
      if (this._type && !g(n, this._type)) throw Error(`The type of "${this.name}" cannot be widened from "${this._type.toString()}" to "${P(n)}"`);
      if (this._value?.type && !g(this._value.type, n)) throw Error(`The type of "${this.name}" cannot be changed to "${P(n)}" because its value has a type of "${P(this._value.type)}"`);
      this._type = n;
    }
    get sgn() {
      return this.value?.sgn ?? this._flags?.sgn;
    }
    set sgn(n) {
      this.updateFlags({ sgn: n });
    }
    get even() {
      return this.value?.isEven ?? this._flags?.even;
    }
    set even(n) {
      this.updateFlags({ even: n });
    }
    get odd() {
      return this.value?.isOdd ?? this._flags?.odd;
    }
    set odd(n) {
      this.updateFlags({ odd: n });
    }
    updateFlags(n) {
      if (this.constant) throw Error(`The flags of "${this.name}" cannot be changed because it is a constant`);
      this._flags = Fo({ ...this._flags ?? {}, ...n });
    }
  };
  function Rf(e12, n) {
    if (n !== void 0) return bt(n) ? e12.parse(n) ?? e12.symbol("Undefined") : typeof n == "function" ? e12.box(n(e12) ?? "Undefined") : n instanceof Q ? n : e12.box(n);
  }
  var om = /* @__PURE__ */ new Set(["description", "wikidata", "url", "lazy", "threadable", "associative", "commutative", "commutativeOrder", "idempotent", "involution", "pure", "signature", "type", "sgn", "even", "complexity", "canonical", "evaluate", "evalDimension", "compile", "eq", "neq", "cmp", "collection"]);
  var Ge = class {
    constructor(n, i, t) {
      if (!n.context) throw Error("No context available");
      this.engine = n, this.scope = n.context;
      for (let f in t) if (!om.has(f)) throw new Error(`Function Definition "${i}": unexpected key "${f}"`);
      this.lazy = t.lazy ?? false;
      let r = t.idempotent ?? false, o = t.involution ?? false;
      if (r && o) throw new Error(`Function Definition "${i}": the 'idempotent' and 'involution' flags are mutually exclusive`);
      if (this.name = i, this.description = t.description, this.wikidata = t.wikidata, this.threadable = t.threadable ?? false, this.associative = t.associative ?? false, this.commutative = t.commutative ?? false, this.commutativeOrder = t.commutativeOrder, this.idempotent = r, this.involution = o, this.commutativeOrder && !this.commutative) throw new Error(`Function Definition "${i}": the 'commutativeOrder' handler requires the 'commutative' flag`);
      if (t.canonical && (t.associative || t.commutative || t.idempotent || t.involution)) throw new Error(`Function Definition "${i}": the 'canonical' handler is incompatible with the 'associative', 'commutative', 'idempotent', and 'involution' flags`);
      this.pure = t.pure ?? true, this.complexity = t.complexity ?? jn;
      let s, a = true;
      t.signature ? (a = false, s = B(t.signature)) : s = B("...any -> any");
      let u;
      t.type && (typeof t.type == "string" ? B(t.type) : u = t.type);
      let l;
      if (t.evaluate && typeof t.evaluate != "function") {
        let f = n.box(t.evaluate, { canonical: false });
        if (!f.isValid) throw Error(`Invalid function ${f.toString()}`);
        let c = Ve(f);
        l = (d) => c(d), Object.defineProperty(l, "toString", { value: () => f.toString() });
      } else l = t.evaluate;
      this.inferredSignature = a, this.signature = s, this.type = u, this.evaluate = l, this.canonical = t.canonical, this.evalDimension = t.evalDimension, this.sgn = t.sgn, this.even = t.even, this.compile = t.compile, this.eq = t.eq, this.neq = t.neq, this.collection = t.collection;
    }
    reset() {
    }
  };
  function fo(e12, n, i) {
    return i instanceof Ge ? i : new Ge(e12, n, i);
  }
  function ea(e12) {
    if (e12 === "all") return ea(["core", "control-structures", "logic", "collections", "relop", "numeric", "arithmetic", "trigonometry", "algebra", "calculus", "polynomials", "combinatorics", "linear-algebra", "statistics", "dimensions", "units", "physics", "other"]);
    typeof e12 == "string" && (e12 = [e12]);
    let n = [];
    for (let i of e12) {
      let t = sm[i];
      if (!t) throw Error(`Unknown library category ${i}`);
      Array.isArray(t) ? n.push(...t) : n.push(t);
    }
    return Object.freeze(n);
  }
  var sm = { algebra: [], arithmetic: [...Wu, ...ff], calculus: af, collections: [_f, $u], combinatorics: [], "control-structures": uf, core: df, dimensions: [], domains: [], "linear-algebra": pf, logic: mf, numeric: [], other: [], relop: Tf, polynomials: vf, physics: { Mu0: { description: "Vaccum permeability", constant: true, wikidata: "Q1515261", type: "real", value: 125663706212e-17 } }, statistics: kf, trigonometry: Df, units: [] };
  function am(e12) {
    if (e12 = e12.normalize(), xe(e12)) return e12;
    throw new Error(`Invalid definition name "${e12}": ${Xe(e12)}`);
  }
  function na(e12, n) {
    var t;
    if (!e12.context) throw Error("No context available");
    (t = e12.context).ids ?? (t.ids = /* @__PURE__ */ new Map());
    let i = e12.context.ids;
    e12.strict;
    for (let [r, o] of Object.entries(n)) try {
      if (r = am(r), vt(o)) try {
        let s = fo(e12, r, o);
        if (i.has(r)) throw new Error(`Duplicate function definition:
${JSON.stringify(i.get(r))}
${JSON.stringify(o)}`);
        i.set(r, s);
      } catch (s) {
        console.error([`
Error in function definition`, "", JSON.stringify(o), "", s.message].join(`
|   `) + `
`);
      }
      else if (Nt(o)) try {
        let s = new fe(e12, r, o);
        if (e12.strict && o.wikidata) {
          for (let [a, u] of i) if (u.wikidata === o.wikidata) throw new Error(`Duplicate entries with wikidata "${o.wikidata}": "${r}" and "${u.name}"`);
        }
        if (i.has(r)) throw new Error("The symbol is already defined");
        i.set(r, s);
      } catch (s) {
        console.error([`
Error in symbol definition of "${r}"`, "", JSON.stringify(o), "", s.message].join(`
|   `));
      }
      else {
        let s = new fe(e12, r, { value: e12.box(o) });
        i.set(r, s);
      }
    } catch (s) {
      console.error([`
Error in definition of "${r}"`, "", JSON.stringify(o), "", s.message].join(`
|   `) + `
`);
    }
  }
  function co(e12) {
    return typeof e12 == "number" ? e12 === 0 ? 1 : Number.isInteger(e12) ? Math.floor(Math.log2(Math.abs(e12)) / Math.log2(10)) + (e12 > 0 ? 1 : 2) : 2 : e12.isZero ? 1 : e12.im !== 0 ? co(e12.re) + co(e12.im) + 1 : co(e12.re);
  }
  function ia(e12) {
    if (e12.symbol) return 1;
    if (e12.isNumberLiteral) return co(e12.numericValue);
    let n = e12.operator, i = 2;
    if (["Add"].includes(n)) i = 3;
    else if (["Subtract", "Negate"].includes(n)) i = 4;
    else if (["Square", "Sqrt"].includes(n)) i = 5;
    else {
      if (["Power", "Root"].includes(n)) return ia(e12.ops[1]);
      ["Multiply"].includes(n) ? i = 7 : ["Divide"].includes(n) ? i = 8 : ["Ln", "Exp", "Log", "Lb"].includes(n) ? i = 9 : ["Cos", "Sin", "Tan"].includes(n) ? i = 10 : i = 11;
    }
    return i + (e12.ops?.reduce((t, r) => t + ia(r), 0) ?? 0);
  }
  var ta = ia;
  var bi = class e10 extends Q {
    constructor(i, t, r) {
      super(i, r?.metadata);
      this._isStructural = false;
      xe(t), `${t}${Xe(t)}`, this._id = t, this._def = r?.def ?? void 0, r?.structural && (this._isStructural = true), (r?.canonical ?? true) !== true ? this._scope = null : this._def ? this._scope = i.context : this.bind();
    }
    get json() {
      return this._id;
    }
    get hash() {
      return this._hash === void 0 && (this._hash = mn(this._id)), this._hash;
    }
    get isPure() {
      return true;
    }
    get isStructural() {
      return this._isStructural;
    }
    get structural() {
      return this.isStructural ? this : new e10(this.engine, this._id, { structural: true, def: this._def ?? void 0 });
    }
    get scope() {
      return this._scope;
    }
    get isConstant() {
      let i = this._def ?? this.engine.lookupSymbol(this._id, this.wikidata);
      return !(i instanceof fe) || i.constant;
    }
    _lookupDef() {
      let i = this.engine;
      return i.lookupSymbol(this._id) ?? i.lookupFunction(this._id);
    }
    _getDef() {
      let i = this.symbolDefinition;
      if (!i) return;
      let t = "value" in i ? i.value : void 0;
      return t && t !== this && (i = t.baseDefinition ?? i), i;
    }
    bind() {
      this._scope = this.engine.context;
      let i = this._lookupDef();
      if (i) {
        this._def = i;
        return;
      }
      this._def = this.engine.defineSymbol(this._id, { type: "unknown", inferred: true }), this._id = this._def.name;
    }
    reset() {
      this._def?.reset(), this._def = void 0;
    }
    get isCanonical() {
      return this._scope !== null;
    }
    set isCanonical(i) {
      this._scope = i ? this.engine.context : null, this._def = void 0;
    }
    is(i) {
      return typeof i == "number" ? this.symbolDefinition?.value?.is(i) ?? false : false;
    }
    get canonical() {
      return this._scope ? this : this.engine.box(this._id);
    }
    toNumericValue() {
      this.isCanonical;
      let i = this.engine;
      return this.symbol === "ImaginaryUnit" ? [i._numericValue({ re: 0, im: 1 }), i.One] : this.symbol === "PositiveInfinity" || this.isInfinity && this.isPositive ? [i._numericValue(1 / 0), i.One] : this.symbol === "NegativeInfinity" || this.isInfinity && this.isNegative ? [i._numericValue(-1 / 0), i.One] : this.symbol === "NaN" ? [i._numericValue(NaN), i.One] : [i._numericValue(1), this];
    }
    neg() {
      return fi(this);
    }
    inv() {
      return this.engine._fn("Divide", [this.engine.One, this]);
    }
    abs() {
      return this.isNonNegative ? this : this.isNonPositive ? this.neg() : this.engine._fn("Abs", [this]);
    }
    add(i) {
      return i === 0 ? this : Z(this.canonical, this.engine.box(i));
    }
    mul(i) {
      if (i === 1) return this;
      if (i === -1) return this.neg();
      if (i === 0) return this.engine.Zero;
      if (i instanceof V) {
        if (i.isOne) return this;
        if (i.isNegativeOne) return this.neg();
        if (i.isZero) return this.engine.Zero;
      }
      return ue(this.canonical, this.engine.box(i));
    }
    div(i) {
      return qi(this, i);
    }
    pow(i) {
      return pe(this, i, { numericApproximation: false });
    }
    root(i) {
      if (!this.isCanonical) return this.canonical.root(i);
      typeof i != "number" && (i = i.canonical);
      let t = typeof i == "number" ? i : i.im === 0 ? i.re : void 0, r = this.engine;
      return this.symbol === "ComplexInfinity" || t === 0 ? r.NaN : t === 1 ? this : t === 2 ? this.sqrt() : t === -1 ? this.inv() : r._fn("Root", [this, r.box(i)]);
    }
    sqrt() {
      let i = this.engine;
      return this.symbol === "ComplexInfinity" ? i.NaN : this.is(0) ? this : this.is(1) ? this.engine.One : this.is(-1) ? i.I : i._fn("Sqrt", [this]);
    }
    ln(i) {
      let t = i ? this.engine.box(i) : void 0;
      return this.isCanonical ? this.is(0) ? this.engine.NegativeInfinity : (!t || t.symbol === "ExponentialE") && this.symbol === "ExponentialE" ? this.engine.One : t ? t.re === 10 ? this.engine._fn("Log", [this]) : this.engine._fn("Log", [this, t]) : this.engine._fn("Ln", [this]) : this.canonical.ln(t);
    }
    solve(i) {
      let t = Et(i);
      return t.length !== 1 ? null : t.includes(this.symbol) ? [this.engine.Zero] : null;
    }
    get complexity() {
      return 7;
    }
    get operator() {
      return "Symbol";
    }
    get symbol() {
      return this._id;
    }
    get baseDefinition() {
      return this._def === void 0 && this.bind(), this._def ?? void 0;
    }
    get symbolDefinition() {
      return this._def === void 0 && this.bind(), this._def instanceof fe ? this._def : void 0;
    }
    get functionDefinition() {
      return this._def === void 0 && this.bind(), this._def instanceof Ge ? this._def : void 0;
    }
    infer(i) {
      let t = this._lookupDef();
      if (!t) {
        let r = this.engine.swapScope(this._scope ?? this.engine.context);
        return this._def = this.engine.defineSymbol(this._id, { type: i, inferred: true }), this.engine.swapScope(r), true;
      }
      return t instanceof fe && (t.inferredType || t.type === "unknown") ? (t.type = gr(t.type, i), true) : false;
    }
    get value() {
      return this.symbolDefinition?.value?.value;
    }
    set value(i) {
      let t = this.engine;
      t.forget(this._id);
      let r;
      if (typeof i == "boolean" && (i = i ? t.True : t.False), typeof i == "string" && (i = t.string(i)), typeof i == "object") if ("re" in i && "im" in i) i = t.complex(i.re ?? 0, i.im);
      else if ("num" in i && "denom" in i) i = t.number([i.num, i.denom]);
      else if (Array.isArray(i)) i = t._fn("List", i.map((s) => t.box(s)));
      else throw new Error(`Invalid value for symbol ${this._id}: ${i}`);
      if (i !== void 0 && (r = t.box(i).evaluate()), r?.type && g(r.type, "function")) {
        this.engine.lookupSymbol(this._id), this._def = t.defineFunction(this._id, { signature: r.type.toString(), evaluate: r });
        return;
      }
      let o = this.engine.lookupSymbol(this._id);
      o && o instanceof fe ? o.value = r : this._def = t.defineSymbol(this._id, { value: r, type: r?.type.toString() });
    }
    get type() {
      let i = this._def;
      return i ? i instanceof fe ? i.type : i instanceof Ge ? i.signature : "unknown" : "unknown";
    }
    set type(i) {
      if (this._def) {
        if (this._id[0] === "_") throw new Error(`The type of the wildcard "${this._id}" cannot be changed`);
        i === "function" || ht(i) ? (this.engine.forget(this._id), this._def = this.engine.defineFunction(this._id, { signature: i.toString() })) : this._def instanceof fe ? this._def.type = typeof i == "string" ? B(i) : i : (this.engine.forget(this._id), this._def = this.engine.defineSymbol(this._id, { type: i.toString() }));
      }
    }
    get sgn() {
      let i = this._def;
      if (!(!i || !(i instanceof fe))) return i.sgn;
    }
    has(i) {
      return typeof i == "string" ? this._id === i : i.includes(this._id);
    }
    match(i, t) {
      return ot(this, i, t);
    }
    get isFunction() {
      return !!this.functionDefinition;
    }
    get isOdd() {
      return this.symbolDefinition?.odd;
    }
    get isEven() {
      return this.symbolDefinition?.even;
    }
    get isInfinity() {
      let i = this.sgn;
      return i === "negative-infinity" || i === "positive-infinity";
    }
    get isNaN() {
      return this.sgn === "nan";
    }
    get isPositive() {
      return st(this.sgn);
    }
    get isNonPositive() {
      return lt(this.sgn);
    }
    get isNegative() {
      return ut(this.sgn);
    }
    get isNonNegative() {
      return at(this.sgn);
    }
    get isNumber() {
      let i = this.type;
      if (i !== "unknown") return g(i, "number");
    }
    get isInteger() {
      let i = this.type;
      if (i !== "unknown") return g(i, "integer");
    }
    get isRational() {
      let i = this.type;
      if (i !== "unknown") return g(i, "rational");
    }
    get isReal() {
      let i = this.type;
      if (i !== "unknown") return g(i, "real");
    }
    get re() {
      return this.symbolDefinition?.value?.re ?? NaN;
    }
    get im() {
      return this.symbolDefinition?.value?.im ?? NaN;
    }
    get bignumRe() {
      return this.symbolDefinition?.value?.bignumRe;
    }
    get bignumIm() {
      return this.symbolDefinition?.value?.bignumIm;
    }
    simplify(i) {
      return Wn(this, i).at(-1)?.value ?? this;
    }
    evaluate(i) {
      let t = this.symbolDefinition;
      if (!t) return this;
      let r = t.holdUntil;
      if (i?.numericApproximation) {
        if (r === "never" || r === "evaluate" || r === "N") return t.value?.N() ?? this;
      } else if (r === "never" || r === "evaluate") return t.value?.evaluate(i) ?? this;
      return this;
    }
    N() {
      let i = this.symbolDefinition;
      return i && i.holdUntil === "never" ? this : i?.value?.N() ?? this;
    }
    replace(i, t) {
      return Dn(this, i, t).at(-1)?.value ?? null;
    }
    subs(i, t) {
      let r = t?.canonical ?? this.isCanonical;
      return i[this._id] === void 0 ? r ? this.canonical : this : this.engine.box(i[this._id], { canonical: r });
    }
    get isCollection() {
      return this._getDef()?.collection?.contains !== void 0;
    }
    contains(i) {
      return this._getDef()?.collection?.contains?.(this, i) ?? false;
    }
    get size() {
      return this._getDef()?.collection?.size?.(this) ?? 0;
    }
    each(i, t) {
      let r = this._getDef()?.collection?.iterator?.(this, i, t);
      return r || { next() {
        return { done: true, value: void 0 };
      } };
    }
    at(i) {
      return this._getDef()?.collection?.at?.(this, i);
    }
    get(i) {
      if (typeof i == "string") return this.baseDefinition?.collection?.at?.(this, i);
      if (i.string) return this.symbolDefinition?.collection?.at?.(this, i.string);
    }
    indexOf(i) {
      return this._getDef()?.collection?.indexOf?.(this, i) ?? -1;
    }
    subsetOf(i, t) {
      return this._getDef()?.collection?.subsetOf?.(this, i, t) ?? false;
    }
  };
  function Af(e12, n) {
    let i = e12.lookupSymbol(n);
    return i?.holdUntil === "never" && i.value ? i.value : new bi(e12, n, { canonical: true, def: i });
  }
  var Wt = "\x1B[0m";
  var Mf = "\x1B[33m";
  var Cf = "\x1B[36;1m";
  var oa = "\x1B[101;97m";
  var ra = { black: 0, red: 1, green: 2, yellow: 3, blue: 4, magenta: 5, cyan: 6, white: 7, grey: 8, gray: 8, "bright-red": 9, "bright-green": 10, "bright-yellow": 11, "bright-blue": 12, "bright-magenta": 13, "bright-cyan": 14, "bright-white": 15 };
  var um = { black: "#2E3436", red: "#ff0000", green: "#4E9A06", yellow: "#C4A000", blue: "#3465A4", magenta: "#75507B", cyan: "#06989A", white: "#D3D7CF", grey: "#555753", gray: "#555753", "bright-red": "#EF2929", "bright-green": "#8AE234", "bright-yellow": "#FCE94F", "bright-blue": "#729FCF", "bright-magenta": "#AD7FA8", "bright-cyan": "#34E2E2", "bright-white": "#EEEEEC" };
  function Pf(e12) {
    let n = um[e12];
    if (n === void 0) return [];
    let i = [], t = n.match(/#([\da-f]{2})([\da-f]{2})([\da-f]{2})/i);
    return t !== null ? i = t.slice(1).map((r) => parseInt(r, 16)) : (t = n.match(/#([\da-f])([\da-f])([\da-f])/i), i = t.slice(1).map((r) => 16 * parseInt(r, 16))), i;
  }
  function Of(e12, n) {
    if (n === "none") return [];
    if (e12 === "default") return [39];
    if (n === "basic") {
      let i = typeof e12 == "string" ? ra[e12] : e12;
      return i === void 0 ? [] : i < 8 ? [30 + i] : [90 + i - 8];
    }
    return typeof e12 == "number" && (e12 = Object.keys(ra)[e12]), [38, 2, ...Pf(e12)];
  }
  function Lf(e12, n) {
    if (n === "none") return [];
    if (e12 === "default") return [49];
    if (n === "basic") {
      let i = ra[e12];
      return i === void 0 ? [] : i < 8 ? [40 + i] : [100 + i - 8];
    }
    return [48, 2, ...Pf(e12)];
  }
  var Ff = [{ name: "To", latexTrigger: ["\\to"], kind: "infix", precedence: 270 }, { latexTrigger: ["\\rightarrow"], kind: "infix", precedence: 270, parse: "To" }];
  function lm(e12) {
    if (h(e12) !== "Multiply") return [[], []];
    let n = [], i = [];
    for (let t of v(e12)) if (h(t) === "Power") {
      let r = p(t, 1), o = p(t, 2);
      if (h(o) === "Negate") {
        let s = p(o, 1);
        r && s && i.push(["Power", r, s]);
      } else {
        let s = w(o) ?? NaN;
        s === -1 ? r && i.push(r) : s < 0 ? r && i.push(["Power", r, -s]) : n.push(t);
      }
    } else if (h(t) === "Rational" && J(t) === 2 || h(t) === "Divide") {
      let r = p(t, 1), o = p(t, 2);
      w(r) !== 1 && n.push(r), w(o) !== 1 && i.push(o);
    } else {
      let r = Oi(t);
      r !== null ? (r[0] !== 1 && n.push(r[0]), i.push(r[1])) : n.push(t);
    }
    return [n, i];
  }
  function fm(e12) {
    let n = e12.parseOptionalGroup(), i = e12.parseGroup() ?? e12.parseToken();
    return G(i) ? n !== null ? ["Root", Ci, C(n)] : ["Sqrt", Ci] : n !== null ? ["Root", i, n] : ["Sqrt", i];
  }
  function Jt(e12, n, i, t) {
    return i == null ? "\\sqrt{}" : (t = t ?? 2, n === "solidus" ? e12.wrapShort(i) + "^{1/" + e12.serialize(t) + "}" : n === "quotient" ? e12.wrapShort(i) + "^{\\frac{1}{" + e12.serialize(t) + "}}" : w(t) === 2 ? "\\sqrt{" + e12.serialize(i) + "}" : "\\sqrt[" + e12.serialize(t) + "]{" + e12.serialize(i) + "}");
  }
  function cm(e12, n) {
    e12.level -= 1;
    let i = h(n), t = "", r = p(n, 1);
    if (i === "Negate") t = "-" + e12.wrap(r, 276);
    else if (i === "Subtract") {
      t = e12.wrap(r, 275);
      let o = p(n, 2);
      if (o !== null) {
        let s = e12.wrap(o, 275);
        s[0] === "-" ? t += "+" + s.slice(1) : s[0] === "+" ? t += "-" + s.slice(1) : t = t + "-" + s;
      }
    } else if (i === "Add") {
      if (e12.options.prettify && J(n) === 2 && e12.options.invisiblePlus !== "+") {
        let [a, u] = [p(n, 1), p(n, 2)], [l, f] = [a, u], c = w(l), d = Oi(f);
        if ((c === null || d === null) && ([l, f] = [u, a], c = w(l), d = Oi(f)), c !== null && d !== null && isFinite(c) && Number.isInteger(c) && c >= 0 && c <= 1e3 && isFinite(d[0]) && isFinite(d[1]) && d[0] > 0 && d[0] <= 100 && d[1] <= 100) return t = it(e12.options.invisiblePlus, e12.serialize(l), e12.serialize(f)), e12.level += 1, t;
      }
      if (e12.options.prettify && J(n) === 2) {
        let [a, u] = Yt(r), [l, f] = Yt(p(n, 2));
        if (u < 0 && f > 0) return t = e12.wrap(l, 275) + "-" + e12.wrap(a, 275), e12.level += 1, t;
      }
      t = e12.serialize(r);
      let o = J(n) + 1, s = v(n);
      for (let a = 2; a < o; a++) if (r = s[a - 1], e12.options.prettify) {
        let [u, l] = Yt(r), f = e12.wrap(u, 275);
        l > 0 ? f.startsWith("+") || f.startsWith("-") ? t += f : t += "+" + f : f.startsWith("+") ? t += "-" + f.slice(1) : f.startsWith("-") ? t += "+" + f.slice(1) : t += "-" + f;
      } else {
        let u = e12.wrap(r, 275);
        u[0] === "-" || u[0] === "+" ? t += u : t += "+" + u;
      }
    }
    return e12.level += 1, t;
  }
  function jf(e12, n) {
    if (n === null) return "";
    e12.level -= 1;
    let i = "";
    if (e12.options.prettify === true) {
      let [u, l] = lm(n);
      l.length > 0 && (l.length === 1 && l[0] === 1 ? u.length === 0 ? i = "1" : u.length === 1 ? i = e12.serialize(u[0]) : i = jf(e12, ["Multiply", ...u]) : i = e12.serialize(["Divide", u.length === 1 ? u[0] : ["Multiply", ...u], l.length === 1 ? l[0] : ["Multiply", ...l]]));
    }
    if (i) return e12.level += 1, i;
    let t = false, r = null, o = J(n) + 1, s = v(n);
    e12.options.prettify === true && s.length === 2 && kn(s[1]) && !kn(s[0]) && (s = [s[1], s[0]]);
    let a = false;
    for (let u = 1; u < o; u++) {
      if (r = s[u - 1], r === null) continue;
      let l;
      if (kn(r)) {
        l = e12.serialize(r), l === "-1" && !i ? (i = "", t = !t) : (l[0] === "-" && (l = l.slice(1), t = !t), i ? i = it(e12.options.multiply, i, l) : i = l), a = true;
        continue;
      }
      if (h(r) === "Power") {
        let f = Oi(p(r, 2));
        if (f != null) {
          let [c, d] = f;
          if (c === 1 && d !== null) {
            i += Jt(e12, e12.rootStyle(r, e12.level), p(r, 1), d), a = false;
            continue;
          }
        }
      }
      if (h(r) === "Power" && !isNaN(w(p(r, 1)) ?? NaN)) {
        l = e12.serialize(r), i ? i = it(e12.options.multiply, i, l) : i = l, a = true;
        continue;
      }
      if (h(r) === "Negate" && (r = p(r, 1), t = !t), l = e12.wrap(r, 390), !i) i = l;
      else {
        let f = h(r);
        a && (f === "Divide" || f === "Rational") ? i = it(e12.options.multiply, i, l) : e12.options.invisibleMultiply ? i = it(e12.options.invisibleMultiply, i, l) : i = E([i, l]);
      }
      a = false;
    }
    return e12.level += 1, t ? "-" + i : i;
  }
  function dm(e12) {
    let n = e12.parseGroup(), i = null;
    if (n === null ? (n = e12.parseToken(), i = e12.parseToken()) : i = e12.parseGroup(), n = C(n), i = C(i), h(n) === "PartialDerivative" && (h(i) === "PartialDerivative" || h(i) === "Multiply" && h(p(i, 1)) === "PartialDerivative")) {
      let t = p(n, 3) ?? null, r = p(n, 1);
      r == null && (r = C(e12.parseExpression()));
      let o = [];
      if (h(i) === "Multiply") {
        for (let s of v(i)) if (h(s) === "PartialDerivative") {
          let a = p(s, 2);
          a && o.push(a);
        }
      } else {
        let s = p(i, 2);
        s && o.push(s);
      }
      return o.length > 1 && (o = ["List", ...o]), ["PartialDerivative", r, ...o, t === null ? 1 : t];
    }
    return ["Divide", n, i];
  }
  function Vf(e12, n) {
    if (n === null) return "";
    let i = C(p(n, 1)), t = C(p(n, 2)), r = e12.options.prettify ? e12.fractionStyle(n, e12.level) : "quotient";
    if (r === "inline-solidus" || r === "nice-solidus") {
      let u = e12.wrapShort(i), l = e12.wrapShort(t);
      return r === "inline-solidus" ? `${u}/${l}` : `{}^{${u}}\\!\\!/\\!{}_{${l}}`;
    } else {
      if (r === "reciprocal") return w(i) === 1 ? e12.wrap(t) + "^{-1}" : e12.wrap(i) + e12.wrap(t) + "^{-1}";
      if (r === "factor") return w(t) === 1 ? e12.wrap(i) : "\\frac{1}{" + e12.serialize(t) + "}" + e12.wrapString(e12.serialize(i), e12.groupStyle(n, 1));
    }
    let o = "\\frac";
    r === "block-quotient" ? o = "\\dfrac" : r === "inline-quotient" && (o = "\\tfrac");
    let s = e12.serialize(i), a = e12.serialize(t);
    return `${o}{${s}}{${a}}`;
  }
  function sa(e12, n) {
    if (!n) return "";
    let i = h(n), t = C(p(n, 1));
    if (i === "Sqrt") return Jt(e12, e12.rootStyle(n, e12.level - 1), t, 2);
    let r = C(p(n, 2));
    if (i === "Root") return Jt(e12, e12.rootStyle(n, e12.level - 1), t, r);
    if (e12.options.prettify) {
      let o = w(r) ?? 1;
      if (o === -1) return e12.serialize(["Divide", "1", t]);
      if (o < 0) return e12.serialize(["Divide", "1", ["Power", t, -o]]);
      if (h(r) === "Divide" || h(r) === "Rational") {
        if (w(p(r, 1)) === 1) {
          let s = e12.rootStyle(n, e12.level);
          return Jt(e12, s, t, p(r, 2));
        }
        if (w(p(r, 2)) === 2) return `${e12.serialize(["Sqrt", t])}^{${e12.serialize(p(r, 1))}}`;
      } else if (h(r) === "Power" && w(p(r, 2)) === -1) {
        let s = e12.rootStyle(n, e12.level);
        return Jt(e12, s, t, p(r, 1));
      }
    }
    if (h(t) === "Power") {
      let o = p(t, 1), s = p(t, 2);
      return `
      ${e12.wrapShort(o)}^{${_i("^", e12.wrapShort(s), e12.serialize(r))}}`;
    }
    return _i("^", e12.wrapShort(t), e12.serialize(r));
  }
  var Zf = [{ name: "CatalanConstant", identifierTrigger: "G" }, { name: "GoldenRatio", latexTrigger: "\\varphi" }, { name: "EulerGamma", latexTrigger: "\\gamma" }, { name: "Degrees", latexTrigger: ["\\degree"], kind: "postfix", precedence: 880, parse: (e12, n) => ["Degrees", n], serialize: (e12, n) => E([e12.serialize(p(n, 1)), "\\degree"]) }, { latexTrigger: ["\\degree"], kind: "postfix", precedence: 880, parse: (e12, n) => ["Degrees", n] }, { latexTrigger: ["^", "<{>", "\\circ", "<}>"], kind: "postfix", parse: (e12, n) => ["Degrees", n] }, { latexTrigger: ["^", "\\circ"], kind: "postfix", parse: (e12, n) => ["Degrees", n] }, { latexTrigger: ["\xB0"], kind: "postfix", precedence: 880, parse: (e12, n) => ["Degrees", n] }, { latexTrigger: ["\\ang"], parse: (e12) => {
    let n = e12.parseGroup();
    return n === null ? ["Degrees"] : ["Degrees", n];
  } }, { latexTrigger: ["\\infty"], parse: "PositiveInfinity" }, { name: "PositiveInfinity", serialize: (e12) => e12.options.positiveInfinity }, { name: "NegativeInfinity", serialize: (e12) => e12.options.negativeInfinity }, { name: "ComplexInfinity", latexTrigger: ["\\tilde", "\\infty"], serialize: "\\tilde\\infty" }, { latexTrigger: ["\\tilde", "<{>", "\\infty", "<}>"], parse: "ComplexInfinity" }, { name: "Pi", kind: "symbol", latexTrigger: ["\\pi"] }, { latexTrigger: ["\u03C0"], parse: "Pi" }, { name: "ExponentialE", latexTrigger: ["\\exponentialE"], parse: "ExponentialE", serialize: "\\exponentialE" }, { latexTrigger: "\\operatorname{e}", parse: "ExponentialE" }, { latexTrigger: "\\mathrm{e}", parse: "ExponentialE" }, { kind: "function", identifierTrigger: "exp", parse: "Exp" }, { latexTrigger: "\\exp", parse: "Exp" }, { name: "ImaginaryUnit", latexTrigger: ["\\imaginaryI"] }, { latexTrigger: "\\operatorname{i}", parse: "ImaginaryUnit" }, { latexTrigger: "\\mathrm{i}", parse: "ImaginaryUnit" }, { name: "Abs", kind: "matchfix", openTrigger: "|", closeTrigger: "|", parse: (e12, n) => G(n) ? null : ["Abs", n] }, { kind: "matchfix", openTrigger: ["\\vert"], closeTrigger: ["\\vert"], parse: (e12, n) => G(n) ? null : ["Abs", n] }, { identifierTrigger: "abs", kind: "function", parse: "Abs" }, { name: "Add", latexTrigger: ["+"], kind: "infix", associativity: "any", precedence: 275, parse: (e12, n, i) => {
    let t = e12.parseExpression({ ...i, minPrec: 275 });
    return t === null ? null : Li("Add", n, t);
  }, serialize: cm }, { kind: "prefix", latexTrigger: ["+"], precedence: 275, parse: (e12, n) => e12.parseExpression({ ...n, minPrec: 400 }) }, { name: "Ceil", kind: "matchfix", openTrigger: "\\lceil", closeTrigger: "\\rceil", parse: (e12, n) => G(n) ? null : ["Ceil", n] }, { kind: "matchfix", openTrigger: ["\u2308"], closeTrigger: ["\u2309"], parse: (e12, n) => G(n) ? null : ["Ceil", n] }, { identifierTrigger: "ceil", kind: "function", parse: "Ceil" }, { name: "Chop", identifierTrigger: "chop", kind: "function", parse: "Chop" }, { name: "Complex", precedence: 274, serialize: (e12, n) => {
    let i = e12.serialize(p(n, 1)), t = w(p(n, 2));
    if (t === 0) return i;
    let r = t === 1 ? "\\imaginaryI" : t === -1 ? "-\\imaginaryI" : E([e12.serialize(p(n, 2)), "\\imaginaryI"]);
    return w(p(n, 1)) === 0 ? r : t !== null && t < 0 ? E([i, r]) : E([i, "+", r]);
  } }, { name: "Divide", latexTrigger: "\\frac", precedence: 600, parse: dm, serialize: Vf }, { kind: "infix", latexTrigger: "\\over", associativity: "none", precedence: 600, parse: "Divide" }, { latexTrigger: ["\\/"], kind: "infix", associativity: "left", precedence: 600, parse: "Divide" }, { latexTrigger: ["/"], kind: "infix", associativity: "left", precedence: 600, parse: "Divide" }, { latexTrigger: ["\\div"], kind: "infix", associativity: "left", precedence: 600, parse: "Divide" }, { name: "Exp", serialize: (e12, n) => {
    let i = p(n, 1);
    return D(i) || w(i) !== null ? E(["\\exponentialE^{", e12.serialize(i), "}"]) : E(["\\exp", e12.wrap(C(i))]);
  } }, { name: "Factorial", latexTrigger: ["!"], kind: "postfix", precedence: 810 }, { name: "Factorial2", latexTrigger: ["!", "!"], kind: "postfix", precedence: 810 }, { name: "Floor", kind: "matchfix", openTrigger: "\\lfloor", closeTrigger: "\\rfloor", parse: (e12, n) => G(n) ? null : ["Floor", n] }, { kind: "matchfix", openTrigger: ["\u230A"], closeTrigger: ["\u230B"], parse: (e12, n) => G(n) ? null : ["Floor", n] }, { identifierTrigger: "floor", kind: "function", parse: "Floor" }, { latexTrigger: ["\\Gamma"], parse: "Gamma" }, { name: "GCD", identifierTrigger: "gcd", kind: "function" }, { identifierTrigger: "GCD", kind: "function", parse: "GCD" }, { name: "Half", serialize: "\\frac12" }, { name: "Lg", latexTrigger: ["\\lg"], serialize: (e12, n) => "\\log_{10}" + e12.wrapArguments(n), parse: (e12) => {
    let n = e12.parseArguments("implicit");
    return n === null ? "Lg" : ["Log", ...n, 10];
  } }, { name: "Lb", latexTrigger: "\\lb", parse: (e12) => {
    let n = e12.parseArguments("implicit");
    return n === null ? "Log" : ["Log", n[0], 2];
  } }, { name: "Ln", latexTrigger: ["\\ln"], parse: (e12) => Uf("Ln", e12), serialize: (e12, n) => "\\ln" + e12.wrapArguments(n) }, { name: "Log", latexTrigger: ["\\log"], parse: (e12) => Uf("Log", e12), serialize: (e12, n) => {
    let [i, t] = v(n);
    return t ? E(["\\log_{", e12.serialize(t), "}", e12.wrap(i)]) : "\\log" + e12.wrapArguments(n);
  } }, { name: "LCM", identifierTrigger: "lcm", kind: "function" }, { identifierTrigger: "LCM", kind: "function", parse: "LCM" }, { identifierTrigger: "max", kind: "function", parse: "Max" }, { identifierTrigger: "min", kind: "function", parse: "Min" }, { name: "Max", latexTrigger: "\\max", kind: "function" }, { name: "Min", latexTrigger: "\\min", kind: "function" }, { name: "Supremum", latexTrigger: "\\sup", kind: "function" }, { name: "Infimum", latexTrigger: "\\inf", kind: "function" }, { name: "Limit", latexTrigger: "\\lim", kind: "expression", parse: (e12) => {
    if (!e12.match("_")) return null;
    let n = e12.parseGroup();
    if (h(n) !== "To") return null;
    let i = e12.parseArguments("implicit");
    return i ? ["Limit", ["Function", i[0], p(n, 1)], p(n, 2)] : null;
  }, serialize: (e12, n) => {
    let i = p(n, 1), t = p(i, 2), r = p(n, 2);
    return E(["\\lim_{", e12.serialize(t), "\\to", e12.serialize(r), "}", e12.serialize(p(i, 1))]);
  } }, { name: "MinusPlus", latexTrigger: ["\\mp"], kind: "infix", associativity: "any", precedence: 270 }, { name: "Multiply", latexTrigger: ["\\times"], kind: "infix", associativity: "any", precedence: 390, serialize: jf }, { latexTrigger: ["\\cdot"], kind: "infix", associativity: "any", precedence: 390, parse: (e12, n, i) => {
    let t = e12.parseExpression({ ...i, minPrec: 392 });
    return t === null ? ["Multiply", n, Ci] : Li("Multiply", n, t);
  } }, { latexTrigger: ["*"], kind: "infix", associativity: "any", precedence: 390, parse: (e12, n, i) => {
    let t = e12.parseExpression({ ...i, minPrec: 392 });
    return t === null ? ["Multiply", n, Ci] : Li("Multiply", n, t);
  } }, { name: "Mod", latexTrigger: "\\bmod", kind: "infix", precedence: 600, serialize: (e12, n) => {
    if (J(n) !== 2) return "";
    let i = e12.serialize(p(n, 1)), t = e12.serialize(p(n, 2));
    return E([i, "\\bmod", t]);
  } }, { latexTrigger: "\\mod", kind: "infix", precedence: 600, parse: "Mod" }, { latexTrigger: "\\pmod", kind: "prefix", precedence: 245, parse: (e12) => {
    let n = e12.parseGroup() ?? e12.parseToken();
    return ["Mod", C(n)];
  } }, { name: "Congruent", serialize: (e12, n) => {
    let i = e12.serialize(p(n, 1)), t = e12.serialize(p(n, 2));
    if (p(n, 3) === null) return E([i, "\\equiv", t]);
    let r = e12.serialize(p(n, 3));
    return E([i, "\\equiv", t, "\\pmod{", r, "}"]);
  } }, { name: "Negate", latexTrigger: ["-"], kind: "prefix", precedence: 701, parse: (e12, n) => {
    e12.skipSpace();
    let i = e12.parseExpression({ ...n, minPrec: 703 });
    return i === null ? null : ["Negate", i];
  } }, { kind: "matchfix", openTrigger: "||", closeTrigger: "||", parse: (e12, n) => G(n) ? null : ["Norm", n] }, { name: "Norm", kind: "matchfix", openTrigger: ["\\left", "\\Vert"], closeTrigger: ["\\right", "\\Vert"], parse: (e12, n) => G(n) ? null : ["Norm", n] }, { name: "PlusMinus", latexTrigger: ["\\pm"], kind: "infix", associativity: "any", precedence: 270, serialize: (e12, n) => {
    let i = p(n, 1);
    if (i === null) return "\\pm";
    if (J(n) === 1) return E(["\\pm", e12.serialize(i)]);
    let t = p(n, 2);
    return E([e12.serialize(i), "\\pm", e12.serialize(t)]);
  } }, { latexTrigger: ["\\pm"], kind: "prefix", precedence: 270, parse: (e12, n) => {
    let i = e12.parseExpression({ ...n, minPrec: 400 });
    return ["PlusMinus", C(i)];
  } }, { latexTrigger: ["\\plusmn"], kind: "infix", associativity: "any", precedence: 270, parse: (e12, n, i) => {
    let t = e12.parseExpression({ ...i, minPrec: 400 });
    return ["PlusMinus", n, C(t)];
  } }, { latexTrigger: ["\\plusmn"], kind: "prefix", precedence: 270, parse: (e12, n) => {
    let i = e12.parseExpression({ ...n, minPrec: 400 });
    return ["PlusMinus", C(i)];
  } }, { name: "Power", latexTrigger: ["^"], kind: "infix", serialize: sa }, { latexTrigger: "\\prod", precedence: 390, name: "Product", parse: zf("Product", 390), serialize: Gf("\\prod") }, { name: "Rational", precedence: 600, serialize: (e12, n) => n && J(n) === 1 ? "\\operatorname{Rational}" + e12.wrapArguments(n) : Vf(e12, n) }, { name: "Root", serialize: sa }, { name: "Round", identifierTrigger: "round", kind: "function" }, { name: "Square", precedence: 720, serialize: (e12, n) => e12.wrapShort(p(n, 1)) + "^2" }, { latexTrigger: ["\\sum"], precedence: 275, name: "Sum", parse: zf("Sum", 275), serialize: Gf("\\sum") }, { name: "Sign", identifierTrigger: "sgn", kind: "function" }, { name: "Sqrt", latexTrigger: ["\\sqrt"], parse: fm, serialize: sa }, { name: "Subtract", latexTrigger: ["-"], kind: "infix", associativity: "left", precedence: 277, parse: (e12, n, i) => {
    e12.index -= 1;
    let t = e12.parseExpression({ ...i, minPrec: 278 });
    return t === null ? null : ["Add", n, t];
  }, serialize: (e12, n) => {
    let i = e12.wrap(p(n, 1), 277), t = e12.wrap(p(n, 2), 278);
    return E([i, "-", t]);
  } }];
  function pm(e12, n) {
    if (e12 !== null) {
      if (D(e12)) return { index: D(e12) ?? "Nothing", upper: n };
      if (h(e12) === "GreaterEqual") {
        let i = D(p(e12, 1)) ?? "Nothing", t = p(e12, 2) ?? 1;
        return { index: i, lower: t, upper: n };
      }
      if (h(e12) === "Equal") {
        let i = D(p(e12, 1)) ?? "Nothing", t = p(e12, 2);
        if (h(t) === "Range") {
          let o = p(t, 1) ?? 1, s = p(t, 2) ?? void 0;
          return { index: i, lower: o, upper: s };
        }
        return { index: i, lower: t ?? 1, upper: n };
      }
    }
  }
  function mm(e12, n) {
    G(e12) && (e12 = null), G(n) && (n = null);
    let i = e12 === null ? [] : wn(e12) ?? [e12], t = n === null ? [] : wn(n) ?? [n];
    return i.map((r, o) => pm(r, t[o])).filter((r) => r !== void 0);
  }
  function zf(e12, n) {
    return (i) => {
      i.skipSpace();
      let t = null, r = null;
      for (; !(r && t) && (i.peek === "_" || i.peek === "^"); ) i.match("_") ? r = i.parseGroup() ?? i.parseToken() : i.match("^") && (t = i.parseGroup() ?? i.parseToken()), i.skipSpace();
      let o = mm(r, t);
      i.pushSymbolTable();
      for (let u of o) i.addSymbol(u.index, "symbol");
      let s = i.parseExpression({ minPrec: n + 1 });
      if (i.popSymbolTable(), s === null) return [e12];
      let a = [];
      for (let u of o) {
        let l = u.lower, f = u.upper, c = u.index ?? "Nothing";
        f != null ? a.push(["Tuple", c, l ?? 1, f]) : l != null ? a.push(["Tuple", c, l]) : a.push(["Tuple", c]);
      }
      return [e12, s, ...a];
    };
  }
  function Gf(e12) {
    return (n, i) => {
      if (!p(i, 1)) return e12;
      let t = p(i, 2), r = h(t);
      r !== "Tuple" && r !== "Triple" && r !== "Pair" && r !== "Single" && (t = null);
      let o = p(t, 1);
      o !== null && h(o) === "Hold" && (o = p(o, 1));
      let s = p(i, 1);
      if (t != null) return p(i, 2) !== null ? E([e12, n.serialize(s)]) : E([e12, "_{", n.serialize(p(i, 2)), "}", n.serialize(s)]);
      let a = p(t, 2), u = [];
      o && D(o) !== "Nothing" && a ? u = [n.serialize(o), "=", n.serialize(a)] : o && D(o) !== "Nothing" ? u = [n.serialize(o)] : a !== null && (u = [n.serialize(a)]), u.length > 0 && (u = ["_{", ...u, "}"]);
      let l = [];
      return p(t, 3) !== null && (l = ["^{", n.serialize(p(t, 3)), "}"]), E([e12, ...l, ...u, n.serialize(s)]);
    };
  }
  function Uf(e12, n) {
    let i = null;
    n.match("_") && (i = n.parseGroup() ?? n.parseToken());
    let t = n.parseArguments("implicit");
    return t === null && i === null ? [e12] : t === null ? [e12, i] : i === null ? [e12, ...t] : i === 10 ? ["Log", t[0]] : i === 2 ? ["Lb", ...t] : ["Log", t[0], i];
  }
  function Yt(e12) {
    let n = 1, i = e12;
    do {
      e12 = i;
      let t = h(e12);
      if (t === "Negate") n *= -1, i = p(e12, 1);
      else if (t === "Multiply") {
        let [r, o] = Yt(p(e12, 1));
        o < 0 && (n *= -1, r === 1 ? i = ["Multiply", ...v(e12).slice(1)] : i = ["Multiply", r, ...v(e12).slice(1)]);
      } else if (t === "Divide" || t === "Rational") {
        let [r, o] = Yt(p(e12, 1));
        o < 0 && (n *= -1, i = [t, r, p(e12, 2)]);
      } else {
        let r = w(e12);
        r !== null && r < 0 && (n *= -1, i = -r);
      }
    } while (i !== e12);
    return [e12, n];
  }
  var Wf = [{ name: "Matrix", serialize: (e12, n) => {
    let i = v(p(n, 1));
    return Hf(e12, i, q(p(n, 2)), q(p(n, 3)));
  } }, { name: "Vector", serialize: (e12, n) => {
    let i = v(n);
    return Hf(e12, i.map((t) => ["List", t]), q(p(n, 2)), q(p(n, 3)));
  } }, { kind: "environment", identifierTrigger: "pmatrix", parse: (e12) => {
    let n = Cn(e12), [i, t] = Mn(e12);
    return n ? [i, t, { str: "()" }, { str: n }] : [i, t];
  } }, { kind: "environment", identifierTrigger: "bmatrix", parse: (e12) => {
    let n = Cn(e12), [i, t] = Mn(e12);
    return n ? [i, t, { str: "[]" }, { str: n }] : [i, t, { str: "[]" }];
  } }, { kind: "environment", identifierTrigger: "Bmatrix", parse: (e12) => {
    let n = Cn(e12), [i, t] = Mn(e12);
    return n ? [i, t, { str: "{}" }, { str: n }] : [i, t, { str: "{}" }];
  } }, { kind: "environment", identifierTrigger: "vmatrix", parse: (e12) => {
    let n = Cn(e12), [i, t] = Mn(e12);
    return n ? [i, t, { str: "||" }, { str: n }] : [i, t, { str: "||" }];
  } }, { kind: "environment", identifierTrigger: "Vmatrix", parse: (e12) => {
    let n = Cn(e12), [i, t] = Mn(e12);
    return n ? [i, t, { str: "\u2016\u2016" }, { str: n }] : [i, t, { str: "\u2016\u2016" }];
  } }, { kind: "environment", identifierTrigger: "smallmatrix", parse: (e12) => {
    let n = Cn(e12), [i, t] = Mn(e12);
    return n ? [i, t, { str: "()" }, { str: n }] : [i, t];
  } }, { kind: "environment", identifierTrigger: "array", parse: (e12) => {
    let n = Cn(e12, false), [i, t] = Mn(e12);
    return n ? [i, t, { str: ".." }, { str: n }] : [i, t, { str: ".." }];
  } }, { kind: "environment", identifierTrigger: "matrix", parse: (e12) => {
    let n = Cn(e12), [i, t] = Mn(e12);
    return n ? [i, t, { str: ".." }, { str: n }] : [i, t, { str: ".." }];
  } }, { kind: "environment", identifierTrigger: "matrix*", parse: (e12) => {
    let n = Cn(e12), [i, t] = Mn(e12);
    return n ? [i, t, { str: ".." }, { str: n }] : [i, t, { str: ".." }];
  } }, { name: "ConjugateTranspose", kind: "postfix", latexTrigger: ["^", "\\star"] }, { kind: "postfix", latexTrigger: ["^", "\\H"], parse: "ConjugateTranspose" }, { kind: "postfix", latexTrigger: ["^", "\\dagger"], parse: (e12, n) => ["ConjugateTranspose", n] }, { kind: "postfix", latexTrigger: ["^", "\\ast"], parse: (e12, n) => ["ConjugateTranspose", n] }, { kind: "postfix", latexTrigger: ["^", "\\top"], parse: (e12, n) => ["Transpose", n] }, { kind: "postfix", latexTrigger: ["^", "\\intercal"], parse: (e12, n) => ["Transpose", n] }, { name: "Transpose", kind: "postfix", latexTrigger: ["^", "T"] }, { name: "PseudoInverse", kind: "postfix", latexTrigger: ["^", "+"] }, { name: "Trace", kind: "function", identifierTrigger: "tr" }, { name: "Determinant", kind: "function", identifierTrigger: "det" }];
  function Mn(e12) {
    let n = e12.parseTabular();
    return n ? ["Matrix", ["List", ...n.map((i) => ["List", ...i])]] : ["", null];
  }
  function Cn(e12, n = true) {
    let i = e12.parseStringGroup(n)?.trim();
    if (!i) return "";
    let t = "";
    for (let r of i) r === "c" && (t += "="), r === "l" && (t += "<"), r === "r" && (t += ">"), r === "|" && (t += "|"), r === ":" && (t += ":");
    return t;
  }
  function Hf(e12, n, i, t) {
    i ?? (i = "()");
    let [r, o] = ["", ""];
    typeof i == "string" && i.length === 2 && ([r, o] = i);
    let s = "";
    if (t) for (let f of t) f === "<" ? s += "l" : f === ">" ? s += "r" : f === "=" ? s += "c" : f === "|" ? s += "|" : f === ":" && (s += ":");
    let a = [];
    for (let f of n ?? []) {
      let c = [];
      for (let d of v(f)) c.push(e12.serialize(d));
      a.push(c.join(" & "));
    }
    let u = a.join(`\\\\
`), l = s.length > 0 ? `[${s}]` : "";
    return r === "(" && o === ")" ? E(["\\begin{pmatrix}", l, u, "\\end{pmatrix}"]) : r === "[" && o === "]" ? E(["\\begin{bmatrix}", l, u, "\\end{bmatrix}"]) : r === "{" && o === "}" ? E(["\\begin{Bmatrix}", l, u, "\\end{Bmatrix}"]) : r === "|" && o === "|" ? E(["\\begin{vmatrix}", l, u, "\\end{vmatrix}"]) : r === "\u2016" && o === "\u2016" ? E(["\\begin{Vmatrix}", l, u, "\\end{Vmatrix}"]) : r === "{" && o === "." ? E(["\\begin{dcases}", l, u, "\\end{dcases}"]) : r === "." && o === "}" ? E(["\\begin{rcases}", l, u, "\\end{rcases}"]) : s || r !== "." || o !== "." ? E(["\\left", rt[r] ?? r, "\\begin{array}", `{${s}}`, u, "\\end{array}", "\\right", rt[o] ?? o]) : E(["\\begin{matrix}", u, "\\end{matrix}"]);
  }
  var Jf = [{ name: "True", kind: "symbol", latexTrigger: ["\\top"] }, { kind: "symbol", latexTrigger: "\\mathrm{True}", parse: "True" }, { kind: "symbol", latexTrigger: "\\operatorname{True}", parse: "True" }, { kind: "symbol", latexTrigger: "\\mathsf{T}", parse: "True" }, { name: "False", kind: "symbol", latexTrigger: ["\\bot"] }, { kind: "symbol", latexTrigger: "\\operatorname{False}", parse: "False" }, { kind: "symbol", latexTrigger: "\\mathsf{F}", parse: "False" }, { name: "And", kind: "infix", latexTrigger: ["\\land"], precedence: 317 }, { kind: "infix", latexTrigger: ["\\wedge"], parse: "And", precedence: 317 }, { kind: "infix", latexTrigger: "\\&", parse: "And", precedence: 317 }, { kind: "infix", latexTrigger: "\\operatorname{and}", parse: "And", precedence: 317 }, { name: "Or", kind: "infix", latexTrigger: ["\\lor"], precedence: 310 }, { kind: "infix", latexTrigger: ["\\vee"], parse: "Or", precedence: 310 }, { kind: "infix", latexTrigger: "\\parallel", parse: "Or", precedence: 310 }, { kind: "infix", latexTrigger: "\\operatorname{or}", parse: "Or", precedence: 310 }, { name: "Xor", kind: "infix", latexTrigger: ["\\veebar"], precedence: 315 }, { name: "Not", kind: "prefix", latexTrigger: ["\\lnot"], precedence: 880 }, { kind: "prefix", latexTrigger: ["\\neg"], parse: "Not", precedence: 880 }, { name: "Nand", kind: "infix", latexTrigger: ["\\barwedge"], precedence: 315 }, { name: "Nor", kind: "infix", latexTrigger: ["\u22BD"], precedence: 315 }, { kind: "function", identifierTrigger: "and", parse: "And" }, { kind: "function", identifierTrigger: "or", parse: "Or" }, { kind: "function", identifierTrigger: "not", parse: "Not" }, { name: "Implies", kind: "infix", precedence: 220, associativity: "right", latexTrigger: ["\\implies"], serialize: "\\implies" }, { latexTrigger: ["\\Rightarrow"], kind: "infix", precedence: 220, associativity: "right", parse: "Implies" }, { name: "Equivalent", latexTrigger: ["\\iff"], kind: "infix", associativity: "right", precedence: 219 }, { latexTrigger: ["\\Leftrightarrow"], kind: "infix", associativity: "right", precedence: 219, parse: "Equivalent" }, { latexTrigger: ["\\equiv"], kind: "infix", associativity: "right", precedence: 219, parse: (e12, n, i) => {
    let t = e12.parseExpression({ ...i, minPrec: 219 }), r = e12.index, o = e12.parseExpression({ ...i, minPrec: 219 });
    return o !== null && h(o) === "Mod" ? ["Congruent", n, t, C(p(o, 1))] : (e12.index = r, ["Equivalent", n, C(t)]);
  } }, { name: "Proves", kind: "infix", latexTrigger: ["\\vdash"], precedence: 220, associativity: "right", serialize: "\\vdash" }, { name: "Entails", kind: "infix", latexTrigger: ["\\vDash"], precedence: 220, associativity: "right", serialize: "\\vDash" }, { name: "Satisfies", kind: "infix", latexTrigger: ["\\models"], precedence: 220, associativity: "right", serialize: "\\models" }, { name: "ForAll", kind: "prefix", latexTrigger: ["\\forall"], precedence: 200, serialize: "\\forall", parse: Qt("ForAll") }, { name: "Exists", kind: "prefix", latexTrigger: ["\\exists"], precedence: 200, serialize: "\\exists", parse: Qt("Exists") }, { name: "ExistsUnique", kind: "prefix", latexTrigger: ["\\exists", "!"], precedence: 200, serialize: "\\exists!", parse: Qt("ExistsUnique") }, { name: "NotForAll", kind: "prefix", latexTrigger: ["\\lnot", "\\forall"], precedence: 200, serialize: "\\lnot\\forall", parse: Qt("NotForAll") }, { name: "NotExists", kind: "prefix", latexTrigger: ["\\lnot", "\\exists"], precedence: 200, serialize: "\\lnot\\exists", parse: Qt("NotExists") }, { name: "KroneckerDelta", kind: "prefix", latexTrigger: ["\\delta", "_"], precedence: 200, serialize: (e12, n) => {
    let i = v(n);
    return i.length === 0 ? "\\delta" : i.every((t) => D(t)) ? `\\delta_{${i.map((t) => e12.serialize(t)).join("")}}` : `\\delta_{${i.map((t) => e12.serialize(t)).join(", ")}}`;
  }, parse: (e12) => {
    let n = e12.parseGroup();
    if (n === null) {
      let t = e12.parseToken();
      return t ? ["KroneckerDelta", t] : null;
    }
    let i = wn(n);
    return i && i.length <= 2 ? ["KroneckerDelta", ...i] : h(n) === "InvisibleOperator" ? ["KroneckerDelta", ...v(n)] : n !== null ? ["KroneckerDelta", n] : null;
  } }, { name: "Boole", kind: "matchfix", openTrigger: "[", closeTrigger: "]", parse: (e12, n) => {
    let i = h(n);
    return !i || !Kn.some((t) => t.name === i) ? null : ["Boole", n];
  } }, { kind: "matchfix", openTrigger: "\\llbracket", closeTrigger: "\\rrbracket", parse: (e12, n) => {
    let i = h(n);
    return !i || !Kn.some((t) => t.name === i) ? null : ["Boole", n];
  } }];
  function Qt(e12) {
    return (n, i) => {
      let t = n.index, r = n.parseSymbol(i);
      if (r) {
        if (n.skipSpace(), n.match(",") || n.match("\\mid") || n.match(".") || n.match(":") || n.match("\\colon")) {
          let a = n.parseExpression(i);
          return [e12, r, C(a)];
        }
        let s = n.parseEnclosure();
        if (s) return [e12, r, C(s)];
      }
      n.index = t;
      let o = n.parseExpression(i);
      if (o === null) return null;
      if (n.skipSpace(), n.matchAny([",", "\\mid", ":", "\\colon"])) {
        let s = n.parseExpression(i);
        return [e12, o, C(s)];
      }
      if (n.match("(")) {
        let s = n.parseExpression(i);
        return n.match(")") ? [e12, o, C(s)] : null;
      }
      return null;
    };
  }
  function Pe(e12) {
    return (n) => {
      let i = n.parseGroup();
      return i === null ? [e12] : [e12, i];
    };
  }
  var Yf = [{ name: "Overscript", latexTrigger: ["\\overset"], kind: "infix", precedence: 700 }, { name: "Underscript", latexTrigger: ["\\underset"], kind: "infix", precedence: 700 }, { name: "Increment", latexTrigger: ["+", "+"], kind: "postfix", precedence: 880, parse: (e12, n) => D(n) === null ? null : ["Decrement", n] }, { name: "Decrement", latexTrigger: ["-", "-"], kind: "postfix", precedence: 880, parse: (e12, n) => D(n) === null ? null : ["Decrement", n] }, { name: "PreIncrement", latexTrigger: ["+", "+"], kind: "prefix", precedence: 880, parse: (e12, n) => {
    let i = e12.parseExpression(n);
    return D(i) === null ? null : ["PreIncrement", i];
  } }, { name: "PreDecrement", latexTrigger: ["-", "-"], kind: "prefix", precedence: 880, parse: (e12, n) => {
    let i = e12.parseExpression(n);
    return D(i) === null ? null : ["PreDecrement", i];
  } }, { name: "Ring", latexTrigger: ["\\circ"], kind: "infix", precedence: 265 }, { name: "StringJoin", latexTrigger: ["\\lt", "\\gt"], kind: "infix", precedence: 780 }, { name: "Starstar", latexTrigger: ["\\star", "\\star"], kind: "infix", precedence: 780 }, { name: "PartialDerivative", latexTrigger: ["\\partial"], kind: "prefix", parse: (e12) => {
    let n = false, i = "Nothing", t = "Nothing";
    for (; !n; ) e12.skipSpace(), e12.match("_") ? t = e12.parseGroup() ?? e12.parseToken() : e12.match("^") ? i = e12.parseGroup() ?? e12.parseToken() : n = true;
    let r = wn(t);
    if (r && (t = ["List", ...r]), t === null || i === null) return null;
    let o = e12.parseGroup() ?? "Nothing";
    if (!G(o)) {
      let s = e12.parseArguments() ?? ["Nothing"];
      o = [o, ...s];
    }
    return ["PartialDerivative", o, t, i];
  }, serialize: (e12, n) => {
    let i = "\\partial", t = p(n, 1), r = p(n, 2), o = p(n, 3);
    return r !== null && r !== "Nothing" && (h(r) === "List" ? i += "_{" + e12.serialize(["Sequence", ...v(r)]) + "}" : i += "_{" + e12.serialize(r) + "}"), o !== null && o !== "Nothing" && (i += "^{" + e12.serialize(o) + "}"), t !== null && t !== "Nothing" && (i += e12.serialize(t)), i;
  }, precedence: 740 }, { name: "OverBar", latexTrigger: ["\\overline"], parse: Pe("OverBar") }, { name: "UnderBar", latexTrigger: ["\\underline"], parse: Pe("UnderBar") }, { name: "OverVector", latexTrigger: ["\\vec"], parse: Pe("OverVector") }, { name: "OverTilde", latexTrigger: ["\\tilde"], parse: Pe("OverTilde") }, { name: "OverHat", latexTrigger: ["\\hat"], parse: Pe("OverHat") }, { name: "OverRightArrow", latexTrigger: ["\\overrightarrow"], parse: Pe("OverRightArrow") }, { name: "OverLeftArrow", latexTrigger: ["\\overleftarrow"], parse: Pe("OverLeftArrow") }, { name: "OverRightDoubleArrow", latexTrigger: ["\\Overrightarrow"], parse: Pe("OverRightDoubleArrow") }, { name: "OverLeftHarpoon", latexTrigger: ["\\overleftharpoon"], parse: Pe("OverLeftHarpoon") }, { name: "OverRightHarpoon", latexTrigger: ["\\overrightharpoon"], parse: Pe("OverRightHarpoon") }, { name: "OverLeftRightArrow", latexTrigger: ["\\overleftrightarrow"], parse: Pe("OverLeftRightArrow") }, { name: "OverBrace", latexTrigger: ["\\overbrace"], parse: Pe("OverBrace") }, { name: "OverLineSegment", latexTrigger: ["\\overlinesegment"], parse: Pe("OverLineSegment") }, { name: "OverGroup", latexTrigger: ["\\overgroup"], parse: Pe("OverGroup") }, { latexTrigger: ["\\displaystyle"], parse: () => "Nothing" }, { latexTrigger: ["\\textstyle"], parse: () => "Nothing" }, { latexTrigger: ["\\scriptstyle"], parse: () => "Nothing" }, { latexTrigger: ["\\scriptscriptstyle"], parse: () => "Nothing" }, { latexTrigger: ["\\tiny"], parse: () => "Nothing" }, { latexTrigger: ["\\scriptsize"], parse: () => "Nothing" }, { latexTrigger: ["\\footnotesize"], parse: () => "Nothing" }, { latexTrigger: ["\\small"], parse: () => "Nothing" }, { latexTrigger: ["\\normalsize"], parse: () => "Nothing" }, { latexTrigger: ["\\large"], parse: () => "Nothing" }, { latexTrigger: ["\\Large"], parse: () => "Nothing" }, { latexTrigger: ["\\LARGE"], parse: () => "Nothing" }, { latexTrigger: ["\\huge"], parse: () => "Nothing" }, { latexTrigger: ["\\Huge"], parse: () => "Nothing" }, { name: "Style", serialize: (e12, n) => {
    let i = e12.serialize(p(n, 1)), t = Ho(p(n, 2));
    if (t === null) return i;
    q(t.display) === "block" ? i = E(["{\\displaystyle", i, "}"]) : q(t.display) === "inline" ? i = E(["{\\textstyle", i, "}"]) : q(t.display) === "script" ? i = E(["{\\scriptstyle", i, "}"]) : q(t.display) === "scriptscript" && (i = E(["{\\scriptscriptstyle", i, "}"]));
    let r = w(t.size);
    return r !== null && r >= 1 && r <= 10 && (i = E(["{", { 1: "\\tiny", 2: "\\scriptsize", 3: "\\footnotesize", 4: "\\small", 5: "\\normalsize", 6: "\\large", 7: "\\Large", 8: "\\LARGE", 9: "\\huge", 10: "\\Huge" }[r], i, "}"])), i;
  } }, { latexTrigger: ["\\!"], parse: () => ["HorizontalSpacing", -3] }, { latexTrigger: ["\\ "], parse: () => ["HorizontalSpacing", 6] }, { latexTrigger: ["\\:"], parse: () => ["HorizontalSpacing", 4] }, { latexTrigger: ["\\enskip"], parse: () => ["HorizontalSpacing", 9] }, { latexTrigger: ["\\quad"], parse: () => ["HorizontalSpacing", 18] }, { latexTrigger: ["\\qquad"], parse: () => ["HorizontalSpacing", 36] }, { latexTrigger: ["\\,"], parse: () => ["HorizontalSpacing", 3] }, { latexTrigger: ["\\;"], parse: () => ["HorizontalSpacing", 5] }, { latexTrigger: ["\\enspace"], parse: () => ["HorizontalSpacing", 9] }, { name: "HorizontalSpacing", serialize: (e12, n) => {
    if (p(n, 2) !== null) return e12.serialize(p(n, 1));
    let i = w(p(n, 1));
    return i === null ? "" : { "-3": "\\!", 6: "\\ ", 3: "\\,", 4: "\\:", 5: "\\;", 9: "\\enspace", 18: "\\quad", 36: "\\qquad" }[i] ?? "";
  } }];
  function $(e12) {
    return (n, i) => {
      let t = { "\\arcsin": "Arcsin", "\\arccos": "Arccos", "\\arctan": "Arctan", "\\arctg": "Arctan", "\\arcctg": "Arccot", "\\arcsec": "Arcsec", "\\arccsc": " Arccsc", "\\arsinh": "Arsinh", "\\arcosh": "Arcosh", "\\artanh": "Artanh", "\\arsech": "Arcsech", "\\arcsch": "Arcsch", "\\ch": "Cosh", "\\cos": "Cos", "\\cosec": "Csc", "\\cosh": "Csch", "\\cot": "Cot", "\\cotg": "Cot", "\\coth": "Coth", "\\csc": "Csc", "\\csch": "Csch", "\\ctg": "Cot", "\\cth": "Coth", "\\sec": "Sec", "\\sech": "Sech", "\\sin": "Sin", "\\sinh": "Sinh", "\\sh": "Sinh", "\\tan": "Tan", "\\tanh": "Tanh", "\\tg": "Tan", "\\th": "Tanh" }, r = t[e12 ?? ""] ?? e12 ?? "";
      if (n.atTerminator(i)) return r;
      let o = r;
      do {
        let l = n.parsePostfixOperator(o, i);
        if (l === null) break;
        o = l;
      } while (true);
      n.skipSpace();
      let s = null;
      n.match("^") && (s = n.parseGroup() ?? n.parseToken()), n.skipSpace();
      let a = n.parseArguments("implicit", { minPrec: 390, condition: (l) => t[l.peek] || (i?.condition?.(l) ?? false) }), u = a === null ? o : typeof o == "string" ? [o, ...a] : ["Apply", o, ...a];
      return s === null ? u : ["Power", u, s];
    };
  }
  var Qf = [{ name: "Arcsin", latexTrigger: ["\\arcsin"], parse: $("Arcsin") }, { name: "Arccos", latexTrigger: ["\\arccos"], parse: $("Arccos") }, { name: "Arctan", latexTrigger: ["\\arctan"], parse: $("Arctan") }, { latexTrigger: ["\\arctg"], parse: $("Arctan") }, { name: "Arccot", latexTrigger: ["\\arcctg"], parse: $("Arccot") }, { name: "Arcoth", identifierTrigger: "arcoth", parse: $("Arccot") }, { name: "Arcsec", latexTrigger: ["\\arcsec"], parse: $("Arcsec") }, { name: "Arccsc", latexTrigger: ["\\arccsc"], parse: $("Arccsc") }, { name: "Arsinh", latexTrigger: ["\\arsinh"], parse: $("Arsinh") }, { name: "Arcosh", latexTrigger: ["\\arcosh"], parse: $("Arcosh") }, { name: "Artanh", latexTrigger: ["\\artanh"], parse: $("Artanh") }, { name: "Arsech", latexTrigger: ["\\arsech"], parse: $("Arsech") }, { name: "Arcsch", latexTrigger: ["\\arcsch"], parse: $("Arcsch") }, { latexTrigger: ["\\ch"], parse: $("Cosh") }, { name: "Cosec", latexTrigger: ["\\cosec"], parse: $("Cosec") }, { name: "Cosh", latexTrigger: ["\\cosh"], parse: $("Cosh") }, { name: "Cot", latexTrigger: ["\\cot"], parse: $("Cot") }, { latexTrigger: ["\\cotg"], parse: $("Cot") }, { name: "Coth", latexTrigger: ["\\coth"], parse: $("Coth") }, { name: "Csc", latexTrigger: ["\\csc"], parse: $("Csc") }, { name: "Csch", latexTrigger: ["\\csch"], parse: $("Csch") }, { latexTrigger: ["\\ctg"], parse: $("Cot") }, { latexTrigger: ["\\cth"], parse: $("Cotanh") }, { name: "Sec", latexTrigger: ["\\sec"], parse: $("Sec") }, { name: "Sech", latexTrigger: ["\\sech"], parse: $("Sech") }, { name: "Sinh", latexTrigger: ["\\sinh"], parse: $("Sinh") }, { latexTrigger: ["\\sh"], parse: $("Sinh") }, { name: "Tan", latexTrigger: ["\\tan"], parse: $("Tan") }, { latexTrigger: ["\\tg"], parse: $("Tan") }, { name: "Tanh", latexTrigger: ["\\tanh"], parse: $("Tanh") }, { latexTrigger: ["\\th"], parse: $("Tanh") }, { name: "Cos", latexTrigger: ["\\cos"], parse: $("Cos") }, { name: "Sin", latexTrigger: ["\\sin"], parse: $("Sin") }];
  var Kf = [{ name: "AlgebraicNumbers", latexTrigger: "\\bar\\Q" }, { name: "ComplexNumbers", latexTrigger: ["\\C"] }, { latexTrigger: "\\mathbb{C}", parse: "ComplexNumbers" }, { name: "ImaginaryNumbers", latexTrigger: ["\\imaginaryI", "\\R"] }, { name: "EmptySet", latexTrigger: ["\\emptyset"] }, { latexTrigger: ["\\varnothing"], parse: "EmptySet" }, { name: "Integers", latexTrigger: ["\\Z"] }, { latexTrigger: "\\mathbb{Z}", parse: "Integers" }, { name: "RationalNumbers", latexTrigger: ["\\Q"] }, { name: "RealNumbers", latexTrigger: ["\\R"] }, { latexTrigger: "\\mathbb{R}", parse: "RealNumbers" }, { name: "TranscendentalNumbers", latexTrigger: "\\R-\\bar\\Q" }, { latexTrigger: "\\R\\backslash\\bar\\Q", parse: "TranscendentalNumbers" }, { name: "NegativeNumbers", latexTrigger: "\\R^-" }, { latexTrigger: "\\R^{-}", parse: "NegativeNumbers" }, { latexTrigger: "\\R_-", parse: "NegativeNumbers" }, { latexTrigger: "\\R_{-}", parse: "NegativeNumbers" }, { latexTrigger: "\\R^{\\lt}", parse: "NegativeNumbers" }, { name: "PositiveNumbers", latexTrigger: "\\R^+" }, { latexTrigger: "\\R^{+}", parse: "PositiveNumbers" }, { latexTrigger: "\\R_+", parse: "PositiveNumbers" }, { latexTrigger: "\\R_{+}", parse: "PositiveNumbers" }, { latexTrigger: "\\R^{\\gt}", parse: "PositiveNumbers" }, { name: "NonPositiveNumbers", latexTrigger: "\\R^{0-}" }, { latexTrigger: "\\R^{-0}", parse: "NonPositiveNumbers" }, { latexTrigger: "\\R^{\\leq}", parse: "NonPositiveNumbers" }, { name: "NegativeIntegers", latexTrigger: "\\Z^-" }, { latexTrigger: "\\Z^-", parse: "NegativeIntegers" }, { latexTrigger: "\\Z^{-}", parse: "NegativeIntegers" }, { latexTrigger: "\\Z_-", parse: "NegativeIntegers" }, { latexTrigger: "\\Z_{-}", parse: "NegativeIntegers" }, { latexTrigger: "\\Z^{\\lt}", parse: "NegativeIntegers" }, { name: "PositiveIntegers", latexTrigger: "\\Z^+" }, { latexTrigger: "\\Z^{+}", parse: "PositiveIntegers" }, { latexTrigger: "\\Z_+", parse: "PositiveIntegers" }, { latexTrigger: "\\Z_{+}", parse: "PositiveIntegers" }, { latexTrigger: "\\Z^{\\gt}", parse: "PositiveIntegers" }, { latexTrigger: "\\Z^{\\gt0}", parse: "PositiveIntegers" }, { latexTrigger: "\\N^+", parse: "PositiveIntegers" }, { latexTrigger: "\\N^{+}", parse: "PositiveIntegers" }, { latexTrigger: "\\N^*", parse: "PositiveIntegers" }, { latexTrigger: "\\N^{*}", parse: "PositiveIntegers" }, { latexTrigger: "\\N^\\star", parse: "PositiveIntegers" }, { latexTrigger: "\\N^{\\star}", parse: "PositiveIntegers" }, { latexTrigger: "\\N_1", parse: "PositiveIntegers" }, { latexTrigger: "\\N_{1}", parse: "PositiveIntegers" }, { name: "NonNegativeIntegers", latexTrigger: ["\\N"] }, { latexTrigger: "\\Z^{+0}", parse: "NonNegativeIntegers" }, { latexTrigger: "\\Z^{\\geq}", parse: "NonNegativeIntegers" }, { latexTrigger: "\\Z^{\\geq0}", parse: "NonNegativeIntegers" }, { latexTrigger: "\\Z^{0+}", parse: "NonNegativeIntegers" }, { latexTrigger: "\\mathbb{N}", parse: "NonNegativeIntegers" }, { latexTrigger: "\\N_0", parse: "NonNegativeIntegers" }, { latexTrigger: "\\N_{0}", parse: "NonNegativeIntegers" }, { latexTrigger: ["^", "\\complement"], kind: "postfix", parse: (e12, n) => ["Complement", n] }, { name: "Complement", latexTrigger: ["^", "<{>", "\\complement", "<}>"], kind: "postfix" }, { name: "Intersection", latexTrigger: ["\\cap"], kind: "infix", precedence: 350 }, { name: "Interval", serialize: Xf }, { name: "Multiple", serialize: Xf }, { name: "Union", latexTrigger: ["\\cup"], kind: "infix", precedence: 350 }, { name: "Set", kind: "matchfix", openTrigger: "{", closeTrigger: "}", parse: (e12, n) => G(n) ? "EmptySet" : (h(n) == "Delimiter" && q(p(n, 2)) === "," && (n = p(n, 1)), h(n) !== "Sequence" ? ["Set", n] : ["Set", ...v(n)]), serialize: (e12, n) => E(["\\lbrace", v(n).map((i) => e12.serialize(i)).join(", "), "\\rbrace"]) }, { name: "SetMinus", latexTrigger: ["\\setminus"], kind: "infix", precedence: 650 }, { name: "SymmetricDifference", latexTrigger: ["\\triangle"], kind: "infix", precedence: 245 }, { latexTrigger: ["\\ni"], kind: "infix", associativity: "none", precedence: 160, parse: (e12, n, i) => {
    let t = e12.parseExpression(i);
    return t === null ? null : ["Element", t, n];
  } }, { name: "Element", latexTrigger: ["\\in"], kind: "infix", precedence: 240 }, { name: "NotElement", latexTrigger: ["\\notin"], kind: "infix", precedence: 240 }, { name: "NotSubset", latexTrigger: ["\\nsubset"], kind: "infix", associativity: "none", precedence: 240 }, { name: "NotSuperset", latexTrigger: ["\\nsupset"], kind: "infix", associativity: "none", precedence: 240 }, { name: "NotSubsetNotEqual", latexTrigger: ["\\nsubseteq"], kind: "infix", associativity: "none", precedence: 240 }, { name: "NotSupersetNotEqual", latexTrigger: ["\\nsupseteq"], kind: "infix", associativity: "none", precedence: 240 }, { name: "SquareSubset", latexTrigger: ["\\sqsubset"], kind: "infix", associativity: "none", precedence: 265 }, { name: "SquareSubsetEqual", latexTrigger: ["\\sqsubseteq"], kind: "infix", associativity: "none", precedence: 265 }, { name: "SquareSuperset", latexTrigger: ["\\sqsupset"], kind: "infix", associativity: "none", precedence: 265 }, { name: "SquareSupersetEqual", latexTrigger: ["\\sqsupseteq"], kind: "infix", associativity: "none", precedence: 265 }, { name: "Subset", latexTrigger: ["\\subset"], kind: "infix", associativity: "none", precedence: 240 }, { latexTrigger: ["\\subsetneq"], kind: "infix", associativity: "none", precedence: 240, parse: "Subset" }, { latexTrigger: ["\\varsubsetneqq"], kind: "infix", associativity: "none", precedence: 240, parse: "Subset" }, { name: "SubsetEqual", latexTrigger: ["\\subseteq"], kind: "infix", associativity: "none", precedence: 240 }, { name: "Superset", latexTrigger: ["\\supset"], kind: "infix", associativity: "none", precedence: 240 }, { latexTrigger: ["\\supsetneq"], kind: "infix", associativity: "none", precedence: 240, parse: "Superset" }, { latexTrigger: ["\\varsupsetneq"], kind: "infix", associativity: "none", precedence: 240, parse: "Superset" }, { name: "SupersetEqual", latexTrigger: ["\\supseteq"], kind: "infix", associativity: "none", precedence: 240 }];
  function Xf(e12, n) {
    if (n === null) return "";
    let i = h(n);
    if (!i) return "";
    if (i === "Set") return J(n) === 0 ? "\\emptyset" : J(n) === 2 && h(p(n, 2)) === "Condition" ? E(["\\left\\lbrace", e12.serialize(p(n, 1)), "\\middle\\mid", e12.serialize(p(n, 2)), "\\right\\rbrace"]) : E(["\\left\\lbrace", ...v(n).map((r) => e12.serialize(r) + " ,"), "\\right\\rbrace"]);
    if (i === "Range") return E(["\\mathopen\\lbrack", e12.serialize(p(n, 1)), ", ", e12.serialize(p(n, 2)), "\\mathclose\\rbrack"]);
    if (i === "Interval") {
      let r = p(n, 1), o = p(n, 2), s = false, a = false;
      return h(r) === "Open" && (r = p(r, 1), s = true), h(o) === "Open" && (o = p(o, 1), a = true), E([`\\mathopen${s ? "\\rbrack" : "\\lbrack"}`, e12.serialize(r), ", ", e12.serialize(o), `\\mathclose${a ? "\\lbrack" : "\\rbrack"}`]);
    }
    let t = e12.numericSetStyle(n, e12.level);
    return "";
  }
  function dt(e12, n = 1) {
    return (i) => {
      i.skipSpace();
      let t = null, r = null;
      for (; !(r !== null && t !== null) && (i.peek === "_" || i.peek === "^"); ) i.match("_") ? r = i.parseGroup() ?? i.parseToken() : i.match("^") && (t = i.parseGroup() ?? i.parseToken()), i.skipSpace();
      G(r) && (r = null), G(t) && (t = null);
      let [o, s] = hm(i, n);
      if (o && !s) {
        if (h(o) === "Add" || h(o) === "Subtract") {
          let a = [], u = [];
          for (let l of v(o)) if (s) u.push(l);
          else {
            let f;
            [f, s] = vn(l), a.push(f ?? l);
          }
          if (s !== null && u.length > 0) return ["Add", ec(i, e12, ["Add", ...a], [{ index: s, sub: r, sup: t }]), ...u];
        } else if (h(o) === "Divide") {
          let a;
          [a, s] = vn(p(o, 1)), a !== null && s !== null && (o = ["Divide", a, p(o, 2)]);
        }
      }
      return ec(i, e12, o, [{ index: s, sub: r, sup: t }]);
    };
  }
  function ec(e12, n, i, t) {
    if (i && t.length === 0) return [n, i];
    i ?? (i = "Nothing"), e12.pushSymbolTable();
    for (let r of t) r.index && e12.addSymbol(r.index, "symbol");
    return e12.popSymbolTable(), [n, i, ...t.map((r) => gm(r))];
  }
  function gm(e12) {
    let n = e12.index ? ["Hold", e12.index] : "Nothing";
    return e12.sup !== null ? ["Tuple", n, e12.sub ?? "Nothing", e12.sup] : e12.sub !== null ? ["Tuple", n, e12.sub] : n;
  }
  function hm(e12, n = 1) {
    let i = e12.index, t = false, r = e12.parseExpression({ minPrec: 266, condition: () => ((e12.matchAll(["\\mathrm", "<{>", "d", "<}>"]) || e12.matchAll(["\\operatorname", "<{>", "d", "<}>"])) && (t = true), t) });
    if (t || (e12.index = i, r = e12.parseExpression({ minPrec: 266, condition: () => (e12.match("d") && (t = true), t) })), r !== null && !t) return vn(r);
    let o = xm(e12, n);
    return [r, o[0] ?? null];
  }
  function xm(e12, n = 1) {
    e12.skipSpace();
    let i = [], t = D(e12.parseSymbol());
    return t === null ? [] : (i.push(t), i);
  }
  function vn(e12) {
    let n = h(e12), i = p(e12, 1);
    if (!i) return [e12, null];
    if (n === "Sequence" && J(e12) === 1) return vn(i);
    if (n === "Multiply" || n === "InvisibleOperator") {
      let t = v(e12);
      if (t && t.length > 1) {
        let r = D(t[t.length - 2]);
        if (r === "d" || r === "d_upright") return t.length === 2 ? [null, D(t[1])] : t.length === 3 ? [t[0], D(t[2])] : [["Multiply", ...t.slice(0, -2)], D(t[t.length - 1])];
        let [o, s] = vn(t[t.length - 1]);
        if (o) return [["Multiply", ...t.slice(0, -1), o], s];
      }
    } else if (n === "Delimiter") {
      let [t, r] = vn(i);
      if (r) return t ? [["Delimiter", ["Sequence", t], ...v(e12).slice(1)], r] : [null, r];
    } else if (n === "Add") {
      let t = v(e12);
      if (t.length > 0) {
        let [r, o] = vn(t[t.length - 1]);
        if (o) {
          if (r) return [["Add", ...t.slice(0, -1), r], o];
          if (t.length > 2) return [["Add", ...t.slice(0, -1)], o];
          if (t.length > 2) return [t[0], o];
        }
      }
    } else if (n === "Negate") {
      let [t, r] = vn(i);
      if (r) return [t ? ["Negate", t] : null, r];
    } else if (n === "Divide") {
      let [t, r] = vn(i);
      if (r) return [["Divide", t ?? 1, p(e12, 2)], r];
    } else {
      let t = v(e12);
      if (t.length === 1) {
        let [r, o] = vn(t[0]);
        if (o) return [[h(e12), r], o];
      }
    }
    return [e12, null];
  }
  function nc(e12) {
    return (n, i) => {
      if (!p(i, 1)) return e12;
      let t = p(i, 2), r = h(t), o = null;
      r === "Tuple" || r === "Triple" || r === "Pair" || r === "Single" ? o = p(t, 1) : r === "Hold" ? o = p(t, 1) : (o = p(t, 1) ?? "x", t = null), h(o) === "Hold" && (o = p(o, 1));
      let s = o !== null ? D(o) : null, a = p(i, 1);
      if (h(a) === "Lambda" && p(a, 1) !== null && (a = Tr(p(a, 1), { _: s ?? "x", _1: s ?? "x" })), !t) return !s || s === "Nothing" ? E([e12, "\\!", n.serialize(a)]) : E([e12, "\\!", n.serialize(a), "\\,\\operatorname{d}", n.serialize(s)]);
      let u = p(t, 2) ? D(p(t, 2)) : null, l = t && u !== "Nothing" ? n.serialize(p(t, 2)) : "";
      l.length > 0 && (l = `_{${l}}`);
      let f = "", c = p(t, 3) ? D(p(t, 3)) : null;
      return p(t, 3) !== null && c !== "Nothing" && (f = `^{${n.serialize(p(t, 3))}}`), E([e12, f, l, "\\!", n.serialize(a), ...s && D(s) !== "Nothing" ? ["\\,\\operatorname{d}", n.serialize(s)] : []]);
    };
  }
  var ic = [{ kind: "expression", name: "Integrate", latexTrigger: ["\\int"], parse: dt("Integrate"), serialize: nc("\\int") }, { kind: "expression", latexTrigger: ["\\iint"], parse: dt("Integrate", 2) }, { kind: "expression", latexTrigger: ["\\iiint"], parse: dt("Integrate", 3) }, { kind: "expression", name: "CircularIntegrate", latexTrigger: ["\\oint"], parse: dt("CircularIntegrate"), serialize: nc("\\oint") }, { kind: "expression", latexTrigger: ["\\oiint"], parse: dt("CircularIntegrate", 2) }, { kind: "expression", latexTrigger: ["\\oiiint"], parse: dt("CircularIntegrate", 3) }];
  var tc = [{ name: "Real", kind: "function", latexTrigger: ["\\Re"] }, { name: "Imaginary", kind: "function", latexTrigger: ["\\Im"] }, { name: "Argument", kind: "function", latexTrigger: ["\\arg"] }, { name: "Conjugate", latexTrigger: ["^", "\\star"], kind: "postfix" }];
  var rc = [{ name: "Mean", kind: "function", identifierTrigger: "mean" }, { name: "Median", kind: "function", identifierTrigger: "median" }, { name: "StandarDeviation", kind: "function", identifierTrigger: "stddev" }, { latexTrigger: ["\\bar"], kind: "expression", parse: (e12, n) => {
    let i = e12.parseGroup() ?? e12.parseToken();
    return !i || !D(i) ? null : ["Mean", i];
  } }];
  var oc = { "(": "(", ")": ")", "[": "\\lbrack", "]": "\\rbrack", "{": "\\lbrace", "}": "\\rbrace", "<": "\\langle", ">": "\\rangle", "|": "\\vert", "||": "\\Vert", "\\lceil": "\\lceil", "\\lfloor": "\\lfloor", "\\rceil": "\\rceil", "\\rfloor": "\\rfloor" };
  function sc(e12, n, i) {
    let t = ym(n, i);
    if (t === null) return;
    let r = "kind" in n ? n.kind : "expression", o = t.latexTrigger;
    typeof o == "string" && (e12.lookahead = Math.max(e12.lookahead, xr(o)));
    let s = de(o ?? "");
    if (s.length === 2 && /[_^]/.test(s[0]) && s[1] !== "<{>" && r !== "function" && r !== "environment" && r !== "matchfix") {
      let a = n.parse;
      !a && n.name && (r === "postfix" || r === "prefix" ? a = (u, l) => [n.name, l] : a = n.name), sc(e12, { ...n, kind: r, name: void 0, serialize: void 0, parse: a, latexTrigger: [s[0], "<{>", s[1], "<}>"] }, i);
    }
    e12.defs.push(t), t.name !== void 0 && (e12.ids.has(t.name) && i({ severity: "warning", message: ["invalid-dictionary-entry", t.name, "Duplicate definition. The name (MathJSON identifier) must be unique, but triggers can be shared by multiple definitions."] }), e12.ids.set(t.name, t));
  }
  function aa(e12, n) {
    let i = { lookahead: 1, ids: /* @__PURE__ */ new Map(), defs: [] };
    for (let t of e12) sc(i, t, n);
    return i;
  }
  function ym(e12, n) {
    if (!Nm(e12, n)) return null;
    let i = { kind: "kind" in e12 ? e12.kind : "expression" }, t = null;
    "latexTrigger" in e12 && (typeof e12.latexTrigger == "string" ? t = de(e12.latexTrigger) : t = e12.latexTrigger);
    let r = null;
    "identifierTrigger" in e12 && (r = e12.identifierTrigger), t !== null && (i.latexTrigger = on(t)), r !== null && (i.identifierTrigger = r), e12.name && (i.name = e12.name, i.serialize = bm(e12, t, r)), i.kind === "matchfix" && xt(e12) && (i.openTrigger = e12.openTrigger, i.closeTrigger = e12.closeTrigger), i.kind === "symbol" && Wa(e12) && (i.precedence = e12.precedence ?? 1e4), i.kind === "expression" && Ha(e12) && (i.precedence = e12.precedence ?? 1e4), (i.kind === "prefix" || i.kind === "postfix") && (yr(e12) || Ao(e12)) && (t && (t[0] === "^" || t[0] === "_") ? (i.precedence = 720, e12.precedence) : i.precedence = e12.precedence ?? 1e4), i.kind === "infix" && Ro(e12) && (!t || t[0] !== "^" && t[0] !== "_" || !e12.associativity || e12.associativity, i.associativity = e12.associativity ?? "none", i.precedence = e12.precedence ?? 1e4);
    let o = Em(e12, t, r);
    return o && (i.parse = o), i;
  }
  function bm(e12, n, i) {
    if (typeof e12.serialize == "function") return e12.serialize;
    let t = e12.kind ?? "expression";
    if (t === "environment") {
      let s = e12.identifierTrigger ?? e12.name ?? "unknown";
      return (a, u) => E([`\\begin{${s}}`, a.serialize(p(u, 1)), `\\end{${s}}`]);
    }
    if (xt(e12)) {
      let s = typeof e12.openTrigger == "string" ? oc[e12.openTrigger] : on(e12.openTrigger), a = typeof e12.closeTrigger == "string" ? oc[e12.closeTrigger] : on(e12.closeTrigger);
      return (u, l) => E([s, u.serialize(p(l, 1)), a]);
    }
    let r = e12.serialize;
    if (r === void 0 && n && (r = on(n)), r) return t === "postfix" ? (s, a) => E([s.serialize(p(a, 1)), r]) : t === "prefix" ? (s, a) => E([r, s.serialize(p(a, 1))]) : t === "infix" ? (s, a) => {
      let u = J(a);
      if (u === 0) return "";
      let l = e12.precedence ?? 1e4;
      return E(v(a).flatMap((f, c) => {
        let d = s.wrap(f, l + 1);
        return c < u - 1 ? [d, r] : [d];
      }));
    } : (s, a) => h(a) ? E([r, s.wrapArguments(a)]) : r;
    let o = i ?? e12.name ?? "unknown";
    return t === "postfix" ? (s, a) => E([s.serialize(p(a, 1)), s.serializeSymbol(o)]) : t === "prefix" ? (s, a) => E([s.serializeSymbol(o), s.serialize(p(a, 1))]) : t === "infix" ? (s, a) => E([s.serialize(p(a, 1)), s.serializeSymbol(o), s.serialize(p(a, 2))]) : (s, a) => h(a) ? E([s.serializeSymbol(o), s.wrapArguments(a)]) : s.serializeSymbol(o);
  }
  function Em(e12, n, i) {
    if ("parse" in e12 && typeof e12.parse == "function") return e12.parse;
    let t = ("kind" in e12 ? e12.kind : "expression") ?? "expression";
    if (t === "environment") {
      let r = e12.parse ?? e12.name ?? i;
      if (r) return (o, s) => {
        let a = o.parseTabular();
        return a === null ? null : [r, ["List", a.map((u) => ["List", ...u])]];
      };
    }
    if (t === "function") {
      let r = e12.parse ?? e12.name ?? i;
      if (r) return (o, s) => {
        let a = o.parseArguments("enclosure", s);
        return a === null ? r : [r, ...a];
      };
    }
    if (t === "symbol") {
      let r = e12.parse ?? e12.name ?? i;
      if (r) return (o, s) => r;
    }
    if (t === "prefix") {
      let r = e12.parse ?? e12.name ?? i;
      if (r) {
        let o = e12.precedence ?? 1e4;
        return (s, a) => {
          let u = s.parseExpression({ ...a ?? [], minPrec: o });
          return u === null ? null : [r, u];
        };
      }
    }
    if (t === "postfix") {
      let r = e12.parse ?? e12.name;
      if (r) return (o, s) => s === null ? null : [r, s];
    }
    if (t === "infix") {
      if (/[_^]/.test(n?.[0] ?? "")) {
        let o = e12.name ?? e12.parse;
        return (s, a) => [o, C(p(a, 1)), C(p(a, 2))];
      }
      let r = e12.parse ?? e12.name ?? i;
      if (r) {
        let o = e12.precedence ?? 1e4, s = e12.associativity ?? "none";
        return s === "none" ? (a, u, l) => {
          if (u === null) return null;
          let f = C(a.parseExpression({ ...l, minPrec: o }));
          return [r, u, f];
        } : s === "left" ? (a, u, l) => {
          if (u === null) return null;
          let f = C(a.parseExpression({ ...l, minPrec: o + 1 }));
          return typeof r != "string" ? [r, u, f] : [r, u, f];
        } : s === "right" ? (a, u, l) => {
          if (u === null) return null;
          let f = C(a.parseExpression({ ...l, minPrec: o }));
          return typeof r != "string" ? [r, u, f] : [r, u, f];
        } : (a, u, l) => {
          if (u === null) return null;
          let f = C(a.parseExpression({ ...l, minPrec: o }));
          return typeof r != "string" ? [r, u, f] : Li(r, u, f);
        };
      }
    }
    if (t === "matchfix") {
      let r = e12.parse ?? e12.name;
      if (r) return (o, s) => G(s) ? null : [r, s];
    }
    if (t === "expression") {
      let r = e12.parse ?? e12.name ?? i;
      if (r) return () => r;
    }
    if ("parse" in e12) {
      let r = e12.parse;
      return () => r;
    }
  }
  function Nm(e12, n) {
    let i = e12.name ?? e12.latexTrigger ?? e12.identifierTrigger ?? e12.openTrigger;
    if (!i) try {
      i = JSON.stringify(e12);
    } catch {
      i = "???";
    }
    if (Array.isArray(i) && (i = on(i)), "trigger" in e12 && n({ severity: "warning", message: ["invalid-dictionary-entry", i, "The 'trigger' property is deprecated. Use 'latexTrigger' or 'identifierTrigger' instead"] }), "kind" in e12 && !["expression", "symbol", "function", "infix", "postfix", "prefix", "matchfix", "environment"].includes(e12.kind) && n({ severity: "warning", message: ["invalid-dictionary-entry", i, "The 'kind' property must be one of 'expression', 'symbol', 'function', 'infix', 'postfix', 'prefix', 'matchfix', 'environment'"] }), e12.serialize !== void 0 && !e12.name) return n({ severity: "warning", message: ["invalid-dictionary-entry", i, "A 'name' property must be provided if a 'serialize' handler is provided"] }), false;
    if ("identifierTrigger" in e12 && (!("kind" in e12) || e12.kind !== "environment") && (typeof e12.identifierTrigger != "string" || !xe(e12.identifierTrigger)) && n({ severity: "warning", message: ["invalid-dictionary-entry", i, "The 'identifierTrigger' property must be a valid identifier"] }), "name" in e12 && (typeof e12.name != "string" ? e12.name !== void 0 && n({ severity: "warning", message: ["invalid-dictionary-entry", i, "The 'name' property must be a string"] }) : xe(e12.name) || n({ severity: "warning", message: ["invalid-dictionary-entry", e12.name, "The 'name' property must be a valid identifier"] })), xt(e12)) {
      if ("latexTrigger" in e12 || "identifierTrigger" in yr) return n({ severity: "warning", message: ["invalid-dictionary-entry", i, "'matchfix' operators use a 'openTrigger' and 'closeTrigger' instead of a 'latexTrigger' or 'identifierTrigger'. "] }), false;
      if (!e12.openTrigger || !e12.closeTrigger) return n({ severity: "warning", message: ["invalid-dictionary-entry", i, "Expected `openTrigger` and a `closeTrigger` for matchfix operator"] }), false;
      if (typeof e12.openTrigger != typeof e12.closeTrigger) return n({ severity: "warning", message: ["invalid-dictionary-entry", i, "Expected `openTrigger` and `closeTrigger` to both be strings or array of LatexToken"] }), false;
    }
    if (Ro(e12) || Ao(e12) || yr(e12)) {
      if (Array.isArray(e12.latexTrigger) && (e12.latexTrigger[0] === "_" || e12.latexTrigger[0] === "^") || typeof e12.latexTrigger == "string" && (e12.latexTrigger.startsWith("^") || e12.latexTrigger.startsWith("_"))) {
        if (e12.precedence !== void 0 || e12.associativity !== void 0) return n({ severity: "warning", message: ["invalid-dictionary-entry", i, 'Unexpected "precedence" or "associativity" for superscript/subscript operator'] }), false;
      } else if (e12.precedence === void 0) return n({ severity: "warning", message: ["invalid-dictionary-entry", i, `Expected a "precedence" for ${e12.kind} operator`] }), false;
    } else if (e12.associativity !== void 0) return n({ severity: "warning", message: ["invalid-dictionary-entry", i, 'Unexpected "associativity" operator'] }), false;
    return !xt(e12) && !Ja(e12) && !e12.latexTrigger && !e12.identifierTrigger && !e12.name ? (n({ severity: "warning", message: ["invalid-dictionary-entry", i, "Expected a 'name', a 'latexTrigger' or a 'identifierTrigger'"] }), false) : e12.parse === void 0 && e12.name === void 0 ? (n({ severity: "warning", message: ["invalid-dictionary-entry", i, "Expected a 'parse' or 'name'"] }), false) : true;
  }
  var Xt = { symbols: Cl, algebra: Ff, arithmetic: Zf, calculus: ic, complex: tc, core: Pl, "linear-algebra": Wf, logic: Jf, relop: Kn, other: Yf, physics: [{ name: "mu0", kind: "symbol", latexTrigger: "\\mu_0" }], sets: Kf, statistics: rc, trigonometry: Qf };
  function ac(e12 = "all") {
    if (e12 === "all") {
      let n = [];
      for (let i of Object.keys(Xt)) Xt[i] && n.push(...Xt[i]);
      return n;
    }
    return Xt[e12] ? Object.freeze([...Xt[e12]]) : [];
  }
  var vm = { "\\mathord": "", "\\mathop": "", "\\mathbin": "", "\\mathrel": "", "\\mathopen": "", "\\mathclose": "", "\\mathpunct": "", "\\mathinner": "", "\\operatorname": "", "\\mathrm": "_upright", "\\mathit": "_italic", "\\mathbf": "_bold", "\\mathscr": "_script", "\\mathcal": "_calligraphic", "\\mathfrak": "_fraktur", "\\mathsf": "_sansserif", "\\mathtt": "_monospace", "\\mathbb": "_doublestruck" };
  var Sm = { "\\mathring": "_ring", "\\hat": "_hat", "\\tilde": "_tilde", "\\vec": "_vec", "\\overline": "_bar", "\\underline": "_underbar", "\\dot": "_dot", "\\ddot": "_ddot", "\\dddot": "_dddot", "\\ddddot": "_ddddot", "\\acute": "_acute", "\\grave": "_grave", "\\breve": "_breve", "\\check": "_check" };
  function uc(e12, n) {
    if (e12.atEnd) return null;
    let i = e12.peek, t = { "\\_": "_", "\\#": "hash" }[i];
    if (!t && !n.toplevel && (t = { "+": "plus", "-": "minus", "\\plusmn": "pm", "\\pm": "pm", "\\ast": "ast", "\\dag": "dag", "\\ddag": "ddag", "\\bot": "bottom", "\\top": "top", "\\bullet": "bullet", "\\cir": "circle", "\\diamond": "diamond", "\\times": "times", "\\square": "square", "\\star": "star" }[i]), t) return e12.nextToken(), t;
    let r = un.findIndex((o) => o[1] === i);
    return r >= 0 ? (e12.nextToken(), un[r][0]) : e12.matchChar() ?? e12.nextToken();
  }
  function po(e12) {
    let n = ua(e12), i = Sm[e12.peek] ?? null;
    if (i) {
      if (e12.nextToken(), !e12.match("<{>")) return null;
      let o = po(e12);
      if (o === null || !e12.match("<}>")) return null;
      n = `${o}${i}`;
    }
    if (n === null) {
      for (n = ""; !e12.atEnd; ) {
        let o = e12.peek;
        if (o === "<}>" || o === "_" || o === "^") break;
        let s = uc(e12, { toplevel: false });
        if (s === null) return null;
        n += s;
      }
      for (; !e12.atEnd && /\d/.test(e12.peek); ) n += e12.nextToken();
    }
    for (; !e12.atEnd; ) if (e12.match("\\degree")) n += "_deg";
    else if (e12.matchAll(["^", "\\prime"])) n += "_prime";
    else if (e12.matchAll(["^", "<{>", "\\prime", "<}>"])) n += "_prime";
    else if (e12.matchAll(["^", "<{>", "\\doubleprime", "<}>"])) n += "_dprime";
    else if (e12.matchAll(["^", "<{>", "\\prime", "\\prime", "<}>"])) n += "_dprime";
    else break;
    let t = [], r = [];
    for (; !e12.atEnd; ) if (e12.match("_")) {
      let o = e12.match("<{>"), s = po(e12);
      if (o && !e12.match("<}>") || s === null) return null;
      r.push(s);
    } else if (e12.match("^")) {
      let o = e12.match("<{>"), s = po(e12);
      if (o && !e12.match("<}>") || s === null) return null;
      t.push(s);
    } else break;
    return t.length > 0 && (n += "__" + t.join("")), r.length > 0 && (n += "_" + r.join("")), n;
  }
  function ua(e12) {
    let n = vm[e12.peek] ?? null;
    if (n === null) return null;
    if (e12.nextToken(), e12.match("<{>")) {
      let i = "", t = { 0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine" }[e12.peek] ?? "";
      return t && (i = t, e12.nextToken()), i += po(e12), i === null || !e12.match("<}>") ? null : n === "_upright" && i.length > 1 ? i : i + n;
    }
    return null;
  }
  function la(e12) {
    let n = e12.index, i = ua(e12);
    return i === null || xe(i) ? null : e12.error(["invalid-identifier", { str: Xe(i) }], n);
  }
  function Kt(e12) {
    if (/^[a-zA-Z]$/.test(e12.peek) || /^\p{XIDS}$/u.test(e12.peek)) return e12.nextToken();
    let n = ua(e12);
    if (!n) {
      for (n = ""; !e12.atEnd && Xi.test(n + e12.peek); ) n += e12.nextToken();
      n || (n = null);
    }
    let i = e12.index;
    return n ?? (n = uc(e12, { toplevel: true })), n && (n = n.normalize(), xe(n)) ? n : (e12.index = i, null);
  }
  var Tm = { "(": ["\\lparen", "("], ")": ["\\rparen", ")"], "[": ["\\lbrack", "\\[", "["], "]": ["\\rbrack", "\\]", "]"], "<": ["<", "\\langle"], ">": [">", "\\rangle"], "{": ["\\{", "\\lbrace"], "}": ["\\}", "\\rbrace"], ":": [":", "\\colon"], "|": ["|", "\\|", "\\lvert", "\\rvert"], "||": ["||", "\\Vert", "\\lVert", "\\rVert"] };
  var ca = { "\\left": "\\right", "\\bigl": "\\bigr", "\\Bigl": "\\Bigr", "\\biggl": "\\biggr", "\\Biggl": "\\Biggr", "\\big": "\\big", "\\Big": "\\Big", "\\bigg": "\\bigg", "\\Bigg": "\\Bigg" };
  var da = { "(": ")", "[": "]", "|": "|", "\\{": "\\}", "\\[": "\\]", "\\lbrace": "\\rbrace", "\\lparen": "\\rparen", "\\langle": "\\rangle", "\\lfloor": "\\rfloor", "\\lceil": "\\rceil", "\\vert": "\\vert", "\\lvert": "\\rvert", "\\Vert": "\\Vert", "\\lVert": "\\rVert", "\\lbrack": "\\rbrack", "\\ulcorner": "\\urcorner", "\\llcorner": "\\lrcorner", "\\lgroup": "\\rgroup", "\\lmoustache": "\\rmoustache", "\\llbracket": "\\rrbracket" };
  var pa = class {
    constructor(n, i, t) {
      this._index = 0;
      this.symbolTable = { parent: null, ids: {} };
      this._boundaries = [];
      this._lastPeek = "";
      this._peekCounter = 0;
      this._tokens = n, this.options = t, this._dictionary = i, this._positiveInfinityTokens = de(this.options.positiveInfinity), this._negativeInfinityTokens = de(this.options.negativeInfinity), this._notANumberTokens = de(this.options.notANumber), this._decimalSeparatorTokens = de(this.options.decimalSeparator), this._wholeDigitGroupSeparatorTokens = [], this._fractionalDigitGroupSeparatorTokens = [], this.options.digitGroupSeparator && (typeof this.options.digitGroupSeparator == "string" ? (this._wholeDigitGroupSeparatorTokens = de(this.options.digitGroupSeparator), this._fractionalDigitGroupSeparatorTokens = this._wholeDigitGroupSeparatorTokens) : Array.isArray(this.options.digitGroupSeparator) && (this._wholeDigitGroupSeparatorTokens = de(this.options.digitGroupSeparator[0]), this._fractionalDigitGroupSeparatorTokens = de(this.options.digitGroupSeparator[1]))), this._exponentProductTokens = de(this.options.exponentProduct), this._beginExponentMarkerTokens = de(this.options.beginExponentMarker), this._endExponentMarkerTokens = de(this.options.endExponentMarker), this._truncationMarkerTokens = de(this.options.truncationMarker), this._imaginaryUnitTokens = de(this.options.imaginaryUnit);
    }
    pushSymbolTable() {
      this.symbolTable = { parent: this.symbolTable, ids: {} };
    }
    popSymbolTable() {
      this.symbolTable = this.symbolTable.parent ?? this.symbolTable;
    }
    addSymbol(n, i) {
      if (n in this.symbolTable.ids && this.symbolTable.ids[n] !== i) throw new Error(`Symbol ${n} already declared as a different type`);
      this.symbolTable.ids[n] = i;
    }
    get index() {
      return this._index;
    }
    set index(n) {
      this._index = n, this._lastPeek = "", this._peekCounter = 0;
    }
    getIdentifierType(n) {
      let i = this.symbolTable;
      for (; i; ) {
        if (n in i.ids) return i.ids[n];
        i = i.parent;
      }
      return this.options.getIdentifierType ? this.options.getIdentifierType(n) : "unknown";
    }
    get peek() {
      let n = this._tokens[this.index];
      if (n === this._lastPeek ? this._peekCounter += 1 : this._peekCounter = 0, this._peekCounter >= 1024) {
        let i = `Infinite loop detected while parsing "${this.latex(0)}" at "${this._lastPeek}" (index ${this.index})`;
        throw console.error(i), new Error(i);
      }
      return this._lastPeek = n, n;
    }
    nextToken() {
      return this._tokens[this.index++];
    }
    get atEnd() {
      return this.index >= this._tokens.length;
    }
    atTerminator(n) {
      return this.atBoundary || ((n?.condition && n.condition(this)) ?? false);
    }
    get atBoundary() {
      if (this.atEnd) return true;
      let n = this.index;
      for (let i of this._boundaries) if (this.matchAll(i.tokens)) return this.index = n, true;
      return false;
    }
    addBoundary(n) {
      this._boundaries.push({ index: this.index, tokens: n });
    }
    removeBoundary() {
      this._boundaries.pop();
    }
    matchBoundary() {
      let n = this._boundaries[this._boundaries.length - 1], i = n && this.matchAll(n.tokens);
      return i && this._boundaries.pop(), i;
    }
    boundaryError(n) {
      let i = this._boundaries[this._boundaries.length - 1];
      return this._boundaries.pop(), this.error(n, i.index);
    }
    latex(n, i) {
      return on(this._tokens.slice(n, i));
    }
    latexAhead(n) {
      return this.latex(this.index, this.index + n);
    }
    lookAhead() {
      let n = Math.min(this._dictionary.lookahead, this._tokens.length - this.index);
      if (n <= 0) return [];
      let i = [];
      for (; n > 0; ) i.push([n, this.latexAhead(n--)]);
      return i;
    }
    peekDefinitions(n) {
      if (this.atEnd) return [];
      let i = [], t = [...this.getDefs(n)];
      for (let r of t) r.latexTrigger === "" && i.push([r, 0]);
      for (let [r, o] of this.lookAhead()) for (let s of t) s.latexTrigger === o && i.push([s, r]);
      for (let r of t) if (r.identifierTrigger) {
        let o = _m(this, r.identifierTrigger);
        o > 0 && i.push([r, o]);
      }
      return i;
    }
    skipSpaceTokens() {
      for (; this.match("<space>"); ) ;
    }
    skipSpace() {
      if (!this.atEnd && this.peek === "<{>") {
        let i = this.index;
        for (this.nextToken(); this.match("<space>"); ) ;
        if (this.nextToken() === "<}>") return this.skipSpace(), true;
        this.index = i;
      }
      if (!this.options.skipSpace) return false;
      let n = false;
      for (; this.match("<space>"); ) n = true;
      return n && this.skipSpace(), n;
    }
    skipVisualSpace() {
      this.options.skipSpace && (this.skipSpace(), ["\\!", "\\,", "\\:", "\\;", "\\enskip", "\\enspace", "\\space", "\\quad", "\\qquad"].includes(this.peek) && (this.nextToken(), this.skipVisualSpace()), this.skipSpace());
    }
    match(n) {
      return this._tokens[this.index] !== n ? false : (this.index++, true);
    }
    matchAll(n) {
      if (n.length === 0) return false;
      let i, t = 0;
      do
        i = this._tokens[this.index + t] === n[t++];
      while (i && t < n.length);
      return i && (this.index += t), i;
    }
    matchAny(n) {
      return n.includes(this._tokens[this.index]) ? this._tokens[this.index++] : "";
    }
    matchLatexNumber(n = true) {
      let i = false, t = this.peek;
      for (; t === "<space>" || t === "+" || t === "-"; ) t === "-" && (i = !i), this.nextToken(), t = this.peek;
      let r = 10, o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      if (this.match("'")) r = 8, o = ["0", "1", "2", "3", "4", "5", "6", "7"], n = true;
      else if (this.match('"') || this.match("x")) r = 16, o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"], n = true;
      else if (this.match("`")) return t = this.nextToken(), t ? t.startsWith("\\") && t.length === 2 ? (i ? -1 : 1) * (t.codePointAt(1) ?? 0) : (i ? -1 : 1) * (t.codePointAt(0) ?? 0) : null;
      let s = "";
      for (; o.includes(this.peek); ) s += this.nextToken();
      if (!n && this.match(".")) for (s += "."; o.includes(this.peek); ) s += this.nextToken();
      let a = n ? Number.parseInt(s, r) : Number.parseFloat(s);
      return Number.isNaN(a) ? null : i ? -a : a;
    }
    matchChar() {
      let n = this.index, i = 0;
      for (; this.match("^"); ) i += 1;
      if (i < 2 && (this.index = n), i >= 2) {
        let t = "", r = 0;
        for (; r != i; ) {
          let o = this.matchAny(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]);
          if (!o) break;
          t += o, r += 1;
        }
        if (t.length === i) return String.fromCodePoint(Number.parseInt(t, 16));
      } else if (this.match("\\char")) {
        let t = Math.floor(this.matchLatexNumber() ?? Number.NaN);
        return (!Number.isFinite(t) || t < 0 || t > 1114111) && (t = 10067), String.fromCodePoint(t);
      } else if (this.match("\\unicode")) if (this.skipSpaceTokens(), this.match("<{>")) {
        let t = this.matchLatexNumber();
        if (this.match("<}>") && t !== null && t >= 0 && t <= 1114111) return String.fromCodePoint(t);
      } else {
        let t = this.matchLatexNumber();
        if (t !== null && t >= 0 && t <= 1114111) return String.fromCodePoint(t);
      }
      return this.index = n, null;
    }
    matchDelimiter(n, i) {
      if (Array.isArray(n)) return Array.isArray(i), this.matchAll(n) ? (this.addBoundary(i), true) : false;
      Array.isArray(i);
      let t = this.index, r = ca[this.peek];
      return r && this.nextToken(), n === "||" && this.matchAll(["|", "|"]) ? (this.addBoundary(["|", "|"]), true) : (Tm[n] ?? [n]).includes(this.peek) ? (n = this.nextToken(), i = da[n] ?? i, this.addBoundary(r ? [r, i] : [i]), true) : (this.index = t, false);
    }
    parseGroup() {
      let n = this.index;
      if (this.skipSpaceTokens(), this.match("<{>")) {
        this.addBoundary(["<}>"]);
        let i = this.parseExpression();
        if (this.skipSpace(), this.matchBoundary()) return i ?? "Nothing";
        for (; !this.matchBoundary() && !this.atEnd; ) this.nextToken();
        if (h(i) === "Error") return i;
        let t = this.error("expected-closing-delimiter", n);
        return i !== null ? ["InvisibleOperator", i, t] : t;
      }
      return this.index = n, null;
    }
    parseOptionalGroup() {
      let n = this.index;
      if (this.skipSpaceTokens(), this.match("[")) {
        this.addBoundary(["]"]);
        let i = this.parseExpression();
        return this.skipSpace(), this.matchBoundary() ? i : this.boundaryError("expected-closing-delimiter");
      }
      return this.index = n, null;
    }
    parseToken() {
      return this.skipSpace(), [...'!"#$%&(),/;:?@[]\\`|~'.split(""), "\\left", "\\bigl"].includes(this.peek) ? null : /^[0-9]$/.test(this.peek) ? parseInt(this.nextToken(), 10) : this.parseGenericExpression() ?? this.parseSymbol();
    }
    parseTabular() {
      let n = [], i = [], t = null;
      for (; !this.atBoundary; ) if (this.skipSpace(), this.match("&")) i.push(t ?? "Nothing"), t = null;
      else if (this.match("\\\\") || this.match("\\cr")) this.skipSpace(), this.parseOptionalGroup(), t !== null && i.push(t), n.push(i), i = [], t = null;
      else {
        let r = [], o = this.peek;
        for (; o !== "&" && o !== "\\\\" && o !== "\\cr" && !this.atBoundary; ) t = this.parseExpression({ minPrec: 0, condition: (s) => {
          let a = s.peek;
          return a === "&" || a === "\\\\" || a === "\\cr";
        } }), t !== null ? r.push(t) : (r.push(["Error", "'unexpected-token'", { str: on(o) }]), this.nextToken()), this.skipSpace(), o = this.peek;
        r.length > 1 ? t = ["Sequence", ...r] : t = r[0] ?? "Nothing";
      }
      return t !== null && i.push(t), i.length > 0 && n.push(i), n;
    }
    parseStringGroupContent() {
      let n = this.index, i = "", t = 0;
      for (; !this.atBoundary || t > 0; ) {
        let r = this.nextToken();
        if (r === "<$>" || r === "<$$>") return this.index = n, "";
        r === "<{>" ? (t += 1, i += "\\{") : r === "<}>" ? (t -= 1, i += "\\}") : r === "<space>" ? i += " " : (r[0], i += r);
      }
      return i;
    }
    parseStringGroup(n) {
      n === void 0 && (n = false);
      let i = this.index;
      for (; this.match("<space>"); ) ;
      if (this.match(n ? "[" : "<{>")) {
        this.addBoundary([n ? "]" : "<}>"]);
        let t = this.parseStringGroupContent();
        if (this.matchBoundary()) return t;
        this.removeBoundary();
      }
      return this.index = i, null;
    }
    parseEnvironment(n) {
      let i = this.index;
      if (!this.match("\\begin")) return null;
      let t = this.parseStringGroup()?.trim();
      if (!t) return this.error("expected-environment-name", i);
      this.addBoundary(["\\end", "<{>", ...t.split(""), "<}>"]);
      for (let r of this.getDefs("environment")) if (r.identifierTrigger === t) {
        let o = r.parse(this, n);
        return this.skipSpace(), this.matchBoundary() ? o !== null ? this.decorate(o, i) : (this.index = i, null) : this.boundaryError("unbalanced-environment");
      }
      return this.parseTabular(), this.skipSpace(), this.matchBoundary() ? this.error(["unknown-environment", { str: t }], i) : this.boundaryError("unbalanced-environment");
    }
    parseOptionalSign() {
      let n = !!this.matchAny(["-", "\u2212"]);
      for (; this.matchAny(["+", "\uFE62"]) || this.skipSpace(); ) this.matchAny(["-", "\u2212"]) && (n = !n);
      return n ? "-" : "+";
    }
    parseDecimalDigits(n = "whole") {
      let i = [], t = false;
      for (; !t; ) {
        for (; /^[0-9]$/.test(this.peek); ) i.push(this.nextToken()), this.skipVisualSpace();
        t = true;
        let r = n === "whole" ? this._wholeDigitGroupSeparatorTokens : this._fractionalDigitGroupSeparatorTokens;
        if (n !== "none" && r.length > 0) {
          let o = this.index;
          this.skipVisualSpace(), this.matchAll(r) && (this.skipVisualSpace(), /^[0-9]$/.test(this.peek) ? t = false : this.index = o);
        }
      }
      return i.join("");
    }
    parseSignedInteger(n) {
      let i = this.index, t = this.parseOptionalSign(), r = this.parseDecimalDigits(n);
      return r ? t === "-" ? "-" + r : r : (this.index = i, "");
    }
    parseExponent() {
      let n = this.index;
      if (this.skipVisualSpace(), this.matchAny(["e", "E"])) {
        let i = this.parseSignedInteger("none");
        if (i) return i;
      }
      if (this.index = n, this.match("\\times") && (this.skipVisualSpace(), this.matchAll(["1", "0"]) && (this.skipVisualSpace(), this.match("^")))) {
        if (this.skipVisualSpace(), /^[0-9]$/.test(this.peek)) return this.nextToken();
        if (this.match("<{>")) {
          this.skipVisualSpace();
          let i = this.parseSignedInteger("whole");
          if (this.skipVisualSpace(), i && this.match("<}>")) return i;
        }
      }
      if (this.index = n, this.skipVisualSpace(), this.match("\\%")) return "-2";
      if (this.index = n, this.matchAll(this._exponentProductTokens) && (this.skipVisualSpace(), this.matchAll(this._beginExponentMarkerTokens))) {
        this.skipVisualSpace();
        let i = this.parseSignedInteger("none");
        if (this.skipVisualSpace(), i && this.matchAll(this._endExponentMarkerTokens)) return i;
      }
      return this.index = n, "";
    }
    parseRepeatingDecimal() {
      let n = this.index, i = this.options.repeatingDecimal, t = "";
      if ((i === "auto" || i === "parentheses") && this.match("(")) return t = this.parseDecimalDigits("fraction"), t && this.match(")") ? `(${t})` : (this.index = n, "");
      if (this.index = n, (i === "auto" || i === "parentheses") && this.matchAll(["\\left", "("])) return t = this.parseDecimalDigits("fraction"), t && this.matchAll(["\\right", ")"]) ? `(${t})` : (this.index = n, "");
      if (this.index = n, (i === "auto" || i === "vinculum") && this.matchAll(["\\overline", "<{>"])) return t = this.parseDecimalDigits("fraction"), t && this.match("<}>") ? `(${t})` : (this.index = n, "");
      if (this.index = n, (i === "auto" || i === "arc") && (this.matchAll(["\\wideparen", "<{>"]) || this.matchAll(["\\overarc", "<{>"]))) return t = this.parseDecimalDigits("fraction"), t && this.match("<}>") ? `(${t})` : (this.index = n, "");
      if (this.index = n, i === "auto" || i === "dots") {
        let r = lc(this);
        if (r !== null) {
          if (t = this.parseDecimalDigits("fraction"), !t) return `(${r})`;
          let o = lc(this);
          if (o !== null) return `(${r}${t}${o})`;
        }
      }
      return this.index = n, "";
    }
    parseNumber() {
      if (this.options.parseNumbers === false || this.options.parseNumbers === "never") return null;
      let n = this.index;
      this.skipVisualSpace();
      let i = 1;
      for (; this.peek === "-" || this.peek === "+"; ) this.match("-") ? i = -i : this.match("+"), this.skipVisualSpace();
      let t = "", r = "", o = false;
      if (this.match(".") || this.matchAll(this._decimalSeparatorTokens)) {
        let f = this.peek;
        (/^[\d]$/.test(f) || Bm(this)) && (o = true, t = "0");
      } else t = this.parseDecimalDigits("whole");
      if (!t) return this.index = n, null;
      let s = this.index, a = false;
      (o || this.match(".") || this.matchAll(this._decimalSeparatorTokens)) && (r = this.parseDecimalDigits("fraction"), a = true);
      let u = false;
      if (a) {
        let f = this.parseRepeatingDecimal();
        f && (r += f, u = true), this.match("\\ldots") || this.matchAll(this._truncationMarkerTokens);
      }
      if (a && !r) return this.index = s, t.length < 10 ? fa(i * parseInt(t, 10)) : { num: i < 0 ? "-" + t : t };
      let l = this.parseExponent();
      if (!a && !l && t.length < 10) return fa(i * parseInt(t, 10));
      if (!u && this.options.parseNumbers === "rational") {
        let f = parseInt(t, 10);
        if (!r) return l ? ["Multiply", i * f, ["Power", 10, l]] : fa(i * f);
        let c = parseInt(r, 10), d = r.length, m = f * 10 ** d + c, b = 10 ** d;
        return l ? ["Multiply", ["Rational", i * m, b], ["Power", 10, l]] : ["Rational", i * m, b];
      }
      return { num: (i < 0 ? "-" : "") + t + (a ? "." + r : "") + (l ? "e" + l : "") };
    }
    parsePrefixOperator(n) {
      n || (n = { minPrec: 0 }), n.minPrec || (n = { ...n, minPrec: 0 });
      let i = this.index;
      for (let [t, r] of this.peekDefinitions("prefix")) {
        this.index = i + r;
        let o = t.parse(this, { ...n, minPrec: t.precedence + 1 });
        if (o !== null) return o;
      }
      return this.index = i, null;
    }
    parseInfixOperator(n, i) {
      i ?? (i = { minPrec: 0 }), i.minPrec, i.minPrec === void 0 && (i = { ...i, minPrec: 0 });
      let t = this.index;
      for (let [r, o] of this.peekDefinitions("infix")) if (r.precedence >= i.minPrec) {
        this.index = t + o;
        let s = r.parse(this, n, i);
        if (s !== null) return s;
      }
      return this.index = t, null;
    }
    parseArguments(n = "enclosure", i) {
      if (this.atTerminator(i)) return null;
      let t = this.index, r = this.parseEnclosure();
      if (n === "enclosure") return r === null ? null : wn(r) ?? [];
      if (n === "implicit") {
        if (h(r) === "Delimiter") {
          let s = p(r, 1);
          return h(s) === "Sequence" ? v(s) : s === null ? [] : [s];
        }
        if (r !== null) return [r];
        let o = this.parseExpression({ ...i, minPrec: 390 });
        return o === null ? null : [o];
      }
      return this.index = t, null;
    }
    parseEnclosure() {
      let n = this.getDefs("matchfix"), i = this.index;
      for (let t of n) {
        if (this.index = i, !this.matchDelimiter(t.openTrigger, t.closeTrigger)) continue;
        let r = this.index;
        this.skipSpace();
        let o = this.parseExpression();
        if (this.skipSpace(), !this.matchBoundary()) {
          let a = this._boundaries[this._boundaries.length - 1].tokens;
          if (this.removeBoundary(), this.index = r, this.skipSpace(), o = this.parseExpression(), this.skipSpace(), !this.matchAll(a)) {
            if (this.index = i, !this.atEnd) continue;
            return null;
          }
        }
        let s = t.parse(this, o ?? "Nothing");
        if (s !== null) return s;
      }
      return this.index = i, null;
    }
    parseGenericExpression(n) {
      if (this.atTerminator(n)) return null;
      let i = this.index, t = null, r = this.peekDefinitions("expression") ?? [];
      for (let [o, s] of r) if (this.index = i + s, typeof o.parse == "function") {
        if (t = o.parse(this, n), t !== null) return t;
      } else return o.name;
      return this.index = i, null;
    }
    parseFunction(n) {
      if (this.atTerminator(n)) return null;
      let i = this.index, t = null;
      for (let [o, s] of this.peekDefinitions("function")) if (this.index = i + s, typeof o.parse == "function") {
        if (t = o.parse(this, n), t !== null) return t;
      } else {
        t = o.name;
        break;
      }
      if (t === null && (this.index = i, t = Kt(this), !this.isFunctionOperator(t))) return this.index = i, null;
      do {
        let o = this.parsePostfixOperator(t, n);
        if (o === null) break;
        t = o;
      } while (true);
      let r = this.parseArguments("enclosure", n);
      return r === null ? t : typeof t == "string" ? [t, ...r] : ["Apply", t, ...r];
    }
    parseSymbol(n) {
      if (this.atTerminator(n)) return null;
      let i = this.index;
      for (let [r, o] of this.peekDefinitions("symbol")) if (this.index = i + o, typeof r.parse == "function") {
        let s = r.parse(this, n);
        if (s !== null) return s;
      } else return r.name;
      this.index = i;
      let t = Kt(this);
      return t !== null && this.getIdentifierType(t) === "symbol" ? t : (this.index = i, null);
    }
    parseSupsub(n) {
      if (this.atEnd) return n;
      let i = this.index;
      this.skipSpace();
      let t = [], r = [], o = i;
      for (; this.peek === "_" || this.peek === "^"; ) {
        if (this.match("_")) if (o = this.index, this.match("_") || this.match("^")) r.push(this.error("syntax-error", o));
        else {
          let a = this.parseGroup() ?? this.parseToken() ?? this.parseStringGroup();
          if (a === null) return this.error("missing", i);
          r.push(a);
        }
        else if (this.match("^")) if (o = this.index, this.match("_") || this.match("^")) t.push(this.error("syntax-error", o));
        else {
          let a = this.parseGroup() ?? this.parseToken();
          if (a === null) return this.error("missing", i);
          t.push(a);
        }
        o = this.index, this.skipSpace();
      }
      if (t.length === 0 && r.length === 0) return this.index = i, n;
      let s = n;
      if (r.length > 0) {
        let a = [...this.getDefs("infix")].filter((u) => u.latexTrigger === "_");
        if (a) {
          let u = ["Subscript", s, r.length === 1 ? r[0] : ["List", ...r]];
          for (let l of a) if (typeof l.parse == "function" ? s = l.parse(this, u, { minPrec: 0 }) : s = u, s !== null) break;
        }
      }
      if (t.length > 0) {
        let a = [...this.getDefs("infix")].filter((u) => u.latexTrigger === "^");
        if (a) {
          let u = t.filter((l) => !G(l));
          if (u.length !== 0) {
            let l = u.length === 1 ? u[0] : ["List", ...u], f = ["Superscript", s, l];
            for (let c of a) if (typeof c.parse == "function" ? s = c.parse(this, f, { minPrec: 0 }) : s = f, s !== null) break;
          }
        }
      }
      return s === null && (this.index = i), s;
    }
    parsePostfixOperator(n, i) {
      if (n === null || this.atEnd) return null;
      let t = this.index;
      for (let [r, o] of this.peekDefinitions("postfix")) {
        this.index = t + o;
        let s = r.parse(this, n, i);
        if (s !== null) return s;
      }
      return this.index = t, null;
    }
    parseSyntaxError() {
      let n = this.index;
      if (this.peek === "^") return this.index += 1, ["Superscript", this.error("missing", n), C(this.parseGroup())];
      let i = this.peekDefinitions("operator");
      if (i.length > 0) {
        if (i = this.peekDefinitions("postfix"), i.length > 0) {
          let [a, u] = i[0];
          if (this.index += u, typeof a.parse == "function") {
            let l = a.parse(this, this.error("missing", n));
            if (l !== null) return l;
          }
          return a.name ? [a.name, this.error("missing", n)] : this.error("unexpected-operator", n);
        }
        if (i = this.peekDefinitions("prefix"), i.length > 0) {
          let [a, u] = i[0];
          if (this.index += u, typeof a.parse == "function") {
            let l = a.parse(this, { minPrec: 0 });
            if (l !== null) return l;
          }
          return a.name ? [a.name, this.parseExpression() ?? this.error("missing", n)] : this.error("unexpected-operator", n);
        }
        if (i = this.peekDefinitions("infix"), i.length > 0) {
          let [a, u] = i[0];
          this.index += u;
          let l = a.parse(this, this.error("missing", n), { minPrec: 0 });
          return l !== null ? l : this.error("unexpected-operator", n);
        }
      }
      let t = this.index, r = la(this);
      if (r !== null) return r;
      if (r = Kt(this), r !== null) return this.error(["unexpected-identifier", { str: r }], t);
      let o = this.peek;
      if (!o) return this.error("syntax-error", n);
      if (Im(this)) return this.error("unexpected-delimiter", n);
      if (o[0] !== "\\") return this.error(["unexpected-token", { str: on(o) }], n);
      let s = this.nextToken();
      if (this.skipSpaceTokens(), s === "\\end") {
        let a = this.parseStringGroup();
        return a === null ? this.error("expected-environment-name", n) : this.error(["unbalanced-environment", { str: a }], n);
      }
      for (; this.match("["); ) {
        let a = 0;
        for (; !this.atEnd && a === 0 && this.peek !== "]"; ) this.peek === "[" && (a += 1), this.peek === "]" && (a -= 1), this.nextToken();
        this.match("]");
      }
      for (; this.match("<{>"); ) {
        let a = 0;
        for (; !this.atEnd && a === 0 && this.peek !== "<}>"; ) this.peek === "<{>" && (a += 1), this.peek === "<}>" && (a -= 1), this.nextToken();
        this.match("<}>");
      }
      return this.error(["unexpected-command", { str: on(s) }], n);
    }
    parsePrimary(n) {
      if (this.atBoundary || this.atTerminator(n)) return null;
      let i = null, t = this.index;
      if (this.match("<}>")) return this.error("unexpected-closing-delimiter", t);
      if (i ?? (i = this.parseGroup()), i ?? (i = this.parseNumber()), i ?? (i = this.parseEnclosure()), i ?? (i = this.parseEnvironment(n)), i === null && this.matchAll(this._positiveInfinityTokens) && (i = "PositiveInfinity"), i === null && this.matchAll(this._negativeInfinityTokens) && (i = "NegativeInfinity"), i === null && this.matchAll(this._notANumberTokens) && (i = "NaN"), i === null && this.matchAll(this._imaginaryUnitTokens) && (i = "ImaginaryUnit"), i ?? (i = this.parseGenericExpression(n) ?? this.parseFunction(n) ?? this.parseSymbol(n) ?? la(this)), i !== null) {
        i = this.decorate(i, t);
        let r = null, o = this.index;
        do {
          if (r = this.parsePostfixOperator(i, n), i = r ?? i, this.index === o && r !== null) {
            this.index;
            break;
          }
          o = this.index;
        } while (r !== null);
      }
      return i !== null && (i = this.parseSupsub(i)), i === null && (i = this.options.parseUnexpectedToken?.(null, this) ?? null, i === null && this.peek.startsWith("\\") && (this.nextToken(), i = this.error("unexpected-command", t))), this.decorate(i, t);
    }
    parseExpression(n) {
      this.skipSpace();
      let i = this.index;
      if (this.atBoundary) return this.index = i, null;
      n ?? (n = { minPrec: 0 }), n.minPrec, n.minPrec === void 0 && (n = { ...n, minPrec: 0 });
      let t = this.parsePrefixOperator({ ...n, minPrec: 0 });
      if (t === null && (t = this.parsePrimary(n), G(t) && (t = null)), t !== null) {
        let r = false;
        for (; !r && !this.atTerminator(n); ) {
          this.skipSpace();
          let o = this.parseInfixOperator(t, n);
          if (o === null && this.peekDefinitions("operator").length === 0) {
            let s = this.parseExpression({ ...n, minPrec: 390 });
            s !== null ? h(t) === "InvisibleOperator" ? h(s) === "InvisibleOperator" ? o = ["InvisibleOperator", ...v(t), ...v(s)] : o = ["InvisibleOperator", ...v(t), s] : h(s) === "InvisibleOperator" ? o = ["InvisibleOperator", t, ...v(s)] : o = ["InvisibleOperator", t, s] : o === null && (o = this.options.parseUnexpectedToken?.(t, this) ?? null);
          }
          o !== null ? t = o : r = true;
        }
      }
      return this.decorate(t, i);
    }
    decorate(n, i) {
      if (n === null) return null;
      if (!this.options.preserveLatex) return n;
      let t = this.latex(i, this.index);
      return Array.isArray(n) ? n = { latex: t, fn: n } : typeof n == "number" ? n = { latex: t, num: Number(n).toString() } : typeof n == "string" ? n = { latex: t, sym: n } : typeof n == "object" && n !== null && (n.latex = t), n;
    }
    error(n, i) {
      let t;
      typeof n == "string" ? (n.startsWith("'"), t = { str: n }) : (n[0].startsWith("'"), t = ["ErrorCode", { str: n[0] }, ...n.slice(1)]);
      let r = this.latex(i, this.index);
      return r ? ["Error", t, ["LatexString", { str: r }]] : ["Error", t];
    }
    isFunctionOperator(n) {
      return n === null ? false : this.getIdentifierType(n) === "function";
    }
    *getDefs(n) {
      if (n === "operator") for (let i = this._dictionary.defs.length - 1; i >= 0; i--) {
        let t = this._dictionary.defs[i];
        /^prefix|infix|postfix/.test(t.kind) && (yield t);
      }
      else for (let i = this._dictionary.defs.length - 1; i >= 0; i--) {
        let t = this._dictionary.defs[i];
        t.kind === n && (yield t);
      }
    }
  };
  function _m(e12, n) {
    let i = e12.index, t = Kt(e12)?.trim();
    if (t === null) return 0;
    let r = t !== n ? 0 : e12.index - i;
    return e12.index = i, r;
  }
  function Im(e12) {
    let n = e12.peek;
    return Object.values(da).includes(n) || da[n] ? (e12.nextToken(), true) : ca[n] || Object.values(ca).includes(n) ? (e12.nextToken(), e12.nextToken(), true) : false;
  }
  function lc(e12) {
    let n = e12.index;
    if (e12.matchAll(["\\overset", "<{>"]) && (e12.match(".") || e12.match("\\cdots")) && e12.matchAll(["<}>", "<{>"])) {
      let i = e12.nextToken();
      if (i && /^\d$/.test(i) && e12.match("<}>")) return i;
    }
    return e12.index = n, null;
  }
  function Bm(e12) {
    let n = e12.peek;
    return n === "\\overline" || n === "\\overset" || n === "\\wideparent" || n === "\\overarc" || n === "(" || n === "\\left";
  }
  function fc(e12, n, i) {
    let t = new pa(de(e12), n, i), r = t.parseExpression();
    if (!t.atEnd) {
      let o = t.parseSyntaxError();
      r = r !== null ? ["Sequence", r, o] : o;
    }
    return r ?? (r = "Nothing"), i.preserveLatex && (Array.isArray(r) ? r = { latex: e12, fn: r } : typeof r == "number" ? r = { latex: e12, num: Number(r).toString() } : typeof r == "string" && r.startsWith("'") && r.endsWith("'") ? r = { latex: e12, str: r.slice(1, -1) } : typeof r == "string" ? r = { latex: e12, sym: r } : typeof r == "object" && r !== null && (r.latex = e12)), r;
  }
  function fa(e12) {
    return e12 === 0 ? { num: "0" } : Number.isInteger(e12) && Math.abs(e12) < O ? e12 : { num: e12.toString() };
  }
  var er = class e11 {
    constructor(n) {
      this.decimalSeparator = ".";
      this._cache = {};
      this._commonSymbols = { True: null, False: null, All: null, Nothing: null, None: null, Undefined: null, Pi: null, ImaginaryUnit: null, ExponentialE: null };
      this._commonNumbers = { "-5": null, "-4": null, "-3": null, "-2": null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null, 10: null, 11: null, 12: null, 36: null };
      this.generation = 0;
      if (n !== void 0 && typeof n != "object") throw Error("Unexpected argument");
      this.strict = true, this._stats = { highwaterMark: 0, symbols: /* @__PURE__ */ new Set(), expressions: /* @__PURE__ */ new Set() };
      let i = n?.precision ?? Oo;
      i === "machine" && (i = Math.floor(pn)), this._bignum = X.clone({ precision: i }), this._precision = i, this.tolerance = n?.tolerance ?? "auto", this._angularUnit = "rad", this.Zero = new De(this, 0), this.One = new De(this, 1), this.Half = new De(this, { rational: [1, 2] }), this.NegativeOne = new De(this, -1), this.Two = new De(this, 2), this.NaN = new De(this, Number.NaN), this.PositiveInfinity = new De(this, Number.POSITIVE_INFINITY), this.NegativeInfinity = new De(this, Number.NEGATIVE_INFINITY), this.I = new De(this, { im: 1 }), this.ComplexInfinity = new De(this, { re: 1 / 0, im: 1 / 0 }), this.reset(), this.context = { assumptions: new ct(), timeLimit: 2, memoryLimit: 1, recursionLimit: 1024, iterationLimit: Number.POSITIVE_INFINITY };
      for (let r of e11.getStandardLibrary("domains")) na(this, r);
      let t = n?.ids ?? e11.getStandardLibrary();
      for (let r of t) na(this, r);
      for (let r of Object.keys(this._commonSymbols)) {
        let o = new bi(this, r, { canonical: true });
        o.bind(), this._commonSymbols[r] = o;
      }
      this.True = this._commonSymbols.True, this.False = this._commonSymbols.False, this.Pi = this._commonSymbols.Pi, this.E = this._commonSymbols.ExponentialE, this.Nothing = this._commonSymbols.Nothing, this.pushScope(), Hl(this);
    }
    static getStandardLibrary(n = "all") {
      return ea(n);
    }
    static getLatexDictionary(n = "all") {
      return ac(n);
    }
    get latexDictionary() {
      return this._latexDictionaryInput ?? e11.getLatexDictionary();
    }
    set latexDictionary(n) {
      this._latexDictionaryInput = n, this._indexedLatexDictionary = aa(n, (i) => {
        throw Error(typeof i.message == "string" ? i.message : i.message.join(","));
      });
    }
    get indexedLatexDictionary() {
      return this._indexedLatexDictionary ?? (this._indexedLatexDictionary = aa(this.latexDictionary, (n) => console.error(n))), this._indexedLatexDictionary;
    }
    reset() {
      this._bignum, this.generation += 1, this._BIGNUM_NEGATIVE_ONE = this.bignum(-1), this._BIGNUM_NAN = this.bignum(NaN), this._BIGNUM_ZERO = this.bignum(0), this._BIGNUM_ONE = this.bignum(1), this._BIGNUM_TWO = this.bignum(2), this._BIGNUM_HALF = this._BIGNUM_ONE.div(this._BIGNUM_TWO), this._BIGNUM_PI = this._BIGNUM_NEGATIVE_ONE.acos();
      let n = this._stats.symbols.values(), i = this._stats.expressions.values();
      this._stats.symbols = /* @__PURE__ */ new Set(), this._stats.expressions = /* @__PURE__ */ new Set();
      for (let r of n) r.reset();
      for (let r of i) r.reset();
      for (let r of Object.values(this._commonSymbols)) r?.reset();
      let t = this.context;
      for (; t; ) {
        if (t.ids) for (let [r, o] of t.ids) o.reset();
        t = t.parentScope ?? null;
      }
      for (let r of Object.keys(this._cache)) this._cache[r].value && (this._cache[r].purge ? this._cache[r].value = this._cache[r].purge(this._cache[r].value) : delete this._cache[r]);
    }
    _register(n) {
      this._stats.highwaterMark += 1;
    }
    _unregister(n) {
    }
    get stats() {
      let n = this._stats.expressions;
      return this._stats.expressions = null, this._stats.expressions = n, { ...this._stats };
    }
    get precision() {
      return this._precision;
    }
    set precision(n) {
      n === "machine" && (n = pn), n === "auto" && (n = Oo);
      let i = this._precision;
      if (n !== i) {
        if (typeof n != "number" || n <= 0) throw Error('Expected "machine" or a positive number');
        this._precision = Math.max(n, pn), this._bignum = this._bignum.config({ precision: this._precision }), this.tolerance = "auto", this.reset();
      }
    }
    get angularUnit() {
      return this._angularUnit;
    }
    set angularUnit(n) {
      if (n !== this._angularUnit) {
        if (typeof n != "string") throw Error("Expected a string");
        this._angularUnit = n, this.reset();
      }
    }
    get timeLimit() {
      let n = this.context;
      for (; n; ) {
        if (n.timeLimit !== void 0) return n.timeLimit;
        n = n.parentScope ?? null;
      }
      return 2;
    }
    get iterationLimit() {
      let n = this.context;
      for (; n; ) {
        if (n.iterationLimit !== void 0) return n.iterationLimit;
        n = n.parentScope ?? null;
      }
      return 1024;
    }
    get recursionLimit() {
      let n = this.context;
      for (; n; ) {
        if (n.recursionLimit !== void 0) return n.recursionLimit;
        n = n.parentScope ?? null;
      }
      return 1024;
    }
    get tolerance() {
      return this._tolerance;
    }
    set tolerance(n) {
      n === "auto" && (n = ni), (!Number.isFinite(n) || n < 0) && (n = Math.pow(10, -this._precision + 2)), this._tolerance = n, this._bignumTolerance = this.bignum(n), this._negBignumTolerance = this.bignum(-n);
    }
    chop(n) {
      return typeof n == "number" ? Math.abs(n) <= this._tolerance ? 0 : n : n instanceof X ? n.isPositive() && n.lte(this._bignumTolerance) || n.isNegative() && n.gte(this._negBignumTolerance) || n.isZero() ? 0 : n : n instanceof F && Math.abs(n.re) <= this._tolerance && Math.abs(n.im) <= this._tolerance ? 0 : n;
    }
    bignum(n) {
      if (typeof n == "bigint") return new this._bignum(n.toString());
      try {
        return new this._bignum(n);
      } catch (i) {
        console.error(i.message);
      }
      return this._BIGNUM_NAN;
    }
    complex(n, i) {
      return n instanceof X && (n = n.toNumber()), i instanceof X && (i = i.toNumber()), new F(n, i);
    }
    _numericValue(n) {
      if (n instanceof V) return n.asExact ?? n;
      let i = (r) => this.bignum(r), t = this._precision > pn ? (r) => new ui(r, i) : (r) => new li(r, i);
      if (typeof n == "number") return Number.isInteger(n) ? new j(n, t, i) : t(n);
      if (typeof n == "bigint") return new j(n, t, i);
      if (Bn(n)) return new j({ rational: n }, t, i);
      if (n instanceof X) return n.isInteger() && n.e <= eu ? new j(K(n.toString()), t, i) : t(n);
      if (n instanceof F) return n.im === 0 ? this._numericValue(n.re) : t({ re: n.re, im: n.im });
      if ("im" in n || "re" in n) return n.im !== void 0 && n.im !== 0 ? t(n) : n.re instanceof X && n.re.isInteger() ? new j({ rational: [K(n.re.toString()), BigInt(1)] }, t, i) : typeof n.re == "number" && Number.isInteger(n.re) ? new j({ rational: [n.re, 1] }, t, i) : t(n);
      if ("radical" in n || "rational" in n) {
        if (n.radical !== void 0 && (!Number.isInteger(n.radical) || n.radical >= O)) throw Error("Unexpected value for radical part:" + n.radical);
        return n.rational && ne(n.rational) && (!Number.isInteger(n.rational[0]) || !Number.isInteger(n.rational[1])) ? t(n) : new j(n, t, i);
      }
      throw Error("Unexpected value");
    }
    get costFunction() {
      return this._cost ?? ta;
    }
    set costFunction(n) {
      typeof n != "function" && (this._cost = ta), this._cost = n;
    }
    lookupSymbol(n, i, t) {
      if (!this.strict) {
        for (t ?? (t = this.context ?? void 0); t; ) {
          let o = t.ids?.get(n);
          if (o && o instanceof fe) return o;
          t = t.parentScope;
        }
        return;
      }
      if (typeof n != "string") throw Error("Expected a string");
      if (n.length === 0 || !this.context) return;
      let r = t ?? this.context;
      if (i) for (t = r; t; ) {
        if (t.ids) {
          for (let [o, s] of t.ids) if (s instanceof fe && s.wikidata === i) return s;
        }
        t = t.parentScope;
      }
      for (t = r; t; ) {
        let o = t.ids?.get(n);
        if (o instanceof fe) return o;
        t = t.parentScope;
      }
    }
    lookupFunction(n, i) {
      if (typeof n == "string" && this.context) for (i ?? (i = this.context); i; ) {
        let t = i.ids?.get(n);
        if (t instanceof Ge) return t;
        i = i.parentScope;
      }
    }
    defineSymbol(n, i) {
      if (!this.context) throw Error("Symbol cannot be defined: no scope available");
      if (n.length === 0 || !xe(n)) throw Error(`Invalid identifier "${n}": ${Xe(n)}}`);
      return this._defineSymbol(n, i);
    }
    _defineSymbol(n, i) {
      var r;
      (r = this.context).ids ?? (r.ids = /* @__PURE__ */ new Map());
      let t = new fe(this, n, i);
      return t.name && this.context.ids.set(t.name, t), this.generation += 1, t;
    }
    defineFunction(n, i) {
      if (!this.context) throw Error("Function cannot be defined: no scope available");
      if (n.length === 0 || !xe(n)) throw Error(`Invalid identifier "${n}": ${Xe(n)}}`);
      return this._defineFunction(n, i);
    }
    _defineFunction(n, i) {
      var r;
      (r = this.context).ids ?? (r.ids = /* @__PURE__ */ new Map());
      let t = fo(this, n, i);
      return t.name && this.context.ids.set(t.name, t), this.generation += 1, t;
    }
    pushScope(n) {
      if (this.context === null) throw Error("No parent scope available");
      return this.context = { timeLimit: this.context.timeLimit, memoryLimit: this.context.memoryLimit, recursionLimit: this.context.recursionLimit, iterationLimit: this.context.iterationLimit, ...n ?? {}, parentScope: this.context, assumptions: new ct(this.context.assumptions) }, this;
    }
    popScope() {
      if (!this.context) throw Error("No scope available");
      return this.context = this.context.parentScope ?? null, this.context, this.context, this;
    }
    swapScope(n) {
      let i = this.context;
      return n && (this.context = n), i;
    }
    _printScope(n, i, t = 0) {
      if (n ?? (n = { details: false, maxDepth: 1 }), i ?? (i = this.context), !i || n.maxDepth && t > n.maxDepth) return null;
      let r = `${Mf}[undefined]${Wt}`;
      if (t === 0 ? console.group("current scope - level 0") : console.groupCollapsed(i.parentScope ? `scope - level ${t}` : `root scope - level ${t}`), i.ids) {
        let o = 0;
        for (let [s, a] of i.ids) {
          let u = `${Cf}${s}${Wt}`;
          try {
            if (a instanceof fe) {
              let l = a.value?.isValid ? a.value.toString() : a.value ? `${oa}${a.value.toString()}${Wt}` : r;
              console.info(`${u}: ${a.type?.toString() ?? r} = ${l}`);
            } else a instanceof Ge && (typeof a.evaluate == "function" ? console.info(`${u}(): ${n.details ? a.evaluate.toString() : "[native-code]"}`) : a.evaluate === void 0 ? console.info(`${u}(): ${r}`) : console.info(`${u}(): ${a.toString()}`));
            o === 11 && console.groupCollapsed(`... and ${i.ids.size - o} more`), o += 1;
          } catch (l) {
            console.info(`${u}: ${oa}${l.message}${Wt}`);
          }
        }
        o >= 11 && console.groupEnd();
      }
      if (i.assumptions) {
        let o = [...i.assumptions.entries()].map(([s, a]) => `${s}: ${a}`);
        if (o.length > 0) {
          console.groupCollapsed(`${o.length} assumptions)`);
          for (let s of o) console.info(s);
          console.groupEnd();
        }
      }
      return i.parentScope && this._printScope(n, i.parentScope, t + 1), console.groupEnd(), this.context;
    }
    resetContext() {
      if (this.context) for (let [n, i] of this.context.ids ?? []) i instanceof fe ? i.constant || (i.value = void 0) : i instanceof Ge && (i.evaluate = void 0, i.canonical = void 0);
    }
    declare(n, i) {
      if (typeof n != "string" || i === void 0) {
        for (let [s, a] of Object.entries(n)) this.declare(s, a);
        return this;
      }
      let [t, r] = cs(n);
      if (r !== void 0) throw Error(`Unexpected arguments with ${n}. Use 'ce.assign()' instead to assign a value, or a use a function definition with 'ce.declare()'.`);
      if (t === "Nothing") return this;
      if (this.context?.ids?.get(t)) {
        let s = this.context.ids.get(t);
        if (this.generation += 1, s instanceof fe && s.inferredType) {
          try {
            if (Nt(i)) s.update(i);
            else {
              if (vt(i)) throw new Error("Cannot redeclare a symbol as a function");
              s.type = B(i), s.inferredType = false;
            }
          } catch (a) {
            console.error([`
Invalid definition for ${t}`, a.message].join(`
|   `) + `
`);
          }
          return this;
        }
        throw s instanceof Ge ? Error(`The symbol "${t}" has already been declared in the current scope as a function with signature ${s.signature.toString()}.`) : Error(`The symbol "${t}" has already been declared in the current scope.`);
      }
      let o = i;
      if (!o) throw Error(`Expected a definition for ${t}`);
      if (typeof o == "object" && "type" in o && (typeof o.type == "string" && g(o.type, "function") || o.type && Tn(o.type))) throw new Error(`Invalid definition for "${t}": use a FunctionDefinition to define a function or use 'ce.declare("${t}", "function")'`);
      if (Nt(o)) return this.defineSymbol(t, o), this;
      if (vt(o)) return this.defineFunction(t, o), this;
      {
        let s = B(o);
        if (!Tn(s)) throw typeof o == "object" && "N" in o ? Error([`Invalid argument for "${t}"`, "Use `evaluate` handler instead of `N`"].join(`
|   `)) : Error([`Invalid argument for "${t}"`, o.toString(), "Use a type, a `FunctionDefinition` or a `SymbolDefinition`"].join(`
|   `));
        if (s === "function") this.defineFunction(t, { signature: "...any -> any" });
        else if (ht(s)) this.defineFunction(t, { signature: s });
        else {
          if (r) throw Error(`Unexpected arguments with type for "${t}"`);
          this.defineSymbol(t, { type: s });
        }
      }
      return this;
    }
    assign(n, i) {
      if (typeof n == "object") {
        for (let [u, l] of Object.entries(n)) this.assign(u, l);
        return this;
      }
      let [t, r] = cs(n);
      if (t === "Nothing") return this;
      let o = i;
      if (typeof o == "boolean" && (o = o ? this.True : this.False), typeof o == "string") {
        let u = o.trim();
        u.startsWith("$$") && u.endsWith("$$") ? o = this.parse(u.slice(2, -2), { canonical: false }) : u.startsWith("$") && u.endsWith("$") ? o = this.parse(u.slice(1, -1), { canonical: false }) : o = this.string(o);
      }
      let s = this.lookupSymbol(t);
      if (s) {
        if (s.constant) throw Error(`Cannot assign a value to the constant "${t}"`);
        if (!s.inferredType && ma(o)) throw Error(`Cannot assign a function to symbol "${t}"`);
        let u = s.scope;
        if (u?.ids?.delete(s.name), !r && !ma(o)) return o == null ? s.value = void 0 : s.value = this.box(o), u?.ids?.set(s.name, s), this.generation += 1, this;
      }
      let a = this.lookupFunction(t);
      if (a) {
        let u = a.scope;
        if (u?.ids?.delete(a.name), o == null) return this;
        if (typeof o == "function") {
          let d = this.swapScope(u);
          return this.defineFunction(t, { evaluate: o }), this.swapScope(d), this;
        }
        if (r && ma(o)) throw Error(`Unexpected arguments for "${t}"`);
        let l = r ? this.box(["Function", o, ...r]) : this.box(o);
        if (!l.isValid) throw Error(`Invalid function ${l.toString()}`);
        let f = this.swapScope(u), c = Ve(l);
        return this.defineFunction(t, { evaluate: (d) => c(d) }), this.swapScope(f), this.generation += 1, this;
      }
      if (o == null) return this.declare(t, { inferred: true, type: "unknown" }), this;
      if (typeof o == "function") return this.defineFunction(t, { evaluate: o }), this;
      if (o instanceof Q && (o.type === "function" || ht(o.type))) return this.defineFunction(t, { evaluate: o }), this;
      if (Array.isArray(o) || o instanceof Q || r) {
        let u = this.box(o, { canonical: false });
        if (u.operator === "Hold") return this.defineSymbol(t, { value: u, type: "unknown" }), this;
        if (u.operator === "Function") return u = this.box(["Function", ...u.ops, ...(r ?? []).map((f) => this.symbol(f))]), this.defineFunction(t, { evaluate: u }), this;
        let l = [...u.unknowns].sort();
        if (l.length === 0) {
          let f = u.evaluate();
          return this.defineSymbol(t, { value: f }), this;
        }
        if (l.some((f) => /\_[\d]+/.test(f))) return u = this.box(["Function", u]), this.defineFunction(t, { evaluate: u }), this;
        if (r && r.length > 0) return this.pushScope(), u = this.box(["Function", u, ...r]), this.popScope(), this.defineFunction(t, { evaluate: u }), this;
        this.pushScope(), o = u.evaluate(), this.popScope();
      }
      return this.defineSymbol(t, { value: o }), this;
    }
    _assign(n, i) {
      let t = this.lookupSymbol(n);
      if (t) {
        t.value = i.evaluate(), this.generation += 1;
        return;
      }
      let r = this.lookupFunction(n);
      if (r) {
        r.canonical = void 0, r.evaluate = i, this.generation += 1;
        return;
      }
      `${n}`;
    }
    shouldContinueExecution() {
      return this.deadline === void 0 || this.deadline >= Date.now();
    }
    checkContinueExecution() {
      if (!this.shouldContinueExecution()) throw new Error("timeout");
    }
    cache(n, i, t) {
      if (this._cache[n] === void 0) try {
        this._cache[n] = { build: i, purge: t, value: i() };
      } catch (r) {
        console.error(`Fatal error building cache "${n}":
	 ${r.toString()}`);
      }
      return this._cache[n]?.value;
    }
    box(n, i) {
      return ln(this, n, i);
    }
    function(n, i, t) {
      return uo(this, n, i, t);
    }
    error(n, i) {
      let t;
      typeof n == "string" ? t = this.string(n) : t = this._fn("ErrorCode", n.map((s) => this.string(s)));
      let r;
      i && bt(i) ? r = this._fn("LatexString", [this.string($n(i))]) : typeof i == "string" && i.length > 0 && (r = this.string(i));
      let o = [this.box(t)];
      return r && o.push(r), new ze(this, "Error", o, { canonical: false });
    }
    typeError(n, i, t) {
      return i ? this.error(["incompatible-type", P(n), P(i)], t) : this.error(["incompatible-type", P(n)], t);
    }
    hold(n) {
      return this._fn("Hold", [this.box(n, { canonical: false })]);
    }
    tuple(...n) {
      return new ze(this, "Tuple", n.map((i) => typeof i == "number" ? this.number(i) : i.canonical), { canonical: true });
    }
    string(n, i) {
      return new bn(this, n, i);
    }
    symbol(n, i) {
      if (i = i ? { ...i } : {}, "canonical" in i || (i.canonical = true), n = n.normalize(), n === "NaN") return this.NaN;
      if (n === "Infinity" || n === "+Infinity" || n === "PositiveInfinity") return this.PositiveInfinity;
      if (n === "-Infinity" || n === "NegativeInfinity") return this.NegativeInfinity;
      if (n === "Half") return this.Half;
      if (this.strict && !xe(n)) {
        let r = i?.metadata?.latex;
        return this.error(["invalid-identifier", Xe(n)], r ? `$$${r}$$` : n);
      }
      if (i?.metadata?.latex !== void 0 && i.canonical !== true) return new bi(this, n, i);
      let t = this._commonSymbols[n];
      return t && (!i?.metadata?.wikidata || !t.wikidata || t.wikidata === i.metadata.wikidata) ? t : i.canonical === true ? Af(this, n) : new bi(this, n, i);
    }
    number(n, i) {
      var o;
      let t = i?.metadata, r = false;
      if ((!i || i.canonical === void 0 || i.canonical === "Number" || i.canonical === true || Array.isArray(i.canonical) && i.canonical.includes("Number")) && (r = true), !r && Bn(n)) return this._fn("Rational", [this.number(n[0]), this.number(n[1])], { ...t, canonical: false });
      if (n = lo(this, n), t === void 0) {
        if (typeof n == "number") {
          let s = n;
          if (s === 1) return this.One;
          if (s === 0) return this.Zero;
          if (s === -1) return this.NegativeOne;
          if (s === 2) return this.Two;
          if (Number.isInteger(s) && this._commonNumbers[s] !== void 0) return (o = this._commonNumbers)[s] ?? (o[s] = new De(this, n)), this._commonNumbers[s];
          if (Number.isNaN(s)) return this.NaN;
          if (!Number.isFinite(s)) return s < 0 ? this.NegativeInfinity : this.PositiveInfinity;
        } else if (n instanceof V) {
          if (n.isZero) return this.Zero;
          if (n.isOne) return this.One;
          if (n.isNegativeOne) return this.NegativeOne;
          if (n.isNaN) return this.NaN;
          if (n.isNegativeInfinity) return this.NegativeInfinity;
          if (n.isPositiveInfinity) return this.PositiveInfinity;
        }
      }
      return new De(this, n, { metadata: t });
    }
    rules(n, i) {
      return Ut(this, n, i);
    }
    getRuleSet(n) {
      if (n ?? (n = "standard-simplification"), n === "standard-simplification") return this.cache("standard-simplification-rules", () => Ut(this, Bf, { canonical: true }));
      if (n === "solve-univariate") return this.cache("univariate-roots-rules", () => Ut(this, tl));
      if (n === "harmonization") return this.cache("harmonization-rules", () => Ut(this, rl));
    }
    _fn(n, i, t) {
      let r = t?.canonical ?? true;
      return new ze(this, n, i, { ...t, canonical: r });
    }
    parse(n, i) {
      if (n == null) return null;
      if (typeof n != "string") throw Error("ce.parse(): expected a LaTeX string");
      let t = { imaginaryUnit: "\\imaginaryI", positiveInfinity: "\\infty", negativeInfinity: "-\\infty", notANumber: "\\operatorname{NaN}", decimalSeparator: this.decimalSeparator, digitGroup: 3, digitGroupSeparator: "\\,", exponentProduct: "\\cdot", beginExponentMarker: "10^{", endExponentMarker: "}", truncationMarker: "\\ldots", repeatingDecimal: "auto", skipSpace: true, parseNumbers: "auto", getIdentifierType: (o) => this.lookupFunction(o) ? "function" : "symbol", parseUnexpectedToken: (o, s) => null, preserveLatex: false }, r = fc($n(n) ?? n, this.indexedLatexDictionary, { ...t, ...i });
      if (r === null) throw Error("Failed to parse LaTeX string");
      return this.box(r, { canonical: i?.canonical ?? true });
    }
    get assumptions() {
      if (!this.context) throw Error("No scope available");
      return this.context.assumptions ? this.context.assumptions : (this.context.assumptions = new ct(), this.context.assumptions);
    }
    ask(n) {
      let i = this.box(n, { canonical: false }), t = [];
      for (let [r, o] of this.assumptions) {
        let s = i.match(r);
        s !== null && o === true && t.push(s);
      }
      return t;
    }
    verify(n) {
      return false;
    }
    assume(n) {
      try {
        let i = bt(n) ? this.parse(n, { canonical: false }) : this.box(n, { canonical: false });
        return this.generation += 1, ol(i);
      } catch (i) {
        throw console.error(i.message.toString()), i;
      }
    }
    forget(n) {
      if (!this.context) throw Error("No scope available");
      if (n === void 0) {
        if (this.context.ids) for (let i of this.context.ids.keys()) this.forget(i);
        this.generation += 1, this.assumptions.clear();
        return;
      }
      if (Array.isArray(n)) {
        for (let i of n) this.forget(i);
        return;
      }
      if (typeof n == "string") {
        if (this.context.ids) {
          let i = this.context.ids.get(n);
          i instanceof fe ? i.value = void 0 : i instanceof Ge && (i.evaluate = void 0, i.canonical = void 0);
        }
        for (let [i, t] of this.assumptions) i.symbols.includes(n) && this.assumptions.delete(i);
      }
      this.generation += 1;
    }
  };
  function ma(e12) {
    return !!(typeof e12 == "function" || e12 instanceof Q && g(e12.type, "function"));
  }
  function ga(e12) {
    return e12.fg === void 0 && e12.bg === void 0 && (e12.weight === void 0 || e12.weight === "normal") && (e12.italic === void 0 || e12.italic === false);
  }
  var mo = class {
    constructor(n) {
      this.width = n?.width, this.indent = n?.indent ?? 0;
    }
    renderBlock(n) {
      let i = "spans" in n ? this.renderSpans(n.spans) : n.blocks.map((t) => this.renderBlock(t)).join(`
`);
      return n.tag === "paragraph" ? `
${nr(i, this.width).join(`
`)}

` : n.tag === "blockquote" ? nr(i, (this.width ?? 40) - 4).map((r) => `>  ${r}`).join(`
`) : n.tag === "note" ? nr(i, (this.width ?? 40) - 3).map((r) => `|  ${r}`).join(`
`) : n.tag === "warning" ? nr(i, (this.width ?? 40) - 3).map((r) => `!! ${r}`).join(`
`) : n.tag === "error" ? nr(i, (this.width ?? 40) - 3).map((r) => `XX ${r}`).join(`
`) : i;
    }
    renderSpans(n) {
      return n.map((i) => this.renderSpan(i)).join("");
    }
    display(n) {
      Array.isArray(n) ? console.info(this.renderSpans(n)) : console.info(this.renderBlock(n));
    }
  };
  var ha = class extends mo {
    renderSpan(n) {
      let i = typeof n.content == "string" ? n.content : this.renderSpans(n.content);
      return i = i.replace(/[\u2551\u2502\u2503\u2506\u2507\u250a\u250b]/g, "|").replace(/—/g, "--").replace(/–/g, "-").replace(/‘|’/g, "'").replace(/“|”/g, '"').replace(/…/g, "..."), n.italic ? n.weight === "bold" ? i = `***${i}***` : i = `*${i}*` : n.weight === "bold" && (i = `**${i}**`), n.mono && (i = `\`${i}\``), i;
    }
    constructor(n) {
      super(n);
    }
  };
  var go = class extends mo {
    constructor(i) {
      super();
      this.state = {};
      this.colorMode = i.mode;
    }
    renderBlock(i) {
      return super.renderBlock(i);
    }
    getStyleCodes(i) {
      let t = [], r = i, o = this.state;
      return ga(r) && !ga(o) ? (t.push(0), o.fg = void 0, o.bg = void 0, o.weight = void 0, o.italic = void 0) : (o.weight !== r.weight && (r.weight === "bold" ? (o.weight === "thin" && t.push(22), t.push(1)) : r.weight === "thin" ? (o.weight === "bold" && t.push(22), t.push(2)) : o.weight !== void 0 && o.weight !== "normal" && t.push(22)), o.italic !== r.italic && (r.italic === true ? t.push(3) : o.italic && t.push(23)), o.bg !== r.bg && (r.bg !== void 0 ? t.push(...Lf(r.bg, this.colorMode)) : o.bg !== void 0 && t.push(49)), o.fg !== r.fg && (r.fg !== void 0 ? t.push(...Of(r.fg, this.colorMode)) : o.fg !== void 0 && t.push(39))), this.state.fg = r.fg, this.state.bg = r.bg, this.state.weight = r.weight, this.state.italic = r.italic, t;
    }
    renderSpan(i) {
      if (typeof i.content == "string" && /^\s+$/.test(i.content) && this.state.bg === void 0) return i.content;
      let t = this.getStyleCodes(i), r = typeof i.content == "string" ? i.content : this.renderSpans(i.content);
      return i.mono && t.push(7), t.length > 0 && (r = `\x1B[${t.join(";")}m${r}`), i.mono && (r = `${r}\x1B[27m`), r;
    }
    renderSpans(i) {
      let t = i.map((r) => this.renderSpan(r)).join("");
      return ga(this.state) || (t += "\x1B[0m"), t;
    }
  };
  var km = { none: new ha(), basic: new go({ mode: "basic" }), full: new go({ mode: "full" }) }[wm()];
  var nr = (e12, n) => {
    if (n === void 0 || n <= 0) return [e12];
    let i = /\x1B\[[0-9;]*[A-Za-z]/g, t = [], r = 0, o;
    for (; o = i.exec(e12); ) {
      let a = o[0], u = o.index;
      u != r && t.push(["string", e12.slice(r, u)]), t.push(["ansi", a]), r = u + a.length;
    }
    r != e12.length - 1 && t.push(["string", e12.slice(r, e12.length)]);
    let s = 0;
    return t.reduce((a, [u, l]) => {
      if (u === "string") if (s + l.length > n) for (; l.length; ) {
        let f = l.slice(0, n - s), c = l.slice(n - s, l.length);
        a[a.length - 1] += f, s += f.length, l = c, l.length && (a.push(""), s = 0);
      }
      else a[a.length - 1] += l, s += l.length;
      else a[a.length - 1] += l;
      return a;
    }, [""]);
  };
  function wm() {
    if (typeof process > "u") return globalThis.navigator.userAgentData && navigator.userAgentData.brands.find(({ brand: n }) => n === "Chromium")?.version > 93 ? "full" : "none";
    if (process.env.JEST_WORKER_ID !== void 0 || process.env.NO_COLOR || process.env.NODE_DISABLE_COLORS || process.env.FORCE_COLOR === "0" || process.env.FORCE_COLOR === "false") return "none";
    if (process.env.FORCE_COLOR === "1" || process.env.FORCE_COLOR === "true" || typeof process.env.FORCE_COLOR == "string" && process.env.FORCE_COLOR.length === 0) return "basic";
    if (process.env.FORCE_COLOR === "2") return "256";
    if (typeof process.env.FORCE_COLOR == "string" && process.env.FORCE_COLOR.length === 0) return "basic";
    if (process.env.FORCE_COLOR === "3") return "full";
    if (process.stdout && !process.stdout.isTTY || process.stderr && !process.stderr.isTTY) return "none";
    if ("CI" in process.env) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "BUILDKITE", "DRONE"].some((e12) => e12 in process.env) ? "basic" : "GITHUB_ACTIONS" in process.env || "GITEA_ACTIONS" in process.env ? "full" : "none";
    if ("TERM_PROGRAM" in process.env) switch (process.env.TERM_PROGRAM) {
      case "iTerm.app":
        return Number.parseInt((process.env.TERM_PROGRAM_VERSION || "").split(".")[0], 10) >= 3 ? "full" : "256";
      case "Apple_Terminal":
        return "256";
    }
    if (process.env.COLORTERM === "truecolor" || process.env.COLORTERM === "24bit") return "full";
    if (typeof process.env.TERM == "string") {
      let e12 = process.env.TERM.toLowerCase();
      if (e12 === "dumb") return "none";
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(e12)) return "basic";
      if (e12 === "xterm-kitty") return "full";
      if (/-256(color)?$/i.test(e12)) return "256";
    }
    return "COLORTERM" in process.env, "basic";
  }
  globalThis[Symbol.for("io.cortexjs.compute-engine")] = { ComputeEngine: er.prototype.constructor, version: "0.27.0" };

  // main.ts
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var equationIn = document.getElementById("eq-1");
  window.addEventListener("resize", () => {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    render();
  });
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  var engine = new er();
  var sliders = [];
  var expr = engine.parse(equationIn.value);
  var equation = expr.compile();
  equationIn.addEventListener("input", () => {
    let expr2 = engine.parse(equationIn.value);
    console.log(expr2.unknowns);
    out:
      for (let i of expr2.unknowns) {
        if (i != "x" && i != "y") {
          for (let i2 of sliders) {
            if (i2.id == "unknown-" + i2) {
              continue out;
            }
          }
          let s = document.createElement("input");
          s.type = "range";
          s.id = "unknown-" + i;
          s.min = "-100";
          s.max = "100";
          s.addEventListener("input", () => {
            let vars = {};
            for (let i2 of sliders) {
              vars[i2.id.replace("unknown-", "")] = parseInt(i2.value) / 100;
            }
            equation = expr2.compile({ vars });
            render();
          });
          sliders.push(s);
          document.body.appendChild(s);
        }
      }
    console.log(sliders);
    out:
      for (let i of sliders) {
        for (let j2 of expr2.unknowns) {
          if (i.id == "unknown-" + j2) {
            continue out;
          }
        }
        console.log(i);
        i.remove();
        sliders.splice(sliders.indexOf(i), 1);
      }
  });
  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    let interval = 0.01;
    let xMin = -10;
    let xMax = 10;
    let prevYval = equation({ x: xMin });
    ctx.moveTo(xMin, prevYval);
    for (let x2 = xMin + interval; x2 <= xMax; x2 += interval) {
      const y = equation({ x: x2 });
      const canvasX = (x2 - xMin) / (xMax - xMin) * canvas.width;
      const canvasY = (y + 1) / 2 * canvas.height;
      ctx.fillStyle = "black";
      ctx.strokeStyle = "black";
      ctx.lineTo(canvasX, canvasY);
    }
    ctx.stroke();
  }
  render();
})();
/*! Bundled license information:

@cortex-js/compute-engine/dist/compute-engine.min.esm.js:
  (*! Bundled license information:
  
  complex-esm/dist/src/complex.js:
    (**
     * @license Complex.js v2.1.1 12/05/2020
     *
     * Copyright (c) 2020, Robert Eisele (robert@xarg.org)
     * Dual licensed under the MIT or GPL Version 2 licenses.
     **)
  
  decimal.js/decimal.mjs:
    (*!
     *  decimal.js v10.4.3
     *  An arbitrary-precision Decimal type for JavaScript.
     *  https://github.com/MikeMcl/decimal.js
     *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
     *  MIT Licence
     *)
  *)
*/
