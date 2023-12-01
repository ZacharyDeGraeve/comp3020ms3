// Variables to track the selected tool and other state
let selectedTool = null;
let firstClick = null;
let whiteboard = document.getElementById('whiteboard');
let isTeammateIconSelected = false;
let isOpponentIconSelected = false;
let isMoveIconSelected = false;
let isPassIconSelected = false;
let isDeleteIconSelected = false;
let moveStartIcon = null;
let passStartIcon = null;

document.addEventListener('DOMContentLoaded', function () {
  // Attach click event listeners to icons
  document.getElementById('teammate-icon').addEventListener('click', function (event) {
    isTeammateIconSelected = true;
    selectedTool = 'teammate';
    highlightIcon(event.target);
  });

  document.getElementById('opponent-icon').addEventListener('click', function (event) {
    isOpponentIconSelected = true;
    selectedTool = 'opponent';
    highlightIcon(event.target);
  });

  document.getElementById('pass-icon').addEventListener('click', function (event) {
    selectedTool = 'pass';
    highlightIcon(event.target);
  });

  document.getElementById('move-icon').addEventListener('click', function (event) {
    isMoveIconSelected = true;
    selectedTool = 'move';
    highlightIcon(event.target);
  });

  document.getElementById('delete-icon').addEventListener('click', function (event) {
    isDeleteIconSelected = true;
    selectedTool = 'delete';
    highlightIcon(event.target);
  });

  document.getElementById('save-button').addEventListener('click', showPopup);

  document.getElementById('popup-save').addEventListener('click', function () {
    save();
  });

  document.getElementById('popup-save-share').addEventListener('click', function () {
    saveAndShare();
  });

  // Attach click event listener to whiteboard
  document.getElementById('whiteboard').addEventListener('click', function (event) {
      if (isTeammateIconSelected) {
        addTeammateIcon(event.clientX, event.clientY);
        isTeammateIconSelected = false;
      } else if (isOpponentIconSelected) {
        addOpponentIcon(event.clientX, event.clientY);
        isOpponentIconSelected = false;
      }
  });

  whiteboard.addEventListener('mousedown', function (event) {
    if (!isDeleteIconSelected) {
      event.preventDefault();
  
      let draggedIcon = null;
  
      if (event.target.offsetParent.classList.contains('teammate-icon')) {
        draggedIcon = event.target.offsetParent;
        isTeammateIconSelected = true;
      } else if (event.target.offsetParent.classList.contains('opponent-icon')) {
        draggedIcon = event.target.offsetParent;
        isOpponentIconSelected = true;
      }
  
      if (draggedIcon) {
        let offsetX = event.clientX - draggedIcon.getBoundingClientRect().left;
        let offsetY = event.clientY - draggedIcon.getBoundingClientRect().top;
  
        // Handle drag
        function moveIcon(event) {
          event.preventDefault();
          event.stopPropagation();
  
          draggedIcon.style.left = event.clientX - offsetX + 'px';
          draggedIcon.style.top = event.clientY - offsetY + 'px';
        }
  
        // Attach moveIcon to mousemove event
        document.addEventListener('mousemove', moveIcon);
  
        // Remove event listeners when mouse is up
        function removeMoveListener() {
          document.removeEventListener('mousemove', moveIcon);
          document.removeEventListener('mouseup', removeMoveListener);
  
          // Reset selection
          isTeammateIconSelected = false;
          isOpponentIconSelected = false;
        }
  
        // Attach removeMoveListener to mouseup event
        document.addEventListener('mouseup', removeMoveListener);
      }
    }
  });  

  whiteboard.addEventListener('click', function (event) {
    if (selectedTool === 'move' && isMoveIconSelected) {
      if (moveStartIcon) {
        // If moveStartIcon is set, draw the arrow
        drawArrow(moveStartIcon, event.clientX, event.clientY, 'move');
        moveStartIcon = null; // Reset moveStartIcon after drawing the arrow
        isMoveIconSelected = false; // Reset move icon selection
        selectedTool = null;
        unhighlightIcon();
      } else if (event.target.offsetParent.classList.contains('teammate-icon') || event.target.offsetParent.classList.contains('opponent-icon')) {
        // If clicking on teammate or opponent icon, set it as the starting point for the move
        moveStartIcon = event.target.offsetParent;
      }
    }

    if (selectedTool === 'pass') {
        if (passStartIcon) {
          // If passStartIcon is set, draw the arrow
          drawArrow(passStartIcon, event.clientX, event.clientY, 'pass');
          passStartIcon = null; // Reset passStartIcon after drawing the arrow
          selectedTool = null;
          unhighlightIcon();
        } else if (event.target.offsetParent.classList.contains('teammate-icon')) {
          // If clicking on teammate icon, set it as the starting point for the pass
          passStartIcon = event.target.offsetParent;
        }
    }
    
    if (selectedTool === 'delete') {
        if (event.target.offsetParent.classList.contains('teammate-icon') || event.target.offsetParent.classList.contains('opponent-icon')) {
          // If clicking on teammate or opponent icon, remove it from the whiteboard
          event.target.offsetParent.removeChild(event.target);
          isDeleteIconSelected = false;
          selectedTool = null;
          unhighlightIcon();
        }
        // You can add additional conditions for other types of elements if needed
      }
  });
});

