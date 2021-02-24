import React from 'react';
import { API_KEY, API_URL } from '../config';
import GoodList from './GoodsList';
import Preloader from './Preloader';

export default function Shop() {

    const [goods, setGoods] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        }).then(response => response.json())
            .then(json => {
                console.log(json);
                setGoods(json.featured);
                setLoading(false);
            }
            )
    }, [])

    return (
        <>
            {console.log(goods)}
            <main className='container content'>
                {loading ? <Preloader/> : <GoodList goods={goods}/>}
            </main>
        </>
    )

}