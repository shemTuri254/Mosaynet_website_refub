import { Link } from "wouter";
import { ArrowRight, ShieldCheck, Zap, HeartHandshake, Router } from "lucide-react";
import { motion } from "framer-motion";
import { PackageCard } from "@/components/PackageCard";

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-primary z-0">
          {/* subtle abstract waves or glow */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          
          {/* landing page hero high speed fiber internet abstract technology */}
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop" 
              alt="Fiber background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
          >
            Experience <span className="text-accent">Lightning Fast</span> <br className="hidden md:block"/>
            Home Internet
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto"
          >
            Join Mosaynet Solutions today. Enjoy Free Installation, a Free Wi-Fi Modem, and unlimited streaming for your whole family.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/packages" className="btn-accent text-lg w-full sm:w-auto group">
              View Our Packages
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="w-full sm:w-auto px-8 py-3 rounded-full font-bold bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
              Contact Support
            </Link>
          </motion.div>
        </div>
        
        {/* Curved bottom separator */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none z-10" style={{ transform: 'rotate(180deg)' }}>
          <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black mb-4">Why Choose Mosaynet?</h2>
            <p className="text-muted-foreground text-lg">We provide reliable connectivity designed for the modern home, keeping you online when it matters most.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Super Fast Speeds", desc: "Buffer-free streaming and seamless gaming with speeds up to 100Mbps." },
              { icon: Router, title: "Free Equipment", desc: "Every new connection comes with free installation and a high-performance Wi-Fi router." },
              { icon: HeartHandshake, title: "Reliable Support", desc: "Our technical team is available 24/7 to ensure you stay connected without interruption." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-secondary/50 rounded-3xl p-8 text-center hover:bg-secondary transition-colors"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-secondary/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">Choose Your Plan</span>
            <h2 className="text-4xl font-black mb-4">High-Speed Packages</h2>
            <p className="text-muted-foreground text-lg">Select the perfect internet plan for your home. No hidden fees, no data caps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <PackageCard speed="15" name="Starter" price="KSh 2,500" delay={0.1} />
            <PackageCard speed="30" name="Family" price="KSh 4,000" popular delay={0.2} />
            <PackageCard speed="50" name="Premium" price="KSh 5,500" delay={0.3} />
            <PackageCard speed="100" name="Ultimate" price="KSh 9,000" delay={0.4} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-primary">
        {/* modern living room happy family using internet laptop tablets */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1920&h=1080&fit=crop" 
            alt="Family using internet" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center text-white">
          <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-accent" />
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to upgrade your home internet?</h2>
          <p className="text-xl text-blue-100 mb-10">Join thousands of satisfied customers who trust Mosaynet Solutions for their daily connectivity needs.</p>
          <Link href="/contact" className="btn-accent text-lg px-10 py-4">
            Connect Me Today
          </Link>
        </div>
      </section>
    </div>
  );
}
