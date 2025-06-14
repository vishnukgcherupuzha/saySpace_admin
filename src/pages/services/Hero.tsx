import { ArrowRight, Building2, Settings2, Users } from 'lucide-react';
import { imageConstants } from '../../../public/images';

const HeroSection = () => {
    return (
        <section className="relative bg-gradient-to-br from-background via-background to-accent/5 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Animated gradient orbs using your exact colors */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-logo-teal/20 to-logo-teal/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cta-coral/15 to-logo-beige/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-dividers/20 to-transparent rounded-full blur-3xl"></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[90vh]">

                    {/* Content Side */}
                    <div className="space-y-8">
                        {/* Badge using your palette */}
                        <div className="inline-flex items-center px-4 py-2 bg-logo-beige/20 backdrop-blur-sm border border-logo-beige/40 rounded-full">
                            <Settings2 className="w-4 h-4 text-logo-teal mr-2" />
                            <span className="font-body text-sm font-medium text-logo-teal">
                                End-to-End Solutions
                            </span>
                        </div>

                        {/* Main Title */}
                        <div className="space-y-4">
                            <h1 className="font-header font-bold text-4xl text-foreground leading-tight">
                                Tailored GCC Services for
                                <br />
                                Global Organizations
                            </h1>

                            {/* Subtitle */}
                            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl">
                                We offer comprehensive services to establish, operate, and optimize your GCC in India, ensuring seamless implementation and sustainable growth.
                                <br />
                                <br />
                                <span className='text-sm text-gray-500 font-normal'>Our integrated approach covers the entire GCC lifecycle—from initial strategy development to ongoing optimization—ensuring a smooth transition and maximum value creation. We customize our services based on your specific requirements, industry context, and organizational objectives.</span>
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <button className="group bg-cta-coral hover:bg-cta-coral/90 text-white px-8 py-4 rounded-xl font-header font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cta-coral/25 transform hover:-translate-y-1 flex items-center justify-center">
                                <Building2 className="w-5 h-5 mr-3" />
                                Start your Journey
                                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
                            </button>

                            <button className="group border-2 border-logo-teal text-logo-teal hover:bg-logo-teal hover:text-white px-8 py-4 rounded-xl font-header font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center">
                                <Users className="w-5 h-5 mr-3" />
                                Meet our team
                                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
                            </button>
                        </div>
                    </div>

                    {/* Image/Illustration Side */}
                    <div className="relative">
                        {/* Main Image Placeholder */}
                        <div className="relative  backdrop-blur-xl bg-accent rounded-3xl shadow-2xl">
                            {/* Image placeholder using your exact colors */}
                            <img src={imageConstants.SERVICES.HERO} className='rounded-3xl mix-blend-luminosity' />
                        </div>

                        {/* Additional floating elements using your palette */}
                        <div className="absolute top-10 -left-6 w-32 h-32 bg-gradient-to-br from-logo-beige/20 to-transparent rounded-full blur-xl"></div>
                        <div className="absolute bottom-10 -right-6 w-40 h-40 bg-gradient-to-br from-logo-teal/20 to-transparent rounded-full blur-xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;