UI = {
    load: function () {
        document.addEventListener("DOMContentLoaded", function () {
            UI.fn_gnb();
            UI.fn_login();
            UI.fn_productInfo();
            //UI.fn_magicMouseCursor(); ie에서 오류남
        });

        $(window).load(function () { }); //load
    },

    fn_gnb: function () {
        var btn_gnb = $(".btn_gnb");
        var gnb = $(".gnb");
        var btn_close = gnb.find(".btn_close");

        btn_gnb.on("click", function () {
            gnb.addClass("open");
        });

        btn_close.on("click", function () {
            gnb.removeClass("open");
        });
    },
    fn_magicMouseCursor: function () {
        options = {
            cursorOuter: "circle-basic",
            hoverEffect: "circle-move",
            hoverItemMove: false,
            defaultCursor: true,
            outerWidth: 30,
            outerHeight: 30,
        };
        magicMouse(options);
    },
    fn_login: function () {
        if ($(".login").length == 0) {
            return;
        }
        document.querySelector(".bg_paper").classList.add("cursorStyle1");
    },
    fn_productInfo: function () {
        if ($(".product_info").length == 0) {
            return;
        }
        $(".product_info .slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            draggable: false,
            asNavFor: ".product_info .slider_nav",
            fade:true,
        });
        $(".product_info .slider_nav").slick({
            slidesToShow: 10,
            slidesToScroll: 1,
            arrows: false,
            focusOnSelect: true,
            draggable:false,
            asNavFor: ".product_info .slider",
 
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 10,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 5,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                    },
                },
            ],
        });
        $(".product_info .slider").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
            $(".product_info .slider_box .pages .current").text(nextSlide + 1);
        });

        var img_box = $(".img_box");
        var img_box_more = img_box.find(".btn_more button");
        var img_box_more_close = img_box.find(".btn_close");

        img_box_more.on("click", function () {
            img_box.addClass("open");
        });

        img_box_more_close.on("click", function () {
            img_box.removeClass("open");
        });

        var responsiveScroll = function () {
            var scrollY = window.scrollY;
            if (scrollY < 400 - 75) {
                $("#header").addClass("bg_transparent");
            } else {
                $("#header").removeClass("bg_transparent");
            }
        };

        $(document).on("scroll", function () {
            if ($(document).width() < 770) {
                responsiveScroll();
            }
        });

        var responsiveChange = function () {
            var tileItemHeight = $(".product_estimate .img_nav button").css("height");
            $(".product_estimate .img_nav ul").css("height", tileItemHeight);
            if ($(document).width() < 770) {
                $("#header").addClass("bg_transparent");
            } else {
                $("#header").removeClass("bg_transparent");
            }
        };

        responsiveChange();

        $(window).resize(function () {
            responsiveChange();
        });

        var img_nav = $(".img_nav ul").children();
        var img_nav_button = img_nav.find("button");
        var big_img = $(".big_img img");

        var popup_product_estimate = $(".popup_product_estimate");
        var popup_product_estimate_name = popup_product_estimate.find(".big_img .name");
        var popup_product_estimate_close = popup_product_estimate.find(".btn_close");

        img_nav_button.on("click", function () {
            img_nav.removeClass("on");
            $(this).parent().addClass("on");
            big_img.attr("src", $(this).find(".img img").attr("src"));
            popup_product_estimate_name.html($(this).find(".name").html());
            if ($(document).width() < 770) {
                popup_product_estimate.addClass("open");
            }
        });
        popup_product_estimate_close.on("click", function () {
            popup_product_estimate.removeClass("open");
        });

        var popup_product_btn = $(".slider_box .slider .slick-slide");
        var popup_product_info = $(".popup_product_info");
        var popup_product_info_close = popup_product_info.find(".btn_close");
        var popup_product_info_slider = popup_product_info.find(".slider");
        var popup_product_info_slider_nav = popup_product_info.find(".slider_nav");

        popup_product_btn.on("click", function () {
            if ($(document).width() < 770) {
                popup_product_info.addClass("open");
                popup_product_info_slider.slick("setPosition");
                popup_product_info_slider_nav.slick("setPosition");
            }
        });
        popup_product_info_close.on("click", function () {
            popup_product_info.removeClass("open");
        });
        popup_product_info_slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            draggable: true,
            asNavFor: ".popup_product_info .slider_nav",
        });
        popup_product_info_slider_nav.slick({
            slidesToShow: 7,
            slidesToScroll: 1,
            arrows: false,
            focusOnSelect: true,
            asNavFor: ".popup_product_info .slider",
            infinite: true,
        });

        var selected = $(".selected");

        selected.on("click", function () {
            $(this).parent().toggleClass("open");
        });
    },
};

//레이어 오픈
var layer_OPEN = function (obj_selector) {
    var obj = $(obj_selector);
    obj.css({ display: "block", opacity: 0 });
    obj.stop().animate({ opacity: 1 }, 500);
};

//레이어 클로즈
var layer_CLOSE = function (obj_selector) {
    var obj = $(obj_selector);
    obj.stop().animate({ opacity: 0 }, 500, function () {
        $(this).css({ display: "none" });
    });
};

UI.load();
