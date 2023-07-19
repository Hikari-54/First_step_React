import Header from '../components/header/header'
import HeroSection from '../components/heroSection/heroSection.jsx'
import NewCollection from '../components/newCollection/newCollection.jsx'
import Aesthetic from '../components/aesthetic/aesthetic.jsx'
import HowItWorks from '../components/howItWorks/howItWorks'
import Footer from '../components/footer/footer'

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
            <Footer />
        </>
    )
}
