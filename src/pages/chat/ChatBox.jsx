import { useState } from "react";
import plane from "../../../public/icons/plane.png";
import plus from "../../../public/icons/plus.png";
import socket from "../../configs/socket";

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

  const [chatMessage, setChatMessage] = useState([]);

  const handleSubmitChat = async (e) => {
    try {
      e.preventDefault();
      socket.emit("message", input);
      setChatMessage([...chatMessage, input]);
      //   await socket.on("recieved", (msg) => {
      //     console.log(msg, "connect backend");
      //   });
      setInput("");
    } catch (err) {
      console.log(err);
    } finally {
      //   socket.off("recieved");
    }
  };

  const chat = [
    { id: 1, senderId: 1, message: "hello" },
    { id: 2, senderId: 1, message: "my name is heart" },
    { id: 3, receiverId: 1, message: "hello" },
    { id: 4, receiverId: 1, message: "you have ajob" },
    { id: 5, senderId: 1, message: " sure you need it?" },
    { id: 5, senderId: 1, message: " sure you need it?" },
    { id: 5, senderId: 1, message: " sure you need it?" },
    { id: 5, senderId: 1, message: " sure you need it?" },
    { id: 5, senderId: 1, message: " sure you need it?" },
    { id: 5, senderId: 1, message: " sure you need it?" },
    { id: 5, senderId: 1, message: " sure you need it?" },
    { id: 5, senderId: 1, message: " sure you need it?" },
    { id: 5, senderId: 1, message: " sure you need it?" },
    { id: 5, senderId: 1, message: " sure you need it?" },
    { id: 5, senderId: 1, message: " sure you need it?" },
  ];

  console.log(chatMessage, "message");

  return (
    <div className="grid grid-rows-5 border-x-2 border-x-textGrayLight h-[calc(100vh-60px)] col-span-2">
      <div className="row-span-5 flex flex-col overflow-hidden  ">
        <div className="bg-primary text-textWhite text-4xl text-center p-3 font-semibold ">
          John Wick
        </div>
        <div className=" overflow-y-scroll flex flex-col p-2 gap-2 h-full">
          {chatMessage.map((chat) => {
            // if (chat.senderId) {
            //   return (
            //     <>
            //       <div className="w-full flex justify-start items-center gap-[5px]">
            //         <img src={chat.img || plus} alt="profile img" />
            //         <ChatMessage key={chat.id} message={chat.message} />
            //       </div>
            //     </>
            //   );
            // } else {
            //   return (
            //     <>
            //       <div className="w-full flex justify-end items-center gap-[5px]">
            //         <ChatMessage key={chat.id} message={chat.message} />
            //         <img src={chat.img || plus} alt="profile img" />
            //       </div>
            //     </>
            //   );
            // }
            return <ChatMessage key={chat.id} message={chat} />;
          })}
          {/* <ChatMessage message="hello" /> */}
        </div>
      </div>
      <div className="row-span-1 p-5 flex items-center justify-center ">
        <div className="border flex justify-between items-center px-6 py-3 rounded-xl w-full gap-2">
          <form
            className="w-full flex items-center gap-2"
            onSubmit={handleSubmitChat}
          >
            <img src={plus} alt="plus" className="w-[40px]" />
            <InputMessage
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
          <div>
            <img src={plane} alt="plane" className="w-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
