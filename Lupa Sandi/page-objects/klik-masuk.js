// ./page-objects/klik-masuk.js
 
module.exports = {
 
    url: 'https://digiclinic.id/    ',
 
    elements: {
        klikMasuk: by.xpath("//header/div[1]/nav[1]/ul[1]/li[5]/a[1]")
    },
 
    /**
     * enters a search term into Google's search box and presses enter
     * @param {string} searchQuery 
     * @returns {Promise} a promise to enter the search values
     */
    performKlik: function () {
 
        var selector = page.klikMasuk.elements.klikMasuk;
 
        // return a promise so the calling function knows the task has completed
        return driver.findElement(selector).click();
    }
};
