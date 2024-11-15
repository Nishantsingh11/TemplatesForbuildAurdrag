'use client'

import { useState } from 'react'
// import { CreditCard, Truck, CheckCircle } from 'lucide-react'

export default function Checkout() {
    const [step, setStep] = useState(1)

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        country: '',
        zipCode: '',
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevData => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (step < 3) {
            setStep(step + 1)
        } else {
            // Here you would typically send the order to your backend
            console.log('Order submitted:', formData)
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-center mb-8">
                <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>1</div>
                    <div className={`w-16 h-1 ${step >= 2 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>2</div>
                    <div className={`w-16 h-1 ${step >= 3 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>3</div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                {step === 1 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First Name"
                                required
                                className="w-full px-4 py-2 border rounded-md"
                            />
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last Name"
                                required
                                className="w-full px-4 py-2 border rounded-md"
                            />
                        </div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                            className="w-full px-4 py-2 border rounded-md mt-4"
                        />
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Address"
                            required
                            className="w-full px-4 py-2 border rounded-md mt-4"
                        />
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="City"
                                required
                                className="w-full px-4 py-2 border rounded-md"
                            />
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                placeholder="Country"
                                required
                                className="w-full px-4 py-2 border rounded-md"
                            />
                        </div>
                        <input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            placeholder="Zip Code"
                            required
                            className="w-full px-4 py-2 border rounded-md mt-4"
                        />
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
                        <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            placeholder="Card Number"
                            required
                            className="w-full px-4 py-2 border rounded-md"
                        />
                        <input
                            type="text"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleChange}
                            placeholder="Name on Card"
                            required
                            className="w-full px-4 py-2 border rounded-md mt-4"
                        />
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <input
                                type="text"
                                name="expiryDate"
                                value={formData.expiryDate}
                                onChange={handleChange}
                                placeholder="MM/YY"
                                required
                                className="w-full px-4 py-2 border rounded-md"
                            />
                            <input
                                type="text"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleChange}
                                placeholder="CVV"
                                required
                                className="w-full px-4 py-2 border rounded-md"
                            />
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Order Review</h2>
                        <div className="bg-gray-100 p-4 rounded-md">
                            <h3 className="font-semibold mb-2">Shipping Address:</h3>
                            <p>{formData.firstName} {formData.lastName}</p>
                            <p>{formData.address}</p>
                            <p>{formData.city}, {formData.country} {formData.zipCode}</p>
                            <h3 className="font-semibold mt-4 mb-2">Payment Method:</h3>
                            <p>Card ending in {formData.cardNumber.slice(-4)}</p>
                        </div>
                    </div>
                )}

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 rounded-md mt-6 hover:bg-blue-600 transition duration-300"
                >
                    {step === 3 ? 'Place Order' : 'Continue'}
                </button>
            </form>
        </div>
    )
}