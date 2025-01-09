import React, { useState } from "react";
import ChatBotScreen from "./ChatBotScreen";

const FirstChatBotScreen = ({
  isChatBoardOpen,
  toggleOff,
  noMoreFirstRender,
}) => {
  return (
    <ChatBotScreen
      title="Welcome"
      description="please provide name and email"
      toggleOff={toggleOff}
      isChatBoardOpen={isChatBoardOpen}
      noMoreFirstRender={noMoreFirstRender}
    />
  );
};

export default FirstChatBotScreen;
