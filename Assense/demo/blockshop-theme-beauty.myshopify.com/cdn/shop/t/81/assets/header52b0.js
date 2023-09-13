/** Shopify CDN: Minification failed

Line 11:0 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 11:44 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 11:72 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 11:386 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 11:479 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 11:604 Transforming object literal extensions to the configured target environment ("es5") is not supported yet

**/
class Header extends HTMLElement{constructor(){super()}connectedCallback(){this.localization_form=this.querySelector(".header--localization-for-drawer form"),this.mobile_nav=document.querySelector(".mobile-nav--menu"),this.y_menu=document.querySelector(".y-menu"),this.moveYMenu(),this.localization_form&&this.moveLocalizationForm(),Shopify.designMode&&this.sectionListeners()}moveYMenu(){this.mobile_nav.innerHTML="",this.mobile_nav.appendChild(this.y_menu)}moveLocalizationForm(){var e=document.querySelector(".mobile-nav--localization");e.innerHTML="",e.append(this.localization_form)}sectionListeners(){this.on("theme:section:load",()=>theme.drawer.loadTriggers())}}customElements.define("header-root",Header);