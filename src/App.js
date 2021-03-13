import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { cocktails } from './cocktails';
import './App.css';

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
    }
    render() {
        const filteredCocktails = this.state.cocktails.filter(cocktails =>{
            return cocktails.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className = 'tc'>
            <h1 className = 'f1'>Introduction Of World Essential Classic Cocktails</h1>
            <h3 className = 'f3'>The Professional Bartender's Handbook</h3>
            <SearchBox searchChange = {this.onSearchChange}/>
            <CardList cocktails={filteredCocktails}/>
            </div>
            );
    }

}

export default App; 