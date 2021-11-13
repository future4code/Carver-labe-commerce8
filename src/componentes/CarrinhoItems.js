import React from 'react'
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom:10px;
  align-items: center;
  justify-content:space-around;

  p {
    margin: 0;
  }
`


class CarrinhoItems extends React.Component {
  render() {
    return <ItemContainer>
      <p>{this.props.produto.quantidade}x</p>
      <p>{this.props.produto.nome}</p>
      <button 
        onClick={() => this.props.removendoProduto(this.props.produto.id)}
      >Remover
      </button>
    </ItemContainer>
  }
}

export default CarrinhoItems