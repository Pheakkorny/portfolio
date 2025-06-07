const checkBtn = document.getElementById("check");
const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo");

checkBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    logo.classList.toggle("hidden");
});

// Hide menu when a menu item is clicked
const menuLinks = document.querySelectorAll(".navbar a");
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        logo.classList.remove("hidden");
    });
});


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    var formData = new FormData(this);

    // Send form data to server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "send_email.php"); // Replace "send_email.php" with your server-side script URL
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Success message
                alert("Message sent successfully!");
                // Optionally, reset the form after successful submission
                document.getElementById("contact-form").reset();
            } else {
                // Error message
                alert("Failed to send message. Please try again later.");
            }
        }
    };
    xhr.send(formData);
});
