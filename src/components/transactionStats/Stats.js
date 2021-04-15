import React from 'react'
import { Line } from 'react-chartjs-2'
import RatePercentage from './RatePercentage'
import StatsData from './StatsData'

function Stats() {
    const data = canvas => {
        canvas.height=70
        const ctx = canvas.getContext("2d")
        const gradient = ctx.createLinearGradient(0, 0, 0, 80);
        gradient.addColorStop(0, '#fa7f7241')
        gradient.addColorStop(1, '#FFFFFF')
        return {
            labels: [1, 2, 3, 'Lorem Ipsum', 5, 6, 7, 8],
            datasets: [
                {
                    data: [1, 2, 1, 3, 0, 2.5, .5, 2],
                    fill: true,
                    backgroundColor: gradient,
                    borderColor: '#fa7f72',
                    pointBackgroundColor: '#fa7f72',
                    pointBorderColor: 'white',
                    pointBorderWidth: 3
                },
            ],
        }
    }
    
    const options = {
        responsive: true,
        legend: {
            display: false,
        },
        elements:{
            point:{
                radius: customRadius
            },
            line: {
                tension: 0.5,
            }
        },
        scales:{
            xAxes:[{
                ticks: {
                    display: false,
                },
                gridLines: {
                    display: false,
                }
            }],
            yAxes: [{
                ticks: {
                    display: false,
                    suggestedMin: 0,
                    suggestedMax: 4
                },
                gridLines: {
                    display: false,
                }
            }]
        }
    }
    function customRadius( context )
    {
        let index = context.dataIndex;
        return index === 3  ? 8 : 0;
    }
    return (
        <div>
            <h2>Audience Overview</h2>
            <div className="subtitle-text">
                Business Graph With Stats
            </div>
            <Line id="canvas" data={data} options={options} />
            <StatsData/>
            <RatePercentage />
        </div>
    )
}

export default Stats
