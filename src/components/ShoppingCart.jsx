import React from 'react';

export default function shoppingCart(props) {

    const {quantity = 0} = props;

    return(
        <div className="cart grey lighten-4">
            <i className="material-icons">shopping_cart</i>
            {quantity === 0 ? <span className="">{quantity}</span> : 0}
        </div>
    )

}