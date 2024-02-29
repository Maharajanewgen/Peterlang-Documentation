var openedTabs = {}; // Keep track of opened tabs

function showContent(contentId) {
    // Check if the content is already opened
    if (!openedTabs[contentId]) {
        // Open content in a new tab with target="_blank"
        window.open(window.location.href.split('#')[0] + '#' + contentId, '_blank');
        openedTabs[contentId] = true; // Mark the content as opened
    }
}

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
