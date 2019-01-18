import React from 'react';
import {Component} from 'react';

import { connect } from 'react-redux';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    renderContent(){
        switch(this.props.auth){
            case null:
                return ;
            case false:
                return (
                    <li><a href="/auth/google">Login</a></li>
                );
            default:
            return (
                <li><a href="/api/logout"> Logout</a></li>
                );
        }     
    }
    render() { 
        return ( 
            <nav>
                <div className="nav-wrapper container">
                <a href="#" className="brand-logo">Emaily</a>
                     <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    {this.renderContent()}
                </ul>
                </div>
            </nav>
         );
    }
 
}
function mapStateToProps({auth}){
    return{ auth:auth };
}
export default connect (mapStateToProps)(Header);