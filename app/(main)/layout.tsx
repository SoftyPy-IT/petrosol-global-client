import React from 'react'
import Navbar from '../components/layouts/Navbar'
import Footer from '../components/layouts/Footer'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='grow'>
        {children}
      </div>
      <Footer />
    </main>
  )
}
