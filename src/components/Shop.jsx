import React from 'react';
import { API_KEY, API_URL } from '../config';
import GoodList from './GoodsList';
import Preloader from './Preloader';
import ShoppingCart from './ShoppingCart';

export default function Shop() {

    const [goods, setGoods] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [order, setOrder] = React.useState([]);

    React.useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        }).then(response => response.json())
            .then(json => {
                setGoods(json.featured);
                setLoading(false);
            }
            )
    }, [])

    const addGoodsToCart = (name) => {
        setOrder((prevOrder) => {
            return prevOrder.includes(name) ? prevOrder : prevOrder.push(name)
        })
    }

    return (
        <>
            <main className='container content'>
                <ShoppingCart quantity={order.length}/>
                {loading ? <Preloader/> : <GoodList goods={goods} addGoodsToCart={addGoodsToCart}/>}
            </main>
        </>
    )

}