class SayaTubeVideo {
  constructor(title) {
    if (!title || typeof title !== "string") {
      throw new Error("Judul video harus berupa string.");
    }
    if (title.length > 100) {
      throw new Error("Judul video tidak boleh lebih dari 100 karakter.");
    }
    this.id = Math.floor(10000 + Math.random() * 90000); // ID acak 5 digit
    this.title = title;
    this.playCount = 0;
  }

  IncreasePlayCount(count) {
    if (typeof count !== "number" || count <= 0 || count > 10000000) {
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

  PrintVideoDetails() {
    console.log("=== Video Details ===");
    console.log(`ID: ${this.id}`);
    console.log(`Title: ${this.title}`);
    console.log(`Play Count: ${this.playCount}`);
    console.log("=====================");
  }
}

// Contoh pengujian prekondisi dan exception
try {
  let tutorialVideo = new SayaTubeVideo(
    "Tutorial Design By Contract - Muhammad Imam Al Amin"
  );

  // Pengujian batas normal
  tutorialVideo.IncreasePlayCount(5000000);
  tutorialVideo.PrintVideoDetails();

  // Pengujian batas maksimal per panggilan
  tutorialVideo.IncreasePlayCount(10000000);
  tutorialVideo.PrintVideoDetails();

  // Pengujian overflow menggunakan loop
  for (let i = 0; i < 1000; i++) {
    tutorialVideo.IncreasePlayCount(10000000);
  }
} catch (error) {
  console.error("Error: ", error.message);
}
