import React , {Component}from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

//Components
import Header from './Header';
import {Landing} from './landing';
import Dashboard from './Dashboard';
import SurveyNew from './SurveyComponents/SurveyNew'

class App extends Component {
    componentDidMount(){
        this.props.fetchUser().then(
            user=>{
                if(user){
                    console.log("LoggedIn");
                }

            }
        );

    }
    
    render() { 
        return ( 
            <div>
            <BrowserRouter>
             <div>
                 <Header></Header>
                 <div className="container">
                     <Route exact = {true} path="/" component={Landing} />
                     <Route path="/Dashboared" component={Dashboard} />
                     <div className="container">
                         <Route path="/Survey/new" component={SurveyNew} />
                     </div>
                 </div>
             </div>
            </BrowserRouter>
         </div>
         );
    }
}
 
export default connect(null, actions)(App);

