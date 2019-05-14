import React from 'react';
import ReactDOM from 'react-dom';
import logo_glowne from './img/dnp-biale.png'
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

class Navbar extends React.Component {
    
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
                            {/* <li className="nav-item active">
                                <a className="nav-link" href="#">Who We Are<span className="sr-only">(current)</span></a>
                            </li> */}
                            
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                WHAT WE DO
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className = 'dropdown-item' to = '/ItForShe' >IT FOR SHE</Link>
                                    <Link className="dropdown-item" to = '/LeanInStem'>LEAN IN STEM</Link>
                                    <Link className ='dropdown-item' to ='/Dnp'>DZIEWCZYNY NA POLITECHNIKI</Link>
                                    <Link className = 'dropdown-item' to = '/Nt'>NOWE TECHNOLOGIE</Link>
                                    <Link className = 'dropdown-item' to = '/StartUp'>START UP</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">OVERVIEW</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">REPORTS</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;