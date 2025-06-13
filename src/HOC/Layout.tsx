import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className='w-full mt-20'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout