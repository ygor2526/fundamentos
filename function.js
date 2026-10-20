function bhaskara(a, b, c, callbackdividir) {
    const x=b*(-1)+ Math.sqrt (b**2-4ac);
    const total = callbackdividir (x,(2*a));
    return total;
};
function dividir (a, b) {
    return a/b;
};
console.log ('X1 = ', bhaskara(-1, 6, 7, dividir));
function bhaskara2(a, b, c, callbackdividir) {
    const x=b*(-1)- Math.sqrt (b**2-4ac);
    const total = callbackdividir (x,(2*a));
    return total;
};
function dividir (a, b) {
    return a/b;
};
console.log ('X2 = ', bhaskara2(-1, 6, 7, dividir));
    
