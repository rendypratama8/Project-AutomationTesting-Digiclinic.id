// ./page-objects/klik-tombol-lupa-sandi.js
 
module.exports = {
 
    url: 'https://digiclinic.id/    ',
 
    elements: {
        klikTombolLupaSandi: by.xpath("//button[normalize-space()='Lupa Sandi']")
    },
 
    /**
     * enters a search term into Google's search box and presses enter
     * @param {string} searchQuery 
     * @returns {Promise} a promise to enter the search values
     */
    performKlik: function () {
 
        var selector = page.klikTombolLupaSandi.elements.klikTombolLupaSandi;
 
        // return a promise so the calling function knows the task has completed
        return driver.findElement(selector).click();
    }
};
