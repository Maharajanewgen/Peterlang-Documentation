// Toggle sidebar visibility when clicking on the main content area
document.querySelector('.content').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('active');
    document.querySelector('.content').classList.toggle('active');
  });
  