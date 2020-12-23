// ./page-objects/field-email.js
 
module.exports = {
 
    url: 'https://digiclinic.id/    ',
 
    elements: {
        fieldEmail: by.xpath("//body/div[@id='myModal']/div[1]/div[1]/div[2]/div[1]/div[3]/form[1]/div[1]/input[1]")
    },
 
    /**
     * enters a search term into Google's search box and presses enter
     * @param {string} searchQuery 
     * @returns {Promise} a promise to enter the search values
     */
    performFill: function () {
 
        var selector = page.fieldEmail.elements.fieldEmail;
 
        // return a promise so the calling function knows the task has completed
        return driver.findElement(selector).sendKeys(shared.id.email);
    },

    performFillXFormat: function () {
 
        var selector = page.fieldEmail.elements.fieldEmail;
 
        // return a promise so the calling function knows the task has completed
        return driver.findElement(selector).sendKeys(shared.id.emailXFormat);
    },

    performFillXDaftar: function () {
 
        var selector = page.fieldEmail.elements.fieldEmail;
 
        // return a promise so the calling function knows the task has completed
        return driver.findElement(selector).sendKeys(shared.id.emailXDaftar);
    }
};
