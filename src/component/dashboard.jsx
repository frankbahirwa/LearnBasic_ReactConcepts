import React from 'react';

const Dashboard = () => {
  return (
    <div className="absolute w-3/4 left-[7cm] flex-grow bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gray-200 p-4 shadow-md rounded">
          <h2 className="text-xl">2</h2>
          <p>No. of Positions</p>
        </div>
        <div className="bg-green-400 p-4 shadow-md rounded">
          <h2 className="text-xl">9</h2>
          <p>No. of Candidates</p>
          <a href="#">More info</a>
        </div>
        <div className="bg-yellow-400 p-4 shadow-md rounded">
          <h2 className="text-xl">14</h2>
          <p>Total Voters</p>
        </div>
        <div className="bg-red-400 p-4 shadow-md rounded">
          <h2 className="text-xl">0</h2>
          <p>Voters Voted</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="bg-white p-4 shadow-md rounded">
          <h3 className="text-lg font-bold mb-4">Votes Tally</h3>
          {/* Add vote tally chart here */}
        </div>
        <div className="bg-white p-4 shadow-md rounded">
          <h3 className="text-lg font-bold mb-4">Best Villain - MCU Actors</h3>
          {/* Add best villain tally chart here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
