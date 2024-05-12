import React from 'react'
import { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'
const SignUp = () => {
    const [inputs,setInputs] = useState({
        fullName:'',
        username:'',
        password:'',
        confirmPassword:'',
        gender:'',
    })

        const handleCheckboxChange = (gender) => {
            setInputs({...inputs,gender})
        }
    const {loading,signup}= useSignup()
    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(inputs)
    }
    return (
        <div className='flex flex-column items-center justify-center min-w-96 mx-auto'>
          <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Sign Up 
                <span className='text-blue-500'> ChatApp</span>
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-gray-400'>Full Name</span>
                    </label>
                    <input value={inputs.fullName} onChange={(e)=> setInputs({...inputs,fullName:e.target.value})} type="text" placeholder='John Doe' className='w-full input input-bordered h-10 bg-gray-800 text-gray-300' />
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-gray-400'>Username</span>
                    </label>
                    <input onChange={(e)=> setInputs({...inputs,username:e.target.value})} value={inputs.username} type="text" placeholder='johndoe' className='w-full input input-bordered h-10 bg-gray-800 text-gray-300' />
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-gray-400'>Password</span>
                    </label>
                    <input onChange={(e)=> setInputs({...inputs,password:e.target.value})} value={inputs.password} type="password" placeholder='Enter Password' className='w-full input input-bordered h-10 bg-gray-800 text-gray-300' />
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-gray-400'>Confirm Password</span>
                    </label>
                    <input onChange={(e)=> setInputs({...inputs,confirmPassword:e.target.value})} value={inputs.confirmPassword} type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10 bg-gray-800 text-gray-300' />
                </div>
                {/* GENDER CHECKBOX GOES HERE */}
                <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>
                <Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-400'>
                    Already have an account?
                </Link>
                <div>
                    <button disabled={loading} className='btn btn-block btn-sm mt-2 border border-slate-700 bg-gray-800  text-gray-400'>
                        {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                    </button>
                </div>
            </form>
          </div>
        </div>
      )
}

export default SignUp
