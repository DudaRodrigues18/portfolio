import './Projeto.css'
type ProjetoProps = {
    titulo:string,
    imagem:string
}

function Projeto(props:ProjetoProps){
    return(
            <div className="projeto-content">
               <div className="foto-projeto"> 
               <img src={props.imagem} alt="" />
               </div>
                <div className="text-projeto">
                    <h1>{props.titulo}</h1>
                    <button>Ver mais</button>
                </div> 
            </div>
    )
}

export default Projeto