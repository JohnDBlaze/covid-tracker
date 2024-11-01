import React from 'react';
import Plot from 'react-plotly.js';
import { CovidData } from '../types';

const LineChart: React.FC<{ data: CovidData }> = ({ data }) => (
    <Plot
        data={[
            {
                x: ['Total Cases', 'Active Cases', 'Recovered', 'Deaths'],
                y: [data.totalCases, data.activeCases, data.recovered, data.deaths],
                type: 'scatter',
                mode: 'lines+markers',
            },
        ]}
        layout={{ title: 'COVID-19 Cases Over Time' }}
    />
);

export default LineChart;
