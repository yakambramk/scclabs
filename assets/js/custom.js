 $(document).ready(function () {
     "use strict";

     function i() {
         $(".js-chart").easyPieChart({
             barColor: !1,
             trackColor: !1,
             scaleColor: !1,
             scaleLength: !1,
             lineCap: !1,
             lineWidth: !1,
             size: !1,
             animate: 5e3,
             onStep: function (i, e, t) {
                 $(this.el).find(".js-percent").text(Math.round(t))
             }
         })
     }
     $("#menu-button").click(function (i) {
         i.stopPropagation(), $("#hide-menu").toggleClass("show-menu")
     }), $("#hide-menu").click(function (i) {
         i.stopPropagation()
     }), $(".custom-dropdown-toggle").click(function () {
         $(".customdropdown-menu").slideToggle()
     }), $(".Trainingdropdown-toggle").click(function () {
         $(".Trainingdropdown-menu").slideToggle()
     }), $(".careersdropdown-toggle").click(function () {
         $(".careersdropdown-menu").slideToggle()
     });


     var e = $("#page-preloader"),
         t = e.find(".spinner-loader");
     if (t.fadeOut(), e.delay(50).fadeOut("slow"), $(".scrollreveal").length > 0 && (window.sr = ScrollReveal({
             reset: !0,
             duration: 1e3,
             delay: 200
         }), sr.reveal(".scrollreveal")), $("body").length && $(window).on("scroll", function () {
             $(window).scrollTop();
             $(".b-progress-list").waypoint(function () {
                 $(".js-chart").each(function () {
                     i()
                 })
             }, {
                 offset: "80%"
             })
         }), $(".js-scroll-next").on("click", function () {
             var i = $(".js-scroll-next + .js-scroll-content");
             $(".js-scroll-next").hide(), i.show(), i.addClass("animated"), i.addClass("animation-done"), i.addClass("bounceInUp")
         }), $(".btn-collapse").on("click", function () {
             $(this).parents(".panel-group").children(".panel").removeClass("panel-default"), $(this).parents(".panel").addClass("panel-default"), $(this).is(".collapsed") ? $(".panel-title").removeClass("panel-passive") : $(this).next().toggleClass("panel-passive")
         }), $(".link-tooltip-1").tooltip({
             template: '<div class="tooltip tooltip-1" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
         }), $(".link-tooltip-2").tooltip({
             template: '<div class="tooltip tooltip-2" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
         }), $(".scroll-bottom").on("click", function () {
             event.preventDefault(), $("html, body").animate({
                 scrollTop: $(document).height()
             }, 1e3)
         }), $(".js-zoom-gallery").length > 0 && $(".js-zoom-gallery").each(function () {
             $(this).magnificPopup({
                 delegate: ".js-zoom-gallery__item",
                 type: "image",
                 gallery: {
                     enabled: !0
                 },
                 mainClass: "mfp-with-zoom",
                 zoom: {
                     enabled: !0,
                     duration: 300,
                     easing: "ease-in-out",
                     opener: function (i) {
                         return i.is("img") ? i : i.find("img")
                     }
                 }
             })
         }), $(".js-zoom-images").length > 0 && $(".js-zoom-images").magnificPopup({
             type: "image",
             mainClass: "mfp-with-zoom",
             zoom: {
                 enabled: !0,
                 duration: 300,
                 easing: "ease-in-out",
                 opener: function (i) {
                     return i.is("img") ? i : i.find("img")
                 }
             }
         }), $(".popup-modal").length > 0 && $(".popup-modal").magnificPopup({
             type: "image",
             gallery: {
                 enabled: !0
             }
         }), $(".b-isotope").length > 0) {
         var s = $(".b-isotope-grid"),
             a = $(".grid").isotope({
                 itemSelector: ".grid-item",
                 percentPosition: !0,
                 masonry: {
                     columnWidth: ".grid-sizer"
                 }
             });
         a.imagesLoaded().progress(function () {
             a.isotope("layout")
         }), $(".b-isotope-filter a").on("click", function () {
             var i = $(this).attr("data-filter");
             return s.isotope({
                 filter: i
             }), !1
         }), $(".b-isotope-filter a").on("click", function () {
             $(".b-isotope-filter").find(".current").removeClass("current"), $(this).parent().addClass("current")
         })
     }
     if ($(".selectpicker").length > 0 && $(".selectpicker").selectpicker({
             style: "ui-select"
         }), $(".effect-active").waypoint(function () {
             $(this).addClass("active")
         }, {
             triggerOnce: !0,
             offset: "55%"
         }), $(".effect-active").on("hover", function () {
             $(this).removeClass("active")
         }), $(".b-isotope-grid").on("hover", function () {
             $(this).children().removeClass("active")
         }), $(".b-advantages-group").on("hover", function () {
             $(this).children().children().removeClass("active")
         }), $(".js-tabs > li > a").on("hover", function () {
             $(this).tab("show")
         }), $("#main-slider").length > 0) {
         var n = $("#main-slider").data("slider-width"),
             o = $("#main-slider").data("slider-height"),
             l = $("#main-slider").data("slider-arrows"),
             d = $("#main-slider").data("slider-buttons");
         $("#main-slider").sliderPro({
             width: n,
             height: o,
             arrows: l,
             buttons: d,
             fade: !0,
             fullScreen: !0,
             touchSwipe: !1,
             autoplay: !0
         })
     }
     if ($(".bxslider_w_img").length > 0 && $(".bxslider_w_img").bxSlider({
             pagerCustom: "#bx-pager_img",
             nextText: "",
             prevText: "",
             controls: !0,
             auto: !0
         }), jQuery(".js-scroll-content  .b-post , .posts-group .b-post ,.scrollreveal").length > 0) {
         var r = jQuery(window).width();
         r > 900 && (window.sr = ScrollReveal({
             mobile: !0,
             reset: !0
         }), sr.reveal(".js-scroll-content  .b-post , .posts-group .b-post , .scrollreveal"))
     }
     var c = {
         initialized: !1,
         initialize: function () {
             this.initialized || (this.initialized = !0, this.build())
         },
         build: function () {
             this.initOwlCarousel()
         },
         initOwlCarousel: function (i) {
             function e(i) {
                 var e = i,
                     t = e.data("after-move-delay"),
                     s = e.data("main-text-animation");
                 s && setTimeout(function () {
                     $(".main-slider_zoomIn").css("visibility", "visible").addClass("zoomIn"), $(".main-slider_slideInUp").css("visibility", "visible").addClass("slideInUp"), $(".main-slider_fadeInLeft").css("visibility", "visible").addClass("fadeInLeft"), $(".main-slider_fadeInRight").css("visibility", "visible").addClass("fadeInRight"), $(".main-slider_fadeInLeftBig").css("visibility", "visible").addClass("fadeInLeftBig"), $(".main-slider_fadeInRightBig").css("visibility", "visible").addClass("fadeInRightBig")
                 }, t)
             }
             $(".enable-owl-carousel").each(function (i) {
                 var t = $(this),
                     s = t.data("items"),
                     a = t.data("navigation"),
                     n = t.data("pagination"),
                     o = t.data("single-item"),
                     l = t.data("auto-play"),
                     d = t.data("transition-style"),
                     r = t.data("main-text-animation"),
                     c = t.data("after-init-delay"),
                     m = t.data("stop-on-hover"),
                     p = t.data("min480"),
                     f = t.data("min768"),
                     g = t.data("min992"),
                     u = t.data("min1200");
                 t.owlCarousel({
                     navigation: a,
                     pagination: n,
                     singleItem: o,
                     autoPlay: l,
                     transitionStyle: d,
                     stopOnHover: m,
                     navigationText: ["<i></i>", "<i></i>"],
                     items: s,
                     itemsCustom: [[0, 1], [465, p], [750, f], [975, g], [1185, u]],
                     afterInit: function (i) {
                         r && setTimeout(function () {
                             $(".main-slider_zoomIn").css("visibility", "visible").removeClass("zoomIn").addClass("zoomIn"), $(".main-slider_fadeInLeft").css("visibility", "visible").removeClass("fadeInLeft").addClass("fadeInLeft"), $(".main-slider_fadeInLeftBig").css("visibility", "visible").removeClass("fadeInLeftBig").addClass("fadeInLeftBig"), $(".main-slider_fadeInRightBig").css("visibility", "visible").removeClass("fadeInRightBig").addClass("fadeInRightBig")
                         }, c)
                     },
                     beforeMove: function (i) {
                         r && ($(".main-slider_zoomIn").css("visibility", "hidden").removeClass("zoomIn"), $(".main-slider_slideInUp").css("visibility", "hidden").removeClass("slideInUp"), $(".main-slider_fadeInLeft").css("visibility", "hidden").removeClass("fadeInLeft"), $(".main-slider_fadeInRight").css("visibility", "hidden").removeClass("fadeInRight"), $(".main-slider_fadeInLeftBig").css("visibility", "hidden").removeClass("fadeInLeftBig"), $(".main-slider_fadeInRightBig").css("visibility", "hidden").removeClass("fadeInRightBig"))
                     },
                     afterMove: e,
                     afterUpdate: e
                 })
             })
         }
     };
     c.initialize(), $(window).scroll(function () {
         $(this).scrollTop() > 100 ? $(".scrollup").fadeIn() : $(".scrollup").fadeOut()
     }), $(".scrollup").click(function () {
         return $("html, body").animate({
             scrollTop: 0
         }, 600), !1
     })
 }), (new WOW).init();
