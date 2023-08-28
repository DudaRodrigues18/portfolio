import './Header.css'
import Link from './../link/Link'

function Header(){
    return(
        <header>
        <div>
            <img src="src\assets\imagens\letra-m.png" className="header-logo" />
        </div>
        <nav>
            <ul>
                <li>
                    <Link texto='Home'/>
                </li>
                <li>
                    <Link texto='Projetos'/>
                </li>
                <li>
                    <Link texto='Sobre'/>
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