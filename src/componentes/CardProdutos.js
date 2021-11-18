import React from 'react'
import styled from 'styled-components'

const StyleCardProdutos = styled.div`
    border-radius: 10%;
    background-color: #C4C4C4;
    border: 1px solid #C4C4C4;
    width: 250px;
    height: 250px;
    margin: 10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    box-shadow:10px 10px 10px black;
`

const NovaImg = styled.img`
    display: flex;
    justify-content: center;
    text-align: center;
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    padding:10px;
`

const NovoBotao = styled.button`
    width: 100px;
`
  
export class CardProdutos extends React.Component {
    
    render(props) {
        const produto = this.props.produto
        return (
                <StyleCardProdutos>
                        <div>
                            <NovaImg src={this.props.produto.img} />
                        </div>
                        <div>
                            <h3>{this.props.produto.nome}</h3>
                            <p>R${this.props.produto.valor}</p>
                            <NovoBotao onClick={() => this.props.adicionandoProduto(this.props.produto.id)}> Adicionar ao Carrinho</NovoBotao>                           
                        </div>
                </StyleCardProdutos>
        );
    }
}
