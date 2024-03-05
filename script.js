const emojis = [
    "😀",
    "😀",
    "🥵",
    "🥵",
    "💀",
    "💀",
    "🥰",
    "🥰",
    "🤑",
    "🤑",
    "😂",
    "😂",
    "😭",
    "😭",
    "👾",
    "👾",
];
var Rand_emojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = Rand_emojis[i];

    box.onclick = function () {
        this.classList.add("OpenBox");
        setTimeout(function () {
            if (document.querySelectorAll(".OpenBox").length > 1) {
                if (
                    document.querySelectorAll(".OpenBox")[0].innerHTML ==
                    document.querySelectorAll(".OpenBox")[1].innerHTML
                ) {
                    document.querySelectorAll(".OpenBox")[0].classList.add("boxMatch");
                    document.querySelectorAll(".OpenBox")[1].classList.add("boxMatch");
                    document.querySelectorAll(".OpenBox")[1].classList.remove("OpenBox");
                    document.querySelectorAll(".OpenBox")[0].classList.remove("OpenBox");

                    if (document.querySelectorAll(".boxMatch").length == emojis.length) {
                        Swal.fire({
                            title: "Good job!",
                            text: "You Won This Game!",
                            icon: "success"
                        });
                        stopTimer();
                    }
                } else {
                    document.querySelectorAll(".OpenBox")[1].classList.remove("OpenBox");
                    document.querySelectorAll(".OpenBox")[0].classList.remove("OpenBox");
                    document.querySelectorAll(".item.OpenBox")[1].classList.toggle("shake");
                    document.querySelectorAll(".item.OpenBox")[0].classList.toggle("shake");
                }
            }
        }, 500);
    };
    document.querySelector(".game").appendChild(box);
}


const audio = document.getElementById("audio");
const MuteBtn = document.getElementById("music");

MuteBtn.addEventListener("click", () => {
    if (audio.muted) {
        audio.muted = false;
    } else {
        audio.muted = true;
    }
});

// const musicList = [
//     "./Audio/All Day.m4a",
//     "./Audio/Inna - J'Adore.mp3",
//     "./Audio/AVH - GBB23 Round 2_On and On.m4a",
// ];

// const playButton = document.getElementById("playButton");
// playButton.addEventListener("click", () => {
//     // Shuffle the music list using the Fisher-Yates algorithm
//     for (let i = musicList.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [musicList[i], musicList[j]] = [musicList[j], musicList[i]];
//     }

//     // Set the random audio source
//     audio.src = musicList[0];

//     // Start playback
//     audio.play();
// });

// Constants
const GAME_DURATION = 60; // Seconds

// Variables
let timerSeconds = GAME_DURATION;
let timerInterval;

// Start timer function
function startTimer() {
    timerInterval = setInterval(() => {
        if (timerSeconds === 0) {
            // Time's up!
            clearInterval(timerInterval);
            Swal.fire({
                icon: "error",
                title: "Time Out...",
                text: "Try Again!",
            });

            // Implement your logic for handling the end of the game here
        } else {
            timerSeconds--;
            updateTimerDisplay();
        }
    }, 1000); // Update timer every second
}

// Update timer display function
function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    const formattedSeconds = seconds.toString().padStart(2, "0");
    const timerElement = document.getElementById("timer");
    timerElement.textContent = `${minutes}:${formattedSeconds}`;
}

// Function to stop the timer (if needed)
function stopTimer() {
    clearInterval(timerInterval);
}

// Call startTimer() when the game starts
startTimer();
