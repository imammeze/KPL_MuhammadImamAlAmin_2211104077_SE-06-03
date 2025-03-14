class KodeBuah {
    constructor() {
        this.dataKodeBuah = {
            Apel: "A00",
            Aprikot: "B00",
            Alpukat: "C00",
            Pisang: "D00",
            Paprika: "E00",
            Blackberry: "F00",
            Ceri: "H00",
            Kelapa: "I00",
            Jagung: "J00",
            Kurma: "K00",
            Durian: "L00",
            Anggur: "M00",
            Melon: "N00",
            Semangka: "O00",
        };
    }

    getKodeBuah(namaBuah) {
        return this.dataKodeBuah[namaBuah] || "Kode buah tidak ditemukan";
    }
}

const kodeBuah = new KodeBuah();
const buah1 = "Pisang";
const buah2 = "Durian";
console.log(`Kode Buah ${buah1}: ${kodeBuah.getKodeBuah(buah1)}`);
console.log(`Kode Buah ${buah2}: ${kodeBuah.getKodeBuah(buah2)}`);
