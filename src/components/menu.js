import React from 'react';
import { Link } from 'react-router'

class Menu extends React.Component {
    constructor(){
        super();
        this.menuChanged = this.menuChanged.bind(this);
    }

    menuChanged(tab) {
        this.props.changeTab(tab);
    }

    render(){
        return (<nav className="navbar navbar-fucked-up" role="navigation">
                <div className="container-fluid">
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li className={this.props.activeTab === 'main' ? 'active' : ''}><Link to="/registrering">Registrer nytt lag</Link></li>
                    <li className={this.props.activeTab === 'archive' ? 'active' : ''}><Link to="/archive">Liste over registreringer</Link></li>
                    <li className={this.props.activeTab === 'about'? 'active' : ''}><Link to="/about">Liste over organisasjoner</Link></li>
                </ul>
            </div>
        </div>
        </nav>);
    }
}

export default Menu;