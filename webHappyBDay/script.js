function ucapkan() {
    const nama = document.getElementById('nama').value;
    const tema = document.getElementById('tema').value;
    const audio= document.getElementsByName('audio').value;
    const ucapanDiv = document.getElementById('ucapan');

    // Sesuaikan ucapan dengan nama
    ucapanDiv.textContent = `Selamat Ulang Tahun, ${nama}! Semoga bahagia dan sukses selalu🎉🎁🎉🥳🥳`;

    // Terapkan tema
    document.body.classList.add(tema);

    // Tambahkan animasi (contoh: menggunakan library Animate.css)
    ucapanDiv.classList.add('animated', 'bounceIn');

    document.body.classList.add(audio);
}