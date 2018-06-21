var { expect, browser, element, by, defineSupportCode, debug, path, chai, chaiAsPromised, getFirstElement, container, helper, OM } = require('../setting')

defineSupportCode(({ When, setDefaultTimeout }) => {
    setDefaultTimeout(30 * 1000)
    When('User click {string}', (locator, callback) => {
        OM.refactorOM(locator, callback, function (locator, callback) {
            var element = getFirstElement(locator)
            helper.waitAndClick(element, callback);
        })
    })

    //Click with Css cotainingtext
    When('User click {string} at {string}', (eleName, locator, callback) => {
        OM.refactorOM(eleName, locator, callback, function (eleName, locator, callback) {
            var element = getFirstElement(locator, eleName)
            helper.waitAndClick(element, callback);
        })
    })

    When('User click button {string}', (buttonName, callback) => {
        OM.refactorOM(buttonName, callback, function (buttonName, callback) {
            var button = getFirstElement(buttonName)
            helper.waitAndClick(button, callback)
        });
    })

})