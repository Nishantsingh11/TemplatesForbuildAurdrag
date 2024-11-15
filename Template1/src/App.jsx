
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Componets/Basic/Navbar'
import Footer from './Componets/Basic/Footer'
function App() {

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>

  )
}

export default App
