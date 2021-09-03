import React, { Component } from 'react'
type launchesProps = {
    launches: any;
    key: string;
};
export class lunchList extends Component<launchesProps> {
    render() {
        const launches = this.props.launches
        console.log(launches);
        return (
            <div>
                <div className="overflow-auto launch-scroll col-md-6">
                    {Object.keys(launches).map(keylaunches => {
                        const mission_name = launches[keylaunches].mission_name
                        const launch_success = launches[keylaunches].launch_success
                        const launch_date_local = launches[keylaunches].launch_date_local
                        const details = launches[keylaunches].details
                        const site_name = launches[keylaunches].launch_site.site_name
                        const rocket_name = launches[keylaunches].rocket.rocket_name

                        return (
                            <div>
                                <div key={keylaunches} className="card bg-dark mt-1">
                                    <div className="card-body ">
                                        <div className="row align-middle">
                                            <p className="text-light col">mission_name : {mission_name}</p>
                                            <div className="text-light col">launch_success: {launch_success ? <span className="badge bg-success">True</span> : <span className="badge bg-danger">False</span>}</div>
                                            <p className="text-light col"><i className="far fa-clock"></i> launch_date_local :{launch_date_local}</p>
                                            <div className="col"><button type="button" className="btn btn-light " data-mdb-ripple-color="dark" data-mdb-toggle="modal" data-mdb-target={"#exampleModal" + keylaunches}>launche info</button></div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="modal fade"
                                    id={"exampleModal" + keylaunches}

                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                >
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id={keylaunches}>{mission_name}</h5>
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    data-mdb-dismiss="modal"
                                                    aria-label="Close"
                                                ></button>
                                            </div>
                                            <div className="modal-body">
                                                <p>launch_success: {launch_success ? <span className="badge bg-success">True</span> : <span className="badge bg-danger">False</span>}</p>
                                                <p><i className="fas fa-space-shuttle"></i> {rocket_name}</p>
                                                <div><p><i className="fas fa-globe-americas"></i> {site_name}</p><p><i className="far fa-clock"></i> launch_date_local :{launch_date_local}</p></div>
                                                <p>{details}</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-dark" data-mdb-dismiss="modal">
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        )
    }
}

export default lunchList
