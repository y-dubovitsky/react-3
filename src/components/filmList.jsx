import React from 'react';
import Film from './film';

export default class FilmList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { films } = this.props;

        return (
            <div className="movies">
                {
                    films.map(film => {
                        return <Film key={film.imdbID} {...film} />
                    })
                }
            </div>
        )
    }
}