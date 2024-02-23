function showContent(contentId) {
    const contents = document.querySelectorAll('.content');
    
    contents.forEach(content => {
        content.classList.remove('active');
    });

    const selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.classList.add('active');
    } else {
        console.error("Content with ID " + contentId + " not found.");
    }
}
 function performSearch() {
            // Add your search functionality here
            var searchTerm = document.getElementById('search-container).value;
            console.log('Performing search for: ' + searchTerm);
            // You can implement your search logic or call an API here
        }
