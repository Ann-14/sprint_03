// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional

// Selecting elements

var products = [
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

var btnAdd = document.getElementsByClassName("btn-outline-dark");

for (const btn of btnAdd) {
    btn.addEventListener("click", function onClick() {
        console.log("box clicked");
    });
}

// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    // FOR OF

    // for(const product of products){
    //     if(product.id === id){
    //         cartList.push(product)
    //         console.log(product);
    //         console.log(cartList);
    //     }
    // }

    const product = products.find((prod) => prod.id === id);
    cartList.push(product);
    console.log(product);
    console.log(cartList);
    calculateTotal(cartList);
}

// Exercise 2
function cleanCart() {
    cartList = [];
    console.log("cart emptied");
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    // let total = 0;
    // for (const prod of cartList) {
    //     total += prod.price
    // }
    // console.log(`the total price is ${total}`);

    // cartList.forEach((prod) => {
    //     total += prod.price;
    // });
    // console.log(total);

    // cartList.map(prod => {
    //     total += prod.price
    // })
    // console.log(total);

    const total = cartList.reduce((acc, curr) => {
        return acc + curr.price
    }, 0)
    console.log(total);

    

    // const addKeyAndValue = (arr, key, value) => {
    //     arr.forEach(object => {
    //         object[key] = value
    //     })
    //     console.log(arr)
    //     return arr
    // }
    // addKeyAndValue(products, 'quantity', 'value')

}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart,
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    }

    // Exercise 5
    function applyPromotionsCart() {
        // Apply promotions to each item in the array "cart"
    }

    // Exercise 6
    function printCart() {
        // Fill the shopping cart modal manipulating the shopping cart dom
    }

    // ** Nivell II **

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
