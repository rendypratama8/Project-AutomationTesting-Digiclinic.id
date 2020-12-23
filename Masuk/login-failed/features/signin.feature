# ./features/login.feature

Feature: Login ke website
    Sebagai user baru
    saya ingin melakukan login

    @failed
    Scenario: User gagal melakukan login
        Given user halaman utama login
        And user klik tombol masuk
        And user memasukan email
        And user memasukan password
        When user klik tombol login
        Then menampilkan pesan error pada label password atau email
