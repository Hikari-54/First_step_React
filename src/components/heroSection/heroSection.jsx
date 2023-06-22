import './heroSection.css'
import chair from '../../assets/chair.png'

export default function HeroSection() {
    return (
        <section class="hero-section">

            <div class="main-slider">
                <div class="chair-mask"></div>
                <img src={chair} alt="Cool chair" class="chair" />

                <div class="container main-text-flex">
                    <div class="main-text">
                        <h1>
                            Furniture 
                            <br/>collection
                        </h1>
                        <div class="line"></div>
                        <p>
                            Deep v you probably haven't heard of them banh mi synth actually affogato. Aesthetic lyft ethical drinking vinegar austint
                        </p>
                    </div>
                </div>

            </div>

            <div class="triggers">
                <div class="normal"></div>
                <div class="normal active"></div>
                <div class="normal"></div>
            </div>

        </section>
    )
}