function singara(taka) {
    console.log('Given ', taka);
    console.log('Give me some bread');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}
var money = 250;
var sing = singara(money);
console.log('ai nen singara', sing);