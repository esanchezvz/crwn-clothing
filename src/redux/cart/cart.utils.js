export const addItemToCart = (currentItems, newItem) => {
  const existingItem = currentItems.find(
    cartItem => cartItem.id === newItem.id,
  );

  if (existingItem) {
    return currentItems.map(cartItem =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
  }

  return [...currentItems, { ...newItem, quantity: 1 }];
};
