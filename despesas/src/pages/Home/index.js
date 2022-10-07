import React from 'react';
import './style.css';

export default () => {
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

            </div>

            <div class="footer">
                <h1>Copyright 2022 - Todos os direitos reservados</h1>
            </div>
        </div>
    )
}