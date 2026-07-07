import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ProofSection from "./components/ProofSection";
import RepeatCTA from "./components/RepeatCTA";
import Footer from "./components/Footer";
import Problem from './components/Problem'
import Solution from './components/Solution';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Problem/>
        <Solution />
        <ProofSection />
        <RepeatCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;

