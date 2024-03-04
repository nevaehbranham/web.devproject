// JavaScript for basic interactivity

// Form validation
function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;

    if (name === "" || email === "") {
        alert("Name and Email must be filled out");
        return false;
    }
    return true; // If both name and email are filled, allow form submission
}

// Toggle content visibility
function toggleContent() {
    var content = document.getElementById("hiddenContent");
    if (content) {
        content.style.display = (content.style.display === "none" || content.style.display === "") ? "block" : "none";
    } else {
        console.error("Element with ID 'hiddenContent' not found.");
    }
}
