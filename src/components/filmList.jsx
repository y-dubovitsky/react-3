import React from 'react';
import Film from './film';

export default class FilmList extends React.Component {

    render() {
        const { films = [] } = this.props;

        return (
            <div className="movies">
                {
                    films.length > 0 ?
                    films.map(film => {
                        return <Film key={film.imdbID} {...film} />
                    }) : 
                    <h2>There is nothing to found</h2>
                }
            </div>
        )
    }
}