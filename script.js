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
    document.addEventListener('DOMContentLoaded', function() {
        var selectedContentId = localStorage.getItem('selectedContent');
        if (selectedContentId) {
            showContent(selectedContentId);
        }
    });
