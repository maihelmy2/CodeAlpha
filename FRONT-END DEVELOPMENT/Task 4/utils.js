document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playPauseButton = document.getElementById('play-pause');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const trackTitle = document.getElementById('track-title');
    const trackArtist = document.getElementById('track-artist');

    const tracks = [
        { title: 'Track 1', artist: 'Artist 1', src: 'path/to/your/song1.mp3' },
        { title: 'Track 2', artist: 'Artist 2', src: 'path/to/your/song2.mp3' },
        // Add more tracks as needed
    ];

    let currentTrackIndex = 0;

    function loadTrack(index) {
        audio.src = tracks[index].src;
        trackTitle.textContent = tracks[index].title;
        trackArtist.textContent = tracks[index].artist;
    }

    function playPauseTrack() {
        if (audio.paused) {
            audio.play();
            playPauseButton.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseButton.textContent = 'Play';
        }
    }

    function nextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        loadTrack(currentTrackIndex);
        audio.play();
        playPauseButton.textContent = 'Pause';
    }

    function prevTrack() {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        loadTrack(currentTrackIndex);
        audio.play();
        playPauseButton.textContent = 'Pause';
    }

    playPauseButton.addEventListener('click', playPauseTrack);
    nextButton.addEventListener('click', nextTrack);
    prevButton.addEventListener('click', prevTrack);

    // Load the first track initially
    loadTrack(currentTrackIndex);
});