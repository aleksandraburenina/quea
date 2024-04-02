let xDown = null;
let yDown = null;

const handleTouchStart = (evt) => {
  const firstTouch = evt.touches[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
};

const handleTouchMove = (evt) => {
  if (!xDown || !yDown) {
    return;
  }

  let xUp = evt.touches[0].clientX;
  let yUp = evt.touches[0].clientY;

  let xDiff = xDown - xUp;
  let yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      /* left swipe */ 
    } else {
      /* right swipe */
    }
  } else {
    if (yDiff > 0) {
      /* up swipe */ 
    } else { 
      /* down swipe */
    }
  }

  // Reset values
  xDown = null;
  yDown = null;
};

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
