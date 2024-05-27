// Audio
const audio = document.getElementById("myAudio");

// Fungsi untuk mengulang audio setelah selesai diputar
function autoReplay() {
    audio.currentTime = 0; // Mengatur waktu pemutaran ulang ke awal
    audio.play();
}

// Mendengarkan peristiwa 'ended' pada audio
audio.addEventListener("ended", autoReplay);