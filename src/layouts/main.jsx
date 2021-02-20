import React from 'react';
import Preloader from '../components/preloader';
import FilmList from '../components/filmList';
import Search from '../components/search';

const API_KEY = process.env.REACT_APP_API_KEY

export default class Main extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            films: [],
            loading: false
        }
    }

    componentDidMount() {
        this.setState({ loading: true });

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=die+hard`)
            .then(response => response.json())
            .then(json => this.setState({ films: json.Search, loading: false }))
    }

    searchFilmByName = (filmName, type = 'all') => {
        this.setState({ loading: true });

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${filmName}${type !== 'all' ? `&type=${type}` : `&type=${type}`}`)
            .then(response => response.json())
            .then(data => this.setState({ films: data.Search, loading: false }))
    }

    render() {
        const { films, loading } = this.state;

        return (
            <>
                <div className="container main">
                    <Search searchFilmByName={this.searchFilmByName} />
                    {loading ? (
                        <Preloader />
                    ) :
                        <FilmList films={films} />
                    }
                </div>
            </>
        )
    }
}