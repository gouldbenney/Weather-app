import React from 'react'

const Login=React.lazy(()=> import('./LoginPage'))
const Weather =React.lazy(()=> import('./Weather'))
const SignUp =React.lazy(()=> import('./SignUpPage'))

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </React.StrictMode>
    document.getElementById('root')
)

const Pages ={
    Login,
    Weather,
    SignUp
}
  

export default Pages