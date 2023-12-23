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

const Wrapper = (props: PropsWithChildren<{ isActive?: boolean }>) => {
  const { children, isActive } = props;
  const activeClass = isActive ? "opacity-60" : "opacity-40";
  return (
    <button
      className={[
        "size-12 flex justify-center items-center text-2xl",
        activeClass,
      ].join(" ")}
    >
      {children}
    </button>
  );
};

export const ContextBar = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-4">
        <Wrapper isActive={true}>
          <TbHome2 className="stroke-[2px]" />
        </Wrapper>
        <Wrapper>
          <TbInbox className="stroke-[2px]" />
        </Wrapper>
        <Wrapper>
          <TbChecklist className="stroke-[2px]" />
        </Wrapper>
        <Wrapper>
          <TbChartBar className="stroke-[2px]" />
        </Wrapper>
        <Wrapper>
          <TbUsersGroup className="stroke-[2px]" />
        </Wrapper>
        <Wrapper>
          <TbMap className="stroke-[2px]" />
        </Wrapper>
      </div>
      <Wrapper>
        <TbSettings2 className="stroke-[2px]" />
      </Wrapper>
    </div>
  );
};
