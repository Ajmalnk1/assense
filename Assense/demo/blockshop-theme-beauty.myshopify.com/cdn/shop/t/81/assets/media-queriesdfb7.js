/** Shopify CDN: Minification failed

Line 9:0 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 9:30 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 9:164 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 9:620 Transforming object literal extensions to the configured target environment ("es5") is not supported yet

**/
class MediaQueries{constructor(){this.medium_screen=768,this.large_screen=1024,this.current_window=null,this.getScreenSize(),this.screenSizeObserver()}getScreenSize(){var e=this.current_window;window.matchMedia(`only screen and (min-width: ${this.large_screen}px)`).matches?"large"!==this.current_window&&(this.current_window="large"):window.matchMedia(`only screen and (min-width: ${this.medium_screen}px)`).matches?"medium"!==this.current_window&&(this.current_window="medium"):"small"!==this.current_window&&(this.current_window="small"),this.current_window!==e&&window.trigger("theme:mqs:updated")}screenSizeObserver(){new ResizeObserver(()=>this.getScreenSize()).observe(document.body)}}theme.mqs=new MediaQueries;