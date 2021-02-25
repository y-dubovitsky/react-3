import React from 'react';

export default function BasketItem(props) {

    const { item, deleteGoodsFromCart } = props;

    return (
        <>
            <li className="collection-item avatar">
                <img src={item.full_background} alt="" className="circle" />
                <span className="title">{item.name}</span>
                <p>{item.price} $
                    <br />
                    Count: {item.count}
                </p>
                <span
                    className="secondary-content pointer"
                    onClick={() => deleteGoodsFromCart(item.id)}>
                    <i className="material-icons">delete</i>
                </span>
            </li>
        </>
    )

}