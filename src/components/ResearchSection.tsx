import { Microscope, Brain, Heart, Dna, Users, BookOpen, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const ResearchSection = () => {
  return (
    <section id="research" className="py-20 bg-background relative">
      {/* DNA Pattern Background */}
      <div className="absolute inset-0 dna-pattern opacity-10"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="bg-card/60 backdrop-blur-sm border-primary/20">
            <Microscope className="h-3 w-3 mr-2" />
            Advanced Genetic Research
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Accelerating
            <br />
            <span className="dna-helix bg-clip-text text-transparent">
              Medical Breakthroughs
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empower groundbreaking research across genomics, personalized medicine, and rare diseases 
            while maintaining unprecedented privacy standards through FHE technology.
          </p>
        </div>

        {/* Research Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="bg-card/60 backdrop-blur-sm border-border p-6 text-center bio-glow hover:helix-glow transition-all duration-300">
            <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Heart className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Cardiovascular</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Heart disease genetics and therapeutic targets
            </p>
            <div className="text-xs text-muted-foreground">125 Active Studies</div>
          </Card>

          <Card className="bg-card/60 backdrop-blur-sm border-border p-6 text-center bio-glow hover:helix-glow transition-all duration-300">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Brain className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Neurological</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Brain disorders and cognitive function research
            </p>
            <div className="text-xs text-muted-foreground">89 Active Studies</div>
          </Card>

          <Card className="bg-card/60 backdrop-blur-sm border-border p-6 text-center bio-glow hover:helix-glow transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Dna className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Rare Diseases</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Genetic variants in orphan disease research
            </p>
            <div className="text-xs text-muted-foreground">67 Active Studies</div>
          </Card>

          <Card className="bg-card/60 backdrop-blur-sm border-border p-6 text-center bio-glow hover:helix-glow transition-all duration-300">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Pharmacogenomics</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Drug response and personalized treatments
            </p>
            <div className="text-xs text-muted-foreground">156 Active Studies</div>
          </Card>
        </div>

        {/* Featured Research Projects */}
        <div className="space-y-8 mb-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">Featured Research Projects</h3>
            <p className="text-muted-foreground">
              Join cutting-edge studies that are shaping the future of personalized medicine
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Research Project 1 */}
            <Card className="bg-card/60 backdrop-blur-sm border-border p-8 bio-glow hover:helix-glow transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <Badge variant="secondary">Alzheimer's Research</Badge>
                    <h4 className="text-xl font-bold text-foreground">
                      Early-Onset Alzheimer's Genetic Markers
                    </h4>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">$500</div>
                    <div className="text-sm text-muted-foreground">per participant</div>
                  </div>
                </div>

                <p className="text-muted-foreground">
                  Groundbreaking study identifying genetic risk factors for early-onset Alzheimer's disease. 
                  Your encrypted genetic data will help develop predictive models and targeted therapies.
                </p>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Enrollment Progress</span>
                    <span className="text-foreground font-medium">2,847 / 5,000</span>
                  </div>
                  <Progress value={57} className="h-2" />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>2,847 enrolled</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>Stanford Medicine</span>
                    </div>
                  </div>
                  <Button size="sm">
                    Join Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Research Project 2 */}
            <Card className="bg-card/60 backdrop-blur-sm border-border p-8 bio-glow hover:helix-glow transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <Badge variant="secondary">Cancer Genomics</Badge>
                    <h4 className="text-xl font-bold text-foreground">
                      Precision Oncology Biomarkers
                    </h4>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">$750</div>
                    <div className="text-sm text-muted-foreground">per participant</div>
                  </div>
                </div>

                <p className="text-muted-foreground">
                  Revolutionary cancer treatment research using FHE-protected genetic analysis to identify 
                  novel therapeutic targets and biomarkers for personalized cancer care.
                </p>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Enrollment Progress</span>
                    <span className="text-foreground font-medium">1,523 / 3,000</span>
                  </div>
                  <Progress value={51} className="h-2" />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>1,523 enrolled</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>MIT & Harvard</span>
                    </div>
                  </div>
                  <Button size="sm">
                    Join Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Research Impact */}
        <div className="bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-8 bio-glow">
          <div className="text-center space-y-6 mb-8">
            <h3 className="text-3xl font-bold text-foreground">Research Impact</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your participation drives real medical breakthroughs while maintaining complete genetic privacy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">47</div>
              <div className="text-sm text-muted-foreground">Published Papers</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-secondary">12</div>
              <div className="text-sm text-muted-foreground">FDA Approvals</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-accent">250K+</div>
              <div className="text-sm text-muted-foreground">Lives Impacted</div>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="dna-glow">
              <Microscope className="mr-2 h-5 w-5" />
              Start Contributing to Research
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;