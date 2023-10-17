import './css/App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    noticias: []
  }
  componentDidMount() {
    fetch('https://portal-noticias-ifms.herokuapp.com/apinoticias')
      .then(response => response.json())
      .then(noticias => this.setState({ noticias }))
  }
  render() {
    const { noticias } = this.state;
    return (
      <div className="App">
        <h1>Principais notícias</h1>
        <div class="sections">
          {noticias.map(noticia => (
            <div key={noticia.id_noticia} >
              <section>
                <h1> {noticia.titulo} </h1>
                <p class="resumo"> {noticia.resumo} </p>
                <p class="info"> {noticia.autor} {noticia.data_criacao} </p>
                <p class="noticia"> {noticia.noticia} </p>
            </section>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;