import './Footer.css'
import LinkNav from '../linknav/LinkNav'
import Logo from "../../assets/img/letra-m.png";
import Instagram from "../../assets/img/instagram.png";
import Facebook from "../../assets/img/facebook.png";
import Twitter from "../../assets/img/twitter.png";
import Youtube from "../../assets/img/youtube.png";
import Language from "../../assets/img/globo.png";

export default function Footer(){
    return(
<footer>
        <div className="footer-row1">
        <div className="left-content">
            <img src={Logo} className="footer-logo" />
            <div className="social-media">
                <img src={Instagram} className="rede-social-img" />
                <img src={Facebook} className="rede-social-img" />
                <img src={Twitter} className="rede-social-img" />
                <img src={Youtube} className="rede-social-img" />
            </div>
        </div>
        <nav className="footer-menu">
        <ul className='ul-footer'>
            <h1 className='footer-ul-title'>Produto</h1>
                <li>
                    <LinkNav url="/" texto='Mobile apps'/>
                </li>
                <li>
                    <LinkNav url="/" texto='Database Designer'/>
                </li>
                <li>
                    <LinkNav url="/" texto='Web Apps Designer'/>
                </li>
                <li>
                    <LinkNav url="/" texto='Segurança'/>
                </li>
            </ul>
            <ul className="ul-footer">
                <h1 className='footer-ul-title'>Companhia</h1>
                <li>
                    <LinkNav url="/" texto='Programa de parceria'/>
                </li>
                <li>
                    <LinkNav url="/" texto='Contate-me'/>
                </li>
            </ul>
        </nav>
        </div>
        <div className="terms">
            <p className="copyright">© 2022-2023</p>
            <div className="language">
                <img src={Language} className="lan" />
                <LinkNav url="/" texto='Português'/>
            </div>
        </div>
    </footer>
    )
}