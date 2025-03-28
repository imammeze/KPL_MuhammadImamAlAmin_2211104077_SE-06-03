# Tugas Jurnal Modul 6

- Nama : Muhammad Imam Al Amin
- NIM : 2211104077
- Kelas : SE-06-03

## Membuat class SayaTubeVideo dan SayaTubeUser

Source Code :

```
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


```

Penjelasan :

Kode ini membuat dua kelas, SayaTubeVideo dan SayaTubeUser, untuk mengelola video dan pengguna dalam sebuah platform sederhana. SayaTubeVideo menyimpan informasi tentang video, termasuk ID unik (5 digit acak), judul (maksimal 100 karakter), dan jumlah pemutaran yang dimulai dari 0. Metode IncreasePlayCount() membatasi penambahan play count maksimal 10.000.000 per panggilan dan mencegah overflow. SayaTubeUser menyimpan daftar video yang diunggah oleh pengguna dengan validasi agar hanya objek SayaTubeVideo yang dapat ditambahkan. Metode PrintAllVideoPlaycount() mencetak daftar video beserta judulnya. Dalam implementasi, seorang pengguna bernama "Imam" membuat 10 video review film dan menambahkannya ke daftar, lalu setiap video diberikan play count secara acak sebelum semua video dicetak ke layar.

Output :

![Image](https://github.com/user-attachments/assets/987f2d06-df2a-40f5-a542-278dbebd340e)

## Menambahkan Implementasi Design By Contract

Source Code :

```
class SayaTubeVideo {
  constructor(title) {
    if (!title || typeof title !== "string" || title.length > 200) {
      throw new Error(
        "Judul video harus berupa string dengan maksimal 200 karakter dan tidak boleh null."
      );
    }
    this.id = Math.floor(10000 + Math.random() * 90000); // ID acak 5 digit
    this.title = title;
    this.playCount = 0;
  }

  IncreasePlayCount(count) {
    if (typeof count !== "number" || count <= 0 || count > 25000000) {
      throw new Error(
        "Jumlah play count harus berupa angka positif dan maksimal 25.000.000 per panggilan."
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
        "Username harus berupa string dengan maksimal 100 karakter dan tidak boleh null."
      );
    }
    this.id = Math.floor(10000 + Math.random() * 90000);
    this.username = username;
    this.uploadedVideos = [];
  }

  AddVideo(video) {
    if (!(video instanceof SayaTubeVideo)) {
      throw new Error(
        "Hanya objek SayaTubeVideo yang dapat ditambahkan dan tidak boleh null."
      );
    }
    if (video.playCount > Number.MAX_SAFE_INTEGER) {
      throw new Error(
        "Video yang ditambahkan harus memiliki playCount di bawah batas maksimum integer."
      );
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
    this.uploadedVideos.slice(0, 8).forEach((video, index) => {
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
  try {
    const video = new SayaTubeVideo(title);
    user.AddVideo(video);
    try {
      video.IncreasePlayCount(Math.floor(Math.random() * 25000000));
    } catch (error) {
      console.error(`Error saat menambah play count: ${error.message}`);
    }
  } catch (error) {
    console.error(`Error saat menambahkan video: ${error.message}`);
  }
});

user.PrintAllVideoPlaycount();


```

Penjelasan :

Kode ini membuat dua kelas, SayaTubeVideo dan SayaTubeUser, yang digunakan untuk mengelola video dan pengguna di platform sederhana. SayaTubeVideo menyimpan informasi tentang video, termasuk ID unik (5 digit acak), judul (maksimal 200 karakter), dan jumlah pemutaran (play count). Metode IncreasePlayCount() memastikan jumlah penambahan play count tidak lebih dari 25.000.000 per panggilan dan tidak melebihi batas maksimum integer. SayaTubeUser menyimpan daftar video yang diunggah oleh pengguna dengan validasi agar hanya objek SayaTubeVideo yang dapat ditambahkan. Metode PrintAllVideoPlaycount() membatasi tampilan maksimal 8 video untuk menjaga keterbacaan output. Kode juga menggunakan try-catch untuk menangani error tanpa menghentikan program, memastikan stabilitas meskipun terjadi kesalahan input atau overflow play count.

Output :

![Image](https://github.com/user-attachments/assets/f9ea8fe0-d62c-4160-b5ec-5a54b3b603a0)
