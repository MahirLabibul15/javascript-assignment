https://github.com/MahirLabibul15/javascript-assignment
function kilometerToMeter(kilo) {
    var result = kilo * 1000;
    return result;
}
const result = kilometerToMeter(5);
// console.log(result);



function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var totalPrice = watchPrice + laptopPrice + phonePrice;
    return totalPrice;
}
const budget = budgetCalculator(2, 1, 5);
// console.log(budget);



function hotelCost(days) {
    if (days <= 10) {
        var cost = days * 100;
    }
    else if (days <=  20){
        var cost = (10*100) + (days-10) * 80;
    }
    else{
        var cost = (10*100) + (10*80) + (days-20) * 50;
    }
    return cost;
}
var hotelPrice =  hotelCost(30);
// console.log(hotelPrice);



function megaFriend(array) {
    var longest= "";
    for (let i = 0; i < array.length; i++) {
        const word = array[i];
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
var array = ["Salam", "Jabbar", "Labibul", "Abul"];
var longest = megaFriend(array);
// console.log(longest);