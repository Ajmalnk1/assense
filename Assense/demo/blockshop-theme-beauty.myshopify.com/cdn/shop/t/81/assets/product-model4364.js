/** Shopify CDN: Minification failed

Line 11:0 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 11:50 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 11:78 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 11:401 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 11:645 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 11:933 Transforming object literal extensions to the configured target environment ("es5") is not supported yet

**/
class ProductModel extends HTMLElement{constructor(){super()}connectedCallback(){this.view=this.getAttribute("data-view"),this.json=JSON.parse(document.querySelector("#product-model--json").innerHTML),this.eventListeners(),window.Shopify.loadFeatures([{name:"shopify-xr",version:"1.0",onLoad:()=>this.loadShopifyXr()},{name:"model-viewer-ui",version:"1.0",onLoad:()=>this.loadModel()}])}eventListeners(){this.on("theme:section:load",()=>this.loadModel()),this.on("pauseMedia",()=>!!this.model&&this.model.pause()),this.on("playMedia",()=>!!this.model&&this.model.play()),new ResizeObserver(()=>this.trigger("pauseMedia")).observe(this)}loadModel(){this.model||!Shopify.ModelViewerUI||"small"===theme.mqs.current_window&&"desktop"===this.view||"small"!==theme.mqs.current_window&&"mobile"===this.view||(this.model=new Shopify.ModelViewerUI(this.querySelector("model-viewer")),window.trigger("theme:product:mediaLoaded"))}loadShopifyXr(){window.ShopifyXR?this.models_added||(window.ShopifyXR.addModels(this.json),window.ShopifyXR.setupXRElements(),this.models_added=!0):document.addEventListener("shopify_xr_initialized",()=>this.loadShopifyXr())}}customElements.define("product-model-root",ProductModel);