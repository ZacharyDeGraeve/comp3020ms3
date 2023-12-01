    // please forgive my questionable javascript skills, shoutout to stackoverflow for the carry lmao

    // pushes a new folder onto the list of existing ones, purely visual right now
    function newFolder() {
        let name = document.getElementById("folder-name-input").value;
        if (name == "") {
            window.alert("Field cannot be empty");
        }
        else if (myFolders.includes(name)) {
            window.alert("The folder " + name + " already exists!");
        }
        else {
            myFolders.push(name);
            loadFolders();
        }
    }

    // loads the folders into the folder-container div as well as the add new folder button & input
    function loadFolders() {
        folderContainer = document.getElementById("folder-container");
        folderContainer.innerHTML = "";
        for (let i = 0; i < myFolders.length; i++) {
            folderContainer.innerHTML += ''
                + '<div onclick="openFolder(this)" class="folder" id="folder' + (i + 1) + '">'
                + '    <img class="folder-img" src="SingingBear.png" alt="Folder">'
                + '    <p class="folder-name">' + myFolders[i] + '</p>'
                + '</div>';
        }
        folderContainer.innerHTML += ''
            + '<div class="folder new-folder">'
            + '    <img onclick="newFolder()" class="folder-img" src="SingingBear.png" alt="New Folder">'
            + '</div>'
    }

    // Fills the play-container div with play cards based on the selected folder
    function openFolder(folder) {

        playContainer = document.getElementById("play-container");
        playContainer.innerHTML = "";

        // Always evaluates to true for some reason?
        if (window[folder.id]) {
            let playList = window[folder.id];

            for (let i = 0; i < playList.length; i++) {
                playContainer.innerHTML += ''
                    + '<div class="play-card">'
                    + '    <img class="play-card-image" src="SingingBear.png" alt="Preview">'
                    + '    <div class="play-card-info">'
                    + '        <p class="play-card-title">' + playList[i].title + '</p>'
                    + '        <p class="play-card-rating">' + playList[i].rating + ' <span style="color: gold;">&#9733;</span></p>'
                    + '    </div>'
                    + '</div>';
            }
        }
        else {
            // Not sure how to fix this.
            playContainer.innerHTML = "This folder is empty!";
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