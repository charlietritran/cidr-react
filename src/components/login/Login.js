import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Login.css';

async function loginUser(credentials) {
	
	const response = await fetch('http://localhost:8085/cidr-rest/login', {
   	method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials),
 	});
 	
 	const responseText = await response.text();
 	
 	return responseText;


}

export default function Login({ setToken }) {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  
  const handleSubmit = async e => {
	
	//alert("HANDLE SUBMIT IS CALLED");
	
	var credentials = {
        userName: userName,
        password: password
    };
	
    e.preventDefault();
    const token = await loginUser(credentials);
    //alert("TOKEN:" + token);
    setToken(token);
  }
  
  return(
    <div className="login-wrapper">
      <h1>Please enter your information to login:</h1>
      <form onSubmit={handleSubmit}>
      
      <div>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
       </div>
       
       <div>
            
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
       </div>
       
        <div>
        <p/>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};