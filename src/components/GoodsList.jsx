import React from 'react';
import GoodsItem from './GoodsItem';

export default function goodsList(props) {

    const {goods = []} = props;

    if(!goods.length) {
        return <h3>There is nothing to goods</h3>
    }

    return(
        <>
            <div className="goods">
                {goods.map(g => {
                    return <GoodsItem key={g.id} {...g}/>
                })}
            </div>
        </>
    )

}