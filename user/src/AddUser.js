import React from 'react';

function AddUser(){

    function addUser(){

    }

    return(
        <div className='container'>
            <div className='row'>          
                <h2 className='mt-4'>Create a new User</h2>
            </div>    
            <div className='row'>
                <div className='mb-3'>
                    <label htmlFor='name' className='form-label'>Name</label>
                    <input type='text' className='form-control'></input>
                </div> 
                <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>Email</label>
                    <input type='email' className='form-control'></input>
                </div> 
                <div className='mb-3'>
                    <label htmlFor='password' className='form-label'>Password</label>
                    <input type='password' className='form-control'></input>
                </div> 
                <button onClick={addUser} className='btn btn-success'>Submit</button>
            </div>  
        </div>
    )
}

export default AddUser