import style from "./Features.module.scss";
import phone2 from "../../assets/phone2.png";
import { forwardRef } from "react"
import { features } from "../../data/features";

interface ForMobileProps {
    handleCarouselForMobile: (value: number) => void,
}

type Ref = HTMLDivElement;

const ForMobile = forwardRef<Ref, ForMobileProps>((props, carouselRef) => {

    const { handleCarouselForMobile } = props;

    return (
        <div className={style.forMobile}>
            <div className={style.silde}>
                <div className={style.carousel}
                    ref={carouselRef}
                >
                    {
                        features.map(feature => (
                            <div className={style.card} key={feature.id}>
                                <img src={phone2} alt="" className={style.displayImage} />
                                <div className={style.info}>
                                    <h2>{feature.title}</h2>
                                    <p>{feature.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>

            <div className={style.silder}>
                <input type="radio" id="mobile_0" name="toggle_carousel_mobile" defaultChecked={true} />
                <label onClick={() => handleCarouselForMobile(0)} htmlFor="mobile_0"></label>
                <input type="radio" id="mobile_1" name="toggle_carousel_mobile" />
                <label onClick={() => handleCarouselForMobile(1)} htmlFor="mobile_1"></label>
                <input type="radio" id="mobile_2" name="toggle_carousel_mobile" />
                <label onClick={() => handleCarouselForMobile(2)} htmlFor="mobile_2"></label>
            </div>
        </div>
    )
})

export default ForMobile