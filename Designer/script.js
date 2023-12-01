// Field should be dynamic
let field = 'url("BasketballNBAGoalTop.png")';

// Variables to track the selected tool and other state
let selectedTool = null;
let firstClick = null;
let whiteboard = document.getElementById('whiteboard');
let isTeammateIconSelected = false;
let isOpponentIconSelected = false;
let isMoveIconSelected = false;
let isPassIconSelected = false;
let isDeleteIconSelected = false;
let isDrawing = false;
let startX, startY, endX, endY;
let moveStartIcon = null;
let passStartIcon = null;
let context = createCanvas(whiteboard);
let lines = [];

document.addEventListener('DOMContentLoaded', function () {
  // Attach click event listeners to icons
  document.getElementById('teammate-icon').addEventListener('click', function (event) {
    isTeammateIconSelected = true;
    selectedTool = 'teammate';
    unhighlightIcon();
    highlightIcon(event.target);
  });

  document.getElementById('opponent-icon').addEventListener('click', function (event) {
    isOpponentIconSelected = true;
    selectedTool = 'opponent';
    unhighlightIcon();
    highlightIcon(event.target);
  });

  document.getElementById('pass-icon').addEventListener('click', function (event) {
    isPassIconSelected = true;
    isDrawing = true;
    selectedTool = 'pass';
    unhighlightIcon();
    highlightIcon(event.target);
  });

  document.getElementById('move-icon').addEventListener('click', function (event) {
    isMoveIconSelected = true;
    isDrawing = true;
    selectedTool = 'move';
    unhighlightIcon();
    highlightIcon(event.target);
  });

  document.getElementById('delete-icon').addEventListener('click', function (event) {
    isDeleteIconSelected = true;
    selectedTool = 'delete';
    unhighlightIcon();
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

      if (selectedTool === 'move' && isMoveIconSelected) {
        if (moveStartIcon) {
          // If moveStartIcon is set, draw the arrow
          const startIcon = moveStartIcon.getBoundingClientRect();
          drawArrow(moveStartIcon, startIcon.left + startIcon.width/2, startIcon.top + startIcon.height/2, event.clientX, event.clientY, 'move');
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
            const startIcon = passStartIcon.getBoundingClientRect();
            drawArrow(passStartIcon, startIcon.left + startIcon.width/2, startIcon.top + startIcon.height/2, event.clientX, event.clientY, 'pass', event.target.offsetParent);
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

    if (isDeleteIconSelected) {
        deleteLinesByIcon(icon);
    }
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

function createCanvas(parent) {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;

    // Set the canvas style
    canvas.style.position = 'absolute';
    canvas.style.left = '0';
    canvas.style.top = '0';
    canvas.style.backgroundColor = 'transparent';
    canvas.style.backgroundImage = field; // Set the URL of your background image
    canvas.style.backgroundSize = 'contain'; // Adjust as needed
    canvas.style.backgroundPositionX = 'center';
    canvas.style.backgroundRepeat = 'no-repeat';

    // Append the canvas to the parent element
    parent.innerHTML = '';
    parent.appendChild(canvas);

    const context = canvas.getContext('2d');
    context.globalCompositeOperation = 'source-over';

    return context;
}

function drawArrow(startIcon, x1, y1, x2, y2, mode, endIcon) {
    const arrowSize = 10; // Adjust arrowhead size as needed
    const dx = x2 - x1;
    const dy = y2 - y1;
    const angle = Math.atan2(dy, dx);

    // Calculate coordinates for the arrowhead
    const arrowheadX1 = x2 - arrowSize * Math.cos(angle - Math.PI / 6);
    const arrowheadY1 = y2 - arrowSize * Math.sin(angle - Math.PI / 6);
    const arrowheadX2 = x2 - arrowSize * Math.cos(angle + Math.PI / 6);
    const arrowheadY2 = y2 - arrowSize * Math.sin(angle + Math.PI / 6);

    context.beginPath();

    // Move to the starting point of the line
    context.moveTo(x1, y1);

    // Draw the line
    context.lineTo(x2, y2);

    // Draw the arrowhead
    context.lineTo(arrowheadX1, arrowheadY1);
    context.moveTo(x2, y2);
    context.lineTo(arrowheadX2, arrowheadY2);

    context.closePath();

    if (mode === 'move') {
        context.stroke(); // Use stroke for solid line
    } else if (mode === 'pass') {
        // Set the line dash pattern for a dashed line
        context.setLineDash([5, 5]); // Adjust the values as needed for the dash pattern
        context.stroke();
        // Reset the line dash to solid for subsequent drawings
        context.setLineDash([]);
    }

    lines.push({
        startIcon: startIcon,
        endIcon: endIcon,
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2,
        mode: mode
    });
}

function redrawLines() {
    // Clear the canvas
    context.clearRect(0,0,10000,10000);

    // Loop through lines and redraw them
    lines.forEach(line => {
        drawArrow(line.startIcon, line.x1, line.y1, line.x2, line.y2, line.mode, line.endIcon);
    });
}

function deleteLinesByIcon(icon) {
    // Remove lines associated with the icon
    lines = lines.filter(line => line.startIcon !== icon && line.endIcon !== icon);

    // Redraw the updated lines
    redrawLines();
}

function updateLinesOnIconDrag(icon) {
    const iconRect = icon.getBoundingClientRect();

    // Loop through lines and update positions associated with the dragged icon
    lines.forEach(line => {
        if (line.startIcon === icon) {
            line.x1 = iconRect.left + iconRect.width / 2;
            line.y1 = iconRect.top + iconRect.height / 2;
        } else if (line.endIcon === icon) {
            line.x2 = iconRect.left + iconRect.width / 2;
            line.y2 = iconRect.top + iconRect.height / 2;
        }
    });

    // Redraw the updated lines
    redrawLines();
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
