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

  render(){
      return (
        <DivFiltro>
          <h1>Filtros:</h1>
          <DivFiltro2>
            <h4>Valor mínimo:</h4>
            <input 
              type = "number"
              placeholder = {"Valor mínimo"}
              value = {this.props.valorMinimo}
              onChange = {this.props.updateValorMinimo}
            />
          </DivFiltro2>

          <DivFiltro2>
            <h4>Valor máximo:</h4>
            <input 
              type = "number"
              placeholder = {"Valor máximo"}
              value = {this.props.valorMaximo}
              onChange = {this.props.updateValorMaximo}
            />
          </DivFiltro2>

          <DivFiltro2>
            <h4>Busca por nome:</h4>
            <input placeholder = {"Busca por nome"}
            value = {this.props.buscaNome}
            onChange = {this.props.updateBuscaNome}
            />
          </DivFiltro2>

        </DivFiltro>
        
      );
  }
}

