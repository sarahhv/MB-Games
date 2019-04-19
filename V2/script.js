/* Når der klikkes på hamburger-ikonet åbnes/lukkes navItems, der er selve menuen - afhængigt af om den er synlig eller ej  */
document.getElementById("icon").addEventListener("click", navFunction);

document.getElementById("navItems").addEventListener("click", navFunction)

function navFunction() {
	var x = document.getElementById("navItems");
	var z = document.getElementById("nav");
	if (x.style.display === "block") {
		x.style.display = "none";
		z.style.height = "7vh";
		s.style.height = "100%";
	} else {
		x.style.display = "block";
		z.style.height = "auto";
	}
};

/* Når der klikkes et eller andet sted i main området, lukker navigationsbaren */
document.getElementsByTagName("main")[0].addEventListener('click', () => {
	var x = document.getElementById("navItems");
    if (x.style.display === "block" ) {
        x.style.display = "none";
    }
});

/* Service artiklen, hentet fra Jquery UI, tilpasset til min egen kode */
$( function() {
	var icons = {
		header: "fas fa-plus",
		activeHeader: "fas fa-minus"
	};
	$( "#sFelter" ).accordion({
		icons: icons,
		collapsible: true
	});
} );
/* Jquery UI KILDE: https://jqueryui.com/accordion/#custom-icons */

/* Ved klik på "send" knappen, bliver formlen reset - så der kan skrives nyt ind, samtidig med at der bliver sendt en alert! */
document.querySelector('input[type="button"]').addEventListener('click', ()=> {
	document.getElementById("kontaktFormular").reset();
	alert("Din besked er sendt!");
});