function addTeammateIcon(x, y) {
    let teammateIcon = document.createElement('div');
    teammateIcon.className = 'icon teammate-icon';
    teammateIcon.style.position = 'absolute';
    teammateIcon.style.left = x + 'px';
    teammateIcon.style.top = y + 'px';
    teammateIcon.innerHTML = '<img src="teammate.png" alt="Teammate">';
    whiteboard.appendChild(teammateIcon);
  
    // Make the teammate icon draggable
    teammateIcon.draggable = true;
  
    teammateIcon.addEventListener('click', function () {
        handleIconClick(teammateIcon);
    });
  
    teammateIcon.addEventListener('dragstart', function (event) {
        // Handle drag start if needed
        // This prevents conflicts with the drag-and-drop functionality
        event.stopPropagation();
    });

    unhighlightIcon();
}

function addOpponentIcon(x, y) {
    let opponentIcon = document.createElement('div');
    opponentIcon.className = 'icon opponent-icon';
    opponentIcon.style.position = 'absolute';
    opponentIcon.style.left = x + 'px';
    opponentIcon.style.top = y + 'px';
    opponentIcon.innerHTML = '<img src="opponent.png" alt="Opponent">';
    whiteboard.appendChild(opponentIcon);
  
    // Make the opponent icon draggable
    opponentIcon.draggable = true;
  
    opponentIcon.addEventListener('click', function () {
        handleIconClick(opponentIcon);
    });
  
    opponentIcon.addEventListener('dragstart', function (event) {
        // Handle drag start if needed
        // This prevents conflicts with the drag-and-drop functionality
        event.stopPropagation();
    });

    unhighlightIcon();
}

function handleIconClick(icon) {
    console.log('Icon clicked:', icon);

    // Implement your logic for handling the click on the icon here
    // You can use the 'icon' parameter to identify which icon was clicked
    // For example, you can check if it's a teammate or opponent icon and perform specific actions.
}

function highlightIcon(icon) {
    icon.classList.add('selected-icon')
}

function unhighlightIcon() {
  // Remove the selected-icon class from all icons
  let icons = document.querySelectorAll('#teammate-icon, #opponent-icon, #move-icon, #pass-icon, #delete-icon');
  icons.forEach(icon => {
    icon.classList.remove('selected-icon');
  });
}

function drawArrow(startIcon, endX, endY, arrowType) {
    console.log('Drawing arrow:', startIcon, endX, endY, arrowType);
    const draw = SVG().addTo(document.getElementById('whiteboard')).size('100%', '100%');

    // Get the bounding box of the starting icon
    const startBox = startIcon.getBoundingClientRect();
    const startX = startBox.left + startBox.width / 2;
    const startY = startBox.top + startBox.height / 2;

    const line = draw.line(startX, startY, endX, endY)
        .stroke({ color: 'black', width: 2 })
        .css({ 'z-index': 1, 'visibility': 'visible'});

    if (arrowType === 'pass') {
        line.stroke({ dasharray: '5,5' });
    }

    const angle = Math.atan2(endY - startIcon.getBoundingClientRect().top, endX - startIcon.getBoundingClientRect().left) * (180 / Math.PI);

    line.rotate(angle, startIcon.getBoundingClientRect().left, startIcon.getBoundingClientRect().top);

    const arrowhead = draw.polygon('95,50 100,50 95,55').fill('black').rotate(angle, endX, endY).css({ 'z-index': 1, 'visibility': 'visible' });
    console.log(document.getElementById('whiteboard'))
    // You can adjust the position and styling as needed
}


function showPopup() {
  // Implement showing the save popup
  document.getElementById('popup').style.display = 'block';
}

function save() {
  // Implement save functionality
  document.getElementById('popup').style.display = 'none';
}

function saveAndShare() {
  // Implement save and share functionality
  document.getElementById('popup').style.display = 'none';
}
