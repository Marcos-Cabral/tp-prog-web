$(document).ready(function(){
	var numero=0;
	var span=$('#numero');

	$('.btn-buy').click(function(){		//cuando se añade un elemento al carrito
		numero++;
		localStorage.setItem("sumar-carro",numero); 
		span.html(numero);		//escribo el carrito con el elemento
	});
	var numeroCarro= localStorage.getItem("sumar-carro"); //obtengo el numero del local storage
	span.html(numeroCarro);	//lo escribo en el html
});