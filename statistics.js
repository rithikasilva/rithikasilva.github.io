document.addEventListener('DOMContentLoaded', function () {
  fetch('https://rithikasilva.ca/personal-statistics/data.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(jsonData => {
      populateTftData(jsonData);
      populateClassInfo(jsonData);
      heatgrid();
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });



  function populateTftData(jsonData) {
    document.getElementById('tft-rank-icon').src = jsonData["teamfight-tactics"]["rank icon"];
    document.getElementById('tft-rank-name-and-lp').textContent =
      `${jsonData["teamfight-tactics"]["rank name"]} ${jsonData["teamfight-tactics"]["lp"]}LP`;
    document.getElementById('tft-summary').textContent =
      `Top ${jsonData["teamfight-tactics"]["top percentage"]}% • Top4 Rate ${jsonData["teamfight-tactics"]["top4 rate"]}%`;
  }

  function populateClassInfo(jsonData) {
    const activeClasses = jsonData["university"]["active-classes"];
    const classInfoElement = document.getElementById('class-info');
    classInfoElement.innerHTML = '';
    for (const className in activeClasses) {
      if (activeClasses.hasOwnProperty(className)) {
        const classData = activeClasses[className];
        const paragraph = document.createElement('p');
        paragraph.style.fontSize = '0.8em';
        paragraph.textContent = `${className} - ${classData["Hours"]} HRS`;
        classInfoElement.appendChild(paragraph);
      }
    }
  }


  function heatgrid() {
    var colorVars = [
      'var(--two)',
      'var(--three)',
      'var(--four)',
      'var(--five)',
      'var(--six)',
      'var(--seven)',
      'var(--eight)',
    ];
    var heatmapDiv = document.getElementById('heatmap');

    var numberOfHeatblocks = 64;

    for (var i = 0; i < numberOfHeatblocks; i++) {
      var heatblock = document.createElement('div');
      heatblock.className = 'heatblock';

      var randomColorVar = colorVars[Math.floor(Math.random() * colorVars.length)];
      heatblock.style.backgroundColor = randomColorVar;

      heatmapDiv.appendChild(heatblock);
    }
  }
});