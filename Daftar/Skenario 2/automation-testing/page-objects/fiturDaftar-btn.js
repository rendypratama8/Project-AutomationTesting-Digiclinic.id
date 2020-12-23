module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        fiturDaftarBtn: by.xpath("//body/div[@id='myModal']/div[1]/div[1]/div[2]/ul[1]/li[2]/a[1]")
    },

    performClick: function () {

        var selector = page.fiturDaftarBtn.elements.fiturDaftarBtn;
        return driver.findElement(selector).click();
    }
};