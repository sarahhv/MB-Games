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