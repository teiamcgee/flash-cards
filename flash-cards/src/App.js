import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const initState = {
  words: [
    { "en": "cat", "de": "Katz", "fr": "chat", "sp": "gato" },
    { "en": "dog", "de": "Hund", "fr": "chien", "sp": "perro" },
    { "en": "man", "de": "Mann", "fr": "homme", "sp": "hombre" },
    { "en": "woman", "de": "Frau", "fr": "femme", "sp": "mujer" },
    { "en": "boy", "de": "Junge", "fr": "garcon", "sp": "chico" },
    { "en": "girl", "de": "Madchen", "fr": "fille", "sp": "niña" },
    { "en": "house", "de": "Haus", "fr": "maison", "sp": "casa" },
    { "en": "car", "de": "Auto", "fr": "voiture", "sp": "coche" },
    { "en": "plane", "de": "Fleugzug", "fr": "avion", "sp": "avión" },
    { "en": "butterfly", "de": "Schmetterling", "fr": "papillon", "sp": "mariposa" },
  ],
  userToLanguage: "",
  userFromLanguage:"",
  userTranslation:"",
  userAnswer: [],
  message: "",
  translateWord: "",
}

class App extends Component {
  constructor(){
    super();
    this.enterLanguageHandleClick = this.enterLanguageHandleClick.bind(this);
    this.toHandleChange = this.toHandleChange.bind(this);
    this.fromHandleChange = this.fromHandleChange.bind(this);
    this.userAnswer = this.userAnswer.bind(this);
    this.reset = this.reset.bind(this);
    this.state = initState;
  }

toHandleChange(e){
this.setState({
  userToLanguage: e.target.value
})
}

fromHandleChange(e){
this.setState({
userFromLanguage: e.target.value
})
}


userAnswer(e){
this.setState({
userTranslation: e.target.value
})
}

enterLanguageHandleClick(i){
  const words = Object.assign({}, this.state);

}


reset(){
  this.setState({
    userToLanguage: "",
    userFromLanguage:"",
    userTranslation:"",
    userAnswer: [],
    message: "",
  })
}


  render() {
    return (
    <div id="container">
      <h1>Language Learn</h1>
      <h2>From <input type="text" value={this.state.userFromLanguage} onChange={this.fromHandleChange} /></h2>
      <h2>To <input type="text" value={this.state.userToLanguage} onChange={this.toHandleChange} /></h2>
      <button onClick={this.enterLanguageHandleClick}>Enter</button>
      <div id="flashcard">
        <h3>{this.state.translateWord}</h3>
        <input type="text" value={this.state.userTranslation}  onChange={this.userAnswer} placeholder="Translation" />
        <button>Submit</button>
        <h3>Answer</h3>
        <h3>Message</h3>
        <button onClick = {this.reset}>Reset</button>
      </div>
    </div>
    );
  }
}

export default App;
