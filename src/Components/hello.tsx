import React, { Component } from 'react'
type nameProps = {
    name: string;
    age: number
};

export class hello extends Component<nameProps>{

    render() {

        return (
            <div>
                nom:{this.props.name}
                age:{this.props.age}
            </div>
        )
    }
}

export default hello
