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
        const search = plays.filter(play => play.play_name.toLowerCase() .includes(userInput.toLowerCase()));

        console.log("hello");

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
        "play_name": "Shotgun",
        "sport": "Football",
        "image_url": "images/football2.jpeg",
        "rating": 3.0,
        "created_by": "Coach Wilson",
        "comments": [
            "Wow what a great play for my high school team!",
            "Just like TB12"
        ],
        "tags": [
            "Offensive",
            "Shotgun",
            "Throwing"
        ]
    },
    {
        "play_id": 2,
        "play_name": "Triangle #3",
        "sport": "Basketball",
        "image_url": "images/basketball2.jpeg",
        "rating": 3.0,
        "created_by": "Coach Carter",
        "comments": [
            "My youth team couldn't figure it out",
            "Love this play do recommend"
        ],
        "tags": [
            "Offensive",
            "Triangle",
            "Post"
        ]
    },

    {
        "play_id": 6,
        "play_name": "Triangle #5",
        "sport": "Basketball",
        "image_url": "images/basketball3.jpeg",
        "rating": 3.0,
        "created_by": "Coach Carter",
        "comments": [
            "Coach Carter is an awesome movie!",
            "Plays pretty sweet too my high school team used to do this"
        ],
        "tags": [
            "Post",
            "Pin-Down",
            "Triangle"
        ]
    },
    {
        "play_id": 7,
        "play_name": "Russian Cycle",
        "sport": "Ice Hockey",
        "image_url": "images/hockey3.jpeg",
        "rating": 5.0,
        "created_by": "Herb Brookes",
        "comments": [
            "Just keep cycling until they're tired",
            "Great for a team with lots of speed but poor passing"
        ],
        "tags": [
            "Offensive",
            "Cycle",
            "5-on-5"
        ]
    },
    {
        "play_id": 8,
        "play_name": "Through Pass",
        "sport": "Soccer",
        "image_url": "images/soccer3.jpeg",
        "rating": 3.5,
        "created_by": "Messi#1",
        "comments": [
            "I don't know a lot about soccer",
            "I play the fifa video games and do this on there"
        ],
        "tags": [
            "Defense",
            "Zone"
        ]
    },


    {
        "play_id": 3,
        "play_name": "PowerPlay BD",
        "sport": "Ice Hockey",
        "image_url": "images/hockey2.jpeg",
        "rating": 4.0,
        "created_by": "Herb Brookes",
        "comments": [
            "If we played 'em 10 times they might beat us 9 but not this GAME",
            "We will play like the Russians"
        ],
        "tags": [
            "Offensive",
            "PowerPlay",
            "Miracle"
        ]
    },
    {
        "play_id": 4,
        "play_name": "Movement",
        "sport": "Soccer",
        "image_url": "images/soccer1.jpeg",
        "rating": 1.6,
        "created_by": "Ronaldo",
        "comments": [
            "Just running around it's silly",
            ""
        ],
        "tags": [
            "Offensive",
            "Tag 2",
            "Tag3"
        ]
    },
    {
        "play_id": 5,
        "play_name": "Blue 42",
        "sport": "Football",
        "image_url": "images/football1.jpeg",
        "rating": 3.0,
        "created_by": "ChiefsFan4Life",
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
        "play_id": 9,
        "play_name": "Double Fake",
        "sport": "Football",
        "image_url": "images/football2.jpeg",
        "rating": 3.0,
        "created_by": "jack",
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
        "play_id": 10,
        "play_name": "Horns Wrinkle",
        "sport": "Basketball",
        "image_url": "images/basketball3.jpeg",
        "rating": 3.0,
        "created_by": "Lebron",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "Offensive",
            "Horns",
            "Flare"
        ]
    },
    {
        "play_id": 11,
        "play_name": "Corner",
        "sport": "Soccer",
        "image_url": "images/soccer2.jpeg",
        "rating": 3.0,
        "created_by": "Ronaldo",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "Set Piece",
            "Corner",
            "Offensive"
        ]
    },
    {
        "play_id": 12,
        "play_name": "Mahomes",
        "sport": "Football",
        "image_url": "images/football1.jpeg",
        "rating": 3.0,
        "created_by": "Patrick",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "Offensive",
            "Play Action",
            "Throwing"
        ]
    },
    {
        "play_id": 13,
        "play_name": "Blind Pig",
        "sport": "Basketball",
        "image_url": "images/basketball3.jpeg",
        "rating": 3.0,
        "created_by": "Person Name",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "Triangle",
            "Offensive"
        ]
    },
    {
        "play_id": 14,
        "play_name": "Ovi",
        "sport": "Ice Hockey",
        "image_url": "images/hockey1.jpeg",
        "rating": 3.0,
        "created_by": "Sid the Kid",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "One Timer",
            "Offensive",
            "PowerPlay"
        ]
    },
    {
        "play_id": 15,
        "play_name": "Penalty",
        "sport": "Soccer",
        "image_url": "images/soccer1.jpeg",
        "rating": 3.0,
        "created_by": "Penaldo",
        "comments": [
            "Are there actually set plays for a penalty kick I'm not sure?",
            "Anotha one"
        ],
        "tags": [
            "Offensive",
            "Set Piece",
            "Penalty"
        ]
    },
    {
        "play_id": 16,
        "play_name": "Play 16",
        "sport": "Football",
        "image_url": "images/football1.jpeg",
        "rating": 3.0,
        "created_by": "Gronk",
        "comments": [
            "I'm quickly running out of ideas or good jokes to put on here",
            "Throw them the short toss"
        ],
        "tags": [
            "Lob",
            "Screen Play",
            "Offensive"
        ]
    },
    {
        "play_id": 17,
        "play_name": "2-3 Zone",
        "sport": "Basketball",
        "image_url": "images/basketball1.jpeg",
        "rating": 3.3,
        "created_by": "Joel",
        "comments": [
            "Zones are bad for giving up offensive rebounds",
            "Works great on my youth team!!!"
        ],
        "tags": [
            "Zone",
            "Defensive"
        ]
    },
    {
        "play_id": 18,
        "play_name": "Penalty Kill Diamond",
        "sport": "Ice Hockey",
        "image_url": "images/hockey1.jpeg",
        "rating": 4.0,
        "created_by": "Ryan",
        "comments": [
            "Need big players to pull this off",
            "Gotta be patient in this one"
        ],
        "tags": [
            "PK",
            "Defensive",
            "5-on-4"
        ]
    },
    {
        "play_id": 19,
        "play_name": "Cross",
        "sport": "Soccer",
        "image_url": "images/soccer2.jpeg",
        "rating": 4.1,
        "created_by": "Messi#1",
        "comments": [
            "Take away the cross!",
            "Goooooooooaaaaaaaaaallllllllllll",
            "Anotha one",
            "Work smarter not harder"
        ],
        "tags": [
            "Defensive"
        ]
    },
    {
        "play_id": 20,
        "play_name": "Full blitz",
        "sport": "Football",
        "image_url": "images/football2.jpeg",
        "rating": 5.0,
        "created_by": "George Washington",
        "comments": [
            "Sacks all day",
            "Shut down the run game"
        ],
        "tags": [
            "Defensive",
            "Blitz"
        ]
    }
];



var tempPlays = plays;