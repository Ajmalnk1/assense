/** Shopify CDN: Minification failed

Line 16:0 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 16:48 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 16:76 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 16:210 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 16:347 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 16:829 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 16:1941 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 16:3521 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 16:3666 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 16:3713 Transforming destructuring to the configured target environment ("es5") is not supported yet
... and 32 more hidden warnings

**/
class Navigation extends HTMLElement{constructor(){super()}connectedCallback(){this.current_width=window.innerWidth,"loading"===document.readyState?window.on("DOMContentLoaded",()=>this.load()):this.load()}load(){this.initGrid(),this.initNavigation(),this.initFilter(),this.navigationListener(),Shopify.designMode&&this.sectionListeners()}initGrid(){this.body=document.querySelector("[data-body-root]"),this.grid_container=this.body.querySelector("[data-body-grid]"),this.max_columns=parseInt(this.body.getAttribute("data-max-columns")),this.num_columns=parseInt(this.grid_container.getAttribute("data-columns")),this.pagination=this.body.querySelector("[data-body-pagination]"),this.pagination_link=this.body.querySelector("[data-body-pagination-link]"),this.spinner=this.body.querySelector("[data-body-spinner]")}initNavigation(){this.active_price_tag=this.querySelector('.navigation--active-tag[data-type="price"]'),this.active_min=this.active_price_tag.querySelector("[data-min-price]"),this.active_max=this.active_price_tag.querySelector("[data-max-price]"),this.active_refine_tag=this.querySelector('.navigation--active-tag[data-type="refine"]'),this.active_sort_tag=this.querySelector('.navigation--active-tag[data-type="sort"]'),this.active_tags_container=this.querySelector(".navigation--tags-container"),this.active_tags_wrapper=this.querySelector(".navigation--active-tags"),this.clear_tags_button=this.querySelector(".navigation--active-clear"),this.layout_buttons=this.querySelectorAll(".navigation--layout-button"),this.navigation_buttons=this.querySelectorAll(".navigation--button, .navigation--mobile-button"),this.small_layout_button=this.layout_buttons[1],this.storage_name=this.getAttribute("data-storage-name"),this.url=this.getAttribute("data-url"),this.layout_buttons.length&&2<this.max_columns?(this.initLayout(),this.setLayout(),this.layoutListener()):this.layout_buttons.forEach(t=>t.style.display="none")}initFilter(){this.filter=this.filter||this.parentNode.querySelector(".filter--root"),this.filter&&(this.moveFilterToDrawer(),this.browse_links=this.filter.querySelectorAll('[data-type="browse"] .filter--label'),this.current_sort_input=this.filter.querySelector('[data-type="sort"] .filter--input:checked'),this.filter_form=this.filter.querySelector(".filter--form"),this.menu_toggles=this.filter.querySelectorAll(".filter--toggle"),this.price_range=this.filter.querySelector(".price-range--wrapper"),this.refine_links=this.filter.querySelectorAll('[data-type="refine"] .filter--label'),this.reset_button=this.filter.querySelector('.filter--button[data-type="reset"]'),this.sort_links=this.filter.querySelectorAll('[data-type="sort"] .filter--label'),this.swatch_inputs=this.filter.querySelectorAll('[data-is-swatches="true"] .filter--input'),this.menu_toggles.length&&(this.menuToggleListeners(),this.clearAllListener()),this.browse_links.length&&this.browseListener(),this.sort_links.length&&(this.current_sort_input&&(this.current_sort_link=this.current_sort_input.nextElementSibling,this.current_sort_value=this.current_sort_input.value,this.current_sort_label=this.current_sort_input.getAttribute("data-label")),this.sortListener(),this.renderActiveSort(),this.activeSortListener()),this.refine_links.length&&(this.refineListener(),this.swatch_inputs.length&&theme.utils.setSwatchColors(this.swatch_inputs),this.renderActiveRefines()),this.price_range&&(this.renderActivePriceListener(),this.getNewProductsListener(),this.activePriceListener()),this.toggleActiveTags())}sectionListeners(){window.on("shopify:section:load",()=>{this.initGrid(),this.initNavigation(),this.initFilter(),theme.drawer.loadTriggers()})}navigationListener(){this.navigation_buttons.on("click keydown",({key:t,target:e,type:i})=>{"keydown"===i&&"Enter"!==t||this.toggleFilterMenu(e.getAttribute("data-toggle-menu"))})}toggleFilterMenu(e){document.querySelectorAll(".filter--toggle").forEach(t=>{t.setAttribute("aria-expanded",!1),t.getAttribute("aria-controls").includes(e)&&t.click()})}initLayout(){this.layout_buttons.forEach(t=>t.removeAttribute("style")),this.small_layout_button.setAttribute("data-column-size",this.max_columns)}setLayout(){let e=parseInt(localStorage.getItem(theme.local_storage[this.storage_name]));e&&(2===e||e===this.num_columns)||(e=this.num_columns,localStorage.setItem(theme.local_storage[this.storage_name],e)),this.grid_container.setAttribute("data-columns",e),this.layout_buttons.forEach(t=>{t.setAttribute("data-active",!1),parseInt(t.getAttribute("data-column-size"))===e&&t.setAttribute("data-active",!0)})}layoutListener(){this.layout_buttons.off("click keydown"),this.layout_buttons.on("click keydown",t=>{var e;"keydown"===t.type&&"Enter"!==t.key||(e=parseInt(t.target.getAttribute("data-column-size")),localStorage.setItem(theme.local_storage[this.storage_name],e),this.setLayout())})}moveFilterToDrawer(){var t=theme.drawer.querySelector('[data-view="filter"]');t.innerHTML="",t.appendChild(this.filter),theme.drawer.loadTriggers()}menuToggleListeners(){this.menu_toggles.on("click keydown",t=>{if("keydown"!==t.type||"Enter"===t.key){var e=t.target,i="true"!==e.getAttribute("aria-expanded");e.setAttribute("aria-expanded",i);const r=e.nextElementSibling;i?setTimeout(()=>{r.setAttribute("data-transition","fade-in")},0):r.setAttribute("data-transition","fade-out")}})}clearAllListener(){[this.clear_tags_button,this.reset_button].on("click keydown",t=>{"keydown"===t.type&&"Enter"!==t.key||(this.current_sort_link&&this.current_sort_link.click(),window.trigger("theme:priceRange:clear"),this.active_refine_tags.length&&this.active_refine_tags.forEach(t=>t.trigger("click")),t.target.focus())})}browseListener(){this.browse_links.on("click keydown",i=>{if("keydown"!==i.type||"Enter"===i.key){const r=i.target.previousElementSibling;let t=!1,e;r.checked&&(t=!0),setTimeout(()=>{e=t?(r.checked=!1,theme.urls.all_products_collection):r.value,location.href=""+location.origin+e,setTimeout(()=>theme.drawer.close(),350)},0)}})}sortListener(){this.sort_links.on("click keydown",e=>{if("keydown"!==e.type||"Enter"===e.key){const i=e.target,r=i.previousElementSibling;let t=!1;r.checked&&(t=!0),setTimeout(()=>{t?(r.checked=!1,this.current_sort_link=!1,this.current_sort_label=!1,this.current_sort_value=!1):(r.checked=!0,this.current_sort_link=i,this.current_sort_label=r.dataset.label,this.current_sort_value=r.value),this.showLoadingView(),this.renderActiveSort(),this.getAjaxUrl()},0)}})}refineListener(){this.refine_links.on("click keydown",t=>{var e;"keydown"===t.type&&"Enter"!==t.key||("Enter"===t.key&&((e=t.target.previousElementSibling).checked=!e.checked),setTimeout(()=>{var t=this.active_tags_wrapper.querySelectorAll('.navigation--active-tag[data-type="refine"]');t.length&&t.forEach(t=>t.remove()),this.showLoadingView(),this.renderActiveRefines(),this.getAjaxUrl()},0))})}getNewProductsListener(){window.on("theme:navigation:loadNewProducts",()=>{this.showLoadingView(),this.getAjaxUrl()})}getAjaxUrl(){var t=new FormData(this.filter_form),e=new URLSearchParams(t);this.ajax_url=""+this.url+e.toString(),history.replaceState({},"",this.ajax_url),this.getGridHtml(),this.toggleActiveTags()}showLoadingView(){this.grid_container.innerHTML="",[this.grid_container,this.pagination].forEach(t=>t.style.display="none"),this.spinner.style.display="flex"}async getGridHtml(){this.abort_controller&&this.abort_controller.abort(),this.abort_controller=new AbortController;try{if(this.response=await fetch(this.ajax_url,{signal:this.abort_controller.signal}),!this.response.ok)throw new Error(response.statusText);var t=await this.response.text(),e=theme.utils.parseHtml(t,"[data-body-root]",["predictive-search-root"]);this.renderGridHtml(e),this.spinner.style.display="none",this.grid_container.removeAttribute("style"),window.trigger("theme:navigation:reloaded")}catch{}}renderGridHtml(t){var e=t.querySelector("[data-body-grid]").innerHTML,i=(this.grid_container.innerHTML=e,t.querySelector("[data-body-pagination]"));i?(this.pagination.innerHTML=i.innerHTML,this.pagination.removeAttribute("style"),this.pagination_link&&(this.pagination_link.style.display="block")):this.pagination_link&&(this.pagination_link.style.display="none")}renderActiveSort(){this.current_sort_value?(this.render_active_sort=!0,this.active_sort_tag.querySelector("span").textContent=this.current_sort_label,this.active_sort_tag.setAttribute("data-value",this.current_sort_value),this.active_sort_tag.removeAttribute("style")):(this.render_active_sort=!1,this.active_sort_tag.style.display="none")}renderActivePriceListener(){window.on("theme:priceRange:renderActive",({detail:t})=>{0===t.current_min&&t.current_max===t.max?(this.active_price_tag.style.display="none",this.render_active_price=!1):(this.render_active_price=!0,this.active_min.textContent=""+t.current_min,this.active_max.textContent=""+t.current_max,this.active_price_tag.removeAttribute("style")),this.toggleActiveTags()})}renderActiveRefines(){this.active_refine_tags=[],this.render_active_refine=!1;const i={labels:[],names:[],swatches:[],values:[]};if(this.filter.querySelectorAll('[data-type="refine"] input:checked').forEach(t=>{i.labels.push(t.getAttribute("data-label")),i.names.push(t.name),i.values.push(t.value);var e=t.nextElementSibling;"swatch"===e.getAttribute("data-item")?i.swatches.push(e.getAttribute("style")):i.swatches.push(!1)}),0<i.values.length){var t=new DocumentFragment;for(let e=0;e<i.values.length;e++){var r=this.active_refine_tag.cloneNode(!0),s=(r.removeAttribute("style"),r.setAttribute("data-value",i.values[e]),r.setAttribute("data-name",i.names[e]),r.querySelector("span").textContent=i.labels[e],r.querySelectorAll('[data-item="swatch"]'));i.swatches[e]&&s.length?s.forEach(t=>t.setAttribute("style",i.swatches[e])):s.length&&s.forEach(t=>t.remove()),t.prepend(r),this.active_refine_tags.push(r)}this.active_tags_wrapper.prepend(t),this.render_active_refine=!0,this.activeRefineListeners()}}toggleActiveTags(){var t=this.render_active_refine||this.render_active_sort||this.render_active_price;this.active_tags_container.style.display=t?"block":"none"}activeSortListener(){this.active_sort_tag.on("click keydown",t=>{"keydown"===t.type&&"Enter"!==t.key||this.current_sort_link&&this.current_sort_link.click()})}activePriceListener(){this.active_price_tag.on("click keydown",t=>{"keydown"===t.type&&"Enter"!==t.key||window.trigger("theme:priceRange:clear")})}activeRefineListeners(){this.active_refine_tags.on("click keydown",t=>{if("keydown"!==t.type||"Enter"===t.key){const s=t.target;this.refine_links.forEach(t=>{var e=t.previousElementSibling,i=s.getAttribute("data-value"),r=s.getAttribute("data-name");e.value===i&&e.name===r&&(t.click(),e.checked=!1)})}})}}customElements.define("navigation-root",Navigation);