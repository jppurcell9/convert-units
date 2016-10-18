var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');


tests['s to ms'] = function () {
  assert.strictEqual( convert(1).from('s').to('ms') , 1000);
};

tests['s to min'] = function () {
  assert.strictEqual( convert(60).from('s').to('min'), 1);
}

tests['s to s'] = function () {
  assert.strictEqual( convert(1).from('s').to('s'), 1);
}

tests['s to h'] = function () {
  assert.strictEqual( convert(3600).from('s').to('h'), 1);
};

tests['s to d'] = function () {
  assert.strictEqual( convert(86400).from('s').to('d'), 1);
};

tests['d to week'] = function () {
  var expected = 1
    , actual = convert(7).from('d').to('week');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

// Seasonal conversion: 1 month = 30.333 days
tests ['d to month'] = function () {
  var expected = 1
    , actual = convert(30.333).from('d').to('month');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

// Seasonal conversion: 1 year = 364 days
tests ['d to year'] = function () {
  var expected = 1
    , actual = convert(364).from('d').to('year');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

// Seasonal conversion: 1 month = 4.333 weeks
tests['week to month'] = function () {
  var expected = 1
    , actual = convert(4.333).from('week').to('month');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

// Seasonal conversion: 1 year = 52 weeks
tests['week to year'] = function () {
  assert.strictEqual( convert(52).from('week').to('year'), 1);
};

// Seasonal conversion: 1 year = 12 months
tests['month to year'] = function () {
  assert.strictEqual(convert(12).from('month').to('year'), 1);
};

// SI conversion: 1 month = 30.4375 days
tests['d to M'] = function () {
  var expected = 1
    , actual = convert(30.4375).from('d').to('M');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

// SI conversion: 1 year = 365.25 days
tests['d to y'] = function () {
  assert.strictEqual(convert(365.25).from('d').to('y'), 1);
};

// SI conversion: 1 year = 12 months
tests['M to y'] = function () {
  assert.strictEqual(convert(12).from('M').to('y'), 1);
};

// Seasonal week => SI month
tests['week to M'] = function() {
  var expected = 1
    , actual = convert(4.34821).from('week').to('M');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
}

// Seasonal week => SI y
tests['week to y'] = function() {
  var expected = 1
    , actual = convert(52.17857).from('week').to('y');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
}

//SI M => Seasonal year
tests['M to year'] = function() {
  var expected = 1
    , actual = convert(11.95853).from('M').to('year');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
}

//Seasonal month => SI y
tests['month to y'] = function() {
  var expected = 1
    , actual = convert(12.04121).from('month').to('y');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
}

module.exports = tests;
