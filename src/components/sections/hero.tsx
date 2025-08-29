import { Link } from 'react-scroll';
import SlideUp from "@utils/animations/slideUp"

const Hero = () => {
    return (
        <section id="home" className="main-hero-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <SlideUp className="hero-content position-relative">
                            <h2>People ignore design that<br/> ignores people.</h2>
                          
                            <div className="hero-btns">
                                <Link to="pricing" smooth={true}  className="theme-btn">See Pricing Plans</Link>
                                <Link to="book" smooth={true}  className="theme-btn differenct-color">Book a free call</Link>
                            </div>
                            
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero