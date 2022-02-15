import React from 'react'
import {Link} from 'react-router-dom'

//css
import './TelaRegistro.css'

export default function TelaRegistro({setLoginForm}) {
  return (
    <div className='backdrop'>
      <div className='modal'>
        <h3>Entrar</h3>
        <form action=''>
            <input type={'text'} placeholder='Nome'/>
            <input type={'text'} placeholder='Whatsapp'/>
            <input type={'text'} placeholder='Email'/>
            <input type={'text'} placeholder='Senha'/>
              <button>Cadastrar</button>
              <div className='CriarContaTelaLogin'>
                <p onClick={setLoginForm}><span>Já tenho uma conta</span></p>
              </div>
        </form>
      </div>
    </div>//app
  );
}
