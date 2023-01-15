import React from "react";

// we made it a function coz it doesn't has a state
const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <h1 style={{ color: "white", padding: 40 }}>MY CART</h1>
      <div style={styles.cartIconContainer}>
        <img
          // Adding cart icon in the navbar
          style={styles.cartIcon}
          src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png"
          alt="cart-icon"
        />
        {/*To count the no of items in the cart */}
        <span style={styles.cartCount}> {props.count} </span>
      </div>
    </div>
  );
};

const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20,
  },
  nav: {
    height: 70,
    background: "orangered",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartIconContainer: {
    position: "relative",
  },
  cartCount: {
    background: "white",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 0,
    top: -9,
  },
};

export default Navbar;
