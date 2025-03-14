class DoorMachine {
  constructor() {
    this.state = "Terkunci";
    this.displayState();
  }

  displayState() {
    if (this.state === "Terkunci") {
      console.log("Pintu terkunci");
    } else if (this.state === "Terbuka") {
      console.log("Pintu tidak terkunci");
    }
  }

  kunciPintu() {
    if (this.state === "Terbuka") {
      this.state = "Terkunci";
      this.displayState();
    } else {
      console.log("Pintu sudah terkunci!");
    }
  }

  bukaPintu() {
    if (this.state === "Terkunci") {
      this.state = "Terbuka";
      this.displayState();
    } else {
      console.log("Pintu sudah terbuka!");
    }
  }
}

const pintu = new DoorMachine();
pintu.bukaPintu();
pintu.kunciPintu();
pintu.kunciPintu();
pintu.bukaPintu();
pintu.bukaPintu();
pintu.kunciPintu();
