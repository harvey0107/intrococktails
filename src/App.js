import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import { cocktails } from './cocktails';

const App = () => {
return (
    <div>
    <h1>Intro Cocktails</h1>
    <SearchBox />
    <CardList cocktails={cocktails}/>
    </div>
    );
}

export default App; 