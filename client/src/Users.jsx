import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function Users(){
    useEffect(()=>{
        axios.get('http://localhost:2121/')
            .then(result=>setUsers(result.data))
            .catch(err=>console.log(err))
    }, [])
    const [users, setUsers] = useState([])

    function handleDelete(id){
        axios.delete(`http://localhost:2121/deleteUser/${id}`)
            .then(result=>{
                console.log(result)
                window.location.reload()
            })
            .catch(err=>console.log(err))
    }
    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className='w-50 bg-white rounded p-3'>
                <Link to='/create' className='btn btn-success'>Add +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                                return <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>
                                    <Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>
                                    <button style={{marginLeft:'10px'}} 
                                            className='btn btn-danger'
                                            onClick={(e)=>handleDelete(user._id)}
                                    >Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}