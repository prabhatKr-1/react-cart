import React from "react";

class CartItem extends React.Component {
  // Adding state
  constructor() {
    super();
    this.state = {
      title: "Phone",
      price: 1000,
      qty: 1,
      img: "",
    };
  }
  increaseQuantity = () => {
    // Using setState to change the state, there are 2 ways to do this
    // Form 1 -> Used when the prev state is not required
    // this.setState({
    //   qty: this.state.qty + 1,
    // });
    // Form 2 -> Used when the prev state is required
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    });
  };

  decreaseQuantity = () => {
    if (this.state.qty > 0) {
      this.setState((prevState) => {
        return {
          qty: prevState.qty - 1,
        };
      });
    }
  };
  delButton = () => {
    this.setState({
      qty: 0,
    });
  };
  render() {
    // Restructuring so that we don't have to write this.state.XYX every time, instead we can just write XYZ
    const { title, price, qty } = this.state;

    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} alt =""/>
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
              onClick={this.increaseQuantity}
            />
            <img
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/1828/1828899.png"
              alt="minus-icon"
              onClick={this.decreaseQuantity}
            />
            <img
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/484/484611.png"
              alt="del-icon"
              onClick={this.delButton}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 300,
    width: 300,
    backgroundColor: "red",
    borderRadius: 30,
  },
};

export default CartItem;
