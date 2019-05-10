import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import BottomBar from './BottomBar';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import Main from './Main';
import ItForShe from './subsites/ItForShe';
import LeanInStem from './subsites/LeanInStem';
import Dnp from './subsites/Dnp';

class App extends React.Component {
    render() {
        return <HashRouter>
                <Navbar/>
                <Route exact path = '/' component = {Main} />
                <Route path = '/ItForShe' component = {ItForShe} />
                <Route path = '/LeanInStem' component = {LeanInStem} />
                <Route path = '/Dnp' component = {Dnp} />
                <BottomBar/>
        </HashRouter>
    }
}

export default App;