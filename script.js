const about = document.getElementById("about");
const contact1 = document.getElementById("contact");
const contact2 = document.getElementById("contact2");
const logo = document.getElementById("logo");

about.addEventListener("click", function(){
	window.scrollTo({
        top: 324,
        left: 0,
        behavior: "smooth"
    });
});

contact1.addEventListener("click", function(){
    window.scrollTo({
        top: 391,
        left: 0,
        behavior: "smooth"
    });
});

contact2.addEventListener("click", function(){
    window.scrollTo({
        top: 391,
        left: 0,
        behavior: "smooth"
    });
});

logo.addEventListener("click", function(){
    location.reload();
});