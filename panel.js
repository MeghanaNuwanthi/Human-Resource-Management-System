document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".content section");
    const navLinks = document.querySelectorAll(".navlink");

    // Function to show a section and hide others
    function showSection(sectionId) {
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = "block"; 
            } else {
                section.style.display = "none"; 
            }
        });

        navLinks.forEach(link => {
            if (link.getAttribute("href") === `#${sectionId}`) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    // Add event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); 
            const sectionId = this.getAttribute("href").substring(1); 
            showSection(sectionId); 
        });
    });

    showSection("main");
});

