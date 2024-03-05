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
    const rows = Array.from(table.rows).slice(1); // Exclude the header row
    const switching = true;

    while (switching) {
        let shouldSwitch = false;

        for (let i = 0; i < rows.length - 1; i++) {
            let x, y;

            if (column === 0) {
                // For the first column (Issue No), compare as numbers
                x = parseInt(rows[i].cells[column].innerText);
                y = parseInt(rows[i + 1].cells[column].innerText);
            } else {
                // For other columns, compare as strings
                x = rows[i].cells[column].innerText.toLowerCase();
                y = rows[i + 1].cells[column].innerText.toLowerCase();
            }

            if (isAscending ? x > y : x < y) {
                shouldSwitch = true;
                break; // Break the loop after a switch
            }
        }

        if (shouldSwitch) {
            rows.forEach((row, index) => {
                const nextRow = rows[index + 1];
                if (nextRow && (isAscending ? row.cells[column].innerText > nextRow.cells[column].innerText : row.cells[column].innerText < nextRow.cells[column].innerText)) {
                    table.tBodies[0].insertBefore(nextRow, row);
                }
            });
        }

        switching = shouldSwitch;
        
        // If the current column is the same as the clicked column, reverse the sorting order
        if (currentColumn === column) {
            isAscending = !isAscending;
        } else {
            isAscending = true; // Reset sorting order for a new column
            currentColumn = column; // Set the current column to the clicked column
        }
    }
}
