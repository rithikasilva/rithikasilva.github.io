document.addEventListener('DOMContentLoaded', function () {
    var texts = ["Rithika",
                    "Rithika",
                    "Rithika", 
                    "Rithika", 
                    "Rithika", 
                    "රිthika", 
                    "රිතිka",
                     "රිතිකා",
                     "රිතිකා",
                     "රිතිකා",
                     "රිතිකා", 
                     "රිතිකා",  
                     "Riතිකා",
                     "Rithiකා"];
    var currentIndex = 0;

    // Initial flash
    flashText();

    // Set an interval to flash through texts every 2 seconds
    setInterval(function () {
      flashText();
    }, 500);

    function flashText() {
      var textContainer = document.getElementById('name');
      var currentText = texts[currentIndex];

      // Update content and trigger fade-in
      textContainer.innerText = currentText;

      // Increment index for the next text
      currentIndex = (currentIndex + 1) % texts.length;

      // Trigger reflow to restart the animation
      void textContainer.offsetWidth;
    }
  });