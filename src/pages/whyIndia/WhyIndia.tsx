const WhyIndia: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-header font-bold text-4xl text-foreground mb-8">Why India?</h1>
        <div className="space-y-8">
          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="font-header font-semibold text-2xl text-card-foreground mb-4">
              Growing Economy
            </h2>
            <p className="font-body text-muted-foreground">
              India is one of the world's fastest-growing major economies with tremendous opportunities.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="font-header font-semibold text-2xl text-card-foreground mb-4">
              Skilled Workforce
            </h2>
            <p className="font-body text-muted-foreground">
              Access to a large pool of skilled professionals across various industries.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="font-header font-semibold text-2xl text-card-foreground mb-4">
              Government Support
            </h2>
            <p className="font-body text-muted-foreground">
              Various state and central government policies supporting business growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyIndia;