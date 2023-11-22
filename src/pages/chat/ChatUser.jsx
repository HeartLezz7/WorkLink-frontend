import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import formatTimeAgo from '../../utils/time-ago';
import { useParams } from 'react-router-dom';

export default function ChatUser({
  roomId,
  creater,
  dealer,
  workId,
  chatTime,
}) {
  const { user } = useAuth();
  const { chatRoomId } = useParams();
  console.log(chatRoomId, 'chatRoomId');

  return (
    <Link to={`/chatRoom/${roomId}`}>
      <div
        className={`flex flex-col w-full rounded-lg ${
          dealer.id !== user.id ? 'bg-primaryLight/90' : 'bg-background'
        } ${roomId == chatRoomId ? 'border-4 border-textGrayDark' : ''}`}
      >
        <div className="w-full shadow-md flex gap-5 items-center px-3 py-2">
          <img
            src={
              creater.id === user.id
                ? dealer?.profileImage
                : creater?.profileImage
            }
            alt="search"
            className="w-[80px] rounded-full aspect-square object-cover whiteDivShadow "
          />

          <div className="w-full flex flex-col gap-1">
            {creater.id === user.id ? (
              <div className="font-bold">
                {dealer.firstName} {dealer.lastName}
              </div>
            ) : (
              <div className="font-bold">
                {creater.firstName} {creater.lastName}
              </div>
            )}
            <div className="font-semibold">Work id : {workId}</div>
            <div className="w-full flex justify-between">
              <div>{dealer.createdAt.slice(0, 10)}</div>
              <div>{formatTimeAgo(chatTime)}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
