/** Shopify CDN: Minification failed

Line 11:0 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 11:44 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 11:72 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 11:407 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 11:482 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 11:578 Transforming object literal extensions to the configured target environment ("es5") is not supported yet

**/
class Radios extends HTMLElement{constructor(){super()}connectedCallback(){this.current_value=this.querySelector(".radios--option-current"),this.inputs=this.querySelectorAll("input"),this.is_swatches="true"===this.getAttribute("data-is-swatches"),this.preventFormSubmitOnEnter(),this.is_swatches&&(theme.utils.setSwatchColors(this.inputs),this.current_value)&&this.updateLabelOnChange()}disconnectedCallback(){this.inputs.off("keydown.Radios change.Radios")}preventFormSubmitOnEnter(){this.inputs.on("keydown.Radios",t=>{"Enter"===t.key&&t.preventDefault()})}updateLabelOnChange(){this.inputs.on("change.Radios",t=>{this.current_value.textContent=t.target.value})}}customElements.define("radios-root",Radios);