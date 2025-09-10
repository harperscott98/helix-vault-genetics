import { ArrowRight, Shield, Lock, Database, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import dnaHeroImage from "@/assets/dna-hero.jpg";

const DnaHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with DNA Hero Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${dnaHeroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>

      {/* DNA Pattern Overlay */}
      <div className="absolute inset-0 dna-pattern opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Main Headline */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-card/60 backdrop-blur-sm border border-border rounded-full px-4 py-2 bio-glow">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Fully Homomorphic Encryption</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Your Genetic Data,
              <br />
              <span className="dna-helix bg-clip-text text-transparent animate-dna-rotate">
                Always Protected
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trade genetic insights while keeping your DNA completely private. 
              Revolutionary FHE technology ensures your genetic information never leaves your control.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground dna-glow">
              Explore Marketplace
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-muted">
              Learn About FHE
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="bg-card/60 backdrop-blur-sm border-border p-6 bio-glow hover:helix-glow transition-all duration-300">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Zero-Knowledge Privacy</h3>
                <p className="text-sm text-muted-foreground">
                  Your genetic data is encrypted at source and never exposed, even during analysis.
                </p>
              </div>
            </Card>

            <Card className="bg-card/60 backdrop-blur-sm border-border p-6 bio-glow hover:helix-glow transition-all duration-300">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Database className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Secure Marketplace</h3>
                <p className="text-sm text-muted-foreground">
                  Trade genetic insights with researchers while maintaining complete data sovereignty.
                </p>
              </div>
            </Card>

            <Card className="bg-card/60 backdrop-blur-sm border-border p-6 bio-glow hover:helix-glow transition-all duration-300">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Instant Computation</h3>
                <p className="text-sm text-muted-foreground">
                  Run complex genetic analysis on encrypted data without revealing sensitive information.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Animated DNA Strands */}
      <div className="absolute bottom-10 left-10 w-20 h-20 opacity-20">
        <div className="w-full h-full dna-helix rounded-full animate-helix-spin"></div>
      </div>
      <div className="absolute top-20 right-20 w-16 h-16 opacity-15">
        <div className="w-full h-full dna-helix rounded-full animate-helix-spin" style={{ animationDelay: '3s' }}></div>
      </div>
    </section>
  );
};

export default DnaHero;