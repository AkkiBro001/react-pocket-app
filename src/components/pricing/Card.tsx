import { Pricing } from "../../data/pricing";
import style from "./Pricing.module.scss";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Card = ({ price, title, details, points, buttonName }: Pricing) => {
    return (
        <div className={style.card}>
            <h2>{title}</h2>
            <div className={style.price}>
                <span className={style.symbol}>₹</span>
                <span className={style.number}>{price}</span>
            </div>
            <p>{details}</p>
            <button>{buttonName}</button>
            <ul>

                {
                    points.map((point, index) => (
                        <li key={index}>
                            <AiOutlineCheckCircle />
                            <span>{point}</span>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default Card