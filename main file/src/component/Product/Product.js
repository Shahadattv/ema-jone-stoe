import React from 'react';
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';

const Product = (props) => {

    // react fontAwsome by install
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />


    // console.log(props);
    const {product, name, price, img, seller, stock, star}=props.product;

    return (
        <div className="product-items">
            <div>
                <img src={img} alt="" srcset="" />
                
            </div>
            <div>
                <h4 className='pd-name'>{name}</h4>
                <p><small>By: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>Only {stock} left in stock - Order soon </small></p>
                {/* FROM RATING INSTALL && IMPORT */}
                <Rating 
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                <br/>
                {/* this (props.handelAddToCart)  call from shop js by props product js || also should be declear inside arrow function othrewise they will auto call */}
                {/* here (props.product) is  parameter for handelAddToCart function access by props  */}
                <button  onClick={()=>props.handelAddToCart(props.product)} className='btn-regular'>{cartIcon} Add to Cart</button>
            </div>
            
        </div>
    );
};

export default Product;