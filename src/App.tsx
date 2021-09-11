import { type } from 'os'
import React, { Component } from 'react'
// Components
import FlightData from './Components/Data/FlightData'
import LunchList from './Components/Launches/launchList'

type launchesState = {
  launches?: object
  roadster?: object
  rockets?: object
};
export class App extends Component<launchesState> {
  state: launchesState = {
    launches: [],
    roadster: [],
    rockets: [],
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
    fetch("https://api.spacexdata.com/v3/rockets")
      .then((response) => response.json())
      .then(rockets => this.setState({
        roadster: rockets
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
