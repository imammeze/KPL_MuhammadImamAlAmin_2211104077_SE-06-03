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
