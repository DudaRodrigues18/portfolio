import './Contato.css'
import { useState } from 'react';

function Contato(){

    const [textoContato, setTextoContato]=useState("")

    function TrataTextoContato(e:React.ChangeEvent<HTMLInputElement>){
        setTextoContato(e.target.value)
    }

    return(
        <div className="contato-main">
        <h1>Contato</h1>
        <form className='formContato'>
            <input className='input-contato' type="text" placeholder='Nome Completo' onChange={TrataTextoContato}/>
            <input className='input-contato' type="email" placeholder='E-mail' onChange={TrataTextoContato}/>
            <input className='input-contato' type="tel" placeholder='Telefone' maxLength={11} onChange={TrataTextoContato}/>
            <input className='input-contato' type="text" placeholder='Endereço' onChange={TrataTextoContato}/>
            <input className='button-enviar' type="submit" value="Enviar" onChange={TrataTextoContato}/>
            <div className="textoContato-digitado">
                {textoContato && <p>{textoContato}</p>}
            </div>
            
        </form>
        </div>
    )
}


export default Contato