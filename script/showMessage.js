function showContent(sport) {
    // COVER
    var contents = document.getElementsByClassName('content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }

    // SHOW
    var selectedContent = document.getElementById(sport);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }
}


function showIncompleteMessage() {
    // GET VALUE
    var inputValue = document.getElementById('searchInput').value;

    // OUTPUT
    alert(inputValue + " not in library");
}