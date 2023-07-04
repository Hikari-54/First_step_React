import Header from './components/header/header.jsx'
import HeroSection from './components/heroSection/heroSection.jsx'
import NewCollection from './components/newCollection/newCollection.jsx'
import Aesthetic from './components/aesthetic/aesthetic.jsx'
import HowItWorks from './components/howItWorks/howItWorks'

export default function MainPage() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <NewCollection />
                <Aesthetic />
                <HowItWorks />
            </main>
        </>
    )
}