import { Navbar } from "@/layout/Navbar";
import { Hero2 } from "@/sections/Hero2";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects"
import { Projects2 } from "@/sections/Projects2";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero2 />
        <About />
        <Projects2 />
        
        <Contact />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
