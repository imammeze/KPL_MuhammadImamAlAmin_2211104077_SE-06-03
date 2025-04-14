const fs = require("fs");

class KuliahMahasiswa_2211104077 {
  ReadJSON() {
    try {
      const data = fs.readFileSync("tp7_2_2211104077.json", "utf-8");
      const obj = JSON.parse(data);

      console.log("Daftar mata kuliah yang diambil:");
      obj.courses.forEach((course, index) => {
        console.log(`MK ${index + 1} ${course.code} - ${course.name}`);
      });
    } catch (error) {
      console.error(
        "Terjadi kesalahan saat membaca atau memproses file JSON:",
        error.message
      );
    }
  }
}

const kuliah = new KuliahMahasiswa_2211104077();
kuliah.ReadJSON();
