class PosisiKarakterGame {
  constructor(nim) {
    this.state = "Berdiri";
    this.nim = nim;
    this.checkSpecialOutput();
  }

  checkSpecialOutput() {
    if (this.nim % 3 === 1 && this.state === "Berdiri") {
      console.log("Posisi standby");
    }
  }

  ubahState(stateBaru) {
    if (
      this.state === "Terbang" &&
      stateBaru === "Jongkok" &&
      this.nim % 3 === 2
    ) {
      console.log("Posisi landing");
    }
    if (
      this.state === "Berdiri" &&
      stateBaru === "Terbang" &&
      this.nim % 3 === 2
    ) {
      console.log("Posisi take off");
    }
    if (
      this.state === "Berdiri" &&
      stateBaru === "Tengkurap" &&
      this.nim % 3 === 1
    ) {
      console.log("Posisi istirahat");
    }

    this.state = stateBaru;
    console.log(`State berubah menjadi: ${this.state}`);
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
