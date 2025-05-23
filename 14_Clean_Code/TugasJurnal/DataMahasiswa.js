const fs = require("fs");

class DataMahasiswa {
  // Method untuk membaca dan menampilkan data dari file JSON
  readJsonFile() {
    try {
      const filePath = "tp7_1_2211104077.json";
      const fileContent = fs.readFileSync(filePath, "utf-8");

      const data = JSON.parse(fileContent);

      const fullName = `${data.nama.depan} ${data.nama.belakang}`;
      const nim = data.nim;
      const fakultas = data.fakultas;

      console.log(
        `Nama ${fullName} dengan NIM ${nim} dari fakultas ${fakultas}`
      );
    } catch (error) {
      console.error(
        "Terjadi kesalahan saat membaca atau memproses file JSON:",
        error.message
      );
    }
  }
}

// Membuat instance dan memanggil method
const mahasiswa = new DataMahasiswa();
mahasiswa.readJsonFile();
