import React from 'react'
import BiankaRamka from './img/bianka_ramka.png';
import Bianka from './img/bianka.png';
import Perspektywy from './img/perspektywy-logo.png';
import {articles} from './articles.json';
import SectionName from './SectionName';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faGlobeEurope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faCheckSquare, faGlobeEurope, faMapMarkerAlt);

class SectionBottom extends React.Component {
    constructor (props) {
        super(props) 
        this.state = {
            
        }
    }

    render() {
        return <div>
            <div className = 'container-fluid position-relative'>
                <div className = 'section__bottom--frame position-absolute'>
                    <img className = "img-fluid" src = {BiankaRamka} alt = ""></img>
                </div >
                <div className = ' section__bottom--article w-100'>
                    <div className = 'row'>
                        <div className = 'col-12 col-md-4'>
                            <img src = {Bianka} className = 'img-fluid' alt = ''></img>
                        
                        </div>
                        <div className = 'col-12 col-md-8 d-flex flex-column justify-content-center'>
                            <p className = 'article--title mt-2'>
                                {articles[0].bianka.title}                                
                            </p>
                            <p>
                                {articles[0].bianka.par1}
                            </p>
                            <p>
                                {articles[0].bianka.par2}
                            </p>
                            <p>
                                {articles[0].bianka.par3}
                            </p>
                        </div>
                    </div>
                    <div className = 'section__bottom--grey'>
                        <SectionName name = "KONTAKT"/>
                        <div className = 'container'>
                        <div className = 'section__bottom--grey--row row ml-0'>
                            <div className = 'col-12 col-md-6 text-center'>
                                <img src = {Perspektywy} alt = ''></img>
                                <p className = 'mt-4 mb-1'>Fundacja Edukacyjna Perspektywy</p>
                                <p className = 'mt-0 mb-1   py-0'>tel. (+48 22) 628 58 62</p>
                                <a className = 'position-relative' href = 'mailto: wits2018@perspektywy.pl'>wits2018@perspektywy.pl</a>
                            </div>
                            <div className = 'col-12 col-md-6 text-center'>
                                <FontAwesomeIcon icon = 'map-marker-alt'/>
                                <p>ul. Nowogrodzka 31</p>
                                <p>00-511 Warszawa</p>
                            </div>
                        </div>
                        </div>
                        <div>
                        <iframe title="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13058.063621190058!2d21.016965039369797!3d52.229206195457266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf399cb359b58e10b!2sPerspektywy+Press+Sp.+z+o.o.!5e0!3m2!1sen!2spl!4v1556610953946!5m2!1sen!2spl" width="100%" height="450" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    }
}

export default SectionBottom;