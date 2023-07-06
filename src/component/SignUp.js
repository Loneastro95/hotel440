import {geAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase' 
import { useState } from 'react';

function SignUp() {
  const[email, setEmail] = useState();
  const [password,setPassword] = useState('');

  const register = (() =>{
    createUserWithEmailAndPassword(auth,email,password).then(()=>{
      alert("Registered Successfuly")

    }).catch((error)=>{
      console.log(error.message)

    })
  })

  return (
    <div>
      <h1>Sigh up page</h1>
       
      <input
       type="text"
       placeholder="Enter email.."
       onChange={(event)=> setEmail(event.target.value)}
       /><br/>
      <input
       type="password"
       placeholder="Enter password.."
       onChange={(event)=> setPassword(event.target.value)}
       /><br/>
       <button onClick={register}>Sigh up</button>
    </div>
  )
}

export default SignUp
