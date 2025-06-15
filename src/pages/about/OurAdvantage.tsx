import {
    Target,
    Layers,
    Globe,
    Zap,
    Network,
    Award,
    CheckCircle
} from 'lucide-react';

const OurAdvantage = () => {
    const advantages = [
        {
            id: 1,
            icon: Target,
            title: "Specialized GCC Focus",
            description: "Unlike generalist consultancies, we exclusively focus on GCC establishment and optimization, providing dedicated expertise in this specific domain. Our singular focus ensures deeper insights and more tailored solutions.",
            highlights: ["100% GCC Focused", "Domain Expertise", "Tailored Solutions"]
        },
        {
            id: 2,
            icon: Layers,
            title: "End-to-End Capabilities",
            description: "We offer comprehensive services across the entire GCC lifecycle, from strategy and setup to ongoing management and optimization. This holistic approach ensures seamless integration and long-term success.",
            highlights: ["Full Lifecycle Support", "Seamless Integration", "Long-term Success"]
        },
        {
            id: 3,
            icon: Globe,
            title: "Local Expertise, Global Perspective",
            description: "Our team combines deep knowledge of the Indian ecosystem with global insights, ensuring culturally aligned solutions that bridge international operations effectively.",
            highlights: ["Indian Ecosystem", "Global Insights", "Cultural Alignment"]
        },
        {
            id: 4,
            icon: Zap,
            title: "Agile Implementation",
            description: "As a boutique consulting firm, we offer personalized attention, faster decision-making, and the flexibility to adapt to your unique requirements, ensuring a tailored GCC strategy.",
            highlights: ["Personalized Attention", "Faster Decisions", "Flexible Solutions"]
        },
        {
            id: 5,
            icon: Network,
            title: "Strategic Partner Network",
            description: "We've developed relationships with key real estate developers, legal firms, technology providers, and educational institutions in India, providing our clients with a ready ecosystem for success.",
            highlights: ["Ready Ecosystem", "Key Partnerships", "Instant Access"]
        }
    ];

    const metrics = [
        { icon: Target, number: "100%", label: "GCC Focused", description: "Exclusive specialization" },
        { icon: Layers, number: "360°", label: "Full Coverage", description: "Complete lifecycle" },
        { icon: Zap, number: "40%", label: "Faster Setup", description: "Accelerated delivery" },
        { icon: Network, number: "50+", label: "Partners", description: "Strategic network" }
    ];

    return (
        <section className="py-20 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16 lg:mb-20">
                    <div className="inline-flex items-center px-3 py-1.5 bg-logo-teal/5 border border-logo-teal/15 text-logo-teal text-sm font-medium tracking-wide mb-6">
                        <Award className="w-4 h-4 mr-2" />
                        COMPETITIVE EDGE
                    </div>

                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                        Our Strategic <span className="font-semibold text-logo-teal">Advantage</span>
                    </h2>

                    <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
                        Our unique approach, specialized focus, and proven methodology make us the ideal partner for your Global Capability Center journey
                    </p>
                </div>

                {/* Advantages Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20">
                    {advantages.map((advantage) => {
                        const IconComponent = advantage.icon;
                        return (
                            <div
                                key={advantage.id}
                                className="group bg-white border border-gray-200 p-8 lg:p-10 hover:shadow-lg transition-all duration-300 relative"
                            >
                                {/* Number indicator */}
                                <div className="absolute top-6 right-6 text-6xl font-light text-gray-100 group-hover:text-logo-teal/20 transition-colors duration-300">
                                    {advantage.id.toString().padStart(2, '0')}
                                </div>

                                <div className="relative">
                                    {/* Header */}
                                    <div className="flex items-start space-x-4 mb-6">
                                        <div className="w-14 h-14 bg-logo-teal flex items-center justify-center flex-shrink-0">
                                            <IconComponent className="w-7 h-7 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2 leading-tight">
                                                {advantage.title}
                                            </h3>
                                            <div className="w-12 h-px bg-logo-teal"></div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 leading-relaxed font-light mb-6">
                                        {advantage.description}
                                    </p>

                                    {/* Highlights */}
                                    <div className="space-y-3">
                                        {advantage.highlights.map((highlight, idx) => (
                                            <div key={idx} className="flex items-center space-x-3">
                                                <CheckCircle className="w-4 h-4 text-logo-teal flex-shrink-0" />
                                                <span className="text-gray-600 font-medium">
                                                    {highlight}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Professional hover indicator */}
                                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-8 h-px bg-logo-teal"></div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Metrics Section */}
                <div className="bg-white border border-gray-200 p-8 lg:p-12">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
                            By the <span className="font-semibold text-logo-teal">Numbers</span>
                        </h3>
                        <div className="w-16 h-px bg-logo-teal mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
                            Quantifiable advantages that demonstrate our commitment to excellence and results-driven approach
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {metrics.map((metric, index) => {
                            const IconComponent = metric.icon;
                            return (
                                <div key={index} className="text-center p-6 bg-gray-50 border border-gray-200 group hover:bg-white hover:shadow-md transition-all duration-300">
                                    <div className="w-12 h-12 bg-logo-teal group-hover:bg-logo-teal/90 transition-colors duration-300 flex items-center justify-center mx-auto mb-4">
                                        <IconComponent className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-3xl font-light text-gray-900 mb-2">
                                        {metric.number}
                                    </div>
                                    <div className="text-sm font-semibold text-gray-900 mb-1">
                                        {metric.label}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        {metric.description}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Value Proposition */}
                <div className="mt-16 lg:mt-20 bg-logo-teal text-white p-8 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl lg:text-3xl font-light mb-6">
                                Ready to leverage our <span className="font-semibold">strategic advantages</span>?
                            </h3>
                            <p className="text-lg opacity-90 font-light leading-relaxed">
                                Let's discuss how our specialized expertise and proven methodology can accelerate 
                                your GCC establishment and drive transformational business outcomes.
                            </p>
                        </div>
                        
                        <div className="lg:text-right space-y-4">
                            <div className="space-y-2">
                                <div className="text-sm opacity-80">Next Step</div>
                                <div className="text-xl font-semibold">Strategic Consultation</div>
                            </div>
                            <button className="cursor-pointer bg-white text-logo-teal hover:bg-gray-50 px-8 py-4 font-semibold transition-all duration-200 inline-flex items-center">
                                Schedule Discussion
                                <Award className="w-5 h-5 ml-3" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurAdvantage;