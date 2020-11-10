import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
    render() {
        return (
            <div>
                <h3 className="Card-name">Squirtle</h3>
                <img src="#" alt="Pokemon Image" className="Card-img" />
                <p className="Card-type">Type: Water</p>
                <p className="Card-hp">HP: 60</p>
                <p className="Card-ap">AP: 10</p>
                <p className="Card-dp">DP: 15</p>
            </div>
        )
    }
}

export default Card