import './HowItWorks.css'
import designerConsultation from '../../assets/designer-consultation.svg'
import production from '../../assets/production.svg'
import measurments from '../../assets/measurments.png'

export default function HowItWorks(){
    return (
        <section class="how-it-works">

            <div class="container">
                <h3>How it works</h3>
                <div class="top-row">
                    <div class="designer-consultation">
                        <div class="card-header">
                            <img src={designerConsultation} alt="designer consultation" />
                            <p class="card-title">Designer Consultation</p>
                        </div>
                        <p>Kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche</p>
                    </div>

                    <div class="production">
                        <div class="card-header">
                            <img src={production} alt="production" />
                            <p class="card-title">Production</p>
                        </div>
                        <p>Everyday carry actually neutra authentic kogi shabby chic</p>
                    </div>
                </div>
                <div class="middle">
                    <div class="middle-line"></div>
                    <div class="middle-line-first-dot"></div>
                    <div class="dash-down"></div>
                    <div class="dash-up"></div>
                </div>  
                
                <div class="bottom-row">
                    <div class="measurements">
                        <div class="card-header">
                            <img src={measurments} alt="measurements" />
                            <p class="card-title">Measurements</p>
                        </div>
                        <p>Intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche</p>
                    </div>
                </div>
            </div>

        </section>
    )
}