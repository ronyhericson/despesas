import React from 'react';
import './style.css';

export default function DespesaItem({ data }) {
    return (
        <div class="itemContainer">
            <div className="itemContainer-header">
                <h1>CASA</h1>
            </div>
            <div class="itemContainer-main">
                <div class="itemContainer-main-title">ALUGUEL</div>
                <div class="itemContainer-main-title">
                    R$2.000,00
                    <img src="../../../images/checkSemFundo.png" alt="" />
                </div>

            </div>
            <div class="itemContainer-footer">
                <div class="itemContainer-footer-btnEditar">EDITAR</div>
            </div>
        </div>
    )
}