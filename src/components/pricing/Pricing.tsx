import Container from "../container/Container";
import Card from "./Card";
import style from "./Pricing.module.scss";
import { pricing } from "../../data/pricing";

const Pricing = () => {
  return (
    <div className={style.pricingContainer} id="pricing"> 
    <Container>
        <div className={style.pricing}> 
            <header>
                <h1>Flat pricing, no management fees.</h1>
                <p>Whether you’re one person trying to get ahead or a big firm trying to take over the world, we’ve got a plan for you.</p>
                <div className={style.switch}>
                    <input type="radio" name="planSwitch" id="monthly" defaultChecked={true}/>
                    <label htmlFor="monthly" className="monthly">Monthly</label>
                    <input type="radio" name="planSwitch" id="annually"/>
                    <label htmlFor="annually" className="annually">Annually</label>
                    
                </div>
            </header>


            <section className={style.cards}>
                {
                  pricing.map(item => {
                      return <Card key={item.id} {...item}/>
                  })
                }
                    
            </section>
        </div>
    </Container>
    </div>
  )
}

export default Pricing