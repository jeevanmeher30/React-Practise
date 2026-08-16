import React, { useEffect, useState } from 'react';
import "../../style/admin.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Admindashboard = () => {

    let Url = "http://localhost:5000/user";

    let [Users , setUsers] = useState([]);

    console.log(Users)

    const getUsers = () =>{
        axios.get(Url)
        .then(res => setUsers(res.data))
        .catch(err => alert("network error"))
    };




    const Delete = (id) => {
        console.log("Deleting data",id)

        // axios.delete(Url+"/"+id)
        axios.delete(`${Url}/${id}`)
        .then(res=>{
            alert("user deleted successfully");
            getUsers();
        }).catch((err) => alert("network error"));
    };


    useEffect(()=> {
        getUsers()
    },[])

  return (
    <main className='admin-con'>
    {Users.map(x =>{
        return(
            <div className='cards'>
                <div className = 'admin-card'>
                <h2> {x.Name} </h2> <br />
                <i> {x.Email} </i>  <br />
                <p>{x.Address} </p>  <br />
                <span> {x.Phone} </span>  <br />
                <div>
                    <button onClick={() =>{Delete(x.id)}}>Delete</button>
                    <Link to={`/UserDetails/${x.id}`}>
                        <button>Update</button> 
                    </Link>
                </div>

      </div>
            </div>
            
        )
    }

    )}
      
    </main>
  )
}

export default Admindashboard
