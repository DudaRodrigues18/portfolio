import './Header.css';
import LinkNav from '../linknav/LinkNav';
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
                    <LinkNav url="/" texto='Home'/>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Header