import { Link } from "react-router-dom"
import { Star, ShoppingCart } from 'lucide-react'

const featuredCategories = [
    { name: 'Electronics', image: '/placeholder.svg?height=100&width=100' },
    { name: 'Clothing', image: '/placeholder.svg?height=100&width=100' },
    { name: 'Home Decor', image: '/placeholder.svg?height=100&width=100' },
    { name: 'Books', image: '/placeholder.svg?height=100&width=100' },
]

const products = [
    { id: 1, name: 'Product 1', price: 19.99, rating: 4.5, image: '/placeholder.svg?height=300&width=300' },
    { id: 2, name: 'Product 2', price: 29.99, rating: 4.0, image: '/placeholder.svg?height=300&width=300' },
    { id: 3, name: 'Product 3', price: 39.99, rating: 4.8, image: '/placeholder.svg?height=300&width=300' },
    { id: 4, name: 'Product 4', price: 49.99, rating: 3.5, image: '/placeholder.svg?height=300&width=300' },
]

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[70vh] bg-gray-900 text-white">
                <img
                    src="/placeholder.svg?height=1080&width=1920"
                    alt="Hero Image"
                    className="opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to E-Shop</h1>
                        <p className="text-xl md:text-2xl mb-8">Discover amazing products at unbeatable prices</p>
                        <Link
                            to="/shop"
                            className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Categories */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Featured Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {featuredCategories.map((category, index) => (
                            <Link key={index} to={`/category/${category.name.toLowerCase()}`} className="group">
                                <div className="bg-white rounded-lg shadow-md p-6 text-center transition duration-300 transform group-hover:scale-105">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        width={100}
                                        height={100}
                                        className="mx-auto mb-4"
                                    />
                                    <h3 className="text-xl font-semibold">{category.name}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Listings */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    width={300}
                                    height={300}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                                        <div className="flex items-center">
                                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                            <span className="ml-1 text-gray-600">{product.rating}</span>
                                        </div>
                                    </div>
                                    <button className="w-full bg-blue-500 text-white py-2 rounded-md flex items-center justify-center hover:bg-blue-600 transition duration-300">
                                        <ShoppingCart className="w-5 h-5 mr-2" />
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}