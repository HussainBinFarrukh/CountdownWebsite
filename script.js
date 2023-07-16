window.onload = function() {
  // Wedding countdown
  var weddingDate = new Date("2023-12-02T00:00:00Z");
  var countdownElement = document.getElementById("countdown");

  setInterval(function() {
    var now = new Date().getTime();
    var timeRemaining = weddingDate - now;

    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    countdownElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
  }, 1000);

  // Falling flowers
  var numFlowers = 500 ; // Number of falling flowers

  // Create the falling flowers
  var container = document.querySelector('.rain-container');
  for (var i = 0; i < numFlowers; i++) {
    var flower = document.createElement('div');
    flower.classList.add('rain');
    flower.style.left = Math.random() * 100 + '%'; // Random horizontal position
    container.appendChild(flower);
  }

  // Function to reposition the falling flowers
  function repositionFlowers() {
    var flowers = document.querySelectorAll('.rain');
    flowers.forEach(function(flower) {
      flower.style.top = Math.random() * container.offsetHeight + 'px'; // Random vertical position
      flower.style.animationDuration = Math.random() * 2 + 1 + 's'; // Random animation duration
    });
  }

  // Reposition the falling flowers initially and on window resize
  repositionFlowers();
  window.addEventListener('resize', repositionFlowers);
};
