# base-es6-class

This is an example Javascript ES6 class to suggest coding style and automatic exporting
of underscored methods with binding to the new instance.


# styling

The semistandard module is used to enforce a standard coding style.


# auto method export

The auto export is used in a new instance to automatically export each method name
that starts with an underscore as a non-underscored method that is bound to the new
instance.


## why auto export

Some uses cases exist where *this* may become ambiguous and the class method needs
a guarantee that *this* points to the class instance.

I.E. If a method in a class is referenced outside of the instance context *this*
will not reference the instance itself and will result in unexpected method results.

```Javascript
class MyEventHandler {
  constructor (name) {
    this.name = name;
  }

  getName () {
    return this.name;
  }
}

let handler = new MyEventHandler('test');

// this will return 'test' as expected
console.log(handler.getName());

// this use of a reference to the method will fail
// because this in getName() will not reference the class instance
let getName = handler.getName;
console.log(getName());
```
