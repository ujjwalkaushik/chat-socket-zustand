import React from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from '../../components/messages/MessageContainer';

const Home = () => {
  return (
    <div className="flex p-1 shadow-lg shadow-gray-500/50 sm:h-[450px] md-h-[550px] rounded-lg overflow-hiddenbg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
