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
//addProductToCart should get the correct product based on the productId 
  let curProduct = products.find(product => product.productId === productId);
  
  if (curProduct){
    const cartItem = cart.find(item => item.productId === productId);
    if (cartItem){
      cartItem.quantity++;
    }else{
      cart.push({ ...curProduct, quantity: 1 }); 
  }
}
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  // Find the product based on the productId
  const cartItem = cart.find(item => item.productId === productId);

  // If product exists, increase its quantity
  if (cartItem) {
    cartItem.quantity++;
    console.log(`Quantity of ${cartItem.name} increased to ${cartItem.quantity}`);
  } else {
    console.log('cartItem not found');
  }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId){
  
  const cartItem = cart.find(item => item.productId === productId);
  console.log(cartItem)
  const cartItemIndex = cart.findIndex(product => product.productId === productId);

  // // If product exists, decrease its quantity
  // if (productIndex !== -1) {
  //   const product = products[productIndex];

  //   if (product.quantity > 0) {
  //     product.quantity--;

  //     if (product.quantity === 0) {
  //       products.splice(productIndex, 1);
  //       console.log(`Product ${product.name} removed from the cart`);
  //     } else {
  //       console.log(`Quantity of ${product.name} decreased to ${product.quantity}`);
  //     }
  //   } else {
  //     console.log(`Product ${product.name} is already out of stock`);
  //   }
  // } else {
  //   console.log('Product not found');
  // }
}
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

/* Create a function called emptyCart that empties the products from the cart */

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


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
  decreaseQuantity}
  //  removeProductFromCart,
  //  cartTotal,
  //  pay, 
  //  emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currencop
// }
