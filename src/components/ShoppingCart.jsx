import React from 'react';
import {Context} from '../context';

export default function shoppingCart(props) {

    const {quantity = 0} = props;
    const {toggleBasketVisible} = React.useContext(Context);

    return(
        <div className="cart grey lighten-4" onClick={() => toggleBasketVisible()}>
            <i className="material-icons">shopping_cart</i>
            {quantity === 0 ? 0 : <span className="">{quantity}</span>}
        </div>
    )

}