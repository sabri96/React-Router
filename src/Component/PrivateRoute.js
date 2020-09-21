import React from 'react';
import {Route} from 'react-router-dom';

const PrivateRoute=({component:Component,isAuth,...props })=> {
   if (!isAuth) return null
    else return (
        
           <Route component={Component}{...props} /> 
        
    );
}

export default PrivateRoute
