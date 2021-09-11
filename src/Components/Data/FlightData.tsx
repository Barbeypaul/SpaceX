import React, { Component } from 'react'
import SpaceXLogo from '../iconSpaceX'
import Graph from './Graph'

type launchesProps = {
    roadster: {
        earth_distance_km?: number
    } | any
    launches: {
        launch_success: boolean
    } | any

    ArrayTimeLunches?: Object;
};
export class flightData extends Component<launchesProps> {
    render() {
        const objectLunches = this.props.launches
        const lengthFlight = Object.keys(objectLunches).length
        const arrayLaunch = []
        Object.keys(objectLunches).map(keylaunches => {
            const launch_success = objectLunches[keylaunches].launch_success
            if (launch_success === true) {
                arrayLaunch.push(launch_success)
            }
        })
        const pourcent = Math.trunc(arrayLaunch.length * 100 / lengthFlight)
        const distance = Math.trunc(this.props.roadster.earth_distance_km)
        return (
            <div>
                <div className="row col-12">
                    <div className="col-md-2">
                        <SpaceXLogo></SpaceXLogo>
                    </div>
                    <div className="card bg-dark col-md-3 m-1">
                        <div className="card-body text-start">
                            <p className="text-light row">Number of launches :{lengthFlight} </p>
                            <p className="text-light row">Success rate : {pourcent} %</p>
                            <p className="text-light row">Roadster earth distance: {distance}  Km</p>
                        </div>
                    </div>
                    <div className="card bg-dark col-md-3 m-1">
                        <div className="card-body text-start">
                            <Graph objectLunches={objectLunches}></Graph>
                        </div>
                    </div>
                </div >
            </div >
        )
    }
}

export default flightData
