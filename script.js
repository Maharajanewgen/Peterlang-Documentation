function showContent(contentId) {
    // Open content in a new tab with target="_blank"
    window.open(window.location.href + '#' + contentId, '_blank');
}

// Check for content id in URL and show the corresponding content
document.addEventListener('DOMContentLoaded', function () {
    let contentIdFromUrl = window.location.hash.substring(1); // Get content id from URL

    // If content id is present in the URL, show the corresponding content
    if (contentIdFromUrl) {
        showContent(contentIdFromUrl);
    }
});
