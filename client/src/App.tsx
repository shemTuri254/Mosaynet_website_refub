import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Packages } from "./pages/Packages";
import { Contact } from "./pages/Contact";

function Router() {
  return (
    <main className="flex-grow">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/packages" component={Packages} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </main>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Router />
          <Footer />
          <WhatsAppButton />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
