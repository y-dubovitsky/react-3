import React from 'react';
import BasketItem from './BasketItem';

export default function BasketList(props) {

    const { order = [], toggleBasketVisible, deleteGoodsFromCart } = props;

    const totalCost = () => {
        let initialValue = 0;
        let sum = order.reduce(function (accumulator, currentValue) {
            return accumulator + (currentValue.count * currentValue.price);
        }, initialValue)
        return sum;
    }

    return (
        <>
            <div className="collection basket-list">
                <a className="collection-item active">Ваша Корзина:
                <span className="secondary-content pointer" onClick={toggleBasketVisible}><i className="material-icons">close</i></span>
                </a>
                <ul className="collection with-header">
                    {order.length !== 0 ?
                        order.map(item => {
                            return <BasketItem key={item.id} item={item} deleteGoodsFromCart={deleteGoodsFromCart} />
                        }) : <li className="collection-item avatar">There is nothing... yet</li>
                    }
                </ul>
                <a className="collection-item active">Общая Стоимость:
                <span className="secondary-content"><i>{totalCost()}$</i></span>
                </a>
            </div>
        </>
    )
}