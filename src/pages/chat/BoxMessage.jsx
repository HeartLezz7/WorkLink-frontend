import useAuth from "../../hooks/useAuth";

export default function BoxMessage({ senderId, message, dealerImage }) {
  const { user } = useAuth();
  return (
    <div
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
          className="w-10 rounded-full"
        />
      )}
      <div className="border border-textGrayLight w-fit py-2 px-4 rounded-full">
        {message}
      </div>
    </div>
  );
}
