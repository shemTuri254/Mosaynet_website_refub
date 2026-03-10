import { Link } from "wouter";
import { CheckCircle2, Zap } from "lucide-react";
import { motion } from "framer-motion";

interface PackageCardProps {
  speed: string;
  name: string;
  price: string;
  features?: string[];
  popular?: boolean;
  delay?: number;
}

export function PackageCard({ speed, name, price, features = [], popular = false, delay = 0 }: PackageCardProps) {
  const defaultFeatures = [
    "Unlimited Data",
    "Free Installation",
    "Free Wi-Fi Modem",
    "24/7 Customer Support"
  ];

  const allFeatures = [...defaultFeatures, ...features];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative bg-card rounded-3xl p-8 border hover-lift ${
        popular ? 'border-accent shadow-xl shadow-accent/10' : 'border-border'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground font-bold px-4 py-1 rounded-full text-sm flex items-center gap-1 shadow-md">
          <Zap className="w-4 h-4" /> Most Popular
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
        <div className="flex items-end justify-center gap-1 mb-4 text-primary">
          <span className="text-6xl font-black font-display tracking-tighter leading-none">{speed}</span>
          <span className="text-xl font-bold mb-1">Mbps</span>
        </div>
        <div className="text-3xl font-bold text-foreground">
          {price}<span className="text-base font-normal text-muted-foreground">/mo</span>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {allFeatures.map((feature, i) => (
          <div key={i} className="flex items-center gap-3">
            <CheckCircle2 className={`w-5 h-5 ${popular ? 'text-accent' : 'text-primary'}`} />
            <span className="text-foreground font-medium">{feature}</span>
          </div>
        ))}
      </div>

      <Link 
        href={`/contact?pkg=${encodeURIComponent(`${speed}Mbps ${name}`)}`} 
        className={`w-full block text-center py-4 rounded-xl font-bold transition-all duration-300 ${
          popular 
            ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20' 
            : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground'
        }`}
      >
        Get Connected Now
      </Link>
    </motion.div>
  );
}
