import React, { useState } from "react";
import ChatBotScreen from "./ChatBotScreen";

const FirstChatBotScreen = ({
  isChatBoardOpen,
  toggleOff,
  noMoreFirstRender,
}) => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    { user: "bot", msg: "Please provide your name" },
  ]);

  const handleBtnClick = () => {
    if (!userInput) return;
    setMessages((prev) => [...prev, { msg: userInput, user: "default" }]);
    setUserInput("");
  };

  return (
    <ChatBotScreen
      title="Welcome"
      description="please provide name and email"
      toggleOff={toggleOff}
      isChatBoardOpen={isChatBoardOpen}
      messages={messages}
      userInput={userInput}
      setMessages={setMessages}
      setUserInput={setUserInput}
      handleBtnClick={handleBtnClick}
      noMoreFirstRender={noMoreFirstRender}
    />
  );
};

export default FirstChatBotScreen;
