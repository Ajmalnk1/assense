/** Shopify CDN: Minification failed

Line 9:0 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 9:55 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 9:83 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 9:102 Transforming object literal extensions to the configured target environment ("es5") is not supported yet

**/
class ProductHoverImage extends HTMLElement{constructor(){super()}connectedCallback(){this.load()}load(){theme.utils.imagesLoaded(this,()=>{var e=this.closest('[data-hover-image="true"]');e&&e.setAttribute("data-hover-image","loaded")})}}customElements.define("product-hover-image",ProductHoverImage);