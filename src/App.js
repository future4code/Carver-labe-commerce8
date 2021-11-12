import React from 'react'
import { createGlobalStyle } from 'styled-components'
import background from './componentes/imgsProdutos/background.png'
import { CardProdutos } from './componentes/CardProdutos'
import { Produtos } from './componentes/Produtos'




const GlobalStyle = createGlobalStyle`
  body {
   background-image: url(${background});
  }
`


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
console.log(produtosViagem)


export default class App extends React.Component {
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
      <div>
        <GlobalStyle />
        <Produtos />
        {listaProdutos}
      </div>

    );
  }
}