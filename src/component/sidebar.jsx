import React from 'react';


const SideBar = () => {
  return (
    <>
        <aside className="fixed w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-4 flex items-center">
        {/* <img 
          src={profile}
          alt="User Avatar" 
          className="rounded-full w-12 h-12 mr-2" 
        /> */}
        <div>
          <h2 className="text-lg">Voting - System </h2>
          <span className="text-green-500"><i className="fa fa-circle"></i> Online</span>
        </div>
      </div>
      <nav className="mt-[4cm] ml-[0.5cm]">
<details>
<summary className="text-1xl text-gray-400 px-4">REPORTS</summary>
<ul>
<li><a href="/dashboard" className="block p-4 hover:bg-gray-700">Dashboard</a></li>
<li><a href="/books" className="block p-4 hover:bg-gray-700">Book list</a></li>
<li><a href="/add-book" className="block p-4 hover:bg-gray-700">add - book</a></li>
<li><a href="/update-book" className="block p-4 hover:bg-gray-700">update - book</a></li>
<li><a href="/delete-book" className="block p-4 hover:bg-gray-700">delete - book</a></li>
<li><a href="/votes" className="block p-4 hover:bg-gray-700">Votes</a></li>
</ul>
</details>
<br />
<details>
<summary className="text-1xl text-gray-400 px-4 mt-4">MANAGE</summary>
        <ul>
          <li><a href="/voters" className="block p-4 hover:bg-gray-700">Voters</a></li>
          <li><a href="#" className="block p-4 hover:bg-gray-700">Positions</a></li>
          <li><a href="#" className="block p-4 hover:bg-gray-700">Candidates</a></li>
        </ul>
</details>
<br />

<details>
<summary className="text-1xl text-gray-400 px-4 mt-4">SETTINGS</summary>
        <ul>
          <li><a href="#" className="block p-4 hover:bg-gray-700">Ballot Position</a></li>
          <li><a href="#" className="block p-4 hover:bg-gray-700">Election Title</a></li>
        </ul>
</details>
      </nav>
    </aside>
    </>

  );
};

export default SideBar;
