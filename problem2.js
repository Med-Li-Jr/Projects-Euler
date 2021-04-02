let prec2 = 0;
let prec1 = 1;
let actu;
let sum = 0;

do {
    actu = prec2 + prec1;
    prec2 = prec1;
    prec1 = actu;
    if (prec1 % 2 == 0) sum += prec1;
} while (prec1 <= 4000000);

console.log(sum)