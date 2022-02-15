import React from 'react'
import {Link} from 'react-router-dom'

//css
import './Cards.css'

export default function Cards() {
  return (
    <div className='app'>
      <div>
          <h2>Brigadeiro Gourmet</h2>
          <span>R$5,00</span>
          <div>
              <span>Brigadeiro do zé</span>
              <span>9.9333-333</span>
          </div>
      </div>
    </div>//app
  );
}
