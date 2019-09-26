const { Client } = require('./client');

Client.prototype.pop = function () {
	if (!this.items) {
		return null;
	}
	return this.items.splice(this.items.length - 1)[0];
};

Client.prototype.push = function (item) {
	if (item == null) {
		throw new Error(`Can not push ${item}`);
	}
	if (!this.items) {
		this.items = [];
	}
	this.items.push(item);
};
