import Container from "../container/Container";
import style from "./Features.module.scss";
import { useRef } from "react";
import ForMobile from "./ForMobile";
import ForDesktop from "./ForDesktop";

const Features = () => {

    const carouselRef = useRef<HTMLDivElement | null>(null)

    const handleCarouselForMobile = (value: number) => {

        (carouselRef.current as HTMLDivElement).style.transform = `translateX(${value * -100}%)`;
    }

    return (
        <div className={style.features} id="features">
            <Container>
                <section className={style.wrapper}>
                    <div className={style.featuresInfo}>
                        <h1>Every feature you need to win. Try it for yourself.</h1>
                        <p>Pocket was built for investors like you who play by their own rules and aren’t going to let SEC regulations get in the way of their dreams. If other investing tools are afraid to build it, Pocket has it.</p>
                    </div>

                    {/* ======= For Mobile Device ============================ */}
                    <ForMobile handleCarouselForMobile={handleCarouselForMobile} ref={carouselRef}/>
                    

                    {/* ======= For Desktop Device ============================ */}
                    <ForDesktop/>
                    
                </section>
            </Container>
        </div>
    )
}

export default Features