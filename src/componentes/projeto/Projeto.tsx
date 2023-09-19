import './Projeto.css'
type ProjetoProps = {
    titulo:string,
    descricao:string,
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
                    <p>{props.descricao}</p>
                </div> 
            </div>
    )
}

export default Projeto