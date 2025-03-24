# Tugas Jurnal Modul 5

- Nama : Muhammad Imam Al Amin
- NIM : 2211104077
- Kelas : SE-06-03

## Membuat kode dengan Method Generic

Source Code :

```
class Penjumlahan {
  static JumlahTigaAngka(a, b, c) {
    let hasil = Number(a) + Number(b) + Number(c);
    return hasil;
  }
}

const nim = "2211104077";
const angka1 = parseInt(nim.substring(0, 2)); // "22"
const angka2 = parseInt(nim.substring(2, 4)); // "11"
const angka3 = parseInt(nim.substring(4, 6)); // "10"

const digitTerakhir = parseInt(nim[nim.length - 1]);
let input1, input2, input3;

if (digitTerakhir === 1 || digitTerakhir === 2) {
  input1 = parseFloat(angka1);
  input2 = parseFloat(angka2);
  input3 = parseFloat(angka3);
} else if (digitTerakhir === 3 || digitTerakhir === 4 || digitTerakhir === 5) {
  input1 = Number(angka1);
  input2 = Number(angka2);
  input3 = Number(angka3);
} else if (digitTerakhir === 6 || digitTerakhir === 7 || digitTerakhir === 8) {
  input1 = parseInt(angka1);
  input2 = parseInt(angka2);
  input3 = parseInt(angka3);
} else {
  input1 = BigInt(angka1);
  input2 = BigInt(angka2);
  input3 = BigInt(angka3);
}

const hasil = Penjumlahan.JumlahTigaAngka(input1, input2, input3);
console.log(`Hasil penjumlahan adalah: ${hasil}`);

```

Penjelasan :

Kode di atas mendefinisikan kelas Penjumlahan yang memiliki metode JumlahTigaAngka() untuk menjumlahkan tiga angka. Program mengambil tiga bagian angka dari NIM, yaitu dua digit pertama, kedua, dan ketiga. Kemudian, program menentukan tipe data yang sesuai berdasarkan digit terakhir NIM, apakah berupa float, number (double), int, atau BigInt (long). Setelah itu, ketiga angka dijumlahkan menggunakan metode JumlahTigaAngka() dan hasilnya ditampilkan di console.

Output :

![Image](https://github.com/user-attachments/assets/c067593a-b2da-423f-b7b3-653a722869f3)

## Membuat kode dengan Method Generic

Source Code :

```
class SimpleDataBase {
  constructor() {
    this.storedData = [];
    this.inputDates = [];
  }

  AddNewData(data) {
    this.storedData.push(data);
    this.inputDates.push(new Date().toUTCString());
  }

  PrintAllData() {
    this.storedData.forEach((data, index) => {
      console.log(
        `Data ${index + 1} berisi: ${data}, yang disimpan pada waktu UTC: ${
          this.inputDates[index]
        }`
      );
    });
  }
}

const nim = "2211104077";
const angka1 = parseInt(nim.substring(0, 2)); // "22"
const angka2 = parseInt(nim.substring(2, 4)); // "11"
const angka3 = parseInt(nim.substring(4, 6)); // "10"

const database = new SimpleDataBase();
database.AddNewData(angka1);
database.AddNewData(angka2);
database.AddNewData(angka3);

database.PrintAllData();

```

Penjelasan :

Kode di atas membuat kelas SimpleDataBase yang berfungsi sebagai penyimpanan data dengan dua properti utama: storedData untuk menyimpan data dan inputDates untuk mencatat waktu penyimpanannya. Metode AddNewData() digunakan untuk menambahkan data baru ke dalam storedData dan mencatat waktu penyimpanannya dalam format UTC di inputDates. Metode PrintAllData() mencetak semua data yang telah disimpan beserta waktu penyimpanannya. Program ini kemudian mengambil tiga angka dari NIM, menambahkannya ke dalam database, dan mencetak hasilnya ke konsol.

Output :

![Image](https://github.com/user-attachments/assets/8d05b62a-6a8a-4026-aa89-59ce41be0a5e)
