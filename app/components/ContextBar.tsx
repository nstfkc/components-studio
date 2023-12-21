import { PropsWithChildren } from "react";
import {
  TbHome2,
  TbUsersGroup,
  TbChartBar,
  TbSettings2,
  TbInbox,
  TbChecklist,
  TbMap,
} from "react-icons/tb";

const Wrapper = (props: PropsWithChildren) => {
  return (
    <button className="size-12 flex justify-center items-center text-3xl text-white opacity-40">
      {props.children}
    </button>
  );
};

export const ContextBar = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-4">
        <Wrapper>
          <TbHome2 className="stroke-[1px]" />
        </Wrapper>
        <Wrapper>
          <TbInbox className="stroke-[1px]" />
        </Wrapper>
        <Wrapper>
          <TbChecklist className="stroke-[1px]" />
        </Wrapper>
        <Wrapper>
          <TbChartBar className="stroke-[1px]" />
        </Wrapper>
        <Wrapper>
          <TbUsersGroup className="stroke-[1px]" />
        </Wrapper>
        <Wrapper>
          <TbMap className="stroke-[1px]" />
        </Wrapper>
      </div>
      <Wrapper>
        <TbSettings2 className="stroke-[1px]" />
      </Wrapper>
    </div>
  );
};
