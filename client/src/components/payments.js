
import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as action from '../actions';


class Payments extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    render() { 
      
        return ( 
            <StripeCheckout
                name="EMaily"
                description="Pay for more credits"
                amount={500}
                token={token=>this.props.handleCredits(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}

            >
                <button className="btn">Add Credits</button>
            </StripeCheckout>
            
         );
    }
}
export default connect(null, action)(Payments);
