import React from 'react';
import logo from './logo192.png';

export default class Film extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {Title, Year, imdbID, Type, Poster} = this.props;

        return (
            <>
                <div id={imdbID} className="row">
                    <div className="col s12 m7">
                        <div className="card">
                            <div className="card-image">
                                <img src={Poster === 'N/A' ? logo : Poster} />
                            </div>
                            <div className="card-content">
                                <p>{Title}</p>
                            </div>
                            <div className="card-action">
                                <p>{Year}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}