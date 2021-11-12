import React from 'react'
import styled from 'styled-components'
import CarrinhoItems from './CarrinhoItems'

const DivCarrinho = styled.div`
  display:flex;
  flex-direction: column;
  padding-top: 10px;
  padding-left: 30px;
  border-left: 1px solid black;
  background-color:#B77878;
`

class Carrinho extends React.Component {
    state = {
      produtos:[],
      valorTotal: 0
    }
    
    DefinindoValorTotal = () => {
      let valorTotal = 0

      for (let item of this.props.itemsNoCarrinho){
        valorTotal += item.value * item.quantidade
      }
      return valorTotal
    }
  
    render() {
      return <DivCarrinho>
        <h1>Carrinho:</h1>
        <div>
          {this.props.itemsNoCarrinho.map((planeta) => {
            return <CarrinhoItems
            item = {planeta}
            removendoProduto = {this.props.removendoProduto}
            />
          })}
        </div>
        <p>Valor total: R$<b>{this.DefinindoValorTotal()}</b></p>
      </DivCarrinho>
    }
  }
  
  export default Carrinho