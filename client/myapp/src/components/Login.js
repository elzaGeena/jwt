import React,{useState} from 'react'
import axios from 'axios'

const Login = () => {
    const[email,setEmail] = useState("lilymary@gmail.com")
    const[password,setPassword] = useState("rihino")

    const emailHandler = e =>{
        setEmail(e.target.value);
    }
    const passwordHandler = e =>{
        setPassword(e.target.value);
    }
    
    
    const userLogin = e =>{
        e.preventDefault();
        const userObject = {
            email: email,
            password: password
        }
        console.log(userObject);
        axios.post('http://localhost:5000/api/user/login',userObject)
        .then(response =>{
            document.write("Token is ",response.data)
        })
    }


    return (
        <div>
    <form>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" placeholder="email"
         value={email} onChange={emailHandler} />
        <label for="password">password</label>
        <input type="password" name="password" id="password" placeholder="password" 
        value={password} onChange={()=>passwordHandler} />
        <input type="submit" value="Login" onClick={userLogin} />

    </form>
        </div>
    )
}

export default Login
