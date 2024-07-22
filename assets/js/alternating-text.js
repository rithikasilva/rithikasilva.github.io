document.addEventListener('DOMContentLoaded', function() {
    const textArray = [
    `writing code to help you get back to doing things you enjoy faster.`,
    'currently learning Rust.', 
    'lacking sleep :(.',
    'working on usportspy!',
    `debugging my life, one line at a time.`,
    `on a mission to pet a cat from every country.`,
    `exploring the digital frontier.`,
    `looking for more things to add here (._.).`,
    `hoping Tron: Ares will be good.`,
    `looking for more songs to listening to!`];
    let currentIndex = 0;
    const longest = textArray.reduce((max, str) => Math.max(max, str.length), 0);

    const textElement = document.getElementById('alternatingText');

    function updateText() {
      textElement.style.opacity = 0;
      setTimeout(function () {
        textElement.innerHTML = textArray[currentIndex].padEnd(longest);
        textElement.style.opacity = 1;
        currentIndex = (currentIndex + 1) % textArray.length;
      }, 500); 
    }

    setInterval(updateText, 5000); 
    updateText(); 
  });
