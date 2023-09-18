import './Main.css'
import { useState } from 'react'
import Link from '../link/Link';
import Projeto from './../projeto/Projeto'
import Avatar from "../../../public/duda-story.png";
import Instagram from "../../../public/instagram2.png";
import Email from "../../../public/e-mail.png";
import Twitter from "../../../public/twitter2.png";
import Youtube from "../../../public/youtube2.png";
import BackgroundMain from "../../../public/background-flores2.png";
import Logo from "../../../public/letra-m.png";
import { animateScroll as scroll } from 'react-scroll';

type ProjetoType = {
    id:number,
    titulo:string,
    imagem:string
}


function Main(){
    const irParaOTopo = () => {
        scroll.scrollToTop();
      }

    const [texto, setTexto]=useState("")

    const projetos = [
    {
      id: 1,
      titulo: 'Site da Barbie',
      imagem: './barbie.webp'
    },
    {
        id: 2,
        titulo: 'RED Educação Física - Esgrima',
        imagem: './esgrima.webp'
      },
    {
        id: 3,
        titulo: 'Aplicativo Gerel   ',
        imagem: './logo-gerel.png'
      }
];

function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
    setTexto(e.target.value)
}

    return(
    <main>
        <div className="logo" onClick={irParaOTopo}>
            <img src={Logo}/>
           </div>
        <div className="main1" style={{backgroundImage: `url(${BackgroundMain})`}}>
            <div className="container-conteudo1">
                <div className="texto-container1">
                    <h1>
                        Maria Eduarda S. Rodrigues
                    </h1>
                    <hr />
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
                <div className="social-media-main">
                    <img src={Instagram}/>
                    <img src={Twitter}/>
                    <img src={Email}/>
                    <img src={Youtube}/>
                </div>
                </div>
                <div className="container-img-story">
                    <img src={Avatar} className="img-story" />
                    </div>
            </div> 
            </div>  

            <div className="main2">
                <h1 className='projetos-titulo'>PROJETOS</h1>
        <div className="pesquisar">
            <input type="text" 
                className='botao-pesquisa' 
                placeholder='Pesquisar' 
                onChange={TrataTexto}/>
            {texto && <p>Resultados para: {texto}</p>}    
        </div>
            
            {
                projetos.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto)).map(
                        (projeto)=>
                            <Projeto 
                                key={projeto.id}
                                titulo={projeto.titulo}
                                imagem={projeto.imagem}
                            />
                        )}
            </div> 
    </main>
    )
}

export default Main