public class Main {
    public static void main(String[] args) {
        // A. Buat dua variable Singleton
        PusatDataSingleton data1 = PusatDataSingleton.GetDataSingleton();
        PusatDataSingleton data2 = PusatDataSingleton.GetDataSingleton();

        // B. Add beberapa data menggunakan data1
        data1.AddSebuahData("Agus - Anggota");
        data1.AddSebuahData("Budi - Anggota");
        data1.AddSebuahData("Citra - Anggota");
        data1.AddSebuahData("Dina - Asisten Praktikum");

        // C. Print semua data menggunakan data2
        System.out.println("\nData2 sebelum penghapusan:");
        data2.PrintSemuaData();

        // D. Hapus nama asisten praktikum dari data2
        data2.HapusSebuahData(3); // Menghapus "Dina - Asisten Praktikum"

        // E. Print ulang menggunakan data1
        System.out.println("\nData1 setelah penghapusan:");
        data1.PrintSemuaData();

        // F. Cetak jumlah elemen list dari data1 dan data2
        System.out.println("\nJumlah data di data1: " + data1.GetSemuaData().size());
        System.out.println("Jumlah data di data2: " + data2.GetSemuaData().size());
    }
}
