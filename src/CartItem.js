import React from "react";

class CartItem extends React.Component {
  render() {
    // Destructuring so that we don't have to write this.state.XYX every time, instead we can just write XYZ
    const { title, price, qty } = this.props.product;

    // for the functionality of the buttons
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } =
      this.props;

    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} alt="" />
        </div>

        <div className="right-block">
          {/* <div style={{ fontSize: 40, color: "red" }}>{this.state.title}</div> */}
          <div style={{ fontSize: 40, color: "red" }}>{title}</div>

          <div style={{ color: "blue", fontSize: 30 }}>Rs {price}</div>

          <div style={{ color: "red", fontSize: 30 }}>Qty:{qty}</div>

          <div className="cart-item-action">
            {/* Buttons */}
            <img
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
              alt="plus-icon"
              // handling the click event
              // here we haven't written this everwere coz we have already destructured it
              onClick={() => onIncreaseQuantity(product)}
            />

            <img
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/1828/1828899.png"
              alt="minus-icon"
              onClick={() => {
                onDecreaseQuantity(product);
              }}
            />

            <img
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/484/484611.png"
              alt="del-icon"
              onClick={() => onDeleteProduct(product.id)}
            />
          </div>
        </div>
      </div>
    );
  }
}

// css style for the respective section
const styles = {
  image: {
    height: 210,
    width: 210,
    backgroundColor: "#a28599",
    borderRadius: "15%",
  },
};

// exporting so that it can be imported
export default CartItem;
