import React from 'react';
import pasek1 from './img/pasek1.jpg';

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
                                <img src="./assets/img/pasek1.jpg" alt=""></img>
                            </a>
                            <a href="#">
                                <img src= {pasek1} alt=""></img>
                            </a>
                            <a href="#">
                                <img src="./assets/img/pasek3.jpg" alt=""></img>
                            </a>
                            <a href="#">
                                <img src="./assets/img/pasek4.jpg" alt=""></img>
                            </a>
                            <a href="#">
                                <img src="./assets/img/pasek5.jpg" alt=""></img>
                            </a>
                            <a href="#">
                                <img src="./assets/img/pasek6.jpg" alt=""></img>
                            </a>
                            <a href="#">
                                <img src="./assets/img/pasek7.jpg" alt=""></img>
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