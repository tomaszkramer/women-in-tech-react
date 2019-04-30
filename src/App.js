import React, { Component } from 'react';
import './App.scss';
import '../src/style.scss';
import '../src/fonts.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/jquery/dist/jquery';
import "../node_modules/slick-carousel/slick/slick.css"; 
import '../node_modules/slick-carousel/slick/slick-theme.css';
import {articles} from './articles.json';
import CircleBar from './CircleBar';
import Navbar from './Navbar';
import MainWallpaper from './MainWallpaper';
import SectionName from './SectionName';
import SimpleSlider from './Slider';
import ArticleRight from './ArticleRight';
import Article from './Article';
import SectionBottom from './SectionBottom';
import BottomBar from './BottomBar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faGlobeEurope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
 

library.add(faCheckSquare, faGlobeEurope, faMapMarkerAlt);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar/>,
          <MainWallpaper
            src1 = 'wit/logo_glowne.png'
            src2 = 'wit/haslo-na-glownego-heada.png'
          />
        </header>
        <section className = 'container-fluid'>
          <SectionName name = "IMPACT IN NUMBERS" />
          <CircleBar 
            number1 = '4500' text1 = "dzieci" boxShadow1 = "lightgrey" color1 = "#1d70a2"
            number2 = '107000' text2 = 'maturzystek' boxShadow2 = 'lightgrey' color2 = '#1d70a2'
            number3 = '730' text3 = 'studentek' boxShadow3 = 'lightgrey' color3 = '#1d70a2'
            number4 = '240' text4 = 'mentorów' boxShadow4 = 'lightgrey' color4 = '#1d70a2'
          />
        </section>
         <section className = 'container justify-content-between d-flex my-5'>
            {/* To jest test: <FontAwesomeIcon icon ="check-square"/>
            <FontAwesomeIcon icon = 'globe-europe'/> */}
         </section>
         <section>
           <SectionName name = 'OUR ACTIONS'/>
           <div className = "container">
            <SimpleSlider/>
           </div>
         </section>
         <section>
            <SectionName name = 'MISJA'/>
            <div className = 'container'>
                <ArticleRight art = {articles[0].article1}
                              src = 'wit/overview-dziecko-scaled.jpg'
                              className = 'row mx-0'
                />
            </div>
         </section>
         <section>
           <div className = 'container'>
              <div className = 'row mx-0'>
                  <div className = 'col-12 col-xl-4'>
                      <Article art = {articles[0].article2}
                                    src = 'news_2.png'
                                    className = 'mt-5'
                      />
                  </div>
                  <div className = 'col-12 col-xl-4'>
                      <Article art = {articles[0].article3}
                                  src = 'news_3.png'
                                  className = 'mt-5'
                    />
                  </div>
                  <div className = 'col-12 col-xl-4'>
                      <Article art = {articles[0].article4}
                                  src = 'news_4.png'
                                  className = 'mt-5'
                    />  
                  </div>
              </div>
           </div>
         </section>
         {/* ---- Bianka i mapa ----- */}
         <section>
            <SectionBottom/>
            <BottomBar/>
         </section>
      </div>
    );
  }
}

export default App;
