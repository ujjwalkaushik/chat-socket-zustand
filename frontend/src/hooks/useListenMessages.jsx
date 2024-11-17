import React, { useEffect } from "react";
import { useSocketContext } from "../context/socketContext";
import useConversation from "../store/useConversation";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessages) => {
      newMessages.shouldShake = true;
      setMessages([...messages, newMessages]);
    });

    return () => socket?.off("newMessages");
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
