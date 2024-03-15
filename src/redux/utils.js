export const calculateTotal = (items) => {
    return items.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0);
  };