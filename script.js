// script.js


document.addEventListener("DOMContentLoaded", function () {
    
    generateGridContent(plays);

});


function generateStars(rating) {
    var stars = '';
    for (var i = 1; i <= 5; i++) {
        var starClass = i <= rating ? 'filled' : '';
        stars += `<span class="star ${starClass}" data-value="${i}">&#9733;</span>`;
    }
    return stars;
}

function filterBySport(selectedSport) {
    console.log(selectedSport);

    if (selectedSport !== 'All') {
        const filteredPlays = plays.filter(play => play.sport.toLowerCase() === selectedSport.toLowerCase());
        clearContent();
        tempPlays = filteredPlays;
        // Generate and display cards for the filtered plays
        generateGridContent(filteredPlays);

        updateText(selectedSport);
        updateBackground(selectedSport);
    }
    if(selectedSport === 'All'){
        tempPlays = plays;
        clearContent();
        generateGridContent(plays);
        updateText(selectedSport);
    }

}

function generateGridContent(playsData) {

    // Get the container element
    var container = document.getElementById("cardContainer");

    // Loop through the plays data and create cards
    playsData.forEach(function (play) {
        // Create a card element
        var card = document.createElement("div");
        card.classList.add("col");

        // Set the content of the card using play data
        card.innerHTML = `
        <div class="card" id = "${play.play_id}" onclick = "redirect(${play.play_id})">
          <img src="${play.image_url}" class="card-img-top" alt="${play.play_name}">
          <div class="card-body align-self-center">
              <h5 class="card-title fs-3">${play.play_name}</h5>
              <p class="card-text">Sport: ${play.sport}</p>
              <p class="card-text">Rating :
            <span id="rating${play.play_id}" class="star-rating" role="rating" data-rating="${play.rating}">
              ${generateStars(play.rating)}
            </span>
          </p>
              <p class="card-text">Tags <i class="bi bi-tags"></i>: ${play.tags.join(', ')}</p>
          </div>
        </div>
      `;

        // Append the card to the container
        container.appendChild(card);
    });
}

function clearContent() {
    var container = document.getElementById("cardContainer");

    // Clear the contents of the container
    container.innerHTML = '';
}

function errorMessage(message) {
    var container = document.getElementById("cardContainer");

    var card = document.createElement("div");
    card.classList.add("message");

    card.innerHTML = `
        <h1 class = "justify-content-center"> ${message} </h1>
    `;
    
    container.appendChild(card);
}

function sortByName(){
    let sorts = tempPlays;

    sorts.forEach(play => console.log(play.play_name))


    // sorts.sort((a, b) => a.play_name.localeCompare(b.play_name));

    console.log("After sorting ");

    

    sorts.sort(function(a, b) {
        return compareStrings(a.play_name, b.play_name);
      })

    sorts.forEach(play => console.log(play.play_name))

    clearContent();

    generateGridContent(sorts);

}
function updateText(text){
    document.getElementById('sportNameText').innerHTML = text;

}

function searchByPlayName(){
    
    var userInput = document.getElementById('search-text').value;
    
    if(userInput.length > 1)
    {
        const search = plays.filter(play => play.play_name.toLowerCase().includes(userInput.toLowerCase()));

        clearContent();
    
        generateGridContent(search);

    }
    
}

