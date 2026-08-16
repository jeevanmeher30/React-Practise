import axios from 'axios';
import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import "../../style/Userdetails.css";

const UserDetails = () => {
    let id = useParams().id;
    console.log(id);

    let Url = "http://localhost:5000/user";

    let [Name, setName] = useState("");
    let [Email, setEmail] = useState("");


    console.log(`${Url}/${id}`)

    const getUsers = () => {
        axios
        .get(`${Url}/${id}`)
        .then((res) => {
            setName(res.data.Name);
            setEmail(res.data.Email);
    }
)
        .catch((err) => alert("network error"));
    };

    useEffect(() =>{
        getUsers()
    },[]);


    const updateUser =(x) =>{
        x.preventDefault();
        
        let data = { Name, Email}

        axios.patch(`${Url}/${id}`, data)
        .then(() =>{
            alert("user updated successfully")
        }) 
        .catch(err => alert("network error"))
    }


  return (
    <div className='user-con'>
        <form action="" onSubmit={updateUser}>
            <label htmlFor="">Name</label> 
            <input 
                type="text" 
                placeholder="name"
                value = {Name} 
                onChange={x => setName(x.target.value)}/> 
            <label htmlFor="">Email</label>
            <input
                type="text" 
                placeholder='email' 
                value = {Email} 
                onChange={x => setEmail(x.target.value)}/>

            <button type='submit'>Update</button>
        </form>
    </div>
  )
}

export default UserDetails
