import {
  Calendar,
  ArrowRight,
  TrendingUp,
  Users,
  DollarSign,
  BookOpen,
  Clock,
  Tag,
  ExternalLink,
  Mail
} from 'lucide-react';

const LatestInsights = () => {
  const insights = [
    {
      id: 1,
      date: "June 10, 2025",
      title: "India's Tier-2 Cities: The New Frontier for GCC Expansion",
      excerpt: "Discover why Tier-2 cities like Coimbatore and Vizag are emerging as hotspots for cost-effective and talent-rich GCC setups.",
      category: "Market Trends",
      readTime: "6 min read",
      featured: true,
      icon: TrendingUp,
      tags: ["GCC Expansion", "India", "Emerging Markets"]
    },
    {
      id: 2,
      date: "May 28, 2025",
      title: "Leadership Hiring for GCCs: What CXOs Expect in 2025",
      excerpt: "Understand the evolving expectations of global leaders and what it takes to attract CXO-level talent to your GCC.",
      category: "Talent Management",
      readTime: "7 min read",
      featured: false,
      icon: Users,
      tags: ["CXO Hiring", "Leadership", "Talent Trends"]
    },
    {
      id: 3,
      date: "April 15, 2025",
      title: "Beyond Cost: Unlocking Strategic Value Through India GCCs",
      excerpt: "A look at how leading companies are leveraging India GCCs not just for savings, but as strategic innovation hubs.",
      category: "Cost Optimization",
      readTime: "5 min read",
      featured: false,
      icon: DollarSign,
      tags: ["Strategy", "Innovation", "Value Creation"]
    }
  ];

  const categories = [
    { name: "Market Trends", count: 12 },
    { name: "Talent Management", count: 8 },
    { name: "Cost Optimization", count: 6 },
    { name: "Compliance", count: 5 }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 bg-cta-coral/5 border border-cta-coral/15 text-cta-coral text-sm font-medium tracking-wide mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            KNOWLEDGE HUB
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Latest <span className="font-semibold text-cta-coral">Insights</span>
          </h2>

          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed mb-8">
            Stay informed with expert analysis, industry trends, and strategic guidance for your GCC journey
          </p>

          <button className="cursor-pointer group bg-logo-teal hover:bg-logo-teal/90 text-white px-6 py-3 font-semibold transition-all duration-200 inline-flex items-center">
            View All Insights
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Main Content */}
          <div className="lg:col-span-3">

            {/* Featured Article */}
            <div className="mb-12">
              {insights.filter(insight => insight.featured).map((insight) => {
                const IconComponent = insight.icon;
                return (
                  <article
                    key={insight.id}
                    className="bg-white border border-gray-200 p-8 lg:p-12 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                      {/* Content - 8 columns */}
                      <div className="lg:col-span-8 space-y-6">

                        {/* Featured Badge */}
                        <div className="inline-flex items-center px-3 py-1 bg-cta-coral text-white text-sm font-medium">
                          FEATURED ARTICLE
                        </div>

                        {/* Meta Info */}
                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(insight.date)}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{insight.readTime}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Tag className="w-4 h-4" />
                            <span>{insight.category}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl lg:text-3xl font-light text-gray-900 leading-tight group-hover:text-logo-teal transition-colors duration-200">
                          {insight.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-lg text-gray-600 leading-relaxed font-light">
                          {insight.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {insight.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Read More Button */}
                        <button className="cursor-pointer group/btn inline-flex items-center text-logo-teal hover:text-logo-teal/80 font-semibold transition-colors duration-200">
                          Read Full Article
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                        </button>
                      </div>

                      {/* Visual - 4 columns */}
                      <div className="lg:col-span-4">
                        <div className="bg-gray-100 aspect-[4/3] flex items-center justify-center">
                          <div className="w-16 h-16 bg-logo-teal flex items-center justify-center">
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Regular Articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {insights.filter(insight => !insight.featured).map((insight) => {
                const IconComponent = insight.icon;
                return (
                  <article
                    key={insight.id}
                    className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 group"
                  >
                    {/* Image Placeholder */}
                    <div className="bg-gray-100 aspect-[16/9] flex items-center justify-center relative">
                      <div className="w-12 h-12 bg-logo-teal flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white text-gray-700 text-xs font-medium shadow-sm">
                          {insight.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">

                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(insight.date)}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{insight.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-gray-900 leading-tight group-hover:text-logo-teal transition-colors duration-200">
                        {insight.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 leading-relaxed font-light text-sm">
                        {insight.excerpt}
                      </p>

                      {/* Read More */}
                      <button className="cursor-pointer group/btn inline-flex items-center text-cta-coral hover:text-cta-coral/80 font-medium transition-colors duration-200 text-sm">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">

            {/* Categories */}
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-4 border-b border-gray-200 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-logo-teal" />
                Categories
              </h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="group w-full flex items-center justify-between p-3 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="text-gray-700 group-hover:text-logo-teal transition-colors duration-200 font-medium">
                      {category.name}
                    </span>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 min-w-[2rem] text-center">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-logo-teal text-white p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                Stay Updated
              </h3>
              <p className="text-sm opacity-90 mb-6 leading-relaxed">
                Get the latest GCC insights and industry trends delivered to your inbox monthly.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <button className="cursor-pointer w-full bg-white text-logo-teal py-3 font-semibold hover:bg-gray-50 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Popular Posts */}
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-4 border-b border-gray-200 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-cta-coral" />
                Popular This Month
              </h3>
              <div className="space-y-4">
                {[
                  "GCC Setup Checklist 2025",
                  "Top 10 India Tech Parks for GCCs",
                  "Talent Retention Strategies That Work"
                ].map((title, index) => (
                  <button
                    key={index}
                    className="group text-left w-full p-3 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-cta-coral text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-sm text-gray-700 group-hover:text-logo-teal transition-colors duration-200 font-medium leading-relaxed">
                        {title}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;