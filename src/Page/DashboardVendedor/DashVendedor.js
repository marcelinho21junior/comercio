import React from 'react'
import {Link} from 'react-router-dom'

//css
import './DashVendedor.css'

export default function DashboardVendedor(){
    return(
        <div className='app'>
            <div className="header">
                <div className="headerTitle">
                    <h2>Lanche<span>Já</span></h2>
                </div>
                <div className='spanHeader'>
                    <Link to={'/'} className='Sair'>Sair</Link>
                </div>
            </div>

            <div className='txtInputsBtn'>
                <h3>Cadastrar Produtos</h3>
                <div className='imputsBtn'>
                    <input className='inpTxt' type={'text'} placeholder='Nome do Produto'/>
                    <input className='inpNumber' type={'number'} placeholder='Preço'/>
                    <button>Adicionar Produto</button>
                </div>
            </div>

            <div className='cardsDashVendedor'>
                <div className='Cards'>
                    <h4>Brigadeiro</h4>
                    <h2>R$5,00</h2>
                    <div className='nameNumber'>
                        <span>Brigadeiro<br/> do Chef</span>
                        <span>0123333-3333</span>
                    </div>
                    <button>Excluir</button>
                </div>

                <div className='Cards'>
                    <h4>Brigadeiro</h4>
                    <h2>R$5,00</h2>
                    <div className='nameNumber'>
                        <span>Brigadeiro<br/> do Chef</span>
                        <span>0123333-3333</span>
                    </div>
                    <button>Excluir</button>
                </div>

                <div className='Cards'>
                    <h4>Brigadeiro</h4>
                    <h2>R$5,00</h2>
                    <div className='nameNumber'>
                        <span>Brigadeiro<br/> do Chef</span>
                        <span>0123333-3333</span>
                    </div>
                    <button>Excluir</button>
                </div>

                <div className='Cards'>
                    <h4>Brigadeiro</h4>
                    <h2>R$5,00</h2>
                    <div className='nameNumber'>
                        <span>Brigadeiro<br/> do Chef</span>
                        <span>0123333-3333</span>
                    </div>
                    <button>Excluir</button>
                </div>
            </div>
        </div>
    )
}
