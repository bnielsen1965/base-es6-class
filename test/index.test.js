
const BaseClass = require('../baseclass');

describe('Base ES6 Class', function () {
  describe('Test 1', function () {
    let base = new BaseClass('bar');

    it('Should return bar from foo()', function () {
      expect(base.foo()).to.equal('bar');
    });

    it('Should return bar from foo() reference', function () {
      let refFoo = base.foo;
      expect(refFoo()).to.equal('bar');
    });

    it('Should return bar from notFoo()', function () {
      expect(base.notFoo()).to.equal('bar');
    });

    it('Should fail with notFoo() reference', function () {
      let refNotFoo = base.notFoo;
      expect(refNotFoo).to.throw(Error);
    });
  });
});
