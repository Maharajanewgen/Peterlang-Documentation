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
function showContent(subfolder, container) {
    console.log('subfolder:', subfolder);
    console.log('container:', container);

    // Fetch the content of the corresponding HTML file
    fetch('html/' + subfolder + '/' + container + '.html')
        .then(response => response.text())
        .then(content => {
            // Display the content in a specific container (e.g., a div with id "reanalysis")
            const contentContainer = document.getElementById(subfolder);
            if (contentContainer) {
                contentContainer.innerHTML = content;
            } else {
                console.error("Content container with ID " + subfolder + " not found.");
            }
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
