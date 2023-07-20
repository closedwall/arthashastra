import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import data from "../assets/dummyData.json";
import "../styles/linechart.css";

const LineChart = () => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const year = data.map((val) => val.Year);
    const madel = data.map((val) => val.Medals);
    useEffect(() => {
        const data = {
            labels: [...year],
            datasets: [
                {
                    label: "Medals",
                    data: [...madel],
                    fill: false,
                },
            ],
        };
        const options = {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Years",
                        font: {
                            weight: "bold",
                        },
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: "Medals Won",
                        font: {
                            weight: "bold",
                        },
                    },
                },
            },
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="chart-container">
            <h4>Medals Won by India in Olympics</h4>
            <div className="card">
                <Chart type="line" data={chartData} options={chartOptions} />
                <h5 style={{textAlign:'center'}} >Fig 2-Line Chart</h5>
            </div>
        </div>
    );
};

export default LineChart;
