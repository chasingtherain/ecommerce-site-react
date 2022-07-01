import React, { useState } from 'react'
import { useSignIn } from '../hooks/useSignIn'
import { Link } from 'react-router-dom'

function SignIn() {
    const {error, signIn} = useSignIn()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
    <div>
        <div className="form-control w-full max-w-xs">
            <span className="label-text">email</span>
            <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="mario@mail.com" className="input input-bordered w-full max-w-xs" />
            <span className="label-text">password</span>
            <input type="password" onChange={(e) => setPassword(e.target.value)} className="input input-bordered w-full max-w-xs" />
            <button className='btn btn-primary' onClick={() => {signIn(email,password)}}>Sign In</button>
            {error && <p>{error}</p>}
            <Link to = "/sign-up">Sign up for an account</Link>
        </div>
    </div>
    )
}

export default SignIn