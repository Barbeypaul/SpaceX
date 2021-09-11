import React, { Component } from 'react'
type launchesProps = {
    launches: {
        [keylaunches: string]: {
            mission_name: string,
            launch_success: boolean,
            launch_date_local: string,
            details: string,
            launch_site: {
                site_name: string,
            },
            rocket: {
                rocket_name: string,
            },
            links: {
                mission_patch: string,
                flickr_images: [key: string],
            }
        }
    } | any
};

export class lunchList extends Component<launchesProps> {

    state = {
        search: '',
        currentPage: 1,
        todosPerPage: 10,
    }


    handleChange = (event: any) => {
        const value = event.target.value
        this.setState({
            search: value,
            currentPage: 1
        })
        console.log(this.state.search);
    }
    handleClickPagination = (event: any) => {
        this.setState({
            currentPage: Number(event.currentTarget.dataset.id)
        });
        console.log(this.state.currentPage);
    }
    render() {
        const launches = this.props.launches
        console.log(launches);
        const indexOfLastTodo = this.state.currentPage * this.state.todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - this.state.todosPerPage;
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(Object.keys(launches).length / this.state.todosPerPage); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(numberPage => {
            return (
                <li key={numberPage} data-id={numberPage} onClick={this.handleClickPagination} className="page-item"><a className="page-link">{numberPage}</a></li>
            );
        });
        return (
            <div>

                <div className="row col-md-6">
                    <p className="m-1 text-dark">All launches</p>
                    <div className="input-group col">
                        <div className="form-outline m-1">
                            <input onChange={this.handleChange} value={this.state.search} type="search" id="form1" className="shadow form-control border border-white" />
                            <label className="form-label text-dark" >mission_name</label>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 overflow-auto launch-scroll">
                    {Object.keys(launches).filter((keylaunches) => {
                        return launches[keylaunches].mission_name.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase())
                        // Boolean(launches[keylaunches].launch_success.includes(this.state.success))
                    }).slice(indexOfFirstTodo, indexOfLastTodo).map(keylaunches => {
                        const mission_name = launches[keylaunches].mission_name
                        const launch_success = launches[keylaunches].launch_success
                        const launch_date_local = launches[keylaunches].launch_date_local
                        const details = launches[keylaunches].details
                        const site_name = launches[keylaunches].launch_site.site_name
                        const rocket_name = launches[keylaunches].rocket.rocket_name
                        const urlPatchMission = launches[keylaunches].links.mission_patch
                        const urlImgMission = launches[keylaunches].links.flickr_images[0]
                        return (
                            <div>
                                <div key={keylaunches} className="card bg-dark m-1">
                                    <div className="card-body ">
                                        <div className="row align-middle">

                                            <p className="text-light col">mission_name : {mission_name}</p>
                                            <div className="text-light col">launch_success: {launch_success ? <span className="badge bg-success">True</span> : <span className="badge bg-danger">False</span>}</div>
                                            <p className="text-light col"><i className="far fa-clock"></i> launch_date_local :{launch_date_local}</p>
                                            <div className="col"><button type="button" className="btn btn-light " data-mdb-ripple-color="dark" data-mdb-toggle="modal" data-mdb-target={"#exampleModal" + keylaunches}>
                                                launche info <img alt={'image patch ' + mission_name} height="21px" width=" auto" src={urlPatchMission}></img></button></div>
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
                                                <div className="d-flex flex-row">
                                                    <div className="m-1">
                                                        <img alt={'image patch ' + mission_name} height="50px" width="auto" src={urlPatchMission}></img>
                                                    </div>
                                                    <h5 className="modal-title m-1  " id={keylaunches}>{mission_name}</h5>
                                                </div>
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
                                                <img src={urlImgMission} height="auto" width="100%" ></img>
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
                <div className="row col-md-6">
                    <nav aria-label="Page navigation example ">
                        <ul className="pagination d-flex justify-content-center">
                            {/* <li data-id="+1" onClick={this.handleClickPagination} className="page-item"><a className="page-link">Previous</a></li> */}
                            {renderPageNumbers}
                            {/* <li  data-id="-1" onClick={this.handleClickPagination} className="page-item"><a className="page-link">Next</a></li> */}
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default lunchList
