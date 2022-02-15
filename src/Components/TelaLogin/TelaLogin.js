import React from 'react'
import {Link} from 'react-router-dom'

//css
import './TelaLogin.css'

export default function TelaLogin({setRegisterForm}) {
  return (
    <div className='backdrop'>
      <div className='modal'>
        <h3>Entrar</h3>
        <form action=''>
            <input type={'text'} placeholder='Email'/>
            <input type={'text'} placeholder='Senha'/>
              <button><Link to={'/dashboard'} className='LinkEntrar'>Entrar</Link></button>
              <div className='CriarContaTelaLogin'>
                <p onClick={setRegisterForm}><span>Criar conta</span></p>
              </div>
        </form>
      </div>
    </div>//app
  );
}
