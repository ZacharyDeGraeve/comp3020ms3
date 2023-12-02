document.getElementById("playImage").addEventListener('click', function () {

    console.log("hello");

    var imgSrc = this.getAttribute('data-gif');

    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.right = '0';
    overlay.style.bottom = '0';
    overlay.style.left = '0';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.cursor = 'default';
    overlay.innerHTML = '<img src="' + imgSrc + '">';

    overlay.addEventListener('click', function () {
        document.body.removeChild(overlay);
    });

    var img = overlay.querySelector('img');
    img.style.maxWidth = '80%';
    img.style.maxHeight = '80%';
    img.style.objectFit = 'contain';

    window.addEventListener('resize', function () {
        img.style.maxWidth = '80%';
        img.style.maxHeight = '80%';
    });

    document.body.appendChild(overlay);
});

window.onload = function () {
    //var play = plays[0]; // Get the first play
    this.play = JSON.parse(localStorage.getItem("data"))[0];

    document.getElementById('playTitle').textContent = play.play_name;

    var myImage = document.getElementById('playImage');
    // console.log(play.image_url);
    myImage.src = play.image_url;

    console.log(play);
    console.log(play.image_url);

    var ratingElement = document.getElementById('rating');
    ratingElement.innerHTML = '';
    for (var i = 0; i < 5; i++) {
        if (i < Math.floor(play.rating)) {
            ratingElement.innerHTML += '<i class="fas fa-star"></i>';
        } else if (i < play.rating) {
            ratingElement.innerHTML += '<i class="fas fa-star-half-alt"></i>';
        } else {
            ratingElement.innerHTML += '<i class="far fa-star"></i>';
        }
    }

    var tagsElement = document.getElementById('tags');
    tagsElement.innerHTML = '<h3 id="play-tags">Tags:</h3>';
    for (var i = 0; i < play.tags.length; i++) {
        tagsElement.innerHTML += '<span class="tag">' + play.tags[i] + '</span>';
    }

    document.getElementById('playDescription').textContent = play.description;
    //localStorage.clear();
};

document.querySelectorAll('#userRating .star').forEach(function (star) {
    star.addEventListener('click', function (event) {
        event.preventDefault();

        var value = this.getAttribute('data-value');
        document.querySelectorAll('#userRating .star').forEach(function (star) {
            star.innerHTML = '<i class="far fa-star"></i>';
        });
        for (var i = 0; i < value; i++) {
            document.querySelectorAll('#userRating .star')[i].innerHTML = '<i class="fas fa-star"></i>';
        }
    });
});

document.getElementById('commentForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var rating = document.querySelectorAll('#userRating .fas').length;
    var commentText = document.getElementById('commentInput').value;

    if (!rating || !commentText) {
        alert('Please provide a rating and comment.');
        return;
    }

    var username = 'Current User';
    var comment = document.createElement('li');
    var userRatingHTML = '';

    for (var i = 0; i < 5; i++) {
        if (i < rating) {
            userRatingHTML += '<i class="fas fa-star"></i>';
        } else {
            userRatingHTML += '<i class="far fa-star"></i>';
        }
    }
    comment.innerHTML = '<h3>' + username + '</h3><div class="userRating">' + userRatingHTML + '</div><p>' + commentText + '</p>';

    var commentList = document.getElementById('commentList');
    commentList.insertBefore(comment, commentList.firstChild);

    document.getElementById('commentInput').value = '';
    document.querySelectorAll('#userRating .star').forEach(star => star.innerHTML = '<i class="far fa-star"></i>');
});



function savePlay() {
    let savePrompt = document.createElement('div');
    savePrompt.textContent = 'Play saved';
    savePrompt.textContent = 'Play saved';
    savePrompt.style.position = 'fixed';
    savePrompt.style.top = '20px';
    savePrompt.style.left = '50%';
    savePrompt.style.transform = 'translateX(-50%)';
    savePrompt.style.padding = '10px';
    savePrompt.style.backgroundColor = '#f8d7da';
    savePrompt.style.color = '#721c24';
    savePrompt.style.borderRadius = '5px';
    savePrompt.style.opacity = '0';
    savePrompt.style.transition = 'opacity 0.5s ease-in-out';
    document.body.appendChild(savePrompt);

    setTimeout(function () {
        savePrompt.style.opacity = '1';
    }, 0);

    setTimeout(function () {
        savePrompt.style.opacity = '0';
    }, 2000);

    setTimeout(function () {
        document.body.removeChild(savePrompt);
    }, 2500);
}



// var test = {
//     "play_id": 1,
//     "play_name": "Play 1",
//     "sport": "Football",
//     "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
//     "rating": 5.0,
//     "created_by": "Person Name",
//     "comments": [
//         "First Comment will go here",
//         "Second Comment will go here"
//     ],
//     "tags": [
//         "Offensive",
//         "Tag 2",
//         "Tag 3",
//         "Tag 4"
//     ],
//     "description" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae corrupti ad qui ut maxime aut consequuntur sit, obcaecati consectetur expedita eum sed similique eius minima, sint explicabo assumenda. Voluptatibus, accusantium."
// }

// localStorage.setItem("data",JSON.stringify(test));

 var play ;

