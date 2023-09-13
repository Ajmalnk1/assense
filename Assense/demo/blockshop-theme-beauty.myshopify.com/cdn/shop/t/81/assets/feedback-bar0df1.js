/** Shopify CDN: Minification failed

Line 13:0 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 13:49 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 13:77 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 13:255 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 13:257 Transforming default arguments to the configured target environment ("es5") is not supported yet
Line 13:609 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 13:652 Transforming destructuring to the configured target environment ("es5") is not supported yet
Line 13:949 Transforming object literal extensions to the configured target environment ("es5") is not supported yet

**/
class FeedbackBar extends HTMLElement{constructor(){super()}connectedCallback(){this.message_container=this.querySelector(".feedback-bar--message"),this.message_json=JSON.parse(this.querySelector("script").innerHTML),this.load(),this.asyncListeners()}load(e=!1){var t=window.location.hash.substring(1),s=e||t.replace("feedback-bar--","");this.message_json[s]&&(this.message_container.innerText=this.message_json[s],this.setAttribute("data-open",!0),setTimeout(()=>this.setAttribute("data-open",!1),5e3)),e||history.pushState("",document.title,""+window.location.pathname+window.location.search)}asyncListeners(){window.on("theme:feedbackBar:quantity",({detail:e})=>{0===e?this.load("product--no-items"):1===e?this.load("product--one-item"):1<e&&(this.addNewQuantityMessage(e),this.load(`product--${e}-items`))}),window.on("theme:feedbackBar:copied",()=>{navigator.clipboard.writeText(window.location.href),this.load("copied")})}addNewQuantityMessage(e){var t=this.message_json["product--n-items"].replace("[num_items]",e);this.message_json[`product--${e}-items`]=t}}customElements.define("feedback-bar-root",FeedbackBar);