/** Shopify CDN: Minification failed

Line 11:0 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 11:48 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 11:76 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 11:162 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 11:229 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 11:299 Transforming object literal extensions to the configured target environment ("es5") is not supported yet

**/
class Transition extends HTMLElement{constructor(){super()}connectedCallback(){this.state="at_start",this.setState(this.state),this.transitionListeners()}setState(t){this.setAttribute("data-transition",t),this.state=t}updateState(){this.state=this.getAttribute("data-transition")}transitionListeners(){this.on("transitionend",t=>{t.target===this&&(this.updateState(),"forwards"===this.state?(this.setState("at_end"),this.trigger("transition:at_end")):"backwards"===this.state&&(this.setState("at_start"),this.trigger("transition:at_start")))})}}customElements.define("transition-root",Transition);