import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Chat Bubble"
            src={"https://i.pravatar.cc/150?u=a042581f4e29026704d"}
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-gray-500`}>
        Hi! What is up?
      </div>
      <div className="chat-footer opacity-50 text-xs gap-1 items-center">12:42</div>
    </div>
  );
};

export default Message;
