function CariTandaBilangan(a) {
  if (a < 0) return "Negatif";
  if (a > 0) return "Positif";
  return "Nol";
}

function tampilkanHasil() {
  const input = document.getElementById("inputBilangan").value;
  const hasil = CariTandaBilangan(parseInt(input));
  document.getElementById("outputLabel").innerText = `Hasil: ${hasil}`;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { CariTandaBilangan };
}
