var typed= new Typed(".text", {
          strings:["Frontend Developer", "Backend Developer", "Full Stack Developer"],
          typeSpeed:100,
          backSpeed:100,
          backDelay:1000,
          loop: true
    });


function showSections() {
    var developerToolsSection = document.getElementById("developer-tools");
    var contactMeSection = document.getElementById("contact-me");

    developerToolsSection.style.display = "block";
    contactMeSection.style.display = "block";
}

function downloadPDF() {
            window.open('./document/FranceNicoleOcampo102023.pdf', '_blank');
}




/* hold temp not yet completely done configuring
emailjs.init("HZ-uazxdjZRTlLAVT"); // Replace with your user ID from Email.js

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.send("service_23gp8im", "your_template_id", {
            user_name: this.user_name.value,
            user_email: this.user_email.value,
            user_message: this.user_message.value,
        }).then(
            function (response) {
                alert("Message sent successfully!");
                document.getElementById("contact-form").reset();
            },
            function (error) {
                alert("Message could not be sent. Please try again later.");
            }
        );
    });

  */  
