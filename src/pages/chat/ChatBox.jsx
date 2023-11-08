import { useState } from "react";
import plane from "../../../public/icons/plane.png";
import plus from "../../../public/icons/plus.png";
import socket from "../../configs/socket";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const ChatMessage = ({ senderId, message }) => {
  return (
    <div
      className={`w-full flex ${
        senderId ? "justify-end" : "justify-start"
      } items-center gap-[5px]`}
    >
      {senderId ? "" : <img src={plus} alt="profile img" />}
      <div className="border border-textGrayLight w-fit py-2 px-4 rounded-full">
        {message}
      </div>
    </div>
  );
};

const InputMessage = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="message..."
      value={value}
      onChange={onChange}
      className="w-full rounded-xl py-2 px-4 outline-none "
    />
  );
};
export default function ChatBox() {
  const [input, setInput] = useState("");
  const [chatMessage, setChatMessage] = useState([]);

  const { chatRoomId } = useParams();

  const { user } = useAuth();

  useEffect(() => {
    axios.get(`/chat/getMessage/${chatRoomId}`).then((res) => {
      setChatMessage(res.data.allMessage);
      console.log(res);
    });
    socket.auth = { id: user.id };
    socket.connect();
    return () => socket.disconnect();
  }, [chatRoomId]);

  const handleSubmitChat = async (e) => {
    try {
      console.log(chatMessage, "AAA");
      e.preventDefault();
      socket.emit("message", {
        message: input,
        from: chatMessage.senderId,
        to: chatMessage.reciecerId,
      });
      setChatMessage([...chatMessage, input]);
      setInput("");
    } catch (err) {
      console.log(err);
    } finally {
      //   socket.off("recieved");
    }
  };

  return (
    <div className="grid grid-rows-5 border-x-2 border-x-textGrayLight h-[calc(100vh-60px)] col-span-2">
      <div className="row-span-5 flex flex-col overflow-hidden  ">
        <div className="bg-primary text-textWhite text-4xl text-center p-3 font-semibold ">
          John Wick
        </div>
        <div className=" overflow-y-scroll flex flex-col p-2 gap-2 h-full">
          {chatMessage.map((chat) => {
            return (
              <ChatMessage
                key={chat.id}
                message={chat.message}
                senderId={chat.senderId}
              />
            );
          })}
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
