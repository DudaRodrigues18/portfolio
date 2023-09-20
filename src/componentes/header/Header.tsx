import './Header.css';
import Link from './../link/Link';
import Logo from "../../assets/img/letra-m.png";

function Header(){
    return(
        <header>
        <div>
            <img src={Logo} className="header-logo" alt='Logo' />
        </div>
        <nav>
            <ul>
                <li>
                    <Link texto='Sobre'/>
                </li>
                <li>
                    <Link texto='Projetos'/>
                </li>
                <li>
                    <Link texto='Contato'/>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Header