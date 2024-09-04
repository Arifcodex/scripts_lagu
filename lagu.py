import pygame
import time

# Inisialisasi mixer pygame
pygame.mixer.init()

# Memuat file musik
pygame.mixer.music.load("beribubintang.MPEG")  # Ganti dengan path lagu Anda

lyrics = [
    (0, "Bahagiaa....."),
    (5, "Meski beribu bintang terangi hati"),
    (10, "Hanya kamu yang selalu ku nanti"),
    (14, "Tanpa dirimu tiada berari"),
    (18, "Kau takkan terganti.."),
    (24, "ooo.... woo..."),
    (25, "Meski beribu bintang terangi hati"),
    (30, "Hanya kamu yang selalu ku nanti"),
    (34, "Tanpa dirimu tiada berari"),
    (38, "Kau takkan terganti.."),
    (42, "Meski dirimu entah di mana.."),
    (46, "Dalam renunganku"),
    (48, "Slalu Berdo'a.."),
    (51, "Jaga dirimu slalu di sana"),
    (54, "Dan bahagiaa..."),
    (60, " ............ "),
]

# Memutar musik
pygame.mixer.music.play()

# Memberi tahu pengguna bahwa musik sedang diputar
print("Playing '(515) Arvian Dwi - Bintang Yang Hilang'...")

# Menampilkan lirik sesuai waktu
start_time = time.time()
for timestamp, line in lyrics:
    while time.time() - start_time < timestamp:
        time.sleep(0.1)
    print(line)

# Menunggu hingga musik selesai
while pygame.mixer.music.get_busy():
    continue

print("Music finished playing.")