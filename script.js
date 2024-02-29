var openedTabs = {}; // Keep track of opened tabs

function showContent(contentId) {
    // Check if the content is already opened
    if (!openedTabs[contentId]) {
        // Open content in a new tab with target="_blank"
        window.open(window.location.href + '#' + contentId, '_blank');
        openedTabs[contentId] = true; // Mark the content as opened
    }
}

// Check for content id in URL and show the corresponding content
document.addEventListener('DOMContentLoaded', function () {
    let contentIdFromUrl = window.location.hash.substring(1); // Get content id from URL

    // If content id is present in the URL, show the corresponding content
    if (contentIdFromUrl) {
        showContent(contentIdFromUrl);
    }
});
function sortTable(col) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("issueTable");
    switching = true;

    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;

            x = rows[i].getElementsByTagName("td")[col];
            y = rows[i + 1].getElementsByTagName("td")[col];

            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}