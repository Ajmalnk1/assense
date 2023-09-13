const SwipeListener=function(f,g){if(f){"undefined"!=typeof window&&"function"!=typeof window.CustomEvent&&(r.prototype=window.Event.prototype,window.CustomEvent=r);g={minHorizontal:10,minVertical:10,deltaHorizontal:3,deltaVertical:5,preventScroll:!1,lockAxis:!0,touch:!0,mouse:!0,...g=g||{}};let m=[],t=!1;function n(e){t=!0}function o(e){t=!1,s(e)}function i(e){t&&(e.changedTouches=[{clientX:e.clientX,clientY:e.clientY}],l(e))}g.mouse&&(f.addEventListener("mousedown",n),f.addEventListener("mouseup",o),f.addEventListener("mousemove",i));const s=function(s){if(m.length){var l="function"==typeof TouchEvent&&s instanceof TouchEvent;let t=[],n=[],e={top:!1,right:!1,bottom:!1,left:!1};for(let e=0;e<m.length;e++)t.push(m[e].x),n.push(m[e].y);var c=t[0],u=t[t.length-1],h=n[0],d=n[n.length-1],v={x:[c,u],y:[h,d]};1<m.length&&(p={detail:{touch:l,target:s.target,...v}},p=new CustomEvent("swiperelease",p),f.dispatchEvent(p));var p=t[0]-t[t.length-1];let o="none";o=0<p?"left":"right";let i=Math.min(...t),a=Math.max(...t),r;if(Math.abs(p)>=g.minHorizontal)switch(o){case"left":r=Math.abs(i-t[t.length-1]),r<=g.deltaHorizontal&&(e.left=!0);break;case"right":r=Math.abs(a-t[t.length-1]),r<=g.deltaHorizontal&&(e.right=!0)}if(p=n[0]-n[n.length-1],o="none",o=0<p?"top":"bottom",i=Math.min(...n),a=Math.max(...n),Math.abs(p)>=g.minVertical)switch(o){case"top":r=Math.abs(i-n[n.length-1]),r<=g.deltaVertical&&(e.top=!0);break;case"bottom":r=Math.abs(a-n[n.length-1]),r<=g.deltaVertical&&(e.bottom=!0)}m=[],e.top||e.right||e.bottom||e.left?(g.lockAxis&&((e.left||e.right)&&Math.abs(c-u)>Math.abs(h-d)?e.top=e.bottom=!1:(e.top||e.bottom)&&Math.abs(c-u)<Math.abs(h-d)&&(e.left=e.right=!1)),d={detail:{directions:e,touch:l,target:s.target,...v}},d=new CustomEvent("swipe",d),f.dispatchEvent(d)):(v=new CustomEvent("swipecancel",{detail:{touch:l,target:s.target,...v}}),f.dispatchEvent(v))}},l=function(e){var t=e.changedTouches[0];m.push({x:t.clientX,y:t.clientY}),1<m.length&&(t={detail:{x:[m[0].x,m[m.length-1].x],y:[m[0].y,m[m.length-1].y],touch:"function"==typeof TouchEvent&&e instanceof TouchEvent,target:e.target}},t=new CustomEvent("swiping",t),(!0===g.preventScroll||"function"==typeof g.preventScroll&&g.preventScroll(t))&&e.preventDefault(),f.dispatchEvent(t))};let e=!1;try{var a=Object.defineProperty({},"passive",{get:function(){e={passive:!g.preventScroll}}});window.addEventListener("testPassive",null,a),window.removeEventListener("testPassive",null,a)}catch(e){}return g.touch&&(f.addEventListener("touchmove",l,e),f.addEventListener("touchend",s)),{off:function(){f.removeEventListener("touchmove",l,e),f.removeEventListener("touchend",s),f.removeEventListener("mousedown",n),f.removeEventListener("mouseup",o),f.removeEventListener("mousemove",i)}}}function r(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}};"undefined"!=typeof module&&void 0!==module.exports?(module.exports=SwipeListener,module.exports.default=SwipeListener):"function"==typeof define&&define.amd?define([],function(){return SwipeListener}):window.SwipeListener=SwipeListener;