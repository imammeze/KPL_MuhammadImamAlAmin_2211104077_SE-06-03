const fs = require("fs");

class GlossaryItem_2211104077 {
  ReadJSON() {
    try {
      const data = fs.readFileSync("jurnal7_3_2211104077.json", "utf-8");
      const obj = JSON.parse(data);
      const glossEntry = obj.glossary.GlossDiv.GlossList.GlossEntry;

      console.log("=== Informasi Glossary Entry ===");
      console.log(`ID           : ${glossEntry.ID}`);
      console.log(`Sort As      : ${glossEntry.SortAs}`);
      console.log(`Gloss Term   : ${glossEntry.GlossTerm}`);
      console.log(`Acronym      : ${glossEntry.Acronym}`);
      console.log(`Abbreviation : ${glossEntry.Abbrev}`);
      console.log(`Definition   : ${glossEntry.GlossDef.para}`);
      console.log(
        `See Also     : ${glossEntry.GlossDef.GlossSeeAlso.join(", ")}`
      );
      console.log(`See          : ${glossEntry.GlossSee}`);
    } catch (error) {
      console.error(
        "Terjadi kesalahan saat membaca atau memproses file JSON:",
        error.message
      );
    }
  }
}

const glossary = new GlossaryItem_2211104077();
glossary.ReadJSON();
