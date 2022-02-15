import React, { useState } from 'react'
import {Link} from 'react-router-dom'

//css 
import './Home.css'

//components
import Modal from '../../Components/Modal/Modal'
import navbar from '../../Components/Navbar/Navbar'

//img
import milk from '../../Img/milk1.png'
import coxinha from '../../Img/coxinha.png'
import lancheNatural from '../../Img/lancheNatural.png'
import Navbar from '../../Components/Navbar/Navbar'


export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false)

  function openModal(){
    setIsModalOpen(true)
  }

  function closeModal(){
    setIsModalOpen(false)
  }

  return (
    <div className='app'>
      <div className='circle'></div>
      <div className="header" setIsModalOpen={openModal}>
        <div className="headerTitle">
          <h2>Lanche<span>Já</span></h2>
        </div>
        <div className='spanHeader'>
          <Link to={'/search'}><span>Pesquisar Lojas</span></Link>
          <p onClick={openModal}><span>Entrar</span></p>
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
        {isModalOpen ? <Modal closeModal={closeModal} /> : null}
    </div>//app
  );
}
