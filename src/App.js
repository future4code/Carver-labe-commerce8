import React from 'react';
import './App.css';
import Carrinho from './componentes/Carrinho'
import styled from 'styled-components'

const DivApp = styled.div`
  display:grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 15px;
  gap: 8px;
`

const viagens = [
  {
    id:1,
    nome:"Jupiter",
    value:400,
    imageUrl: 0
  },
  {
    id:2,
    nome:"Saturno",
    value:500,
    imageUrl: 0 
  }
]

class App extends React.Component {
  state = {
    itemsNoCarrinho: [
      {
        id:1,
        nome:"Jupiter",
        value:400,
        quantidade: 2
      },
      {
        id:2,
        nome:"Saturno",
        value:500,
        quantidade: 5
      },
      {
        id:3,
        nome:"Urano",
        value:100,
        quantidade: 1
      }
    ]
  }

  removendoProduto = (idItem) => {
    const arrayAlterado = this.state.itemsNoCarrinho.map((item) =>{
      if(item.id === idItem){     
        const novoItem = {
          ...item,
          quantidade: item.quantidade - 1
          } 
          return novoItem
      } 
      return item
    }).filter((item) => 
      item.quantidade > 0
    )
    
    this.setState({itemsNoCarrinho: arrayAlterado})

  }

  render() {
    return (
      <DivApp>
        
        <div></div>
        <div></div>
        <Carrinho 
          itemsNoCarrinho = {this.state.itemsNoCarrinho}
          removendoProduto = {this.removendoProduto}
        />
      </DivApp>
    );
  }
}
export default App;
