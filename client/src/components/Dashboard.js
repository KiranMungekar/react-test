import React, { Component } from 'react';
import {Link} from 'react-router-dom';
const Dashboard = ()=>{
    return(
        <div className="container">
            Dashboard
            <div className="fixed-action-btn">
                <Link to="/Survey/new" class="btn-floating btn-large pulse red">
                    <i class="material-icons">add</i>
                 </Link>
            </div>
        </div>
    );
}

export default Dashboard;