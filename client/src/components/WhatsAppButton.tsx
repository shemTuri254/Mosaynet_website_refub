import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/254746222930"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-bounce-subtle group"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-2xl hover:shadow-[#25D366]/50 transition-shadow duration-300">
        <MessageCircle className="w-8 h-8 text-white" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 px-3 py-1.5 bg-foreground text-background text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Need Help? Chat with us!
          {/* Arrow */}
          <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-foreground"></span>
        </span>
      </div>
    </a>
  );
}
