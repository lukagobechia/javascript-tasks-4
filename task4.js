const cart = {
  items: [{ id: 1, name: "iPhone", quantity: 1, price: 1200 }],
  totalPrice: 1200,
  numberOfItems: 1,
};

function addItems(Id, Name, Quantity, Price) {
  cart.items.push({
    id: Id,
    name: Name,
    quantity: Quantity,
    price: Price,
  });
  cart.totalPrice = totalpriceCalc(cart);
  cart.numberOfItems = cart.items.length;
  return cart;
}

function removeItems(id) {
  const updatedItems = cart.items.filter((i) => i.id !== id);
  cart.items = updatedItems;
  return cart.items;
}

function totalpriceCalc(obj) {
  return obj.items.reduce((tot, curr) => {
    return (tot += curr.price);
  }, 0);
}

removeItems(1);
addItems(2, "iPhone 13 pro", 4, 4000);
addItems(3, "iPhone 14 pro", 4, 5000);
console.log(cart);
console.log(
  `number of items: ${cart.numberOfItems}\ntotal price: ${cart.totalPrice}`
);
