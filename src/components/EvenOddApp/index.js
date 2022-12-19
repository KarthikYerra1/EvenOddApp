import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {isNumber: 0}

  getRandomNumber = () => {
    const {isNumber} = this.state
    const ranNum = Math.random() * 100
    const ceilNum = Math.ceil(ranNum)
    this.setState(prevState => ({isNumber: prevState.isNumber + ceilNum}))
    console.log(isNumber)
  }

  getEvenOdd = a => {
    if (a / 2 === 0) {
      return 'Even'
    }
    return 'Odd'
  }

  render() {
    const {isNumber} = this.state
    const countNumber = isNumber
    const evenOddText = this.getEvenOdd(countNumber)

    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Count {countNumber}</h1>
          <p className="even-odd-text">Count is {evenOddText}</p>
          <button type="button" className="btn" onClick={this.getRandomNumber}>
            Increment
          </button>
          <p className="note">*Increase by Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
