import React from 'react';
import './App.css';
import Form from './Form';

class App extends React.Component {
  // Lembremos que toda classe em JavaScript necessita de um constructor, que é o que passa a informação de como a classe é construída. Normalmente nossa classe já herda um construcotr do React.Component, e a gente define ele novamente aqui pois precisamos acrescentar informações novas nesse momento de inicialização.
  // O constructor pode e deve ser pensado como a primeira etapa do ciclo de vida de um componente React, embora ele seja parte de toda classe javascript.
  constructor() {
    // Dentro do constructor chamamos a função super() para informar que queremos reaproveitar o constructor padrão do React.Component e apenas acrescentar novas coisas após ele. Caso não chamássemos o super(), nosso código não funcionaria pois toda a lógica envolvida no constructor padrão seria substituída.
    super();

    this.state = {
      gato: 'Chuvisco',
      biscoito: 'chocobiscuit',
    }
  }

  // A segunda etapa do ciclo de vida é o componentDidMount(). Essa função é criada pelo React por padrão em todos os componentes, assim como todas as outras, que são herdadas da classe React.Component.
  // A função é rodada uma única vez, assim que o componente aparece na tela. É quase equivalente ao window.onload, como destacou o Danillo :)
  // Podemos aplicar aqui lógicas que queremos que sejam executadas após o carregamento total do componente. É o lugar IDEAL para fazermos a primeira requisição a APIs, por exemplo.
  componentDidMount() {
    // Com esse código eu altero o state do meu componente assim que ele é carregado, fazendo com que nunca vejamos o state inicial.
    this.setState({
      gato: 'Maizena',
      biscoito: 'trakinas',
    })
  }

  // Sempre que fazemos um this.setState, a função shouldComponentUpdate é executada para saber se o componente deve ou não ser renderizado. Essa função necessita RETORNAR um valor BOOLEANO, que por padrão é "true".
  // Aqui dentro podemos executar lógicas condicionais para saber se queremos ou não renderizar o componente em uma mudança de state ou props.
  // Como a atualização do state é "assíncrona", no momento em que fazemos o this.setState e a função shouldComponentUpdate é executada, o state ainda não terminou de ser atualizado. Por isso a função recebe dois parâmetros, que equivalem às props e states que AINDA serão atualizadas. Portanto, jamais devemos usar o this.state para fazer a lógica condicional.
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.gato === 'Maizena') {
      return true;
    };
    return false;
  }

  componentDidUpdate(prevPops, prevState, snapshot) {
    // Componente passou por uma atualização, ou seja, foi renderizado novamente.
    // Assim como o shouldComponentUpdate(), essa função recebe parâmetros para que possamos acessar as props e state que existiam antes da atualização.
  }

  componentWillUnmount() {
    // Componente vai ser retirado da tela.
    // Aqui podemos executar uma lógica que queremos que seja executada quando isso acontecer.
  }

  render() {
    return (
      <div>
        <Form name={this.state.gato} />
      </div>
    )
  }

}

export default App;
