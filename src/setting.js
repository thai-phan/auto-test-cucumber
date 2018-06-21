var { expect, browser, element, by } = require('protractor')
var { debug } = require('util')
var path = require('path')
var helper = require('./helper')
var chai = require('chai')
var chaiAsPromised = require('chai-as-promised')
var { defineSupportCode } = require('cucumber')
chai.use(chaiAsPromised)
var expect = chai.expect
/* import object model */
var OM = require('./model')

module.exports = {
    expect: chai.expect,
    browser: browser,
    element: element,
    by: by,
    debug: debug,
    path: path,
    chai: chai,
    helper: helper,
    OM: OM,
    chaiAsPromised: chaiAsPromised,
    defineSupportCode: defineSupportCode,
    getFirstElement: (selector, cssContainText = null) => {
        let result = null;
        if (!!cssContainText) {
            result = element.all(by.cssContainingText(selector, cssContainText)).first()
        } else {
            result = element.all(by.css(selector)).first()
        }
        return result;
    },
    getElement: (selector, cssContainText = null) => {
        let result = null;
        if (!!cssContainText) {
            result = element(by.cssContainingText(selector, cssContainText))
        } else {
            result = element(by.css(selector))
        }
        return result;
    },
    container: null
}
