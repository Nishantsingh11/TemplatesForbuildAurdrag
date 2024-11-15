'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { Star, ShoppingCart } from 'lucide-react'

// Mock product data (in a real app, this would come from your backend)
const allProducts = [
  { id: 1, name: 'Smartphone', price: 699.99, rating: 4.5, image: '/placeholder.svg?height=300&width=300', category: 'Electronics' },
  { id: 2, name: 'Laptop', price: 1299.99, rating: 4.8, image: '/placeholder.svg?height=300&width=300', category: 'Electronics' },
  { id: 3, name: 'Wireless Earbuds', price: 149.99, rating: 4.2, image: '/placeholder.svg?height=300&width=300', category: 'Electronics' },
  { id: 4, name: 'Smart Watch', price: 249.99, rating: 4.0, image: '/placeholder.svg?height=300&width=300', category: 'Electronics' },
  { id: 5, name: 'T-Shirt', price: 19.99, rating: 4.3, image: '/placeholder.svg?height=300&width=300', category: 'Clothing' },
  { id: 6, name: 'Jeans', price: 59.99, rating: 4.5, image: '/placeholder.svg?height=300&width=300', category: 'Clothing' },
  { id: 7, name: 'Sneakers', price: 89.99, rating: 4.7, image: '/placeholder.svg?height=300&width=300', category: 'Clothing' },
  { id: 8, name: 'Hoodie', price: 49.99, rating: 4.4, image: '/placeholder.svg?height=300&width=300', category: 'Clothing' },
]

export default function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [filteredProducts, setFilteredProducts] = useState(allProducts)

  useEffect(() => {
    const filtered = allProducts.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredProducts(filtered)
  }, [query])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Search Results for `&apos;` {query}  `&apos;` </h1>
      {filteredProducts.length === 0 ? (
        <p className="text-xl text-center">No products found matching your search.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image 
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
      )}
    </div>
  )
}