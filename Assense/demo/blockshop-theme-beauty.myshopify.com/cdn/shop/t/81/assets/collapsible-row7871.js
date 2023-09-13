/** Shopify CDN: Minification failed

Line 15:0 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 15:52 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 15:80 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 15:415 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 15:465 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 15:596 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 15:702 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 15:827 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 15:901 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 15:1179 Transforming const to the configured target environment ("es5") is not supported yet

**/
class CollapsibleRow extends HTMLElement{constructor(){super()}connectedCallback(){this.toggle=this.querySelector(".collapsible-row--toggle"),this.default_state=this.menuOpened(),this.description=this.querySelector(".collapsible-row--content"),this.description_wrapper=this.querySelector(".collapsible-row--content-wrapper"),this.toggleListener(),this.resizeObserver(),this.transitionListener()}disconnectedCallback(){this.toggle.off("click keydown")}toggleListener(){this.toggle.on("click keydown",e=>{"keydown"===e.type&&"Enter"!==e.key||this.setTransitions(!this.menuOpened())})}resizeObserver(){new ResizeObserver(()=>this.setTransitions(this.default_state)).observe(this.toggle)}transitionListener(){this.description_wrapper.on("transition:at_end",()=>this.description.setAttribute("data-transition","fade-in"))}menuOpened(){return"true"===this.toggle.getAttribute("aria-expanded")}setTransitions(e){this.toggle.setAttribute("aria-expanded",e),e?(this.description_wrapper.style.height=this.description.offsetHeight+"px",this.description_wrapper.setState("forwards")):(this.description_wrapper.style.height="0px",this.description.setAttribute("data-transition","fade-out"))}}const collapsibleRowEl=customElements.get("collapsible-row-root");collapsibleRowEl||customElements.define("collapsible-row-root",CollapsibleRow);