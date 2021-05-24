/* manage bottons and total price */

let bagPrice = 54.99;
let shoesPrice = 74.99;
let shippingPrice = 19;

bagQuantity = 1;
shoesQuantity = 1;


let decrementFirst = () => {
    if (bagQuantity > 1) {
        document.getElementById('item1-quantity').stepDown();
        bagQuantity--;
        calcTotal();
    }

};
let incrementFirst = () => {
    document.getElementById('item1-quantity').stepUp();
    bagQuantity++;
    calcTotal();
};
let decrementSecond = () => {
    if (shoesQuantity>1) {
        document.getElementById('item2-quantity').stepDown();
        shoesQuantity--;
        calcTotal();
    }

};
let incrementSecond = () => {
    document.getElementById('item2-quantity').stepUp();
    shoesQuantity++;
    calcTotal();
};

let calcTotal = () => {
    let totalNode = document.getElementById('total-all');
    let totalAmount = (bagPrice * bagQuantity + shoesPrice * shoesQuantity) + shippingPrice;
    totalNode.innerHTML = '$' + totalAmount.toFixed(2);
}


