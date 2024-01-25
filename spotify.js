var serviceHost = "https://spotify.rithikasilva.workers.dev";
var spotifyUser = "r1tz";

var songData, progressSeconds, totalSeconds, progressInterval;

function updatePlayer() {
fetch(`${serviceHost}/get-now-playing`)
    .then((response) => response.json())
    .then((data) => {
    if (data.hasOwnProperty("ERROR") || (data.hasOwnProperty("currently_playing_type") && data["currently_playing_type"] == "episode")) {
        document.getElementById("player-song").innerHTML = `Rithika ...`;
        document.getElementById("player-artist").innerHTML = `is not listening to anything :P`;
        document.getElementById("player-album-art").setAttribute("src", "https://horizondatasys.com/wp-content/uploads/2018/01/Dark-Gray-Square.png");
    } else {
        songData = data;
        document.getElementById("player-song").innerHTML = `Listening to ` + data.item.name;
        document.getElementById("player-artist").innerHTML = `by ` + data.item.artists[0].name;
        document.getElementById("player-link").setAttribute("href", data.item.external_urls.spotify); 
        document.getElementById("player-album-art").setAttribute("src", data.item.album.images[1].url);
        document
            .getElementById("player-progress")
            .setAttribute(
            "style",
            document.getElementById("player-progress").getAttribute("style") +
            `width: ${(data.progress_ms * 100) / data.item.duration_ms}%`
            );

        // Timer to show updates on progress bar and time
        // https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript
        progressSeconds = Math.ceil(songData.progress_ms / 1000);
        totalSeconds = Math.ceil(songData.item.duration_ms / 1000);
        // Process progress only if a song is in 'playing' state
        if (songData.is_playing) {
            progressInterval = setInterval(setProgress, 1000);
        } else {
            setProgress();
        }
    }

    });
}

function setProgress() {
if (progressSeconds > totalSeconds) {
    clearInterval(progressInterval);
    updatePlayer();
    return;
}
++progressSeconds;
var totalLabel =
    pad(parseInt(totalSeconds / 60)) + ":" + pad(totalSeconds % 60);
var progressLabel =
    pad(parseInt(progressSeconds / 60)) + ":" + pad(progressSeconds % 60);
document.getElementById("player-time").innerHTML =
    progressLabel + " / " + totalLabel;
document.getElementById("player-progress").style.width = `${(progressSeconds * 100) / totalSeconds
    }%`;
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}

// Load player for the first time
updatePlayer();