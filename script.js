function showContent(contentId) {
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
}

document.addEventListener('DOMContentLoaded', function () {
    const selectedContentId = localStorage.getItem('selectedContent');
    if (!selectedContentId) {
        console.error("No selected content ID found in local storage.");
    } else {
        showContent(selectedContentId);
    }
});
