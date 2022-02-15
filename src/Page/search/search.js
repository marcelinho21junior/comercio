import React from 'react'
import {Link} from 'react-router-dom'

//css
import './search.css'


export default function Seach() {
  return (
    <div className='app'>
      <div className="header">
      <div className="headerTitle">
          <h2>Lanche<span>Já</span></h2>
        </div>
        <div className='spanHeader'>
          <Link to={'/'}><span>Home</span></Link>
          <Link to={'/search'}><span>Entrar</span></Link>
        </div>
      </div>

      <div className='seachItens'>
        <div className='seachItensTxtEiNPUS'>
            <h3>Pesquisar produtos</h3>
            <div className='seachItensiNPUS'>
                <input type={'text'} placeholder='Pesquisar por nome'></input>
                <input type={'number'} max='100' placeholder='Preço maximo'></input>
            </div>
        </div>
      </div>

      <div className='whenStayCards'>
        <div className='whenStayCardsCARDS'>
            <div className='whenStayCardsCARDSItens'>
                <h2>Brigadeiro Gourmet</h2>
                <h1>R$5,00</h1>
                <div className='NomeEContato'>
                    <span className='NomeEContato'>Brigadeiro do zé</span>
                    <span className='NomeEContato'>9.9333-333</span>
                </div>
            </div>
        </div> 

        <div className='whenStayCardsCARDS'>
            <div className='whenStayCardsCARDSItens'>
                <h2>Coxinha</h2>
                <h1>R$7,00</h1>
                <div className='NomeEContato'>
                    <span className='NomeEContato'>Coxinha da Maria</span>
                    <span className='NomeEContato'>9.9333-333</span>
                </div>
            </div>
        </div>        
      </div>
    </div>//app
  );
}
