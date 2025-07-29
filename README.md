# CodeCraft Academia

> CodeCraft Academia adalah sebuah platform web yang didedikasikan untuk pembelajaran pemrograman. Situs ini menyediakan kumpulan artikel informatif seputar dunia koding, cocok untuk para pelajar dan pengembang yang ingin memperdalam pengetahuannya.

Salah satu fitur unggulan dari platform ini adalah **Asisten AI Chat** yang terintegrasi, dirancang khusus untuk membantu menjawab berbagai pertanyaan seputar koding dan memberikan solusi secara *real-time*.

## Tech Stack

Proyek ini dibangun menggunakan teknologi modern berikut:

-   **[Vite](https://vitejs.dev/)**: Frontend tooling yang sangat cepat.
-   **[React](https://react.dev/)**: Library JavaScript untuk membangun antarmuka pengguna.
-   **[TypeScript](https://www.typescriptlang.org/)**: Superset JavaScript yang menambahkan tipe statis.
-   **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utility-first untuk desain yang cepat.
-   **[shadcn/ui](https://ui.shadcn.com/)**: Kumpulan komponen UI yang dapat digunakan kembali.

## Memulai (Getting Started)

Untuk menjalankan salinan lokal proyek ini, ikuti langkah-langkah di bawah ini.

### Prasyarat

Pastikan Anda telah menginstal Node.js dan npm di sistem Anda.
-   Kami merekomendasikan menggunakan **[nvm (Node Version Manager)](https://github.com/nvm-sh/nvm#installing-and-updating)** untuk mengelola versi Node.js.

### Instalasi & Menjalankan Secara Lokal

1.  **Clone repositori ini:**
    ```sh
    git clone <URL_GIT_ANDA>
    ```

2.  **Masuk ke direktori proyek:**
    ```sh
    cd <NAMA_PROYEK_ANDA>
    ```

3.  **Instal semua dependensi:**
    ```sh
    npm install
    ```

4.  **Jalankan server pengembangan:**
    Perintah ini akan memulai server lokal dengan *hot-reloading*, sehingga perubahan kode akan langsung terlihat di browser.
    ```sh
    npm run dev
    ```
    Buka [http://localhost:5173](http://localhost:5173) (atau port lain yang ditampilkan di terminal) di browser Anda untuk melihat hasilnya.

### Metode Pengembangan Alternatif

-   **Edit Langsung di GitHub**: Navigasikan ke file yang ingin Anda ubah dan klik ikon pensil ("Edit") untuk melakukan perubahan cepat langsung dari repositori GitHub Anda.

-   **Gunakan GitHub Codespaces**:
    1.  Di halaman utama repositori, klik tombol hijau **"< > Code"**.
    2.  Pilih tab **"Codespaces"**.
    3.  Klik **"Create codespace on main"** untuk meluncurkan lingkungan pengembangan berbasis cloud yang sudah dikonfigurasi sepenuhnya.

## Deployment

Proyek Vite + React ini dapat dengan mudah di-deploy ke platform hosting statis mana pun, seperti:
-   [Vercel](https://vercel.com)
-   [Netlify](https://www.netlify.com)
-   [GitHub Pages](https://pages.github.com)

Biasanya, Anda perlu mengonfigurasi pengaturan berikut di platform hosting Anda:
-   **Build Command**: `npm run build`
-   **Publish/Output Directory**: `dist`
