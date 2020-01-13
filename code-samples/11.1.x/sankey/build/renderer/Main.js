define(['require', 'https://d3js.org/d3.v5.min.js'], function (requirejs, d3) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var e=function(){function t(t,e){this.name=t,this.slot=e||null,this.attributes=new Map;}return t.prototype.getName=function(){return this.name},t.prototype.getSlot=function(){return this.slot},t.prototype.getAttributes=function(){return this.attributes},t.slotLimit=function(e,n){return new t("limit",e).attr("n",n)},t.dataLimit=function(e){return new t("limit").attr("n",e)},t.prototype.attr=function(t,e){return this.attributes.set(t,e),this},t}(),n=function(t,e){return (n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e;}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);})(t,e)};function r(t,e){function r(){this.constructor=t;}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r);}function o(t,e,n){return t.getDecoration(e,n)}function i(t){return t.hasDecoration("hasSelection")?o(t,"hasSelection",!1):!!function(t){return "getSlot"in t&&"hasDecorationOnDataPoints"in t}(t)&&t.hasDecorationOnDataPoints("selected")}var u,s=function(){function t(t,e){this.min=t,this.max=e;}return t.prototype.asArray=function(){return [this.min,this.max]},t.empty=new t(0,0),t}(),a=function(t){function e(e,n){return t.call(this,e,n)||this}return r(e,t),e.fromRS=function(t){return new s(t.min,t.max)},e}(s),l=function(){function t(t,e){this.source=t,this.index=e,this.key=t.getKey(!1),this.caption=t.getCaption("label")||"";}return Object.defineProperty(t.prototype,"selected",{get:function(){return o(this.source,"selected",!1)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"highlighted",{get:function(){return o(this.source,"highlighted",!1)},enumerable:!0,configurable:!0}),t}(),c=function(t){function e(e,n){return t.call(this,e,n)||this}return r(e,t),e}(l),h=new(function(){function t(){}return t.prototype.format=function(t){return t?t.toString():""},t}());!function(t){t.label="label",t.data="data";}(u||(u={}));var p=function(){function t(t,e,n,r){this.source=t,this.tuples=e,this.domain=n,this.caption=r;var o=t.dataItems||[],i=o.length>0?o[0]:null,u=i&&i.asCont();u?(this._labelFormatter=u.getFormatter("label")||h,this._dataFormatter=u.getFormatter("data")||h):this._labelFormatter=this._dataFormatter=h;}return Object.defineProperty(t.prototype,"mapped",{get:function(){return this.source.mapped},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dataType",{get:function(){var t=this.source.getDataItem(0);return this.mapped&&t?t.type:"none"},enumerable:!0,configurable:!0}),t.prototype.format=function(t,e){return function(t,e){return t.format(e)}(e===u.data?this._dataFormatter:this._labelFormatter,t)},t}(),f=function(t){function e(e,n,r,o){return t.call(this,e,n,r,o)||this}return r(e,t),e}(p),g=function(){function t(t,e){this.source=t,this.key=t.getKey(!1),this.dataSet=e;}return Object.defineProperty(t.prototype,"selected",{get:function(){return o(this.source,"selected",!1)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"highlighted",{get:function(){return o(this.source,"highlighted",!1)},enumerable:!0,configurable:!0}),t.prototype.tuple=function(t){var e=this._getSlot(t);if(!e||0===e.tuples.length)return null;var n=this.source.get(e.source);if(!n)return null;var r=n.asCat();return r?e.tuples[r.index]:null},t.prototype.value=function(t){var e=this._getSlot(t),n=e&&this.source.get(e.source);if(!n)return null;var r=n.asCont();return r&&"numeric"===r.valueType?r.value:null},t.prototype.caption=function(t){var e=this._getSlot(t),n=e&&this.source.get(e.source);return n&&n.getCaption("data")||""},t.prototype._getSlot=function(t){return "string"==typeof t?this.dataSet.slotMap.get(t)||null:this.dataSet.cols[t]||null},t}(),d=function(t){function e(e,n){return t.call(this,e,n)||this}return r(e,t),e}(g),y=function(){function t(t,e,n){var r=this;this.source=t,this.rows=t.dataPoints.map(function(t){return new d(t,r)}),this.cols=e,this.slotMap=n;}return t.filterRows=function(t,e,n){return t.filter(function(t){var r=t.tuple(e);return !!r&&r.key===n})},Object.defineProperty(t.prototype,"hasSelections",{get:function(){return i(this.source)},enumerable:!0,configurable:!0}),t}(),m=function(t){function e(e,n,r){return t.call(this,e,n,r)||this}return r(e,t),e}(y);function v(t){var e=new Map,n=t.getSlots().map(function(t,n){var r=[],o=s.empty,i="";if(t.isMapped()){var u=t.getDataItem(0);i=u.getCaption("label"),"cat"===u.getRSType()?r=u.getTuples().map(function(t,e){return new c(t,e)}):o=a.fromRS(u.getDomain());}var l=new f(t,r,o,i);return e.set(t.name,l),l});return new m(t,n,e)}function _(t){return t<0?0:t>255?255:Math.floor(t)}var b=function(){function t(t,e,n,r){var o;this.r=_(t),this.g=_(e),this.b=_(n),this.a=(o=r)<0?0:o>1?1:o;}return t.fromObject=function(e){return new t(e.r,e.g,e.b,void 0===e.a?1:e.a)},t.prototype.toString=function(){return 1===this.a?"rgb("+this.r+","+this.g+","+this.b+")":"rgba("+this.r+","+this.g+","+this.b+","+this.a+")"},t}();function w(t,e){var n=null;if(t instanceof g)n=t.source.getDataSet(e);else{var r=t.source.getDataItem(e);n=r&&r.getDataSet(e);}return !!n&&i(n)}var C=function(t){return "rgba("+t.r+","+t.g+","+t.b+",0.4)"},S=function(t){return "rgba("+.7*t.r+","+.7*t.g+","+.7*t.b+","+t.a+")"},P=function(){function t(t,e,n){this.source=t,this._dataContext=e,this._slotResolver=n;}return Object.defineProperty(t.prototype,"slot",{get:function(){return this.source.slot},enumerable:!0,configurable:!0}),t.prototype.getColor=function(t){return t?b.fromObject(this.source.getTupleColor(t.source,-1)):b.fromObject(this.source.getColor(null))},t.prototype._getTuple=function(t){if(t instanceof l)return t;var e=this.slot||this._slotResolver(t.dataSet,this.source.name);return e?t.tuple(e):null},t.prototype.getFillColor=function(t){if(null===t)return this.source.getColor(null).toString();var e,n=this._getTuple(t);return e=n?this.source.getTupleColor(n.source,-1):this.source.getColor(t.source),!t.selected&&w(t,this._dataContext)?C(e):e.toString()},t.prototype.getOutlineColor=function(t){if(null===t)return this.source.getColor(null).toString();var e,n=this._getTuple(t);return e=n?this.source.getTupleColor(n.source,-1):this.source.getColor(t.source),t.highlighted||t.selected&&w(t,this._dataContext)?S(e):null},t}(),j=function(){return function(t,e,n){this.color=t,this.at=e,this.value=n;}}();function O(t){return t.map(function(t){return new j(b.fromObject(t.color),t.at,t.value)})}var x=function(){function t(t,e,n){this.source=t,this._slot=e,this._dataContext=n,this.stops=O(t.stops),this.aligned=O(t.aligned),this.interpolate=t.interpolate;}return t.prototype.getColor=function(t){return b.fromObject(this.source.getColor(t))},t.prototype.getFillColor=function(t){var e=this._slot?Number(t.value(this._slot)):0,n=this.source.getColor(e);return !t.selected&&w(t,this._dataContext)?C(n):n.toString()},t.prototype.getOutlineColor=function(t){var e=this._slot?Number(t.value(this._slot)):0,n=this.source.getColor(e);return t.highlighted||t.selected&&w(t,this._dataContext)?S(n):null},t}(),D=function(){function t(t,e,n){this.source=t,this._dataContext=e,this._lastDataItem=null,this._cachedStops=null,this._slotResolver=n;}return Object.defineProperty(t.prototype,"slot",{get:function(){return this.source.slot},enumerable:!0,configurable:!0}),t.prototype.getColorStops=function(t){var e=t?t.source.getDataItem(0):null,n=e&&e.asCont(),r=n?n.getDomain(null):null,o=this.source.getColorStops(n,r),i=t?t.source.name:null;return new x(o,i,this._dataContext)},t.prototype._fetchColorStops=function(t){var e=t.source.getDataSet(this._dataContext),n=this.slot||this._slotResolver(t.dataSet,this.source.name),r=n?e.getSlot(n):null,o=r?r.getDataItem(0):null,i=o?o.asCont():null;if(this.source.dirty||!this._cachedStops||i!==this._lastDataItem){var u=i?i.getDomain(null):null,s=this.source.getColorStops(i,u);this._cachedStops=new x(s,r&&r.name,this._dataContext),this._lastDataItem=i;}return this._cachedStops},t.prototype.getFillColor=function(t){return this._fetchColorStops(t).getFillColor(t)},t.prototype.getOutlineColor=function(t){return this._fetchColorStops(t).getOutlineColor(t)},t}(),I=function(t){function e(e){var n=t.call(this,e.r,e.g,e.b,e.a)||this;return n._color=e,n}return r(e,t),e.prototype.getRed=function(){return this.r},e.prototype.getGreen=function(){return this.g},e.prototype.getBlue=function(){return this.b},e.prototype.getAlpha=function(){return this.a},e}(b),E=function(){function t(t,e,n,r,o,i){this.caption=t,this.color=e,this.shape=n,this.selected=r,this.highlighted=o,this.ref=i;}return t.prototype.getCaption=function(){return this.caption},t.prototype.getColor=function(){return this.color?new I(this.color):null},t.prototype.getShape=function(){return this.shape},t.prototype.isSelected=function(){return this.selected},t.prototype.isHighlighted=function(){return this.highlighted},t.prototype.getRef=function(){return this.ref},t}(),T=function(){function t(t,e,n,r,o,i){this.type=t,this.channel=e,this.slot=n,this.caption=r,this.subCaption=o,this.ref=i;}return t.prototype.getRSType=function(){return this.type},t.prototype.getChannel=function(){return this.channel},t.prototype.getSlot=function(){return this.slot},t.prototype.getCaption=function(){return this.caption},t.prototype.getSubCaption=function(){return this.subCaption},t.prototype.getRef=function(){return this.ref},t}(),R=function(t){function e(e,n,r,i,u){var s=this,a=n&&n.source,l=a&&a.name,c=a&&a.getDataItem(0),h=c&&c.asCat();s=t.call(this,"cat",e,l,r,"",h)||this;var p=h?h.tuples:[];return s.entries=p.map(function(t){var e=t.getCaption("label")||"",n=u&&u.source.getTupleColor(t,-1),r=o(t,"selected",!1),s=o(t,"highlighted",!1);return new E(e,n?b.fromObject(n):null,i,r,s,t)}),s}return r(e,t),e.prototype.getEntries=function(){return this.entries},e}(T),F=function(t){function e(e,n,r,o){var i=this,u=n&&n.source,s=u&&u.name,a=u&&u.getDataItem(0),l=a&&a.asCont();if((i=t.call(this,"cont",e,s,r,"",l)||this).domain=l&&l.getDomain(null),o&&"color"===e){var c=o.source.getColorStops(l,null);i.stops=c.stops,i.interpolate=c.interpolate;}else i.stops=null,i.interpolate=!1;return i}return r(e,t),e.prototype.getDomain=function(){return this.domain},e.prototype.getInterpolate=function(){return this.interpolate},e.prototype.getStops=function(){return this.stops},e}(T);function L(t,e,n,r){if(!t)return [];var o=new Map,i=new Map;e.palettes.forEach(function(e){var n=e.slot||r&&r(t,e.source.name);n&&(e instanceof P?o.set(n,e):e instanceof D&&i.set(n,e));});var u=[];return t.cols.forEach(function(t){var e=t.source;if(e.mapped){var r=e.getDataItem(0);if(r)switch(r.type){case"cat":if(-1===e.channels.indexOf("color"))return;var s=o.get(e.name);s&&u.push(new R("color",t,t.caption,n.legendShape,s));break;case"cont":if(-1!==e.channels.indexOf("color")){var a=i.get(e.name);a&&u.push(new F("color",t,t.caption,a));}-1!==e.channels.indexOf("size")&&u.push(new F("size",t,t.caption,null));}}}),u}var A,M=function(){return function(){this.legendShape=null,this.slotLimits=new Map,this.dataLimit=-1;}}();!function(t){t.Em="em",t.Percentage="%",t.Centimeter="cm",t.Millimeter="mm",t.Inch="in",t.Pica="pc",t.Point="pt",t.Pixel="px";}(A||(A={}));var N,k,B=function(){function t(t,e){this.value=t,this.unit=e;}return t.fromObject=function(e){return new t(e.value,function(t){switch(t){case"em":return A.Em;case"%":return A.Percentage;case"cm":return A.Centimeter;case"mm":return A.Millimeter;case"in":return A.Inch;case"pc":return A.Pica;case"pt":return A.Point;case"px":return A.Pixel;default:throw new Error("Invalid length unit '"+t+"' specified")}}(e.unit))},t.prototype.toString=function(){return ""+this.value+this.unit},t}();!function(t){t.Normal="normal",t.Italic="italic";}(N||(N={})),function(t){t[t.Thin=100]="Thin",t[t.ExtraLight=200]="ExtraLight",t[t.Light=300]="Light",t[t.Normal=400]="Normal",t[t.Medium=500]="Medium",t[t.SemiBold=600]="SemiBold",t[t.Bold=700]="Bold",t[t.ExtraBold=800]="ExtraBold",t[t.Heavy=900]="Heavy";}(k||(k={}));var H=/\s+/g;function V(t){switch(t){case k.Normal:return "normal";case k.Bold:return "bold";case k.Thin:case k.ExtraLight:case k.Light:case k.Medium:case k.SemiBold:case k.ExtraBold:case k.Heavy:return t.toString();default:return ""}}function U(t){var e=[];if(t)for(var n=0,r=t.length;n<r;++n){var o=t[n],i=H.test(o);e.push(i?'"'+o+'"':o);}return e.join(", ")}var q=function(){function t(t,e,n,r){this.family=t,this.size=e,this.style=n,this.weight=r;}return t.fromObject=function(e){return new t(e.family||null,e.size?B.fromObject(e.size):null,e.style?function(t){switch(t){case"normal":return N.Normal;case"italic":return N.Italic;default:throw new Error("Invalid font style '"+t+"' specified")}}(e.style):null,void 0!==e.weight&&null!==e.weight?e.weight:null)},t.prototype.toString=function(){if(this.style!==N.Normal&&this.weight!==k.Normal||this.style===N.Normal&&this.weight===k.Normal){var t=[];return this.style===N.Normal?t.push("normal"):(this.style&&t.push(this.style),this.weight&&t.push(V(this.weight))),this.size&&t.push(this.size.toString()),this.family&&t.push(U(this.family)),t.join(" ")}return function(t){var e,n=[],r=U(t.family);return r.length>0&&n.push("font-family: "+r+";"),(r=t.size?t.size.toString():"").length>0&&n.push("font-size: "+r+";"),(r=(e=t.style)?e.toString():"").length>0&&n.push("font-style: "+r+";"),(r=V(t.weight)).length>0&&n.push("font-weight: "+r+";"),n.join(" ")}(this)},t}(),K=function(){function t(t,e,n){var r=new Map;null!==t&&t.forEach(function(t,o){if("palette"===t.type){var i=t;switch(i.paletteType){case"cat":r.set(o,new P(i,e,n));break;case"cont":r.set(o,new D(i,e,n));}}}),this.source=t,this.palettes=r;}return t.prototype.get=function(t){return this._getValue(t,!1)},t.prototype.peek=function(t){return this._getValue(t,!0)},t.prototype._getValue=function(t,e){var n=this.source&&this.source.get(t);if(!n)return null;switch(n.type){case"string":case"number":case"boolean":case"enum":return e?n.peek:n.value;case"length":var r=e?n.peek:n.value;return r?B.fromObject(r):null;case"font":var o=e?n.peek:n.value;return o?q.fromObject(o):null;case"color":var i=e?n.peek:n.value;return i?b.fromObject(i):null;case"palette":return this.palettes.get(t)||null;default:return null}},t.prototype.isActive=function(t){var e=this.source&&this.source.get(t);return !!e&&e.active},t.prototype.setActive=function(t,e){var n=this.source&&this.source.get(t);n&&n.setActive(e);},t.prototype.isDirty=function(t){var e=this.source&&this.source.get(t);return !!e&&e.dirty},t}();var G=setTimeout;function J(t){return Boolean(t&&void 0!==t.length)}function Q(){}function W(t){if(!(this instanceof W))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],et(t,this);}function X(t,e){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,W._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null!==n){var r;try{r=n(t._value);}catch(t){return void Z(e.promise,t)}Y(e.promise,r);}else(1===t._state?Y:Z)(e.promise,t._value);})):t._deferreds.push(e);}function Y(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof W)return t._state=3,t._value=e,void $(t);if("function"==typeof n)return void et((r=n,o=e,function(){r.apply(o,arguments);}),t)}t._state=1,t._value=e,$(t);}catch(e){Z(t,e);}var r,o;}function Z(t,e){t._state=2,t._value=e,$(t);}function $(t){2===t._state&&0===t._deferreds.length&&W._immediateFn(function(){t._handled||W._unhandledRejectionFn(t._value);});for(var e=0,n=t._deferreds.length;e<n;e++)X(t,t._deferreds[e]);t._deferreds=null;}function tt(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n;}function et(t,e){var n=!1;try{t(function(t){n||(n=!0,Y(e,t));},function(t){n||(n=!0,Z(e,t));});}catch(t){if(n)return;n=!0,Z(e,t);}}W.prototype.catch=function(t){return this.then(null,t)},W.prototype.then=function(t,e){var n=new this.constructor(Q);return X(this,new tt(t,e,n)),n},W.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){return e.reject(n)})})},W.all=function(t){return new W(function(e,n){if(!J(t))return n(new TypeError("Promise.all accepts an array"));var r=Array.prototype.slice.call(t);if(0===r.length)return e([]);var o=r.length;function i(t,u){try{if(u&&("object"==typeof u||"function"==typeof u)){var s=u.then;if("function"==typeof s)return void s.call(u,function(e){i(t,e);},n)}r[t]=u,0==--o&&e(r);}catch(t){n(t);}}for(var u=0;u<r.length;u++)i(u,r[u]);})},W.resolve=function(t){return t&&"object"==typeof t&&t.constructor===W?t:new W(function(e){e(t);})},W.reject=function(t){return new W(function(e,n){n(t);})},W.race=function(t){return new W(function(e,n){if(!J(t))return n(new TypeError("Promise.race accepts an array"));for(var r=0,o=t.length;r<o;r++)W.resolve(t[r]).then(e,n);})},W._immediateFn="function"==typeof setImmediate&&function(t){setImmediate(t);}||function(t){G(t,0);},W._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t);};var nt=function(){return function(t,e,n,r){this.data=t,this.decorations=e,this.properties=n,this.size=r;}}(),rt=function(){return function(t,e,n,r,o){this.reason=t,this.data=e,this.node=n,this.props=r,this.locale=o;}}();var ot=function(){function n(){this._data=null,this._elem=null,this._nls=null,this._locale="en-us",this._slotResolver=this.getSlotForPalette.bind(this),this.properties=new K(null,null,this._slotResolver),this.meta=new M;}return n.prototype.init=function(t,e){var n=this,r=t.surface.appendChild(document.createElement("div"));r.setAttribute("style","left: 0; top: 0; width: 100%; height: 100%; position: absolute"),r.setAttribute("data-charttype","custom-viz"),this.properties=new K(t.properties,t.dataContext,this._slotResolver),this._nls=t.nls,this._locale=t.locale,W.resolve(this.create(r)).then(function(o){n._elem=o||r,t.properties.forEach(function(t,e){return n.updateProperty(e,t.value)}),e.complete();}).catch(function(t){e.fail(t);});},n.prototype.destroy=function(){},n.prototype.getPropertyApi=function(){return null},n.prototype.setData=function(t){t&&t.dataSets&&t.dataSets[0]?this._data=v(t.dataSets[0]):this._data=null;},n.prototype.setProperty=function(t,e){this.updateProperty(t,this.properties.peek(t));},n.prototype.getBlockingRequests=function(){return null},n.prototype.render=function(t,e,n){if(!this._elem)return n.complete(null,null,null),null;if(!(e.data||e.decorations||e.properties||e.size))return n.complete(null,null,null),null;try{var r=this.update(new rt(function(t){return new nt(t.data,t.decorations,t.properties,t.size)}(e),this._data,this._elem,this.properties,this._locale));W.resolve(r).then(function(){return n.complete(null,null,null)}).catch(n.error);}catch(t){n.error(t);}return null},n.prototype.getEncodings=function(){return this._data?this.updateLegend(this._data):[]},n.prototype.getCapabilities=function(){var t=[];return this.meta.slotLimits.forEach(function(n,r){t.push(e.slotLimit(r,n));}),this.meta.dataLimit>=0&&t.push(e.dataLimit(this.meta.dataLimit)),t},n.prototype.getInteractivity=function(){return null},n.prototype.getVisCoordinate=function(t,e){return e},n.prototype.getRegionAtPoint=function(t,e){return null},n.prototype.getItemsAtPoint=function(t,e,n){if(!t||!t.hasOwnProperty("x")||!t.hasOwnProperty("y"))return null;var r=t,o=document.elementFromPoint(r.x,r.y),i=this.hitTest(o,r,e);return i&&i.source?[i.source]:[]},n.prototype.getItemsInPolygon=function(t,e){return []},n.prototype.getAxisItemsAtPoint=function(t,e,n){return []},n.prototype.getState=function(){return null},n.prototype.setState=function(t){},n.prototype.loadCss=function(t){var e=document.createElement("link");e.type="text/css",e.rel="stylesheet",e.href=this.toUrl(t),document.getElementsByTagName("head")[0].appendChild(e);},n.prototype.toUrl=function(e){return requirejs.toUrl(e)},n.prototype.update=function(t){},n.prototype.create=function(t){},n.prototype.updateProperty=function(t,e){},n.prototype.updateLegend=function(t){return L(t,this.properties,this.meta,this._slotResolver)},n.prototype.getSlotForPalette=function(t,e){return null},n.prototype.hitTest=function(t,e,n){var r=t&&t.__data__;return r&&r.source?r:null},n.prototype.nls=function(t){return this._nls&&this._nls.get(t)||""},n}();

    function ascending(a, b) {
      return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
    }

    function bisector(compare) {
      if (compare.length === 1) compare = ascendingComparator(compare);
      return {
        left: function(a, x, lo, hi) {
          if (lo == null) lo = 0;
          if (hi == null) hi = a.length;
          while (lo < hi) {
            var mid = lo + hi >>> 1;
            if (compare(a[mid], x) < 0) lo = mid + 1;
            else hi = mid;
          }
          return lo;
        },
        right: function(a, x, lo, hi) {
          if (lo == null) lo = 0;
          if (hi == null) hi = a.length;
          while (lo < hi) {
            var mid = lo + hi >>> 1;
            if (compare(a[mid], x) > 0) hi = mid;
            else lo = mid + 1;
          }
          return lo;
        }
      };
    }

    function ascendingComparator(f) {
      return function(d, x) {
        return ascending(f(d), x);
      };
    }

    var ascendingBisect = bisector(ascending);

    function max(values, valueof) {
      let max;
      if (valueof === undefined) {
        for (const value of values) {
          if (value != null
              && (max < value || (max === undefined && value >= value))) {
            max = value;
          }
        }
      } else {
        let index = -1;
        for (let value of values) {
          if ((value = valueof(value, ++index, values)) != null
              && (max < value || (max === undefined && value >= value))) {
            max = value;
          }
        }
      }
      return max;
    }

    function min(values, valueof) {
      let min;
      if (valueof === undefined) {
        for (const value of values) {
          if (value != null
              && (min > value || (min === undefined && value >= value))) {
            min = value;
          }
        }
      } else {
        let index = -1;
        for (let value of values) {
          if ((value = valueof(value, ++index, values)) != null
              && (min > value || (min === undefined && value >= value))) {
            min = value;
          }
        }
      }
      return min;
    }

    function sum(values, valueof) {
      let sum = 0;
      if (valueof === undefined) {
        for (let value of values) {
          if (value = +value) {
            sum += value;
          }
        }
      } else {
        let index = -1;
        for (let value of values) {
          if (value = +valueof(value, ++index, values)) {
            sum += value;
          }
        }
      }
      return sum;
    }

    function justify(node, n) {
      return node.sourceLinks.length ? node.depth : n - 1;
    }

    function constant(x) {
      return function() {
        return x;
      };
    }

    function ascendingSourceBreadth(a, b) {
      return ascendingBreadth(a.source, b.source) || a.index - b.index;
    }

    function ascendingTargetBreadth(a, b) {
      return ascendingBreadth(a.target, b.target) || a.index - b.index;
    }

    function ascendingBreadth(a, b) {
      return a.y0 - b.y0;
    }

    function value(d) {
      return d.value;
    }

    function defaultId(d) {
      return d.index;
    }

    function defaultNodes(graph) {
      return graph.nodes;
    }

    function defaultLinks(graph) {
      return graph.links;
    }

    function find(nodeById, id) {
      const node = nodeById.get(id);
      if (!node) throw new Error("missing: " + id);
      return node;
    }

    function computeLinkBreadths({nodes}) {
      for (const node of nodes) {
        let y0 = node.y0;
        let y1 = y0;
        for (const link of node.sourceLinks) {
          link.y0 = y0 + link.width / 2;
          y0 += link.width;
        }
        for (const link of node.targetLinks) {
          link.y1 = y1 + link.width / 2;
          y1 += link.width;
        }
      }
    }

    function Sankey() {
      let x0 = 0, y0 = 0, x1 = 1, y1 = 1; // extent
      let dx = 24; // nodeWidth
      let dy = 8, py; // nodePadding
      let id = defaultId;
      let align = justify;
      let sort;
      let linkSort;
      let nodes = defaultNodes;
      let links = defaultLinks;
      let iterations = 6;

      function sankey() {
        const graph = {nodes: nodes.apply(null, arguments), links: links.apply(null, arguments)};
        computeNodeLinks(graph);
        computeNodeValues(graph);
        computeNodeDepths(graph);
        computeNodeHeights(graph);
        computeNodeBreadths(graph);
        computeLinkBreadths(graph);
        return graph;
      }

      sankey.update = function(graph) {
        computeLinkBreadths(graph);
        return graph;
      };

      sankey.nodeId = function(_) {
        return arguments.length ? (id = typeof _ === "function" ? _ : constant(_), sankey) : id;
      };

      sankey.nodeAlign = function(_) {
        return arguments.length ? (align = typeof _ === "function" ? _ : constant(_), sankey) : align;
      };

      sankey.nodeSort = function(_) {
        return arguments.length ? (sort = _, sankey) : sort;
      };

      sankey.nodeWidth = function(_) {
        return arguments.length ? (dx = +_, sankey) : dx;
      };

      sankey.nodePadding = function(_) {
        return arguments.length ? (dy = py = +_, sankey) : dy;
      };

      sankey.nodes = function(_) {
        return arguments.length ? (nodes = typeof _ === "function" ? _ : constant(_), sankey) : nodes;
      };

      sankey.links = function(_) {
        return arguments.length ? (links = typeof _ === "function" ? _ : constant(_), sankey) : links;
      };

      sankey.linkSort = function(_) {
        return arguments.length ? (linkSort = _, sankey) : linkSort;
      };

      sankey.size = function(_) {
        return arguments.length ? (x0 = y0 = 0, x1 = +_[0], y1 = +_[1], sankey) : [x1 - x0, y1 - y0];
      };

      sankey.extent = function(_) {
        return arguments.length ? (x0 = +_[0][0], x1 = +_[1][0], y0 = +_[0][1], y1 = +_[1][1], sankey) : [[x0, y0], [x1, y1]];
      };

      sankey.iterations = function(_) {
        return arguments.length ? (iterations = +_, sankey) : iterations;
      };

      function computeNodeLinks({nodes, links}) {
        for (const [i, node] of nodes.entries()) {
          node.index = i;
          node.sourceLinks = [];
          node.targetLinks = [];
        }
        const nodeById = new Map(nodes.map((d, i) => [id(d, i, nodes), d]));
        for (const [i, link] of links.entries()) {
          link.index = i;
          let {source, target} = link;
          if (typeof source !== "object") source = link.source = find(nodeById, source);
          if (typeof target !== "object") target = link.target = find(nodeById, target);
          source.sourceLinks.push(link);
          target.targetLinks.push(link);
        }
        if (linkSort != null) {
          for (const {sourceLinks, targetLinks} of nodes) {
            sourceLinks.sort(linkSort);
            targetLinks.sort(linkSort);
          }
        }
      }

      function computeNodeValues({nodes}) {
        for (const node of nodes) {
          node.value = node.fixedValue === undefined
              ? Math.max(sum(node.sourceLinks, value), sum(node.targetLinks, value))
              : node.fixedValue;
        }
      }

      function computeNodeDepths({nodes}) {
        const n = nodes.length;
        let current = new Set(nodes);
        let next = new Set;
        let x = 0;
        while (current.size) {
          for (const node of current) {
            node.depth = x;
            for (const {target} of node.sourceLinks) {
              next.add(target);
            }
          }
          if (++x > n) throw new Error("circular link");
          current = next;
          next = new Set;
        }
      }

      function computeNodeHeights({nodes}) {
        const n = nodes.length;
        let current = new Set(nodes);
        let next = new Set;
        let x = 0;
        while (current.size) {
          for (const node of current) {
            node.height = x;
            for (const {source} of node.targetLinks) {
              next.add(source);
            }
          }
          if (++x > n) throw new Error("circular link");
          current = next;
          next = new Set;
        }
      }

      function computeNodeLayers({nodes}) {
        const x = max(nodes, d => d.depth) + 1;
        const kx = (x1 - x0 - dx) / (x - 1);
        const columns = new Array(x);
        for (const node of nodes) {
          const i = Math.max(0, Math.min(x - 1, Math.floor(align.call(null, node, x))));
          node.layer = i;
          node.x0 = x0 + i * kx;
          node.x1 = node.x0 + dx;
          if (columns[i]) columns[i].push(node);
          else columns[i] = [node];
        }
        if (sort) for (const column of columns) {
          column.sort(sort);
        }
        return columns;
      }

      function initializeNodeBreadths(columns) {
        const ky = min(columns, c => (y1 - y0 - (c.length - 1) * py) / sum(c, value));
        for (const nodes of columns) {
          let y = y0;
          for (const node of nodes) {
            node.y0 = y;
            node.y1 = y + node.value * ky;
            y = node.y1 + py;
            for (const link of node.sourceLinks) {
              link.width = link.value * ky;
            }
          }
          y = (y1 - y + py) / (nodes.length + 1);
          for (let i = 0; i < nodes.length; ++i) {
            const node = nodes[i];
            node.y0 += y * (i + 1);
            node.y1 += y * (i + 1);
          }
          reorderLinks(nodes);
        }
      }

      function computeNodeBreadths(graph) {
        const columns = computeNodeLayers(graph);
        py = Math.min(dy, (y1 - y0) / (max(columns, c => c.length) - 1));
        initializeNodeBreadths(columns);
        for (let i = 0; i < iterations; ++i) {
          const alpha = Math.pow(0.99, i);
          const beta = Math.max(1 - alpha, (i + 1) / iterations);
          relaxRightToLeft(columns, alpha, beta);
          relaxLeftToRight(columns, alpha, beta);
        }
      }

      // Reposition each node based on its incoming (target) links.
      function relaxLeftToRight(columns, alpha, beta) {
        for (let i = 1, n = columns.length; i < n; ++i) {
          const column = columns[i];
          for (const target of column) {
            let y = 0;
            let w = 0;
            for (const {source, value} of target.targetLinks) {
              let v = value * (target.layer - source.layer);
              y += targetTop(source, target) * v;
              w += v;
            }
            if (!(w > 0)) continue;
            let dy = (y / w - target.y0) * alpha;
            target.y0 += dy;
            target.y1 += dy;
            reorderNodeLinks(target);
          }
          if (sort === undefined) column.sort(ascendingBreadth);
          resolveCollisions(column, beta);
        }
      }

      // Reposition each node based on its outgoing (source) links.
      function relaxRightToLeft(columns, alpha, beta) {
        for (let n = columns.length, i = n - 2; i >= 0; --i) {
          const column = columns[i];
          for (const source of column) {
            let y = 0;
            let w = 0;
            for (const {target, value} of source.sourceLinks) {
              let v = value * (target.layer - source.layer);
              y += sourceTop(source, target) * v;
              w += v;
            }
            if (!(w > 0)) continue;
            let dy = (y / w - source.y0) * alpha;
            source.y0 += dy;
            source.y1 += dy;
            reorderNodeLinks(source);
          }
          if (sort === undefined) column.sort(ascendingBreadth);
          resolveCollisions(column, beta);
        }
      }

      function resolveCollisions(nodes, alpha) {
        const i = nodes.length >> 1;
        const subject = nodes[i];
        resolveCollisionsBottomToTop(nodes, subject.y0 - py, i - 1, alpha);
        resolveCollisionsTopToBottom(nodes, subject.y1 + py, i + 1, alpha);
        resolveCollisionsBottomToTop(nodes, y1, nodes.length - 1, alpha);
        resolveCollisionsTopToBottom(nodes, y0, 0, alpha);
      }

      // Push any overlapping nodes down.
      function resolveCollisionsTopToBottom(nodes, y, i, alpha) {
        for (; i < nodes.length; ++i) {
          const node = nodes[i];
          const dy = (y - node.y0) * alpha;
          if (dy > 1e-6) node.y0 += dy, node.y1 += dy;
          y = node.y1 + py;
        }
      }

      // Push any overlapping nodes up.
      function resolveCollisionsBottomToTop(nodes, y, i, alpha) {
        for (; i >= 0; --i) {
          const node = nodes[i];
          const dy = (node.y1 - y) * alpha;
          if (dy > 1e-6) node.y0 -= dy, node.y1 -= dy;
          y = node.y0 - py;
        }
      }

      function reorderNodeLinks({sourceLinks, targetLinks}) {
        if (linkSort === undefined) {
          for (const {source: {sourceLinks}} of targetLinks) {
            sourceLinks.sort(ascendingTargetBreadth);
          }
          for (const {target: {targetLinks}} of sourceLinks) {
            targetLinks.sort(ascendingSourceBreadth);
          }
        }
      }

      function reorderLinks(nodes) {
        if (linkSort === undefined) {
          for (const {sourceLinks, targetLinks} of nodes) {
            sourceLinks.sort(ascendingTargetBreadth);
            targetLinks.sort(ascendingSourceBreadth);
          }
        }
      }

      // Returns the target.y0 that would produce an ideal link from source to target.
      function targetTop(source, target) {
        let y = source.y0 - (source.sourceLinks.length - 1) * py / 2;
        for (const {target: node, width} of source.sourceLinks) {
          if (node === target) break;
          y += width + py;
        }
        for (const {source: node, width} of target.targetLinks) {
          if (node === source) break;
          y -= width;
        }
        return y;
      }

      // Returns the source.y0 that would produce an ideal link from source to target.
      function sourceTop(source, target) {
        let y = target.y0 - (target.targetLinks.length - 1) * py / 2;
        for (const {source: node, width} of target.targetLinks) {
          if (node === source) break;
          y += width + py;
        }
        for (const {target: node, width} of source.sourceLinks) {
          if (node === target) break;
          y -= width;
        }
        return y;
      }

      return sankey;
    }

    var pi = Math.PI,
        tau = 2 * pi,
        epsilon = 1e-6,
        tauEpsilon = tau - epsilon;

    function Path() {
      this._x0 = this._y0 = // start of current subpath
      this._x1 = this._y1 = null; // end of current subpath
      this._ = "";
    }

    function path() {
      return new Path;
    }

    Path.prototype = path.prototype = {
      constructor: Path,
      moveTo: function(x, y) {
        this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
      },
      closePath: function() {
        if (this._x1 !== null) {
          this._x1 = this._x0, this._y1 = this._y0;
          this._ += "Z";
        }
      },
      lineTo: function(x, y) {
        this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
      },
      quadraticCurveTo: function(x1, y1, x, y) {
        this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
      },
      bezierCurveTo: function(x1, y1, x2, y2, x, y) {
        this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
      },
      arcTo: function(x1, y1, x2, y2, r) {
        x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
        var x0 = this._x1,
            y0 = this._y1,
            x21 = x2 - x1,
            y21 = y2 - y1,
            x01 = x0 - x1,
            y01 = y0 - y1,
            l01_2 = x01 * x01 + y01 * y01;

        // Is the radius negative? Error.
        if (r < 0) throw new Error("negative radius: " + r);

        // Is this path empty? Move to (x1,y1).
        if (this._x1 === null) {
          this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
        }

        // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
        else if (!(l01_2 > epsilon));

        // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
        // Equivalently, is (x1,y1) coincident with (x2,y2)?
        // Or, is the radius zero? Line to (x1,y1).
        else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
          this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
        }

        // Otherwise, draw an arc!
        else {
          var x20 = x2 - x0,
              y20 = y2 - y0,
              l21_2 = x21 * x21 + y21 * y21,
              l20_2 = x20 * x20 + y20 * y20,
              l21 = Math.sqrt(l21_2),
              l01 = Math.sqrt(l01_2),
              l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
              t01 = l / l01,
              t21 = l / l21;

          // If the start tangent is not coincident with (x0,y0), line to.
          if (Math.abs(t01 - 1) > epsilon) {
            this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
          }

          this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
        }
      },
      arc: function(x, y, r, a0, a1, ccw) {
        x = +x, y = +y, r = +r, ccw = !!ccw;
        var dx = r * Math.cos(a0),
            dy = r * Math.sin(a0),
            x0 = x + dx,
            y0 = y + dy,
            cw = 1 ^ ccw,
            da = ccw ? a0 - a1 : a1 - a0;

        // Is the radius negative? Error.
        if (r < 0) throw new Error("negative radius: " + r);

        // Is this path empty? Move to (x0,y0).
        if (this._x1 === null) {
          this._ += "M" + x0 + "," + y0;
        }

        // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
        else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
          this._ += "L" + x0 + "," + y0;
        }

        // Is this arc empty? We’re done.
        if (!r) return;

        // Does the angle go the wrong way? Flip the direction.
        if (da < 0) da = da % tau + tau;

        // Is this a complete circle? Draw two arcs to complete the circle.
        if (da > tauEpsilon) {
          this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
        }

        // Is this arc non-empty? Draw an arc!
        else if (da > epsilon) {
          this._ += "A" + r + "," + r + ",0," + (+(da >= pi)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
        }
      },
      rect: function(x, y, w, h) {
        this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
      },
      toString: function() {
        return this._;
      }
    };

    function constant$1(x) {
      return function constant() {
        return x;
      };
    }

    var pi$1 = Math.PI;

    function x$1(p) {
      return p[0];
    }

    function y$1(p) {
      return p[1];
    }

    var slice = Array.prototype.slice;

    function linkSource(d) {
      return d.source;
    }

    function linkTarget(d) {
      return d.target;
    }

    function link(curve) {
      var source = linkSource,
          target = linkTarget,
          x = x$1,
          y = y$1,
          context = null;

      function link() {
        var buffer, argv = slice.call(arguments), s = source.apply(this, argv), t = target.apply(this, argv);
        if (!context) context = buffer = path();
        curve(context, +x.apply(this, (argv[0] = s, argv)), +y.apply(this, argv), +x.apply(this, (argv[0] = t, argv)), +y.apply(this, argv));
        if (buffer) return context = null, buffer + "" || null;
      }

      link.source = function(_) {
        return arguments.length ? (source = _, link) : source;
      };

      link.target = function(_) {
        return arguments.length ? (target = _, link) : target;
      };

      link.x = function(_) {
        return arguments.length ? (x = typeof _ === "function" ? _ : constant$1(+_), link) : x;
      };

      link.y = function(_) {
        return arguments.length ? (y = typeof _ === "function" ? _ : constant$1(+_), link) : y;
      };

      link.context = function(_) {
        return arguments.length ? ((context = _ == null ? null : _), link) : context;
      };

      return link;
    }

    function curveHorizontal(context, x0, y0, x1, y1) {
      context.moveTo(x0, y0);
      context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
    }

    function linkHorizontal() {
      return link(curveHorizontal);
    }

    function sign(x) {
      return x < 0 ? -1 : 1;
    }

    // Calculate the slopes of the tangents (Hermite-type interpolation) based on
    // the following paper: Steffen, M. 1990. A Simple Method for Monotonic
    // Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
    // NOV(II), P. 443, 1990.
    function slope3(that, x2, y2) {
      var h0 = that._x1 - that._x0,
          h1 = x2 - that._x1,
          s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
          s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
          p = (s0 * h1 + s1 * h0) / (h0 + h1);
      return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
    }

    // Calculate a one-sided slope.
    function slope2(that, t) {
      var h = that._x1 - that._x0;
      return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
    }

    // According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
    // "you can express cubic Hermite interpolation in terms of cubic Bézier curves
    // with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
    function point(that, t0, t1) {
      var x0 = that._x0,
          y0 = that._y0,
          x1 = that._x1,
          y1 = that._y1,
          dx = (x1 - x0) / 3;
      that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
    }

    function MonotoneX(context) {
      this._context = context;
    }

    MonotoneX.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        this._x0 = this._x1 =
        this._y0 = this._y1 =
        this._t0 = NaN;
        this._point = 0;
      },
      lineEnd: function() {
        switch (this._point) {
          case 2: this._context.lineTo(this._x1, this._y1); break;
          case 3: point(this, this._t0, slope2(this, this._t0)); break;
        }
        if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
        this._line = 1 - this._line;
      },
      point: function(x, y) {
        var t1 = NaN;

        x = +x, y = +y;
        if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
        switch (this._point) {
          case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
          case 1: this._point = 2; break;
          case 2: this._point = 3; point(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
          default: point(this, this._t0, t1 = slope3(this, x, y)); break;
        }

        this._x0 = this._x1, this._x1 = x;
        this._y0 = this._y1, this._y1 = y;
        this._t0 = t1;
      }
    };

    function MonotoneY(context) {
      this._context = new ReflectContext(context);
    }

    (MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
      MonotoneX.prototype.point.call(this, y, x);
    };

    function ReflectContext(context) {
      this._context = context;
    }

    ReflectContext.prototype = {
      moveTo: function(x, y) { this._context.moveTo(y, x); },
      closePath: function() { this._context.closePath(); },
      lineTo: function(x, y) { this._context.lineTo(y, x); },
      bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
    };

    function horizontalSource(d) {
      return [d.source.x1, d.y0];
    }

    function horizontalTarget(d) {
      return [d.target.x0, d.y1];
    }

    function sankeyLinkHorizontal() {
      return linkHorizontal()
          .source(horizontalSource)
          .target(horizontalTarget);
    }

    /**
     * Licensed Materials - Property of IBM
     *
     * Copyright IBM Corp. 2019 All Rights Reserved.
     *
     * US Government Users Restricted Rights - Use, duplication or
     * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
     */
    /**
     * This example shows how to use an external library into a custom visualization.
     * The 'd3-sankey' library used in this example was added to 'package.json' and
     * imported in this Main.ts file. It is used to calculate Sankey paths.
     * This sample also shows how to deal with hit-testing in case the nodes that are
     * generated have an indirect link to the data. The 'hitTest' method in this sample
     * shows how to do this.
     */
    // Data column indices (see vizdef.xml).
    var FROM = 0, TO = 1, WEIGHT = 2;
    // Key function that uniquely identifies data elements. Used in 'update'.
    var keyFn = function (elem) { return elem.key || ""; };
    // Creates empty paths for each link between two nodes. Called during 'update' when
    // new data needs to be rendered.
    function createLinks(_selection) {
        // Create a linear gradient and a stroke refering to that gradient.
        var id = Math.random().toString(36).substr(2); // claim a new gradient id.
        var gradient = function (i) { return "grad_" + id + ":" + i; };
        _selection.style("mix-blend-mode", "multiply")
            .append("linearGradient")
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("id", function (_, i) { return gradient(i); })
            .call(function (g) { return g.append("stop").attr("offset", "0%"); })
            .call(function (g) { return g.append("stop").attr("offset", "100%"); });
        _selection.append("path").attr("stroke", function (_, i) { return "url(#" + gradient(i) + ")"; });
    }
    var Sankey$1 = /** @class */ (function (_super) {
        __extends(Sankey$1, _super);
        function Sankey$1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // Custom hitTest method to return the data point or tuple that was hit.
        Sankey$1.prototype.hitTest = function (_elem) {
            // Data is stored in the '$' field of each d3 datum.
            var elem = d3.select(_elem).datum();
            return elem && elem.$;
        };
        // Initial setup of the visualization.
        Sankey$1.prototype.create = function (_parent) {
            // Create an svg canvas with groups for nodes, links and labels.
            var svg = d3.select(_parent).append("svg")
                .attr("width", "100%")
                .attr("height", "100%");
            svg.append("g").attr("class", "nodes").attr("stroke", "#000");
            svg.append("g").attr("class", "links").attr("fill", "none");
            svg.append("g").attr("class", "labels");
            // Return the svg element so it can be used in the `update` method.
            return svg.node();
        };
        // Called every time the visualization needs updating.
        Sankey$1.prototype.update = function (_info) {
            // Retrieve svg node (see `create`) and determine size.
            var svg = d3.select(_info.node);
            var width = _info.node.clientWidth;
            var height = _info.node.clientHeight;
            var data = _info.data;
            // If there is no data, remove everything from the canvas and exit.
            if (!data || !data.rows.length) {
                svg.selectAll("g>*").remove();
                return;
            }
            // Generate data structure for Sankey. Note the prefix that is used for the source
            // and target node. This is done to prevent circular links in case the FROM and TO
            // columns are mapped to the same data item. The field '$' is added to each link to
            // store a reference to the original data row (needed for hit testing support).
            // The nodes are created from the tuples in the 'from' and 'to' slots. Notice that
            // we use a 'filter' operation on the nodes to remove nodes that are not used in any
            // links. This is to prevent rendering unnecessary 'empty' nodes.
            var keys = new Set(); // source and target keys, needed to delete unused nodes
            var links = data.rows.map(function (_row) {
                var link = {
                    source: "F:" + _row.tuple(FROM).key,
                    target: "T:" + _row.tuple(TO).key,
                    value: Math.abs(_row.value(WEIGHT)),
                    key: _row.key,
                    $: _row
                };
                keys.add(link.source).add(link.target);
                return link;
            });
            var fromNodes = data.cols[FROM].tuples.map(function (t) { return ({ $: t, key: "F:" + t.key }); });
            var toNodes = data.cols[TO].tuples.map(function (t) { return ({ $: t, key: "T:" + t.key }); });
            var nodes = fromNodes.concat(toNodes).filter(function (_node) { return keys.has(_node.key); });
            // Generate sankey data from the data structures.
            var createSankey = Sankey()
                .nodeId(function (n) { return n.key; })
                .nodeWidth(15) // width (in px) of a node rectangle
                .linkSort(null) // links are in row order
                .nodeSort(null) // nodes are in tuple order
                .size([width, height]); // size of the visualization
            createSankey({ nodes: nodes, links: links }); // generate Sankey data
            // An ordinal color scale assigns a new color to each unique node.
            var colors = d3.scaleOrdinal(d3.schemeSet3);
            // Update nodes. Ensure that tuples are colored based on tuple key.
            svg.select(".nodes")
                .selectAll("rect")
                .data(nodes, keyFn)
                .join("rect")
                .attr("x", function (d) { return d.x0; })
                .attr("y", function (d) { return d.y0; })
                .attr("height", function (d) { return Math.max(0, d.y1 - d.y0); })
                .attr("width", function (d) { return d.x1 - d.x0; })
                .attr("stroke-width", 0)
                .attr("fill", function (d) { return colors(d.$.key); }); // node color
            // Update links that connect the nodes. From and to colors are based on tuple key.
            svg.select(".links")
                .selectAll("g")
                .data(links, keyFn)
                .join(function (enter) { return enter.append("g").call(createLinks); })
                .call(function (g) {
                g.attr("stroke-opacity", function (d) { return d.$.highlighted || d.$.selected ? 1 : 0.4; });
                g.select("linearGradient") // gradient offsets
                    .attr("x1", function (d) { return d.source.x1; })
                    .attr("x2", function (d) { return d.source.x2; });
                g.select("stop:nth-of-type(1)") // 'from' color
                    .attr("stop-color", function (d) { return colors(d.source.$.key); });
                g.select("stop:nth-of-type(2)") // 'to' color
                    .attr("stop-color", function (d) { return colors(d.target.$.key); });
                g.select("path") // uses the generated path in 'links'
                    .attr("d", sankeyLinkHorizontal())
                    .attr("stroke-width", function (d) { return Math.max(1, d.width); });
            });
            // Update labels for each node.
            svg.select(".labels")
                .selectAll("text")
                .data(nodes, keyFn)
                .join("text")
                .attr("x", function (d) { return d.x0 < width / 2 ? d.x1 + 6 : d.x0 - 6; }) // 6px margin
                .attr("y", function (d) { return (d.y1 + d.y0) / 2; }) // center vertically
                .attr("dy", "0.35em") // offset to center of the node
                .attr("text-anchor", function (d) { return d.x0 < width / 2 ? "start" : "end"; }) // alignment
                .attr("font-weight", function (d) { return d.$.selected ? "bold" : "normal"; }) // bold if selected
                .text(function (d) { return d.$.caption; }); // use the tuple caption
        };
        return Sankey$1;
    }(ot));

    return Sankey$1;

});
