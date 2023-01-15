import React from "react";
import CartItem from "./CartItem";
// since state is moved to App.js, we made it a fn from a class
const Cart = (props) => {
  const { products } = props;
  return (
    <div className="cart">
      {products.map((product) => {
        return (
          <CartItem
            // using props
            product={product}
            // key so that the products can be identified uniquely
            key={product.id}
            // props for clicks on the respective buttons
            onIncreaseQuantity={props.onIncreaseQuantity}
            onDecreaseQuantity={props.onDecreaseQuantity}
            onDeleteProduct={props.onDeleteProduct}
          />
        );
      })}
    </div>
  );
};

export default Cart;
