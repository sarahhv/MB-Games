/* Når der klikkes på hamburger-ikonet åbnes/lukkes navItems, der er selve menuen - afhængigt af om den er synlig eller ej  */
document.getElementById("icon").addEventListener("click", navFunction);

document.getElementById("navItems").addEventListener("click", navFunction)

function navFunction() {
	var x = document.getElementById("navItems");
	var z = document.getElementById("nav");
	if (x.style.display === "block" && $(window).width() <=1024) {
		x.style.display = "none";
		z.style.height = "7vh";
	} else if ($(window).width() <=1024) {
		x.style.display = "block";
		z.style.height = "auto";
	} else {
		x.style.display = "flex";
		z.style.height = "10vh";
	}
};

/* KILDE til window width: https://stackoverflow.com/questions/7405213/jquery-if-statement-based-on-screen-size */

/* Når der klikkes et eller andet sted i main området, lukker navigationsbaren */
document.getElementsByTagName("main")[0].addEventListener('click', () => {
	var x = document.getElementById("navItems");
	if (x.style.display === "block") {
		x.style.display = "none";
	}
});

/* Når der klikkes på et navItem, er der en mere glidende scroll til det specifikke sted */

$('a[href*="#"]').on('click', function(e){
    e.preventDefault()
  
    $(' html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      350,
	  'linear'
    )
  });

/* KILDE: https://www.taniarascia.com/smooth-scroll-to-id-with-jquery/ */

/* Split slideshow */

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("pFelt");
/*   var dots = document.getElementsByClassName("dot"); */
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
/*   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  } */
  slides[slideIndex-1].style.display = "flex";   
/*   dots[slideIndex-1].className += " active"; */
}

  /* KILDE: https://www.w3schools.com/howto/howto_js_slideshow.asp */



/* Service artiklen, hentet fra Jquery UI, tilpasset til min egen kode */
$(function () {
	var icons = {
		header: "fas fa-plus",
		activeHeader: "fas fa-minus"
	};
	$("#sFelter").accordion({
		icons: icons,
		collapsible: true
	});
});
/* Jquery UI KILDE: https://jqueryui.com/accordion/#custom-icons */


/* Hvis navn, email og/eller besked ikke er udfyldt, bliver der alerted, at dette skal udfyldes */
document.querySelector('input[type="button"]').addEventListener('click', () => {

	var navn = document.getElementById("navn").value;
	var email = document.getElementById("email").value;
	var besked = document.getElementById("besked").value;
	if (navn === "" | email === "" | besked === "") {
		alert("Venligst udfyld navn, E-mail og skriv en besked");

	} else {
		alert("Mange tak for din besked, du vil blive kontaktet hurtigst muligt");
		document.getElementById("kontaktFormular").reset();
		/* Inspirations-KILDE: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_form_reset */
	}
});
/* KILDE: https://www.w3resource.com/javascript/form/non-empty-field.php  */

/* KONTAKT Firebase  opsætning og alt med kontaktformularen*/

