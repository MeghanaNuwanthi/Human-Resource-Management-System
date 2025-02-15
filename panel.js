document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".content section");
    const navLinks = document.querySelectorAll(".navlink");

    // Function to show a section and hide others
    function showSection(sectionId) {
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = "block"; // Show selected section
            } else {
                section.style.display = "none"; // Hide other sections
            }
        });

        // Highlight the active nav link
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
            event.preventDefault(); // Prevent default anchor behavior
            const sectionId = this.getAttribute("href").substring(1); // Get section ID
            showSection(sectionId); // Show selected section
        });
    });

    // Show dashboard by default when the page loads
    showSection("main");
});