import React, { useState, useEffect, useCallback } from 'react';
import './style.css';

import despesaService from '../../../services/despesaSevice';

export default function DespesaItem({ tipo }) {
    const [listaFiltradaItemDespesas, setListaFiltradaItemDespesas] = useState([]);

    const getFiltro = useCallback(async () => {
        const filtro = await despesaService.GetDespesasPorTipo(this.tipo);

        console.log('Filtro', filtro);
        setListaFiltradaItemDespesas(filtro);
    }, [setListaFiltradaItemDespesas]);

    useEffect(() => {
        getFiltro();
    }, [getFiltro]);

    return (
        <div class="itemContainer">
            <div className="itemContainer-header">
                <h1>{tipo}</h1>
            </div>
            <div class="itemContainer-main">
                {
                    (listaFiltradaItemDespesas || []) && listaFiltradaItemDespesas.map(item => {
                        return (
                            <div class="itemContainer-main-itens">
                                <div class="itemContainer-main-title">{item.descricao}</div>
                                <div class="itemContainer-main-title">
                                    {item.valor}
                                    <img src="../../../images/checkSemFundo.png" alt="" />
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <div class="itemContainer-footer">
                <div class="itemContainer-footer-btnEditar">EDITAR</div>
            </div>
        </div>
    )
}