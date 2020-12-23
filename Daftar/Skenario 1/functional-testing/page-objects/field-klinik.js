module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        fieldKlinik: by.xpath("//body/div[@id='myModal']/div[1]/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]/div[4]/div[1]/input[1]")
    },

    performFill: function () {

        var selector = page.fieldKlinik.elements.fieldKlinik;
        return driver.findElement(selector).sendKeys(shared.id.klinik);
    }
};