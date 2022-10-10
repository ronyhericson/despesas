import React, { useState, useEffect, useCallback } from 'react';
import './style.css';

import DespesaItem from '../components/DespesaItem';
import despesaService from '../../services/despesaSevice';


export default function Home() {

    const [listaDespesas, setListaDespesas] = useState([]);

    const getDespesasAsync = useCallback(async () => {
        //Busca todas as despesas cadastradas na base 
        const lstDespesas = await despesaService.GetDespesas();

        setListaDespesas(lstDespesas);
    }, [setListaDespesas]);

    useEffect(() => {
        getDespesasAsync();
    }, [getDespesasAsync]);


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

                    <DespesaItem tipo="CASA" lista={listaDespesas && (listaDespesas || [])} />
                    <DespesaItem tipo="ESCOLA" lista={listaDespesas && (listaDespesas || [])} />

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