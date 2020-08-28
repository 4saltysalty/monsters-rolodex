import React from 'react';
import { Card } from '../card/card.component';
import './card-list.style.css';

// Now one of the big things about components is that they take in something called Props
export const CardList = props => {
    return (
        <div className="card-list">
            {
                props.cats.map( cat => (
                    <Card key={cat.id} cat={cat}></Card>
                ) )
            }
        </div>
    )
}