describe("calculator",function() { 
    
  it("Should return the current value of all time", function () {
     expect(Calculator.currentVal).toBeDefined();
     expect(Calculator.currentVal).toEqual(0);  
  }); 

  it("should add numbers",function() {
     expect(Calculator.add(5)).toEqual(5); 
     expect(Calculator.add(5)).toEqual(10);  
  });         
   

});