module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        fieldEmail: by.xpath("//body/div[@id='myModal']/div[1]/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]/div[2]/div[1]/input[1]")
    },

    performFill: function () {

        var selector = page.fieldEmail.elements.fieldEmail;
        return driver.findElement(selector).sendKeys(shared.id.email);
    }
};