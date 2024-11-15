import { useState } from 'react'
import {Link} from "react-router-dom"
import { ShoppingCart, User, Search, Globe, Menu } from 'lucide-react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold text-gray-800">
                    E-Shop
                </Link>

                <nav className="hidden md:flex space-x-6">
                    <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                    <Link to="/shop" className="text-gray-600 hover:text-gray-900">Shop</Link>
                    <Link to="/categories" className="text-gray-600 hover:text-gray-900">Categories</Link>
                    <Link to="/offers" className="text-gray-600 hover:text-gray-900">Offers</Link>
                    <Link to="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
                </nav>

                <div className="flex items-center space-x-4">
                    <button className="text-gray-600 hover:text-gray-900">
                        <Search className="w-6 h-6" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                        <User className="w-6 h-6" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900 relative">
                        <ShoppingCart className="w-6 h-6" />
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                            3
                        </span>
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                        <Globe className="w-6 h-6" />
                    </button>
                    <button
                        className="md:hidden text-gray-600 hover:text-gray-900"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-white py-2">
                    <nav className="flex flex-col space-y-2 px-4">
                        <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                        <Link to="/shop" className="text-gray-600 hover:text-gray-900">Shop</Link>
                        <Link to="/categories" className="text-gray-600 hover:text-gray-900">Categories</Link>
                        <Link to="/offers" className="text-gray-600 hover:text-gray-900">Offers</Link>
                        <Link to="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
                    </nav>
                </div>
            )}
        </header>
    )
}