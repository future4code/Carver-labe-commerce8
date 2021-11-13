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

const NovoBotao = styled.button`
  width:200px;
`

class Carrinho extends React.Component {
    state = {
      produtos:[],
      valorTotal: 0
    }
    
    DefinindoValorTotal = () => {
      let valorTotal = 0

      for (let item of this.props.itemsNoCarrinho){
        valorTotal += item.valor * item.quantidade
      }
      return valorTotal
    }

    FiltrandoCarrinho = () => {
      const carrinhoFiltrado = []
      for(let item of this.props.itemsNoCarrinho){
        if(item.quantidade > 0){
          carrinhoFiltrado.push(item)
        }
      }
      return carrinhoFiltrado
    }

    render() {
      return <DivCarrinho>
        <h1>Carrinho:</h1>
        <div>
          {this.FiltrandoCarrinho().map((planeta) => {
              return <CarrinhoItems
              produto = {planeta}
              removendoProduto = {this.props.removendoProduto}
              />
          })
          }

        </div>
        <p>Valor total: R$<b>{this.DefinindoValorTotal()}</b></p>
        <NovoBotao onClick={this.props.finalizandoCompra}>Finalizar Compra</NovoBotao>
      </DivCarrinho>
    }
  }
  
  export default Carrinho