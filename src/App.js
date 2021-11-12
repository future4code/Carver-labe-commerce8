import React from 'react';
import './App.css';
import Carrinho from './componentes/Carrinho'
import Filter from './Components/Filter';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import background from './componentes/imgsProdutos/background.png'
import { CardProdutos } from './componentes/CardProdutos'
import { Produtos } from './componentes/Produtos'

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

const GlobalStyle = createGlobalStyle`
  body {
   background-image: url(${background});
  }

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

const produtosViagem = [
  {
    id: 1,
    nome: "Vênus",
    valor: 50000,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg/560px-PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg"
  },
  {
    id: 2,
    nome: "Marte",
    valor: 10000,
    img: "https://s2.glbimg.com/Zj3VoTi_mXXlvC5lX34mqKh5dv4=/e.glbimg.com/og/ed/f/original/2019/10/16/mars-11012_1280.jpg"
  },
  {
    id: 3,
    nome: "Júpiter",
    valor: 170000,
    img: "https://observatorio.paginas.ufsc.br/files/2016/08/jupiter2-1.jpg"
  },
  {
    id: 4,
    nome: "Netuno",
    valor: 190000,
    img: "https://imagem.band.com.br/f_265075.jpg"
  },
  {
    id: 5,
    nome: "Urano",
    valor: 60000,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/1200px-Uranus2.jpg"
  },
  {
    id: 6,
    nome: "Mercúrio",
    valor: 10000,
    img: "https://clipartspub.com/images/mercury-clipart-transparent-background-8.png"
  },
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
   const listaProdutos = produtosViagem.map((produto) => {
      return (
        <CardProdutos
          nome={produto.nome}
          img={produto.img}
          valor={produto.valor}
        />
      )
    }) 
    return (
      <DivApp>
        <DivHeader></DivHeader>
        <DivCorpo>
          <Filter/>
          <div>
          <GlobalStyle />
          <Produtos />
          {listaProdutos}
          </div>
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
