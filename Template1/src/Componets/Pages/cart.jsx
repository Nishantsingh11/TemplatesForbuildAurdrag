
import { useState } from 'react'
import {Link} from "react-router-dom"
import { Minus, Plus, X } from 'lucide-react'

// Mock cart data (in a real app, this would come from a state management solution like Redux or Zustand)
const initialCart = [
    {
        id: 1,
        name: 'Premium Wireless Headphones',
        price: 199.99,
        quantity: 1,
        image: '/placeholder.svg?height=80&width=80',
    },
    {
        id: 2,
        name: 'Smartphone Stand',
        price: 24.99,
        quantity: 2,
        image: '/placeholder.svg?height=80&width=80&text=Stand',
    },
]

export default function ShoppingCart() {
    const [cart, setCart] = useState(initialCart)

    const updateQuantity = (id, newQuantity) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
            )
        )
    }

    const removeItem = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id))
    }

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const tax = subtotal * 0.1 // Assuming 10% tax
    const total = subtotal + tax

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
            {cart.length === 0 ? (
                <div className="text-center py-8">
                    <p className="text-xl mb-4">Your cart is empty</p>
                    <Link to="/shop" className="text-blue-500 hover:underline">
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        {cart.map(item => (
                            <div key={item.id} className="flex items-center border-b py-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    width={80}
                                    height={80}
                                    className="rounded-md"
                                />
                                <div className="ml-4 flex-grow">
                                    <h2 className="text-lg font-semibold">{item.name}</h2>
                                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                </div>
                                <div className="flex items-center">
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        className="bg-gray-200 p-2 rounded-l-md"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="bg-gray-100 px-4 py-2">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="bg-gray-200 p-2 rounded-r-md"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="ml-4 text-red-500 hover:text-red-700"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="md:col-span-1">
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                            <div className="flex justify-between mb-2">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Tax</span>
                                <span>${tax.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between font-semibold text-lg mt-4 pt-4 border-t">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <Link
                                to="/checkout"
                                className="block w-full bg-blue-500 text-white text-center py-3 rounded-md mt-6 hover:bg-blue-600 transition duration-300"
                            >
                                Proceed to Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}