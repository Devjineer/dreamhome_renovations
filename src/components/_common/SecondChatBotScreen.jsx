import React, { useState } from "react";
import ChatBotScreen from "./ChatBotScreen";

const SecondChatBotScreen = ({ isChatBoardOpen, toggleOff }) => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    { user: "bot", msg: "Hello, how can I help you??" },
  ]);

  const handleBtnClick = () => {
    setMessages((prev) => [...prev, { msg: userInput, user: "default" }]);
  };

  return (
    <ChatBotScreen
      toggleOff={toggleOff}
      isChatBoardOpen={isChatBoardOpen}
      messages={messages}
      userInput={userInput}
      setMessages={setMessages}
      setUserInput={setUserInput}
      handleBtnClick={handleBtnClick}
      first={false}
    />
  );
};

export default SecondChatBotScreen;
