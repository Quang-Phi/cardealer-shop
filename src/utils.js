export const config = {
  API_URL: "https://63573b7d2712d01e140435a9.mockapi.io",
};

export const handleOpen = (a, setA) => {
  if (!a) {
    setA(true);
    return;
  }
  setA(false);
};

export const handleTabActive = (setActiveTab, id) => {
  setActiveTab(id);
};

export const handleAddToCart = (cart, setCart, product) => {
  const newCart = [...cart];

  if (checkInCart) {
    alert("added!!");
    return;
  }
  const newCartProduct = {
    ...product,
    quantity: 1,
  };

  newCart.push(newCartProduct);

  setCart(newCart);
  alert("add success!!");
};

export const checkInCart = (cart, product) => {
  const productIndex = cart.findIndex((productElement) => {
    return productElement.id === product.id;
  });
  if (productIndex !== -1) {
    return true;
  }
};

export const handleRemoveCartItem = (cart, setCart, product) => {
  const newCart = [...cart];

  const productIndex = newCart.findIndex((productElement) => {
    return productElement.id === product.id;
  });
  if (productIndex !== -1) {
    if (window.confirm("Remove this Item?")) {
      newCart.splice(productIndex, 1);
      setCart(newCart);
      return;
    }
  }
  setCart(newCart);
};
