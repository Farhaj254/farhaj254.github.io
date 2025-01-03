let likeCount = 0;
let dislikeCount = 0;
let isLiked = false;
let isDisliked = false;

function loadGame(gameTitle, gameUrl) {
    const iframe = document.querySelector("iframe");
    const gameTitleElement = document.getElementById("game-title");
    gameTitleElement.textContent = gameTitle;
    iframe.src = gameUrl;
}

function toggleLike() {
    const likeButton = document.getElementById("like-button");
    const dislikeButton = document.getElementById("dislike-button");
    if (isLiked) {
        likeButton.style.backgroundColor = '#333';
        likeCount--;
        isLiked = false;
    } else {
        likeButton.style.backgroundColor = '#00FF00';
        likeCount++;
        isLiked = true;
        if (isDisliked) {
            dislikeButton.style.backgroundColor = '#333';
            dislikeCount--;
            isDisliked = false;
        }
    }
    updateButtonCounts();
}

function toggleDislike() {
    const likeButton = document.getElementById("like-button");
    const dislikeButton = document.getElementById("dislike-button");
    if (isDisliked) {
        dislikeButton.style.backgroundColor = '#333';
        dislikeCount--;
        isDisliked = false;
    } else {
        dislikeButton.style.backgroundColor = '#FF0000';
        dislikeCount++;
        isDisliked = true;
        if (isLiked) {
            likeButton.style.backgroundColor = '#333';
            likeCount--;
            isLiked = false;
        }
    }
    updateButtonCounts();
}

function updateButtonCounts() {
    document.getElementById("like-count").textContent = likeCount;
    document.getElementById("dislike-count").textContent = dislikeCount;
}

function toggleFullscreen() {
    const iframe = document.querySelector("iframe");
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
}