function compareStrings(a, b) {
    // Assuming you want case-insensitive comparison
    a = a.toLowerCase();
    b = b.toLowerCase();
  
    return (a < b) ? -1 : (a > b) ? 1 : 0;
  }

  function filterByTag(tagName){

    const filteredPlays = tempPlays.filter(play => play.tags.includes(tagName));
    if(filteredPlays.length >0)
    {
        tempPlays = filteredPlays;

        clearContent();

        generateGridContent(filteredPlays);
    }
    else{
        clearContent();
        errorMessage("No Plays Found with Tag as : " + tagName);
    }
    
  }

  function redirect(id){

    const selected = plays.filter(play => play.play_id === id);
    
    console.log(selected);

    localStorage.setItem("data",JSON.stringify(selected));

    window.location.href = 'play-description.html';

  }

  function mostRated(){
    let data = tempPlays;

    data.sort((a, b) => b.rating - a.rating);

    clearContent();

    generateGridContent(data);

  }


  function mostComments(){
    let data = tempPlays;

    data.sort((a, b) => b.comments.length - a.comments.length);


    clearContent();

    generateGridContent(data);

  }

  function updateBackground(sport){

    // if(sport === "Basketball"){
    //     console.log("hello");
    //     var divs = document.getElementById('cardContainer');

    //     divs.style.backgroundImage = 'url("./Basketball.webp")';
    //     divs.style.backgroundSize = 'cover';
    //     divs.style.backgroundRepeat = 'no-repeat';
    //     divs.style.backgroundPosition = 'center center';

    // }
  }















  var plays = [
    {
        "play_id": 1,
        "play_name": "Play 1",
        "sport": "Football",
        "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
        "rating": 3.0,
        "created_by": "Person Name",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "Offensive",
            "Tag 2",
            "Tag3"
        ]
    },
    {
        "play_id": 2,
        "play_name": "Play 2",
        "sport": "Basketball",
        "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
        "rating": 3.0,
        "created_by": "Person Name",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "Offensive",
            "Tag 2",
            "Tag3"
        ]
    },

    {
        "play_id": 6,
        "play_name": "Play 6",
        "sport": "Basketball",
        "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
        "rating": 3.0,
        "created_by": "Person Name",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "Tag 1",
            "Tag 2",
            "Tag3"
        ]
    },
    {
        "play_id": 7,
        "play_name": "Play 7",
        "sport": "Ice Hockey",
        "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
        "rating": 3.0,
        "created_by": "Person Name",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "Offensive",
            "Tag 2",
            "Tag3"
        ]
    },
    {
        "play_id": 8,
        "play_name": "Play 8",
        "sport": "Soccer",
        "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
        "rating": 3.0,
        "created_by": "Person Name",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "Defensive",
            "Tag 2",
            "Tag3"
        ]
    },


    {
        "play_id": 3,
        "play_name": "Play 3",
        "sport": "Ice Hockey",
        "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
        "rating": 3.0,
        "created_by": "Person Name",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "Tag 1",
            "Tag 2",
            "Tag3"
        ]
    },
    {
        "play_id": 4,
        "play_name": "Play 4",
        "sport": "Soccer",
        "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
        "rating": 3.0,
        "created_by": "Person Name",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "Tag 1",
            "Tag 2",
            "Tag3"
        ]
    },
    {
        "play_id": 5,
        "play_name": "Play 5",
        "sport": "Football",
        "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
        "rating": 3.0,
        "created_by": "Person Name",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "Tag 1",
            "Tag 2",
            "Tag3"
        ]
    },
    




    {
        "play_id": 9,
        "play_name": "Play 9",
        "sport": "Football",
        "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
        "rating": 3.0,
        "created_by": "Person Name",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "Tag 1",
            "Tag 2",
            "Tag3"
        ]
    },
    {
        "play_id": 10,
        "play_name": "Play 10",
        "sport": "Basketball",
        "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
        "rating": 3.0,
        "created_by": "Person Name",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "Tag 1",
            "Tag 2",
            "Tag3"
        ]
    },
    {
        "play_id": 11,
        "play_name": "Play 11",
        "sport": "Soccer",
        "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
        "rating": 3.0,
        "created_by": "Person Name",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "Tag 1",
            "Tag 2",
            "Tag3"
        ]
    },
    {
        "play_id": 12,
        "play_name": "Play 12",
        "sport": "Football",
        "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
        "rating": 3.0,
        "created_by": "Person Name",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "Tag 1",
            "Tag 2",
            "Tag3"
        ]
    },
    {
        "play_id": 13,
        "play_name": "Play 13",
        "sport": "Basketball",
        "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
        "rating": 3.0,
        "created_by": "Person Name",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "Tag 1",
            "Tag 2",
            "Tag3"
        ]
    },
    {
        "play_id": 14,
        "play_name": "Play 14",
        "sport": "Ice Hockey",
        "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
        "rating": 3.0,
        "created_by": "Person Name",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "Tag 1",
            "Tag 2",
            "Tag3"
        ]
    },
    {
        "play_id": 15,
        "play_name": "Play 15",
        "sport": "Soccer",
        "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
        "rating": 3.0,
        "created_by": "Person Name",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "Tag 1",
            "Tag 2",
            "Tag3"
        ]
    },
    {
        "play_id": 16,
        "play_name": "Play 16",
        "sport": "Football",
        "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
        "rating": 3.0,
        "created_by": "Person Name",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "Tag 1",
            "Tag 2",
            "Tag3"
        ]
    },
    {
        "play_id": 17,
        "play_name": "Play 17",
        "sport": "Basketball",
        "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
        "rating": 3.0,
        "created_by": "Person Name",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "Tag 1",
            "Tag 2",
            "Tag3"
        ]
    },
    {
        "play_id": 18,
        "play_name": "Play 18",
        "sport": "Ice Hockey",
        "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
        "rating": 3.0,
        "created_by": "Person Name",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "Tag 1",
            "Tag 2",
            "Tag3"
        ]
    },
    {
        "play_id": 19,
        "play_name": "Play 19",
        "sport": "Soccer",
        "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
        "rating": 3.0,
        "created_by": "Person Name",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here",
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "Tag 1",
            "Tag 2",
            "Tag3"
        ]
    },
    {
        "play_id": 20,
        "play_name": "Play 20",
        "sport": "Football",
        "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
        "rating": 5.0,
        "created_by": "Person Name",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "Tag 1",
            "Tag 2",
            "Tag3"
        ]
    }
]



var tempPlays = plays;