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



function updateStatus(issueNumber, newStatus) {
    const statusCell = document.getElementById(`status-${issueNumber}`);
    if (statusCell) {
      statusCell.textContent = newStatus;
    } else {
      console.error(`Status cell for issue ${issueNumber} not found.`);
    }
  }

  function createDropdown(issueNumber) {
    const dropdown = document.createElement('select');
    dropdown.setAttribute('onchange', `updateStatus('${issueNumber}', this.value)`);

    const options = ['Fixed', 'Pending', 'Ignore']; // Add more options if needed

    options.forEach(optionText => {
      const option = document.createElement('option');
      option.value = optionText;
      option.text = optionText;
      dropdown.appendChild(option);
    });

    return dropdown;
  }

  function addDropdownsToTable() {
    const table = document.getElementById('issueTable');
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
      const issueNumber = rows[i].getElementsByTagName('td')[0].textContent;
      const dropdownCell = rows[i].insertCell(3); // Insert in the 4th column (0-based index)
      dropdownCell.appendChild(createDropdown(issueNumber));
    }
  }

  function updateValuesInSourceCode() {
    const table = document.getElementById('issueTable');
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
      const issueNumber = rows[i].getElementsByTagName('td')[0].textContent;
      const dropdown = rows[i].getElementsByTagName('select')[0];
      const updatedValue = dropdown ? dropdown.value : '';

      // Update the source code or perform any other action with the updated value
      console.log(`Update source code for issue ${issueNumber} with value: ${updatedValue}`);
    }
  }

  document.addEventListener('DOMContentLoaded', addDropdownsToTable);