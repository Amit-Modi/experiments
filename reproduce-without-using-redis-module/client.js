let clientNumbers = 0;

function Client () {
	this.id = clientNumbers++;
}

Client.prototype.getId = function () {
	return this.id;
};

exports.Client = Client;

require('./extend');
