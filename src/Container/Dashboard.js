import React , {useState , useEffect }  from 'react'
import { auth ,  onAuthStateChanged , signOut } from '../Config/Firebase'
import { useNavigate } from 'react-router';
const Dashboard = () => {
    // const [userLogin, setuserLogin] = useState(true)
    const Navigation = useNavigate()
    const [loader , setloader] = useState(false);

   const logout = () => {
     
    signOut(auth).then((succes) => {
        console.log(succes);
        Navigation("/Login")
    }).catch((err) => {
         console.log(err);
    } )
   }

    useEffect(() => {
      setloader(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              setloader(false)
            } else {
              // User is signed out
              // ...
              Navigation("/Login");
            }
          });
    }, [])
    return (
      <>
      { loader ? ( 
      <h1> please login form Loading...</h1>
      )
      : (
      <div>
        <h1>Dashboard</h1>
        <button onClick={logout} >Log Out</button>
    </div> ) 
     }
      </>  
    )}

export default Dashboard
