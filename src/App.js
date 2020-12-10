import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { cocktails } from './cocktails';

class App extends Component {
    constructor(){
        super()
        this.state = {
            cocktails: cocktails,
            searchfield: '' 
       } 
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
      const filteredCocktails = this.state.cocktails.filter(cocktails =>{
        return cocktails.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      })  
      console.log(filteredCocktails)
    }
    render() {
        return (
            <div className = 'tc'>
            <h1>Intro Cocktails</h1>
            <SearchBox searchChange = {this.onSearchChange}/>
            <CardList cocktails={this.state.cocktails}/>
            </div>
            );
    }

}

export default App; 