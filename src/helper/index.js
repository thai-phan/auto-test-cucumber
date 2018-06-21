'use strict';

module.exports = {
    waitAndClick: (selector, callback) => {
        browser.wait(ExpectedConditions.elementToBeClickable(selector)).then(() => {
            selector.click()
            callback();
        });
    },

    waitAndExpect: (selector, visionElement, callback) => {

    },
    waitAndSendKeys: (selector, value, callback) => {
        browser.wait(ExpectedConditions.visibilityOf(selector)).then(() => {
            selector.sendKeys(value)
            callback();
        });
    },
    getElementAttr: (selector) => {
        selector.getAttribute().then((data) => {
            console.log(`ss: ${data}`)
        })
    }
};
