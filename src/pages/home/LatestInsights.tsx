import { 
  Calendar,
  ArrowRight,
  TrendingUp,
  Users,
  DollarSign,
  BookOpen,
  Eye,
  Clock,
  Tag,
  ExternalLink
} from 'lucide-react';

const LatestInsights = () => {
  const insights = [
    {
      id: 1,
      date: "March 5, 2025",
      title: "5 Reasons Why India's GCC Ecosystem Is Booming in 2025",
      excerpt: "Explore the key factors driving India's emergence as India's premier GCC destination.",
      category: "Market Trends",
      readTime: "5 min read",
      featured: true,
      icon: TrendingUp,
      color: "from-logo-teal to-logo-teal/80",
      bgColor: "from-logo-teal/10 to-logo-teal/5",
      tags: ["GCC", "India", "Market Analysis"]
    },
    {
      id: 2,
      date: "February 18, 2025",
      title: "GCC Talent Landscape in India: 2025 Edition",
      excerpt: "An in-depth analysis of the talent pool and recruitment strategies for GCCs in India.",
      category: "Talent Management",
      readTime: "7 min read",
      featured: false,
      icon: Users,
      color: "from-cta-coral to-cta-coral/80",
      bgColor: "from-cta-coral/10 to-cta-coral/5",
      tags: ["Talent", "Recruitment", "HR Strategy"]
    },
    {
      id: 3,
      date: "January 30, 2025",
      title: "How to Optimize Costs in Your India GCC Operations",
      excerpt: "Practical strategies to maximize ROI while maintaining quality in your GCC.",
      category: "Cost Optimization",
      readTime: "6 min read",
      featured: false,
      icon: DollarSign,
      color: "from-logo-beige to-logo-beige/80",
      bgColor: "from-logo-beige/10 to-logo-beige/5",
      tags: ["Cost Management", "ROI", "Operations"]
    }
  ];

  const categories = [
    { name: "Market Trends", count: 12, color: "bg-logo-teal" },
    { name: "Talent Management", count: 8, color: "bg-cta-coral" },
    { name: "Cost Optimization", count: 6, color: "bg-logo-beige" },
    { name: "Compliance", count: 5, color: "bg-logo-teal/80" }
  ];

  const formatDate = (dateString: string ) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-dividers/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-cta-coral/20 backdrop-blur-sm border border-cta-coral/40 rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-cta-coral mr-2" />
            <span className="font-body text-sm font-medium text-cta-coral">
              Knowledge Hub
            </span>
          </div>
          
          <h2 className="font-header font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Latest <span className="text-cta-coral">Insights</span>
          </h2>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <p className="font-body text-xl text-muted-foreground">
              Stay updated with GCC trends and best practices
            </p>
          </div>

          <button className="group bg-gradient-to-r from-logo-teal to-logo-teal/90 hover:from-logo-teal/90 hover:to-logo-teal text-white px-6 py-3 rounded-xl font-header font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center mx-auto">
            View All
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
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
                    className={`bg-gradient-to-br ${insight.bgColor} border border-border rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}
                  >
                    <div className="p-8 lg:p-12">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        
                        {/* Content */}
                        <div className="lg:col-span-2 space-y-6">
                          
                          {/* Meta Info */}
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4 text-muted-foreground" />
                              <span className="font-body text-muted-foreground">
                                {formatDate(insight.date)}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4 text-muted-foreground" />
                              <span className="font-body text-muted-foreground">
                                {insight.readTime}
                              </span>
                            </div>
                            <span className={`px-3 py-1 bg-gradient-to-r ${insight.color} text-white text-xs font-medium rounded-full`}>
                              Featured
                            </span>
                          </div>
                          
                          {/* Title */}
                          <h3 className="font-header font-bold text-2xl lg:text-3xl text-foreground leading-tight group-hover:text-logo-teal transition-colors duration-200">
                            {insight.title}
                          </h3>
                          
                          {/* Excerpt */}
                          <p className="font-body text-lg text-muted-foreground leading-relaxed">
                            {insight.excerpt}
                          </p>
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {insight.tags.map((tag, index) => (
                              <span 
                                key={index}
                                className="inline-flex items-center px-3 py-1 bg-white/50 text-muted-foreground text-xs font-medium rounded-full border border-border"
                              >
                                <Tag className="w-3 h-3 mr-1" />
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          {/* Read More Button */}
                          <button className="group/btn inline-flex items-center text-logo-teal hover:text-logo-teal/80 font-header font-semibold transition-colors duration-200">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                          </button>
                        </div>

                        {/* Visual */}
                        <div className="relative">
                          <div className={`bg-gradient-to-br ${insight.bgColor} rounded-2xl border-2 border-dashed border-logo-teal/30 aspect-[4/3] flex flex-col items-center justify-center space-y-4`}>
                            <div className={`w-20 h-20 bg-gradient-to-br ${insight.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                              <IconComponent className="w-10 h-10 text-white" />
                            </div>
                            <div className="text-center">
                              <div className="font-header font-semibold text-lg text-logo-teal mb-2">
                                Article Image
                              </div>
                              <div className="font-body text-sm text-muted-foreground max-w-xs">
                                Featured article illustration
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Regular Articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {insights.filter(insight => !insight.featured).map((insight) => {
                const IconComponent = insight.icon;
                return (
                  <article 
                    key={insight.id}
                    className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                  >
                    {/* Image Placeholder */}
                    <div className={`bg-gradient-to-br ${insight.bgColor} aspect-[16/9] flex items-center justify-center relative overflow-hidden`}>
                      <div className={`w-16 h-16 bg-gradient-to-br ${insight.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 bg-gradient-to-r ${insight.color} text-white text-xs font-medium rounded-full`}>
                          {insight.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 space-y-4">
                      
                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span className="font-body">{formatDate(insight.date)}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span className="font-body">{insight.readTime}</span>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-header font-semibold text-xl text-foreground leading-tight group-hover:text-logo-teal transition-colors duration-200">
                        {insight.title}
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="font-body text-muted-foreground leading-relaxed">
                        {insight.excerpt}
                      </p>
                      
                      {/* Read More */}
                      <button className="group/btn inline-flex items-center text-cta-coral hover:text-cta-coral/80 font-header font-medium transition-colors duration-200">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
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
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-header font-semibold text-lg text-foreground mb-6 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-logo-teal" />
                Categories
              </h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <button 
                    key={index}
                    className="group w-full flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 ${category.color} rounded-full`}></div>
                      <span className="font-body text-foreground group-hover:text-logo-teal transition-colors duration-200">
                        {category.name}
                      </span>
                    </div>
                    <span className="font-body text-sm text-muted-foreground">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-logo-teal/5 to-cta-coral/5 border border-logo-teal/20 rounded-2xl p-6">
              <h3 className="font-header font-semibold text-lg text-foreground mb-4">
                Stay Updated
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-6">
                Get the latest GCC insights and industry trends delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-border rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-logo-teal focus:border-transparent"
                />
                <button className="w-full bg-gradient-to-r from-logo-teal to-logo-teal/90 hover:from-logo-teal/90 hover:to-logo-teal text-white py-3 rounded-lg font-header font-medium transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Popular Posts */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-header font-semibold text-lg text-foreground mb-6 flex items-center">
                <Eye className="w-5 h-5 mr-2 text-cta-coral" />
                Popular This Month
              </h3>
              <div className="space-y-4">
                {[
                  "GCC Setup Checklist 2025",
                  "Top 10 India Tech Parks",
                  "Talent Retention Strategies"
                ].map((title, index) => (
                  <button 
                    key={index}
                    className="group text-left w-full p-3 rounded-lg hover:bg-accent transition-colors duration-200"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-cta-coral to-cta-coral/80 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className="font-body text-sm text-foreground group-hover:text-logo-teal transition-colors duration-200">
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