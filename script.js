// script.js
var plays;
var tempPlays;
document.addEventListener("DOMContentLoaded", function () {
    // Function to fetch and use JSON data
    function fetchPlaysData() {
        // Fetch the JSON file
        fetch('plays.json')
            .then(response => response.json())
            .then(data => {
                this.plays = data;
                this.tempPlays = data;
                generateGridContent(data);
            })
            .catch(error => console.error('Error fetching plays.json:', error));
    }

    fetchPlaysData();
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
    sportNameText
    document.getElementById('sportNameText').innerHTML = text;

}

function searchByPlayName(){
    
    var userInput = document.getElementById('search-text').value;
    
    if(userInput.length > 1)
    {
        const search = tempPlays.filter(play => play.play_name.toLowerCase() === userInput.toLowerCase());

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

    tempPlays = filteredPlays;

    clearContent();

    generateGridContent(filteredPlays);
  }

  function redirect(id){

    const selected = plays.filter(play => play.play_id === id);

    localStorage.setItem("data",JSON.stringify(selected));

    // window.location.href = 'login.html';

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