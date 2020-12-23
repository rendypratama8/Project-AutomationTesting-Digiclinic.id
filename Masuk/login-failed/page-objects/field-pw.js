module.exports = {

    url: 'https://www.digiclinic.id/',

    elements: {
        fieldPw: by.xpath("//input[@id='loginpassword']")
    },

    performFill: function () {

        var selector = page.fieldPw.elements.fieldPw;
        return driver.findElement(selector).sendKeys(shared.id.pw);
    }
};
