var login = require('./login').object
var topmenu = require('./topmenu').object
var media = require('./media').object

module.exports = {
	object: Object.assign(login, topmenu, media),

	refactorOM: function (...arguments) {
		var array_arguments = [];
		for (var i = 0; i < arguments.length - 1; i++) {
			array_arguments.push(this.object[arguments[i]] === undefined ? arguments[i] : this.object[arguments[i]]);
		}
		if (typeof (arguments[i]) == "function") {
			arguments[i].apply(this, array_arguments);
		}
	}
}