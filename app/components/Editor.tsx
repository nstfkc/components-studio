import {
  TbBold,
  TbItalic,
  TbStrikethrough,
  TbList,
  TbListNumbers,
  TbDivide,
  TbLink,
  TbBlockquote,
  TbCode,
  TbMinusVertical,
  TbTallymark1,
  TbFileCode2,
  TbSourceCode,
  TbSend,
} from "react-icons/tb";

const format1 = [
  { icon: <TbBold />, title: "Bold" },
  { icon: <TbItalic />, title: "Italic" },
  { icon: <TbStrikethrough />, title: "Strikethrough" },
];

const format2 = [
  { icon: <TbListNumbers />, title: "List Numbers" },
  { icon: <TbList />, title: "List" },
];

const format3 = [{ icon: <TbLink />, title: "Link" }];
const format4 = [
  { icon: <TbCode />, title: "Code" },
  { icon: <TbSourceCode />, title: "Code block" },
];

const EditorActions = () => {
  return (
    <div className="flex bg-white/5 flex-1 justify-between">
      <div className="flex items-center">
        {format1.map((action) => {
          return (
            <button key={action.title} className="py-1 px-2">
              {action.icon}
            </button>
          );
        })}
        <TbMinusVertical className="opacity-30" />
        {format3.map((action) => {
          return (
            <button key={action.title} className="py-1 px-2">
              {action.icon}
            </button>
          );
        })}
        <TbMinusVertical className="opacity-30" />
        {format2.map((action) => {
          return (
            <button key={action.title} className="py-1 px-2">
              {action.icon}
            </button>
          );
        })}

        <TbMinusVertical className="opacity-30" />
        {format4.map((action) => {
          return (
            <button key={action.title} className="py-1 px-2">
              {action.icon}
            </button>
          );
        })}
      </div>
      <div className="flex items-center">
        <button className="py-1 px-2">
          <TbSend />
        </button>
      </div>
    </div>
  );
};

export const Editor = () => {
  return (
    <div className="h-24 flex flex-col justify-end rounded-md bg-white/10 overflow-hidden">
      <textarea
        className="w-full p-2 bg-transparent outline-none resize-none"
        placeholder="Write a message..."
        rows={1}
      ></textarea>
      <EditorActions />
    </div>
  );
};
