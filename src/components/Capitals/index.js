import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({
      activeCapitalId: event.target.value,
    })
  }

  getCountry = () => {
    const {activeCapitalId} = this.state
    const activeCapitalAndCountry = countryAndCapitalsList.find(
      eachItem => eachItem.id === activeCapitalId,
    )
    return activeCapitalAndCountry.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry(activeCapitalId)
    return (
      <div className="bg-container">
        <div className="capitals-app-container">
          <h1 className="main-heading"> Countries And Capitals </h1>
          <div className="question-container">
            <select className="drop-down-list" onChange={this.onChangeCapital}>
              {countryAndCapitalsList.map(eachCountryDetails => (
                <option
                  key={eachCountryDetails.id}
                  value={eachCountryDetails.id}
                >
                  {eachCountryDetails.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question"> is Capital of which Country ? </p>
          </div>
          <p className="country-name"> {country} </p>
        </div>
      </div>
    )
  }
}

export default Capitals
