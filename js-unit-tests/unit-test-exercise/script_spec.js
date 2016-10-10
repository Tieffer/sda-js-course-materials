describe('fake suite', function () {
  it('fake test', function () {
    expect(true).toBe(true);
  });
});

describe('Gets raw number from CSS measurement Unit', function () {
 it('jest Stringiem', function(){
    expect(getRawNumberFromCSSUnit('100px')).toBe(100); 
    expect(getRawNumberFromCSSUnit('100em')).toBe(100); 
    
 }) ;
 
  it('jest Procenami', function(){
    expect(getRawNumberFromCSSUnit('100%')).toBe(100); 
 }) ;
 
 
    it('czy zwraca wyjatek', function(){
         function foo (){
        getRawNumberFromCSSUnit(12);
        };
      expect(foo).toThrow(new Error('argument must be typeof string'));
 }) ;
    it('jest ulamkiem', function(){
       
    expect(getRawNumberFromCSSUnit('1.4px')).toBe(1.4); 
 }) ;
    
    /**
   * List of missing test cases:
   * - test px, em, % values
   * - test integer and floating pint numbers (remember about 0.5 and .5 options)
   * - test non number strings
   * - test non string arguments
   */
});

describe('FizzBuzzNumber returns', function () {
  
      it('dzielnik nie jest liczba', function(){
          function fizz(){
             fizBuzzNumber('dupa'); 
          }
    expect(fizz).toThrow(new Error('argument must be typeof number')); 
 }) ;
 
       it('wynik z dzielenia zawiera liczbe ', function(){
         
    expect(fizBuzzNumber(15)).toEqual('fizzbuzz'); 
 }) ;
 
 
    /**
   * List of missing test cases:
   * - test far all possible return options (remember about integers and floating point numbers as arguments)
   * - test for non number arguments
   */
});

describe('Password validator returns', function () {
    
     it('password spelnia wymagania', function(){
    
     expect(passwordValidator('DupaCycki01')).toBe(true); 
 });
      it('password nie spelnia wymagan (za krotki)', function(){
    
     expect(passwordValidator('Dupa')).toBe(false); 
 });
 
  it('password nie spelnia wymagan (nie zawiera liczb)', function(){
    
     expect(passwordValidator('DupaCycki')).toBe(false); 
 });
   it('password nie spelnia wymagan (nie zawiera wielkich liter)', function(){
    
     expect(passwordValidator('dupacycki01')).toBe(false); 
 });
  /**
   * List of missing test cases:
   * - remember about wrong argument type
   * - valid password need to have >= 5 characters
   * - valid password needs at least 1 uppercase char, 1 lowercase char and 1 integer char
   * - password cannot have spaces inside
   * - password can have special characters
   * - remember about test cases for invalid passwords
   */
});

describe('sorter correctly sorts number by', function () {
  /**
   * List of missing test cases:
   * - remember about wrong argument type
   * - use spies for dependent methods
   * - remember about all conditional options
   */
});

