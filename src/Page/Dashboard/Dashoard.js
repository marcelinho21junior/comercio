import React from 'react'
import { Link } from 'react-router-dom';

//css
import './Dashboard.css'

export default function Dashboard() {
  return (
    <div className="App">
      <div className="header">
        <div className="headerTitle">
          <h2>Lanche<span>Já</span></h2>
        </div>
        <div className='spanHeader'>
          <button>Sair</button>
        </div>
      </div>

      <div className='dashCards'>
        <Link to={'/search'} className='LinkCards'>
        <div className='' Link={'/'}>
          <span>img</span>
          <h2>Estou com FOME</h2>
          <p>Este campo é para voce que deseja <br/> nossa ajuda para entrar<br/> pontos para matar a fome</p>
        </div>
        </Link>

        <Link to={'/DashboardVendedor'} className='LinkCards'>
        <div className=''>
          <span>img</span>
          <h2>LANCHONETE</h2>
          <p>Este campo é para voce que deseja <br/> nossa ajuda para<br/> vender e divulgar seus produtos</p>
        </div>
        </Link>
      </div>
    </div>
  );
}
