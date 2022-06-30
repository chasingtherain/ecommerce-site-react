import React, { useState } from 'react'
import { useSignUp } from '../hooks/useSignUp'

function Signup() {
    const {error, signUp} = useSignUp()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
    <div>
        <div className="form-control w-full max-w-xs">
            <span className="label-text">email</span>
            <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="mario@mail.com" className="input input-bordered w-full max-w-xs" />
            <span className="label-text">password</span>
            <input type="password" onChange={(e) => setPassword(e.target.value)} className="input input-bordered w-full max-w-xs" />
            <button className='btn btn-primary' onClick={() => {signUp(email,password)}}>Sign Up</button>
            {error && <p>{error}</p>}
        </div>
    </div>
    )
}

export default Signup