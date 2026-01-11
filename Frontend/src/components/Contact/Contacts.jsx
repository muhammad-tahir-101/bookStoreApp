import React from 'react'
import Navbar from '../Navbar'
import Contact from '../Contact'
import Footer from '../Footer'

const Contacts = () => {
  return (
    <>
    <div>
        <Navbar/>
        <div className='min-h-screen'>
        <Contact/>
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default Contacts