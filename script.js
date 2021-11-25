


$(function() {
    var header = $("header");

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });

});

$('#open_m').on('click',function () {
    $('.side_bar').toggleClass('is_open');
});
$('.side_menu_item').on('click',function () {
    $('.side_bar').toggleClass('is_open');
});

