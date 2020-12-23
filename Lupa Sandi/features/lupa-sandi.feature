# ./features/lupa-sandi.feature

Feature: Lupa Sandi pada Digiclinic.id
    As a user I want to be able to Lupa sandi
    pada Digiclinic.id

    @success
    Scenario: User berhasil melakukan lupa sandi
        Given Halaman Utama Digiclinic
        And User klik pilihan masuk/daftar
        And User klik fitur lupa Sandi
        And User memasukan email
        When User klik tombol Lupa sandi
        Then Sistem menampilkan status periksa email
    
    @failed-format
    Scenario: User gagal melakukan lupa sandi
        Given Halaman Utama Digiclinic
        And User klik pilihan masuk/daftar
        And User klik fitur lupa Sandi
        And User memasukan format email salah
        When User klik tombol Lupa sandi
        Then Sistem menampilkan status error format

    @failed-tidak-terdaftar
    Scenario: User gagal melakukan lupa sandi
        Given Halaman Utama Digiclinic
        And User klik pilihan masuk/daftar
        And User klik fitur lupa Sandi
        And User memasukan email tidak terdaftar
        When User klik tombol Lupa sandi
        Then Sistem menampilkan status The Email containts is not found