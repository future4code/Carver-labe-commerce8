import React from 'react'
import styled from 'styled-components'
import { CardProdutos } from './CardProdutos'

const StyleProdutos = styled.header`
width: 100%;
height: 60px;
color: white;
display: flex;
justify-content: center;

`

export class Produtos extends React.Component {

    render(props) {

        return (
                <StyleProdutos>
                    <div>
                    Quantidade de Produtos Disponiveis: 3
                    </div>

                   <div>
                    <label> Ordenação:
                        <select>
                            <option value="CRESCENTE">Menor valor</option>
                            <option value="DECRESCENTE">Maior valor</option>
                        </select>
                    </label>
                    </div>
                </StyleProdutos>
        );
    }
}
