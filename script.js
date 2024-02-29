function getSidebar() {
    return `
        <div class="sidebar">
            <div class="nav-item" onclick="navigateToReanalysis()">
                <span>&#9654;</span> Reanalysis
            </div>
            <div class="nav-item" onclick="navigateToContact()">
                <span>&#9654;</span> Contact
            </div>
        </div>
    `;
}

function navigateToReanalysis() {
    window.location.href = 'html/reanalysis/reanalysis.html';
}

function navigateToContact() {
    window.location.href = 'html/contact/contact.html';
}
