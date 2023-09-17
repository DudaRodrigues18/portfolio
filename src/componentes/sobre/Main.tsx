import './Main.css'
import Link from './../link/Link';
import Avatar from "../../../public/duda-story.png";
import Instagram from "../../../public/instagram2.png";
import Email from "../../../public/e-mail.png";
import Twitter from "../../../public/twitter2.png";
import Youtube from "../../../public/youtube2.png";

function Sobre(){
    return(
    <main>
        <div className="main1">
            <div className="container-conteudo1">
                <div className="texto-container1">
                    <h1>
                        Maria Eduarda
                    </h1>
                <ul className='menu-main1'>
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
                    <div className="social-media">
                <img src={Instagram} className="rede-social-img" />
                <img src={Twitter} className="rede-social-img" />
                <img src={Email} className="rede-social-img" />
                <img src={Youtube} className="rede-social-img" />
            </div>
                </div>
                <div className="container-img-story">
                    <img src={Avatar} className="img-story" />
                    </div>
            </div> 
            </div>   
    </main>
    )
}

export default Sobre