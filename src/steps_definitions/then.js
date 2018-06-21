var { expect, browser, element, by, defineSupportCode, debug, path, chai, chaiAsPromised, getFirstElement, getElement, container, helper, OM } = require('../setting')

defineSupportCode(({ Then, setDefaultTimeout }) => {
    setDefaultTimeout(30 * 1000)
    Then('User see {string} was closed', function (locator, callback) {
        OM.refactorOM(locator, callback, function (locator, callback) {
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css(locator)))).then(() => {
                var ele = getFirstElement(locator)
                ele.isPresent().then((result) => {
                    expect(result).to.equal(false)
                    callback()
                })
            })
        })
        // Take screenshot
        // browser.takeScreenshot().then(function (png) {
        //     var fs = require('fs');
        //     var stream = fs.createWriteStream("screenshot2.png");
        //     stream.write(new Buffer(png, 'base64'));
        //     stream.end();
        // })
    })

    // Login
    Then('User see {string} on header menu at {string}', (username, locator, callback) => {
        OM.refactorOM(username, locator, callback, function (username, locator, callback) {
            var selector = getFirstElement(locator)
            browser.wait(ExpectedConditions.visibilityOf(selector)).then(() => {
                expect(selector.getText()).to.eventually.equal(username)
                callback()
            })
        })
    })

    Then('User error message {string} at {string}', (message, locator, callback) => {
        OM.refactorOM(message, locator, callback, function (message, locator, callback) {
            browser.wait(ExpectedConditions.visibilityOf(element(by.css(locator)))).then(() => {
                var el = getFirstElement(locator)
                expect(el.getText()).to.eventually.equal(message).and.notify(callback)
            })
        });
    })

    Then('User see {string} still occur', function (locator, callback) {
        OM.refactorOM(locator, callback, function (locator, callback) {
            var ele = getFirstElement(locator)
            ele.isPresent().then((result) => {
                expect(result).to.equal(true)
                callback()
            })
        })
    })

    Then('User see {string} was selected at {string}', function (mediaFolderName, locator, callback) {
        OM.refactorOM(mediaFolderName, locator, callback, function (mediaFolderName, locator, callback) {
            browser.wait(ExpectedConditions.visibilityOf(element(by.css(locator)))).then(() => {
                var ele = getFirstElement(locator)
                expect(ele.getText()).to.eventually.equal(mediaFolderName).and.notify(callback)
            })
        })
    })

    Then('User see {string} at {string}', function (eleName, locator, callback) {
        OM.refactorOM(eleName, locator, callback, function (eleName, locator, callback) {
            browser.wait(ExpectedConditions.visibilityOf(element(by.css(locator)))).then(() => {
                var ele = getElement(locator, eleName);
                expect(ele.getText()).to.eventually.equal(eleName)
                callback()
            })
        })
    })

    Then('User see {string} is active', function (locator, callback) {
        OM.refactorOM(locator, callback, function (locator, callback) {
            browser.wait(ExpectedConditions.visibilityOf(element(by.css(locator)))).then(() => {
                var ele = getFirstElement(locator);
                expect(ele.getAttribute('class')).to.eventually.equal('active').and.notify(callback)
            })
        })
    })

    Then('User see {string} is visible', function (elName, callback) {
        OM.refactorOM(elName, callback, function (elName, callback) {
            var ele = getFirstElement(elName)
            ele.isPresent().then((result) => {
                expect(result).to.equal(true)
                callback()
            })
        })
    });

    Then('User see button {string} is disable', function (locator, callback) {
        OM.refactorOM(locator, callback, function (locator, callback) {
            browser.wait(ExpectedConditions.visibilityOf(element(by.css(locator)))).then(() => {
                var ele = getFirstElement(locator);
                expect(ele.getAttribute('disable')).to.eventually.be.null.and.notify(callback)
            })
        })
    })

    Then('User see button {string} at {string} tab is disable', function (locator, tabName, callback) {
        var tabIndex;
        switch (tabName) {
            case 'Properties':
                tabIndex = 0;
                break;
            case 'Permissions':
                tabIndex = 1;
                break;
            case 'Settings':
                tabIndex = 2;
                break;
            default:
                tabIndex = -1;
        }
        OM.refactorOM(locator, callback, function (locator, callback) {
            browser.wait(ExpectedConditions.visibilityOf(element(by.css(locator)))).then(() => {
                var list = element.all(by.css(locator))
                expect(list.get(tabIndex).getAttribute('disable')).to.eventually.be.null.and.notify(callback)
            })
        })
    });

    Then('User see file will be removed at the {string}', function (locator, callback) {
        OM.refactorOM(locator, callback, function (locator, callback) {
            element.all(by.css(locator)).count().then((result) => {
                expect(result).to.equal(0)
                callback()
            })
        })
    })

    Then('User see file name {string} at {string}', function (file, locator, callback) {
        var fileName = file.replace(/^.*[\\\/]/, '')
        OM.refactorOM(file, locator, callback, function (file, locator, callback) {
            var selectorName = getFirstElement(locator, fileName)
            expect(selectorName.getText()).to.eventually.equal(fileName)
            callback()
        })
    })

    Then('User see background color at {string} is {string}', function (locator, string, callback) {
        var color;
        switch (string) {
            case 'green':
                color = 'rgba(26, 196, 158, 1)';
                break;
            case 'red':
                color = 'rgba(255,​ 103,​ 92, 1)';
                break;
        }
        OM.refactorOM(locator, callback, function (locator, callback) {
            var selectorName = getFirstElement(locator)
            expect(selectorName.getCssValue('background-color')).to.eventually.equal(color)
            callback()
        })
    })

    // Then('User see {string} at {string} and background color at {string} is {string}', function (eleName1, locator1, locator2, eleName2, callback) {
    //     if (eleName2 === 'red')
    //         expectColor = '#ff675c';
    //     OM.refactorOM(eleName1, locator1, locator2, eleName2, callback, function (eleName1, locator1, locator2, eleName2, callback) {
    //         browser.wait(ExpectedConditions.visibilityOf(element(by.css(locator1)))).then(() => {
    //             const actualText = getElement(locator1, eleName1).getText();
    //             const actualColor = getFirstElement(locator2).getCssValue('background-color')
    //             Promise.all([actualText, actualColor]).then((values) => {
    //                 expect(values[0]).to.equal(eleName1)
    //                 expect(values[1]).to.equal(expectColor)
    //                 callback()
    //             })
    //         })
    //     })
    // })

    // // Need to recheck 
    // Then('I see the file {string} was not upload, has red progress bar and Remove link', (file, callback) => {
    //     var fileName = file.replace(/^.*[\\\/]/, '')
    //     console.log(fileName)
    //     const selectPath = element(by.cssContainingText('.ui__upload-progress-bar__filename', fileName)).element(by.xpath('../..'))

    //     const visionElement = element(by.cssContainingText('.base__fake__link', 'Remove'))
    //     browser.wait(ExpectedConditions.visibilityOf(visionElement)).then(() => {
    //         console.log('in')
    //         const selectorErrorPromise = element(by.css('.ui__progress-bar--error')).isPresent()
    //         const selectorRemovePromise = element(by.cssContainingText('a.base__fake__link', 'Remove')).isPresent()
    //         Promise.all([selectorErrorPromise, selectorRemovePromise]).then((values) => {
    //             lg(values)
    //             expect(values[0]).to.equal(true)
    //             expect(values[1]).to.equal(true)
    //             callback()
    //         })
    //     })
    // })

})