import React from 'react';
import './App.css';
import Carrinho from './componentes/Carrinho'
import Filter from './Components/Filter';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import background from './componentes/imgsProdutos/background.png'
import { Produtos } from './componentes/Produtos'
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import jupiter from "./img/jupiter.jpg"

const DivHeader = styled.div`
  width:100%;
  height:20vh;
  border-bottom:5vh solid #E5E5E5;
  background-color:#C4C4C4;
  display:flex;
  align-items:center;
  justify-content:center;

  h1{
    font-size:50px;
    padding-left:20px;
  }
`

const ImgHeader = styled.img`
  width:200px;
  height:100px;
  border-radius:15px;
`

const DivFooter = styled.div`
  width:100%;
  height:5vh;
  background-color: #C4C4C4;

  p {
    text-align:center
  }
`

const DivApp = styled.div`
  display:flex;
  flex-direction: column;
`

const DivCorpo = styled.div`
  display:grid;
  grid-template-columns: 1fr 3fr 1fr;
  height:70vh;
`

const GlobalStyle = createGlobalStyle`
  body {
   background-image: url(${background});
  }
`

const produtosViagem = [
  {
    id: 1,
    nome: "Mercúrio",
    valor: 100,
    img: "https://clipartspub.com/images/mercury-clipart-transparent-background-8.png",
    quantidade: 0
  },
  {
    id: 2,
    nome: "Vênus",
    valor: 200,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg/560px-PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg",
    quantidade: 0
  },
  {
    id: 3,
    nome: "Marte",
    valor: 300,
    img: "https://s2.glbimg.com/Zj3VoTi_mXXlvC5lX34mqKh5dv4=/e.glbimg.com/og/ed/f/original/2019/10/16/mars-11012_1280.jpg",
    quantidade: 0
  },
  {
    id: 4,
    nome: "Júpiter",
    valor: 400,
    img: "https://observatorio.paginas.ufsc.br/files/2016/08/jupiter2-1.jpg",
    quantidade: 0
  },
  {
    id: 5,
    nome: "Urano",
    valor: 500,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/1200px-Uranus2.jpg",
    quantidade: 0
  },
  {
    id: 6,
    nome: "Netuno",
    valor: 600,
    img: "https://imagem.band.com.br/f_265075.jpg",
    quantidade: 0
  } 
]



class App extends React.Component {
  state = {
    valorMinimo: "",
    valorMaximo: "",
    buscaNome: "",
    itemsNoCarrinho: [
      {
        id: 1,
        nome: "Mercúrio",
        valor: 100,
        img: "https://clipartspub.com/images/mercury-clipart-transparent-background-8.png",
        quantidade: 0
      },
      {
        id: 2,
        nome: "Vênus",
        valor: 200,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg/560px-PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg",
        quantidade: 0
      },
      {
        id: 3,
        nome: "Marte",
        valor: 300,
        img: "https://s2.glbimg.com/Zj3VoTi_mXXlvC5lX34mqKh5dv4=/e.glbimg.com/og/ed/f/original/2019/10/16/mars-11012_1280.jpg",
        quantidade: 0
      },
      {
        id: 4,
        nome: "Júpiter",
        valor: 400,
        img: "https://observatorio.paginas.ufsc.br/files/2016/08/jupiter2-1.jpg",
        quantidade: 0
      },
      {
        id: 5,
        nome: "Urano",
        valor: 500,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/1200px-Uranus2.jpg",
        quantidade: 0
      },
      {
        id: 6,
        nome: "Netuno",
        valor: 600,
        img: "https://imagem.band.com.br/f_265075.jpg",
        quantidade: 0
      } 
    ]
  }

  removendoProduto = (idItem) => {
    const procurandoItem = this.state.itemsNoCarrinho.find(item => idItem === item.id)
    for (let item of this.state.itemsNoCarrinho){
      if(item === procurandoItem){
        if(item.quantidade !== 0){
          item.quantidade = item.quantidade - 1
          console.log(item.quantidade)
        }
      }
    }  
    
    this.setState({itemsNoCarrinho: this.state.itemsNoCarrinho})

  }

  adicionandoProduto = (idItem) => {
    const procurandoItem = this.state.itemsNoCarrinho.find(item => idItem === item.id)
    for (let item of this.state.itemsNoCarrinho){
      if(item === procurandoItem){
        item.quantidade += 1
      }
    }  
    
    this.setState({itemsNoCarrinho: this.state.itemsNoCarrinho})
  }

  updateBuscaNome=(event)=>{
    this.setState({
      buscaNome:event.target.value
    })

  }

  updateValorMinimo=(event)=>{
    this.setState({
      valorMinimo:event.target.value
  
    })
  }

  updateValorMaximo=(event)=>{
    this.setState({
      valorMaximo:event.target.value
  
    })
  }
  
  finalizandoCompra = () => {
    alert(`Parabéns pela sua compra! Volte sempre`)
    for (let item of this.state.itemsNoCarrinho){
      item.quantidade = 0
    }

    this.setState({itemsNoCarrinho: this.state.itemsNoCarrinho})
  }

  render() {    
    return (
      <DivApp>
        <DivHeader>
          <ImgHeader src={jupiter}/>
          <h1>LabeViagens Espaciais</h1>
        </DivHeader>
        <DivCorpo>
          <Filter
            valorMinimo={this.state.valorMinimo}
            valorMaximo={this.state.valorMaximo}
            buscaNome={this.state.buscaNome}
            updateValorMinimo={this.updateValorMinimo}            
            updateValorMaximo={this.updateValorMaximo}            
            updateBuscaNome={this.updateBuscaNome}
          />
          <div>
            <Produtos
              produtosViagem = {produtosViagem}
              valorMinimo={this.state.valorMinimo}
              valorMaximo={this.state.valorMaximo}
              buscaNome={this.state.buscaNome}
              adicionandoProduto={this.adicionandoProduto}
            />
          </div>
          <Carrinho 
            itemsNoCarrinho = {this.state.itemsNoCarrinho}
            removendoProduto = {this.removendoProduto}
            finalizandoCompra = {this.finalizandoCompra}
            total = {this.state.total}
          />
        </DivCorpo>
        <DivFooter>
          <p>Desenvolvido por: Camila Ferreira, Leonardo Silva e Leticia Silva</p>
        </DivFooter>
      </DivApp>
    );
  }
}
export default App;
