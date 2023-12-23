export const Sidebar = () => {
  return (
    <div className="max-h-full">
      <div className="border border-white/10 rounded-md p-2 bg-white bg-opacity-[0.02]">
        <div className="opacity-70 font-bold tracking-wider h-[600px]">
          Channels
        </div>
      </div>
      <div className="h-2"></div>
      <div className="border border-white/10 rounded-md p-2 bg-white bg-opacity-[0.02]">
        <div className="opacity-70 font-bold tracking-wider h-[200px]">
          Direct Messages
        </div>
      </div>
    </div>
  );
};
