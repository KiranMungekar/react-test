import React from 'react';
import {Component} from 'react';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <nav>
                <div className="nav-wrapper container">
                <a href="#" className="brand-logo">Emaily</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="#">Login</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                </div>
            </nav>
         );
    }
}
 
export default Header;