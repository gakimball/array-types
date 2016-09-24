var types = require('./');
var expect = require('chai').expect;

describe('arrayTypes()', function() {
  it('returns a string for an array with one type', function() {
    expect(types(['one', 'two'])).to.be.a('string');
  });

  it('returns an array for an array with multiple types', function() {
    expect(types(['one', 2])).to.be.an('array');
    expect(types(['one', 2])).to.have.lengthOf(2);
  });

  it('detects the string type', function() {
    expect(types(['string'])).to.equal('string');
  });

  it('detects the number type', function() {
    expect(types([0])).to.equal('number');
  });

  it('detects the boolean type', function() {
    expect(types([true])).to.equal('boolean');
  });

  it('detects the object type', function() {
    expect(types([{}])).to.equal('object');
  });

  it('detects the array type', function() {
    expect(types([[]])).to.equal('array');
  });

  it('detects the function type', function() {
    expect(types([function() {}])).to.equal('function');
  });

  it('detects the null type', function() {
    expect(types([null])).to.equal('null');
  });

  it('detects the undefined type', function() {
    expect(types([undefined])).to.equal('undefined');
  });
});
