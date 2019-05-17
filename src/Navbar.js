import React from 'react';
import logo_glowne from './img/dnp-biale.png'
import {
  Link,
} from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style : {
                border: "none",
                background: "none",
            }
        }
    }
    
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light flex-row-reverse">
                    <Link id = 'logo' className="navbar-brand" to ='/'>
                        <img src = {logo_glowne} alt = ''></img>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <button className = "nav-link dropdown-toggle" id = "navbarDropdownMenuLink" type="button" data-toggle="dropdown" aria-haspopup = "true" aria-expanded="false" style = {this.state.style}>WHAT WE DO</button>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className = 'dropdown-item' to = '/ItForShe' >IT FOR SHE</Link>
                                    <Link className="dropdown-item" to = '/LeanInStem'>LEAN IN STEM</Link>
                                    <Link className ='dropdown-item' to ='/Dnp'>DZIEWCZYNY NA POLITECHNIKI</Link>
                                    <Link className = 'dropdown-item' to = '/Nt'>NOWE TECHNOLOGIE</Link>
                                    <Link className = 'dropdown-item' to = '/StartUp'>START UP</Link>
                                    <Link className = 'dropdown-item' to = '/Summit'>SUMMIT</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Overview">OVERVIEW</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://www.dziewczynynapolitechniki.pl/raport" target = "_blank" rel="noopener noreferrer">REPORTS</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;