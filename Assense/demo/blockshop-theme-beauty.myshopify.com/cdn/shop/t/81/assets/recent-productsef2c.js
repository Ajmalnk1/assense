/** Shopify CDN: Minification failed

Line 12:0 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 12:52 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 12:80 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 12:382 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 12:492 Transforming async functions to the configured target environment ("es5") is not supported yet
Line 12:698 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 12:824 Transforming const to the configured target environment ("es5") is not supported yet

**/
class RecentProducts extends HTMLElement{constructor(){super()}connectedCallback(){this.grid_container=this.querySelector(".recent-products--grid"),this.fragment=new DocumentFragment,this.spinner=this.querySelector(".recent-products--spinner"),this.storage=JSON.parse(localStorage.getItem(theme.local_storage.recent_products)),this.storage?this.load():this.style.display="none"}load(){var t=this.storage.map(t=>this.renderProductItem(t));Promise.allSettled(t).then(()=>this.productsLoaded())}async renderProductItem(t){var e,r,s=await fetch(theme.urls.root+`/products/${t}?view=ajax-item`);s.ok&&(e=await s.text(),r=theme.utils.parseHtml(e,".product--root"),this.fragment.prepend(r))}productsLoaded(){this.grid_container.prepend(this.fragment),this.grid_container.removeAttribute("style"),this.spinner.style.display="none"}}const recentProductsEl=customElements.get("recent-products-root");recentProductsEl||customElements.define("recent-products-root",RecentProducts);