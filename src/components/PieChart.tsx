import React from 'react';
import Plot from 'react-plotly.js';
import { CovidData } from '../types';

const PieChart: React.FC<{ data: CovidData }> = ({ data }) => (
    <Plot
        data={[
            {
                values: [data.activeCases, data.recovered, data.deaths],
                labels: ['Active', 'Recovered', 'Deaths'],
                type: 'pie',
            },
        ]}
        layout={{ title: 'COVID-19 Cases Distribution' }}
    />
);

export default PieChart;
