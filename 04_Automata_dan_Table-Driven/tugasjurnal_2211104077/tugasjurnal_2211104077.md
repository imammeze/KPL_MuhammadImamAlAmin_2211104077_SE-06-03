# Tugas Jurnal

## Membuat kode dengan teknik Table Driven

Source Code :

```
class KodeBuah {
    constructor() {
        this.dataKodeBuah = {
            Apel: "A00",
            Aprikot: "B00",
            Alpukat: "C00",
            Pisang: "D00",
            Paprika: "E00",
            Blackberry: "F00",
            Ceri: "H00",
            Kelapa: "I00",
            Jagung: "J00",
            Kurma: "K00",
            Durian: "L00",
            Anggur: "M00",
            Melon: "N00",
            Semangka: "O00",
        };
    }

    getKodeBuah(namaBuah) {
        return this.dataKodeBuah[namaBuah] || "Kode buah tidak ditemukan";
    }
}

const kodeBuah = new KodeBuah();
const buah1 = "Pisang";
const buah2 = "Durian";
console.log(`Kode Buah ${buah1}: ${kodeBuah.getKodeBuah(buah1)}`);
console.log(`Kode Buah ${buah2}: ${kodeBuah.getKodeBuah(buah2)}`);

```

Penjelasan :

Kode di atas menggunakan Table-Driven dengan menyimpan data dalam bentuk objek. Method getKodeBuah akan mengembalikan kode buah berdasarkan nama buah yang diberikan. Jika nama buah tidak ditemukan, maka akan menampilkan pesan "Kode buah tidak ditemukan".

Output :

![Image](https://github.com/user-attachments/assets/b8f29614-a56e-4db6-833e-250fe6418166)

## Membuat kode dengan teknik State-Based Construction

Source Code :

```
class PosisiKarakterGame {
  constructor(nim) {
    this.state = "Berdiri";
    this.nim = nim;
    this.checkSpecialOutput();
  }

  checkSpecialOutput() {
    if (this.nim % 3 === 1) {
      if (this.state === "Berdiri") console.log("Posisi standby");
      if (this.state === "Tengkurap") console.log("Posisi istirahat");
    }
    if (this.nim % 3 === 2) {
      if (this.prevState === "Terbang" && this.state === "Jongkok")
        console.log("Posisi landing");
      if (this.prevState === "Berdiri" && this.state === "Terbang")
        console.log("Posisi take off");
    }
  }

  ubahState(stateBaru) {
    this.prevState = this.state;
    this.state = stateBaru;
    console.log(`State berubah menjadi: ${this.state}`);
    this.checkSpecialOutput();
  }

  tekanTombol(tombol) {
    if (this.nim % 3 === 0) {
      if (tombol === "TombolS") console.log("Tombol arah bawah ditekan");
      if (tombol === "TombolW") console.log("Tombol arah atas ditekan");
    }

    switch (this.state) {
      case "Berdiri":
        if (tombol === "TombolS") this.ubahState("Jongkok");
        if (tombol === "TombolW") this.ubahState("Terbang");
        break;
      case "Jongkok":
        if (tombol === "TombolS") this.ubahState("Tengkurap");
        if (tombol === "TombolW") this.ubahState("Berdiri");
        break;
      case "Tengkurap":
        if (tombol === "TombolW") this.ubahState("Jongkok");
        if (tombol === "TombolX") this.ubahState("Terbang");
        break;
      case "Terbang":
        if (tombol === "TombolS") this.ubahState("Berdiri");
        if (tombol === "TombolW") this.ubahState("Jongkok");
        break;
    }
  }
}

const nim = 2211104077;
const karakter = new PosisiKarakterGame(nim);
karakter.tekanTombol("TombolS");
karakter.tekanTombol("TombolS");
karakter.tekanTombol("TombolX");
karakter.tekanTombol("TombolS");
karakter.tekanTombol("TombolW");
karakter.tekanTombol("TombolW");

```

Penjelasan :

Kode program di atas merupakan implementasi State-Based Construction untuk mengubah posisi karakter dalam sebuah game berdasarkan input tombol, dengan mempertimbangkan aturan tambahan yang bergantung pada hasil NIM % 3.

### 1. Class PosisiKarakterGame

Class ini digunakan untuk Menyimpan state awal (Berdiri) dan NIM, serta memeriksa apakah ada output tambahan berdasarkan NIM % 3.

### 2. Method ubahState(stateBaru)

Method ini digunakan untuk Mengubah state karakter sesuai dengan aturan diagram dan menampilkan pesan tambahan jika NIM % 3 memenuhi kondisi tertentu (misalnya "Posisi landing", "Posisi take off").

### 3. Method tekanTombol(tombol)

Method ini digunakan untuk memeriksa tombol yang ditekan (TombolS, TombolW, TombolX) dan menyesuaikan state karakter sesuai dengan diagram transisi. Jika NIM % 3 == 0, akan mencetak pesan tambahan saat tombol ditekan.

Output :

![Image](https://github.com/user-attachments/assets/42367a38-4f40-4b86-ac1e-93f0763d2ba3)
