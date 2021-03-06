import React from 'react';
import {Line} from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import ChartjsData from './ChartjsData'

class ChartJs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                labels : this.props.labels,
                datasets: [
                    {
                        // label: '',
                        data: ['0', '0','0','0','0','0','0','0','0','0','0','0'],    
                        fill: false,
                    }
                ]
            }
        }
    }

    // setGradientColor = (canvas, color) => {
    //     const ctx = canvas.getContext('2d');
    //     const gradient = ctx.createLinearGradient(0,0, 0,500);
    //     gradient.addColorStop (0, color);
    //     gradient.addColorStop(0.95, 'lightgreen');
    //     return gradient;
    // }

    getChartData = canvas => {
        const data = this.state.data;
        // if (data.datasets) {
        //     let colors = ['grey', 'lightyellow'];
        //     data.datasets.forEach((set, i ) => {
        //         set.backgroundColor = this.setGradientColor(canvas, colors[i]);
        //         set.borderColor = 'white';
        //     })
        // }
        return data;
    }

    isInViewPort = () => {
        let chartBar = document.querySelector('#chartBar');

            if (chartBar !== null) {
                let bounding = chartBar.getBoundingClientRect()
                if(bounding.top <= 330 && chartBar !== null) {
                    this.setState({
                        data : {
                            datasets: [{
                                data: this.props.data
                                // fill: false,
                            }]
                        }
                    })
                } 
            }
    }

    chartReference = {};

    componentDidMount() {
        console.log(ChartjsData[0].itforshe.labels);
        window.addEventListener('scroll', this.isInViewPort)
    }

    render() {
        return <div id = 'chartBar' className = 'container'>
            <Line 
                ref = {(reference) => this.chartReference = reference}
                options = {{
                    responsive: true,
                    maintainAspectRatio: true,
                    title : {
                        display: true,
                        text: this.props.text,
                        fontSize: 35,
                        fontStyle: 'bold',
                    },
                    legend: {
                        display: false,
                        // position: 'top',
                        // fullWidth: true,
                        // labels : {
                        //     boxWidth: 0,
                        //     fontSize: 30,
                        //     fontStyle: 'bold',
                        //     fontColor: 'black'
                        // }
                    },
                    layout: {
                        padding: {
                            right: 30,
                        }
                    },
                    elements: {
                        line: {
                            tension: 0.4,
                            borderWidth: 3,
                            borderColor: this.props.borderColor
                        },
                        point: {
                            pointStyle: 'circle',
                            borderWidth: 1,
                            backgroundColor: this.props.backgroundColor,
                            radius: '6'
                        },
                    },
                    scales : {
                        xAxes : [{
                            scaleLabel : {
                                display: true,
                                fontSize: 30,
                                fontStyle: 'bold',
                                labelString: 'lata', 
                            },
                            gridLines : {
                                display : false,
                            },
                            ticks : {
                                fontSize: 20,
                                fontStyle: 'bold',
                            }
                        }],
                        yAxes : [{
                            scaleLabel : {
                                display: true,
                                fontSize: 15,
                                fontStyle: 'bold',
                                labelString: 'liczba eventów', 
                            },
                            ticks : {
                                // beginAtZero: true,
                                min: parseInt(this.props.beginAt),
                                max: parseInt(this.props.endAt)
                            }
                        }]
                    },
                    plugins: {
                        datalabels : {
                            display: true,
                            align: 'top',
                            offset: '8',
                            color: this.props.datalabelColor,
                            font : {
                                size: '20',
                                weight: 'bold'
                            }
                        },
                        
                    }
                    
                }}
                data = {this.getChartData}
            />
        </div>
    }
}

export default ChartJs;