'use client'

import { useState } from 'react'
import {Link} from "react-router-dom"
export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically handle the login logic
        console.log('Login attempt:', { email, password })
    }
    Register
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-md mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-md"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Don`&apos;`t have an account?{' '}
                    <Link to="/account/register" className="text-blue-500 hover:underline">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    )
}



function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevData => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically handle the registration logic
        console.log('Registration attempt:', formData)
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-md mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-center">Register</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="firstName" className="block mb-1">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block mb-1">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block mb-1">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-md"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Register
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Already have an account?{' '}
                    <Link to="/account/login" className="text-blue-500 hover:underline">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    )
}