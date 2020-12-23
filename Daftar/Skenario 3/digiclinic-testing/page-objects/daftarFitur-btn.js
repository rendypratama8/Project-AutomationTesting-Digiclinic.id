module.exports = {

    url: 'https://www.digiclinic.id/',

    elements: {
        daftarFiturBtn: by.xpath("//body/div[@id='myModal']/div[1]/div[1]/div[2]/ul[1]/li[2]/a[1]")
    },

    performClick: function () {

        var selector = page.daftarFiturBtn.elements.daftarFiturBtn;
        return driver.findElement(selector).click();
    }

};