module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        menuDaftarBtn: by.xpath("//header/div[1]/nav[1]/ul[1]/li[6]/a[1]")
    },

    performClick: function () {

        var selector = page.menuDaftarBtn.elements.menuDaftarBtn;
        return driver.findElement(selector).click();
    }
};