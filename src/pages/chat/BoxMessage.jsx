import useAuth from "../../hooks/useAuth";

export default function BoxMessage({ id, senderId, message, dealerImage }) {
  const { user } = useAuth();

  return (
    <div
      id={id}
      className={`w-full flex ${
        senderId === user.id ? "justify-end" : "justify-start"
      } items-center gap-3`}
    >
      {senderId === user.id ? (
        ""
      ) : (
        <img
          src={dealerImage}
          alt="profile img"
          className="w-10 rounded-full aspect-square object-cover whiteDivShadow"
        />
      )}

      {message.includes("http") ? (
        <img src={message} alt="image" className="max-w-[200px] object-cover" />
      ) : (
        <div className=" bg-backgroundWhiteGray w-fit py-1 px-4 rounded-[24px] max-w-[50%] whitespace-wrap overflow-x-hidden">
          {message}
        </div>
      )}
    </div>
  );
}
