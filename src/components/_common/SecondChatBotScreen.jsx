import ChatBotScreen from "./ChatBotScreen";

const SecondChatBotScreen = ({ isChatBoardOpen, toggleOff }) => {
  return (
    <ChatBotScreen
      toggleOff={toggleOff}
      isChatBoardOpen={isChatBoardOpen}
      first={false}
      messageArray={[{ user: "bot", msg: "Hello, nice to meet you, how can we help" }]}
    />
  );
};

export default SecondChatBotScreen;
