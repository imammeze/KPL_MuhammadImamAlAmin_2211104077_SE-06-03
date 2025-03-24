class SimpleDataBase {
  constructor() {
    this.storedData = []; // List untuk menyimpan data generic
    this.inputDates = []; // List untuk menyimpan tanggal input
  }

  AddNewData(data) {
    this.storedData.push(data); // Tambahkan data ke dalam storedData
    this.inputDates.push(new Date().toUTCString()); // Simpan waktu input dalam format UTC
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

// Contoh penggunaan dengan dua-digit NIM
const nim = "2211104077";
const angka1 = parseInt(nim.substring(0, 2)); // "22"
const angka2 = parseInt(nim.substring(2, 4)); // "11"
const angka3 = parseInt(nim.substring(4, 6)); // "10"

const database = new SimpleDataBase();
database.AddNewData(angka1);
database.AddNewData(angka2);
database.AddNewData(angka3);

database.PrintAllData();
