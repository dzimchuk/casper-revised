!function(d){"use strict";d.fn.fitVids=function(t){var i={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var e=document.head||document.getElementsByTagName("head")[0],r=document.createElement("div");r.innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-container{flex-grow: 1;width:100%;}.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',e.appendChild(r.childNodes[1])}return t&&d.extend(i,t),this.each(function(){var t=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];i.customSelector&&t.push(i.customSelector);var r=".fitvidsignore";i.ignore&&(r=r+", "+i.ignore);var e=d(this).find(t.join(","));(e=(e=e.not("object object")).not(r)).each(function(){var t=d(this);if(!(0<t.parents(r).length||"embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){t.css("height")||t.css("width")||!isNaN(t.attr("height"))&&!isNaN(t.attr("width"))||(t.attr("height",9),t.attr("width",16));var e=("object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height())/(isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10));if(!t.attr("name")){var i="fitvid"+d.fn.fitVids._count;t.attr("name",i),d.fn.fitVids._count++}t.wrap('<div class="fluid-width-video-container"><div class="fluid-width-video-wrapper"></div></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),t.removeAttr("height").removeAttr("width")}})})},d.fn.fitVids._count=0}(window.jQuery||window.Zepto);
!function(l,t){"use strict";l(document).ready(function(){l(".scroll-down").arctic_scroll(),l(".menu-button, .nav-cover, .nav-close").on("click",function(t){t.preventDefault(),l("body").toggleClass("nav-opened nav-closed")})}),l.fn.arctic_scroll=function(t){var e={elem:l(this),speed:500},c=l.extend(e,t);c.elem.click(function(t){t.preventDefault();var e,o=l(this),a=l("html, body"),s=!!o.attr("data-offset")&&o.attr("data-offset"),n=!!o.attr("data-position")&&o.attr("data-position");s?(e=parseInt(s),a.stop(!0,!1).animate({scrollTop:l(this.hash).offset().top+e},c.speed)):n?(e=parseInt(n),a.stop(!0,!1).animate({scrollTop:e},c.speed)):a.stop(!0,!1).animate({scrollTop:l(this.hash).offset().top},c.speed)})}}(jQuery);