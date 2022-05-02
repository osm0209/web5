(function($){

    var obj = {
    init:function(){
        this.header();
        this.section1();
        this.section2();
        this.footer();
    },
    header: function(){
        $('.main-btn').on({
            mouseenter: function(){
                $('.sub').stop().slideDown(300);
                $('.sub-bg').stop().slideDown(300);
                $('.main-btn').removeClass('on');
                $(this).addClass('on')
            },
            focusIn: function(){
                $('.sub').stop().slideDown(300);
                $('.sub-bg').stop().slideDown(300);
                $('.main-btn').removeClass('on');
                $(this).addClass('on')
            }
        });

        $('#nav').on({
            mouseleave: function(){
                $('.sub').stop().slideUp(300);
                $('.sub-bg').stop().slideUp(300);
                $('.main-btn').removeClass('on');
            }
        });
    },
    section1: function(){
        // 1.메인슬라이드함수
        let cnt=0;
        function mainSlide(){
            $('.slide-wrap').stop().animate({left:`${-100*cnt}%`}, 600, function(){
                cnt>2?cnt=0:cnt;
                $('.slide-wrap').stop().animate({left:`${-100*cnt}%`}, 0);
            });
        }
        // 2.다음카운트함수
        function nextCount(){
            cnt++;
            mainSlide();
        }
        // 3.자동카운트함수
        function autoTimer(){
            setInterval(nextCount, 3000);
        }
        autoTimer();
    },
    section2: function(){
        //공지사항-갤러리 버튼 on
        $('.gallery-btn').on({
            click: function(){
                $('.gallery-btn').addClass('on');
                $('.gallery-box').addClass('on');
                $('.notice-btn').addClass('on');
                $('.notice-box').addClass('on');
            }
        });
        $('.notice-btn').on({
            click: function(){
                $('.gallery-btn').removeClass('on');
                $('.gallery-box').removeClass('on');
                $('.notice-btn').removeClass('on');
                $('.notice-box').removeClass('on');
            }
        });

        $('.link-btn').on({
            click: function(){
                $('#modal').fadeIn(300);
            }
        });
        $('.close-btn').on({
            click: function(){
                $('#modal').fadeOut(300);
            }
        });



    },
    footer: function(){

    }
  }
  obj.init();

})(jQuery);