import React, { Component } from 'react'
import { prototype } from 'stream';
import SpaceXLogo from './iconSpaceX'
type launchesProps = {
    launches: any;
    key: string;

};
export class flightData extends Component<launchesProps> {
    render() {
        const objectLunches = this.props.launches
        const lengthFlight = Object.keys(objectLunches).length
        const arrayLaunch = []
        Object.keys(objectLunches).map(keylaunches => {
            const launch_success = objectLunches[keylaunches].launch_success
            if (launch_success == true) {
                arrayLaunch.push(launch_success)
            }
        })
        const pourcent = arrayLaunch.length * 100 / lengthFlight
        console.log(lengthFlight);
        console.log(arrayLaunch.length);
        console.log(pourcent);
        return (
            <div>
                <div className="row col-md-6">
                    <div className="col">
                        <SpaceXLogo></SpaceXLogo>
                    </div>
                    <div className="card bg-dark col m-1">
                        <div className="card-body text-start">
                            <p className="text-light">Nb de lancements : {lengthFlight}</p>
                            <p className="text-light">Taux de réussite : {Math.trunc(pourcent)} %</p>
                        </div>
                    </div>
                    <div className="card bg-dark col m-1">
                        <div className="card-body text-start">

                        </div>
                    </div>
                </div >
            </div >
        )
    }
}

export default flightData
