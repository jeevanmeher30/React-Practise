import React from 'react'
import "../style/Log.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Log = () => {
  let [User , setUser] = useState('')
  let [Pass , setPass] = useState('')

  let NameRegex = /^[A-Za-z ]+$/
  let EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/
  let PasswordRegex = /^[a-zA-Z0-9]{8,}$/
  

  let Url = "http://localhost:5000/user";
  let Navigate = useNavigate();

  const validate=()=>{

    if(!User || !Pass){
      alert("fields cannot be empty")
      return false
    }

    if(!EmailRegex.test(User) || !NameRegex.test(User)){
      alert("Email should be valid");
      return false;
    }

    if(!PasswordRegex.test(Pass)){
      alert("Password should be valid");
      return false;
    }
    return true;


  }
const loginUser = (x) =>{
  x.preventDefault();


  if(!validate){
    return;
  }



      axios.get(Url).then((res) => {
      let users = res.data;
      console.log(users)
      let Result = users.find((user) => user.Email === User && user.Password === Pass);

      if(Result){
        alert("user login successfull");
        Navigate("/")
      }
      else {
        alert("invalid username or password");
      }
      
    })



  console.log(" Yo Login")
}
  
  return (
    <div className='log-con'>
        <form action="" onSubmit={loginUser} >

          <input type='text' placeholder='username or email' onChange={(x) => {setUser(x.target.value)}}/>
          <input type='password' placeholder='password' onChange={(x) => {setPass(x.target.value)}}/>

          <button type='submit'>login</button>
        </form>
        
        

    </div>
  )
}

export default Log
