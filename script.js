// JavaScript for basic interactivity

//Form validation
function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;

    if (name === "" || email === "") {
        alert("Name and Email must be filled out");
        return false;
    }
}

//Toggle content visibility
function toggleContent() {
    var content = document.getElementById("hiddenContent");
    content.style.display = (content.style.display === "none" || content.style.display === "") ? "block" : "none";
}
