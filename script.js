// 1. Pilih tombol berdasarkan ID-nya
const tombolSapa = document.getElemenById('sapaButton');
// 2. Tambahkan 'event litsener' untuk aksi 'click'
tombolSapa.addEventLitsener('click', function() {
  // 3. Jalankan kode ini ketika tombol di-klik
  alert('Halo! Terima kasih sudah berkunjung!');
});
