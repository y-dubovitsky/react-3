import React from 'react';

export default function shoppingCart(props) {

    const {toggleBasketVisible, quantity = 0} = props;

    return(
        <div className="cart grey lighten-4" onClick={() => toggleBasketVisible()}>
            <i className="material-icons">shopping_cart</i>
            {quantity === 0 ? 0 : <span className="">{quantity}</span>}
        </div>
    )

}