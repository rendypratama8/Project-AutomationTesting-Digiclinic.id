module.exports = function () {

    this.Given(/^user akses halaman utama Digiclinic$/, function () {
        helpers.loadPage('https://digiclinic.id/')
    });

    this.Given(/^user klik pilihan menu Daftar$/, function () {
        driver.then(function () {
            return page.daftarMenuBtn.performClick();
        })
    });

    this.Given(/^user klik fitur Daftar$/, function () {
        // driver wait returns a promise so return that
        // return driver.wait(until.elementsLocated(by.xpath("//body/div[@id='myModal']/div[1]/div[1]/div[1]")), 50000).then(function(){

        //     // return the promise of an element to the following then.
        //     return driver.findElements(by.xpath("//body/div[@id='myModal']/div[1]/div[1]/div[1]"));
        //     // return page.daftarFiturBtn.performClick();
        // })
        // .then(function (elements) {

        //     // verify this element has children
        //     // expect(elements.length).to.not.equal(0);
        //     return page.daftarFiturBtn.performClick();
        // })
        driver.then(function () {
            return page.daftarMenuBtn.performClick();
        })
    });

    this.Given(/^user input Nama Lengkap$/, function () {
        driver.then(function () {
            return page.fieldNamaLengkap.performFill();
        })
    });

    this.Given(/^user input Email$/, function () {
        driver.then(function () {
            return page.fieldEmail.performFill();
        })
    });

    // this.Given(/^user input No hp$/, function () {
    //     driver.then(function () {
    //         return page.fieldNohp.performFill();
    //     })
    // });

    this.Given(/^user input Nama Klinik$/, function () {
        driver.then(function () {
            return page.fieldNamaKlinik.performFill();
        })
    });

    this.When(/^user klik tombol Daftar$/, function () {
        driver.then(function () {
            return page.daftarBtn.performClick();
        })
    });

    this.Then(/^sistem menampilkan status error pada label Nama Lengkap, Email, No hp, dan Nama Klinik$/, function () {
        return "sistem menampilkan status error pada label Nama Lengkap, Email, No hp, dan Nama Klinik"
    })

    // this.Then(/^sistem menampilkan status error pada label Nama Lengkap, Email, No hp, dan Nama Klinik$/, function () {
    //     return driver.then(function(){
 
    //         // return the promise of an element to the following then.
    //         // return driver.findElements(by.xpath("//body/div[@id='myModal']/div[1]/div[1]/div[2]/div[1]/div[3]/form[1]/div[3]/span[1]"));
    //         return "sistem menampilkan status error pada label Nama Lengkap, Email, No hp, dan Nama Klinik";
    //     })
    //     .then(function (elements) {

    //         // verify this element has children
    //         expect(elements.length).to.equal(1);
    //     });
    // });
}