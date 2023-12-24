import Image from "next/image";
import { TbMoodPlus } from "react-icons/tb";
import { Editor } from "./Editor";

const messages = [
  {
    username: "Enes Tufekci",
    image: "/media/enes.png",
    text: "Hey team, we're gearing up for the big launch! How's everyone doing? I just wanted to check in and make sure we're all on track for tomorrow's deployment.",
    hour: "10:30 AM",
    status: "online",
    reactions: [
      { emoji: "🚀", count: 2 },
      { emoji: "😊", count: 3 },
      { emoji: "💡", count: 1 },
    ],
  },
  {
    username: "Alina Lambert",
    image: "/media/alina.png",
    text: "I just finished implementing the payment gateway. Everything looks good on my end. The team did an excellent job with the backend integration. I'm excited to see it in action!",
    hour: "11:45 AM",
    status: "online",
    reactions: [
      { emoji: "💻", count: 2 },
      { emoji: "👏", count: 1 },
      { emoji: "🔧", count: 3 },
    ],
  },
  {
    username: "Ayla Gregowski",
    image: "/media/ayla.png",
    text: "What's the plan for the final testing and deployment? I suggest we run a comprehensive test suite to catch any potential issues before the launch.",
    hour: "13:20 PM",
    status: "offline",
    reactions: [
      { emoji: "🤔", count: 1 },
      { emoji: "🚀", count: 4 },
    ],
  },
  {
    username: "Celine Parr",
    image: "/media/celine.png",
    text: "Just ran a security scan. No vulnerabilities found. We're good to go! Security is our top priority, and it's great to see that everything checks out.",
    hour: "14:50 PM",
    status: "online",
    reactions: [
      { emoji: "🔒", count: 3 },
      { emoji: "💪", count: 2 },
      { emoji: "👍", count: 1 },
    ],
  },
  {
    username: "Dave Schneider",
    image: "/media/dave.png",
    text: "Nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat. Ut aliquam purus sit amet luctus venenatis. Proin bibendum elit id velit malesuada, in feugiat orci scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    hour: "14:14 PM",
    status: "online",
    reactions: [],
  },
  {
    username: "Jakob Frater",
    image: "/media/jakob.png",
    text: "Code review complete. All merge requests merged. Ready for deployment! I've also created a rollback plan just in case anything goes south. Let's hope we won't need it!",
    hour: "15:30 PM",
    status: "offline",
    reactions: [
      { emoji: "👾", count: 2 },
      { emoji: "😃", count: 1 },
      { emoji: "🚀", count: 3 },
      { emoji: "👍", count: 2 },
      { emoji: "💬", count: 4 },
    ],
  },
  {
    username: "Enes Tufekci",
    image: "/media/enes.png",
    text: "Great job, team! Let's schedule the deployment for tomorrow at 2 PM. Any objections?",
    hour: "15:35 PM",
    status: "online",
    reactions: [
      { emoji: "👍", count: 2 },
      { emoji: "😄", count: 3 },
      { emoji: "🕒", count: 1 },
      { emoji: "😎", count: 2 },
      { emoji: "💖", count: 5 },
    ],
  },
  {
    username: "Alina Lambert",
    image: "/media/alina.png",
    text: "No objections here! Let's make sure the client is informed. Communication is key, especially during crucial phases like deployment.",
    hour: "16:00 PM",
    status: "online",
    reactions: [
      { emoji: "💼", count: 2 },
      { emoji: "🎉", count: 1 },
      { emoji: "💬", count: 3 },
      { emoji: "😊", count: 4 },
    ],
  },
  {
    username: "Ayla Gregowski",
    image: "/media/ayla.png",
    text: "Sounds like a plan! What time should we update the client? I suggest we do it in a way that minimizes disruption for them.",
    hour: "16:15 PM",
    status: "offline",
    reactions: [
      { emoji: "🤷‍♀️", count: 2 },
      { emoji: "⌚", count: 1 },
      { emoji: "👀", count: 3 },
    ],
  },
  {
    username: "Celine Parr",
    image: "/media/celine.png",
    text: "Let's aim for a client update at 3:30 PM. That gives us some buffer for unexpected issues. I'll draft a concise and informative message for them.",
    hour: "16:30 PM",
    status: "online",
    reactions: [
      { emoji: "🕗", count: 2 },
      { emoji: "👌", count: 3 },
      { emoji: "🍕", count: 1 },
    ],
  },
];

const Message = (props: { message: (typeof messages)[number] }) => {
  const { message } = props;
  return (
    <div>
      <div className="flex gap-2 items-start">
        <Image
          className="rounded-md size-[36px]"
          alt="enes"
          src={message.image}
          width={36}
          height={36}
        />
        <div className="translate-y-[-6px]">
          <div className="flex gap-4 items-end">
            <span className="font-bold">{message.username}</span>
            <span className="text-xs font-light opacity-60 translate-y-[-3px]">
              {message.hour}
            </span>
          </div>
          <div>{message.text}</div>
          <div className="flex gap-1">
            {message.reactions.map((reaction, index) => (
              <div
                key={index}
                className="flex items-center gap-1 px-2 py-0 rounded-xl bg-white/10"
              >
                <span>{reaction.emoji}</span>
                {reaction.count <= 1 ? null : (
                  <span className="text-xs font-light opacity-60">
                    {reaction.count}
                  </span>
                )}
              </div>
            ))}
            <button className="opacity-60 hover:opacity-100 px-2 py-0 rounded-xl bg-white/10">
              <TbMoodPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Messages = () => {
  return (
    <div className="flex flex-col gap-8 justify-end">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
};

export const Content = () => {
  return (
    <div className="flex flex-col h-full justify-end">
      <div className="h-full overflow-scroll no-scrollbar px-4">
        <Messages />
        <div className="h-4"></div>
      </div>
      <Editor />
    </div>
  );
};
