import { type } from 'os';
import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
type graphProps = {
    objectLunches: {
        [keylaunches: string]: {
            launch_date_unix: number
        }
    },

}
export class Graph extends Component<graphProps> {
    render() {
        const objectLunches = this.props.objectLunches
        const arrayLaunch: number[] = []
        Object.keys(objectLunches).map(keylaunches => {
            const launch_date_unix = new Date(objectLunches[keylaunches].launch_date_unix * 1000)
            const DateLaunch = launch_date_unix.getFullYear()
            arrayLaunch.push(DateLaunch)
        })

        const listDate: number[] = []
        const arrayDateNumber: number[] = []
        for (let i: number = Math.min(...arrayLaunch); i <= Math.max(...arrayLaunch); i++) {
            const arrayDateFilter = arrayLaunch.filter(date => date == i).length
            listDate.push(i)
            arrayDateNumber.push(arrayDateFilter)
        }
        const data = {
            labels: listDate,
            datasets: [
                {
                    label: 'Number launches',
                    data: arrayDateNumber,
                    fill: false,
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                },
            ],
        };
        const options = {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],

            },
        };


        return (
            <div>
                <Line data={data} options={options} />
            </div>
        )
    }
}

export default Graph
