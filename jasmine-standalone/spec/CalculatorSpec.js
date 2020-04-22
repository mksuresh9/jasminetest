describe("Calculator operations", function() {
    var calc;
 

    beforeEach(function() {
        calc = new calculator();
    });
 
    describe("when calc is used to peform basic math operations", function(){
         

        it("should be able to calculate sum of 3 and 5", function() {
            expect(calc.sum(3,5)).toEqual(8); 
            expect(calc.sum(3,5)).toBe(8); 
        });

        it("should be able to calculate sub of 3 and 5", function() {
            expect(calc.substract(3,5)).toEqual(-2);
            expect(calc.substract(3,5)).not.toEqual(2);

        });
 
    
        it("should be able to multiply 10 and 40", function() {
            expect(calc.multiply(10, 40)).toEqual(400);
            expect(calc.multiply(10, 40)).not.toBe("400");
            
        });

        it("should be able to calculate divide of 6 and 2", function() {
            expect(calc.divide(6,2)).toEqual(3);
            expect(calc.divide(5,2)).not.toEqual(12);

        });
         
        
         
    });
});