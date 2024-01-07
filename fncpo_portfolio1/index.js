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

    developerToolsSection.style.display = "block";
    contactMeSection.style.display = "block";
}

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
