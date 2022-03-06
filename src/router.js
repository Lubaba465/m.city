import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import AuthGuard from './Hoc/Auth';
import 'react-toastify/dist/ReactToastify.css';

import Header from './Components/Header_footer/header';
import Footer from './Components/Header_footer/footer';
import Home from './Components/Home';
import SignIn from './Components/Signin';
import Dashboard from './Components/admin/Dashboard';

const Routes =({user}) => {

  return (
      <BrowserRouter>
          <Header user={user}/>
        <Switch>
            <Route path="/dashboard" exact component={AuthGuard(Dashboard)}/>

            <Route path="/sign_in" exact component={          props => (<SignIn {...props} user={user}/>)}/>


                <Route path="/" exact component={Home}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
  );

}

export default Routes;