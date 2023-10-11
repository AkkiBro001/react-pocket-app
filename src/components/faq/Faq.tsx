import { FAQ } from "../../data/faq";
import style from "./FaqList.module.scss";

const Faq = ({question, answer}:FAQ) => {
  return (
    <div className={style.faq}>
        <h2>{question}</h2>
        <p>{answer}</p>
    </div>
  )
}

export default Faq;