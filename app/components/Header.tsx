import { TbSearch, TbCommand, TbLetterK, TbPlus } from "react-icons/tb";

export const Header = () => {
  return (
    <div className="p-2 flex justify-end items-center gap-2 h-full">
      <button className="flex items-center gap-2 bg-white/10 rounded-md px-1 py-1 opacity-70 hover:opacity-100">
        <div className="h-full flex gap-1 items-center">
          <TbSearch className="text-white opacity-40" />
          <div className="text-sm tracking-wide opacity-40">Search</div>
        </div>
        <div className="flex bg-white/20 shadow-md p-[4px] text-sm rounded-md border border-white/10">
          <TbCommand />
          <TbPlus />
          <TbLetterK />
        </div>
      </button>
      <div className="col-span-2 flex justify-end">
        <div className="size-8 bg-white/30 rounded-md"></div>
      </div>
    </div>
  );
};
