import { CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function OrderConfirmation() {
    return (
        <div className="container mx-auto px-4 py-16 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
            <p className="text-xl mb-8">Your order has been successfully placed.</p>
            <p className="mb-4">Order Number: #12345</p>
            <p className="mb-8">We`&apos;`ll send you an email with your order details and tracking information once your package ships.</p>
            <Link
                to="/"
                className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300"
            >
                Continue Shopping
            </Link>
        </div>
    )
}