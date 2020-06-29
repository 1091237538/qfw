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

    //中间文字加载
    var arr=['做','一','个','响','应','式','网','站'
        ,'让','世','界','更','好','的','了','解','您'];
    var num=0;
    var str ='';
    var timer = setInterval(function () {
        str+=arr[num];
        $('.autoTitle').text(str);
        $('.autoCursor').stop().animate({opacity:0},200);
        $('.autoCursor').delay(400).animate({opacity: 1},200);
        num++;
        if(num==arr.length){
            clearInterval(timer);
            $('.autoCursor').delay(1000).fadeOut();
        }
    },500);
    //over

    //文档显示
    $('#v1-t').on('mouseenter',function () {
        $('.visible-Text1').fadeIn();
        $('.visible-Text2').fadeOut();
    });
    $('.visible-Text1').on('mouseleave',function () {
       $(this).fadeOut();
    });

    //关于显示
    $('#v2-t').on('mouseenter',function () {
        $('.visible-Text2').fadeIn();
        $('.visible-Text1').fadeOut();

    });
    $('.visible-Text2').on('mouseleave',function () {
        $(this).fadeOut();
    });
    //over


    //滑入
    $(window).on('scroll',function () {
        var y = $(window).scrollTop();
        if(window.innerWidth>1200) {
            if (y > $('.bottom-c2').offset().top - 500 && y < 1700) {
                $('.left-img').stop().animate({left: 0}, 1000);
                $('.right-Text').stop().animate({top: 100}, 1000);
            } else if (y > $('.bottom-c3').offset().top - 500 && y < 2600) {
                $('.Text-l').stop().animate({top: 100}, 1000);
                $('.right-imgBox').stop().animate({left: 0}, 1000);
            } else if (y > $('.bottom-c4').offset().top - 600 && y < 3100) {
                $('.left-img2').stop().animate({left: 0}, 1000);
                $('.right-Text2').stop().animate({top: 100}, 1000);
            } else if (y > $('.bottom-c5').offset().top - 400&& y < 3700) {
                $('.left-Text').stop().animate({top: 100}, 1000);
                $('.right-imgBox2').stop().animate({left: 0}, 1000);
            } else if(y > $('.bottom-c7').offset().top-700&& y < 5400){
                $('.bottom-c7').find('h1').stop().animate({opacity:1},800);
                $('.bottom-c7').find('p').stop().animate({opacity:1},800);
            } else if (y > $('.bottom-c8').offset().top-300&& y < 6500){
                $('.bottom-c8').find('h1').stop().animate({opacity:1},800);
                $('.bottom-c8').find('p').stop().animate({opacity:1},800);
            } else if (y > $('.bottom-c10').offset().top-300&& y < 8000){
                $('.bottom-c10').find('h1').stop().animate({opacity:1},800);
                $('.bottom-c10').find('p').stop().animate({opacity:1},800);
            } else if (y > $('.bottom-c11').offset().top-500&& y < 8700) {
                $('.bottom-c11').find('h1').stop().animate({opacity:1},800);
            }
            else {
                return;
            }
        }
    });


    //图片重叠

    function hover(elem) {
       elem.on('mouseenter','span',function () {
            $(this).find('img').eq(1).fadeIn();
        }).on('mouseleave','span',function () {
            $(this).find('img').eq(1).fadeOut();
        });
    }
    hover($('.img1'));
    hover($('.img2'));


    //swiper插件使用

    // 第七部分
    var swiper = new Swiper('.bottom-c7 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    //第十一部分
    var swiper2 = new Swiper('.bottom-c11 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    //右侧隐藏导航栏
    var key =true;
    $('#btn-r').on('click',function () {
        if(key){
             $('.wrap-box').stop().animate({right:'80%'},500);
             $('.right-hidden').stop().animate({right:0},500);
             $(this).find('a').removeClass('glyphicon glyphicon-align-justify');
             $(this).find('a').addClass('glyphicon glyphicon-remove');
             key=false;
        }else {
            $('.wrap-box').stop().animate({right:0},500);
            $('.right-hidden').stop().animate({right:'-100%'},500);
            $(this).find('a').removeClass('glyphicon glyphicon-remove');
            $(this).find('a').addClass('glyphicon glyphicon-align-justify');
            key=true;
        }
    });
});