import './Certificado.css'
type CertificadoProps = {
    titulo:string,
    imagem:string
}

function Certificado(props:CertificadoProps){
    return(
            <div className="certificado-content">
               <div className="foto-certificado"> 
               <img src={props.imagem} alt="" />
               </div>
                <div className="text-certificado">
                    <h1>{props.titulo}</h1>
                </div> 
            </div>
    )
}

export default Certificado