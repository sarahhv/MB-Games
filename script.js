/* Når der klikkes på hamburger-ikonet åbnes/lukkes navItems, der er selve menuen - afhængigt af om den er synlig eller ej  */
document.getElementById("icon").addEventListener("click", navFunction);

document.getElementById("navItems").addEventListener("click", navFunction);

function navFunction() {
	var x = document.getElementById("navItems");
	var z = document.getElementById("nav");
	var main = document.querySelector("main");
	var footer = document.querySelector("footer");
	if (x.style.display === "block" && $(window).width() <= 1024) {
		x.style.display = "none";
		z.style.height = "7vh";
		main.style.filter = "blur(0px)";
		footer.style.filter = "blur(0px)";
	} else if ($(window).width() <= 1024) {
		x.style.display = "block";
		z.style.height = "auto";
		main.style.filter = "blur(5px)";
		footer.style.filter = "blur(5px)";
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
$('a[href*="#"]').on('click', function (e) {
	e.preventDefault();

	$(' html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top,
		},
		350,
		'linear'
	);
});
/* KILDE: https://www.taniarascia.com/smooth-scroll-to-id-with-jquery/ */

// Split slideshow - kun en funktion hvis skærmen er over 1023
if ($(window).width() >= 1023) {
	var slideIndex = 1;
	showSlides(slideIndex);

	document.getElementById("dot1").addEventListener('click', () => {
		showSlides(slideIndex = 1);
	});

	document.getElementById("dot2").addEventListener('click', () => {
		showSlides(slideIndex = 2);
	});

	document.getElementById("dot3").addEventListener('click', () => {
		showSlides(slideIndex = 3);
	});
}
/* KILDE til screen-size: https://stackoverflow.com/questions/44588072/run-script-if-screen-size-is-more-than-x?answertab=votes&fbclid=IwAR3gNlpm8COR5CyBIn7IHzl4eNHmzsYvN3_xErWCucf_obf8P37VnNP6b-s#tab-top */

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("pFelt");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "flex";
	dots[slideIndex - 1].className += " active";
}
/* KILDE: https://www.w3schools.com/howto/howto_js_slideshow.asp */

/* Service accordion, hentet fra Jquery UI, tilpasset til min egen kode */
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

/* KONTAKT Firebase opsætning og alt med kontaktformularen*/
// Initialize Firebase
var config = {
	apiKey: "AIzaSyBt-9q0PcxT6O4kcO-qKqoolMTkqRU1Y_I",
	authDomain: "mb-games.firebaseapp.com",
	databaseURL: "https://mb-games.firebaseio.com",
	projectId: "mb-games",
	storageBucket: "",
	messagingSenderId: "397270763884"
};
firebase.initializeApp(config);

//Data Indsættelse
firebase.database().ref('kontaktBesked').on('value', snapshots => {
	var kInfo = [];
	snapshots.forEach(snapshot => {
		let key = snapshot.key; // saves the key value in the variable key
		let bBesked = snapshot.val(); // saves the data in the variable bEvent
		bBesked.key = key; // addes the key to my bEvent object
		kInfo.push(bBesked);
	});
});

/* SEND - push informationen fra kontaktformular elementerne til firebasen. Der bliver ikke hentet information tilbage, da indholdet kun skal kunne vises i firebase.  */
document.getElementById("send").addEventListener('click', () => {
	var navn = document.querySelector("#kontaktFormular [name=navn]").value;
	var email = document.querySelector("#kontaktFormular [name=email]").value;
	var tlf = document.querySelector("#kontaktFormular [name=tlf]").value;
	var besked = document.querySelector("#kontaktFormular [name=besked]").value;

	if (navn && email && besked) {
		firebase.database().ref('kontaktBesked').push({
			navn: navn,
			email: email,
			tlf: tlf,
			besked: besked
		});
		document.getElementById("kontaktFormular").reset();
		document.getElementById("alert").style.display = "block";
		setTimeout(function () {
			document.getElementById("alert").style.display = "none";
		}, 5000);

	} else {
		alert("Venligst indtast dit navn, din email og din besked");
	}
});