
import {
    Target,
    Layers,
    Globe,
    Zap,
    Network,
    Award,
} from 'lucide-react';

const OurAdvantage = () => {
    const advantages = [
        {
            id: 1,
            icon: Target,
            title: "Specialized GCC Focus",
            description: "Unlike generalist consultancies, we exclusively focus on GCC establishment and optimization, providing dedicated expertise in this specific domain. Our singular focus ensures deeper insights and more tailored solutions.",
            color: "from-logo-teal to-logo-teal/80",
            bgColor: "from-logo-teal/10 to-logo-teal/5",
            highlights: ["100% GCC Focused", "Domain Expertise", "Tailored Solutions"]
        },
        {
            id: 2,
            icon: Layers,
            title: "End-to-End Capabilities",
            description: "We offer comprehensive services across the entire GCC lifecycle, from strategy and setup to ongoing management and optimization. This holistic approach ensures seamless integration and long-term success.",
            color: "from-cta-coral to-cta-coral/80",
            bgColor: "from-cta-coral/10 to-cta-coral/5",
            highlights: ["Full Lifecycle Support", "Seamless Integration", "Long-term Success"]
        },
        {
            id: 3,
            icon: Globe,
            title: "Local Expertise, Global Perspective",
            description: "Our team combines deep knowledge of the Indian ecosystem with global insights, ensuring culturally aligned solutions that bridge international operations effectively.",
            color: "from-logo-beige to-logo-beige/80",
            bgColor: "from-logo-beige/10 to-logo-beige/5",
            highlights: ["Indian Ecosystem", "Global Insights", "Cultural Alignment"]
        },
        {
            id: 4,
            icon: Zap,
            title: "Agile Approach",
            description: "As a boutique consulting firm, we offer personalized attention, faster decision-making, and the flexibility to adapt to your unique requirements, ensuring a tailored GCC strategy.",
            color: "from-logo-teal to-cta-coral",
            bgColor: "from-logo-teal/5 to-cta-coral/5",
            highlights: ["Personalized Attention", "Faster Decisions", "Flexible Solutions"]
        },
        {
            id: 5,
            icon: Network,
            title: "Strong Partner Network",
            description: "We've developed relationships with key real estate developers, legal firms, technology providers, and educational institutions in India, providing our clients with a ready ecosystem for success.",
            color: "from-cta-coral to-logo-beige",
            bgColor: "from-cta-coral/5 to-logo-beige/5",
            highlights: ["Ready Ecosystem", "Key Partnerships", "Instant Access"]
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-dividers/20 to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-logo-teal/20 backdrop-blur-sm border border-logo-teal/40 rounded-full mb-6">
                        <Award className="w-4 h-4 text-logo-teal mr-2" />
                        <span className="font-body text-sm font-medium text-logo-teal">
                            Competitive Edge
                        </span>
                    </div>

                    <h2 className="font-header font-bold text-4xl lg:text-5xl text-foreground mb-6">
                        Our <span className="text-logo-teal">Advantage</span>
                    </h2>

                    <p className="font-body text-xl text-cta-coral font-semibold max-w-3xl mx-auto mb-4">
                        Why Choose Us
                    </p>

                    <p className="font-body text-lg text-muted-foreground max-w-4xl mx-auto">
                        Our unique approach and specialized focus make us the ideal partner for your GCC journey
                    </p>
                </div>

                {/* Advantages Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                    {advantages.map((advantage) => {
                        const IconComponent = advantage.icon;
                        return (
                            <div
                                key={advantage.id}
                                className="group relative"
                            >
                                {/* Main Card */}
                                <div className={`bg-gradient-to-br ${advantage.bgColor} border border-border rounded-3xl p-8 lg:p-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden`}>

                                    {/* Background Pattern */}
                                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                                        <div className={`w-full h-full bg-gradient-to-br ${advantage.color} rounded-full blur-3xl`}></div>
                                    </div>

                                    <div className="relative">
                                        {/* Header */}
                                        <div className="flex items-start space-x-4 mb-6">
                                            <div className={`w-16 h-16 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                                                <IconComponent className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-header font-bold text-xl lg:text-2xl text-card-foreground mb-2">
                                                    {advantage.title}
                                                </h3>
                                                <div className={`w-12 h-1 bg-gradient-to-r ${advantage.color} rounded-full`}></div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="font-body text-muted-foreground leading-relaxed mb-6">
                                            {advantage.description}
                                        </p>

                                        {/* Highlights */}
                                        <div className="space-y-3">
                                            {advantage.highlights.map((highlight, idx) => (
                                                <div key={idx} className="flex items-center space-x-3">
                                                    <div className={`w-2 h-2 bg-gradient-to-r ${advantage.color} rounded-full`}></div>
                                                    <span className="font-body text-sm text-muted-foreground font-medium">
                                                        {highlight}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Number Badge */}
                                        <div className="absolute top-6 right-6">
                                            <div className={`w-10 h-10 bg-gradient-to-br ${advantage.color} rounded-full flex items-center justify-center text-white font-header font-bold shadow-lg`}>
                                                {advantage.id}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <div className="grid grid-cols-2 gap-3">
                        {[
                            { icon: Target, number: "100%", label: "GCC Focus", color: "from-logo-teal to-logo-teal/80" },
                            { icon: Layers, number: "360°", label: "Coverage", color: "from-cta-coral to-cta-coral/80" },
                            { icon: Zap, number: "50%", label: "Faster Setup", color: "from-logo-beige to-logo-beige/80" },
                            { icon: Network, number: "50+", label: "Partners", color: "from-logo-teal to-cta-coral" }
                        ].map((metric, index) => {
                            const IconComponent = metric.icon;
                            return (
                                <div key={index} className="text-center p-6 bg-card border border-border rounded-2xl hover:shadow-lg transition-all duration-300">
                                    <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md`}>
                                        <IconComponent className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="font-header font-bold text-2xl text-foreground mb-2">
                                        {metric.number}
                                    </div>
                                    <div className="font-body text-sm text-muted-foreground">
                                        {metric.label}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>


            </div>
        </section>
    );
};

export default OurAdvantage;