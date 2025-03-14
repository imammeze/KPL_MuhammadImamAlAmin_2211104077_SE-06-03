class KodePos {
  constructor() {
    this.dataKodePos = {
      Batununggal: "40266",
      Kujangsari: "40287",
      Mengger: "40267",
      Wates: "40256",
      Cijaura: "40287",
      Jatisari: "40286",
      Margasari: "40286",
      Sekejati: "40286",
      Kebonwaru: "40272",
      Maleer: "40274",
      Samoja: "40273",
    };
  }

  getKodePos(kelurahan) {
    return this.dataKodePos[kelurahan] || "Kode Pos tidak ditemukan";
  }
}

const kodePos = new KodePos();
const kelurahan1 = "Jatisari";
const kelurahan2 = "Batununggal";
console.log(`Kode Pos ${kelurahan1}: ${kodePos.getKodePos(kelurahan1)}`);
console.log(`Kode Pos ${kelurahan2}: ${kodePos.getKodePos(kelurahan2)}`);
