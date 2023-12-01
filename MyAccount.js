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

        loadFolders();
    }
}

// loads the folders into the folder-container div as well as the add new folder button & input
function loadFolders() {
    folderContainer = document.getElementById("folder-container");
    folderContainer.innerHTML = "";
    for (let i = 0; i < folders.length; i++) {
        folderContainer.innerHTML += ''
            + '<div onclick="openFolder(this.id)" class="folder" id="' + folders[i].id + '">'
            + '    <img class="folder-img" src="SingingBear.png" alt="Folder">'
            + '    <p class="folder-name">' + folders[i].name + '</p>'
            + '</div>';
    }
    folderContainer.innerHTML += ''
        + '<div class="folder new-folder">'
        + '    <img onclick="newFolder()" class="folder-img" src="SingingBear.png" alt="New Folder">'
        + '</div>'
}

// Fills the play-container div with play cards based on the selected folder
function openFolder(id) {

    playContainer = document.getElementById("play-container");
    playContainer.innerHTML = "";

    folder = folders.find(e => e.id == id);

    for (let i = 0; i < plays.length; i++) {
        if (folder.plays.includes(plays[i].play_id)) {
            playContainer.innerHTML += ''
                + '<div class="play-card">'
                + '    <img class="play-card-image" src="' + "SingingBear.png" + '" alt="Play Preview">'
                + '    <div class="play-card-info">'
                + '        <p class="play-card-title">' + plays[i].play_name + '</p>'
                + '        <p class="play-card-rating">' + plays[i].rating + ' <span style="color: gold;">&#9733;</span></p>'
                + '    </div>'
                + '</div>';
        }
    }
}

function toggleSocial() {
    socialDiv = document.getElementById("social-list");
    arrow = document.getElementById("social-arrow");

    if (window.getComputedStyle(socialDiv).height == "0px") {
        socialDiv.style.height = "300px";
        arrow.innerHTML = "&#9660;";
    }
    else {
        socialDiv.style.height = "0px";
        arrow.innerHTML = "&#9650;";
    }
}

//lists of fake folders full of plays

loadFolders();