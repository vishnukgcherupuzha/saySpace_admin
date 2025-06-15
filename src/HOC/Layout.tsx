import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Calculator } from 'lucide-react';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const navigate = useNavigate();

    const handleCalculatorClick = () => {
        navigate('/calculator');
    };
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className='w-full mt-20'>
                <Outlet />
            </div>
            <Footer />
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={handleCalculatorClick}
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    className="cursor-pointer group relative bg-logo-teal hover:bg-logo-teal/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-logo-teal/20 overflow-hidden"
                    aria-label="GCC Cost Estimator"
                >
                    {/* Background Ripple Effect */}
                    <div className="absolute inset-0 rounded-full bg-logo-teal opacity-20 scale-100 group-hover:scale-150 group-hover:opacity-0 transition-all duration-500"></div>

                    {/* Button Content Container */}
                    <div className={`flex items-center justify-center transition-all duration-300 ease-in-out ${showTooltip
                            ? 'px-6 py-4 pr-8'
                            : 'p-4'
                        }`}>
                        {/* Calculator Icon */}
                        <Calculator className={`relative z-10 transition-all duration-300 ${showTooltip
                                ? 'w-5 h-5 mr-3'
                                : 'w-6 h-6'
                            }`} />

                        {/* Expandable Text */}
                        <span className={`font-body font-medium text-sm whitespace-nowrap transition-all duration-300 overflow-hidden ${showTooltip
                                ? 'opacity-100 max-w-xs'
                                : 'opacity-0 max-w-0'
                            }`}>
                            GCC Cost Estimator
                        </span>
                    </div>

                    {/* Pulse Animation - only when collapsed */}
                    {!showTooltip && (
                        <div className="absolute inset-0 rounded-full bg-logo-teal opacity-30 animate-ping"></div>
                    )}
                </button>
            </div>
        </div>
    )
}

export default Layout