import React, {Component} from 'react';
import {Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';
import Books from './Books';
import Reviews from './Reviews';
    
class Home extends Component {
    
    render() {
        return (
           <div>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                   <Link className={"navbar-brand"} to={"/"}> Symfony React Project </Link>
                   <div className="collapse navbar-collapse" id="navbarText">
                       <ul className="navbar-nav mr-auto">
                           <li className="nav-item">
                               <Link className={"nav-link"} to={"/reviews"}> Reviews </Link>
                           </li>
    
                           <li className="nav-item">
                               <Link className={"nav-link"} to={"/books"}> Books </Link>
                           </li>
                       </ul>
                   </div>
               </nav>
               <Switch>
                   <Redirect exact from="/" to="/books" />
                   <Route path="/books" component={Books} />
                   <Route path="/reviews" component={Reviews} />
               </Switch>
           </div>
        )
    }
}
    
export default Home;