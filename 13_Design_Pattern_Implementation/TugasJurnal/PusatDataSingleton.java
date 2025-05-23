import java.util.ArrayList;
import java.util.List;

public class PusatDataSingleton {
    private static PusatDataSingleton _instance = null;
    private List<String> DataTersimpan;

    // Konstruktor private agar tidak bisa diakses langsung dari luar
    private PusatDataSingleton() {
        DataTersimpan = new ArrayList<>();
    }

    // Method untuk mendapatkan instance Singleton
    public static PusatDataSingleton GetDataSingleton() {
        if (_instance == null) {
            _instance = new PusatDataSingleton();
        }
        return _instance;
    }

    // Menambahkan data baru
    public void AddSebuahData(String input) {
        DataTersimpan.add(input);
    }

    // Menghapus data berdasarkan index
    public void HapusSebuahData(int index) {
        if (index >= 0 && index < DataTersimpan.size()) {
            DataTersimpan.remove(index);
        } else {
            System.out.println("Index tidak valid!");
        }
    }

    // Mengembalikan seluruh data dalam bentuk List
    public List<String> GetSemuaData() {
        return DataTersimpan;
    }

    // Mencetak semua data ke layar
    public void PrintSemuaData() {
        System.out.println("=== Data Tersimpan ===");
        for (String data : DataTersimpan) {
            System.out.println(data);
        }
    }
}


