module.exports = {

    url: 'https://www.digiclinic.id/',

    elements: {
        fieldNamaKlinik: by.xpath("//body/div[@id='myModal']/div[1]/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]/div[4]/div[1]/input[1]")
    },

    performFill: function () {

        var selector = page.fieldNamaKlinik.elements.fieldNamaKlinik;
        return driver.findElement(selector).sendKeys(shared.id.klinik);
        // return driver.findElement(selector).sendKeys('ariwilyan@gmail.com');
    }
};