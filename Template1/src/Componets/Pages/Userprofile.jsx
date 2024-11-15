'use client'

import { useState } from 'react'

// Mock user data (in a real app, this would come from your backend)
const initialUserData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    address: '123 Main St',
    city: 'Anytown',
    country: 'USA',
    zipCode: '12345',
}

export default function Profile() {
    const [userData, setUserData] = useState(initialUserData)
    const [isEditing, setIsEditing] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData(prevData => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically send the updated data to your backend
        console.log('Profile update:', userData)
        setIsEditing(false)
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">My Profile</h1>
            <form onSubmit={handleSubmit} className="max-w-md">
                <div className="mb-4">
                    <label htmlFor="firstName" className="block mb-1">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={userData.firstName}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="lastName" className="block mb-1">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={userData.lastName}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block mb-1">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={userData.address}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="city" className="block mb-1">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={userData.city}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="country" className="block mb-1">Country</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        value={userData.country}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="zipCode" className="block mb-1">Zip Code</label>
                    <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={userData.zipCode}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                </div>
                {isEditing ? (
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Save Changes
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={() => setIsEditing(true)}
                        className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
                    >
                        Edit Profile
                    </button>
                )}
            </form>
        </div>
    )
}