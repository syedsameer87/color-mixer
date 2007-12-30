var r_pwr = "00";
var g_pwr = "00";
var b_pwr = "00";
var r_col = 0;
var g_col = 0;
var b_col = 0;
var hex_color = "#000000"

var rThumb = document.getElementById("thumb1");
var gThumb = document.getElementById("thumb2");
var bThumb = document.getElementById("thumb3");
var scrolldiv=document.getElementById("scrollcontent");

Drag.init(rThumb, null, 0, 0, 0, 163);
Drag.init(gThumb, null, 0, 0, 0, 163);
Drag.init(bThumb, null, 0, 0, 0, 163);

rThumb.onDrag = function(x, y)
{
r_pwr = Math.round(y * 1.565).toString(16);
r_col = Math.round(y * 1.565);
out_hex();
} ;

gThumb.onDrag = function(x, y)
{
g_pwr = Math.round(y * 1.565).toString(16);
g_col = Math.round(y * 1.565);
out_hex();
} ;

bThumb.onDrag = function(x, y)
{
b_pwr = Math.round(y * 1.565).toString(16);
b_col = Math.round(y * 1.565);
out_hex();
} ;

function out_hex() {
S=new String(r_pwr);
if (S.length<2) {
S='0'+ S;
r_pwr = S;
}
T=new String(g_pwr);
if (T.length<2) {
T='0'+ T;
g_pwr = T;
}
Q=new String(b_pwr);
if (Q.length<2) {
Q='0'+ Q;
b_pwr = Q;
}
hex_color = "#" + r_pwr.toUpperCase() + g_pwr.toUpperCase() + b_pwr.toUpperCase();
document.color_value.hex_dsp.value = hex_color;
document.color_value.rgb_dsp.value = r_col + ',' + g_col + ',' + b_col;
scrolldiv.style.background = hex_color;
}