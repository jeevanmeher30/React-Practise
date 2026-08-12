import React from 'react'
import "../style/Reg.css"
import { useState } from 'react'
import axios from 'axios'
import { Form } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Reg = () => {

let[Name,setName]=useState("");
let[Phone,setPhone]=useState("");
let[Email,setEmail]=useState("");
let[Address,setAddress]=useState("");
let[Password,setPassword]=useState("");
let[CPassword,setCPassword]=useState("");


// console.log("Name",Name);
// console.log("Phone",Phone);
// console.log("Email",Email);
// console.log("Address",Address);
// console.log("Password",Password);
// console.log("Confirm Password",CPassword);


// Regex//
let NameRegex = /^[A-Za-z ]+$/
let EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/
let PhoneRegex = /^[0-9]{10}$/
let PasswordRegex = /^[a-zA-Z0-9]{8,}$/
let AddressRegex = /^[a-zA-Z0-9\s.,]{10,}$/


const validation =()=>{

  if(!Name || !Email || !Phone || !Address || !Password || !CPassword){
    alert("fields cannot be empty")
    return false
  }
  // if(Name.length === 0 || Phone.length === 0 || Email.length === 0 || Address.length === 0 || Password.length == 0 || CPassword.length === 0){
  //   alert("fields cannot be empty")
  //   return false
  // }

  if(!NameRegex.test(Name)){
    alert("Name should be more than 3 characters")
    return false
  }

  if(!EmailRegex.test(Email)) {
    alert("Email should be valid")
    return false
  }

  if(!PhoneRegex.test(Phone)){
    alert("Phone number should be 10")
    return false
  }

  if(!AddressRegex.test(Address)){
    alert("Address should be more than 10 characters")
    return false
  }

  if(!PasswordRegex.test(Password)){
    alert("Password should be 8 characters")
    return false
  }

  if(Password !== CPassword){
    alert("Password and confirm Password Should be same")
    return false
  }

  return true;
}

const Url="http://localhost:5000/user"

const Postdata = (e) => {
  e.preventDefault();
// validation
  if(!validation()){
    return;
  }

// email all ready exits 

axios.get(Url).then((res) =>{
  let users = res.data;
  let emailExist = users.find((user) => user.Email === Email);
  if (emailExist){
    alert("Email already exists");
    return;
  }else{
    let data = {Name,Phone,Email,Address,Password};
  axios.post(Url,data)
  .then((res)=>{
    alert("Registration Success")
    navigate("/log")
  }
  )
  .catch((err)=> alert("Registration Failed"))
  }
  });
};


  return (
    
    <div className='reg-con'>
        <h1>Register Here</h1>
        <form onSubmit={Postdata}>
        <label htmlFor="">name</label>
        <input type="text" onChange={(x)=>{console.log(x.target.value); setName(x.target.value)}}/>

        <label htmlFor="">Phone</label>
        <input type="tel" onChange={(ph)=>{console.log(ph.target.value); setPhone(ph.target.value)}}/>

        <label htmlFor="">email</label>
        <input type="email" onChange={(e)=>{console.log(e.target.value); setEmail(e.target.value)}}/>

        <label htmlFor="">Address</label>
        <input type="text" onChange={(a)=>{console.log(a.target.value); setAddress(a.target.value)}}/>

        <label htmlFor="">Password</label>
        <input type="password" onChange={(p)=>{console.log(p.target.value); setPassword(p.target.value)}}/>

        <label htmlFor="">Confirm Password</label>
        <input type="password" onChange={(cp)=>{console.log(cp.target.value); setCPassword(cp.target.value)}}/>

        <button>Submit</button>
        </form>
    </div>
  )
}

export default Reg

