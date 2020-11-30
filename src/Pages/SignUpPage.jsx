import React from 'react';
import '../Styles/Log.css';

function SignUpPage(){
    return(
        <div className = 'Log'> 
            <h1> New? </h1>
            <h2> Sign Up Here </h2> 
            <form className = 'Log' > 
                <input text = "First Name" placeholder = 'Enter Your First Name' />
                <input text = 'Last Name' placeholder = 'Enter Your Last Name' />
                <input text = 'Username' placeholder = 'e.g. be_gould' />
                <input type = 'email' placeholder = 'e.g. gould.benney@example.com' />
                <input type = 'password' placeholder = '*************' />
                <button>SignUp</button>
            </form>
            
            </div>

    )
}
export default SignUpPage