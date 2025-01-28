import {React,useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function CreateUser(){
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:2121/createUser', {name,email,age})
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err=>console.log(err))
    }

    return(
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center' >
            <div className='w-50 bg-white rounded p-3' >
                <form onSubmit={handleSubmit}>
                    <h2>Add User</h2>
                    <div className='mb-2'>
                        <label htmlFor='name'>Name:</label>
                        <input  type='text' 
                                id='name'
                                placeholder='Enter Name' 
                                name='name'
                                className='form-control' 
                                onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email:</label>
                        <input  type='email' 
                                id='email'
                                name='email'
                                placeholder='Enter Email' 
                                className='form-control' 
                                onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='age'>Age:</label>
                        <input  type='text'
                                id='age'
                                name='age' 
                                placeholder='Enter Age' 
                                className='form-control'
                                onChange={(e)=>setAge(e.target.value)} 
                        />
                    </div>
                    <button className='btn btn-success' >Create User</button>
                </form>
            </div>
        </div>
    )
}