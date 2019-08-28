import React, { Component } from 'react';
import { makeRandomChoice } from './helpers';
import Coin from './Coin';

export class CoinFlipper extends Component {
    static defaultProps = {
        coins: [
            { side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg'},
            { side: 'tails', imgSrc: 'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg'}
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            currentFace: null,
            numOfFlips: 0,
            numOfHeads: 0,
            numOfTails: 0
        }
    }
    flipCoin = () => {
        const newCoin = makeRandomChoice(this.props.coins);
        this.setState(currentState => {
            return {
                currentFace: newCoin,
                numOfFlips: currentState.numOfFlips + 1,
                numOfHeads: currentState.numOfHeads + (newCoin.side === 'heads' ? 1 : 0),
                numOfTails: currentState.numOfTails + (newCoin.side === 'tails' ? 1 : 0)
            }
        })
    }
    handleClick = () => {
        this.flipCoin();
    }
    render() {
        return (
            <div className="coinFlipper">
                <h2>Let's flip a coin!</h2>
                {this.state.currentFace && <Coin coinInfo={this.state.currentFace} />}
                <button onClick={this.handleClick}>Flip the coin</button>
                <p>
                    Out of {this.state.numOfFlips} flips, we have {this.state.numOfHeads} heads
                    and {this.state.numOfTails} tails.
                </p>
            </div>
        );
    }
}

export default CoinFlipper;
