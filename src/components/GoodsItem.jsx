import React from 'react';

export default function GoodsItem(props) {

    const { id, name, description, price, full_background, addGoodsToCart } = props;

    return (
        <>
            <div className="card" id={id}>
                <div className="card-image">
                    <img src={full_background} alt={name} />
                </div>
                <div className="card-content">
                    <span className="card-title">{name}</span>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <button className='btn blue lighten-1' onClick={() => addGoodsToCart(id, name, price, full_background)}>Купить</button>
                    <p className='right'>{price}$</p>
                </div>
            </div>
        </>
    )

}