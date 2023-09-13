/** Shopify CDN: Minification failed

Line 14:0 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 14:54 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 14:398 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 14:538 Transforming async functions to the configured target environment ("es5") is not supported yet
Line 14:1098 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 14:1200 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 14:1375 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 14:1379 Transforming default arguments to the configured target environment ("es5") is not supported yet
Line 14:1491 Transforming object literal extensions to the configured target environment ("es5") is not supported yet

**/
class PredictiveSearch extends HTMLElement{constructor(){super(),this.form=this.querySelector("form"),this.clear_button=this.querySelector(".search--clear"),this.input=this.querySelector(".search--textbox"),this.results=this.querySelector(".search--results"),this.cached_results={"":this.results.innerHTML},this.listenForKeyEntered(),this.formSubmit(),this.clearButtonListener()}listenForKeyEntered(){this.input.on("input",()=>{var t=this.input.value.trim();this.clear_button.style.display=""===t?"none":"flex",this.getSearchResults(t)})}async getSearchResults(t){this.abort_controller&&this.abort_controller.abort();var e=t.handleize();if(this.cached_results[e])this.renderSearchResults(this.cached_results[e]);else{this.abort_controller=new AbortController,this.show(!1);try{var r=await fetch(`${theme.urls.predictive_search}?q=${encodeURIComponent(t)}&section_id=predictive-search`,{signal:this.abort_controller.signal});if(!r.ok)throw new Error(r.status);var s=await r.text(),i=theme.utils.parseHtml(s).innerHTML;this.cached_results[e]=i,this.renderSearchResults(i)}catch{}}}renderSearchResults(t){this.results.innerHTML=t,this.show(!0),window.trigger("theme:search:reloaded")}clearButtonListener(){this.clear_button.on("click keydown",t=>{"keydown"===t.type&&"Enter"!==t.key||(t.preventDefault(),this.input.value="",this.input.focus(),this.input.trigger("input"))})}show(t,e=!t){this.results.style.opacity=t?"1":"0",setTimeout(()=>this.setAttribute("data-loading",e),e?0:100)}formSubmit(){this.form.on("submit",t=>{t.preventDefault(),window.location.href=theme.urls.search+"?type=product&q="+encodeURIComponent(this.input.value.trim())})}}customElements.define("predictive-search-root",PredictiveSearch);