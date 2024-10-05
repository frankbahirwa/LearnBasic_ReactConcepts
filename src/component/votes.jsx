import React from 'react';

const MainContent = () => {
  return (
    <div className=" absolute left-[8cm] w-3/4 top-5 flex-grow bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Votes</h2>
      
      <div className="mb-4">
        <button className="bg-red-500 text-white py-2 px-4 rounded">Reset</button>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <div>
            <label>Show 
              <select className="ml-2 border rounded p-1">
                <option>10</option>
              </select>
              entries
            </label>
          </div>
          <div>
            <label>
              Search: 
              <input type="text" className="ml-2 border rounded p-1" />
            </label>
          </div>
        </div>
        
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 border">Position</th>
              <th className="py-2 border">Candidate</th>
              <th className="py-2 border">Voter</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 border text-center" colSpan="3">No data available in table</td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-between mt-4">
          <p>Showing 0 to 0 of 0 entries</p>
          <div>
            <button className="py-1 px-3 border rounded">Previous</button>
            <button className="py-1 px-3 border rounded ml-2">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
