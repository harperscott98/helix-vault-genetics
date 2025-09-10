import { Lock, Shield, Eye, Key, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PrivacySection = () => {
  return (
    <section id="privacy" className="py-20 bg-muted/30 relative">
      {/* DNA Pattern Background */}
      <div className="absolute inset-0 dna-pattern opacity-10"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="bg-card/60 backdrop-blur-sm border-primary/20">
            <Lock className="h-3 w-3 mr-2" />
            Fully Homomorphic Encryption
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Uncompromising
            <br />
            <span className="dna-helix bg-clip-text text-transparent">
              Genetic Privacy
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your genetic data remains encrypted at all times, even during computation. 
            Revolutionary FHE technology ensures zero-knowledge analysis without ever exposing your DNA.
          </p>
        </div>

        {/* Privacy Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="bg-card/60 backdrop-blur-sm border-border p-6 text-center bio-glow hover:helix-glow transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">End-to-End Encryption</h3>
            <p className="text-sm text-muted-foreground">
              Data encrypted from collection to analysis, never exposed in plaintext.
            </p>
          </Card>

          <Card className="bg-card/60 backdrop-blur-sm border-border p-6 text-center bio-glow hover:helix-glow transition-all duration-300">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Eye className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Zero-Knowledge Proofs</h3>
            <p className="text-sm text-muted-foreground">
              Verify data integrity without revealing sensitive genetic information.
            </p>
          </Card>

          <Card className="bg-card/60 backdrop-blur-sm border-border p-6 text-center bio-glow hover:helix-glow transition-all duration-300">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Key className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">User-Controlled Keys</h3>
            <p className="text-sm text-muted-foreground">
              You maintain complete control over encryption keys and data access.
            </p>
          </Card>

          <Card className="bg-card/60 backdrop-blur-sm border-border p-6 text-center bio-glow hover:helix-glow transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Quantum-Resistant</h3>
            <p className="text-sm text-muted-foreground">
              Future-proof encryption that withstands quantum computing threats.
            </p>
          </Card>
        </div>

        {/* How FHE Works */}
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-bold text-foreground">How FHE Protects Your DNA</h3>
            <p className="text-muted-foreground">
              Fully Homomorphic Encryption allows computation on encrypted data without decryption
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto dna-glow">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground">Upload & Encrypt</h4>
              <p className="text-muted-foreground">
                Your genetic data is immediately encrypted using advanced FHE algorithms before leaving your device.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto dna-glow">
                <span className="text-2xl font-bold text-secondary">2</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground">Compute Privately</h4>
              <p className="text-muted-foreground">
                Researchers perform analysis directly on encrypted data without ever seeing your genetic information.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto dna-glow">
                <span className="text-2xl font-bold text-accent">3</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground">Receive Results</h4>
              <p className="text-muted-foreground">
                Get insights and compensation while your raw genetic data remains completely private and encrypted.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Guarantees */}
        <div className="mt-16 bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-8 bio-glow">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Privacy Guarantees</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Your DNA never leaves your control</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">No data brokers or third-party access</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Immediate data deletion upon request</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Mathematically proven privacy protection</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Transparent audit logs and processes</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">GDPR and HIPAA compliant infrastructure</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
              Read Technical Whitepaper
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;