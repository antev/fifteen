var h=void 0,j=!0,m=null,n=!1,p=this;
function aa(){var a=console.log,b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}Math.floor(2147483648*Math.random()).toString(36);function q(a,b){var c=a.split("."),d=p;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&b!==h?d[e]=b:d=d[e]?d[e]:d[e]={}};var r;String.prototype.toArray=function(){return this.split("").map(function(a){return parseInt("0x"+a,16)})};function s(a){return Math.floor(a/4)}HTMLElement.prototype.moveTo=function(a,b){var c=this.style;c.webkitTransitionDuration=c.MozTransitionDuration=c.i=c.f=c.j="250ms";c.MozTransform=c.webkitTransform=c.h=c.e="translate("+a+"px,"+b+"px)"};var t,u;var ba,v;function w(a){if(ba){var b=(new Date).getTime();console.log(b-v+"\t"+a);v=b}};Array.prototype.forEach||(Array.prototype.forEach=function(a,b){for(var c=0,d=this.length;c<d;++c)a.call(b||this,this[c],c,this)});Array.prototype.map||(Array.prototype.map=function(a,b){var c,d,e;if(this==m)throw new TypeError(" this is null or not defined");var f=Object(this),i=f.length>>>0;if({}.toString.call(a)!="[object Function]")throw new TypeError(a+" is not a function");b&&(c=b);d=Array(i);for(e=0;e<i;){var g;if(e in f){g=f[e];g=a.call(c,g,e,f);d[e]=g}e++}return d});
Array.prototype.reduce||(Array.prototype.reduce=function(a){if(this===m||this===h)throw new TypeError("Object is null or undefined");var b=0,c=this.length>>0,d;if(typeof a!=="function")throw new TypeError("First argument is not callable");if(arguments.length<2){if(c===0)throw new TypeError("Array length is 0 and no second argument");d=this[0];b=1}else d=arguments[1];for(;b<c;){b in this&&(d=a.call(h,d,this[b],b,this));++b}return d});var x,y,A,B;function ca(){return p.navigator?p.navigator.userAgent:m}B=A=y=x=n;var C;if(C=ca()){var da=p.navigator;x=0==C.indexOf("Opera");y=!x&&-1!=C.indexOf("MSIE");A=!x&&-1!=C.indexOf("WebKit");B=!x&&!A&&"Gecko"==da.product}var D=y,E=B,ea=A,F;
a:{var G="",H;if(x&&p.opera)var I=p.opera.version,G="function"==typeof I?I():I;else if(E?H=/rv\:([^\);]+)(\)|;)/:D?H=/MSIE\s+([^\);]+)(\)|;)/:ea&&(H=/WebKit\/(\S+)/),H)var fa=H.exec(ca()),G=fa?fa[1]:"";if(D){var J,ga=p.document;J=ga?ga.documentMode:h;if(J>parseFloat(G)){F=""+J;break a}}F=G}var ha={};
function K(a){if(!ha[a]){for(var b=0,c=(""+F).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=(""+a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var i=c[f]||"",g=d[f]||"",o=RegExp("(\\d*)(\\D*)","g"),z=RegExp("(\\d*)(\\D*)","g");do{var k=o.exec(i)||["","",""],l=z.exec(g)||["","",""];if(0==k[0].length&&0==l[0].length)break;b=((0==k[1].length?0:parseInt(k[1],10))<(0==l[1].length?0:parseInt(l[1],10))?-1:(0==k[1].length?0:parseInt(k[1],10))>(0==l[1].length?
0:parseInt(l[1],10))?1:0)||((0==k[2].length)<(0==l[2].length)?-1:(0==k[2].length)>(0==l[2].length)?1:0)||(k[2]<l[2]?-1:k[2]>l[2]?1:0)}while(0==b)}ha[a]=0<=b}}var ia={};function ja(){return ia[9]||(ia[9]=D&&document.documentMode&&9<=document.documentMode)};!D||ja();!E&&!D||D&&ja()||E&&K("1.9.1");D&&K("9");D&&K(8);var L;(L="ScriptEngine"in p&&"JScript"==p.ScriptEngine())&&(p.ScriptEngineMajorVersion(),p.ScriptEngineMinorVersion(),p.ScriptEngineBuildVersion());function M(a,b){this.a=L?[]:"";a!=m&&this.append.apply(this,arguments)}L?(M.prototype.b=0,M.prototype.append=function(a,b,c){b==m?this.a[this.b++]=a:(this.a.push.apply(this.a,arguments),this.b=this.a.length);return this}):M.prototype.append=function(a,b,c){this.a+=a;if(b!=m)for(var d=1;d<arguments.length;d++)this.a+=arguments[d];return this};M.prototype.clear=function(){if(L)this.b=this.a.length=0;else this.a=""};
M.prototype.toString=function(){if(L){var a=this.a.join("");this.clear();a&&this.append(a);return a}return this.a};function N(a){return"object"===typeof a&&a&&0===a.g?a.content:(""+a).replace(ka,la)}var ma={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\u000c":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function la(a){return ma[a]}var ka=/[\x00\x22\x26\x27\x3c\x3e]/g;function na(){var a=O.toArray(),b=O.split(""),c=new M;c.append("\t");var d=c||new M;d.append('\t<div id="field">');for(var e=b.length,f=0;f<e;f++){var i=b[f];d.append(a[f]?'<div id="element_'+N(i)+'" class="field-element" onclick="fifteen.page.moveElement(\''+N(i)+"')\">"+N(a[f])+"</div>":"")}d.append("</div>");(c||new M).append('\t<div id="toolbar"><div class="toolbar-button"><div id="shuffle" class="pointer icon" onclick="fifteen.page.shuffle()"></div></div><div class="toolbar-button"><div id="play_stop" class="play pointer icon" onclick="fifteen.page.playOrStop()"></div></div><div class="toolbar-button"><a id="counter" class="pointer" onclick="fifteen.page.clearCounter()">0</a></div></div>');
return c.toString()};var O="123456789ABCDEF0",P=n,Q=n,R=0;q("fifteen.page.moveElement",function(a){if(!P&&!Q){var b=O,a=t[b.indexOf("0")][b.indexOf(a)];a!==h&&S(O.move(a))}});function S(a,b){if(a!=O||b){O=a;b?oa():(R++,$("#counter").html(R));var c=a.indexOf("0"),d=t,e;a.split("").forEach(function(a,b){if(a!="0"){e=$("#element_"+a);e.get(0).moveTo(b%4*47,s(b)*47);e.toggleClass("pointer",d[c][b]!==h&&!P)}})}}
q("fifteen.page.shuffle",function(){if(!Q){T();for(var a=S,b="1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,0".split(","),c,d=0;16>d;d++){var e=Math.floor(16*Math.random());c=b[e];b[e]=b[d];b[d]=c}a(b.join(""),j)}});function qa(a){a!=P&&(P=a,$("#play_stop").toggleClass("stop play"),$("#counter").toggleClass("pointer",!a))}q("fifteen.page.playOrStop",function(){Q||(P?T():ra())});
function ra(){P||(qa(j),sa(j),window.setTimeout(function(){var a=ta(O);sa(n);a?ua(a):(alert("This puzzle doesn't have solution"),T())},500))}function sa(a){$("*").toggleClass("progress",a);Q=a}function T(){P&&qa(n)}function ua(a){if(P){var b=!a.length?n:a.slice(0,r);b==O&&(b=!a.length?n:a.slice(0,r));b?(S(b),window.setTimeout(function(){ua(!a.length?n:a.slice(r))},250)):T()}}function oa(){!P&&!Q&&(R=0,$("#counter").html(R))}q("fifteen.page.clearCounter",oa);q("fifteen.page.initByArray",function(a){va(wa(a))});
function va(a){S(a,j)}q("fifteen.page.initByString",va);function xa(a){return 1==a.toArray().reduce(function(a,c,d,e){return a+e.slice(d).reduce(function(a,b){return a+(c&&b?b<c?1:0:0)},0)},s(a.indexOf("0")))%2}function ya(a){var b=u;return a.split("").reduce(function(a,d,e){return a+b[d][e]},0)}String.prototype.move=function(a){var b=this.split(""),c=b.slice(0);a.forEach(function(a){c[a[1]]=b[a[0]]});return c.join("")};function za(a){return t[a.indexOf("0")].map(function(a){return this.move(a)},a)}
function wa(a){return a.reduce(function(a,c){return a+=c.reduce(function(a,b){return a+b.toString(16)},"")},"").toUpperCase()};function U(){this.data=[]}U.prototype.push=function(a,b){this.data[b]!==h||(this.data[b]=[]);this.data[b].push(a)};U.prototype.pop=function(){for(var a in this.data){var b=this.data[a].shift();0==this.data[a].length&&delete this.data[a];return b}};U.prototype.remove=function(a,b){for(var c=0;c<this.data[b].length;c++)if(this.data[b][c]==a){this.data[b].splice(c,1);break}0==this.data[b].length&&delete this.data[b]};var V,W,X,Y,Z;function Aa(){W={};X={};Y=new U;Z=V=0}function ta(a){function b(){c++;var a=Y.pop(),b=W[a].parent;if("123456789ABCDEF0"==a)return b+a;delete W[a];X[a]=j;za(a).forEach(function(c){Ba(c,b+a)});return n}w("Try to resolve "+a);if(!xa(a))return w("This node doesn't have solution "+a),n;var c=0;V=Z=0;Aa();Ba(a,"");for(a="";!(a=b()););w("Solution found: "+(a.length/r-1)+" steps. Nodes stat: generated: "+V+" estimated: "+Z+" checked: "+c);return a}
function Ba(a,b){V++;if(X[a]===h){Z++;var c=10*(b.length/r-1),d=ya(a),d=c+d;if(W[a]!==h){if(c>=W[a].d)return;Y.remove(a,W[a].c)}W[a]={parent:b,d:c,c:d};Y.push(a,d)}};var Ca="79C30AFEBD165248,36A870FD4915E2CB,A73654298CBFDE01,1FA754D3B68CE092,3507194C8EB6FAD2,A36297C1EFB4508D,137582CD4AB90FE6,054E83D72BA6F1C9,CE8514D02F976A3B".split(",");q("fifteen.tests.run",function(){var a=0,b=0;Ca.forEach(function(c){var d=a,c=ta(c);a=d+(c.length/r-1);b+=V});w("All tests completed. Total generated: "+Math.round(b/1E3)+". Steps: "+a)});$(document).ready(function(){r=Math.pow(4,2);var a={},b,c;for(b=0;b<r;b++){var d="123456789ABCDEF0".charAt(b);a["123456789ABCDEF0".charAt(b)]=[];for(c=0;c<r;c++)a["123456789ABCDEF0".charAt(b)][c]="0"==d?0:Math.round(12*Math.sqrt(Math.pow(s(b)-s(c),2)+Math.pow(b%4-c%4,2))+14.375)}u=a;a=[];for(b=0;b<r;b++){a[b]=[];for(c=0;c<r;c++)a[b][c]=b==c?n:s(b)==s(c)||b%4==c%4}b={};for(c=0;c<r;c++){b[c]=[];for(d=0;d<r;d++)if(a[c][d]){for(var e=b[c],f=d,i=d,g=s(c),o=c%4,z=s(i),k=i%4,l=[[c,i]],Da=Math.abs(g-z)||
Math.abs(o-k),pa=g==z?1:4,g=g==z?o<k:g<z,o=0;o<Da;o++)l.push([i+pa*(o+0)*(g?-1:1),i+pa*(o+1)*(g?-1:1)]);e[f]=l}}t=b;ba=console!==h&&"function"==aa();v=(new Date).getTime();$("#fifteen").html(na());S(O,j);Aa()});
