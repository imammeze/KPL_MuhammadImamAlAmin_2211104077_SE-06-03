public class Main {
    public static void main(String[] args) {
        // Membuat subject
        NewsAgency agency = new NewsAgency();

        // Membuat observers
        NewsChannel channel1 = new NewsChannel("Kompas TV");
        NewsChannel channel2 = new NewsChannel("Metro TV");

        // Mendaftarkan observers ke subject
        agency.attach(channel1);
        agency.attach(channel2);

        // Mengubah berita, observer akan diberi notifikasi secara otomatis
        agency.setNews("Gunung Slamet Meletus!");
        agency.setNews("Cuaca Ekstrem Melanda Jawa Tengah");
    }
}
