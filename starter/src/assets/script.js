/* Create an array named products which 
you will use to add all of your product object literals 
that you create in the next step. */
let products = []

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

let product1 = {
  name:"Carton of Cherries",
  price:4.00,
  quantity:0,
  productId:1,
  image: "src/images/cherry.jpg"
};

let product2 = {
  name: "Carton of Strawberries",
  price: 5.00,
  quantity:0,
  productId:2,
  image: "src/images/strawberry.jpg"
};

let product3 = {
  name: "Bag of Oranges",
  price:10.00,
  quantity:0,
  productId:3,
  image: "src/images/orange.jpg"
};
products.push(product1,product2,product3)

/* Declare an empty array named cart to hold the items in the cart */
let cart = []

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
  let product = products.find(product => product.productId === productId);
  if (product) {
    let cartProduct = cart.find(item => item.productId === productId);
    if (cartProduct) {
      cartProduct.quantity++;
    } else {
      cart.push(product);
      let cartProduct = cart.find(item => item.productId === productId);
      cartProduct.quantity++;
    }

    console.log(`${product.name} added to the cart`,cart);
  } else {
    console.log('Product not found'),products;
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId){
  let cartProduct = cart.find(item => item.productId === productId);
  if (cartProduct){
    cartProduct.quantity++;
  } 
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId){
  const cartIndex = cart.findIndex(item => item.productId === productId);
  if (cartIndex !== -1){
    let cartProduct = cart.find(item => item.productId === productId);
    cartProduct.quantity--;
    if (cartProduct.quantity === 0){
      cart.splice(cartIndex,1)
    }
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId){
  let cartProduct = cart.find(item => item.productId === productId);
  if (cartProduct){
    const cartIndex = cart.findIndex(item => item.productId === productId);
    cartProduct.quantity = 0
    cart.splice(cartIndex,1)
  }else{
    console.log(`${product.name} not in cart`);
  }
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal() {
  let total = 0;
  
  cart.forEach(item => {
    total += item.price * item.quantity;
  });
  
  return total;
}

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart(){
  cart.splice(0, array.length);
}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
let balance = 0
function pay(amount) {

  if (amount < 0) {
    console.log("Invalid amount. Please provide a non-negative number.");
    return 0;
  }

  let total = cartTotal();

  if (amount > balance){
    balance = amount - total
  }else{
  balance = total - amount;
  }
  
  switch (true) {
    case balance < 0:
      console.log(`Remaining balance: $${Math.abs(balance)}`);
      return balance;
    case balance > 0:
      console.log(`Amount to be returned: $${Math.abs(balance)}`);
      return balance;
    default:
      console.log("Payment is exact. No balance or return needed.");
      return 0;
  }
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/
//Split payments so that if total is not paid amount is updated instead of reset

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart}
   /* Uncomment the following line if completing the currency converter bonus */
   // currencop
// }
