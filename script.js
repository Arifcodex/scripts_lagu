const lyrics = [
    { time: 0, text: "Bahagiaa....." },
    { time: 5, text: "Meski beribu bintang terangi hati" },
    { time: 10, text: "Hanya kamu yang selalu ku nanti" },
    { time: 14, text: "Tanpa dirimu tiada berari" },
    { time: 18, text: "Kau takkan terganti.." },
    { time: 24, text: "ooo.... woo..." },
    { time: 25, text: "Meski beribu bintang terangi hati" },
    { time: 30, text: "Hanya kamu yang selalu ku nanti" },
    { time: 34, text: "Tanpa dirimu tiada berari" },
    { time: 38, text: "Kau takkan terganti.." },
    { time: 41, text: "Meski dirimu entah di mana.." },
    { time: 46, text: "Dalam renunganku" },
    { time: 48, text: "Slalu Berdo'a.." },
    { time: 50, text: "Jaga dirimu slalu di sana" },
    { time: 54, text: "Dan bahagiaa..." },
    { time: 60, text: " ............ " },
];

const lyricsElement = document.getElementById('lyrics');
const audioElement = document.getElementById('audio');

let displayedLyrics = [];
let lastDisplayedText = '';

function updateLyrics() {
    const currentTime = audioElement.currentTime;
    let newLyrics = '';

    displayedLyrics = lyrics.filter(lyric => lyric.time <= currentTime);
    newLyrics = displayedLyrics.map(lyric => lyric.text).join('\n');

    if (newLyrics !== lastDisplayedText) {
        // Tambahkan kelas animasi
        lyricsElement.classList.add('fade');
        // Atur waktu animasi
        setTimeout(() => {
            lyricsElement.innerText = newLyrics;
            lyricsElement.classList.remove('fade');
        }, 300); // Sesuaikan durasi animasi dengan CSS
    }

    lastDisplayedText = newLyrics;
}

audioElement.addEventListener('timeupdate', updateLyrics);
