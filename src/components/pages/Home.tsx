import Footer from "../Footer";
import Header from "../Header";
import Hero from "../Hero";
import Problem from "../Problem";
import ProofSection from "../ProofSection";
import RepeatCTA from "../RepeatCTA";
import Solution from "../Solution";

export default function Home() {
    return (
    <>
        <Header/>
        <main>
            <Hero/>
            <Problem/>
            <Solution/>
            <ProofSection/>
            <RepeatCTA/>
        </main>
        <Footer/>
    </>
    )
}