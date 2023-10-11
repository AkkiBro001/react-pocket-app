import style from "./Header.module.scss";
import Container from "../container/Container";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

export const Header = () => {

    const [showMenu, setShowMenu] = useState<boolean>(false)

    return (
        <Container padding="0 0">
            <nav>
                <a className={style.logo} href="#">
                    <span>Pocket</span>
                </a>

                <ul className={style.menu}>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#faq">FAQ</a></li>
                </ul>

                <ul className={style.profile}>
                    <button className={style.login}>Log In</button>
                    <button className={style.signup}>Sign Up</button>
                </ul>

                {/* <button className={style.userIcon}>
                    <AiOutlineUser />
                </button> */}

                <button className={style.menuIcon}
                    onClick={() => setShowMenu(pre => !pre)}
                >
                    {showMenu ? <MdOutlineKeyboardArrowDown /> : <AiOutlineMenu />}
                </button>




            </nav>

            {showMenu && <div
                className={`${style.mobileMenu} ${showMenu ? 'slide-in-top' : 'slide-out-top'}`}>
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#faq">FAQ</a>
                <button className={style.login}>Log In</button>
                <button className={style.signup}>Sign Up</button>
            </div>}
        </Container>
    )
}
