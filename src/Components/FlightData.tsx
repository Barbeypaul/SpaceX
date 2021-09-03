import React, { Component } from 'react'
import SpaceXLogo from './iconSpaceX'
type launchesProps = {
    launches: any;
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
        return (
            <div>
                <div className="row col-12">
                    <div className="col-md-2">
                        <SpaceXLogo></SpaceXLogo>
                    </div>
                    <div className="card bg-dark col-md-2 m-1">
                        <div className="card-body text-start">
                            <p className="text-light">Nb de lancements :{lengthFlight === 0 ? <div>Load</div> : <div>{lengthFlight}</div>} </p>
                            <p className="text-light">Nb de lancements : {lengthFlight === NaN ? <div>Load</div> : <div>{Math.trunc(pourcent)}</div>}</p>
                            <p className="text-light"> </p>
                        </div>
                    </div>
                    <div className="card bg-dark col-md-2 m-1">
                        <div className="card-body text-start">

                        </div>
                    </div>
                </div >
            </div >
        )
    }
}

export default flightData
