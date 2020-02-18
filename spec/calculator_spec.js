let Calculator = require('../src/calculator')

let calculator_instance = new Calculator();

 describe('Last() function', () => {
    it('should take last as an argument', function(){
        expect(calculator_instance.add(1,2)).toEqual(3);
        expect(calculator_instance.last()).toEqual(3)
    })
 })