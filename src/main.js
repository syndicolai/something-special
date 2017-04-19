import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Container from './container';
import Home from './components/home';
import Archive from './components/archive';
import About from './components/about';
import Registrering from './components/registrering';

class App extends Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Container}>
                    <IndexRoute component={Home} />
                    <Route path='/archive' component={Archive} />
                    <Route path='/about' component={About} />
                    <Route path='/registrering' component={Registrering} /> 
                </Route>
            </Router>)
    }
}

export default App;
ReactDOM.render(<App />, document.getElementById('root'))