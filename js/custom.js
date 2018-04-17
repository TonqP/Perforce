
/*-----------------------------------------------------------------------------------*/
/*      Start
/*-----------------------------------------------------------------------------------*/

/*global $, jQuery, alert*/

$(document).ready(function () {

    'use strict';

    new WOW().init();

    $("#container-mixItUp").mixItUp();

    /*-----------------------------------------------------------------------------------*/
    /*  Start Page Loader
    /*-----------------------------------------------------------------------------------*/

    $("#preloader").height($(window).height());

    $(window).resize(function(){

        $("#preloader").height($(window).height());

    });

    var win = $(window);

    win.on('load',function() {

        $('#preloader').delay(1000).fadeOut('slow');
        $("body").addClass("visibility");

    });


    /*-----------------------------------------------------------------------------------*/
    /*  Start NavBar Navigtion
    /*-----------------------------------------------------------------------------------*/

        $(window).scroll(function () {

        var heightScroll = $(this).scrollTop();

        if(heightScroll >= 46){

            $(".menu-nav .navbar-default").attr("id","whiteFixed");
            $(".navbar>.container-fluid-header .navbar-brand").attr("id","brandFixed");
            $(".navbar-default .navbar-nav>li>a").attr("id","linkFixed");
            $(".navbar-nav").attr("id","olFixed");

        }

          else {

            $("#whiteFixed").removeAttr("id");
            $("#brandFixed").removeAttr("id");
            $(".navbar-default .navbar-nav>li>a").removeAttr("id");
            $(".navbar-nav").removeAttr("id");



        }
    });

    $(window).resize(function(){

        $(window).scroll(function () {

        var heightScroll = $(this).scrollTop();

        if(heightScroll >= 46){

            $(".menu-nav .navbar-default").attr("id","whiteFixed");
            $(".navbar>.container-fluid-header .navbar-brand").attr("id","brandFixed");
            $(".navbar-default .navbar-nav>li>a").attr("id","linkColorFixed");
            $(".navbar-default .navbar-toggle .icon-bar").attr("id","icon-barColor");

        }else{

            $("#whiteFixed").removeAttr("id");
            $("#brandFixed").removeAttr("id");
            $(".navbar-default .navbar-nav>li>a").removeAttr("id");
            $(".navbar-default .navbar-toggle .icon-bar").removeAttr("id");
        }
    });
    });

    /*-----------------------------------------------------------------------------------*/
    /*  NAVBAR (HEADER-HOME)
    /*-----------------------------------------------------------------------------------*/

    $(".header-home").height($(window).height());

    $(window).resize(function(){

        $(".header-home").height($(window).height());

    });

    /*-----------------------------------------------------------------------------------*/
    /*  Choose Me
    /*-----------------------------------------------------------------------------------*/

var breakHeight = $(window).width();

if (breakHeight >= 2560) {

$(".choose-me .box-mockup-choose-me .img-choose-me").height($(".choose-me .box-contents-choose-me .contents-choose-me").height());

$(window).resize(function(){

    $(".choose-me .box-mockup-choose-me .img-choose-me").height($(".choose-me .box-contents-choose-me .contents-choose-me").height());

});

} else {

$(".choose-me .box-mockup-choose-me .img-choose-me").height($(".choose-me .box-mockup-choose-me .img-choose-me img").height());

$(window).resize(function(){

    $(".choose-me .box-mockup-choose-me .img-choose-me").height($(".choose-me .box-mockup-choose-me .img-choose-me img").height());

});

}


    /*-----------------------------------------------------------------------------------*/
    /*  Choose Me * Repetition Code For Responsive /Services section/
    /*-----------------------------------------------------------------------------------*/

    $(window).resize(function(){

var breakHeight = $(window).width();
if (breakHeight >= 2560) {

    $(".choose-me .box-mockup-choose-me .img-choose-me").height($(".choose-me .box-contents-choose-me .contents-choose-me").height());

    $(window).resize(function(){

        $(".choose-me .box-mockup-choose-me .img-choose-me").height($(".choose-me .box-contents-choose-me .contents-choose-me").height());

    });

} else {

    $(".choose-me .box-mockup-choose-me .img-choose-me").height($(".choose-me .box-mockup-choose-me .img-choose-me img").height());

    $(window).resize(function(){

        $(".choose-me .box-mockup-choose-me .img-choose-me").height($(".choose-me .box-mockup-choose-me .img-choose-me img").height());

    });

}

});


    /*-----------------------------------------------------------------------------------*/
    /*  Start Products
    /*-----------------------------------------------------------------------------------*/

    $(".products .filter-section ul li a").click(function(){

        $(".products .filter-section ul li a").children().fadeOut(1000);

        $(this).children().fadeIn(1000);

    });

    $(".products-item .products-media .work-contents").outerHeight($(".products-item .products-media .work-img img").outerHeight());

    $(window).resize(function(){

        $(".products-item .products-media .work-contents").outerHeight($(".products-item .products-media .work-img img").outerHeight());

    });

    /*-----------------------------------------------------------------------------------*/
    /*  Start Share With US
    /*-----------------------------------------------------------------------------------*/

    $(".share-project .bg-overly-share-project").height($(".share-project").height());

    $(window).resize(function(){

        $(".share-project .bg-overly-share-project").height($(".share-project").height());

    });

    /*-----------------------------------------------------------------------------------*/
    /*  Start Perforce Team
    /*-----------------------------------------------------------------------------------*/

    $(".social-media-team").width($(".img-personale-team img").width());

    $(window).resize(function(){

    $(".social-media-team").width($(".img-personale-team img").width());

    });

    $(".social-media-team").height($(".img-personale-team img").height());

        $(window).resize(function(){

        $(".social-media-team").height($(".img-personale-team img").height());


    });


    /*-----------------------------------------------------------------------------------*/
    /*  Start Perforce Blog
    /*-----------------------------------------------------------------------------------*/

    $(".my-blogs .tags-time").width($(".my-blogs .img-blog").width());

    $(window).resize(function(){

    $(".my-blogs .tags-time").width($(".my-blogs .img-blog").width());

    });

    /*-----------------------------------------------------------------------------------*/
    /*  Start Contact Us
    /*-----------------------------------------------------------------------------------*/

    $(".location-contact .location iframe").outerHeight($(".location-contact .contact").outerHeight());

        $(window).resize(function(){

        $(".location-contact .location iframe").outerHeight($(".location-contact .contact").outerHeight());


    });

    /*-----------------------------------------------------------------------------------*/
    /*  Start Smooth Scroll to Div
    /*-----------------------------------------------------------------------------------*/

    $(".scroll-home").click(function(){
        $("html, body").animate({
            scrollTop: $("#header-home").offset().top
        },1000)
    });

    $(".scroll-services").click(function(){
        $("html, body").animate({
            scrollTop: $("#scroll-services").offset().top-80
        },1000);
    });

    $(".scroll-products").click(function(){
        $("html, body").animate({
            scrollTop: $("#scroll-products").offset().top-80
        },1000);
    });

    $(".scroll-team").click(function(){
        $("html, body").animate({
            scrollTop: $("#scroll-team").offset().top-80
        },1000);
    });

    $(".scroll-blog").click(function(){
        $("html, body").animate({
            scrollTop: $("#scroll-blog").offset().top-80
        },1000);
    });

    $(".scroll-contact").click(function(){
        $("html, body").animate({
            scrollTop: $("#scroll-contact").offset().top-80
        },1000);
    });


});

/*-----------------------------------------------------------------------------------*/
/*      * End
/*-----------------------------------------------------------------------------------*/
