$(function () {

    // wowjs
    new WOW().init();

    // loading
    var loader = $('.loading');
    // ページの読み込みが完了したらアニメーションを非表示
    $(window).on('load',function(){
        loader.fadeOut();
    });
    // ページの読み込みが完了してなくても3秒後にアニメーションを非表示にする
    setTimeout(function(){
        loader.fadeOut();
    },3000);

    // ハンバーガーメニュー
    var state = false;
    var scrollpos;
    $('#nav-toggle').on('click', function(){
        $('body').toggleClass('open');
        if(state == false) {
            scrollpos = $(window).scrollTop();
            $('body').addClass('fixed').css({'top': -scrollpos});
            state = true;
        } else {
            $('body').removeClass('fixed').css({'top': 0});
            window.scrollTo( 0 , scrollpos );
            state = false;
        }
    });

    // リンクをクリックしたらメニューを閉じる
    $('.nav-item-link').on('click', function() {
        $('body').removeClass('open fixed').css({'top': 0});
        window.scrollTo( 0 , scrollpos );
        state = false;
    });      

    // smoothscroll
    // #から始まるURLがクリックされた時
    $('a[href^="#"]').click(function() {
        let speed = 800;
        let id = $(this).attr("href");
        let target = $("#" == id ? "html" : id);
        let position = $(target).offset().top;
        $("html, body").animate({
            scrollTop: position
            },
            speed
        );
        return false;
    });
    
});