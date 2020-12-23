// ./page-objects/klik-fitur-lupa-sandi.js
 
module.exports = {
 
    url: 'https://digiclinic.id/    ',
 
    elements: {
        klikFiturLupaSandi: by.xpath("//a[contains(text(),'Lupa Sandi')]")
    },
 
    /**
     * enters a search term into Google's search box and presses enter
     * @param {string} searchQuery 
     * @returns {Promise} a promise to enter the search values
     */
    performKlik: function () {
 
        var selector = page.klikFiturLupaSandi.elements.klikFiturLupaSandi;
 
        // return a promise so the calling function knows the task has completed
        return driver.findElement(selector).click();
    }
};
