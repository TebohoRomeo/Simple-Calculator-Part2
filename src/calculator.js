let setSlot = [],
  LAST = 0;

class Calculator {
  constructor() {}
  add() {
    let sum = 0;
    let i = 0;
    for (i; i < arguments.length; i++) {
      sum += arguments[i];
    }

    setSlot.push(sum);
    return sum;
  }
  multiply() {
    let product = 1;
    let i = 0;
    for (i; i < arguments.length; i++) {
      product *= arguments[i];
    }

    setSlot.push(product);
    return product;
  }
  last() {
    LAST = setSlot[setSlot.length - 1];
    return LAST;
  }

  set_slot(num) {
    this.lastNum = this.slot[num - 1];
  }

  get_slot(num) {
    return this.slot[num - 1];
  }
}

let casio = new Calculator();
console.log(casio.add(1, 2));
console.log(casio.last(), 'Should return 3'); // Addition works.
console.log(casio.multiply(1, 2));
console.log(casio.last(), 'Should return 2'); // Multiply works.


module.exports = Calculator;
