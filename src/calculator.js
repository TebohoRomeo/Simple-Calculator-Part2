class Calculator {
  constructor() {
    this.lastNum = 0;
    this.slot = [];
  }

  //add numbers
  add(...args) {
    let sum = 0;

    for (let num of args) {
      if (num == 'Last') {
        return this.last();
      }

      if (num == 'slot_') {
        let slot_num = num[num.length - 1];
        return this.slot[slot_num - 1];
      }
      sum += num;
    }

    this.lastNum = sum;
    this.slot.push(sum);

    return sum;
  }

  multiply(...args) {
    let product = 1;

    for (let num of args) {
      if (num == 'Last') {
        num = this.last();
      }
      product *= num;
    }
    this.lastNum = product;
    this.slot.push(product);
    return product;
  }

 // Don't modify any code below this one. You are done with this part

  last() {
    return this.lastNum;
  }

  set_slot(num) {
    this.lastNum = this.slot[num - 1];
  }

  get_slot(num) {
    return this.slot[num - 1];
  }
}

let casio = new Calculator();
console.log(casio.add(100, 200), 'should return 300')
console.log(casio.add(10, 20), 'should return 30');
console.log(casio.get_slot(1), 'should return 300');
console.log(casio.get_slot(2), 'should return 30');
console.log(casio.last(), 'should return 30');
console.log(casio.add('Last', 10), 'should return 40 for using last'); // Last part to work on. Go to Mudi for help.
console.log(casio.add('slot_1', 10), 'should return 30 pics'); // Last part to work on. Go to Mudi for help.


module.exports = Calculator;
