//start of music player
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [
    {
        name: "Take Care",
        artist: "Oddwin",
        image: "music/TakeCare.png",
        path: "music/TakeCare.mp3"
    },
    {
        name: "Sorry, I Like You",
        artist: "Burbank",
        image: "music/SorryILikeYou.png",
        path: "music/SorryILikeYou.mp3"
    },
    {
        name: "Leaves",
        artist: "Taiko",
        image: "music/Leaves.png",
        path: "music/Leaves.mp3",
    },
    {
        name: "have you heard",
        artist: "potsu",
        image: "music/haveyouheard.png",
        path: "music/haveyouheard.mp3",
    },
    {
        name: "Comfort Chain",
        artist: "Instupendo",
        image: "music/ComfortChain.png",
        path: "music/ComfortChain.mp3",
    },
    {
        name: "A Love Letter to You",
        artist: "Shiloh Dynasty",
        image: "music/ALoveLettertoYou.png",
        path: "music/ALoveLettertoYou.mp3",
    },
    {
        name: "8.16.18",
        artist: "Oddwin",
        image: "music/8.16.18.png",
        path: "music/8.16.18.mp3",
    },
    {
        name: "Days Of Wine And Roses",
        artist: "Wes Montgomery",
        image: "music/DaysOfWineAndRoses.png",
        path: "music/DaysOfWineAndRoses.mp3",
    }
];

function loadTrack(track_index) {
    clearInterval(updateTimer);
    resetValues();

    // Load a new track
    curr_track.src = track_list[track_index].path;
    curr_track.load();

    // Update details of the track
    track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
    track_name.textContent = track_list[track_index].name;
    track_artist.textContent = track_list[track_index].artist;
    now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;

    // Set an interval of 1000 milliseconds for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);

    // Move to the next track if the current one finishes playing
    curr_track.addEventListener("ended", nextTrack);
}

// Reset Values
function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}

function playpauseTrack() {
    if (!isPlaying) playTrack();
    else pauseTrack();
}

function playTrack() {
    curr_track.play();
    isPlaying = true;

    // Replace icon with the pause icon
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
    curr_track.pause();
    isPlaying = false;

    // Replace icon with the play icon
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

function nextTrack() {
    if (track_index < track_list.length - 1)
    track_index += 1;
    else track_index = 0;
    loadTrack(track_index);
    playTrack();
}

function prevTrack() {
    if (track_index > 0)
    track_index -= 1;
    else track_index = track_list.length;
    loadTrack(track_index);
    playTrack();
    }

function seekTo() {
    seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}

function setVolume() {
    curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
    let seekPosition = 0;

    // Check if the current track duration is a legible number
    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        // Calculate the time left and the total duration
        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        // Adding a zero to the single digit time values
        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}

// Load the first track in the tracklist
loadTrack(track_index);
//end of music player