import React from 'react';
import './style.css';

import DespesaItem from '../components/DespesaItem';

export default function Home(){
    
    return (
        <div class="container">
            <header>
                <img src="./images/NewSemFundo.png" alt="" />
                <div class="header-title">
                    <h1>Despesas Pessoais</h1>
                    <h3>O controle esta em sua mão.</h3>
                </div>
            </header>

            <div class="filter">
                <img src="./images/PrevSemFundo.png" alt="" />
                <h1>MÊS: OUTUBRO</h1>
                <h1>ANO: 2022</h1>
                <img src="./images/NextSemFundo.png" alt="" />
            </div>

            <div class="main">
                <div class="main-grid">
                    <DespesaItem />
                    <DespesaItem />
                    <DespesaItem />
                </div>
                <div class="main-total">
                    <h1>TOTAL: 10.568,00</h1>
                </div>
            </div>

            <div class="footer">
                <h1>Copyright 2022 - Todos os direitos reservados</h1>
            </div>
        </div>
    )
}