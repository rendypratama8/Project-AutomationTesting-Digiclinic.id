# ./features/daftar.feature

Feature: Daftar akun baru di website
    Sebagai user
    Saya ingin untuk mampu daftar akun

    @success
    Scenario: User berhasil untuk melakukan daftar akun 
        Given user akses halaman utama Digiclinic
        And user klik pilihan menu Daftar
        And user klik fitur Daftar
        And user input Nama Lengkap
        And user input Email
        And user input No hp
        And user input Nama Klinik
        When user klik tombol Daftar
        Then sistem menampilkan pesan Terimakasih Sudah Mendaftar, Periksa Email kamu untuk validasi Email yang didaftarkan