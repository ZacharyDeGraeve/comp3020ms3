// Stackoverflow is fantastic, I learned some neat techniques. This post in particular was quite handy:
// https://stackoverflow.com/questions/8217419/how-to-determine-if-a-javascript-array-contains-an-object-with-an-attribute-that

// pushes a new folder onto the list of existing ones, purely visual right now
function newFolder() {
    let name = document.getElementById("folder-name-input").value;
    if (name == "") {
        window.alert("Field cannot be empty");
    }
    else if (folders.some(e => e.name == name)) {
        window.alert("The folder " + name + " already exists!");
    }
    else {
        folders.push(
            {
                "id": "folder" + (folders.length + 1),
                "name": name,
                "plays": []
            });
        hideNewFolderPopup();
        loadFolders();
    }
}

// loads the folders into the folder-container div as well as the add new folder button & input
function loadFolders() {
    let folderContainer = document.getElementById("folder-container");
    folderContainer.innerHTML = "";
    for (let i = 0; i < folders.length; i++) {
        folderContainer.innerHTML += ''
            + '<div onclick="openFolder(this.id)" class="folder" id="' + folders[i].id + '">'
            + '    <img class="folder-img" src="icons8-folder-480.png" alt="Folder">'
            + '    <p class="folder-name">' + folders[i].name + '</p>'
            + '</div>';
    }
    folderContainer.innerHTML += ''
        + '<div class="folder new-folder">'
        + '    <img onclick="showNewFolderPopup()" class="folder-img" src="plus.png" alt="New Folder">'
        + '    <p>New Folder</p>'
        + '</div>'
}

// Fills the play-container div with play cards based on the selected folder
function openFolder(id) {

    let playContainer = document.getElementById("play-container");
    playContainer.innerHTML = "";

    folder = folders.find(e => e.id == id);

    if(folder.plays.length == 0) {
        playContainer.innerHTML = "This folder is empty!"
    }
    else {
        for (let i = 0; i < plays.length; i++) {
            if (folder.plays.includes(plays[i].play_id)) {
                playContainer.innerHTML += ''
                    + '<div onclick="redirectPage(' + plays[i].play_id + ')" class="play-card" id = "' + plays[i].play_id + '">'
                    + '    <img class="play-card-image" src="' + plays[i].image_url + '" alt="Play Preview">'
                    + '    <div class="play-card-info">'
                    + '        <p class="play-card-title">' + plays[i].play_name + '</p>'
                    + '        <p class="play-card-rating">' + plays[i].rating + ' <span style="color: gold;">&#9733;</span></p>'
                    + '    </div>'
                    + '</div>';
            }
        }
    }
}

// Shows the popup for naming and creating a new folder
function showNewFolderPopup() {
    document.getElementById("new-folder-popup").style.display = "block";
}

// Hides the popup for naming and creating a new folder
function hideNewFolderPopup() {
    document.getElementById("new-folder-popup").style.display = "none";
}

//Toggles the dropdown portion of the social menu
function toggleSocial() {
    let socialDiv = document.getElementById("social-dropdown");
    let arrow = document.getElementById("social-arrow");

    if (window.getComputedStyle(socialDiv).height == "0px") {
        socialDiv.style.height = "300px";
        arrow.innerHTML = "&#9660;";
    }
    else {
        socialDiv.style.height = "0px";
        arrow.innerHTML = "&#9650;";
    }
}

// Populates the friends list dropdown from an array of friends
function loadFriends() {
    let list = document.getElementById("friends-list");
    list.innerHTML = "";

    for(let friend of friends){
        list.innerHTML += '\n<button onclick="window.alert(\'Coming Soon!\')">' + friend + '</button>'
    }
}

// Adds a new friend to the array of friends
function addFriend() {
    let input = document.getElementById("add-friend-input");

    if(input.value == "")
    {
        window.alert("Field cannot be empty!");
    }
    else if(friends.includes(input.value)) {
        window.alert("You're already friends with " + input.value + "!");
    }
    else {
        friends.push(input.value);
        loadFriends();
    }
}

function redirectPage(play_id){
    const selected = plays.filter(play => play.play_id === play_id);

    localStorage.setItem("data",JSON.stringify(selected));

    window.location.href = '../play-description.html';
}

// Array of friends
var friends = ["Aaryaman", "Brian", "Ivory", "Jiazhen", "Zachary"]

// Populate folders and friends list on load
loadFolders();
loadFriends();