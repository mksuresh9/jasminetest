calculator = function() {};
 
calculator.prototype.sum = function(num1, num2) {
        return num1 + num2;
}
 
calculator.prototype.substract = function(num1, num2) {
    return num1 - num2;
}
 
calculator.prototype.multiply = function(num1, num2) {
    return num1 * num2;
}
 
calculator.prototype.divide = function(num1, num2) {
    return num1 / num2;
}
 
calculator.prototype.average = function(num1, num2) {
    return (num1 + num2) / 2;
}


