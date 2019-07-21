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

export const clearItemFromCart = (currentItems, itemToClear) => {
  const existingItem = currentItems.find(
    cartItem => cartItem.id === itemToClear.id,
  );

  if (existingItem) {
    return currentItems.filter(cartItem => cartItem.id !== itemToClear.id);
  }

  return [...currentItems];
};

export const removeItemFromCart = (currentItems, itemToRemove) => {
  const existingItem = currentItems.find(
    cartItem => cartItem.id === itemToRemove.id,
  );

  if (existingItem.quantity === 1) {
    return currentItems.filter(cartItem => cartItem.id !== itemToRemove.id);
  }

  return currentItems.map(cartItem =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem,
  );
};
