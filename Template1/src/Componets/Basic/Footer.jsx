
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

import {Link} from "react-router-dom"
export default function Footer() {
    return (
        <footer className="bg-gray-100 pt-16 pb-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-gray-600 hover:text-gray-900">Our Story</Link></li>
                            <li><Link to="/careers" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
                            <li><Link to="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-gray-600 hover:text-gray-900">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
                        <ul className="space-y-2">
                            <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
                            <li><Link to="/faq" className="text-gray-600 hover:text-gray-900">FAQ</Link></li>
                            <li><Link to="/shipping" className="text-gray-600 hover:text-gray-900">Shipping & Returns</Link></li>
                            <li><Link to="/track-order" className="text-gray-600 hover:text-gray-900">Track Order</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                        <div className="flex space-x-4">
                            <a to="#" className="text-gray-600 hover:text-gray-900"><Facebook /></a>
                            <a to="#" className="text-gray-600 hover:text-gray-900"><Twitter /></a>
                            <a to="#" className="text-gray-600 hover:text-gray-900"><Instagram /></a>
                            <a to="#" className="text-gray-600 hover:text-gray-900"><Linkedin /></a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <p className="text-gray-600 mb-4">Subscribe to our newsletter for exclusive offers and updates.</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-center text-gray-500">&copy; 2023 E-Shop. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}