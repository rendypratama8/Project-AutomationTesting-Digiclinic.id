module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        fieldNohp: by.xpath("//body/div[@id='myModal']/div[1]/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]/div[3]/div[1]/input[1]")
    },

    performFill: function () {

        var selector = page.fieldNohp.elements.fieldNohp;
        return driver.findElement(selector).sendKeys(shared.id.nohp);
    }
};