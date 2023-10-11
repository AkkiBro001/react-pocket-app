import Container from "../container/Container";
import style from "./HeroBanner.module.scss";
import {BsPlayCircle} from "react-icons/bs";
import phone from "../../assets/phone.png";
import { axis, hindustan_uni, infosys, reliance, tata, wipro } from "../../assets/top_shares";

const HeroBanner = () => {

  const top_shares_images = [axis, hindustan_uni, infosys, reliance, tata, wipro]

  return (
    <Container>
    <div className={style.heroBanner}>
        <section className={style.leftSection}>
            <h1>Invest at the perfect time.</h1>
            <p>By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses.</p>
            <button className={style.watchBtn}>
                <BsPlayCircle/>
                <span>Watch the video</span>
            </button>
        </section>

        <section className={style.rightSection}>
            <img src={phone} alt="Hero" />
        </section>

        <section className={style.top_shares}>
            {
                top_shares_images.map((image, index) => <img src={image} alt="top_shares" key={index}/>)
            }
        </section>
    </div>
    </Container>
  )
}

export default HeroBanner