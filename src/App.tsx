import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Timeline } from "./components/Timeline";
import { AppHub } from "./components/AppHub";
import { TechStack } from "./components/TechStack";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cyber-bg text-cyber-text font-sans antialiased selection:bg-cyber-cyan selection:text-cyber-bg">
      <Navbar />
        <main>
          <Hero />
          <Timeline />
          <AppHub />
          <TechStack />
        </main>
      <Footer />
    </div>
  );
};

export default App;
