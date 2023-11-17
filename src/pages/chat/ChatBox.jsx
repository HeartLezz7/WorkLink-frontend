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
  } = useChat();

  const chatEl = useRef();
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
    scrollToElement();
  }, [allChatRoom, chatRoomId]);

  useEffect(() => {
    socket.on("receive_message", (obj) => {
      console.log(obj.chatRoomId == chatRoomId, "check boolean");
      if (obj.chatRoomId == chatRoomId) {
        console.log("first");
        setChatMessage([...chatMessage, obj]);
      }
      scrollToElement();
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

  const scrollToElement = () => {
    // Access the current property of the ref to get the DOM element
    const element = chatEl?.current.lastElementChild;

    // Check if the element exists before trying to scroll into view
    if (element) {
      element?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
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
        message.message = file;
        message.type = "file";
      } else if (input) {
        message.message = input;
        message.type = "message";
      } else {
        console.log("message required");
        return;
      }

      socket.emit("sent_message", message);
      setInput("");
      setFile(null);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(chatMessage, "chat");

  return (
    <div className="grid grid-rows-5 bg-background border-x-2 border-x-textGrayLight h-[calc(100vh-60px)] col-span-5">
      <div className="row-span-5 flex flex-col overflow-hidden">
        <div className="bg-primary text-textWhite text-3xl text-center py-2 font-bold ">
          {chatRoom?.createrId === user.id
            ? `${chatRoom?.dealer?.firstName} ${chatRoom?.dealer?.lastName}`
            : `${chatRoom?.creater?.firstName} ${chatRoom?.creater?.lastName}`}
        </div>
        <div
          ref={chatEl}
          className=" overflow-y-scroll flex flex-col p-2 gap-2 h-full"
        >
          {chatMessage.map((chat) => {
            return (
              <BoxMessage
                key={chat.id}
                id={chat.id}
                message={chat.message}
                senderId={chat.senderId}
                dealerImage={chat.sender?.profileImage}
              />
            );
          })}
        </div>
      </div>
      <div className="row-span-1 px-5 py-2 flex flex-col items-start justify-center gap-2">
        {file && (
          <img
            src={URL.createObjectURL(file)}
            alt="file"
            className="h-36 border border-textGrayLight p-2"
          />
        )}
        <div className="border flex justify-between items-center px-6 py-1 rounded-full w-full gap-2 relative">
          <form
            className="w-full flex items-center gap-2"
            onSubmit={handleSubmitChat}
          >
            <div onClick={() => chatImage.current.click()}>
              <img src={plus} alt="plus" className="w-[30px]" />
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
            <div className="w-full">
              <InputMessage
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
          </form>
          <button className="cursor-pointer" onClick={handleSubmitChat}>
            <img src={plane} alt="plane" className="w-[30px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
