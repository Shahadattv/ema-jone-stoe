import React from 'react';
import "./cart.css"

const Cart = (props) => {
    
    const {cart}=props;
    // console.log(cart);
    // calculate total price by loop

    // reduce function
    // const total =cart.reduce( (previousPrice, product) => previousPrice + product.price, 0 )

    // custom variable
    let totalQuantity=0;
    let total= 0;

    for(const product of cart){
        // condition for cart value NAN
        if(!product.quantity){
            product.quantity=1;
        }
        // product.quantity is original object 
        total= total+product.price*product.quantity;

        // from custom variable
        totalQuantity=totalQuantity+product.quantity;
    }
    // condition add= if totao=0;  Shiffing will 0
    const Shipping= total > 0 ? 15 : 0;
    // const Shipping=25;
    const tax=(total+Shipping)/100*10;
    const grandTotal= total+Shipping+tax;

    


    return (
        <div>
             <h3>Oredr Summery</h3>
             {/* <h5>Items Order: {props.cart.length}</h5> */}
             <h5>Items Order: {totalQuantity}</h5>
             
             <p>Total Price=  {total.toFixed(2)} </p>
             <p>Shipping=  {Shipping.toFixed(2)} </p>
             <p>Total Tax=  {tax.toFixed(2)} </p>
             <p>Grand Total=  {grandTotal.toFixed(2)} </p>

        </div>
    );
};

export default Cart;