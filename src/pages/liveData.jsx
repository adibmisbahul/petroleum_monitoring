import React, { useState } from "react";
import DashboardLayout from "../layouts/dashboardLayout";

export default function LiveData() {
  const [product, setProduct] = useState([
    { id: 1, title: "americano", harga: 20000 },
    { id: 2, title: "japanese", harga: 35000 },
    { id: 3, title: "burger", harga: 18000 },
    { id: 4, title: "pizza", harga: 40000 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (id, title, price) => {
    setCart((prevCart) => {
      console.log(prevCart);
      const exitsItem = prevCart.find((item) => item.id === id);
      console.log(exitsItem);
      if (exitsItem) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...prevCart, { id: id, title: title, price: price, qty: 1 }];
    });
  };

  const totalCart = cart.reduce((total, value) => {
    return total + value.price * value.qty;
  }, 0);

  return (
    <DashboardLayout>
      <div className="" style={{ display: "flex", gap: "1vw" }}>
        <div style={{}}>
          {product.map((item) => {
            return (
              <div className="" style={{ fontSize: "xx-small" }}>
                <h1>{item.title}</h1>
                <h1>{item.harga}</h1>
                <button
                  onClick={() => addToCart(item.id, item.title, item.harga)}
                ></button>
              </div>
            );
          })}
        </div>
        <div style={{ fontSize: "xx-small" }}>
          {cart.map((item) => {
            return (
              <div style={{ display: "flex", gap: "5px" }}>
                <h1>{item.title}</h1>
                <h1>{item.price}</h1>
                <h1>{item.qty}</h1>
              </div>
            );
          })}
          <h1>total:{totalCart}</h1>
        </div>
      </div>
    </DashboardLayout>
  );
}
