$(function () {

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 500) {
        var formulario = $('form');
        formulario.addClass("animate__animated");
        formulario.addClass("animate__bounceInRight");
        formulario.addClass("animate__delay-1s");
    }
}); 



$('a').click(function(event) {
	if (this.hash !=="") {
	event.preventDefault();	
	var gato = this.hash;

	$("html, body").animate({
                scrollTop: $(gato).offset().top
            }, 800, function() { // 800 milisegundos
                window.location.hash = gato; // busca la locación de la variable gato.
            });
	};

});

})