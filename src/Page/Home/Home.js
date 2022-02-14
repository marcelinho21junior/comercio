import React from 'react'

//css 
import './Home.css'

//img
import milk from '../../Img/milk1.png'
import coxinha from '../../Img/coxinha.png'
import lancheNatural from '../../Img/lancheNatural.png'


export default function Home() {


  return (
    <div className='app'>
        <div className="header">
        <div>
          <img className='imgHeader' src={milk}/>
        </div>
        <div className='spanHeader'>
          <span>Home</span>
          <span>Home</span>
          <span>Home</span>
        </div>
      </div>

      <div className='infoCenter'>
        <div className='infoCenterTxt'>
          <h2>Isso não é apenas café<br/> é <span>LancheJá</span></h2>
          <p>O jeito mais fácil de pedir delivery de comida sem se preocupar em matar aula.<br/> Leia avaliações de restaurantes, faça seu pedido pela internet e saiba onde encontrar seu lanche.</p>
          <button>Saiba Mais</button>
        </div>
        <div className='infoCenterancheImg'>
          <img id='imgCenter' className='LancheImg' src={milk}/>
        </div>  
      </div>

      <div className='footerBtn'>
          <img className='footerBtnImg' src={milk}/>
          <img className='footerBtnImg' src={coxinha}/>
          <img className='footerBtnImg' src={lancheNatural}/>
      </div>
    </div>
  );
}
