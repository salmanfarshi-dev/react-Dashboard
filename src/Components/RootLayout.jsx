import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router'

function RootLayout({toggleSidebar}) {
  return (
   <div className="min-h-screen flex">
    <aside className='w-44 min-h-screen'>
        <Sidebar/>
    </aside>
    <div className="flex-1">
        <Navbar toggleSidebar={toggleSidebar}/>

        <main className='p-5'>
            <Outlet/>
        </main>
    </div>
   </div>
  )
}

export default RootLayout