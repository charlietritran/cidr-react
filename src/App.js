import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';


import Home from './components/Home';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
    BrowserRouter,
    Link,
    Route,
    Switch
} from 'react-router-dom';
import CustomerList from './components/customer/CustomerList';
import CustomerEdit from "./components/customer/CustomerEdit";
import Login from './components/login/Login';



function App() {
	
	const [token, setToken] = useState();

	
    async function populateCustomers ()  {
		
    }
    

	// Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    //populateCustomers();
  }, []); // Add empty array to force it run only one time.  no repeat after render

	
  //if(!token) {
  //  return <Login setToken={setToken} />
  //}
  
  return (
    <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ''}>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/customers' exact={true} component={CustomerList}/>
            <Route path='/customers/:id' component={CustomerEdit}/>
            
            
          </Switch>
        </BrowserRouter>
  );
}

export default App;
