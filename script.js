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
 
