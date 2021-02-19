import React from 'react';
import FilmList from '../components/filmList';

export default class Main extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            films: []
        }
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=641f3ad9&s=Matrix')
        .then(response => response.json())
        .then(data => this.setState({films: data.Search}))
    }

    render() {
        const {films} = this.state;

        if(films.length === 0) {
            return <h1>Loader</h1>
        }

        return (
            <>
                <div className="container main">
                    <FilmList films={this.state.films} />
                </div>
            </>
        )
    }
}