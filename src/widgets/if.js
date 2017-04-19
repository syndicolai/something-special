import React from 'react';

class If extends React.Component{
    constructor(){
        super();
    }
    render() {
        return this.props.isTrue === true ? (this.props.children) : (<div></div>);
    }
}

export default If;