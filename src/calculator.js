let setSlot = [], 
LAST = 0;

class Calculator {
  constructor() {
  }
  // I am done with the ad function, dont ever touch it again...//
  add() {
    let sum = 0;
    let i = 0;
    for (i ; i < arguments.length; i++) {
      sum += arguments[i];
    }
    
    setSlot.push(sum)
    return sum;
  }
  multiply() {
    let product = 1;
    let i = 0;
    for (i ; i < arguments.length; i++) {
      product *= arguments[i];
    }
    
    setSlot.push(product)
    return product;
  }
  last() {
    LAST = setSlot[setSlot.length - 1]
    return LAST;
  }
}

let casio = new Calculator()
console.log(casio.add(1, 2))
console.log(casio.last(), 'Last result which is 3');
console.log(casio.multiply(1, 2))
console.log(casio.last(), 'Last result which is ');

module.exports = Calculator;

