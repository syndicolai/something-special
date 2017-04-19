import React, { Component } from 'react';
import WineLogo from './header/winelogo';
import Menu from './components/menu';

class Container extends Component{
    constructor(){
        super();
    }

    render(){
        return (   <div className="App">
        <div className="App-header">
          <h2>Selenium app</h2>
        </div>
        <Menu />
        <div className="row content">
            {this.props.children}
        </div>
      </div>);
    }
}

export default Container;