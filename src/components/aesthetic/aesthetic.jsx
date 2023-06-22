import './aesthetic.css'
import aesthetic from '../../assets/Aesthetic.png'

export default function Aesthetic() {
    return (
        <section class="aesthetic _margin-bottom-130">
            <img src={aesthetic} alt="Aesthetic ethical drinking" class="aesthetic-background" />
            <div class="aesthetic-background-mask"></div>

            <div class="container aesthetic-flex">
                <div class="aesthetic-text">
                    <h2>Aesthetic 
                        <br />ethical drinking</h2>
                    <div class="line"></div>
                    <p>
                        Deep v you probably haven't heard of them banh mi synth actually affogato. Artlyft ethical the one drinking vinegar austint
                    </p>
                </div>
            </div>
            
        </section>
    )
}