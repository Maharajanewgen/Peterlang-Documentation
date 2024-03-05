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
let currentColumn = 0; // Default column for initial sorting
let isAscending = true; // Default sorting order

function sortTable(column) {
    const table = document.getElementById("issueTable");
    const rows = table.rows;
    const switching = true;

    while (switching) {
        let shouldSwitch = false;

        for (let i = 1; i < rows.length - 1; i++) {
            let x, y;

            if (column === 0) {
                // For the first column (Issue No), compare as numbers
                x = parseInt(rows[i].getElementsByTagName("TD")[column].innerText);
                y = parseInt(rows[i + 1].getElementsByTagName("TD")[column].innerText);
            } else {
                // For other columns, compare as strings
                x = rows[i].getElementsByTagName("TD")[column].innerText.toLowerCase();
                y = rows[i + 1].getElementsByTagName("TD")[column].innerText.toLowerCase();
            }

            if (isAscending) {
                shouldSwitch = x > y;
            } else {
                shouldSwitch = x < y;
            }

            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                break; // Break the loop after a switch
            }
        }

        if (!shouldSwitch) {
            switching = false;

            // If the current column is the same as the clicked column, reverse the sorting order
            if (currentColumn === column) {
                isAscending = !isAscending;
            } else {
                isAscending = true; // Reset sorting order for a new column
                currentColumn = column; // Set the current column to the clicked column
            }
        }
    }
}