import React from 'react'
import "../style/Log.css"

const Log = () => {
  return (
    <div className='log-con'>
        <h1>Login here</h1>
        <div>
        <label htmlFor="">Username</label>
        <input type="text" />
        <label htmlFor="">Password</label>
        <input type="text" />

        <button>Submit</button>
        </div>
        
        

    </div>
  )
}

export default Log
