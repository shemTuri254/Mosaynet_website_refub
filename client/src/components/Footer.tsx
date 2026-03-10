import { Link } from "wouter";
import { Wifi, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white">
                <Wifi className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold font-display tracking-tight text-white">
                Mosaynet<span className="text-accent">.</span>
              </span>
            </div>
            <p className="text-gray-400">
              Providing lightning-fast, reliable, and affordable internet solutions to homes and businesses across the region.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/packages" className="text-gray-400 hover:text-accent transition-colors">Internet Packages</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-accent transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Our Packages</h4>
            <ul className="space-y-4">
              <li><Link href="/packages" className="text-gray-400 hover:text-accent transition-colors">15 Mbps Starter</Link></li>
              <li><Link href="/packages" className="text-gray-400 hover:text-accent transition-colors">30 Mbps Family</Link></li>
              <li><Link href="/packages" className="text-gray-400 hover:text-accent transition-colors">50 Mbps Premium</Link></li>
              <li><Link href="/packages" className="text-gray-400 hover:text-accent transition-colors">100 Mbps Ultimate</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                <span>Nairobi, Kenya<br />Business Center</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+254 752 524 792</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>support@mosaynet.co.ke</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Mosaynet Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
