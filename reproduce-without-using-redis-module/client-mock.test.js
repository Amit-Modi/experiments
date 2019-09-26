jest.mock('./client');
const Client = require('./client').Client;

describe('Test', () => {
	test('pass', () => {
		expect(true).toEqual(true);
	});
});
