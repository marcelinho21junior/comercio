import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(){
    <div className="header">
        <div className="headerTitle">
          <h2>Lanche<span>Já</span></h2>
        </div>
        <div className='spanHeader'>
          <Link to={'/'}><span>Home</span></Link>
          <Link to={'/search'}><span>Pesquisar Lojas</span></Link>
          <Link to={'/search'}><span>Entrar</span></Link>
        </div>
      </div>
}

