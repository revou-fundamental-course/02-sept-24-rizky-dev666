document.addEventListener("DOMContentLoaded", function () {
  // Mengatur Visibilitas
  const segitigaLink = document.getElementById("segitiga");
  const jajarGenjangLink = document.getElementById("jajar-genjang");
  const luasSegitigaSection = document.getElementById("luas-segitiga");
  const kelilingSegitigaSection = document.getElementById("keliling-segitiga");

  segitigaLink.addEventListener("click", function (event) {
    event.preventDefault();
    luasSegitigaSection.style.display = "block";
    kelilingSegitigaSection.style.display = "none";
  });

  jajarGenjangLink.addEventListener("click", function (event) {
    event.preventDefault();
    luasSegitigaSection.style.display = "none";
    kelilingSegitigaSection.style.display = "block";
  });

  // Fungsionalitas Hitung dan Reset Luas
  document.getElementById("hitung-luas").addEventListener("click", function () {
    // Mengambil nilai dari input alas dan tinggi
    const alas = parseFloat(document.getElementById("alas-luas").value);
    const tinggi = parseFloat(document.getElementById("tinggi-luas").value);

    // Validasi inputan
    if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
      document.getElementById("hasil-luas").innerHTML =
        "Masukkan nilai yang valid!";
      document.getElementById("hasil-luas").style.color = "red";
      return;
    }

    // Menghitung luas segitiga
    const luas = 0.5 * alas * tinggi;

    // Menampilkan hasil dalam langkah-langkah perhitungan
    const langkahPerhitungan = `
      L = 1/2 x a x t <br>
      L = 1/2 x ${alas} x ${tinggi} <br>
      L = ${luas.toFixed(2)}
    `;

    document.getElementById("hasil-luas").innerHTML = langkahPerhitungan;
    document.getElementById("hasil-luas").style.color = "black"; // Mengatur warna teks menjadi hitam untuk hasil perhitungan
  });

  document.getElementById("reset-luas").addEventListener("click", function () {
    // Mengosongkan nilai inputan dan hasil
    document.getElementById("alas-luas").value = "";
    document.getElementById("tinggi-luas").value = "";
    document.getElementById("hasil-luas").innerHTML = "";
  });

  // Fungsionalitas Hitung dan Reset Keliling
  document
    .getElementById("hitung-keliling")
    .addEventListener("click", function () {
      // Mengambil nilai dari input sisi
      const sisiA = parseFloat(document.getElementById("sisi-a").value);
      const sisiB = parseFloat(document.getElementById("sisi-b").value);
      const sisiC = parseFloat(document.getElementById("sisi-c").value);

      // Validasi inputan
      if (
        isNaN(sisiA) ||
        isNaN(sisiB) ||
        isNaN(sisiC) ||
        sisiA <= 0 ||
        sisiB <= 0 ||
        sisiC <= 0
      ) {
        document.getElementById("hasil-keliling").innerHTML =
          "Masukkan nilai yang valid!";
        document.getElementById("hasil-keliling").style.color = "red";
        return;
      }

      // Menghitung keliling segitiga
      const keliling = sisiA + sisiB + sisiC;

      // Menampilkan hasil dalam langkah-langkah perhitungan
      const langkahPerhitungan = `
      K = S1 + S2 + S3 <br>
      K = ${sisiA} + ${sisiB} + ${sisiC} <br>
      K = ${keliling.toFixed(2)}
    `;

      document.getElementById("hasil-keliling").innerHTML = langkahPerhitungan;
      document.getElementById("hasil-keliling").style.color = "black"; // Mengatur warna teks menjadi hitam untuk hasil perhitungan
    });

  document
    .getElementById("reset-keliling")
    .addEventListener("click", function () {
      // Mengosongkan nilai inputan dan hasil
      document.getElementById("sisi-a").value = "";
      document.getElementById("sisi-b").value = "";
      document.getElementById("sisi-c").value = "";
      document.getElementById("hasil-keliling").innerHTML = "";
    });

  // Manajemen Kelas Aktif Navbar
  var navLinks = document.querySelectorAll(".navbar a");

  // Fungsi untuk menghapus kelas aktif dari semua link
  function removeActiveClass() {
    navLinks.forEach(function (link) {
      link.classList.remove("active");
    });
  }

  // Tambahkan event listener pada setiap link
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      // Hapus kelas aktif dari semua link
      removeActiveClass();

      // Tambahkan kelas aktif pada link yang diklik
      this.classList.add("active");
    });
  });
});
