class SayaTubeVideo {
  constructor(title) {
    if (!title || typeof title !== "string" || title.length > 100) {
      throw new Error(
        "Judul video harus berupa string dengan maksimal 100 karakter."
      );
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

class SayaTubeUser {
  constructor(username) {
    if (!username || typeof username !== "string" || username.length > 100) {
      throw new Error(
        "Username harus berupa string dengan maksimal 100 karakter."
      );
    }
    this.id = Math.floor(10000 + Math.random() * 90000);
    this.username = username;
    this.uploadedVideos = [];
  }

  AddVideo(video) {
    if (!(video instanceof SayaTubeVideo)) {
      throw new Error("Hanya objek SayaTubeVideo yang dapat ditambahkan.");
    }
    this.uploadedVideos.push(video);
  }

  GetTotalVideoPlayCount() {
    return this.uploadedVideos.reduce(
      (total, video) => total + video.playCount,
      0
    );
  }

  PrintAllVideoPlaycount() {
    console.log(`User: ${this.username}`);
    this.uploadedVideos.forEach((video, index) => {
      console.log(`Video ${index + 1} judul: ${video.title}`);
    });
  }
}

const user = new SayaTubeUser("Imam");
const videoTitles = [
  "Review Film Interstellar oleh Muhammad Imam Al Amin",
  "Review Film Inception oleh Muhammad Imam Al Amin",
  "Review Film The Dark Knight oleh Muhammad Imam Al Amin",
  "Review Film Parasite oleh Muhammad Imam Al Amin",
  "Review Film Whiplash oleh Muhammad Imam Al Amin",
  "Review Film The Social Network oleh Muhammad Imam Al Amin",
  "Review Film Fight Club oleh Muhammad Imam Al Amin",
  "Review Film The Matrix oleh Muhammad Imam Al Amin",
  "Review Film La La Land oleh Muhammad Imam Al Amin",
  "Review Film Blade Runner 2049 oleh Muhammad Imam Al Amin",
];

videoTitles.forEach((title) => {
  const video = new SayaTubeVideo(title);
  user.AddVideo(video);
  video.IncreasePlayCount(Math.floor(Math.random() * 10000000)); 
});

user.PrintAllVideoPlaycount();
