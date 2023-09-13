/** Shopify CDN: Minification failed

Line 16:0 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 16:51 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 16:79 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 16:209 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 16:307 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 16:385 Transforming destructuring to the configured target environment ("es5") is not supported yet
Line 16:393 Transforming destructuring to the configured target environment ("es5") is not supported yet
Line 16:481 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 16:517 Transforming destructuring to the configured target environment ("es5") is not supported yet
Line 16:666 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
... and 1 more hidden warnings

**/
class ProductThumbs extends HTMLElement{constructor(){super()}connectedCallback(){this.thumbs=this.querySelectorAll(".product-media--thumb"),this.updateMediaListener(),this.clickListener()}disconnectedCallback(){window.off(`theme:product:${this.dataset.id}:variantChanged.ProductThumbs`)}updateMediaListener(){window.on(`theme:product:${this.dataset.id}:variantChanged.ProductThumbs`,({detail:{variant:t}})=>{t.featured_media&&this.updateActive(t.featured_media.id)})}clickListener(){this.thumbs.on("keypress click",({target:t})=>{var e=parseInt(t.dataset.id);this.updateActive(e),window.trigger(`theme:product:${this.dataset.id}:mediaChanged`,{id:e})})}updateActive(d){this.thumbs.forEach(t=>{var e=parseInt(t.dataset.id);t.setAttribute("data-active",e===d)})}}const productThumbsEl=customElements.get("product-thumbs-root");productThumbsEl||customElements.define("product-thumbs-root",ProductThumbs);