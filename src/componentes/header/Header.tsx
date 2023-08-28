import './Header.css'
import Link from './../link/Link'

function Header(){
    return(
        <header>
        <div>
            <img src="" className="header-logo" />
        </div>
        <nav>
            <ul>
                <li>
                    <Link texto='Projetos'/>
                </li>
                <li>
                    <Link texto='Home'/>
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