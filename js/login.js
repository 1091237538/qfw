$(function () {

    $("[data-toggle='tooltip']").tooltip();//打开提示工具

    //右侧侧边导航
    $('.right-fixed').find('li').css({right:-146});
    $('.right-fixed').on('mouseenter','li:lt(3)',function () {
        $(this).stop().animate({right:-46},700).siblings().stop().animate({right:-146});
    });
    $('.right-fixed').on('mouseleave','li',function () {
        $(this).stop().animate({right:-146});
    });
    //over

});