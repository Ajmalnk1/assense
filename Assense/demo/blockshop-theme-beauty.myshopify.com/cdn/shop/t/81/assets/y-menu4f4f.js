/** Shopify CDN: Minification failed

Line 16:0 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 16:43 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 16:71 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 16:544 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 16:548 Transforming array spread to the configured target environment ("es5") is not supported yet
Line 16:570 Transforming array spread to the configured target environment ("es5") is not supported yet
Line 16:593 Transforming array spread to the configured target environment ("es5") is not supported yet
Line 16:635 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 16:672 Transforming const to the configured target environment ("es5") is not supported yet
Line 16:1014 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
... and 3 more hidden warnings

**/
class yMenu extends HTMLElement{constructor(){super()}connectedCallback(){this.state="closed",this.back_links=this.querySelectorAll(".y-menu--back-link a"),this.regular_links=this.querySelectorAll('.y-menu--level-1--link > a:not([data-submenu="true"]), .y-menu--level-2--link > a:not([data-submenu="true"]), .y-menu--level-3--link > a:not([data-submenu="true"])'),this.timer=null,this.sub_menu_links=[],this.querySelectorAll(".icon--chevron-right--small").forEach(e=>this.sub_menu_links.push(e.parentNode)),this.listeners()}disconnectedCallback(){[...this.regular_links,...this.sub_menu_links,...this.back_links].off("click")}listeners(){this.regular_links.on("click",e=>{const t=e.target.getAttribute("href");-1!==t.indexOf("#")&&(theme.drawer.close(),setTimeout(()=>window.location.href=t,450))}),this.sub_menu_links.on("click",e=>{this.openSubMenu(e.target),e.preventDefault(),e.stopPropagation()}),this.back_links.on("click",e=>{this.closeSubMenu(e.target),e.preventDefault(),e.stopPropagation()})}adjustHeight(e){let t=e.offsetHeight;var s=this.offsetHeight,l=(this.style.height=s+"px",window.getComputedStyle(e).position);"absolute"===l&&(e.style.position="relative",t=e.offsetHeight,e.style.position="absolute"),this.style.height=t+"px"}openSubMenu(e){var t=e.closest("li").querySelector("ul");t.style.display="block",this.adjustHeight(t),t.style.transform="translateX(-100%)"}closeSubMenu(e){var t=e.closest("ul"),s=t.parentNode.closest("ul");this.adjustHeight(s),t.style.transform="translateX(0)"}}customElements.define("y-menu-root",yMenu);