/** Shopify CDN: Minification failed

Line 16:0 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 16:26 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 16:28 Transforming default arguments to the configured target environment ("es5") is not supported yet
Line 16:33 Transforming default arguments to the configured target environment ("es5") is not supported yet
Line 16:255 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 16:433 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 16:443 Transforming const to the configured target environment ("es5") is not supported yet
Line 16:572 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 16:851 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 16:996 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
... and 3 more hidden warnings

**/
class TabOrder{constructor(e=!1,t=!1){this.mobile_order_elements=this.getElementList(e),this.desktop_order_elements=this.getElementList(t),this.tabbing=!1,this.detectTabbing(),this.updateOrderList(),this.focusListener(),this.resizeListener()}detectTabbing(){window.off("click.TabOrder, keydown.TabOrder"),window.on("click.TabOrder",()=>this.tabbing=!1),window.on("keydown.TabOrder",e=>{9===e.which&&(this.tabbing=!0)})}getElementList(e){if(e){const r=[];return e.forEach(e=>{var t=document.querySelectorAll(e);t.length&&t.forEach(e=>r.push(e))}),r}return!1}updateOrderList(){"small"===theme.mqs.current_window?(this.current_order_elements=this.mobile_order_elements,this.previous_order_elements=this.desktop_order_elements):(this.current_order_elements=this.desktop_order_elements,this.previous_order_elements=this.mobile_order_elements)}focusListener(){this.current_order_elements&&this.current_order_elements.on("focusout",e=>this.focusOutCallback(e.target,e.target.index(),e))}focusOutCallback(e,t,r){var s;this.tabbing&&((s=!e.contains(r.relatedTarget)&&"closed"===theme.drawer.status)&&theme.a11y.tab_forwards?this.moveFocus(t+1,"forwards"):s&&this.moveFocus(t-1,"backwards"))}moveFocus(e,t){var r=this.current_order_elements[e],s=theme.a11y.getFocusableEl(r);e<this.current_order_elements.length&&"forwards"===t&&(s?s[0].focus():e+1<this.current_order_elements.length&&this.moveFocus(e+1,"forwards")),0<=e&&"backwards"===t&&(s?s[s.length-1].focus():0<=e-1&&this.moveFocus(e-1,"backwards"))}disableFocus(){this.previous_order_elements&&this.previous_order_elements.off("focusout")}resizeListener(){window.on("theme:mqs:updated",()=>{this.updateOrderList(),this.focusListener(),this.disableFocus()})}}theme.tab_order=TabOrder;