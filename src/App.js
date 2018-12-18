import React, { Component } from 'react';
import './App.css';
import ChocolateList from './components/ChocolateList';
import ChocolateBox from './containers/ChocolateBox';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: '',
    }
  }

  componentDidMount() {
    const height = window.innerHeight;
    this.setState({
      height,
    });
  }
  render() {
    return (
      <div className="App" style={{ minHeight: this.state.height }}>
        <div className="containerApp" style={{ minHeight: this.state.height }}>
          <div className="descriptionApp">
            <h1 className="titleDescriptionApp">ChocolateBox</h1>
            <p className="paraDescriptionApp">Compose ta boîte de chocolat !<br />Clique sur le bouton "+" pour ajouter le chocolat que tu souhaites dans la boîte.</p>
          </div>
          <div className="containerComponentsApp">
            <ChocolateList />
            <ChocolateBox />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
