import { Shield, Lock } from "lucide-react";
import WalletConnector from "./WalletConnector";

const DnaHeader = () => {
  return (
    <header className="w-full bg-card/80 backdrop-blur-md border-b border-border dna-pattern relative z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 dna-helix rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div className="absolute inset-0 dna-helix rounded-lg animate-pulse-bio opacity-50"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">
                FHE Protected Genetics
              </h1>
              <p className="text-xs text-muted-foreground">
                Encrypted Genetic Data Marketplace
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#marketplace" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Marketplace
            </a>
            <a href="#privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <Lock className="h-3 w-3" />
              Privacy
            </a>
            <a href="#research" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Research
            </a>
          </nav>

          {/* Wallet Connection */}
          <WalletConnector />
        </div>
      </div>
      
      {/* DNA Pattern Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
    </header>
  );
};

export default DnaHeader;