import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ProofSection from "./components/ProofSection";
import RepeatCTA from "./components/RepeatCTA";
import Footer from "./components/Footer";
import Problem from './components/Problem'

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Problem/>
      <ProofSection />
      <RepeatCTA />
      <Footer />
    </>
  );
}

export default App;

