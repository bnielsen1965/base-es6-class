
// base class example with coding style and method binding to this instance
class BaseClass {
  constructor (bar) {
    this.bar = bar;

    // automatically export underscored methods for this instance
    this.autoExport();
  }

  // create an instance of each underscored method with a bind to this instance
  autoExport () {
    let self = this;
    Object.getOwnPropertyNames(Object.getPrototypeOf(self)).forEach(function (name) {
      if (/^_[^_]+/.test(name)) {
        self[name.replace(/^_/, '')] = self[name].bind(self);
      }
    });
  }

  // underscored _foo method will be exported as foo and bound to this instance
  _foo () {
    return this.bar;
  }

  // not underscored notFoo method will not be exported and not bound to this instance
  notFoo () {
    return this.bar;
  }
}

module.exports = BaseClass;
