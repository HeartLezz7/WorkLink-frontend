import { useState } from "react";
import plane from "../../../public/icons/plane.png";
import plus from "../../../public/icons/plus.png";
import useChat from "../../hooks/useChat";

const ChatMessage = ({ message }) => {
  return (
    <p className="border border-textGrayLight w-fit py-2 px-4 rounded-full">
      {message}
    </p>
  );
};

const InputMessage = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="message..."
      value={value}
      onChange={onChange}
      className="w-full rounded-xl py-2 px-4 "
    />
  );
};
export default function ChatBox() {
  const [input, setInput] = useState("");

  const { chatMessage, setChatMessage } = useChat();

  const handleSubmitChat = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="grid grid-rows-5 border-x-2 border-x-textGrayLight h-[calc(100vh-60px)]">
      <div className="row-span-5 flex flex-col overflow-hidden  ">
        <div className="bg-primary text-textWhite text-4xl text-center p-3 font-semibold ">
          Status
        </div>
        <div className=" overflow-y-scroll flex flex-col p-2 gap-2 h-full">
          {chatMessage.map((chat) => (
            <ChatMessage key={chat.id} message={chat} />
          ))}
          <ChatMessage message="hello" />
        </div>
      </div>
      <div className="row-span-1 p-5 flex items-center justify-center ">
        <div className="border flex justify-between items-center px-6 py-3 rounded-xl w-full gap-2">
          <div className="w-full flex items-center gap-2">
            <img src={plus} alt="plus" className="w-[40px]" />
            <InputMessage
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div>
            <img src={plane} alt="plane" className="w-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
