import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Newsletter from './Newsletter'
import Footer from './Footer'

const MainLayout =({ children }) =>{
  return (
    <div>
        <Header />
        <Navbar />
        <main> {children}</main>
        <Newsletter />
        <Footer />
    </div>
  )
}

export default MainLayout