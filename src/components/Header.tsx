import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import {imageConstants} from '../../public/images/index'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGccDropdownOpen, setIsGccDropdownOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    // Set initial path and listen for changes
    setCurrentPath(window.location.pathname);
    
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handleLocationChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const gccPolicies = [
    { name: 'Maharashtra IT & ITES Captive Center Policy', href: '/gcc-policies/maharashtra' },
    { name: 'Karnataka GCC Policy', href: '/gcc-policies/karnataka' },
    { name: 'Tamil Nadu GCC Policy', href: '/gcc-policies/tamil-nadu' },
    { name: 'Gujarat GCC Policy', href: '/gcc-policies/gujarat' },
    { name: 'Telangana GCC Policy', href: '/gcc-policies/telangana' },
    { name: 'Madhya Pradesh GCC Policy', href: '/gcc-policies/madhya-pradesh' },
    { name: 'Andhra Pradesh GCC Policy', href: '/gcc-policies/andhra-pradesh' }
  ];

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
    if (href === '/' && currentPath === '/') return true;
    if (href !== '/' && currentPath.startsWith(href)) return true;
    return false;
  };

  // Check if any GCC policy is active
  const isGccActive = () => {
    return currentPath.startsWith('/gcc-policies');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-dividers' 
        : 'bg-background/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="">
                <img src={imageConstants.LOGO} alt="Logo" className="w-14 h-14" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {mainNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium font-body rounded-lg transition-all duration-200 ${
                  isActiveRoute(item.href)
                    ? 'text-logo-teal bg-logo-teal/10 border border-logo-teal/20 font-semibold'
                    : 'text-foreground hover:text-logo-teal hover:bg-accent/50'
                }`}
              >
                {item.name}
              </a>
            ))}
            
            {/* GCC Policies Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsGccDropdownOpen(true)}
                onMouseLeave={() => setIsGccDropdownOpen(false)}
                className={`flex items-center px-4 py-2 text-sm font-medium font-body rounded-lg transition-all duration-200 ${
                  isGccActive()
                    ? 'text-logo-teal bg-logo-teal/10 border border-logo-teal/20 font-semibold'
                    : 'text-foreground hover:text-logo-teal hover:bg-accent/50'
                }`}
              >
                GCC Policies
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                  isGccDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              {/* Dropdown Menu */}
              <div
                onMouseEnter={() => setIsGccDropdownOpen(true)}
                onMouseLeave={() => setIsGccDropdownOpen(false)}
                className={`absolute top-full left-0 mt-1 w-80 bg-card border border-border rounded-xl shadow-xl transition-all duration-200 ${
                  isGccDropdownOpen 
                    ? 'opacity-100 translate-y-0 pointer-events-auto' 
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="p-2">
                  {gccPolicies.map((policy, index) => (
                    <a
                      key={index}
                      href={policy.href}
                      className={`block px-4 py-3 text-sm font-body rounded-lg transition-colors duration-150 ${
                        isActiveRoute(policy.href)
                          ? 'text-logo-teal bg-logo-teal/10 font-medium'
                          : 'text-card-foreground hover:bg-accent hover:text-logo-teal'
                      }`}
                    >
                      {policy.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <button className="bg-cta-coral hover:bg-cta-coral/90 text-white px-6 py-2.5 rounded-lg font-medium font-header text-sm transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-accent transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t border-dividers">
            {mainNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 text-base font-medium font-body rounded-lg transition-colors duration-200 ${
                  isActiveRoute(item.href)
                    ? 'text-logo-teal bg-logo-teal/10 border border-logo-teal/20 font-semibold'
                    : 'text-foreground hover:bg-accent hover:text-logo-teal'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile GCC Policies */}
            <div className="px-4 py-2">
              <button
                onClick={() => setIsGccDropdownOpen(!isGccDropdownOpen)}
                className={`flex items-center justify-between w-full py-2 text-base font-medium font-body transition-colors duration-200 ${
                  isGccActive()
                    ? 'text-logo-teal font-semibold'
                    : 'text-foreground hover:text-logo-teal'
                }`}
              >
                GCC Policies
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                  isGccDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              <div className={`mt-2 space-y-1 transition-all duration-200 ${
                isGccDropdownOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                {gccPolicies.map((policy, index) => (
                  <a
                    key={index}
                    href={policy.href}
                    className={`block px-4 py-2 text-sm font-body rounded-lg transition-colors duration-150 ${
                      isActiveRoute(policy.href)
                        ? 'text-logo-teal bg-logo-teal/10 font-medium'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {policy.name}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Mobile CTA */}
            <div className="px-4 pt-4">
              <button className="w-full bg-cta-coral hover:bg-cta-coral/90 text-white px-6 py-3 rounded-lg font-medium font-header text-base transition-all duration-200">
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