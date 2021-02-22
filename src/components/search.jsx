import React from 'react';

export default function Search({searchFilmByName}) {

    const [searchString, setSearchString] = React.useState('');
    const [type, setType] = React.useState('');

    const onInputText = (event) => {
        setSearchString(event.target.value)
    }

    const onSearchText = (event) => {
        if (event.key === 'Enter') {
            searchFilmByName(searchString, type)
        }
    }

    const onFilter = (event) => {
        setType(event.target.name)
    }

    return (
        <div className="row">
            <div className="col s12">
                <div className="input-field">
                    <input
                        placeholder="...search film"
                        type="text"
                        value={searchString}
                        onChange={(event) => onInputText(event)}
                        onKeyPress={(event) => onSearchText(event)}
                    />
                </div>
            </div>
            <div className="col s12">
                <label>
                    <input
                        className="with-gap"
                        onChange={() => onFilter}
                        checked={type === 'all'}
                        name="all"
                        type="radio" />
                    <span>All</span>
                </label>
                <label>
                    <input
                        className="with-gap"
                        onChange={(event) => onFilter(event)}
                        checked={type === 'movie'}
                        name="movie"
                        type="radio" />
                    <span>Films</span>
                </label>
                <label>
                    <input
                        className="with-gap"
                        onChange={(event) => onFilter(event)}
                        checked={type === 'series'}
                        name="series"
                        type="radio" />
                    <span>Serials</span>
                </label>
            </div>
        </div>
    )
}


