import React, { Component } from 'react'
import './Card.css'

const POKE_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Card extends Component {

    render() {
        const props = this.props;
        let imgSrc = `${POKE_API}${padToThree(props.id)}.png`
        console.log(`data: ${props}`)
        return (
            <div class="Card">
                <h1 className="Card-name">{props.name}</h1>
                <img src={imgSrc} alt={props.name} className="Card-img" />
                <div className="Card-data">Type: {props.type}</div>
                <div className="Card-data">Exp: {props.exp}</div>
            </div>
        )
    }
}

export default Card