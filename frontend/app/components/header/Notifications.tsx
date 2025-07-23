import { NotificationItem } from "../../types/headerTypes";

const notifications: NotificationItem[] = [
  {
    id: 1,
    title: "New endorsement",
    message: "@vitalik.eth endorsed you as a Great Dev",
    time: "2h ago",
    read: false,
  },
  {
    id: 2,
    title: "Cast scheduled",
    message: "Your cast to /dev has been published",
    time: "5h ago",
    read: true,
  },
  {
    id: 3,
    title: "Reputation update",
    message: "Your trust score increased to 8.7",
    time: "1d ago",
    read: true,
  },
];

export const Notifications = () => {
  return (
    <div className="space-y-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`p-3 rounded-lg cursor-pointer transition-colors ${notification.read ? "bg-gray-800/50" : "bg-purple-500/10"} hover:bg-gray-700`}
        >
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-sm font-medium text-white">
                {notification.title}
              </h4>
              <p className="text-xs text-gray-300 mt-1">
                {notification.message}
              </p>
            </div>
            <span className="text-xs text-gray-500 whitespace-nowrap">
              {notification.time}
            </span>
          </div>
          {!notification.read && (
            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
          )}
        </div>
      ))}
      <button className="w-full mt-2 py-2 text-center text-sm text-purple-400 hover:text-purple-300">
        View all notifications
      </button>
    </div>
  );
};
