import style from "./Features.module.scss";
import phone2 from "../../assets/phone2.png";
import { features } from "../../data/features";

const ForDesktop = () => {
  return (
    <div className={style.forDesktop}>

      <div className={style.imageSection}>
        <img src={phone2} alt="phone2" />
      </div>

      <div className={style.cards}>
        {
          features.map(feature => (
            <div key={feature.id} className={style.holder}>
              <input type="radio" id={`desktop_${feature.id}`} name="toggle_carousel_desktop" defaultChecked={true} />
              <label className={style.card} htmlFor={`desktop_${feature.id}`}>
                <h2>{feature.title}</h2>
                <p>{feature.desc}</p>
              </label>
            </div>
          ))
        }

        {/* <input type="radio" id="desktop_1" name="toggle_carousel_desktop" />
                           <label className={style.card} htmlFor="desktop_1">
                                <h2>Invite friends for</h2>
                                <p>For every friend you invite to Pocket, you get insider notifications 5 seconds sooner. And it’s 10 seconds if you invite an insider.</p>
                           </label>
                           <input type="radio" id="desktop_2" name="toggle_carousel_desktop" />
                           <label className={style.card} htmlFor="desktop_2">
                                <h2>Invite friends for</h2>
                                <p>For every friend you invite to Pocket, you get insider notifications 5 seconds sooner. And it’s 10 seconds if you invite an insider.</p>
                           </label> */}
      </div>
    </div>
  )
}

export default ForDesktop