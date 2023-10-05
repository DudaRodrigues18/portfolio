import LinkNav from '../linknav/LinkNav';
import './Contato.css'

function Contato(){
    return(
        <div className='contato-main'>
            <h1>Cadastro</h1>
        <form className='formContato'>
            <input type="text" placeholder='Nome Completo'/>
            <input type="email" placeholder='E-mail'/>
            <input type="tel" placeholder='Telefone'/>
            <input type="date"/>
            <button>Enviar</button>
        </form>
        </div>
    )
}
export default Contato