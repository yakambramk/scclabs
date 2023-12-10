/*!
 * Version: 1.2 Development
 */
(function () {
    "use strict";
    var Core = {
        initialized: false
        , initialize: function () {
            if (this.initialized) return;
            this.initialized = true;
            this.build();
        }
        , build: function () {
            this.fixedHeader();
            // Init toggle menu
            this.initToggleMenu();
            // Search
            this.initSearchModal();
            // Dropdown menu
            this.dropdownhover();
        }
        , initSearchModal: function (options) {
            $(document).on("click", ".btn_header_search", function (event) {
                event.preventDefault();
                $(".header-search").addClass("open");
            });
            $(document).on("click", ".search-form_close , .search-close", function (event) {
                event.preventDefault();
                $(".header-search").removeClass("open");
            });
        }
        , initToggleMenu: function () {
            $('.toggle-menu-button').each(function (i) {
                var trigger = $(this);
                var isClosed = true;

                function showMenu() {
                    $('#nav').addClass('navbar-scrolling-fixing');
                    if (trigger.hasClass("js-toggle-screen")) {
                        $('#fixedMenu').delay(0).fadeIn(300);
                    }
                    trigger.addClass('is-open');
                    isClosed = false;
                }
                $('.fullmenu-close').on('click', function (e) {
                    e.preventDefault();
                    if (isClosed === true) {
                        hideMenu();
                    }
                    else {
                        hideMenu();
                    }
                });

                function hideMenu() {
                    $('#fixedMenu').fadeOut(100);
                    $('#nav').removeClass('navbar-scrolling-fixing');
                    trigger.removeClass('is-open');
                    isClosed = true;
                }
                trigger.on('click', function (e) {
                    e.preventDefault();
                    if (isClosed === true) {
                        showMenu();
                    }
                    else {
                        hideMenu();
                    }
                });
            });
        }
        , dropdownhover: function (options) {
            /** Extra script for smoother navigation effect **/
            if ($(window).width() > 798) {
                $('.yamm').on('mouseenter', '.navbar-nav > .dropdown', function () {
                    "use strict";
                    $(this).addClass('open');
                }).on('mouseleave', '.navbar-nav > .dropdown', function () {
                    "use strict";
                    $(this).removeClass('open');
                });
            }
        }
        , fixedHeader: function (options) {
            if ($(window).width() > 767) {
                // Fixed Header
                var topOffset = $(window).scrollTop();
                if (topOffset > 0) {
                    $('.header').addClass('navbar-scrolling');
                }
                $(window).on('scroll', function () {
                    var fromTop = $(this).scrollTop();
                    if (fromTop > 0) {
                        $('body').addClass('fixed-header');
                        $('.header').addClass('navbar-scrolling');
                    }
                    else {
                        $('body').removeClass('fixed-header');
                        $('.header').removeClass('navbar-scrolling');
                    }
                });
            }
        }
    , };
    Core.initialize();
    /////////////////////////////////////////////////////////////////
    //   Dropdown Menu Fade
    /////////////////////////////////////////////////////////////////
    $(".yamm >li").on("hover", function (e) {
        if (e.type == "mouseenter") {
            $('.dropdown-menu', this).fadeIn("fast");
        }
        else { // mouseleave
            $('.dropdown-menu', this).fadeOut("fast");
        }
    });
    window.prettyPrint && prettyPrint();
    $(document).on('click', '.yamm .dropdown-menu', function (e) {
        e.stopPropagation();
    });
})();