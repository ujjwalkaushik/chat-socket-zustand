import React from "react";

import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../store/useConversation";
import { extractTime } from "../../utils/extractTime.";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";

  const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;

  const bgColor = fromMe ? 'bg-gray-500' : "";

  console.log(message.shouldShake);
  const shakeClass = message.shouldShake ? "shake" : '';

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Chat Bubble"
            src={profilePic}
          />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bgColor} ${shakeClass} pb-2`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
