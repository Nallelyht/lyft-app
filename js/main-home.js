var cargarPagina = function(){
	$(".index").ready(cambiarHome);
};

var cambiarHome = function(e) {
  var cambioPagina = setTimeout(function(){
    location.href = "views/home.html"
  }, 5000);
cambioPagina.stopPropagation();
};

$(document).ready(cargarPagina);