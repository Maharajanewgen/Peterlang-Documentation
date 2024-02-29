// script.js

function showContent(contentId, className) {
    var content = document.getElementById(contentId);

    if (content) {
        if (content.style.display === 'none' || content.style.display === '') {
            // If content is hidden, load it dynamically
            fetchContent(contentId, className);
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    } else {
        console.error('Element with id ' + contentId + ' not found.');
    }
}

function fetchContent(contentId, className) {
    var container = document.getElementById('content-container');
    var filePath = 'html/' + contentId + '/' + contentId + '.html';

    // Fetch content using AJAX (Assuming no external libraries for simplicity)
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            container.innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', filePath, true);
    xhr.send();
}
