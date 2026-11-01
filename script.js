const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");
});
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your message has been received!");
    contactForm.reset();
});