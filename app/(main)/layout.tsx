import React from 'react'
import Navbar from '../components/layouts/Navbar'
import Footer from '../components/layouts/Footer'
import TopBar from '../components/layouts/TopBar'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex flex-col min-h-screen'>
      <TopBar />
      <Navbar />
      <div className='grow'>
        {children}
      </div>
      <Footer />
    </main>
  )
}
