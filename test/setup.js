/*
Setup globals for tests.

I.E.
global.TestSettings = { foo: 'bar' };

The mocha.opts file must contain a --require options to load the global setup script...
--require test/setup.js

*/

// create chai expect for all tests
global.expect = require('chai').expect;
