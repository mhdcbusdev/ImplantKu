/* =========================================================
   config.js — ImplantKu
   SATU-SATUNYA tempat menyimpan URL Web App (webhook).
   Kalau URL Web App berubah (deploy baru), CUKUP ganti di SINI.
   Semua file (cro-dashboard.html, index.html, pasien.html)
   membaca dari sini.
   ========================================================= */
window.IMPLANTKU_CONFIG = {
  // URL Web App Apps Script (Deploy > Manage deployments)
  WEB_APP_URL: "https://script.google.com/macros/s/AKfycbxX5E1JGxqrlu1t0Q4qLjzeGNBAvBO-ZNDL5RijTj5FZH2ccHaMp73DtuH4zZrY8ApGDQ/exec",

  // Base link halaman pasien (biasanya tidak berubah)
  BASE_URL: "https://mhdcbusdev.github.io/ImplantKu/pasien.html",

  // Nomor WhatsApp CRO — tujuan notifikasi dari anak klinik
  CRO_WA: "6285162717531"
};
