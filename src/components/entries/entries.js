import React, {Component} from 'react';
import Entry from './entry';

class Entries extends Component {
    constructor(){
        super();
        this.getEntries = this.getEntries.bind(this);
    }

    static propTypes() { 
        return {
            entries: React.PropTypes.array
        }
    }

    getEntries(entries){
        return entries.map((entry, i) => {
            (<Entry entry />)
        });
    }

    render(){
        var ok = this.getEntries(this.props.entries);
 
        return (<div>
                    OLGAPOLGA
                {this.props.entries.map((entry, i) => {
                    "asdf"
                })}
        </div>);
    }
}

export default Entries;