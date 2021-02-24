import React from 'react';
import GoodsItem from './GoodsItem';

export default function GoodsList(props) {

    const {goods = [], addGoodsToCart} = props;

    if(!goods.length) {
        return <h3>There is nothing to goods</h3>
    }

    return(
        <>
            <div className="goods">
                {goods.map(g => {
                    return <GoodsItem key={g.id} {...g} addGoodsToCart={addGoodsToCart}/>
                })}
            </div>
        </>
    )

}