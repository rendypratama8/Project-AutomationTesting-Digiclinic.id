module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        daftarBtn: by.xpath("//button[contains(text(),'Daftar')]")
    },

    performClick: function () {

        var selector = page.daftarBtn.elements.daftarBtn;
        return driver.findElement(selector).click();
    }
};