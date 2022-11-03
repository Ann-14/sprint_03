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
let totalRefactor = 0;

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

  console.log("Cart List:", cartList);
  generateCart();
}

// Exercise 2
function cleanCart() {
  cart = [];
  document.getElementById("cart_list").innerHTML = " ";
  document.getElementById("count_product").innerHTML = "0";
  document.getElementById("total_price").innerHTML = "0";
  subtotal = 0;
  totalRefactor = 0;
  total = 0;
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
    total += cartList[i].price;
  }
}

// Exercise 4
function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

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
    const product = cartList[i];
    const foundProduct = cart.find((prod) => prod.id === product.id);

    if (foundProduct) {
      product.quantity += 1;
      product.subtotal += product.price;
    } else {
      product.quantity = 1;
      product.subtotal = product.price;
      cart.push(product);
    }
  }
  applyPromotionsCart();
  calculateTotal();
  printCart();
}
// Exercise 5
let hasDiscount = false;
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"

  // for( let i =0; i < cart.length; i++){

  //      if(cart[i].id === 1 && cart[i].quantity > 3){
  //         cart[i].price
  //         cart[i].reducedPrice = cart[i].price * cart[i].quantity
  //      }

  //      else if(cart[i].id === 3 && cart[i].quantity > 4){
  //         const cupCakePrice = (cart[i].price /3)*2
  //        cart[i].pricewithDiscount = cupCakePrice.toFixed(2)
  //        cart[i].reducedPrice = (cart[i].pricewithDiscount * cart[i].quantity).toFixed(2)

  //      }
  // }
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === 1 && cart[i].quantity >= 3) {
      cart[i].subtotalWithDiscount = cart[i].quantity * 10;
      hasDiscount = true;
    } else if (cart[i].quantity < 3) {
      cart[i].subtotalWithDiscount = 0;
      hasDiscount = false;
    } else if (cart[i].id === 3 && cart[i].quantity > 10) {
      const cupCakePrice = (cart[i].price / 3) * 2;
      cart[i].pricewithDiscount = cupCakePrice.toFixed(2);
      cart[i].subtotalWithDiscount = (
        cart[i].pricewithDiscount * cart[i].quantity
      ).toFixed(2);
    } else if (cart[i].quantity < 4) {
      cart[i].subtotalWithDiscount = 0;
    } else {
      cart[i].subtotalWithDiscount = 0;
    }
  }
  // cart.forEach(prod => {
  //     if (prod.id === 1 && prod.quantity >= 3) {
  //         prod.price = 10
  //         prod.subtotalWithDiscount = prod.price * prod.quantity
  //         hasDiscount = true

  //     }else{prod.price = 10.5}

  //      if (prod.id === 3 && prod.quantity > 10) {
  //         const cupCakePrice = (prod.price / 3) * 2
  //         prod.pricewithDiscount = cupCakePrice.toFixed(2)
  //         prod.subtotalWithDiscount = (prod.pricewithDiscount * prod.quantity).toFixed(2)
  //     }

  // })
}
// Exercise 6
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  let cartCounter = 0;
  let tabList = [];
  cart.forEach((prod) => {
    cartCounter += prod.quantity;
    tabList.push(
      `
            <tr>
            <th scope="row">${prod.name}</th>
                <td>$${prod.price}</td>
                <td>${prod.quantity}</td>
                <td>$${prod.subtotal}</td>
                <td>$${prod.subtotalWithDiscount
        ? prod.subtotalWithDiscount
        : prod.subtotal
      }</td>   
             </tr> `
    );
  });

  //Selecting elements
  document.getElementById("cart_list").innerHTML = tabList;
  document.getElementById("count_product").innerHTML = cartCounter;
  document.getElementById("total_price").innerHTML = totalRefactor.toFixed(2);
}
// ** Nivell II **
// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.

  // for (const prod of products) {
  //     if (prod.id === id) {
  //         if (cart2.includes(prod)) {
  //             prod.quantity += 1
  //         }
  //         else {
  //             cart2.push(prod)
  //             prod.quantity = 1   }
  //     }
  // }

  products.forEach((prod) => {
    if (prod.id === id) {
      if (cart.includes(prod)) {
        prod.quantity += 1;
        prod.subtotal = prod.price * prod.quantity;
      } else {
        cart.push(prod);
        prod.quantity = 1;
        prod.subtotal = prod.price;
      }
    }
  });
  applyPromotionsCart();
  calculateTotalRefactor();
  printCart();
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array

  cart.forEach((prod) => {
    if (prod.id === id) {
      prod.quantity--;
      prod.subtotal = prod.quantity * prod.price;
      prod.subtotalWithDiscount = prod.quantity * prod.pricewithDiscount;
      printCart();
      calculateTotalRefactor();

      if (prod.quantity === 0) {
        cart = cart.splice(1);
      }
    }
  });
  if (cart.length === 0) {
    document.getElementById("cart_list").innerHTML = " ";
  }
}
function open_modal() {
  calculateTotalRefactor();
  applyPromotionsCart();
  printCart();
}

function calculateTotalRefactor() {
  totalRefactor = 0;
  totalRefactor = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);
  applyPromotionsCart();
  printCart();
}
