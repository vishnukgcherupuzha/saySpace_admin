import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import {imageConstants} from '../../public/images/index'
// import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [isGccDropdownOpen, setIsGccDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const gccPolicies = [
  //   { name: 'Maharashtra IT & ITES Captive Center Policy', href: '/gcc-policies/maharashtra' },
  //   { name: 'Karnataka GCC Policy', href: '/gcc-policies/karnataka' },
  //   { name: 'Tamil Nadu GCC Policy', href: '/gcc-policies/tamil-nadu' },
  //   { name: 'Gujarat GCC Policy', href: '/gcc-policies/gujarat' },
  //   { name: 'Telangana GCC Policy', href: '/gcc-policies/telangana' },
  //   { name: 'Madhya Pradesh GCC Policy', href: '/gcc-policies/madhya-pradesh' },
  //   { name: 'Andhra Pradesh GCC Policy', href: '/gcc-policies/andhra-pradesh' }
  // ];

  const mainNavItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Why India', href: '/why-india' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  // Check if current path matches or starts with the href
  const isActiveRoute = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname.startsWith(href)) return true;
    return false;
  };

  // Check if any GCC policy is active
  // const isGccActive = () => {
  //   return location.pathname.startsWith('/gcc-policies');
  // };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-md shadow-sm border-b border-gray-200' 
        : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
                <img src={imageConstants.LOGO} alt="Logo" className="w-12 h-12 lg:w-14 lg:h-14" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-0">
            {mainNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-5 py-2 text-sm font-medium transition-colors duration-150 border-b-2 cursor-pointer ${
                  isActiveRoute(item.href)
                    ? 'text-logo-teal border-logo-teal bg-logo-teal/5'
                    : 'text-gray-700 border-transparent hover:text-logo-teal hover:border-gray-300'
                }`}
              >
                {item.name}
              </a>
            ))}
            
            {/* GCC Policies Dropdown */}
            {/* <div className="relative">
              <button
                onMouseEnter={() => setIsGccDropdownOpen(true)}
                onMouseLeave={() => setIsGccDropdownOpen(false)}
                className={`flex items-center px-5 py-2 text-sm font-medium transition-colors duration-150 border-b-2 cursor-pointer ${
                  isGccActive()
                    ? 'text-logo-teal border-logo-teal bg-logo-teal/5'
                    : 'text-gray-700 border-transparent hover:text-logo-teal hover:border-gray-300'
                }`}
              >
                GCC Policies
                <ChevronDown className={`ml-1 h-3 w-3 transition-transform duration-200 ${
                  isGccDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              <div
                onMouseEnter={() => setIsGccDropdownOpen(true)}
                onMouseLeave={() => setIsGccDropdownOpen(false)}
                className={`absolute top-full left-0 mt-0 w-80 bg-white border border-gray-200 shadow-lg transition-all duration-200 ${
                  isGccDropdownOpen 
                    ? 'opacity-100 translate-y-0 pointer-events-auto' 
                    : 'opacity-0 -translate-y-1 pointer-events-none'
                }`}
                style={{ borderRadius: '0' }}
              >
                <div className="py-2">
                  {gccPolicies.map((policy, index) => (
                    <Button variant='ghost' disabled>
                      <a
                      key={index}
                      href={policy.href}
                      className={`block px-4 py-3 text-sm transition-colors duration-150 cursor-pointer ${
                        isActiveRoute(policy.href)
                          ? 'text-logo-teal bg-logo-teal/10 border-r-2 border-logo-teal'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-logo-teal'
                      }`}
                    >
                      {policy.name}
                    </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div> */}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <button 
              onClick={() => window.location.href = '/contact#contact-form'}
              className="cursor-pointer bg-cta-coral hover:bg-cta-coral/90 text-white px-6 py-2 text-sm font-semibold transition-all duration-150 border border-cta-coral hover:shadow-sm"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-150 cursor-pointer"
            style={{ borderRadius: '4px' }}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden border-t border-gray-200 ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-1 bg-gray-50/50">
            {mainNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 text-base font-medium transition-colors duration-150 border-l-3 cursor-pointer ${
                  isActiveRoute(item.href)
                    ? 'text-logo-teal bg-logo-teal/10 border-logo-teal'
                    : 'text-gray-700 border-transparent hover:bg-white hover:text-logo-teal hover:border-gray-300'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile GCC Policies */}
            {/* <div className="px-4 py-2">
              <button
                onClick={() => setIsGccDropdownOpen(!isGccDropdownOpen)}
                className={`flex items-center justify-between w-full py-2 text-base font-medium transition-colors duration-150 cursor-pointer ${
                  isGccActive()
                    ? 'text-logo-teal'
                    : 'text-gray-700 hover:text-logo-teal'
                }`}
              >
                GCC Policies
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                  isGccDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              <div className={`mt-2 space-y-1 transition-all duration-200 bg-white border-l border-gray-200 ml-2 ${
                isGccDropdownOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                {gccPolicies.map((policy, index) => (
                  <a
                    key={index}
                    href={policy.href}
                    className={`block px-4 py-2 text-sm transition-colors duration-150 cursor-pointer ${
                      isActiveRoute(policy.href)
                        ? 'text-logo-teal bg-logo-teal/10 border-r-2 border-logo-teal'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {policy.name}
                  </a>
                ))}
              </div>
            </div> */}
            
            {/* Mobile CTA */}
            <div className="px-4 pt-4 border-t border-gray-200 mt-4">
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.location.href = '/contact#contact-form';
                }}
                className="cursor-pointer w-full bg-cta-coral hover:bg-cta-coral/90 text-white px-6 py-3 text-base font-semibold transition-all duration-150"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;