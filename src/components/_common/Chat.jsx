import React from "react";
import IconWrapper from "./IconWrapper";
import { icons } from "../../constants";

const chatStyle = {
  bot: "",
  default: "justify-end",
};

const Chat = ({ user = "default", msg }) => {
  return (
    <div className={`flex items-end gap-x-2 mb-2 ${chatStyle[user]}`}>
      {user === "bot" && (
        <IconWrapper
          iconSrc={icons.facebook}
          containerStyle="bg-tea size-4 p-1 rounded-full"
        />
      )}

      <div className="px-2 py-1 text-sm font-bold text-white rounded-md bg-charcoal w-fit max-w-[80%]">
        <p>{msg}</p>
      </div>

      {user === "default" && (
        <IconWrapper
          iconSrc={icons.facebook}
          containerStyle="bg-tea size-4 p-1 rounded-full"
        />
      )}
    </div>
  );
};

export default Chat;
