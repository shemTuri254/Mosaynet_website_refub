import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

export function Contact() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const prefilledPackage = searchParams.get("pkg");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const createInquiry = useCreateInquiry();

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      package: prefilledPackage || "",
    }
  });

  const onSubmit = async (data: InsertInquiry) => {
    try {
      await createInquiry.mutateAsync(data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-foreground mb-4"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Ready to connect? Fill out the form below and our team will get back to you immediately to arrange your free installation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Contact Info Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-secondary rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+254 752 524 792</p>
                    <p className="text-sm text-primary font-medium mt-1">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Email</h4>
                    <p className="text-muted-foreground">sales@mosaynet.co.ke</p>
                    <p className="text-muted-foreground">support@mosaynet.co.ke</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Office</h4>
                    <p className="text-muted-foreground">Business Center<br />Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Area */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-card border border-border shadow-xl rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <motion.div 
                  initial={{ scale: 0 }} animate={{ scale: 1 }}
                  className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle className="w-12 h-12" />
                </motion.div>
                <h3 className="text-3xl font-black mb-4">Request Received!</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Thank you for choosing Mosaynet. One of our sales representatives will contact you shortly to confirm your installation details.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="btn-primary"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Full Name</label>
                    <input 
                      {...register("name")}
                      className="w-full px-5 py-4 rounded-xl bg-secondary/50 border border-transparent focus:border-primary focus:bg-background outline-none transition-colors"
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Phone Number</label>
                    <input 
                      {...register("phone")}
                      className="w-full px-5 py-4 rounded-xl bg-secondary/50 border border-transparent focus:border-primary focus:bg-background outline-none transition-colors"
                      placeholder="07XX XXX XXX"
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Email Address</label>
                    <input 
                      {...register("email")}
                      type="email"
                      className="w-full px-5 py-4 rounded-xl bg-secondary/50 border border-transparent focus:border-primary focus:bg-background outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Interested Package</label>
                    <select 
                      {...register("package")}
                      className="w-full px-5 py-4 rounded-xl bg-secondary/50 border border-transparent focus:border-primary focus:bg-background outline-none transition-colors appearance-none"
                    >
                      <option value="">I'm not sure yet</option>
                      <option value="15Mbps Starter">15 Mbps Starter (KSh 2,500)</option>
                      <option value="30Mbps Family">30 Mbps Family (KSh 4,000)</option>
                      <option value="50Mbps Premium">50 Mbps Premium (KSh 5,500)</option>
                      <option value="100Mbps Ultimate">100 Mbps Ultimate (KSh 9,000)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Your Location / Message</label>
                  <textarea 
                    {...register("message")}
                    rows={4}
                    className="w-full px-5 py-4 rounded-xl bg-secondary/50 border border-transparent focus:border-primary focus:bg-background outline-none transition-colors resize-none"
                    placeholder="Please include your building/estate name and area for coverage check..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending Request..." : "Submit Connection Request"}
                </button>
                
                {createInquiry.isError && (
                  <p className="text-red-500 text-center mt-2 font-medium">Failed to submit. Please try again or contact us via WhatsApp.</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
