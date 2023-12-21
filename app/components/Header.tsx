export const Header = () => {
  return (
    <div className="p-2 grid grid-cols-8">
      <div className="col-span-2"></div>
      <div className="col-span-4">
        <input className="w-full bg-white/10 p-1 px-2 rounded-lg" />
      </div>
      <div className="col-span-2 flex justify-end">
        <div className="size-8 bg-white/30 rounded-md"></div>
      </div>
    </div>
  );
};
