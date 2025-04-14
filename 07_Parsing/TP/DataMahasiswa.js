const fs = require("fs");

class DataMahasiswa_2211104077 {
  readJSON() {
    try {
      const data = fs.readFileSync("tp7_1_2211104077.json", "utf-8");

      const obj = JSON.parse(data);

      const namaLengkap = `${obj.nama.depan} ${obj.nama.belakang}`;
      console.log(
        `Nama ${namaLengkap} dengan nim ${obj.nim} dari fakultas ${obj.fakultas}`
      );
    } catch (error) {
      console.error(
        "Terjadi kesalahan saat membaca atau memproses file JSON:",
        error.message
      );
    }
  }
}

const mahasiswa = new DataMahasiswa_2211104077();
mahasiswa.readJSON();
