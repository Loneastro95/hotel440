import { signInWithEmailAndPassword } from "firebase/auth";
import{useHistory, Link} from "react-router-dom";
import { useState } from "react";
import { auth } from "../config/firebase";

function LogIn () {

    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const goToHomePage = (() =>{

        signInWithEmailAndPassword(auth, email, password).then(() =>{
            alert("Login Successfull")
            history.push("./home")
        }).catch((error)=>{

        })
    })

    return (
        <div>
            <h1>LogIn Page</h1>
            <input
            type="email"
            placeholder="Enter email..."
            onChange={(event) => setEmail(event.target.value)}
            /><br/>
            <input
            type="password"
            placeholder="Enter password..."
            onChange={(event) => setPassword(event.target.value)}
            /><br/>
            <button onClick={goToHomePage}>Login</button>
            <p>Don't have an account:<Link to="/signUp">SingUp</Link></p>
        </div>
    )    
}
export default LogIn;