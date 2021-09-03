import React, { Component } from 'react'
import SpaceXSvg from '../Files/SpaceX.svg'

export class iconSpaceX extends Component {
    render() {
        return (
            <div>
                <img height="150px" width="auto" alt="logo spaceX" src={SpaceXSvg}></img>
            </div>
        )
    }
}

export default iconSpaceX
