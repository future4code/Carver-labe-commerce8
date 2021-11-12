import React from 'react';
import './App.css';
import Carrinho from './componentes/Carrinho'
import Filter from './Components/Filter';
import styled from 'styled-components'

const DivHeader = styled.div`
  width:100%;
  height:20vh;
  border-bottom:5vh solid #E5E5E5;
  background-color:#C4C4C4;
`

const DivFooter = styled.div`
  width:100%;
  height:15vh;
  background-color: #C4C4C4;
`

const DivApp = styled.div`
  display:flex;
  flex-direction: column;
`

const DivCorpo = styled.div`
  display:grid;
  grid-template-columns: 1fr 3fr 1fr;
  height:60vh;
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
        <DivHeader></DivHeader>
        <DivCorpo>
          <Filter/>
          <div></div>
          <Carrinho 
            itemsNoCarrinho = {this.state.itemsNoCarrinho}
            removendoProduto = {this.removendoProduto}
          />
        </DivCorpo>
        <DivFooter></DivFooter>
      </DivApp>
    );
  }
}
export default App;

