module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        fieldNama: by.xpath("//body/div[@id='myModal']/div[1]/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/input[1]")
    },

    performFill: function () {

        var selector = page.fieldNama.elements.fieldNama;
        return driver.findElement(selector).sendKeys(shared.id.nama);
    }
};