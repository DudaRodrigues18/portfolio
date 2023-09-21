import './Main.css'
import { useState } from 'react'
import Link from '../link/Link';
import Projeto from './../projeto/Projeto'
import Certificado from '../certificado/Certificado';
import Avatar from "../../assets/img/duda-story.png";
import Instagram from "../../assets/img/instagram2.png";
import Email from "../../assets/img/e-mail.png";
import Twitter from "../../assets/img/twitter2.png";
import Youtube from "../../assets/img/youtube2.png";
import BackgroundMain from "../../assets/img/background-flores2.png";
import BackgroundMain3e4 from "../../assets/img/backgroundMain3e4.png"
import Logo from "../../assets/img/letra-m.png";
import { animateScroll as scroll } from 'react-scroll';


function Main(){
    const irParaOTopo = () => {
        scroll.scrollToTop();
      }

    const [texto, setTexto]=useState("")
    const [texto2, setTexto2]=useState("")

    const projetos = [
    {
      id: 1,
      titulo: 'Site da Barbie',
      descricao: 'Site criado em aula de frameworks',
      imagem: './barbie.webp'
    },
    {
        id: 2,
        titulo: 'RED Educação Física - Esgrima',
        descricao: 'Site criado para apresentar trabalho, sobre esgrima, de educação física',
        imagem: './esgrima.webp'
      },
    {
        id: 3,
        titulo: 'Aplicativo Gerel',
        descricao: 'Aplicativo de gestão de esportes e lazer',
        imagem: './logo-gerel.png'
      },
    {
        id: 4,
        titulo: 'Voleibol Naviraí',
        descricao: 'Membro do time de voleibol de Naviraí - MS',
        imagem: './voleibol-projeto.jpg'
      }
];
    const certificados = [
    {
      id: 5,
      titulo: 'LGPD com foco tecnico',
      imagem: './ImersaoLGPD-tecnico.png'
    },
    {
        id: 6,
        titulo: 'LGPD',
        imagem: './LGPDAlura.png'
      },
    {
        id: 7,
        titulo: 'Inteligencia Emocional',
        imagem: './inteligenciaEmocional.png'
      },
    {
        id: 8,
        titulo: 'Produtividade 1',
        imagem: './produt1Alura.png'
      },
    {
        id: 9,
        titulo: 'Produtividade 2',
        imagem: './produt2Alura.png'
      },
    {
        id: 10,
        titulo: 'Produtividade 3',
        imagem: './produtAlura.png'
      },
    {
        id: 11,
        titulo: 'Habitos',
        imagem: './habitosAlura.png'
      },
    {
        id: 12,
        titulo: 'Kaspersky antivirus',
        imagem: './kaspersky.png'
      }
];

function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
    setTexto(e.target.value)
}
function TrataTexto2(e:React.ChangeEvent<HTMLInputElement>){
    setTexto2(e.target.value)
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
            <div className="text-main2">
                <h1>Olá! 
                    <br />
                    Me chamo Maria Eduarda Silva Rodrigues
                    </h1>
                <p>
                Sou estudante de informática para a internet e pretendo cursar ensino 
                superior relacionado a área de TI, como Análise de desenvolvimento de 
                sistemas ou segurança da informação.
                <br /> <br />
                Faço estágio em um setor de TI desde julho de 2022, atualmente sendo da equipe de segurança da informação e administrativa.
                </p>
            </div>
            </div>

            <div className="back-divs2e3" style={{backgroundImage: `url(${BackgroundMain3e4})`}}>
            <div className="main3">
                <div className='campoPesquisa'>
                <h1 className='projetos-titulo'>PROJETOS</h1>
        <div className="pesquisar">
            <input type="text" 
                className='botao-pesquisa' 
                placeholder='Pesquisar' 
                onChange={TrataTexto}/>
            {texto && <p>Resultados para: {texto}</p>}    
        </div>
        </div>
            
            {
                projetos.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto)).map(
                        (projeto)=>
                            <Projeto 
                                key={projeto.id}
                                titulo={projeto.titulo}
                                descricao={projeto.descricao}
                                imagem={projeto.imagem}
                            />
                        )}
            </div> 
            <div className="main4">
            <div className='campoPesquisa'>
                <h1 className="projetos-titulo">CERTIFICADOS</h1>
                <div className="pesquisar">
            <input type="text" 
                className='botao-pesquisa' 
                placeholder='Pesquisar' 
                onChange={TrataTexto2}/>
            {texto2 && <p>Resultados para: {texto2}</p>}    
            </div>
        </div>
            
            {
                certificados.filter((certificado)=>certificado.titulo.toLowerCase().includes(texto2)).map(
                        (certificado)=>
                            <Certificado 
                                key={certificado.id}
                                titulo={certificado.titulo}
                                imagem={certificado.imagem}
                            />
                        )}
                </div>
            </div>
    </main>
    )
}

export default Main