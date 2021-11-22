import React , {useState} from 'react'
import { auth , createUserWithEmailAndPassword } from '../Config/Firebase'

const Signup = () => {
  const initailState = ({
    username : "",
    email : "",
    password : "",
  })
  const [name , setName] = useState(initailState)
  const change_input = (value , property ) => {
     setName({...name , [property] : value })
  }
  const Signup = (e) => {
      e.preventDefault()
      console.log({name})
      console.log(name.email)
      setName(initailState)
     createUserWithEmailAndPassword(auth, name.email , name.password )
    .then((succes) => {
      console.log(succes.user.uid)
    } ).catch((error) => {
      console.log(error);
    } )
  }
    return (
        <>
        <h1 className="login">SignUp</h1>
        <div className="main">
        <div className="main_div">
          <form action="" onSubmit={(e)=> Signup(e)} >
          <div className="username">
            <label id="">UserName
             <input type="text" value={name.username} onChange={(e) => change_input(e.target.value , "username") } />
             </label>
             </div>
             <div className="Email">
            <label   id="">Email
             <input type="email"  value={name.email} onChange={(e) => change_input(e.target.value, "email") } />
             </label>
             </div>
             <div className="Password">
             <label id="">Password
             <input type="password"  value={name.password}  onChange={(e) => change_input(e.target.value , "password" )}  />
             </label>
             </div>
             <button  className="btn_login" onClick={Signup}>Sign Up</button>
              <p>Forget password</p>
          </form>
         
          </div>
        
          </div> 
        </>
    )
}

export default  Signup;