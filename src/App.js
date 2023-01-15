import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    // to get the state
    super();
    this.state = {
      // created an array of products
      products: [
        {
          title: "Phone",
          price: 1500,
          qty: 1,
          img: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          id: 1,
        },
        {
          title: "Watch",
          price: 1000,
          qty: 5,
          img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2hlc3xlbnwwfHwwfHw%3D&w=1000&q=80",
          id: 2,
        },
        {
          title: "Keyboard",
          price: 800,
          qty: 3,
          img: "https://images.unsplash.com/photo-1563191911-e65f8655ebf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          id: 3,
        },
      ],
    };
  }
  // handling click on the + button
  handleIncreaseQuantity = (product) => {
    // getting the state
    const { products } = this.state;
    // finding the index of the product affected from the products array
    const index = products.indexOf(product);
    // performing the operation
    products[index].qty += 1;
    // setting the state and updating the prev products array with the modified one
    this.setState({
      // same as products: products
      products: products,
    });
  };

  // handling click on - button
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    var index = products.indexOf(product);
    // to ensure that qty does not become negative
    if (products[index].qty > 0) {
      products[index].qty -= 1;
      this.setState({
        products,
      });
    }
  };

  // handling click on delete button. We are using id to identify the product
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    // finding out the products other than the one to be deleted
    // this is done using the filter function
    const items = products.filter((item) => item.id !== id);
    // updating the products array with the items array which does not contain the deleted product
    this.setState({
      products: items,
    });
  };

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    });

    return cartTotal;
  };

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{ paddingLeft: 40, fontSize: 40, color: "red" }}>
          TOTAL: ₹{this.getCartTotal()}{" "}
        </div>
      </div>
    );
  }
}

export default App;
