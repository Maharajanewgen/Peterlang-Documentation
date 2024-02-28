/*function showContent(contentId) {
    const contents = document.querySelectorAll('.content');

    contents.forEach(content => {
        content.classList.remove('active');
    });

    const selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.classList.add('active');
        // Save the selected content ID to local storage
        localStorage.setItem('selectedContent', contentId);
    } else {
        console.error("Content with ID " + contentId + " not found.");
    }
}*/

function showContent(section) {
    // Fetch the content of the corresponding HTML file
    fetch(section + '/reanalysis.html')
        .then(response => response.text())
        .then(content => {
            // Display the content in a specific container (e.g., a div with id "content-container")
            document.getElementById('content-container').innerHTML = content;
        })
        .catch(error => console.error('Error fetching content:', error));
}

document.addEventListener('DOMContentLoaded', function () {
    const selectedContentId = localStorage.getItem('selectedContent');
    if (!selectedContentId) {
        console.error("No selected content ID found in local storage.");
    } else {
        showContent(selectedContentId);
    }
});
