import React from 'react'
import "../style/Reg.css"
import { useState } from 'react'
import axios from 'axios'
import { Form } from 'react-router-dom'

const Reg = () => {

let[Name,setName]=useState("");
let[Phone,setPhone]=useState("");
let[Email,setEmail]=useState("");

console.log("Name",Name);
console.log("Phone",Phone);
console.log("Email",Email);

const Url="http://localhost:3000/user"

const Postdata = (e) => {
  e.preventDefault();
  let data = {Name,Phone,Email};
  axios.post(Url,data)
  .then((res)=>alert("Registration Success"))
  .catch((err)=> alert("Registration Failed"))
}

  return (
    
    <div className='reg-con'>
        <h1>Register Here</h1>
        <form onSubmit={Postdata}>
        <label htmlFor="">name</label>
        <input type="text" onChange={(x)=>{console.log(x.target.value); setName(x.target.value)}}/>

        <label htmlFor="">Phone</label>
        <input type="text" onChange={(p)=>{console.log(p.target.value); setPhone(p.target.value)}}/>

        <label htmlFor="">email</label>
        <input type="text" onChange={(e)=>{console.log(e.target.value); setEmail(e.target.value)}}/>

        <button>Submit</button>
        </form>
      {/* {Name} */}
    </div>
  )
}

export default Reg

