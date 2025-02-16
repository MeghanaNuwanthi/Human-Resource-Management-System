document.addEventListener("DOMContentLoaded", function () {
    const logoutBtn = document.querySelector(".logoutbtn");

    logoutBtn.addEventListener("click", function () {
        sessionStorage.clear();
        localStorage.clear();
        // Redirect to the login page
        window.location.href = "login.html";
    });
});