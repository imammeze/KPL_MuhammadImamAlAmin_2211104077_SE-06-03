class SayaTubeVideo {
  constructor(title) {
    if (!title || typeof title !== "string" || title.length > 100) {
      throw new Error(
        "Judul video harus berupa string dan maksimal 100 karakter."
      );
    }
    this.id = Math.floor(10000 + Math.random() * 90000); // ID acak 5 digit
    this.title = title;
    this.playCount = 0;
  }

  IncreasePlayCount(count) {
    if (typeof count !== "number" || count <= 0) {
      throw new Error("Jumlah play count harus berupa angka positif.");
    }
    if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
      throw new Error("Play count melebihi batas maksimum.");
    }
    this.playCount += count;
  }

  PrintVideoDetails() {
    console.log("=== Video Details ===");
    console.log(`ID: ${this.id}`);
    console.log(`Title: ${this.title}`);
    console.log(`Play Count: ${this.playCount}`);
    console.log("=====================");
  }
}

// Contoh penggunaan
try {
  let tutorialVideo = new SayaTubeVideo(
    "Tutorial Design By Contract - Muhammad Imam Al Amin"
  );
  tutorialVideo.IncreasePlayCount(10);
  tutorialVideo.PrintVideoDetails();
} catch (error) {
  console.error("Error:", error.message);
}
