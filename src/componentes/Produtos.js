import React from 'react'
import styled from 'styled-components'
import {CardProdutos} from './CardProdutos'

const StyleProdutos = styled.div`
    height:60vh;
    display: flex;
    flex-direction:column;
`

const ContainerCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items:center
`

const OrdenacaoTopo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    color:black;
`

const StyleLabel = styled.label`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items:center;

    select {
        height:25px;
    }

    p {
        padding-right:5px;
    }

`

export class Produtos extends React.Component {

    state = {
        ordenacao: 'CRESCENTE'
    }

    filtrarEOrdenar = () => {
        return this.props.produtosViagem
          .filter((viagem) => this.props.valorMaximo ? viagem.valor < this.props.valorMaximo : true)
          .filter((viagem) => this.props.valorMinimo ? viagem.valor > this.props.valorMinimo : true)
          .filter((viagem) => this.props.buscaNome ? viagem.nome.includes(this.props.buscaNome) : true)
          .sort((produto1, produto2) => this.state.ordenacao === 'CRESCENTE' ? produto1.valor - produto2.valor : produto2.valor - produto1.valor)
    }

    ordenando = (event) => {
        this.setState({ordenacao: event.target.value})
    }

    render(props) {
        const listaFiltrada = this.filtrarEOrdenar()
        return (
                <StyleProdutos>
                    <OrdenacaoTopo>
                    Quantidade de Produtos Disponiveis: {listaFiltrada.length}
                    
                    <StyleLabel> 
                        <p>Ordenação:</p>
                        <select onChange={this.ordenando}>
                            <option value="CRESCENTE">Crescente</option>
                            <option value="DECRESCENTE">Decrescente</option>
                        </select>
                    </StyleLabel>
                    </OrdenacaoTopo>
                    <ContainerCards>
                        {listaFiltrada.map((lista) => {
                            return <CardProdutos
                            produto={lista}
                            adicionandoProduto={this.props.adicionandoProduto}
                            />
                        })}
                    </ContainerCards>
                </StyleProdutos>
        );
    }
}
