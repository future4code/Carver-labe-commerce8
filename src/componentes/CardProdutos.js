import React from 'react'
import styled from 'styled-components'

const ContainerCards = styled.section`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 2;
`

const StyleCardProdutos = styled.div`
border-radius: 10%;
text-align: center;
background-color: white;
border: 1px solid white;
width: 200px;
height: 300px;
margin: 10px;

div>img{
    display: flex;
    justify-content: center;
    text-align: center;
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

button{
    width: 100px;
}
`

export class CardProdutos extends React.Component {
    onClickBotao = () => {
        alert('Adicionado ao Carrinho!')
    }

    render(props) {
        return (
            <ContainerCards>
                <StyleCardProdutos>
                    <section>
                        <div>
                            <img src={this.props.img} />
                        </div>
                        <div>
                            <h3>{this.props.nome}</h3>
                            <p>R${this.props.valor}</p>
                            <div>
                                <button onClick={this.onClickBotao} > Adicionar ao Carrinho</button>
                            </div>
                        </div>
                    </section>
                </StyleCardProdutos>
            </ContainerCards>
        );
    }
}
