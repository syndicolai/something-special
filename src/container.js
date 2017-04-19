import React, { Component } from 'react';
import WineLogo from './header/winelogo';
import Menu from './components/menu';

class Container extends Component{
    constructor(){
        super();
    }

    render(){

        return (<div>
            <div className="container-fluid">
                <WineLogo />
                <Menu />
                <div className="row content">
                    {this.props.children}
                </div>
            </div>
        </div>);
    }
}

export default Container;