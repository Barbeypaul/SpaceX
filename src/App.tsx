import React, { Component } from 'react'
// Components
import FlightData from './Components/FlightData'
import LunchList from './Components/launchList'
export class App extends Component {
  state = {
    launches: [],
    name: "paul",
    age: 21
  }
  componentDidMount() {
    fetch("https://api.spacexdata.com/v3/launches")
      .then((response) => response.json())
      .then(launches => this.setState({
        launches: launches
      }))
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <FlightData key="" launches={this.state.launches}></FlightData>
          <LunchList key="" launches={this.state.launches}></LunchList>
        </div>
      </div >
    )
  }
}

export default App
