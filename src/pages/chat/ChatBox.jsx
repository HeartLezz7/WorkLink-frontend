import plane from "../../../public/icons/plane.png";
import plus from "../../../public/icons/plus.png";
import socket from "../../configs/socket";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useChat from "../../hooks/useChat";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { BsEmojiSmile } from "react-icons/bs";
import { useRef } from "react";
import BoxMessage from "./BoxMessage";
import InputMessage from "./InputMessage";

export default function ChatBox() {
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);
  const [emojiOpen, setEmojiOpen] = useState(false);

  const { user } = useAuth();
  const {
    allChatRoom,
    chatRoom,
    setChatMessage,
    chatMessage,
    getChatroomMessage,
    Refresh,
  } = useChat();

  const chatImage = useRef();
  const { chatRoomId } = useParams();

  useEffect(() => {
    socket.auth = {
      id: user.id,
    };
    socket.connect();

    return () => socket.disconnect();
  }, []);

  useEffect(() => {
    getChatroomMessage(chatRoomId);
  }, [allChatRoom, chatRoomId, Refresh]);

  useEffect(() => {
    socket.on("receive_message", (obj) => {
      console.log(obj);
      if (obj.chatRoomId == chatRoomId) {
        setChatMessage([...chatMessage, obj]);
      }
    });
    return () => {
      socket.off("receive_message");
    };
  }, [chatMessage]);

  const checkUser = () => {
    if (chatRoom.createrId === user.id) {
      return chatRoom.dealerId;
    } else return chatRoom.createrId;
  };

  const addEmoji = (e) => {
    const getEmoji = e.unified.split("_");
    const emojiArray = [];
    getEmoji.forEach((item) => emojiArray.push("0x" + item));
    let emoji = String.fromCodePoint(...emojiArray);
    setInput(input + emoji);
    setEmojiOpen(false);
  };

  const handleSubmitChat = async (e) => {
    try {
      e.preventDefault();
      const message = {
        message: "",
        senderId: user.id,
        receiverId: checkUser(),
        room: +chatRoomId,
      };
      if (file) {
        const data = new FormData();
        data.append("chatImage", file);
        data.append("message", input);
        console.log("image");
        message.message = data;
      } else if (input) {
        console.log("text");
        message.message = input;
      } else {
        return console.log("message required");
      }

      socket.emit("sent_message", message);
      setInput("");
      setChatMessage([...chatMessage, message]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="grid grid-rows-5 border-x-2 border-x-textGrayLight h-[calc(100vh-60px)] col-span-2">
      <div className="row-span-5 flex flex-col overflow-hidden  ">
        <div className="bg-primary text-textWhite text-4xl text-center p-3 font-semibold ">
          {chatRoom?.createrId === user.id
            ? `${chatRoom?.dealer?.firstName} ${chatRoom?.dealer?.lastName}`
            : `${chatRoom?.creater?.firstName} ${chatRoom?.creater?.lastName}`}
        </div>
        <div className=" overflow-y-scroll flex flex-col p-2 gap-2 h-full">
          {chatMessage.map((chat) => {
            return (
              <BoxMessage
                key={chat.id}
                message={chat.message}
                senderId={chat.senderId}
                dealerImage={chat.sender?.profileImage}
              />
            );
          })}
        </div>
      </div>
      <div className="row-span-1 p-5 flex flex-col items-start justify-center gap-2">
        {file && (
          <img
            src={URL.createObjectURL(file)}
            alt="file"
            className="h-36 border border-textGrayLight p-2"
          />
        )}
        <div className="border flex justify-between items-center px-6 py-3 rounded-full w-full gap-2 relative">
          <form
            className="w-full flex items-center gap-2"
            onSubmit={handleSubmitChat}
          >
            <div onClick={() => chatImage.current.click()}>
              <img src={plus} alt="plus" className="w-[40px]" />
              <input
                type="file"
                className="hidden"
                ref={chatImage}
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setFile(e.target.files[0]);
                  }
                }}
              />
            </div>
            <div
              onClick={() => setEmojiOpen(!emojiOpen)}
              className="cursor-pointer"
            >
              <BsEmojiSmile size={30} />
            </div>
            <div className="absolute bottom-[70px]">
              {emojiOpen && (
                <Picker
                  data={data}
                  value={data}
                  maxFrequentRows={2}
                  onEmojiSelect={addEmoji}
                />
              )}
            </div>
            <div>
              <InputMessage
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
          </form>
          <button onClick={handleSubmitChat}>
            <img src={plane} alt="plane" className="w-[40px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
