let songIndex = 0;
let audioElement = new Audio("./songs/Raatan-Lambiyan.mp3");
let playBtnHome = document.getElementById("play-btn-home");
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("progressBar");
let musicStart = document.getElementById("musicStart");
let musicEnd = document.getElementById("musicEnd");
let sideBarSearch = document.querySelector("#sidebar-search");
let headerSearchDiv = document.querySelector(".header-search-div");
let progressBarContainer = document.querySelector(".progressbar-container");
let masterSongTitle = document.getElementById("masterSongTitle");
let masterSongInfo = document.getElementById("masterSongInfo");
let masterCover = document.getElementById("masterCover");
let songCards = Array.from(document.getElementsByClassName("song-cards"));
let coverPlayBtns = Array.from(document.getElementsByClassName("cover-play-btn"));

let songs = [
    { songPath: "songs/Tum-hi-ho.mp3", songTitle: "Tum Hi Ho", songInfo: "Arijit Singh", coverPath: "photos/cover-1.png" },
    { songPath: "songs/Channa-Mereya.mp3", songTitle: "Channa Mereya", songInfo: "Pritam, Arijit Singh", coverPath: "photos/cover-2.png" },
    { songPath: "songs/Srivalli.mp3", songTitle: "Srivalli - Pushpa", songInfo: "Javed Ali", coverPath: "photos/cover-3.jpg" },
    { songPath: "songs/Tere-Pyar-Mein.mp3", songTitle: "Tere Pyar Mein", songInfo: "Arijit Singh, Nikhita Gandhi", coverPath: "photos/cover-4.png" },
    { songPath: "songs/Ranjha.mp3", songTitle: "Ranjha", songInfo: "B Praak, Jasleen Royal", coverPath: "./photos/cover-5.png" },
    { songPath: "songs/Dil-Ibaadat.mp3", songTitle: "Dil Ibadat", songInfo: "KK, Pritam", coverPath: "photos/cover-6.png" },
    { songPath: "songs/Kesariya.mp3", songTitle: "This is Arijit Singh", songInfo: "Bollywood crooner's essential songs.", coverPath: "photos/arijit-singh.jpg" },
    { songPath: "songs/Apnaa Mujhe Tu Lagaa.mp3", songTitle: "This is Sounu Nigam", songInfo: "The essential tracks, all in one playlist.", coverPath: "photos/sonu-nigam.jpg" },
    { songPath: "songs/Shikwa Nahi.mp3", songTitle: "This is Jubin Nautial", songInfo: "The essential tracks, all in one playlist.", coverPath: "photos/jubin-nautiyal.jpg" },
    { songPath: "songs/Tu Hi Haqeeqat.mp3", songTitle: "This is Javed Ali", songInfo: "The essential tracks, all in one playlist.", coverPath: "photos/javed-ali.jpg" },
    { songPath: "songs/Main Agar Kahoon.mp3", songTitle: "This is Shreya Ghosal", songInfo: "The essential tracks, all in one playlist.", coverPath: "photos/shreya-ghosal.jpg" },
    { songPath: "songs/Dil Diyan Gallan.mp3", songTitle: "This is Atif Aslam", songInfo: "The essential tracks, all in one playlist.", coverPath: "photos/atif-aslam.jpg" },
    { songPath: "songs/Jaaniya Haunted.mp3", songTitle: "Janiya Hautend bollywood", songInfo: "Chirratan Bhatt", coverPath: "photos/recently-1.png" },
    { songPath: "songs/O Aasman.mp3", songTitle: "O Asman Wale", songInfo: "Jubin Nautial | 2023", coverPath: "photos/recently-2.png" },
    { songPath: "songs/Lovely.mp3", songTitle: "Billie - isn't it lovely", songInfo: "Billie, delilah_ortega", coverPath: "photos/recently-3.png" },
    { songPath: "songs/Aaj Mausam.mp3", songTitle: "Old is Gold", songInfo: "Best Hits of Md Rafi", coverPath: "photos/recently-4.png" },
    { songPath: "songs/Mera Dil Bhi.mp3", songTitle: "Kumar Sanu Hits", songInfo: "Collection of superhit 90s", coverPath: "photos/recently-5.png" },
    { songPath: "songs/Tip Tip Barsa Paani.mp3", songTitle: "Bollywood Evergreen", songInfo: "Top 90s Songs", coverPath: "photos/recently-6.png" }
]

// Home Song Play

playBtnHome.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        playBtnHome.textContent = "Pause"
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    } else {
        audioElement.pause()
        playBtnHome.textContent = "Play"
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
    }
})

