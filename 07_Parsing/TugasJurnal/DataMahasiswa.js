const fs = require("fs");

class DataMahasiswa_2211104077 {
  ReadJSON() {
    try {
      const data = fs.readFileSync("jurnal7_1_2211104077.json", "utf-8");
      const obj = JSON.parse(data);

      console.log("===== DATA MAHASISWA =====");
      console.log(`Nama      : ${obj.firstName} ${obj.lastName}`);
      console.log(`Jenis Kelamin : ${obj.gender}`);
      console.log(`Umur      : ${obj.age}`);
      console.log("Alamat    :");
      console.log(`  Jalan   : ${obj.address.streetAddress}`);
      console.log(`  Kota    : ${obj.address.city}`);
      console.log(`  Provinsi: ${obj.address.state}`);
      console.log("\nMata Kuliah yang Diambil:");
      obj.courses.forEach((course, index) => {
        console.log(`  MK ${index + 1}: ${course.code} - ${course.name}`);
      });
    } catch (error) {
      console.error(
        "Terjadi kesalahan saat membaca atau memproses file JSON:",
        error.message
      );
    }
  }
}

const mahasiswa = new DataMahasiswa_2211104077();
mahasiswa.ReadJSON();
