import './Footer.css'
import Link from './../link/Link'

export default function Footer(){
    return(
<footer>
        <div className="footer-row1">
        <div className="left-content">
            <img src="src\assets\imagens\letra-m.png" className="footer-logo" />
            <p>Terenciani Terenciani Terenciani Terenciani Terenciani Terenciani
            Terenciani Terenciani 
            </p>
            <div className="social-media">
                <img src="src\assets\imagens\instagram.png" className="rede-social-img" />
                <img src="src\assets\imagens\facebook.png" className="rede-social-img" />
                <img src="src\assets\imagens\twitter.png" className="rede-social-img" />
                <img src="src\assets\imagens\youtube.png" className="rede-social-img" />
                <img src="src\assets\imagens\discord.png" className="rede-social-img" />
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
                <img src="src\assets\imagens\globo.png" className="lan" />
                <Link texto='English'/>
            </div>
        </div>
    </footer>
    )
}