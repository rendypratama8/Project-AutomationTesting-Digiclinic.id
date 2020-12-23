# ./features/login.feature

Feature: Login ke website
    Sebagai user baru
    saya ingin melakukan login

    @success
    Scenario: User berhasil melakukan login
        Given user halaman utama login
        And user klik tombol masuk
        And user memasukan email
        When user memasukan password
        Then user klik tombol login
