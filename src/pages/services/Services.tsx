const Services: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-header font-bold text-4xl text-foreground mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-header font-semibold text-xl text-card-foreground mb-4">
              Business Setup
            </h3>
            <p className="font-body text-muted-foreground">
              Complete assistance in setting up your business operations in India.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-header font-semibold text-xl text-card-foreground mb-4">
              Legal Compliance
            </h3>
            <p className="font-body text-muted-foreground">
              Ensure your business meets all regulatory requirements.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-header font-semibold text-xl text-card-foreground mb-4">
              Consultation
            </h3>
            <p className="font-body text-muted-foreground">
              Expert advice on market entry and business strategy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;