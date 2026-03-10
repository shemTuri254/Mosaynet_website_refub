import { motion } from "framer-motion";
import { Target, Users, Map, Shield } from "lucide-react";

export function About() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Page Header */}
      <div className="bg-primary py-20 px-4 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black mb-4"
          >
            About Mosaynet
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Connecting communities, empowering lives through reliable high-speed internet.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-black text-foreground">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mosaynet Solutions was born out of a simple vision: to bridge the digital divide by providing fast, affordable, and incredibly reliable internet services. Inspired by industry leaders, we strive to deliver enterprise-grade connectivity directly to your living room.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We understand that the internet is no longer a luxury—it's a necessity for education, work, and entertainment. That's why we don't just sell bandwidth; we deliver seamless digital experiences backed by a dedicated local support team.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-accent/20 rounded-3xl transform rotate-3 z-0"></div>
            {/* team of network engineers technicians smiling */}
            <img 
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800&q=80" 
              alt="Mosaynet Team" 
              className="relative z-10 rounded-3xl shadow-2xl object-cover aspect-video w-full"
            />
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black">Our Core Values</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Target, title: "Excellence", text: "We deliver nothing short of the best network performance." },
            { icon: Users, title: "Customer First", text: "Your satisfaction drives every decision we make." },
            { icon: Map, title: "Wider Coverage", text: "Continuously expanding our fiber footprint to reach more homes." },
            { icon: Shield, title: "Reliability", text: "A robust infrastructure that stays up when you need it." }
          ].map((val, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-8 rounded-3xl border border-border shadow-lg shadow-black/5 text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <val.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{val.title}</h3>
              <p className="text-muted-foreground">{val.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
