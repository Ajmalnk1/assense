/** Shopify CDN: Minification failed

Line 12:0 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 12:53 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 12:81 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 12:198 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 12:352 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 12:416 Transforming destructuring to the configured target environment ("es5") is not supported yet
Line 12:481 Transforming const to the configured target environment ("es5") is not supported yet

**/
class ProductQuantity extends HTMLElement{constructor(){super()}connectedCallback(){this.input=this.querySelector("input"),this.valueChangedListener(),this.updateValueListener()}valueChangedListener(){this.input.on("change",()=>{var t=parseInt(this.input.value);window.trigger(`theme:product:${this.dataset.id}:quantityChanged`,t)})}updateValueListener(){window.on(`theme:product:${this.dataset.id}:updateQuantity`,({detail:t})=>{this.input.value=t,this.input.trigger("change")})}}const productQuantityEl=customElements.get("product-quantity-root");productQuantityEl||customElements.define("product-quantity-root",ProductQuantity);