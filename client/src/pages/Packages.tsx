import { motion } from "framer-motion";
import { PackageCard } from "@/components/PackageCard";
import { Link } from "wouter";

export function Packages() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-secondary/30">
      {/* Page Header */}
      <div className="text-center max-w-4xl mx-auto px-4 py-16">
        <motion.span 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block"
        >
          Mosaynet Fiber
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-foreground mb-6"
        >
          Choose The Perfect <br/>Internet Plan
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground"
        >
          All packages include a free modem, zero installation fees, and truly unlimited data. 
          Get the speeds you need for gaming, streaming, and working from home.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          <PackageCard 
            speed="15" 
            name="Starter" 
            price="KSh 2,500" 
            features={["Great for 1-2 devices", "Basic browsing & social media", "SD Video Streaming"]}
            delay={0.1} 
          />
          <PackageCard 
            speed="30" 
            name="Family" 
            price="KSh 4,000" 
            popular 
            features={["Great for 3-5 devices", "HD Video Streaming", "Smooth Video Calls"]}
            delay={0.2} 
          />
          <PackageCard 
            speed="50" 
            name="Premium" 
            price="KSh 5,500" 
            features={["Great for 5-8 devices", "4K Video Streaming", "Online Multiplayer Gaming"]}
            delay={0.3} 
          />
          <PackageCard 
            speed="100" 
            name="Ultimate" 
            price="KSh 9,000" 
            features={["10+ devices connected", "Multiple 4K Streams", "Heavy File Downloads"]}
            delay={0.4} 
          />
        </div>

        {/* Info Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-8 md:p-12 text-center text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl"
        >
          <div className="text-left max-w-2xl">
            <h3 className="text-3xl font-black mb-4">Not sure which plan is right for you?</h3>
            <p className="text-blue-100 text-lg">Our team can help you assess your household needs and recommend the perfect speed tier.</p>
          </div>
          <Link href="/contact" className="btn-accent whitespace-nowrap px-8">
            Speak to Sales
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
