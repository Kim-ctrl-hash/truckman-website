document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    alert("Your message has been sent successfully!");
    // You can integrate with a backend or email service here to handle form submissions
});
