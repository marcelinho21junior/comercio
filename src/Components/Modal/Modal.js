import React, { useState } from 'react'

import TelaLogin from '../TelaLogin/TelaLogin';
import TelaRegistro from '../TelaRegistro/TelaRegistro';

export default function Modal() {
    const [isLogin, setIsLogin] = useState(true)

    function setLoginForm(){
        setIsLogin(true)
    }

    function setRegisterForm(){
        setIsLogin(false)
    }
  
    return (
    <div className='backdrop'>
      {isLogin ? <TelaLogin setRegisterForm={setRegisterForm}/> : <TelaRegistro setLoginForm={setLoginForm}/>}
    </div>//app
  );
}
