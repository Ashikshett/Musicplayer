document.addEventListener('DOMContentLoaded', function () {
    const songs = [
        { title: 'Naa Ready (Leo)_64-(MastiNew).mp3', artist: 'Artist 1', audioUrl: 'Naa Ready (Leo)_64-(MastiNew).mp3' },
        { title: 'Song 2', artist: 'Artist 2', audioUrl: 'song2.mp3' },
        { title: 'Tu Hai To Mujhe Phir Aur Kya Chahiye_64(PagalWorld.com.se).mp3', artist: 'Artist 3', audioUrl: 'Tu Hai To Mujhe Phir Aur Kya Chahiye_64(PagalWorld.com.se).mp3' },
        // Add more songs as needed
    ];
    const audio = new Audio();
    let currentSongIndex = -1;

    // Function to toggle play/pause
    function togglePlayPause() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }

    // Function to update the active song
    function updateActiveSong() {
        const playlistItems = document.querySelectorAll('.playlist-item');

        // Remove the 'active-song' class from all playlist items
        playlistItems.forEach((item) => {
            item.classList.remove('active-song');
        });

        // Add the 'active-song' class to the currently playing song
        if (currentSongIndex >= 0 && currentSongIndex < songs.length) {
            playlistItems[currentSongIndex].classList.add('active-song');
        }
    }

    // Add event listener for the play/pause button
    const playPauseButton = document.getElementById('play-pause-btn');
    playPauseButton.addEventListener('click', () => {
        togglePlayPause();
        updateActiveSong();
    });

    // Add event listener for the previous button
    const prevButton = document.getElementById('prev-btn');
    prevButton.addEventListener('click', () => {
        if (currentSongIndex > 0) {
            currentSongIndex--;
            audio.src = songs[currentSongIndex].audioUrl;
            togglePlayPause();
            updateActiveSong();
        }
    });

    // Add event listener for the next button
    const nextButton = document.getElementById('next-btn');
    nextButton.addEventListener('click', () => {
        if (currentSongIndex < songs.length - 1) {
            currentSongIndex++;
            audio.src = songs[currentSongIndex].audioUrl;
            togglePlayPause();
            updateActiveSong();
        }
    });

    // Event listener for audio play
    audio.addEventListener('play', () => {
        updateActiveSong();
        // Update your UI or perform any actions when audio plays
    });

    // Event listener for audio pause
    audio.addEventListener('pause', () => {
        // Update your UI or perform any actions when audio pauses
    });

    // Initialize the audio source with the first song (if available)
    if (songs.length > 0) {
        audio.src = songs[0].audioUrl;
        currentSongIndex = 0;
        updateActiveSong();
    }
});
