import React, {Component} from 'react';

class Entry extends Component {
    constructor(props) {
        super(props);

    }
    static propTypes() {
        return {
            header: React.PropTypes.string,
            publishedDate: React.PropTypes.string,
            text: React.PropTypes.string
        }
    }

    render() {
        return (<div>
            <div className="row">
                <div className="col-md-5">
                    <h1 ref="header">{this.props.header}</h1>
                </div>
                <div className="col-md-2">
                    <span ref="publishedDate">{this.props.publishedDate}</span>
                </div>
            </div>
            <div className="row">
                <article ref="text">{this.props.text}</article>
            </div>
        </div>);
    }
}

export default Entry;