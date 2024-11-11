import React from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from '../../components/messages/MessageContainer';

const Home = () => {
  return (
    <div className="flex p-1 bg-gray-100 shadow-lg shadow-gray-500/50 sm:h-[600px] md-h-[550px] rounded-lg overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
