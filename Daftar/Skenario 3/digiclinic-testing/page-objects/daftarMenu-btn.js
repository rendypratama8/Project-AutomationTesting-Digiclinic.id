module.exports = {

    url: 'https://www.digiclinic.id/',

    elements: {
        daftarMenuBtn: by.xpath("//nav[@class='main-nav float-right d-none d-lg-block']//ul//li//a[@href='#login'][normalize-space()='Daftar']")
    },

    performClick: function () {

        var selector = page.daftarMenuBtn.elements.daftarMenuBtn;
        return driver.findElement(selector).click();
    }
};