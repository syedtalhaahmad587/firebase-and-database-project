import React ,  { useState } from 'react'
import { Link } from "react-router-dom";
import { auth , signInWithEmailAndPassword } from '../Config/Firebase';
import { useNavigate } from 'react-router';
const  initailState = ({
  username: "",
  password: ""
})

const Login = () => {
   const [obj , setobj] = useState(initailState);
   const navigate = useNavigate()
   
   const change_input = (value , property) => {
        setobj({...obj , [property] : value })
   }
   const login = (e) => {
       e.preventDefault();
       console.log({obj});
       setobj(initailState);
       signInWithEmailAndPassword(auth , obj.username , obj.password)
       .then((respon) => {
         console.log(respon);
         navigate("/Dashboard")
       }).catch((error) => {
          console.log(error);
       } ) 
   }
    return (
        <>
        <h1 className="login">Login Form</h1>
        <div className="main">
        <div className="main_div">
          <form action="" onSubmit={(e) => login(e)} >
          <div className="username">
            <label id="">Email
             <input type="email" value={obj.username}  onChange={(e) => change_input(e.target.value , "username" ) } />
             </label>
             </div>
             <div className="Password">
             <label id="">Password
             <input type="password" value={obj.password}  onChange={(e) => change_input(e.target.value , "password" )} />
             </label>
             </div>
             <button  className="btn_login" onClick={login}>Log In</button>
              <p>Forget password</p>
          </form>
  
         <Link to="/Signup">Create New Account</Link>
          </div>
          </div> 
        </>
    )
}

export default  Login;