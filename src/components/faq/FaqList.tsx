
import { faqs } from "../../data/faq";
import Container from "../container/Container";
import Faq from "./Faq";
import style from "./FaqList.module.scss";

const FaqList = () => {
  return (
    <Container>
    <div className={style.faqContainer} id="faq">
      <header>
        <h1>Frequently asked questions</h1>
        <span className={style.subTitle}>If you have anything else you want to ask, reach out to us.</span>
      </header>

      <section className={style.faqs}>
        {
          faqs.map(faq => (
              <Faq key={faq.id} {...faq}/>
          ))
        }
          
      </section>
    </div>
    </Container>
  )
}

export default FaqList;