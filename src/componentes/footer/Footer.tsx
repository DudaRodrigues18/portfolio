import './Footer.css'
import Link from './../link/Link'
import Logo from "../../assets/imagens/letra-m.png";
import Instagram from "../../assets/imagens/instagram.png";
import Facebook from "../../assets/imagens/facebook.png";
import Twitter from "../../assets/imagens/twitter.png";
import Youtube from "../../assets/imagens/youtube.png";
import Discord from "../../assets/imagens/discord.png";
import Language from "../../assets/imagens/globo.png";

export default function Footer(){
    return(
<footer>
        <div className="footer-row1">
        <div className="left-content">
            <img src={Logo} className="footer-logo" />
            <p>Terenciani Terenciani Terenciani Terenciani Terenciani Terenciani
            Terenciani Terenciani 
            </p>
            <div className="social-media">
                <img src={Instagram} className="rede-social-img" />
                <img src={Facebook} className="rede-social-img" />
                <img src={Twitter} className="rede-social-img" />
                <img src={Youtube} className="rede-social-img" />
                <img src={Discord} className="rede-social-img" />
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
                    <Link texto='Nos contate'/>
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
            <p className="copyright">© 2019-2022 AppMaster</p>
            <Link texto='Terms of Service'/>
            <Link texto='Privacy Policy'/>
            <div className="language">
                <img src={Language} className="lan" />
                <Link texto='English'/>
            </div>
        </div>
    </footer>
    )
}