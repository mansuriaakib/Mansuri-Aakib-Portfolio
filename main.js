// PAGE PRE-LOADER JS[START]

setTimeout(function () {
  $(".loader_bg").fadeToggle();
}, 1500);

// PAGE PRE-LOADER JS[END]


// GET CONTACT FORM DATA WITH EMAIL JS
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  emailjs.sendForm("service_yo81igk", "template_7m2kr4g", this)
    .then(function () {
      alert("Message sent successfully!");
      document.getElementById("contact-form").reset(); // Optional: reset form
    }, function (error) {
      console.error("FAILED...", error);
      alert("Failed to send message. Please try again.");
    });
});
