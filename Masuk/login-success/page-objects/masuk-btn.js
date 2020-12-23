module.exports = {

    url: 'https://www.digiclinic.id/',

    elements: {
        masukBtn: by.xpath("//nav[@class='main-nav float-right d-none d-lg-block']//ul//li//a[@href='#login'][normalize-space()='Masuk']")
    },

    performClick: function () {

        var selector = page.masukBtn.elements.masukBtn;
        return driver.findElement(selector).click();
    }
};
