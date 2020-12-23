# ./features/daftar2.feature

Feature: Daftar ke website
    Sebagai user
    Saya ingin untuk dapat daftar akun

    @failed
    Scenario: User gagal untuk melakukan daftar akun 
        Given user akses halaman utama Digiclinic
        And user klik pilihan menu Daftar
        And user klik fitur Daftar
        And user input Nama Lengkap
        And user input Email
        And user input Nama Klinik
        When user klik tombol Daftar
        Then sistem menampilkan status error pada label Nama Lengkap, Email, No hp, dan Nama Klinik