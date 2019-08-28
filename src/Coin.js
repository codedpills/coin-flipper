import React, { Component } from 'react';
import './Coin.css';

export class Coin extends Component {
    render() {
        const { side, imgSrc } = this.props.coinInfo;
        return (
            <div className="coin">
                <img src={imgSrc} alt={side} />
            </div>
        );
    }
}

export default Coin;
