var { expect, browser, element, by, defineSupportCode, debug, path, chai, chaiAsPromised, getFirstElement, container, helper, OM } = require('../setting')

defineSupportCode(({ Given, setDefaultTimeout }) => {
    setDefaultTimeout(30 * 1000)
    Given('User focus on {string}', (locator, callback) => {
        OM.refactorOM(locator, callback, function (locator, callback) {
            container = getFirstElement(locator);
            callback()
        });
    })

    Given('User entered {string} into {string}', (fieldValue, fieldName, callback) => {
        OM.refactorOM(fieldName, callback, function (fieldName, callback) {
            var field = getFirstElement(fieldName)
            helper.waitAndSendKeys(field, fieldValue, callback)
            callback()
        });
    })

    Given('Wait for {string} visible', function (locator, callback) {
        OM.refactorOM(locator, callback, function (locator, callback) {
            var el = getFirstElement(locator)
            browser.wait(ExpectedConditions.visibilityOf(el)).then(() => {
                callback()
            })
        })
    })
    // Wait for element visible with CSS containing
    Given('Wait for {string} visible at {string}', function (eleName, locator, callback) {
        OM.refactorOM(eleName, locator, callback, function (eleName, locator, callback) {
            var el = getFirstElement(locator, eleName)
            browser.wait(ExpectedConditions.visibilityOf(el)).then(() => {
                callback()
            })
        })
    })

    Given('Wait for {string} invisible', function (elName, callback) {
        OM.refactorOM(elName, callback, function (elName, callback) {
            var el = getFirstElement(elName)
            browser.wait(ExpectedConditions.invisibilityOf(el)).then(() => {
                callback()
            })
        })
    })

    // Upload files 
    Given('User send {string} to {string} when {string} visible', (fileName, inputElement, visibleElement, callback) => {
        OM.refactorOM(fileName, inputElement, visibleElement, callback, function (fileName, inputElement, visibleElement, callback) {
            const absolutePath = path.resolve(__dirname, fileName)
            var selector = getFirstElement(inputElement)
            browser.wait(ExpectedConditions.visibilityOf(getFirstElement(visibleElement))).then(() => {
                selector.sendKeys(absolutePath)
                callback()
            })
        })
    })
})