import { Header, Footer, Dashboard } from '../index'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Layout() {
    const [role, setRole] = useState('attendee')
    useEffect(() => {
        const role = localStorage.getItem('role')
        setRole(role)
    }, [])
    return (
        <div>
            {role === 'admin' ? <Dashboard /> :
                <>
                    <Header />
                    <main className='bg-blue-200'>
                        <h1 className='border border-blue-500'></h1>
                        <Outlet />
                    </main>
                    <Footer />
                </>}
        </div>
    )
}

export default Layout