import React from 'react'
import {Link} from 'react-router-dom'

//css 
import './Home.css'

//components
import Modal from '../../Components/Modal/Modal'

//img
import milk from '../../Img/milk1.png'
import coxinha from '../../Img/coxinha.png'
import lancheNatural from '../../Img/lancheNatural.png'


export default function Home() {

  return (
    <div className='app'>
      <div className='circle'></div>
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

      <div className='infoCenter'>
        <div className='infoCenterTxt'>
          <h2>Isso não é apenas café<br/> é <span>LancheJá</span></h2>
          <p>O jeito mais fácil de pedir delivery de comida sem se preocupar em matar aula.<br/> Leia avaliações de restaurantes, faça seu pedido pela internet e saiba onde encontrar seu lanche.</p>
          <button>Saiba Mais</button>
        </div>
        <div className='infoCenterancheImg'>
          <img id='imgCenter' className='LancheImg' alt="" src={milk}/>
        </div>  
      </div>

      <div className='footerBtn'>
          <img className='footerBtnImg' alt="" src={milk}/>
          <img className='footerBtnImg' alt="" src={coxinha}/>
          <img className='footerBtnImg' alt="" src={lancheNatural}/>
      </div>
        <Modal/>
    </div>//app
  );
}
