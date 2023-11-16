import useAuth from "../../hooks/useAuth";

export default function BoxMessage({ id, senderId, message, dealerImage }) {
  const { user } = useAuth();

  return (
    <div
      id={id}
      className={`w-full flex ${
        senderId === user.id ? "justify-end" : "justify-start"
      } items-center gap-[5px]`}
    >
      {senderId === user.id ? (
        ""
      ) : (
        <img
          src={dealerImage}
          alt="profile img"
          className="w-10 rounded-full aspect-square object-cover"
        />
      )}

      {message.includes("http") ? (
        <div className="w-[100px] border flex justify-center items-center">
          <img src={message} alt="image" className="w-full" />
        </div>
      ) : (
        <div className="border border-textGrayLight w-fit py-2 px-4 rounded-full">
          {message}
        </div>
      )}
    </div>
  );
}
