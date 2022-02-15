import React from 'react'
import {Link} from 'react-router-dom'

//css
import './TelaLogin.css'

export default function Cards() {
  return (
    <div className='backdrop'>
      <div className='modal'>
        <h3>Entrar</h3>
        <form action=''>
            <input type={'text'} placeholder='Email'/>
            <input type={'text'} placeholder='Senha'/>
            <button>Entrar</button>
            <Link to={'/'}><span>Criar conta</span></Link>
        </form>
      </div>
    </div>//app
  );
}
