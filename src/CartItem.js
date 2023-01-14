import React from "react";

class CartItem extends React.Component{
    render() {
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize:40,color:'red'}}>Phone</div>
                    
                    <div style={{color:'blue',fontSize:30}}>Rs 1000</div>

                    <div style={{color:'red',fontSize:30}}>Qty:1</div>
                    <div className="cart-item-action">
                        {/* Buttons */}
                    </div>
                </div>


            </div>
        )
    }
}

const styles ={
    image: {
        height: 300,
        width: 300,
        backgroundColor: 'red',
        borderRadius: 30
    }
}



export default CartItem;