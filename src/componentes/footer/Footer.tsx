import './Footer.css'
import Link from './../link/Link'
import Logo from "../../../public/letra-m.png";
import Instagram from "../../../public/instagram.png";
import Facebook from "../../../public/facebook.png";
import Twitter from "../../../public/twitter.png";
import Youtube from "../../../public/youtube.png";
import Language from "../../../public/globo.png";

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
                    <Link texto='Mobile apps'/>
                </li>
                <li>
                    <Link texto='Database Designer'/>
                </li>
                <li>
                    <Link texto='Web Apps Designer'/>
                </li>
                <li>
                    <Link texto='Segurança'/>
                </li>
            </ul>
            <ul className="ul-footer">
                <h1 className='footer-ul-title'>Companhia</h1>
                <li>
                    <Link texto='Programa de parceria'/>
                </li>
                <li>
                    <Link texto='Contate-me'/>
                </li>
            </ul>
            <ul className="ul-footer">
                <h1 className='footer-ul-title'>Ajuda</h1>
                <li>
                    <Link texto='Blog'/>
                </li>
                <li>
                    <Link texto='Centro de Ajuda'/>
                </li>
            </ul>
        </nav>
        </div>
        <div className="terms">
            <p className="copyright">© 2022-2023</p>
            <div className="language">
                <img src={Language} className="lan" />
                <Link texto='English'/>
            </div>
        </div>
    </footer>
    )
}