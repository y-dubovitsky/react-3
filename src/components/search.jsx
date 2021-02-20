import React from 'react';

export default class Search extends React.Component {

    constructor(props) {
        super(props);

    }

    state = {
        searchString: '',
        type: ''
    }

    onInputText = (event) => {
        this.setState({
            searchString: event.target.value
        })
    }

    onSearchText = (event) => {
        const { searchFilmByName } = this.props;

        if (event.key === 'Enter') {
            searchFilmByName(this.state.searchString, this.state.type)
        }
    }

    onFilter = (event) => {
        this.setState({
            type: event.target.name
        })
    }

    render() {
        const { searchString } = this.state;

        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            placeholder="...search film"
                            type="text"
                            value={searchString}
                            onChange={this.onInputText}
                            onKeyPress={this.onSearchText}
                        />
                    </div>
                </div>
                <div className="col s12">
                    <label>
                        <input
                            className="with-gap"
                            onChange={this.onFilter}
                            checked={this.state.type === 'all'}
                            name="all"
                            type="radio" />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            onChange={this.onFilter}
                            checked={this.state.type === 'movie'}
                            name="movie"
                            type="radio" />
                        <span>Films</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            onChange={this.onFilter}
                            checked={this.state.type === 'series'}
                            name="series"
                            type="radio" />
                        <span>Serials</span>
                    </label>
                </div>
            </div>
        )
    }


}