class SayaTubeVideo {
  constructor(videoTitle) {
    if (!videoTitle || typeof videoTitle !== "string") {
      throw new Error("Judul video harus berupa string.");
    }

    if (videoTitle.length > 100) {
      throw new Error("Judul video tidak boleh lebih dari 100 karakter.");
    }

    this.id = this.#generateRandomId();
    this.title = videoTitle;
    this.playCount = 0;
  }

  // Method private untuk menghasilkan ID acak
  #generateRandomId() {
    return Math.floor(10000 + Math.random() * 90000);
  }

  // Menambah jumlah play count secara aman
  increasePlayCount(count) {
    const MAX_INCREMENT = 10000000;

    if (typeof count !== "number" || count <= 0 || count > MAX_INCREMENT) {
      throw new Error(
        "Jumlah play count harus berupa angka positif dan maksimal 10.000.000 per panggilan."
      );
    }

    if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
      console.error("Error: Play count melebihi batas maksimum.");
      return;
    }

    this.playCount += count;
  }

  // Menampilkan detail video
  printVideoDetails() {
    console.log("=== Video Details ===");
    console.log(`ID: ${this.id}`);
    console.log(`Title: ${this.title}`);
    console.log(`Play Count: ${this.playCount}`);
    console.log("=====================");
  }
}

// Pengujian penggunaan kelas SayaTubeVideo
try {
  const tutorialVideo = new SayaTubeVideo(
    "Tutorial Design By Contract - Muhammad Imam Al Amin"
  );

  // Normal usage
  tutorialVideo.increasePlayCount(5_000_000);
  tutorialVideo.printVideoDetails();

  // Max increment
  tutorialVideo.increasePlayCount(10_000_000);
  tutorialVideo.printVideoDetails();

  // Simulasi overflow (akan dihentikan oleh validasi)
  for (let i = 0; i < 1000; i++) {
    tutorialVideo.increasePlayCount(10_000_000);
  }
} catch (error) {
  console.error("Error:", error.message);
}