// Song Title update

songCards.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName("song-title")[0].textContent = songs[i].songTitle
});

// Handle play/pause click Master Song

masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
    }
});

// Master Play Hover Play/pause Pop-Up
let playTitle = document.querySelector(".play");
masterPlay.addEventListener("click", () => {
    if (playTitle.textContent === "Play") {
        playTitle.textContent = "Pause";
        playTitle.style.display = "block";
    }
    else {
        playTitle.textContent = "Play"
        playTitle.style.display = "block";
    }
})

masterPlay.addEventListener("mouseover", () => {
    playTitle.style.display = "block";
})

masterPlay.addEventListener("mouseout", () => {
    playTitle.style.display = "none";
})

// Cover Song and Button controls
audioElement.addEventListener("ended", () => {
    progressBar.value = 0;
});

progressBarContainer.addEventListener("click", (event) => {
    let progressBarWidth = progressBarContainer.clientWidth;
    let clickX = event.offsetX;
    let duration = audioElement.duration;
    audioElement.currentTime = (clickX / progressBarWidth) * duration;
});

audioElement.addEventListener("timeupdate", () => {
    let currentTime = audioElement.currentTime;
    if (currentTime === 0) {
        progressBarReset();
    }
    let duration = audioElement.duration;
    let progressMinutes = Math.floor(currentTime / 60);
    let progressSeconds = Math.floor(currentTime % 60);
    if (progressSeconds < 10) {
        progressSeconds = "0" + progressSeconds;
    }
    musicStart.textContent = `${progressMinutes}:${progressSeconds}`;

    let durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
        durationSeconds = "0" + durationSeconds;
    }
    if (durationSeconds) {
        musicEnd.textContent = `${durationMinutes}:${durationSeconds}`;
    }
});

function displaySongDetails(index) {
    let song = songs[index];
    audioElement.src = song.songPath;
    masterSongTitle.textContent = song.songTitle;
    masterSongInfo.textContent = song.songInfo;
    masterCover.src = song.coverPath;
    progressBar.value = 0; // Reset the progress bar to zero
}

coverPlayBtns.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
        if (songIndex !== index) {
            songIndex = index;
            displaySongDetails(songIndex);
        }
        if (e.target.classList.contains("fa-circle-play")) {
            e.target.classList.remove("fa-circle-play");
            e.target.classList.add("fa-circle-pause");
            masterPlay.classList.remove("fa-circle-play");
            masterPlay.classList.add("fa-circle-pause");
            audioElement.play();
        } else {
            e.target.classList.add("fa-circle-play");
            e.target.classList.remove("fa-circle-pause");
            masterPlay.classList.add("fa-circle-play");
            masterPlay.classList.remove("fa-circle-pause");
            audioElement.pause();
        }
    });
});

// Automatic play next song when one song finshed playing

audioElement.addEventListener("ended", () => {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    audioElement.src = songs[songIndex].songPath;
    masterSongTitle.innerText = songs[songIndex].songTitle;
    masterSongInfo.innerText = songs[songIndex].songInfo;
    masterCover.src = songs[songIndex].coverPath;
    audioElement.play();
});

// Next song event listener

document.getElementById('next').addEventListener('click', () => {
    progressBar.value = 0;
    if (songIndex >= 17) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].songPath;
    masterSongTitle.innerText = songs[songIndex].songTitle;
    masterSongInfo.innerText = songs[songIndex].songInfo;
    masterCover.src = songs[songIndex].coverPath;
    audioElement.currentTime = 0;
    audioElement.play();
})

// Previous song event listener

document.getElementById('previous').addEventListener('click', () => {
    progressBar.value = 0;
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].songPath;
    masterSongTitle.innerText = songs[songIndex].songTitle;
    masterSongInfo.innerText = songs[songIndex].songInfo;
    masterCover.src = songs[songIndex].coverPath;
    audioElement.currentTime = 0;
    audioElement.play();
})

// Repeat mode enable

const musicRepeat = document.getElementById("repeatMode")

function progressBarReset() {
    progressBar.value = 0;
}

musicRepeat.addEventListener("click", () => {
    if (musicRepeat.classList.contains("fa-repeat")) {
        musicRepeat.classList.add("fa-arrow-rotate-right");
        musicRepeat.classList.remove("fa-repeat");
        audioElement.loop = true;
        musicRepeat.style.color = "#26cc5a"
    }
    else {
        musicRepeat.classList.add("fa-repeat");
        musicRepeat.classList.remove("fa-arrow-rotate-right");
        audioElement.loop = false;
        musicRepeat.style.color = "#9f9b9b"
    }
});

