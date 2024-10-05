import React from "react";

const MusicPlayer = () => {
  return (
    <>
        <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-gray-900 text-white p-4 text-center text-2xl font-bold">
        Hear - High
      </header>

      
      <div className="flex flex-col md:flex-row flex-grow">
       
        <div className="w-full md:w-1/3 bg-black flex items-center justify-center">
          <div className="video-container p-4">
            
            <video
              controls
              className="w-full h-auto"
              src="your-video-url.mp4"
              alt="Current Playing"
            ></video>
          </div>
        </div>

        
        <div className="w-full md:w-2/3 p-4 overflow-auto">
          <h2 className="text-xl font-semibold mb-4">Playlist</h2>
          <ul className="space-y-3">
           
            {[
              { title: "Song 1", duration: "4:30", album: "Album 1" },
              { title: "Song 2", duration: "5:00", album: "Album 2" },
              { title: "Song 3", duration: "3:45", album: "Album 3" },
              
            ].map((song, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white p-3 rounded shadow-md hover:bg-gray-100 cursor-pointer"
              >
                <span>{song.title}</span>
                <span className="text-sm text-gray-500">{song.duration}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    
      <footer className="bg-gray-900 text-white text-center p-4">
        <p>© 2024 Your Music Player</p>
      </footer>
    </div>
    </>

  );
};

export default MusicPlayer;
