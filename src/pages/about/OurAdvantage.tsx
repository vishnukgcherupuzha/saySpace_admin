import PopoverForm from '@/components/PopoverForm';
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
            title: "GCC Expertise",
            description: "Unlike broad-based consultancies, we concentrate solely on the establishment and enhancement of GCCs, delivering specialized knowledge and highly customized solutions for this niche area.",
            highlights: ["Exclusively GCC Focused", "In-depth Domain Knowledge", "Customized Strategies"]
        },
        {
            id: 2,
            icon: Layers,
            title: "Lifecycle Services",
            description: "We provide end-to-end support throughout the entire GCC journey—from initial planning and setup to continuous management and refinement—ensuring smooth coordination and sustainable success.",
            highlights: ["Complete Lifecycle Coverage", "Integrated Solutions", "Sustained Growth"]
        },
        {
            id: 3,
            icon: Globe,
            title: "Global Insight",
            description: "Our team merges extensive understanding of the Indian market with international perspectives to deliver culturally aware solutions that effectively connect global operations.",
            highlights: ["Indian Market Expertise", "Worldwide Perspective", "Culturally Tuned"]
        },
        {
            id: 4,
            icon: Zap,
            title: "Agile Delivery",
            description: "As a boutique consultancy, we provide focused support, quick decision-making, and agility to adapt strategies to your specific needs, ensuring a personalized GCC approach.",
            highlights: ["Focused Support", "Swift Decision Process", "Adaptable Approaches"]
        },
        {
            id: 5,
            icon: Network,
            title: "Partner Network",
            description: "We have cultivated strong alliances with prominent real estate developers, legal experts, technology vendors, and educational bodies in India, granting clients immediate access to a thriving ecosystem.",
            highlights: ["Established Network", "Trusted Alliances", "Ready-Made Infrastructure"]
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
                            <PopoverForm
                                title="Schedule Discussion"
                                subtitle="Let's discuss your GCC requirements and how we can help."
                                submitButtonText="Schedule Discussion"
                                successMessage="Thank you! We'll contact you to schedule your consultation."
                            >
                                <button className="cursor-pointer bg-white text-logo-teal hover:bg-gray-50 px-8 py-4 font-semibold transition-all duration-200 inline-flex items-center">
                                    Schedule Discussion
                                    <Award className="w-5 h-5 ml-3" />
                                </button>
                            </PopoverForm>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurAdvantage;