var computer = {
    color: 'black',
    Storage: '500gb',
    price: 30000,
    processor: 'Intel 15'
}
// console.log(computer.processor);
var computerPrice = computer.price;
// console.log(computerPrice);
// computer.price = 25000;
// computer["price"] = 20000;
// console.log(computer);
computer[computerPrice] = 15000;
console.log(computer);