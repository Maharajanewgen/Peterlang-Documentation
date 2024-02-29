document.addEventListener('DOMContentLoaded', function() {
  // Fetch and include the sidebar.html content
  fetch('sidebar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('sidebarContainer').innerHTML = data;

      // Toggle sidebar visibility when clicking on the main content area
      document.querySelector('.content').addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('active');
        document.querySelector('.content').classList.toggle('active');
      });

      // Close sidebar when clicking on a sidebar link
      const sidebarLinks = document.querySelectorAll('.sidebar a');
      sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
          document.querySelector('.sidebar').classList.remove('active');
          document.querySelector('.content').classList.remove('active');
        });
      });
    });
});
