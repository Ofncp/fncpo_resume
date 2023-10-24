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
            window.open('./document/fncpo_resume.pdf', '_blank');
}


// email js

 (function() {
            emailjs.init("HZ-uazxdjZRTlLAVT");
        })();

        document.getElementById('form-btn').addEventListener('click', function(event) {
            event.preventDefault();

            // Collect user input
            const userName = document.getElementById('inputName').value;
            const userEmail = document.getElementById('inputEmail').value;
            const userMessage = document.getElementById('inputMessage').value;

            // Compose the email
            const emailParams = {
                from_name: userName,
                to_email: 'fncp007@gmail.com', // Your personal email
                message: userMessage,
            };

            // Send the email
            emailjs.send('service_23gp8im', 'template_or5xjje', emailParams)
                .then(function(response) {
                    alert('Your message was sent successfully!');
                    // Clear the form or redirect to a confirmation page
                })
                .catch(function(error) {
                    alert('There was an error sending your message. Please try again.');
                });
        });


