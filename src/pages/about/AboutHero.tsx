import { ArrowRight, Building2, Users, Award, Target } from 'lucide-react';
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
                            ABOUT SAY SPACE
                        </div>

                        {/* Main Headline - Enterprise Typography */}
                        <div className="space-y-6">
                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-[1.1] tracking-tight">
                                Architecting
                                <br />
                                <span className="font-semibold text-logo-teal">
                                    Global Capability Centers
                                </span>
                                <br />
                                <span className="text-gray-700">for Tomorrow</span>
                            </h1>

                            {/* Professional Subtitle */}
                            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl font-light">
                                We are India's premier GCC consulting and IT services organization, dedicated to helping 
                                global enterprises establish and optimize successful capability centers in India's thriving innovation ecosystem.
                            </p>
                        </div>

                        {/* Key Value Props */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-logo-teal/10 flex items-center justify-center flex-shrink-0">
                                    <Target className="w-5 h-5 text-logo-teal" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Strategic Focus</h3>
                                    <p className="text-gray-600 text-sm font-light">End-to-end GCC solutions tailored to your business objectives</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-cta-coral/10 flex items-center justify-center flex-shrink-0">
                                    <Award className="w-5 h-5 text-cta-coral" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Proven Excellence</h3>
                                    <p className="text-gray-600 text-sm font-light">50+ successful GCC implementations across industries</p>
                                </div>
                            </div>
                        </div>

                        {/* Professional CTA Section */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-8">
                            <button className="cursor-pointer group bg-cta-coral hover:bg-cta-coral/90 text-white px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md">
                                <Building2 className="w-5 h-5 mr-3" />
                                Start Your Journey
                                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
                            </button>

                            <button className="cursor-pointer group border-2 border-gray-300 hover:border-logo-teal text-gray-700 hover:text-logo-teal px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center hover:bg-logo-teal/5">
                                <Users className="w-5 h-5 mr-3" />
                                Meet Our Team
                                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
                            </button>
                        </div>
                    </div>

                    {/* Image Side - 5 columns */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative">
                            {/* Professional image container */}
                            <div className="relative bg-white shadow-2xl shadow-gray-900/10">
                                <img 
                                    src={imageConstants.ABOUT.HERO} 
                                    alt="Say Space GCC Consulting Team"
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
                                    <Building2 className="w-6 h-6 text-logo-teal" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900 text-sm">Expert Consulting</div>
                                    <div className="text-gray-600 text-xs">End-to-end GCC Solutions</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-8 -right-8 bg-white p-4 shadow-xl border border-gray-100">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-cta-coral/10 flex items-center justify-center">
                                    <Award className="w-4 h-4 text-cta-coral" />
                                </div>
                                <div className="text-xs">
                                    <div className="font-semibold text-gray-900">Industry Leader</div>
                                    <div className="text-gray-600">Trusted by Fortune 500</div>
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