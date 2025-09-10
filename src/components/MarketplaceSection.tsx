import { ShoppingCart, TrendingUp, Users, Shield, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MarketplaceSection = () => {
  return (
    <section id="marketplace" className="py-20 bg-background relative">
      {/* DNA Pattern Background */}
      <div className="absolute inset-0 dna-pattern opacity-10"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="bg-card/60 backdrop-blur-sm border-primary/20">
            <ShoppingCart className="h-3 w-3 mr-2" />
            Genetic Data Marketplace
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Trade Genetic Insights
            <br />
            <span className="dna-helix bg-clip-text text-transparent">
              Securely & Privately
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with researchers, pharmaceutical companies, and institutions while maintaining 
            complete control over your genetic information through FHE encryption.
          </p>
        </div>

        {/* Marketplace Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="bg-card/60 backdrop-blur-sm border-border p-6 text-center bio-glow">
            <div className="text-3xl font-bold text-primary">10K+</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </Card>
          <Card className="bg-card/60 backdrop-blur-sm border-border p-6 text-center bio-glow">
            <div className="text-3xl font-bold text-secondary">$2.5M</div>
            <div className="text-sm text-muted-foreground">Total Volume</div>
          </Card>
          <Card className="bg-card/60 backdrop-blur-sm border-border p-6 text-center bio-glow">
            <div className="text-3xl font-bold text-accent">500+</div>
            <div className="text-sm text-muted-foreground">Research Projects</div>
          </Card>
          <Card className="bg-card/60 backdrop-blur-sm border-border p-6 text-center bio-glow">
            <div className="text-3xl font-bold text-primary">99.9%</div>
            <div className="text-sm text-muted-foreground">Privacy Rate</div>
          </Card>
        </div>

        {/* Featured Datasets */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-foreground text-center">Featured Research Opportunities</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Dataset Card 1 */}
            <Card className="bg-card/60 backdrop-blur-sm border-border overflow-hidden hover:helix-glow transition-all duration-300">
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <Badge variant="secondary" className="text-xs">Pharmacogenomics</Badge>
                    <h4 className="font-semibold text-foreground">Drug Response Analysis</h4>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">4.9</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Contribute to personalized medicine research by sharing encrypted genetic variants 
                  related to drug metabolism and efficacy.
                </p>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>2,341 participants</span>
                  </div>
                  <div className="text-lg font-bold text-primary">$150</div>
                </div>
                
                <Button size="sm" className="w-full">
                  Join Research
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>

            {/* Dataset Card 2 */}
            <Card className="bg-card/60 backdrop-blur-sm border-border overflow-hidden hover:helix-glow transition-all duration-300">
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <Badge variant="secondary" className="text-xs">Rare Diseases</Badge>
                    <h4 className="font-semibold text-foreground">Genetic Variant Discovery</h4>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">4.8</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Help identify novel genetic variants associated with rare diseases while 
                  maintaining complete anonymity through FHE.
                </p>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>856 participants</span>
                  </div>
                  <div className="text-lg font-bold text-primary">$300</div>
                </div>
                
                <Button size="sm" className="w-full">
                  Join Research
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>

            {/* Dataset Card 3 */}
            <Card className="bg-card/60 backdrop-blur-sm border-border overflow-hidden hover:helix-glow transition-all duration-300">
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <Badge variant="secondary" className="text-xs">Population Health</Badge>
                    <h4 className="font-semibold text-foreground">Longevity & Aging Study</h4>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">4.7</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Participate in groundbreaking longevity research by contributing genetic data 
                  related to healthy aging and lifespan extension.
                </p>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>5,123 participants</span>
                  </div>
                  <div className="text-lg font-bold text-primary">$200</div>
                </div>
                
                <Button size="sm" className="w-full">
                  Join Research
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-8">
            <Button size="lg" className="dna-glow">
              <TrendingUp className="mr-2 h-5 w-5" />
              Browse All Opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;