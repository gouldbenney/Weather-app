import React from 'react'
import '../Styles/Log.css'


function LoginPage(){
    return(
       <div className = 'Log-container'>
           <h1> Welcome </h1>
            <h2> Let's sign you in  </h2>
           <form classname = 'Log'>
               <input type = 'email' placeholder = 'Enter Email' />
           <input type = 'password' placeholder = 'Enter Password' />
           <button>Login</button>
           </form>
           
       </div>
           
    )
}
export default LoginPage