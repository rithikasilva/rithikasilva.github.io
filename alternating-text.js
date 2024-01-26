document.addEventListener('DOMContentLoaded', function() {
    const textArray = ['20 years old.', 
    'currently learning Rust.', 
    'lacking sleep :(.',
    `debugging my life, one line at a time.`,
    `exploring the digital frontier.`,
    `on a mission to pet a cat from every country.`,
    `looking for more things to add here (._.).`,
    `hoping you stick around a while :).`];
    let currentIndex = 0;

    const textElement = document.getElementById('alternatingText');

    function updateText() {
      textElement.style.opacity = 0;
      setTimeout(function () {
        textElement.innerText = textArray[currentIndex];
        textElement.style.opacity = 1;
        currentIndex = (currentIndex + 1) % textArray.length;
      }, 500); // Wait for 500 milliseconds before updating text
    }

    setInterval(updateText, 4800); // Change text every 2500 milliseconds (2.5 seconds)
    updateText(); // Call updateText once to display the first text immediately
  });