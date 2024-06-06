$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('header').addClass('scroll')
    } else {
        $('header').removeClass('scroll')
    }
})
