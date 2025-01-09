import React, { useEffect, useState } from "react";
import ChatBotHeader from "./ChatBotHeader";
import ChatBox from "./ChatBox";
import Chat from "./Chat";
import { icons } from "../../constants";
import InputField from "./InputField";
import sendMail from "../../services/sendemail";

const ChatBotScreen = ({
  toggleOff,
  title,
  description,
  messageArray = [{ user: "bot", msg: "Please provide your name" }],
  isChatBoardOpen,
  first = true,
  noMoreFirstRender,
}) => {
  const [messages, setMessages] = useState(messageArray);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    if (!first) return;

    const numberOfMessages = messages.length;

    if (numberOfMessages === 2) {
      setMessages((prev) => [
        ...prev,
        { msg: "Thanks for your name, now your email please", user: "bot" },
      ]);
    }

    if (numberOfMessages === 4) {
      const name = messages[1].msg;
      const email = messages[3].msg;
      setMessages((prev) => [
        ...prev,
        { msg: "Please wait a moment", user: "bot" },
      ]);
      (async () => {
        await sendMail({ name, email }, "/send-mail/bot");
        noMoreFirstRender();
      })();
    }
  }, [messages]);

  const handleBtnClick = () => {
    if (!userInput) return;
    setMessages((prev) => [...prev, { msg: userInput, user: "default" }]);
    setUserInput("");
  };

  if (!isChatBoardOpen) return null;

  return (
    <div className="fixed top-0 md:top-[80px] right-0 md:right-10 z-50 flex flex-col items-stretch w-full md:w-[340px] h-screen bg-white md:h-[500px] md:shadow-lg">
      <ChatBotHeader
        toggleOff={toggleOff}
        chatBotTitle={title}
        description={description}
      />

      <ChatBox>
        {messages.map((message) => (
          <Chat {...message} key={message.msg} />
        ))}
      </ChatBox>

      <InputField
        type="textarea"
        containerStyle="flex-center px-5 pt-5 pb-10"
        inputContainerStyle="flex-center flex-1 gap-x-2"
        inputStyle="flex-1 px-2 resize-none h-7 pt-1 outline-none border-none"
        placeholder="Type Your Message"
        value={userInput}
        iconSrc={icons.send}
        handleChange={(e) => setUserInput(e.currentTarget.value)}
        handleBtnClick={handleBtnClick}
        onKeyPress={(e) => {
          const theKey = e.key;
          if (theKey === "Enter") {
            handleBtnClick();
          }
        }}
      />
    </div>
  );
};

export default ChatBotScreen;