// Changing shuffle icon

let shuffleMusic = document.getElementById("shuffleMusic")

shuffleMusic.addEventListener("click", () => {
    if (shuffleMusic.classList.contains("fa-shuffle")) {
        shuffleMusic.classList.add("fa-icons");
        shuffleMusic.classList.remove("fa-shuffle");
        shuffleMusic.style.color = "#26cc5a"
    }
    else {
        shuffleMusic.classList.remove("fa-icons");
        shuffleMusic.classList.add("fa-shuffle");
        shuffleMusic.style.color = "#9f9b9b"
    }
})
// enable shuffle song
audioElement.addEventListener("ended", () => {
    if (shuffleMusic.classList.contains("fa-icons")) {
        songIndex = Math.floor(Math.random() * songs.length);
    }
    audioElement.src = songs[songIndex].songPath;
    masterSongTitle.innerText = songs[songIndex].songTitle;
    masterSongInfo.innerText = songs[songIndex].songInfo;
    masterCover.src = songs[songIndex].coverPath;
    audioElement.play();
})

// Dropdown
let dropdown = document.querySelector(".dropdown");
let dropdownInner = document.querySelector(".dropdown-inner");
let dropdownIcon = document.querySelector(".fa-caret-down");

dropdown.onclick = () => {
    if (dropdownInner.style.display === "block") {
        dropdownInner.style.display = "none";
        dropdownIcon.classList.remove("fa-caret-up")
        dropdownIcon.classList.add("fa-caret-down")
    }
    else {
        dropdownInner.style.display = "block";
        dropdownIcon.classList.add("fa-caret-up")
        dropdownIcon.classList.remove("fa-caret-down")
        window.onscroll = () => {
            if (dropdownInner.style.display === 'block') {
                window.scrollTo(0, 0);
            }
        }
    }
}

// Log Out
let logOut = document.querySelector("#log-out");
logOut.onclick = () => {
    window.open("../login/index.html", "_self");
}

// follow button

let followBtn = document.getElementById("follow-btn");
followBtn.onclick = () => {
    window.open("https://www.instagram.com/deepak__chaudhary/");
}

// Footer Heart Icon Color Change

const footerHeartIcon = document.querySelector(".fa-heart");

footerHeartIcon.onclick = () => {
    if (footerHeartIcon.classList.contains("fa-regular")) {
        footerHeartIcon.classList.add("fa-solid");
        footerHeartIcon.classList.remove("fa-regular");
        footerHeartIcon.style.color = "#26cc5a"
    } else {
        footerHeartIcon.classList.add("fa-regular");
        footerHeartIcon.classList.remove("fa-solid");
        footerHeartIcon.style.color = "#b7b1b1"
    }
}


// Volume Increase Decrease

const volumeRange = document.querySelector('.volume-seekbar');
volumeRange.onchange = () => {
    audioElement.volume = volumeRange.value / 100;
}

// Volume Icon & Mute/Unmute music

const repeatMode = document.querySelector(".fa-volume-high");

repeatMode.addEventListener("click", () => {
    if (repeatMode.classList.contains("fa-volume-high")) {
        repeatMode.classList.add("fa-volume-xmark");
        repeatMode.classList.remove("fa-volume-high");
        audioElement.muted = true; // Mute the audio
    } else {
        repeatMode.classList.add("fa-volume-high");
        repeatMode.classList.remove("fa-volume-xmark");
        audioElement.muted = false; // Unmute the audio
    }
})

// Mute and Unmute message on hover 

const mute = document.querySelector(".mute");

repeatMode.onclick = () => {
    if (mute.textContent === "Mute") {
        mute.textContent = "Unmute";
        mute.style.display = "block"

    } else {
        mute.textContent = "Mute";
        mute.style.display = "block"
    }
}

// Showing mute unmute pop up on hover
repeatMode.addEventListener("mouseover", () => {
    mute.style.display = "block";
});

// Hiding mute unmute pop up on mouseout
repeatMode.addEventListener("mouseout", () => {
    setTimeout(function () {
        mute.style.display = "none";
    }, 0.01 * 1000);
});

// Search
sideBarSearch.onclick = () => {
    if (headerSearchDiv.style.visibility === "visible") {
        headerSearchDiv.style.visibility = "hidden";
    }
    else {
        headerSearchDiv.style.visibility = "visible";
    }
}

