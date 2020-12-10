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
    }
    render() {
        const filteredCocktails = this.state.cocktails.filter(cocktails =>{
            return cocktails.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className = 'tc'>
            <h1>Intro Cocktails</h1>
            <SearchBox searchChange = {this.onSearchChange}/>
            <CardList cocktails={filteredCocktails}/>
            </div>
            );
    }

}

export default App; 