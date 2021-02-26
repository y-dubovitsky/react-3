import {Link} from 'react-router-dom';

export default function header() {
    return (
        <>
            <nav>
                <div className="nav-wrapper">
                    <Link to="/home" className="brand-logo">Home</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}