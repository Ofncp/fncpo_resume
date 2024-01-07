var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Backend Developer", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function showSections() {
    var developerToolsSection = document.getElementById("developer-tools");
    var contactMeSection = document.getElementById("contact-me");
    var pdfDropdownSection = document.getElementById("pdf-dropdown");

    if (developerToolsSection && contactMeSection &&) {
        developerToolsSection.style.display = "block";
        contactMeSection.style.display = "block";
        pdfDropdownSection.style.display = "block";

    } else {
        console.error("One or both sections not found.");
    }
}

// function showSection(sectionId) {
//     var section = document.getElementById(sectionId);

//     if (section) {
//         section.style.display = "block";
//     } else {
//         console.error("Section not found.");
//     }
// }





function downloadPDF() {
    // Get the PDF file path
    var pdfFilePath = './document/Fncpocampo_sd2024.pdf';

    // Create an anchor element
    var link = document.createElement('a');
    link.href = pdfFilePath;

    // Set the download attribute to force download
    link.download = 'Fncpocampo_sd2024.pdf';

    // Append the anchor to the body
    document.body.appendChild(link);

    // Trigger a click on the anchor element
    link.click();

    // Clean up: Remove the anchor from the body
    document.body.removeChild(link);
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

