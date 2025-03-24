class Penjumlahan {
  static JumlahTigaAngka(a, b, c) {
    let hasil = Number(a) + Number(b) + Number(c);
    return hasil;
  }
}

// Tentukan tiga angka dari NIM
const nim = "2211104077";
const angka1 = parseInt(nim.substring(0, 2)); // "22"
const angka2 = parseInt(nim.substring(2, 4)); // "11"
const angka3 = parseInt(nim.substring(4, 6)); // "10"

// Tentukan tipe data berdasarkan digit terakhir NIM
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

// Panggil method dan cetak hasil
const hasil = Penjumlahan.JumlahTigaAngka(input1, input2, input3);
console.log(`Hasil penjumlahan adalah: ${hasil}`);
