import React from 'react';
import { API_KEY, API_URL } from '../config';
import GoodList from './GoodsList';
import Preloader from './Preloader';
import ShoppingCart from './ShoppingCart';
import BasketList from './BasketList';

export default function Shop() {

    const [goods, setGoods] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [order, setOrder] = React.useState([]);
    const [basketVisible, setBasketVisible] = React.useState(false);

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

    const addGoodsToCart = (id, name, price, full_background) => {
        const item = { id, name, price, full_background, count: 1 }

        if (!findObject(order, name)) {
            setOrder((prevOrder) => {
                return [...prevOrder, item];
            });
        } else {
            const index = order.findIndex(item => item.name === name);
            order[index].count++;
        }
        console.log(order);
    }

    const deleteGoodsFromCart = (id) => {
        const result = order.filter(item => item.id !== id);
        setOrder(result);
    }

    const toggleBasketVisible = () => {
        setBasketVisible(!basketVisible);
    }

    // Utils method
    const findObject = (array, name) => {
        return array.find(object => object.name === name) ? true : false
    }

    return (
        <>
            <main className='container content'>
                <ShoppingCart quantity={order.length} toggleBasketVisible={toggleBasketVisible} />
                {loading ? <Preloader /> : <GoodList goods={goods} addGoodsToCart={addGoodsToCart} />}
                {basketVisible ?
                    <BasketList
                        order={order}
                        toggleBasketVisible={toggleBasketVisible}
                        deleteGoodsFromCart={deleteGoodsFromCart}
                    /> : ''}
            </main>
        </>
    )

}