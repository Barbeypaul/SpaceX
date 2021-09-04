import React, { Component } from 'react'
// Components
import FlightData from './Components/FlightData'
import LunchList from './Components/launchList'
export class App extends Component {
  state = {
    launches: [],
    roadster: [],
    name: "paul",
    age: 21
  }
  componentDidMount() {
    fetch("https://api.spacexdata.com/v3/launches")
      .then((response) => response.json())
      .then(launches => this.setState({
        launches: launches
      }))
    fetch("https://api.spacexdata.com/v3/roadster")
      .then((response) => response.json())
      .then(roadster => this.setState({
        roadster: roadster
      }))
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <FlightData key="" roadster={this.state.roadster} launches={this.state.launches}></FlightData>
          <LunchList key="" launches={this.state.launches}></LunchList>
        </div>
      </div >
    )
  }
}

export default App
