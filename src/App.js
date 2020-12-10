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
    render() {
        return (
            <div className = 'tc'>
            <h1>Intro Cocktails</h1>
            <SearchBox />
            <CardList cocktails={this.state.cocktails}/>
            </div>
            );
    }

}

export default App; 