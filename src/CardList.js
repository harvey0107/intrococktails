import React from 'react';
import Card from './Card';

const CardList = ({ cocktails }) => {
    return(
    <div>
        {
          cocktails.map((user, i) => {
            return(
            <Card 
                key={i} 
                id={cocktails[i].id} 
                name={cocktails[i].name} 
                ingredients={cocktails[i].ingredients}
                    />
                );
            })  
        }
    </div>
    );
}

export default CardList;