const readline = require("readline");
const BankTransferConfig = require("./BackTransferConfig");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const configManager = new BankTransferConfig();
const config = configManager.getConfig();
const lang = config.lang;

const prompt =
  lang === "id"
    ? "Masukkan jumlah uang yang akan di-transfer: "
    : "Please insert the amount of money to transfer: ";

rl.question(prompt, (amountStr) => {
  const amount = parseInt(amountStr);
  const fee =
    amount <= config.transfer.threshold
      ? config.transfer.low_fee
      : config.transfer.high_fee;

  const total = amount + fee;

  if (lang === "id") {
    console.log(`Biaya transfer = ${fee}`);
    console.log(`Total biaya = ${total}`);
    console.log("Pilih metode transfer:");
  } else {
    console.log(`Transfer fee = ${fee}`);
    console.log(`Total amount = ${total}`);
    console.log("Select transfer method:");
  }

  config.methods.forEach((method, index) => {
    console.log(`${index + 1}. ${method}`);
  });

  rl.question("", () => {
    const confirmText =
      lang === "id"
        ? `Ketik "${config.confirmation.id}" untuk mengkonfirmasi transaksi: `
        : `Please type "${config.confirmation.en}" to confirm the transaction: `;

    rl.question(confirmText, (confirmationInput) => {
      const valid =
        (lang === "id" && confirmationInput === config.confirmation.id) ||
        (lang === "en" && confirmationInput === config.confirmation.en);

      if (valid) {
        console.log(
          lang === "id"
            ? "Proses transfer berhasil"
            : "The transfer is completed"
        );
      } else {
        console.log(
          lang === "id" ? "Transfer dibatalkan" : "Transfer is cancelled"
        );
      }

      rl.close();
    });
  });
});
