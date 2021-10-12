import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./shop.css"

const Shop = () => {
    // you can use multipul state
    // useState for product
    const [product, setProduct]=useState([]);

    // useState for cart
    const [cart, setCart]=useState([]);

    // for display search item in UI
    const [displayProduct, setDisplayProduct]=useState([]);
    
    // useEffect fake data
    useEffect(()=>{
        // if your data have your computer any foulder you should use same like featch

        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>{
            setProduct(data)
            // inashial load tata || before search didn't show any data in UI
            setDisplayProduct(data)
        
        });

    },[])
    // useEffect for get data from localStorage for cart 
    useEffect(()=>{
        // condition for data useState [] undifined
        if(product.length){
            const saveCart=getStoredCart();

            // console.log(saveCart);
            // create custom empty array
            const storCart=[];
            for(const key in saveCart){
                // console.log(key);
                // console.log(key, saveCart[key]);

                // coll from  useState for product 
                // call for find object by fprduct key
                const addedProduct =product.find(product=>product.key === key)
                // console.log(product);
                // console.log(key, addedProduct);

                // condition for
                if(addedProduct){
                    const quantity=saveCart[key];
                    // 
                    addedProduct.quantity=quantity;
                    // console.log(addedProduct);

                    // push data in create custom empty array
                    storCart.push(addedProduct);
                    // console.log(storCart);

                }

                


            }
            // set data in useState
            setCart(storCart);

        }
        // [product ] is a depecdenci for one time call ||| moduul= 49-4 (advanced) Display local storage cart to the UI
    },[product])

    // event handeler Add to cart
    // here product is a parameter
    // here product parameter by  access data from component product.js on onclick
    const handelAddToCart=(product)=>{ 
        // console.log(product.name);
        // console.log('product click hoica');

        // copy defould cart value  & set new by parameter
       
        // count countity number newCart
        const newCart=[...cart, product];
        setCart(newCart);
        

        // from fackedb.js &&& save to local storage (for now)
        addToDb(product.key);

    }
    // for search bar
    const handleSearch =event=>{
        const searchText=event.target.value;

        // for search value
        // product from data useEffect
        const matchProduct = product.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()));
        // for display search item in UI
        setDisplayProduct(matchProduct);
        // console.log(matchProduct.length);
        
    }

    return (
        // declear array for 2 div didn't return in javascript
        [
            // ====================================
            // search bar
            // search bar
            <div className="search-container">
                <input type="text"
                onChange={handleSearch}
                 placeholder='Search Your Product Here' />
                
            </div>,
            // ====================================
            <div className="shpo-container">
            <div className="product-container">
                    {/* <h3>Product: {product.length}</h3> */}
                    {
                    // if you need this map you only remove (displayProduct) 
                    // product.map(productItems =><Product 
                    displayProduct.map(productItems =><Product 
                        // this key is product unic key. declear here for ignore browser worning
                        key={productItems.key}
                        // call (handelAddToCart) function for access data 
                        handelAddToCart={handelAddToCart}
                        product={productItems}></Product>)  
                    }
            </div>
            <div className="cart-container">
                {/* here daynamic cart is from useState cart */}
                <Cart cart={cart}></Cart>
                {/* <h3>Oredr Summery</h3>
                <h5>Items Order: {cart.length}</h5> */}

            </div>
                
            </div>
        ]
        
    );
    
};

export default Shop;