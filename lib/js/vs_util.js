/*

 Copyright (C) 2009-2012. David Thevenin, ViniSketch SARL (c), and 
 contributors. All rights reserved

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published
 by the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with this program. If not, see <http://www.gnu.org/licenses/>.
*/
(function(f,j){function l(a,b){for(var c in b){var d=Object.getOwnPropertyDescriptor(b,c);d&&(d.get||d.set)?m(a,c,d):a[c]=b[c]}return a}function m(a,b,c){function d(a,b){return Object.prototype.hasOwnProperty.call(a,b)}if(typeof c!="object"||c===null)throw new TypeError("bad desc");if(typeof b!="string"||b===null)throw new TypeError("bad property name");var e={};e.enumerable=d(c,"enumerable")?!!c.enumerable:!0;e.configurable=d(c,"configurable")?!!c.configurable:!0;if(d(c,"value"))e.value=c.value;
if(d(c,"writable"))e.writable=!!c.writable;if(d(c,"get")){var f=c.get;if(typeof f=="function")e.get=f}if(d(c,"set")&&(c=c.set,typeof c=="function"))e.set=c;if(("get"in e||"set"in e)&&("value"in e||"writable"in e))throw new TypeError("identity-confused descriptor");Object.defineProperty(a,b,e)}function v(a,b,c){if(c){if(!a._properties_)a._properties_=[];m(a.prototype,b,c);c.enumerable!=!1&&a._properties_.push(b)}}function n(a){var b;switch(a){case null:return null;case j:return j}switch(k.call(a)){case OBJECT_CLASS:case OBJECT_TYPE:b=
{};for(var c in a)b[c]=n(a[c]);return b;case ARRAY_CLASS:b=[];for(c=0;c<a.length;c++)b[c]=n(a[c]);return b;default:return a}}function i(a){return!!(a&&a.nodeType===1)}function w(a){if(typeof Array.isArray=="function")return Array.isArray(a);return k.call(a)===ARRAY_CLASS}function x(a){return k.call(a)===STRING_CLASS}function y(a){return typeof a==="undefined"}function o(a,b){if(a){var c=a.className;return c.length>0&&(c===b||RegExp("(^|\\s)"+b+"(\\s|$)").test(c))}}function z(){var a=arguments[0],
b,c=1;if(a){for(;c<arguments.length;c++)b=arguments[c],o(a,b)||(a.className+=(a.className?" ":"")+b);return a}}function A(){var a=arguments[0],b,c=1;if(a){for(;c<arguments.length;c++)b=arguments[c],a.className=B(a.className.replace(RegExp("(^|\\s+)"+b+"(\\s+|$)")," "));return a}}function B(a){if(a)return a.replace(/^\s+/,"").replace(/\s+$/,"")}function p(a){if(!i(a))return{};var b=q(a,"display"),c=a.style,d=c.visibility,e=c.position,f=c.display,g=0,h=0;if(b!=="none"&&b!==null)return{width:a.offsetWidth,
height:a.offsetHeight};c.visibility="hidden";c.position="absolute";c.display="block";g=a.clientWidth;h=a.clientHeight;c.display=f;c.position=e;c.visibility=d;return{width:g,height:h}}function q(a,b){if(i(a)){var b=b==="float"?"cssFloat":b.camelize(),c=a.style[b];if(!c||c==="auto")c=(c=g.defaultView.getComputedStyle(a,null))?c[b]:null;if(b==="opacity")return c?parseFloat(c):1;return c==="auto"?null:c}}function C(a,b){if(i(a))a.style.opacity=b===1||b===""?"":b<1.0E-5?0:b}function D(a){if(a)for(;a.firstChild;)a.removeChild(a.firstChild)}
function G(a,b){if(a&&a.style)a.style.webkitTransform=b}function H(a){if(a)return f.getComputedStyle(a).webkitTransform}function I(a,b){if(a&&a.style)a.style.msTransform=b}function J(a){if(a)return f.getComputedStyle(a).msTransform}var g=f.document;f.vs={};f.vs.util={};f.vs.core={};f.vs.data={};f.vs.ui={};f.vs.fx={};f.vs.av={};f.vs.ext={};f.vs.ext.ui={};var h=f.vs.util,E=g.createElement("vstestelem"),r=E.style,s=/\/Date\((-?\d+)\)\//;NULL_TYPE="Null";UNDEFINED_TYPE="Undefined";BOOLEAN_TYPE="Boolean";
NUMBER_TYPE="Number";STRING_TYPE="String";OBJECT_TYPE="Object";BOOLEAN_CLASS="[object Boolean]";NUMBER_CLASS="[object Number]";STRING_CLASS="[object String]";ARRAY_CLASS="[object Array]";OBJECT_CLASS="[object Object]";var k=Object.prototype.toString,t,u;r.webkitTransform!==j?(t=G,u=H):r.msTransform!==j&&(t=I,u=J);Array.prototype._remove=function(a,b){var c=this.slice((b||a)+1||this.length);this.length=a<0?this.length+a:a;return this.push.apply(this,c)};Array.prototype.findItem=Array.prototype.indexOf?
Array.prototype.indexOf:function(a,b){for(var c=this.length,b=b?b:0,b=b<0?0:b;b<c;){if(this[b]===a)return b;b++}return-1};Array.prototype.remove=function(a,b){if(typeof a==="object"||h.isString(a))for(var c=0;c<this.length;)this[c]===a?this._remove(c):c++;else this._remove(a,b);return this};Array.prototype.removeAll=function(){for(;this.length>0;)this._remove(0);return this};Array.prototype.clone=function(){return this.slice()};Array.prototype.each=function(a,b){var c=0;try{this._each(function(d){a.call(b,
d,c++)})}catch(d){throw d;}return this};var F=0;f._current_platform_id=F;l(h,{vsTestElem:E,vsTestStyle:r,extend:l,extendClass:function(a,b){if(a&&b&&a.prototype&&b.prototype)try{if(Object.__proto__)a.prototype.__proto__=b.prototype;else{var c=a.prototype;a.prototype=new b;l(a.prototype,c)}if(!a._properties_)a._properties_=[];if(b._properties_)a._properties_=a._properties_.concat(b._properties_)}catch(d){console.error(d.message())}},defineProperty:m,defineClassProperty:v,defineClassProperties:function(a,
b){for(var b=Object(b),c=Object.keys(b),d=0;d<c.length;d++)v(a,c[d],b[c[d]])},clone:n,free:function(a){a&&(a._free&&a._free(),a.destructor&&a.destructor(),delete a)},toJSON:function(a){return JSON.stringify(a)},isElement:i,isArray:w,isFunction:function(a){return typeof a==="function"},isString:x,isNumber:function(a){return k.call(a)===NUMBER_CLASS},isUndefined:y,hasClassName:o,addClassName:z,removeClassName:A,toggleClassName:function(a,b){if(a)return o(a,b)?A(a,b):z(a,b)},htmlEncode:function(a){if(a)return a.replace(/&/g,
"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},strip:B,camelize:function(a){if(a){var b=a.split("-"),c=b.length;if(c===1)return b[0];for(var a=a.charAt(0)==="-"?b[0].charAt(0).toUpperCase()+b[0].substring(1):b[0],d=1;d<c;d++)a+=b[d].charAt(0).toUpperCase()+b[d].substring(1);return a}},capitalize:function(a){if(a)return a.charAt(0).toUpperCase()+a.substring(1).toLowerCase()},underscore:function(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,
"$1_$2").replace(/-/g,"_").toLowerCase()},parseJSON:function(a){function b(a){if(x(a)){var c=s.exec(a);c&&c[1]&&(a=new Date(parseInt(c[1])))}else if(w(a))for(c=0;c<a.length;c++)a[c]=b(a[c]);else if(!(a instanceof Date)&&a instanceof Object)for(c in a)a[c]=b(a[c]);return a}if(!a)return null;var c=JSON.parse(a);if(!s.test(a))return c;return b(c)},getElementHeight:function(a){if(i(a))return p(a).height},getElementWidth:function(a){if(i(a))return p(a).width},getElementDimensions:p,getElementStyle:q,setElementStyle:function(a,
b){if(i(a)){var c=a.style,d;for(d in b)if(d==="opacity")C(a,b[d]);else{if(!b[d]){c.removeProperty(d);break}c[d==="float"||d==="cssFloat"?y(c.styleFloat)?"cssFloat":"styleFloat":d]=b[d]}}},setElementOpacity:C,getElementOpacity:function(a){if(i(a))return q(a,"opacity")},getElementAbsolutePosition:function(a){if(!a)return null;var b=a.getBoundingClientRect();if(b)return{x:b.left,y:b.top};for(var c=b=0,d=a;d;){var e=0,f=0;d!=a&&(e=parseInt(d.currentStyle?d.currentStyle.borderLeftWidth:0,0),f=parseInt(d.currentStyle?
d.currentStyle.borderTopWidth:0,0),e=isNaN(e)?0:e,f=isNaN(f)?0:f);b+=d.offsetLeft-d.scrollLeft+e;c+=d.offsetTop-d.scrollTop+f;d=d.offsetParent}return{x:b,y:c}},setElementPos:function(a,b,c){if(a)a.style.left=b+"px",a.style.top=c+"px"},setElementSize:function(a,b,c){if(a)a.style.width=b+"px",a.style.height=c+"px"},setElementVisibility:function(a,b){if(a)a.style||h.isString(a.innerHTML)?a.style.visibility=b?"visible":"hidden":b?a.setAttribute("visibility","visible"):a.setAttribute("visibility","hidden")},
isElementVisible:function(a){if(!a)return!1;return a.style||h.isString(a.innerHTML)?a.style.visibility==="hidden"?!1:!0:a instanceof CharacterData?!0:a.getAttribute("visibility")==="hidden"?!1:!0},removeAllElementChild:D,setElementInnerText:function(a,b){if(a){D(a);h.isString(b)||(b=b===j?"":b===null?"":h.isNumber(b)?""+b:b.toString?b.toString():"");var c=b.split("\n"),d=0;if(c.length){a.appendChild(g.createTextNode(c[d]));for(d++;d<c.length;d++)a.appendChild(g.createElement("br")),a.appendChild(g.createTextNode(c[d]))}}},
setElementTransform:t,getElementTransform:u,importFile:function(a,b,c,d){b||(b=g);var e;if(d==="js"||a.search("\\.js")>=0){d=b.createElement("script");d.setAttribute("type","text/javascript");d.setAttribute("src",a);if(c)d.onload=function(){c.call(this,a)};if(!b.head)b.head=b.querySelector("head");b.head.appendChild(d)}else if(d==="css"||a.search("\\.css")>=0){e=b.createElement("link");e.setAttribute("rel","stylesheet");e.setAttribute("type","text/css");e.setAttribute("href",a);e.setAttribute("media",
"screen");if(h.isFunction(func)){var f=0;(function(){!e.sheet||!e.sheet.cssRules?f++<100?cssTimeout=setTimeout(arguments.callee,100):console.error("CSS load of "+a+" failed!"):e.sheet.cssRules&&e.sheet.cssRules.length===0?console.error("CSS load of "+a+" failed!"):func.call(g,a)})()}if(!b.head)b.head=b.querySelector("head");b.head.appendChild(e)}},setActiveStyleSheet:function(a){var b=0,c=g.getElementsByTagName("link"),d,e;F=a;for(e in Application_applications)if(b=Application_applications[e],b.view)b.view.style.display=
"none";for(b=0;b<c.length;b++)d=c[b],d.getAttribute("title")&&(d.getAttribute("title")!==a?d.setAttribute("disabled",!0):d.removeAttribute("disabled"));for(e in Application_applications)if(b=Application_applications[e],b.view)b.view.style.display="block"},preloadTemplate:function(a){var b=a+".xhtml",c;if(!View.__comp_templates[b])c=new XMLHttpRequest,c.open("GET",b,!1),c.send(null),c.readyState===4?c.status===200||c.status===0?(data=c.responseText,View.__comp_templates[b]=data):console.error("Template file for component '"+
a+"' unfound"):console.error("Pb when load the component '"+a+"' template")},__date_reg_exp:s})})(window);