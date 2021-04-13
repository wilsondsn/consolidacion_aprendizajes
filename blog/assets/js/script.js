$(function () {

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 500) {
        var formulario = $('form');
        formulario.addClass("animate__animated");
        formulario.addClass("animate__bounceInRight");
        formulario.addClass("animate__delay-1s");
    }
}); //missing );

});