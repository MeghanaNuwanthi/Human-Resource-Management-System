// Handle Tab Switching
    document.querySelectorAll(".tab").forEach((tab) => {
        tab.addEventListener("click", function () {
            // Remove "active" class from all tabs
            document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));

            // Add "active" class to clicked tab
            this.classList.add("active");

            // Update the hidden input with the selected role
            const selectedRole = this.dataset.role;
            document.getElementById("selectedRole").value = selectedRole;
        });
    });

    // Handle Login Form Submission
    function handleLogin(event) {
        event.preventDefault(); // Prevent default form submission

        // Get the selected role
        const role = document.getElementById("selectedRole").value;

        // Redirect to the appropriate page
        if (role === "admin") {
            window.location.href = "admin.html";
        } else if (role === "manager") {
            window.location.href = "manager.html";
        } else if (role === "employee") {
            window.location.href = "employee.html";
        }
    }