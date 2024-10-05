import React from 'react';

const voters = [
  { lastName: 'Carter', firstName: 'William', photo: '', voterID: 'lqyvXeC1ZlkbJHN' },
  { lastName: 'Cooper', firstName: 'James', photo: '', voterID: 'KkMWRcTZPf7xNgU' },
  
];

const VoterList = () => {
  return (
    <div className=" absolute left-[7cm] w-3/4 top-10 p-4">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <tr>
            <th className="py-3 px-6 text-left">Lastname</th>
            <th className="py-3 px-6 text-left">Firstname</th>
            <th className="py-3 px-6 text-left">Photo</th>
            <th className="py-3 px-6 text-left">Voter's ID</th>
            <th className="py-3 px-6 text-left">Tools</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {voters.map((voter, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">{voter.lastName}</td>
              <td className="py-3 px-6 text-left">{voter.firstName}</td>
              <td className="py-3 px-6 text-left">
                <img
                  src={voter.photo || 'https://via.placeholder.com/40'}
                  alt="profile"
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="py-3 px-6 text-left">{voter.voterID}</td>
              <td className="py-3 px-6 text-left">
                <button className="bg-green-500 text-white px-4 py-2 rounded-md mr-2">Edit</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VoterList;
