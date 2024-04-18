// Your code here
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      moveDodgerLeft();
    } else if (e.key === 'ArrowRight') {
      moveDodgerRight();
    }
  });
  
  function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const dodgerLeft = parseInt(dodger.style.left.replace('px', ''), 10);
  
    if (dodgerLeft > 0) {
      dodger.style.left = `${dodgerLeft - 5}px`;
    }
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const dodgerLeft = parseInt(dodger.style.left.replace('px', ''), 10);
  
    if (dodgerLeft < 360) {
      dodger.style.left = `${dodgerLeft + 5}px`;
    }
  }
  