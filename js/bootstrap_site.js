$(function() {
    $('#load').css({opacity: 0.6});
    $("#load").ajaxStart(function() {
        $(this).show();
    });
    $("#load").ajaxStop(function() {
        $(this).hide();
    });

    
// $('.ver-imagem').prettyPhoto();
// $('a[rel^="prettyPhoto"]').prettyPhoto();
});
$(function() {
    $('.jImgFormat').find('img').each(function() {
        var $float = $(this).css('float');
        $(this).css('float', 'none');
        var margin = '';
        switch ($float) {
            case 'left':
                margin = 'margin:2px 10px 2px 0px';
                break;
            case 'right':
                margin = 'margin:2px 0px 2px 10px';
                break;
            default:
                break;
        }
        var url_amp = $(this).attr('src');
        url_amp = url_amp.replace(/-([0-9]*)\./, '.');
        var img = $(this).wrap('<a href="' + url_amp + '" rel="shadowbox" style="float:' + $float + ';' + margin + '" class="imgTexto"/>');
        img.after('<strong style="display:block">' + $(this).attr('alt') + '</strong>');
    });
});

function showPopup() {
    $('.popup').fadeIn('slow');
    var popupMarginLeft = $('.popup-img').width() / 2,
        popupMarginTop = $('.popup-img').height() / 2;

    // console.log(popupMarginLeft);
    // console.log($('.popup-img img').attr('height'));
    $('.popup-content').css({marginLeft: -popupMarginLeft + 'px'/*, marginTop: -popupMarginTop+'px'*/});
    $('.popup-close, .popup').click(function() {
        $('.popup').fadeOut();
    });
    $('.popup-content').click(function() {
        return false;
    });
}