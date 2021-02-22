import React from 'react';
import Preloader from '../components/preloader';
import FilmList from '../components/filmList';
import Search from '../components/search';

const API_KEY = process.env.REACT_APP_API_KEY

export default function Main({ }) {

    const [films, setFilms] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=die+hard`)
            .then(response => response.json())
            .then(json => {
                setFilms(json.Search);
                setLoading(false);
            })
    }, []
    )

    const searchFilmByName = (filmName, type = 'all') => {
        setLoading(true);

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${filmName}${type !== 'all' ? `&type=${type}` : `&type=${type}`}`)
            .then(response => response.json())
            .then(data => {
                setFilms(data.Search);
                setLoading(false);
            }
            )
    }

    return (
        <>
            <div className="container main">
                <Search searchFilmByName={searchFilmByName} />
                {loading ? (
                    <Preloader />
                ) :
                    <FilmList films={films} />
                }
            </div>
        </>
    )
}
