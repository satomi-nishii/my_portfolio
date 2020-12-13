$(function () {

    // wowjs
    new WOW().init();

    // loading
    var loader = $('.loader-wrap');
    // ページの読み込みが完了したらアニメーションを非表示
    $(window).on('load',function(){
        loader.fadeOut();
    });
    // ページの読み込みが完了してなくても3秒後にアニメーションを非表示にする
    setTimeout(function(){
        loader.fadeOut();
    },3000);

    // ハンバーガーメニュー
    $('#nav-toggle').on('click', function() {
        $('body').toggleClass('open');
    });

    // リンクをクリックしたらメニューを閉じる
    $('.nav-item-link').on('click', function() {
        $('body').removeClass('open');
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