﻿!function (r) { function e(r) { return r * Math.PI / 180 } function t(t, a, s) { var o = r("#" + s + "canvas")[0], n = r("#" + s + "canvas"), i = o.getContext("2d"), p = o.width / 2, d = o.height / 2; i.beginPath(), i.arc(p, d, r(n).attr("data-radius"), -e(90), -e(90) + e(t / 100 * 360), !1), i.fillStyle = "transparent", i.fill(), i.lineWidth = r(n).attr("data-width"), i.strokeStyle = r(n).attr("data-stroke"), i.stroke(), i.closePath(), "true" == r(n).attr("data-text").toLocaleLowerCase() && r("#" + s + " .clProg").val(a + ("true" == r(n).attr("data-percent").toLocaleLowerCase() ? "%" : "")) } r.fn.circularloader = function (e) { function a() { u.beginPath(), u.arc(f, h, i, 0, 2 * Math.PI, !1), u.fillStyle = n.backgroundColor, u.fill(), u.lineWidth = p, u.strokeStyle = n.progressBarBackground, u.stroke(), u.closePath(), l > 0 && t(l, d, o) } var s = this[0], o = s.id; if (0 == r("#" + o + " canvas").length) { var n = r.extend({ backgroundColor: "#ffffff", fontColor: "#000000", fontSize: "40px", radius: 70, progressBarBackground: "#cdcdcd", progressBarColor: "#aaaaaa", progressBarWidth: 25, progressPercent: 0, progressValue: 0, showText: !0 }, e), i = parseInt(n.radius), p = parseInt(n.progressBarWidth), d = parseInt(parseInt(n.progressValue) > 0 ? n.progressValue : n.progressPercent), l = parseInt(n.progressPercent), c = "color:" + n.fontColor + ";font-size:" + parseInt(n.fontSize) + "px;width:" + 2 * (i + p) + "px;vertical-align:middle;position:relative;background-color:transparent;border:0 none;margin-top:-" + (2 * (i + p) - parseInt(n.fontSize) / 2) + "px;margin-left:-" + 2 * (i + p) + "px;text-align:center;" + (n.showText ? "" : "display:none;"); r('<canvas data-width="' + p + '" data-radius="' + i + '" data-stroke="' + n.progressBarColor + '" data-text=' + n.showText + " data-percent=" + (void 0 == e.progressValue ? !0 : !1) + ' id="' + o + 'canvas" width=' + 2 * (n.radius + n.progressBarWidth) + " height=" + 2 * (n.radius + n.progressBarWidth) + "></canvas>").appendTo(s), r('<input class="clProg" style="' + c + '" value="' + d + (void 0 == e.progressValue ? "%" : "") + '"></input>').appendTo(s); { var g = r("#" + o + "canvas")[0], u = g.getContext("2d"), f = g.width / 2, h = g.height / 2; r("#" + o + "canvas").offset().left, r("#" + o + "canvas").offset().top } a() } else if (void 0 != e.progressPercent || void 0 != e.progressValue) { var l = 0, d = 0; l = void 0 == e.progressPercent ? parseInt(e.progressValue) > 100 ? 100 : parseInt(e.progressValue) : parseInt(e.progressPercent) > 100 ? 100 : parseInt(e.progressPercent), d = void 0 == e.progressValue ? parseInt(e.progressPercent) > 100 ? 100 : parseInt(e.progressPercent) : parseInt(e.progressValue), t(l, d, o) } return this } }(jQuery);