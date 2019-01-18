import React , {Component}from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

//Components
import Header from './Header';
import {Landing} from './landing';

const Dashboard = () => <h2>Dashboared</h2>
const SurveyNew = () => <h2>SurveyNew</h2>


class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    
    render() { 
        return ( 
            <div className="">
            <BrowserRouter>
             <div>
                 <Header></Header>
                 <div className="container">
                     <Route exact = {true} path="/" component={Landing} />
                     <Route path="/Dashboared" component={Dashboard} />
                     <Route path="/Survey/new" component={SurveyNew} />
                 </div>
             </div>
            </BrowserRouter>
         </div>
         );
    }
}
 
export default connect(null, actions)(App);

