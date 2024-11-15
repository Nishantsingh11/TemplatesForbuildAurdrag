
import { useState } from 'react'
import { Star, Minus, Plus, ShoppingCart, Heart } from 'lucide-react'

// Mock product data (in a real app, this would come from an API)
const product = {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 199.99,
    rating: 4.5,
    reviews: 128,
    description: 'Experience crystal-clear audio with our premium wireless headphones. Featuring advanced noise-cancellation technology and a comfortable over-ear design, these headphones are perfect for music lovers and professionals alike.',
    features: [
        'Active Noise Cancellation',
        'Bluetooth 5.0 connectivity',
        '30-hour battery life',
        'Comfortable memory foam ear cushions',
        'Built-in microphone for calls',
    ],
    images: [
        '/placeholder.svg?height=600&width=600',
        '/placeholder.svg?height=600&width=600&text=Image 2',
        '/placeholder.svg?height=600&width=600&text=Image 3',
    ],
}

export default function ProductDetail() {
    const [quantity, setQuantity] = useState(1)
    const [selectedImage, setSelectedImage] = useState(0)

    const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1))
    const increaseQuantity = () => setQuantity(prev => prev + 1)

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Images */}
                <div>
                    <div className="mb-4">
                        <img
                            src={product.images[selectedImage]}
                            alt={product.name}
                            width={600}
                            height={600}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <div className="flex space-x-4">
                        {product.images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImage(index)}
                                className={`border-2 rounded-md ${selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                                    }`}
                            >
                                <img
                                    src={image}
                                    alt={`${product.name} thumbnail ${index + 1}`}
                                    width={80}
                                    height={80}
                                    className="w-20 h-20 object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div>
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <div className="flex items-center mb-4">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-5 h-5 ${i < Math.floor(product.rating)
                                            ? 'text-yellow-400 fill-current'
                                            : 'text-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                        <span className="ml-2 text-gray-600">
                            {product.rating} ({product.reviews} reviews)
                        </span>
                    </div>
                    <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
                    <p className="text-gray-600 mb-6">{product.description}</p>

                    <h2 className="text-xl font-semibold mb-2">Key Features:</h2>
                    <ul className="list-disc list-inside mb-6">
                        {product.features.map((feature, index) => (
                            <li key={index} className="text-gray-600">{feature}</li>
                        ))}
                    </ul>

                    <div className="flex items-center mb-6">
                        <button
                            onClick={decreaseQuantity}
                            className="bg-gray-200 p-2 rounded-l-md"
                        >
                            <Minus className="w-5 h-5" />
                        </button>
                        <span className="bg-gray-100 px-4 py-2">{quantity}</span>
                        <button
                            onClick={increaseQuantity}
                            className="bg-gray-200 p-2 rounded-r-md"
                        >
                            <Plus className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex space-x-4">
                        <button className="flex-1 bg-blue-500 text-white py-3 px-6 rounded-md flex items-center justify-center hover:bg-blue-600 transition duration-300">
                            <ShoppingCart className="w-5 h-5 mr-2" />
                            Add to Cart
                        </button>
                        <button className="bg-gray-200 text-gray-800 py-3 px-6 rounded-md flex items-center justify-center hover:bg-gray-300 transition duration-300">
                            <Heart className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}