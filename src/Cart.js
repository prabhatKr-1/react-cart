import React from "react";
import CartItem from "./CartItem";
class Cart extends React.Component {
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
          img: "",
          id: 1,
        },
        {
          title: "Watch",
          price: 1000,
          qty: 5,
          img: "",
          id: 2,
        },
        {
          title: "Keyboard",
          price: 800,
          qty: 3,
          img: "",
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
      products,
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

  render() {
    // getting the state
    const { products } = this.state;
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
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
              onDeleteProduct={this.handleDeleteProduct}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
