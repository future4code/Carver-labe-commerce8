import React from 'react';
import styled from 'styled-components';

const DivFiltro = styled.div`

border-right:1px solid black;
padding-top:10px;
padding-left:30px;
background-color:#B77878;
`
const DivFiltro2 = styled.div`

display: flex;
flex-direction: column;
align-items:flex-start;
margin-bottom:10px;

`

export default class Filter extends React.Component {
  state = {
    valorMinimo: "",
    valorMaximo: "",
    buscaNome: ""
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


  render(){
      return (
        <DivFiltro>

          <h1>Filtros:</h1>
          
                 
          
          <DivFiltro2>
          <h4>Valor mínimo:</h4>
          <input 
          type = "number"
          placeholder = {"Valor mínimo"}
          value = {this.state.valorMinimo}
          onChange = {this.updateValorMinimo}
          />
          </DivFiltro2>

          <DivFiltro2>
          <h4>Valor máximo:</h4>
          <input 
          type = "number"
          placeholder = {"Valor máximo"}
           value = {this.state.valorMaximo}
           onChange = {this.updateValorMaximo}
          />
          </DivFiltro2>

          <DivFiltro2>
          <h4>Busca por nome:</h4>
          <input placeholder = {"Busca por nome"}
          value = {this.state.buscaNome}
          onChange = {this.updateBuscaNome}
          />
          </DivFiltro2>

        </DivFiltro>
        
        );
 }
}

