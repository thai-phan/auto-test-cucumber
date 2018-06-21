var { expect, browser, element, by, defineSupportCode, debug, path, chai, chaiAsPromised, getFirstElement, container, helper, OM } = require('../setting')

defineSupportCode(({ Given, When, Then, setDefaultTimeout }) => {
    browser.waitForAngularEnabled(false)
    setDefaultTimeout(30 * 1000)
    Given('Go to site {string}', (site) => {
        browser.get(site).then()
    })

    Given('User focus on panel {string}', (locator) => {
        OM.refactorOM(locator, function (locator) {
            container = getFirstElement(locator);
        });
    })

    Given('User entered username {string} into {string}', (fieldValue, fieldName, callback) => {
        OM.refactorOM(fieldName, callback, function (fieldName, callback) {
            var field = getFirstElement(fieldName)
            helper.waitAndSendKeys(field, fieldValue, callback)
        });
    })

    Given('User entered password {string} into {string}', (fieldValue, fieldName, callback) => {
        OM.refactorOM(fieldName, callback, function (fieldName, callback) {
            var field = getFirstElement(fieldName)
            helper.waitAndSendKeys(field, fieldValue, callback)
        });
    })

    When('User click Login button {string}', (buttonName, callback) => {
        OM.refactorOM(buttonName, callback, function (buttonName, callback) {
            var button = getFirstElement(buttonName)
            helper.waitAndClick(button, callback)
        });
    })

    Given('Wait for element {string} visible', function (elName, callback) {
        OM.refactorOM(elName, callback, function (elName, callback) {
            var el = getFirstElement(elName)
            browser.wait(ExpectedConditions.visibilityOf(el)).then(() => {
                callback()
            })
        })
    })

    Then('User see the response contains {string} in {string}', (message, elName, callback) => {
        OM.refactorOM(message, elName, callback, function (message, elName, callback) {
            var selector = getFirstElement(elName)
            browser.wait(ExpectedConditions.visibilityOf(selector)).then(() => {
                expect(el.getText()).to.eventually.equal(message)
                callback()
            })
        });
    })
})