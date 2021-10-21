import './css/coin.css'
import tails from '../../assets/tails.svg'
import heads from '../../assets/heads.svg'

export const Coinflip = () => {
    
    return (
        <div className="main-body">
            <div className="box">
                <div className="stats">
                    <p id="heads-count">Heads: 0</p>
                    <p id="tails-count">Tails: 0</p>
                </div>
                <div className="coin" id="coin">
                    <div className="heads">
                        <img src={heads} alt="heads" />
                    </div>
                    <div className="tails">
                        <img src={tails} alt="tails" />
                    </div>
                </div>
                <div className="buttons">
                    <button id="flip-button">
                        Flip Coin
                    </button>
                    <button id="reset-button">
                        Reset
                    </button>
                </div>
            </div>
        </div>
    )
}
