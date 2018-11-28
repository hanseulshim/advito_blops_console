import React from 'react';
import Header from './Header';
import './Dashboard.scss';
import SummaryChartRow from './SummaryChartRow';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Header />
      <SummaryChartRow/>
    </div>
  );
};

export default Dashboard;
