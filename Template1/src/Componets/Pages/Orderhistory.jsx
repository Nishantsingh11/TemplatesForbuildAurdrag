import { Link } from "react-router-dom"

// Mock order data (in a real app, this would come from your backend)
const orders = [
  { id: 1, date: '2023-05-01', total: 129.99, status: 'Delivered' },
  { id: 2, date: '2023-05-15', total: 79.99, status: 'Shipped' },
  { id: 3, date: '2023-05-30', total: 199.99, status: 'Processing' },
]

export default function OrderHistory() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Order History</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 text-left">Order ID</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Total</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="p-4">{order.id}</td>
                <td className="p-4">{order.date}</td>
                <td className="p-4">${order.total.toFixed(2)}</td>
                <td className="p-4">{order.status}</td>
                <td className="p-4">
                  <Link href={`/account/orders/${order.id}`} className="text-blue-500 hover:underline">
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}