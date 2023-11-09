import { useState } from "react";
import plane from "../../../public/icons/plane.png";
import plus from "../../../public/icons/plus.png";
import socket from "../../configs/socket";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useChat from "../../hooks/useChat";
import { useCallback } from "react";

const BoxMessage = ({ senderId, message }) => {
  const { user } = useAuth();
  return (
    <div
      className={`w-full flex ${
        senderId === user.id ? "justify-end" : "justify-start"
      } items-center gap-[5px]`}
    >
      {senderId === user.id ? "" : <img src={plus} alt="profile img" />}
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
  const [chatRoom, setChatRoom] = useState({});

  const { user } = useAuth();
  const { allChatRoom } = useChat();
  console.log(chatRoom, "current room");

  const { chatRoomId } = useParams();

  const getChatroom = useCallback(async () => {
    try {
      const resonse = await axios.get(`/chat/getMessage/${chatRoomId}`);
      setChatMessage(resonse.data.allMessage);
      socket.auth = {
        id: user.id,
      };
      socket.connect();
    } catch (err) {
      console.log(err);
    }
  }, [chatRoomId, user]);

  useEffect(() => {
    getChatroom();
    const foundRoom = allChatRoom.find((room) => room.id == +chatRoomId);
    setChatRoom(foundRoom);
    return () => socket.disconnect();
  }, [chatRoomId, allChatRoom, getChatroom]);
  const checkUser = () => {
    if (chatRoom.createrId === user.id) {
      return chatRoom.dealerId;
    } else return chatRoom.createrId;
  };

  const handleSubmitChat = async (e) => {
    try {
      e.preventDefault();
      // const response = await axios.post("/chat/createMessage", {
      //   message: input,
      //   toId: chatMessage[0].receiverId,
      //   chatRoomId: chatRoomId,
      // });
      // setChatMessage([...chatMessage, response.data.createMessage]);
      socket.emit("message", {
        message: input,
        from: user.id,
        to: checkUser(),
        room: chatRoomId,
      });
      setInput("");
    } catch (err) {
      console.log(err);
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
              <BoxMessage
                key={chat.id}
                message={chat.message}
                senderId={chat.senderId}
                dealerImage={chat}
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
