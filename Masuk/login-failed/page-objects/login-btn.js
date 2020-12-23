module.exports = {

    url: 'https://www.digiclinic.id/',

    elements: {
        loginBtn: by.xpath("//button[normalize-space()='Login']")
    },

    performClick: function () {

        var selector = page.loginBtn.elements.loginBtn;
        return driver.findElement(selector).click();
    }
};
