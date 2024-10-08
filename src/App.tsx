import { CTA } from "./components/CTA";
import Features from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import { Testimonials } from "./components/Testimonials";
import { ThemeProvider } from "./theme";

function App() {
  return (
    <>
      <ThemeProvider>
        <NavBar />
        <Hero />
        <Features />
        <Testimonials />

        <CTA />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
