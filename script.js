// script.js

document.addEventListener("DOMContentLoaded", function () {
    const sidebarContainer = document.getElementById("sidebar-container");

    // Fetch and inject sidebar content
    fetch("sidebar.html")
        .then(response => response.text())
        .then(data => {
            sidebarContainer.innerHTML = data;
        })
        .catch(error => console.error("Error fetching sidebar content:", error));
});
