import { ArrowRight, Building2, IndianRupee, TrendingUp } from 'lucide-react';
import { imageConstants } from '../../../public/images';

const HeroSection = () => {
    return (
        <section className="relative bg-white overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute inset-0">
                {/* Minimal geometric patterns */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-logo-teal/3 to-transparent"></div>
            </div>

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.015)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[85vh] py-16 lg:py-20">

                    {/* Content Side - 7 columns */}
                    <div className="lg:col-span-7 space-y-8">
                        {/* Professional Badge */}
                        <div className="inline-flex items-center px-3 py-1.5 bg-logo-teal/5 border border-logo-teal/15 text-logo-teal text-sm font-medium tracking-wide">
                            <div className="w-2 h-2 bg-logo-teal rounded-full mr-2"></div>
                            GLOBAL LEADER
                        </div>

                        {/* Main Headline - Enterprise Typography */}
                        <div className="space-y-6">
                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-[1.1] tracking-tight">
                                India: The World's Premier
                                <br />
                                <span className="font-semibold text-logo-teal">
                                    GCC Destination
                                </span>
                            </h1>

                            {/* Professional Subtitle */}
                            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl font-light">
                                India has firmly established itself as the global leader for Global Capability Centers, hosting over 1,500 GCCs that employ more than 1.3 million professionals across diverse sectors.
                                <br />
                                <br />
                                <span className='text-sm text-gray-500 font-light'>Companies choose India for their strategic capability centers due to an unmatched combination of scale, talent, cost advantages, and innovation potential. With decades of experience in global service delivery, India offers a mature ecosystem that supports seamless GCC operations.</span>
                            </p>
                        </div>

                        {/* Professional CTA Section */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-8">
                            <button className="cursor-pointer group bg-cta-coral hover:bg-cta-coral/90 text-white px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md">
                                <Building2 className="w-5 h-5 mr-3" />
                                Discover India's Advantages
                                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="pt-8 border-t border-gray-200">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-4 sm:space-y-0">
                                <div className="flex items-center space-x-2">
                                    <div className="text-2xl font-light text-logo-teal">1,500+</div>
                                    <div className="text-sm text-gray-600 leading-tight">
                                        Active<br />GCCs
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="text-2xl font-light text-logo-teal">1.3M+</div>
                                    <div className="text-sm text-gray-600 leading-tight">
                                        Skilled<br />Professionals
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="text-2xl font-light text-logo-teal">#1</div>
                                    <div className="text-sm text-gray-600 leading-tight">
                                        Global<br />Destination
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Side - 5 columns */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative">
                            {/* Professional image container */}
                            <div className="relative bg-white shadow-2xl shadow-gray-900/10">
                                <img 
                                    src={imageConstants.WHY_INDIA.HERO} 
                                    alt="India GCC Destination"
                                    className="w-full h-auto"
                                />
                                {/* Subtle overlay for professional look */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
                            </div>

                            {/* Professional accent elements */}
                            <div className="absolute -top-4 -left-4 w-8 h-8 border-l-4 border-t-4 border-logo-teal"></div>
                            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-4 border-b-4 border-cta-coral"></div>
                        </div>

                        {/* Professional floating cards */}
                        <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-xl border border-gray-100 max-w-xs">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-logo-teal/10 flex items-center justify-center">
                                    <IndianRupee className="w-6 h-6 text-logo-teal" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900 text-sm">Global Leader</div>
                                    <div className="text-gray-600 text-xs">World's Premier GCC Hub</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-8 -right-8 bg-white p-4 shadow-xl border border-gray-100">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-cta-coral/10 flex items-center justify-center">
                                    <TrendingUp className="w-4 h-4 text-cta-coral" />
                                </div>
                                <div className="text-xs">
                                    <div className="font-semibold text-gray-900">Growth Leader</div>
                                    <div className="text-gray-600">Fastest Growing Market</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;