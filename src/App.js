import logo from './logo.svg';
import './index.css';
import React from 'react';

export default function App() {
  function check()
{
    // location.href = "home.html";
    var usr = document.getElementById("user_name").value;
    var pwd = document.getElementById("pass").value;
    if(usr == "" && pwd == "")
    {
        alert("Please enter a username and password");
    }
    else if(usr == "")
    {
        alert("Please enter a username");
    }
    else if(pwd == "")
    {
        alert("Please enter a password");        
    }
    else
    {
        console.log("user name = "+ usr);
        console.log("password is = "+pwd);
        validate();   
    }
}
function validate()
{
    console.log("inside validate");
}
  return (
          <section>
                    <div className="login">
                        <h1 className= "head">Department<br/> Library management system</h1>
                        <div className="content">
                            <h2>Sign In</h2>
                            <div className="form">
                                <div className="inputbox">
                                    <input type="text" id="user_name" required/><i>Username</i>
                                </div>
                                <div className="inputbox">
                                    <input type="password" id="pass" required/> <i>Password</i>
                                </div>
                                <div className="links">
                                    <a href="https://www.tkmce.ac.in/">Forgot Password</a>
                                </div>
                                <div>
                                    <button value='Login' className="login-button" onClick={check}>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>    
  );
}
