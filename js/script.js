$(function(){
    $('.drawer').drawer();
//  =========page link=======
// #から始まるURLがクリックされた時
    $('a[href^="#"]').click(function() {
        // 移動速度を指定（ミリ秒）
        let speed = 300;
        // hrefで指定されたidを取得
        let id = $(this).attr("href");
        // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
        let target = $("#" == id ? "html" : id);
        // ページのトップを基準にターゲットの位置を取得
        let position = $(target).offset().top;
        // ターゲットの位置までspeedの速度で移動
        $("html, body").animate(
        {
            scrollTop: position - 70
        },
        speed
        );
        return false;
    });
    new WOW().init();


    
    
    
    let $form = $('#js-form');
    $form.submit(function (e) { 
        $.ajax({ 
            url: $form.attr('action'), 
            data: $form.serialize(), 
            type: "POST", 
            dataType: "xml", 
            statusCode: { 
                0: function () { 
                    //送信に成功したときの処理 
                    $('#js-form').fadeOut();
                    $('.success-message').fadeIn();
                }, 
                200: function () { 
                    //送信に失敗したときの処理 
                    $('#js-form').fadeOut();
                    $('.success-message').fadeIn();
                } 
            } 
        }); 
        return false; 
    }); 
    
    let $submit = $('#js-submit');
    $('#js-form input ,#js-form textarea').on('change',function() {
        if (
            $('#js-form input[type=text]').val() !== "" &&
            $('#js-form input[type=email]').val() !== "" &&
            $('#js-form textarea[type=text]').val() !== "" &&
            $('#js-form input[name="entry.579923922"]').prop('checked') ===true &&
            $('#js-form input[name="entry.1970466574"]').prop('checked') ===true
            ) {
                $summit.addClass('active');
                $summit.prop( 'disabled', false )
            } else{
                $summit.removeClass('active');
                $summit.prop( 'disabled', true );
            }
        });
});