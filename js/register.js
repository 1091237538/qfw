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


    function ran() {
        return Math.floor(Math.random()*10);
    }
    $('#num').html(ran());
    $('#num2').html(ran());
    //注册验证
    $('#exampleInputEmail1').on('blur',function () {
       if($(this).val()==''){
           $('.bt1').show();
       }
       else {
           $('.bt1').hide();
       }
    });
    $('#exampleInputPassword1').on('blur',function () {
        if($(this).val()==''){
            $('.bt2').show();
        }else {
            $('.bt2').hide();
        }
    });

    $('#exampleInputPassword2').on('blur',function () {
        if($('#exampleInputPassword1').val()!=$(this).val()){
             $('.bt3').show();
        }else {
             $('.bt3').hide();
        }
    });
    $('#text').on('blur',function () {
        var sum = parseInt($('#num').text()) + parseInt($('#num2').text());
        if($(this).val()!=sum){
            $('.bt4').show();
        }else {
            $('.bt4').hide();
        }
    });
});