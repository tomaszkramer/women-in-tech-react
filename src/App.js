import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import Main from './Main';
import ItForShe from './subsites/ItForShe';

class App extends React.Component {
    render() {
        return <HashRouter>
            <div>
                <Route exact path = '/' component = {Main} />
                <Route path = '/ItForShe' component = {ItForShe} />
            </div>
        </HashRouter>
    }
}

export default App;