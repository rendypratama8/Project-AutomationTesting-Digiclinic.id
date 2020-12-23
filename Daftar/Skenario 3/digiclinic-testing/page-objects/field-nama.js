module.exports = {

    url: 'https://www.digiclinic.id/',

    elements: {
        fieldNamaLengkap: by.xpath("//body/div[@id='myModal']/div[1]/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/input[1]")
    },

    performFill: function () {

        var selector = page.fieldNamaLengkap.elements.fieldNamaLengkap;
        return driver.findElement(selector).sendKeys(shared.id.nama);
        // return driver.findElement(selector).sendKeys('ariwilyan@gmail.com');
    }
};