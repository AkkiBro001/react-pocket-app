import style from "./Footer.module.scss";
import "../../Media.scss";
import Container from "../container/Container";

const Footer = () => {
  return (
    <div className={style.footerContainer}>
        <Container>
            <div className={style.footer}>
                <header>
                    <div className={style.leftSection}>
                        <h2>Pocket</h2>
                        <p>Invest at the perfect time.</p>
                        <ul>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#faq">FAQs</a></li>
                        </ul>
                    </div>
                    <div className={style.rightSection}>
                        <div className={style.qrContainer}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="qr" />
                            <div className={style.qrInfo}>
                                <h3>Download the app</h3>
                                <p>Scan the QR code to download the app from the App Store</p>
                            </div>
                        </div>
                    </div>
                </header>

                <footer>
                    <div className={style.content}>
                        <div className={style.copyright}>
                            &copy; Copyright 2023. All rights reserved.
                        </div>
                        <div className={style.newsLetter}>
                            <input type="text" placeholder="Email Address"/>
                            <button>Join newsletter</button>
                        </div>
                    </div>
                </footer>
            </div>
        </Container>
    </div>
  )
}

export default Footer