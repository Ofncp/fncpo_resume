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
