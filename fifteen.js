var h=void 0,j=null,m=!1,n=this;
function aa(){var a=console.log,b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}Math.floor(2147483648*Math.random()).toString(36);function p(a,b){var c=a.split("."),d=n;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&b!==h?d[e]=b:d=d[e]?d[e]:d[e]={}};var q;String.prototype.toArray=function(){return this.split("").map(function(a){return parseInt("0x"+a,16)})};function r(a){return Math.floor(a/4)}HTMLElement.prototype.moveTo=function(a,b){var c=this.style;c.webkitTransitionDuration=c.MozTransitionDuration=c.i=c.f=c.j="250ms";c.MozTransform=c.webkitTransform=c.h=c.e="translate("+a+"px,"+b+"px)"};var s,t;var u,v;function w(a){if(u){var b=(new Date).getTime();console.log(b-v+"\t"+a);v=b}};Array.prototype.forEach||(Array.prototype.forEach=function(a,b){for(var c=0,d=this.length;c<d;++c)a.call(b||this,this[c],c,this)});Array.prototype.map||(Array.prototype.map=function(a,b){var c,d,e;if(this==j)throw new TypeError(" this is null or not defined");var f=Object(this),i=f.length>>>0;if({}.toString.call(a)!="[object Function]")throw new TypeError(a+" is not a function");b&&(c=b);d=Array(i);for(e=0;e<i;){var g;if(e in f){g=f[e];g=a.call(c,g,e,f);d[e]=g}e++}return d});
Array.prototype.reduce||(Array.prototype.reduce=function(a){if(this===j||this===h)throw new TypeError("Object is null or undefined");var b=0,c=this.length>>0,d;if(typeof a!=="function")throw new TypeError("First argument is not callable");if(arguments.length<2){if(c===0)throw new TypeError("Array length is 0 and no second argument");d=this[0];b=1}else d=arguments[1];for(;b<c;){b in this&&(d=a.call(h,d,this[b],b,this));++b}return d});var x,z,A,B;function C(){return n.navigator?n.navigator.userAgent:j}B=A=z=x=m;var D;if(D=C()){var ba=n.navigator;x=0==D.indexOf("Opera");z=!x&&-1!=D.indexOf("MSIE");A=!x&&-1!=D.indexOf("WebKit");B=!x&&!A&&"Gecko"==ba.product}var E=z,F=B,ca=A,G;
a:{var H="",I;if(x&&n.opera)var J=n.opera.version,H="function"==typeof J?J():J;else if(F?I=/rv\:([^\);]+)(\)|;)/:E?I=/MSIE\s+([^\);]+)(\)|;)/:ca&&(I=/WebKit\/(\S+)/),I)var da=I.exec(C()),H=da?da[1]:"";if(E){var K,ea=n.document;K=ea?ea.documentMode:h;if(K>parseFloat(H)){G=""+K;break a}}G=H}var fa={};
function L(a){if(!fa[a]){for(var b=0,c=(""+G).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=(""+a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var i=c[f]||"",g=d[f]||"",o=RegExp("(\\d*)(\\D*)","g"),y=RegExp("(\\d*)(\\D*)","g");do{var k=o.exec(i)||["","",""],l=y.exec(g)||["","",""];if(0==k[0].length&&0==l[0].length)break;b=((0==k[1].length?0:parseInt(k[1],10))<(0==l[1].length?0:parseInt(l[1],10))?-1:(0==k[1].length?0:parseInt(k[1],10))>(0==l[1].length?
0:parseInt(l[1],10))?1:0)||((0==k[2].length)<(0==l[2].length)?-1:(0==k[2].length)>(0==l[2].length)?1:0)||(k[2]<l[2]?-1:k[2]>l[2]?1:0)}while(0==b)}fa[a]=0<=b}}var ga={};function ha(){return ga[9]||(ga[9]=E&&document.documentMode&&9<=document.documentMode)};!E||ha();!F&&!E||E&&ha()||F&&L("1.9.1");E&&L("9");E&&L(8);var M;(M="ScriptEngine"in n&&"JScript"==n.ScriptEngine())&&(n.ScriptEngineMajorVersion(),n.ScriptEngineMinorVersion(),n.ScriptEngineBuildVersion());function N(a,b){this.a=M?[]:"";a!=j&&this.append.apply(this,arguments)}M?(N.prototype.b=0,N.prototype.append=function(a,b,c){b==j?this.a[this.b++]=a:(this.a.push.apply(this.a,arguments),this.b=this.a.length);return this}):N.prototype.append=function(a,b,c){this.a+=a;if(b!=j)for(var d=1;d<arguments.length;d++)this.a+=arguments[d];return this};N.prototype.clear=function(){if(M)this.b=this.a.length=0;else this.a=""};
N.prototype.toString=function(){if(M){var a=this.a.join("");this.clear();a&&this.append(a);return a}return this.a};function O(a){return"object"===typeof a&&a&&0===a.g?a.content:(""+a).replace(ia,ja)}var ka={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\u000c":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function ja(a){return ka[a]}var ia=/[\x00\x22\x26\x27\x3c\x3e]/g;function la(){var a=P.toArray(),b=P.split(""),c=new N;c.append("\t");var d=c||new N;d.append('\t<div id="field">');for(var e=b.length,f=0;f<e;f++){var i=b[f];d.append(a[f]?'<div id="element_'+O(i)+'" class="field-element" onclick="fifteen.page.moveElement(\''+O(i)+"')\">"+O(a[f])+"</div>":"")}d.append("</div>");(c||new N).append('\t<div id="toolbar"><div class="toolbar-button"><div id="shuffle" class="pointer icon" onclick="fifteen.page.shuffle()"></div></div><div class="toolbar-button"><div id="play_stop" class="play pointer icon" onclick="fifteen.page.playOrStop()"></div></div><div class="toolbar-button"><a id="counter" class="pointer" onclick="fifteen.page.clearCounter()">0</a></div></div>');
return c.toString()};var P="123456789ABCDEF0",Q=m,R=0;p("fifteen.page.moveElement",function(a){if(!Q){var b=P,a=s[b.indexOf("0")][b.indexOf(a)];a!==h&&S(P.move(a))}});function S(a,b){if(a!=P||b){P=a;b?na():(R++,$("#counter").html(R));var c=a.indexOf("0"),d=s,e;a.split("").forEach(function(a,b){if(a!="0"){e=$("#element_"+a);e.get(0).moveTo(b%4*47,r(b)*47);e.toggleClass("pointer",d[c][b]!==h&&!Q)}})}}
p("fifteen.page.shuffle",function(){T();for(var a=S,b="1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,0".split(","),c,d=0;16>d;d++){var e=Math.floor(16*Math.random());c=b[e];b[e]=b[d];b[d]=c}a(b.join(""),!0)});function oa(a){a!=Q&&(Q=a,$("#play_stop").toggleClass("stop play"),$("#counter").toggleClass("pointer",!a))}p("fifteen.page.playOrStop",function(){if(Q)T();else if(!Q){oa(!0);var a=pa(P);a?qa(a):(alert("This puzzle doesn't have solution"),T())}});function T(){Q&&oa(m)}
function qa(a){if(Q){var b=!a.length?m:a.slice(0,q);b==P&&(b=!a.length?m:a.slice(0,q));b?(S(b),window.setTimeout(function(){qa(!a.length?m:a.slice(q))},250)):T()}}function na(){Q||(R=0,$("#counter").html(R))}p("fifteen.page.clearCounter",na);p("fifteen.page.initByArray",function(a){ra(sa(a))});function ra(a){S(a,!0)}p("fifteen.page.initByString",ra);function ta(a){return 1==a.toArray().reduce(function(a,c,d,e){return a+e.slice(d).reduce(function(a,b){return a+(c&&b?b<c?1:0:0)},0)},r(a.indexOf("0")))%2}function ua(a){var b=t;return a.split("").reduce(function(a,d,e){return a+b[d][e]},0)}String.prototype.move=function(a){var b=this.split(""),c=b.slice(0);a.forEach(function(a){c[a[1]]=b[a[0]]});return c.join("")};function va(a){return s[a.indexOf("0")].map(function(a){return this.move(a)},a)}
function sa(a){return a.reduce(function(a,c){return a+=c.reduce(function(a,b){return a+b.toString(16)},"")},"").toUpperCase()};function U(){this.data=[]}U.prototype.push=function(a,b){this.data[b]!==h||(this.data[b]=[]);this.data[b].push(a)};U.prototype.pop=function(){for(var a in this.data){var b=this.data[a].shift();0==this.data[a].length&&delete this.data[a];return b}};U.prototype.remove=function(a,b){for(var c=0;c<this.data[b].length;c++)if(this.data[b][c]==a){this.data[b].splice(c,1);break}0==this.data[b].length&&delete this.data[b]};var V,W,X,Y,Z;function wa(){W={};X={};Y=new U;Z=V=0}function pa(a){function b(){c++;var a=Y.pop(),b=W[a].parent;if("123456789ABCDEF0"==a)return b+a;delete W[a];X[a]=!0;va(a).forEach(function(c){xa(c,b+a)});return m}w("Try to resolve "+a);if(!ta(a))return w("This node doesn't have solution "+a),m;var c=0;V=Z=0;wa();xa(a,"");for(a="";!(a=b()););w("Solution found: "+(a.length/q-1)+" steps. Nodes stat: generated: "+V+" estimated: "+Z+" checked: "+c);return a}
function xa(a,b){V++;if(X[a]===h){Z++;var c=10*(b.length/q-1),d=ua(a),d=c+d;if(W[a]!==h){if(c>=W[a].d)return;Y.remove(a,W[a].c)}W[a]={parent:b,d:c,c:d};Y.push(a,d)}};var ya="79C30AFEBD165248,36A870FD4915E2CB,A73654298CBFDE01,1FA754D3B68CE092,3507194C8EB6FAD2,A36297C1EFB4508D,137582CD4AB90FE6,054E83D72BA6F1C9,CE8514D02F976A3B".split(",");p("fifteen.tests.run",function(){var a=0,b=0;ya.forEach(function(c){var d=a,c=pa(c);a=d+(c.length/q-1);b+=V});w("All tests completed. Total generated: "+Math.round(b/1E3)+". Steps: "+a)});$(document).ready(function(){q=Math.pow(4,2);var a={},b,c;for(b=0;b<q;b++){var d="123456789ABCDEF0".charAt(b);a["123456789ABCDEF0".charAt(b)]=[];for(c=0;c<q;c++)a["123456789ABCDEF0".charAt(b)][c]="0"==d?0:Math.round(18.7*Math.sqrt(Math.pow(r(b)-r(c),2)+Math.pow(b%4-c%4,2)))}t=a;a=[];for(b=0;b<q;b++){a[b]=[];for(c=0;c<q;c++)a[b][c]=b==c?m:r(b)==r(c)||b%4==c%4}b={};for(c=0;c<q;c++){b[c]=[];for(d=0;d<q;d++)if(a[c][d]){for(var e=b[c],f=d,i=d,g=r(c),o=c%4,y=r(i),k=i%4,l=[[c,i]],za=Math.abs(g-y)||Math.abs(o-
k),ma=g==y?1:4,g=g==y?o<k:g<y,o=0;o<za;o++)l.push([i+ma*(o+0)*(g?-1:1),i+ma*(o+1)*(g?-1:1)]);e[f]=l}}s=b;u=console!==h&&"function"==aa();v=(new Date).getTime();$("#fifteen").html(la());S(P,!0);wa()});
