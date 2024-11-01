import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { MapContainer, TileLayer } from 'react-leaflet';
import Plot from 'react-plotly.js';

import './App.css';

const App: React.FC = () => {
  const covidData = useSelector((state: RootState) => state.covid.data);
  const filteredData = useSelector((state: RootState) => state.covid.filteredData);

  const stateSummary = {
    totalCases: 50000,
    activeCases: 10000,
    recovered: 35000,
    deaths: 5000,
  };

  return (
    <div className="app">
      <header className="header">
        <h1>COVID-19 Dashboard - India</h1>
        <p className="timestamp">Last Updated: [Timestamp]</p>
      </header>

      <div className="content">
        <div className="filter-section">
          <label htmlFor="state-filter">State Filter: </label>
          <select id="state-filter" className="filter-dropdown">
            <option value="all">All States</option>
          </select>
        </div>

        <div className="summary-cards">
          {Object.entries(stateSummary).map(([key, value]) => (
            <div className="card" key={key}>
              <h3>{key.replace(/([A-Z])/g, ' $1')}</h3>
              <p>{value.toLocaleString()}</p>
            </div>
          ))}
        </div>

        <div className="charts-section">
          <div className="chart">
            <h3>COVID-19 Cases Distribution</h3>
            <Plot
              data={[
                {
                  values: [stateSummary.activeCases, stateSummary.recovered, stateSummary.deaths],
                  labels: ['Active Cases', 'Recovered', 'Deaths'],
                  type: 'pie',
                },
              ]}
              layout={{ title: 'Distribution of Cases' }}
              style={{ width: '100%', height: '300px' }}
            />
          </div>

          <div className="chart">
            <h3>COVID-19 Trends</h3>
            <Plot
              data={[
                {
                  x: ['2021-01-01', '2021-02-01', '2021-03-01'],
                  y: [40000, 45000, 50000],
                  type: 'scatter',
                  mode: 'lines+markers',
                  name: 'Total Cases',
                },
                {
                  x: ['2021-01-01', '2021-02-01', '2021-03-01'],
                  y: [12000, 11000, 10000],
                  type: 'scatter',
                  mode: 'lines+markers',
                  name: 'Active Cases',
                },
                {
                  x: ['2021-01-01', '2021-02-01', '2021-03-01'],
                  y: [25000, 30000, 35000],
                  type: 'scatter',
                  mode: 'lines+markers',
                  name: 'Recovered',
                },
                {
                  x: ['2021-01-01', '2021-02-01', '2021-03-01'],
                  y: [3000, 4000, 5000],
                  type: 'scatter',
                  mode: 'lines+markers',
                  name: 'Deaths',
                },
              ]}
              layout={{ title: 'COVID-19 Trend Over Time' }}
              style={{ width: '100%', height: '300px' }}
            />
          </div>
        </div>
        <div className="map-section">
          <h3>Map View of COVID-19 Cases</h3>
          <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default App;
