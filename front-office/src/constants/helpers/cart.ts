export interface CartItem {
  id: number;
  quantity: number;
}

export interface InputCartItem {
  id: number;
  quantity?: number;
}

export const getCart = (): CartItem[] => {
  // Get cart from local storage
  const cart = localStorage.getItem('cart');
  // Return parsed cart or empty array
  return cart ? (JSON.parse(cart) as CartItem[]) : [];
};

export const addToCart = (item: InputCartItem, amount = 1): CartItem[] => {
  // Get cart
  const cart = getCart();

  // If amount is below 1, return the current cart.
  if (amount < 1) return cart;

  // Search for the item in the cart.
  const index = cart.findIndex((i: any) => i.id === item.id);

  // If we found the item, update the quantity.
  if (index !== -1) {
    // Set quantity if set
    if (item?.quantity) cart[index].quantity = item.quantity;
    // Otherwise add amount.
    else cart[index].quantity += amount;

    // If the item is not in the cart, add it.
  } else {
    // Set quantity if set.
    if (item?.quantity) cart.push({ ...item, quantity: item.quantity });
    // Otherwise set the quantity to the amount.
    else cart.push({ ...item, quantity: amount });
  }

  // Save the cart to local storage.
  localStorage.setItem('cart', JSON.stringify(cart));

  // Return the cart.
  return cart;
};

export const removeFromCart = (item: InputCartItem, amount = 0): CartItem[] => {
  // Get cart
  const cart = getCart();

  // Search for the item in the cart.
  const index = cart.findIndex((i: any) => i.id === item.id);
  // If we found the item, run actions
  if (index !== -1) {
    // Update the amount (or not if 0)
    cart[index].quantity -= amount;
    // If the quantity is below 1 or the amount is zero, remove the item.
    if (cart[index].quantity === 0 || amount === 0) cart.splice(index, 1);
  }

  // Save the cart to local storage.
  localStorage.setItem('cart', JSON.stringify(cart));

  // Return the cart.
  return cart;
};

export default [getCart, addToCart, removeFromCart];
