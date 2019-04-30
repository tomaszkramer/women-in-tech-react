import React from 'react';
import pasek1 from './img/pasek1.jpg';
import pasek2 from './img/pasek2.jpg';
import pasek3 from './img/pasek3.jpg';
import pasek4 from './img/pasek4.jpg';
import pasek5 from './img/pasek5.jpg';
import pasek6 from './img/pasek6.jpg';
import pasek7 from './img/pasek7.jpg';

class BottomBar extends React.Component {
    constructor (props) {
        super(props) 
            this.state = {

            }
    }

    render () {
        return <div>
                    <footer class="container-fluid">
                        <div class="footer__icons d-flex flex-wrap justify-content-center align-items-center py-4 ">
                            <a href="#">
                                <img src= {pasek1} alt=""></img>
                            </a>
                            <a href="#">
                                <img src= {pasek2} alt=""></img>
                            </a>
                            <a href="#">
                                <img src= {pasek3} alt=""></img>
                            </a>
                            <a href="#">
                                <img src= {pasek4} alt=""></img>
                            </a>
                            <a href="#">
                                <img src= {pasek5} alt=""></img>
                            </a>
                            <a href="#">
                                <img src= {pasek6} alt=""></img>
                            </a>
                            <a href="#">
                                <img src= {pasek7} alt=""></img>
                            </a>
                        </div>
                        <div class="footer__menu">
                            <p>© Perspektywy.pl</p>
                            <ul>
                                <li>
                                    <a href="#">
                                        O nas
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Patronaty
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Polityka prywatności
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Znak jakości
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Reklama
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto: fundacja@perspektywy.pl">
                                        Kontakt
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                </div>
    }
}


export default BottomBar;