window.addEventListener('scroll', function (e) {
	// console.log(document.body.scrollTop);

	var $parallax = document.getElementById('parallax');
	var posY = document.body.scrollTop * 0.3;
	posY=posY+200; //px
	$parallax.style.backgroundPosition = '0px '+ posY+ 'px'; 

	var $parallax_my = document.getElementById('parallax-my');
	var posY_my = document.body.scrollTop * 0.3;
	posY_my=posY_my+400; //px
	$parallax_my.style.backgroundPosition = '0px '+ posY_my+'px'; 
})