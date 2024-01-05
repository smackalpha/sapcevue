// components/Dashboard.js
import React, { useState, useEffect, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Chart from 'chart.js/auto'; // Import Chart.js

import './Dashboard.css';

const Dashboard = ({ username }) => {
  const [missionData, setMissionData] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.ag-grid.com/example-assets/space-mission-data.json');
        const data = await response.json();
        console.log(data,'data');
        setMissionData(data);
      } catch (error) {
        console.error('Error fetching space mission data:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  useEffect(() => {
    // Ensure mission data is available
    if (missionData.length === 0) return;

    // Count the number of successful missions
    const successCount = missionData.filter((mission) => mission.successful === true).length;
    const totalMissions = missionData.length;
console.log(successCount,'successCount');
    // Calculate success rate
    const successRate = (successCount / totalMissions) * 100;

    // Prepare data for Chart.js
    const labels = ['Success', 'Failure'];
    const data = [successRate, 100 - successRate];
    const backgroundColor = ['#4CAF50', '#FF6384'];

    // Destroy previous chart instance to avoid canvas reuse issues
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create new Chart instance
    const ctx = document.getElementById('myPieChart');
    chartRef.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: backgroundColor,
            hoverBackgroundColor: backgroundColor,
          },
        ],
      },
    });

    // Cleanup on component unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [missionData]);

  const gridOptions = {
    columnDefs: [
      { headerName: 'Mission Name', field: 'mission' },
      { headerName: 'Launch Company', field: 'company' },
      { headerName: 'Location', field: 'location' },
      { headerName: 'Date', field: 'date' },
      { headerName: 'Time', field: 'time' },
      { headerName: 'Rocket Type', field: 'rocket' },
      { headerName: 'Price', field: 'price' },
      { headerName: 'Mission Outcome', field: 'successful' },
    ],
    rowData: missionData,
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome, {username} !</h2>
      <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
        <AgGridReact {...gridOptions} />
      </div>
      <div className="chart-container">
        <h3>Mission Outcomes</h3>
        <canvas id="myPieChart" width="400" height="400"></canvas>
      </div>
    </div>
  );
};

export default Dashboard;
