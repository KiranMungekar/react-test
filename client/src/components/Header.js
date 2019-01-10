import React from 'react';
import {Component} from 'react';

import { connect } from 'react-redux';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props);
        return ( 
            <nav>
                <div className="nav-wrapper container">
                <a href="#" className="brand-logo">Emaily</a>
                     <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#">Login</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                </div>
            </nav>
         );
    }
 
}
function mapStateToProps({auth}){
    console.log("auth "+ auth);
    return{ auth:auth };
}
export default connect (mapStateToProps)(Header);