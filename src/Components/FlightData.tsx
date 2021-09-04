import React, { Component } from 'react'
import SpaceXLogo from './iconSpaceX'
type launchesProps = {
    launches?: any;
    roadster?: any;
    key: string;
    lengthFlight?: number;
    pourcent?: number;
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
        const pourcent = arrayLaunch.length * 100 / lengthFlight
        const earth_distance_km = this.props.roadster.earth_distance_km
        return (
            <div>
                <div className="row col-12">
                    <div className="col-md-2">
                        <SpaceXLogo></SpaceXLogo>
                    </div>
                    <div className="card bg-dark col-md-4 m-1">
                        <div className="card-body text-start">
                            <p className="text-light row">Number of launches :{lengthFlight} </p>
                            <p className="text-light row">Success rate : {Math.trunc(pourcent)} %</p>
                            <p className="text-light row">Roadster earth distance: {Math.trunc(earth_distance_km)} Km</p>
                        </div>
                    </div>
                </div >
            </div >
        )
    }
}

export default flightData
