import React, {Component} from 'react';

class Registrering extends Component{
    render(){
        return (
            <div className="row">
            <h2>Reistrer nytt lag</h2>
            <form>
                <div className="form-group text-center">
                    <div className="col-xs-2">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                    </div>
                    <div className="col-xs-5">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                </div>      
            </form>
        </div>);
    }
}

export default Registrering;