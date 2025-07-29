"use strict";var O=function(n,i){return function(){return i||n((i={exports:{}}).exports,i),i.exports}};var m=O(function(R,q){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=require('@stdlib/utils-define-read-write-accessor/dist'),g=require('@stdlib/array-base-copy/dist'),k=require('@stdlib/ndarray-numel/dist');function w(n,i){var p,h,o,a,v,s,c,r;if(s=n.length,s<1)return[];if(o=g(n),c=k(o[0]),c<1)return[];a=g(i);function f(t){return l(this,"_i",t),this}for(r=0;r<s;r++)p=y(o[r]),h=N(o[r]),_(f.prototype,a[r],p,h);for(l(f.prototype,"toJSON",d),v=[],r=0;r<c;r++)v.push(new f(r));return v;function y(t){return e;function e(){return t.get(this._i)}}function N(t){return e;function e(u){t.set(this._i,u)}}function d(){var t,e,u;for(t={},u=0;u<s;u++)e=a[u],t[e]=this[e];return t}}q.exports=w
});var x=m();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
