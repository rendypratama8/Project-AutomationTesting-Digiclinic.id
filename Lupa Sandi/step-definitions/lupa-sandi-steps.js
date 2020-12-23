module.exports = function (){
    this.Given(/^Halaman Utama Digiclinic$/, function () {
        helpers.loadPage('https://digiclinic.id/')
    });

    this.Given(/^User klik pilihan masuk\/daftar$/, function () {
        driver.then(function(){
            return page.klikMasuk.performKlik()
        })
    });

    this.Given(/^User klik fitur lupa Sandi$/, function () {
        return driver.wait(until.elementsLocated(by.xpath("//body/div[@id='myModal']/div[1]/div[1]/div[1]/h4[1]")), 50000).then(function(){
 
            // return the promise of an element to the following then.
            return driver.findElements(by.xpath("//body/div[@id='myModal']/div[1]/div[1]/div[1]/h4[1]"));
        })
        .then(function (elements) {
 
            // verify this element has children
            return page.klikFiturLupaSandi.performKlik()
        });
        
        // driver.wait(until.elementsLocated(by.css("div[class='modal-dialog modal-lg'] h4[class='modal-title']")), 10000).then(function(){
        //     return page.klikFiturLupaSandi.performKlik()
        // })
        
    });

    this.Given(/^User memasukan email$/, function () {   
        driver.wait(until.elementsLocated(by.css("#form-forgot-password > div.form-group:nth-child(1) > label")), 30000).then(function(){
            return page.fieldEmail.performFill()
        })
    });

    this.When(/^User klik tombol Lupa sandi$/, function () {
        driver.then(function(){
            return page.klikTombolLupaSandi.performKlik()
        })
    });

    this.Then(/^Sistem menampilkan status periksa email$/, function () {
        return driver.then(function(){
 
            // return the promise of an element to the following then.
            return driver.findElements(by.xpath("//body/div[@id='myModal']/div[1]/div[1]/div[2]/div[1]/div[3]/form[1]/div[3]/span[1]"));
        })
            .then(function (elements) {
 
                // verify this element has children
                expect(elements.length).to.equal(1);
            });
    });

    this.Given(/^User memasukan format email salah$/, function () {   
        driver.wait(until.elementsLocated(by.css("#form-forgot-password > div.form-group:nth-child(1) > label")), 30000).then(function(){
            return page.fieldEmail.performFillXFormat()
        })
    });

    this.Then(/^Sistem menampilkan status error format$/, function () {
        return driver.then(function(){
 
            // return the promise of an element to the following then.
            return driver.findElements(by.xpath("//form[@id='form-forgot-password']//span[@id='email-error']"));
        })
            .then(function (elements) {
 
                // verify this element has children
                expect(elements.length).to.equal(1);
            });
    });

    this.Given(/^User memasukan email tidak terdaftar$/, function () {   
        driver.wait(until.elementsLocated(by.css("#form-forgot-password > div.form-group:nth-child(1) > label")), 10000).then(function(){
            return page.fieldEmail.performFillXDaftar()
        })
    });

    this.Then(/^Sistem menampilkan status The Email containts is not found$/, function () {
        return driver.then(function(){
 
            // return the promise of an element to the following then.
            return driver.findElements(by.xpath("//form[@id='form-forgot-password']//span[@id='email-error']"));
        })
            .then(function (elements) {
 
                // verify this element has children
                expect(elements.length).to.equal(1);
            });
    });
}