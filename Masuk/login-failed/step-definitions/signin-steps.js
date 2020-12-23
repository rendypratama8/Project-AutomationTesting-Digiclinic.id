module.exports = function(){
    this.Given(/^user halaman utama login$/, function () {
        helpers.loadPage('https://www.digiclinic.id/')
    });

    this.Given(/^user klik tombol masuk$/, function () {
        driver.then(function () {
            return page.masukBtn.performClick();
        })
      });

    this.Given(/^user memasukan email$/, function () {
        driver.then(function () {
            return page.fieldEmail.performFill();
        })
    });

    this.Given(/^user memasukan password$/, function () {
        driver.then(function () {
            return page.fieldPw.performFill();
        })
    });

    this.Given(/^user klik tombol login$/, function () {
        driver.then(function () {
            return page.loginBtn.performClick();
        })
    });

    this.Given(/^menampilkan pesan error pada label password atau email$/, function () {
        return "Sistem menampilkan pesan error pada label password atau email"
    });
 }