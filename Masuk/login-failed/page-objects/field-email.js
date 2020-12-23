module.exports = {

    url: 'https://www.digiclinic.id/',

    elements: {
        fieldEmail: by.xpath("//input[@id='loginemail']")
    },

    performFill: function () {

        var selector = page.fieldEmail.elements.fieldEmail;
        return driver.findElement(selector).sendKeys(shared.id.email);
    }
};
