// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional

let products = [
    {
        id: 1,
        name: "cooking oil",
        price: 10.5,
        type: "grocery",
        offer: {
            number: 3,
            percent: 20,
        },
    },
    {
        id: 2,
        name: "Pasta",
        price: 6.25,
        type: "grocery",
    },
    {
        id: 3,
        name: "Instant cupcake mixture",
        price: 5,
        type: "grocery",
        offer: {
            number: 10,
            percent: 30,
        },
    },
    {
        id: 4,
        name: "All-in-one",
        price: 260,
        type: "beauty",
    },
    {
        id: 5,
        name: "Zero Make-up Kit",
        price: 20.5,
        type: "beauty",
    },
    {
        id: 6,
        name: "Lip Tints",
        price: 12.75,
        type: "beauty",
    },
    {
        id: 7,
        name: "Lawn Dress",
        price: 15,
        type: "clothes",
    },
    {
        id: 8,
        name: "Lawn-Chiffon Combo",
        price: 19.99,
        type: "clothes",
    },
    {
        id: 9,
        name: "Toddler Frock",
        price: 9.99,
        type: "clothes",
    },
];

let cart = [];
let cartList = [];
let total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    //--- FOR OF----//

    // for(const product of products){
    //     if(product.id === id){
    //        cartList.push(product)
    //     }
    // }


    const product = products.find((prod) => prod.id === id);
    cartList.push(product);

    console.log('Cart List:', cartList);
    generateCart()
}

// Exercise 2
function cleanCart() {
    cart = []
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array


    // cartList.forEach((prod) => 
    //     total += prod.price);


    // cartList.map(prod => {
    //     total += prod.price})


    //  total = cartList.reduce((acc, curr) => {
    //     return acc + curr.price
    // }, 0)

    for (i = 0; i < cartList.length; i++) {
        total += (cartList[i].price)
    }

    //    console.log('withOutDiscount', total);

}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart,
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    // Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.


    // for (const prod of cartList) {

    //     if (cart.includes(prod)) {
    //         prod.quantity += 1
    //         product.subtotal += product.price
    //     } else {
    //         cart.push(prod)
    //         prod.quantity = 1
    //         product.subtotal = product.price
    //     }
    // }
    cart = [];
    for (let i = 0; i < cartList.length; i++) {
        const product = cartList[i]
        const foundProduct = cart.find((prod) =>
            prod.id === product.id)

        if (foundProduct) {
            product.quantity += 1
            product.subtotal += product.price

        } else {
            product.quantity = 1
            product.subtotal = product.price
            cart.push(product)
        }
    }
    console.log('this is the cart', cart);
    applyPromotionsCart()
    calculateTotal()
    printCart()
}


// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    // for( let i =0; i < cartList.length; i++){

    //      if(cartList[i].id === 1 && cartList[i].quantity > 3){
    //         cartList[i].price = 10
    //         cartList[i].reducedPrice = cartList[i].price * cartList[i].quantity
    //      }

    //      else if(cartList[i].id === 3 && cartList[i].quantity > 4){
    //         const cupCakePrice = (cartList[i].price /3)*2
    //        cartList[i].pricewithDiscount = cupCakePrice.toFixed(2)
    //        cartList[i].reducedPrice = (cartList[i].pricewithDiscount * cartList[i].quantity).toFixed(2)

    //      }
    // }

    cart.forEach(prod => {
        if (prod.id === 1 && prod.quantity > 3) {
            prod.price = 10
            prod.subtotalWithDiscount = prod.price * prod.quantity

        } else if (prod.id === 3 && prod.quantity > 10) {
            const cupCakePrice = (prod.price / 3) * 2
            prod.pricewithDiscount = cupCakePrice.toFixed(2)
            prod.subtotalWithDiscount = (prod.pricewithDiscount * prod.quantity).toFixed(2)
        }

    })
    console.log('promotion', cart)
}


// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    let cartCounter = 0
    let tabList = []

    cart.forEach(prod => {

        cartCounter += prod.quantity
        tabList.push(

            `
            <tr>
            <th scope="row">$${prod.name}</th>
                <td>$${prod.price}</td>
                <td>$${prod.quantity}</td>
                <td>$${prod.subtotal}</td>
                <td>$${prod.subtotalWithDiscount ? prod.subtotalWithDiscount : prod.subtotal}</td>
                
            </tr>
            `)
    });

    //Selecting elements

    document.getElementById("cart_list").innerHTML = tabList
    document.getElementById('count_product').innerHTML = cartCounter
    document.getElementById('total_price').innerHTML = total.toFixed(2)

}

function cleanCart() {

    document.getElementById("cart_list").innerHTML = ' '
    document.getElementById('total_price').innerHTML = '0'


}




// ** Nivell II **
let cart2 = []

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.

}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal() {
    console.log("Open Modal");
    printCart();
}
