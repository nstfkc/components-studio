"use client";

import Image from "next/image";

import * as Accordion from "@radix-ui/react-accordion";
import { PropsWithChildren } from "react";
import {
  TbCaretDown,
  TbPlus,
  TbInbox,
  TbAlarm,
  TbBell,
  TbEdit,
  TbFiles,
  TbDots,
  TbHash,
} from "react-icons/tb";

interface SectionProps {
  title: string;
  value: string;
}

const Section = (props: PropsWithChildren<SectionProps>) => {
  return (
    <Accordion.Item value={props.value}>
      <Accordion.Trigger asChild>
        <div className="px-1 group cursor-pointer flex w-full justify-between items-center opacity-60 hover:opacity-100">
          <div className="flex gap-1 items-center">
            <div className="px-1">
              <TbCaretDown className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </div>
            <span className="text-sm tracking-wide">{props.title}</span>
          </div>
          <div>
            <button
              className="group-hover:opacity-100 bg-white/10 opacity-0 rounded-md p-1"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <TbPlus />
            </button>
          </div>
        </div>
      </Accordion.Trigger>
      <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
        {props.children}
      </Accordion.Content>
    </Accordion.Item>
  );
};

const External = () => {
  return (
    <Section title="External" value="external">
      <div>General</div>
    </Section>
  );
};

const channels = [
  { name: "General", id: 1, unread: 9 },
  {
    name: "Random",
    id: 2,
    unread: 4,
  },
  {
    name: "Announcements",
    id: 3,
    unread: 6,
  },
  {
    name: "Marketing",
    id: 4,
    unread: 0,
  },
  {
    name: "Engineering",
    id: 5,
    unread: 0,
  },
  {
    name: "Design",
    id: 6,
    unread: 4,
  },
  {
    name: "Product",
    id: 7,
    unread: "9+",
  },
];

const Channels = () => {
  return (
    <Section title="Channels" value="channels">
      <div className="py-1 flex flex-col gap-2">
        {channels.map((channel) => (
          <div
            key={channel.id}
            className={[
              "flex px-1 items-center gap-1 rounded-md cursor-pointer",
              channel.unread === 0 ? "opacity-60" : "",
            ].join(" ")}
          >
            <div className="px-1">
              <TbHash className="opacity-60" />
            </div>
            <div className="flex items-center justify-between w-full">
              <div className="flex-1">{channel.name}</div>
              {channel.unread === 0 ? null : (
                <div className="text-xs w-6 rounded-md bg-white/10 text-center opacity-60">
                  {channel.unread}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const directMessages = [
  { name: "Enes Tufekci", id: 1, unread: 0, image: "/media/enes.png" },
  { name: "Alina Lambert", id: 2, unread: 2, image: "/media/alina.png" },
  { name: "Ayla Gregowski", id: 3, unread: 0, image: "/media/ayla.png" },
  { name: "Celine Parr", id: 4, unread: 1, image: "/media/celine.png" },
  { name: "DaveSchneider", id: 5, unread: 2, image: "/media/dave.png" },
  { name: "Jakob Frater", id: 6, unread: 0, image: "/media/jakob.png" },
];

const DirectMessages = () => {
  return (
    <Section title="Direct Messages" value="dms">
      <div className="flex flex-col gap-2 py-2">
        {directMessages.map((dm) => (
          <div
            key={dm.id}
            className={[
              "flex px-1 items-center gap-1 rounded-md cursor-pointer",
              dm.unread === 0 ? "opacity-60" : "",
            ].join(" ")}
          >
            <div className="px-[2px]">
              <Image
                width={24}
                height={24}
                src={dm.image}
                alt={dm.name}
                className="rounded-[4px] saturate-[0.5]"
              />
            </div>
            <div className="flex items-center justify-between w-full">
              <div className="flex-1">{dm.name}</div>
              {dm.unread === 0 ? null : (
                <div className="text-xs w-6 rounded-md bg-white/10 text-center opacity-60">
                  {dm.unread}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export const Sidebar = () => {
  return (
    <div className="h-full overflow-scroll no-scrollbar">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1 px-1">
          <div className="px-1">
            <TbInbox />
          </div>
          <span className="text-sm tracking-wide">All unread</span>
        </div>

        <div className="flex items-center gap-1 px-1">
          <div className="px-1">
            <TbBell />
          </div>
          <span className="text-sm tracking-wide">Reminders</span>
        </div>
        <div className="flex items-center gap-1 px-1">
          <div className="px-1">
            <TbEdit />
          </div>
          <span className="text-sm tracking-wide">Drafts</span>
        </div>

        <div className="flex items-center gap-1 px-1">
          <div className="px-1">
            <TbFiles />
          </div>
          <span className="text-sm tracking-wide">Files</span>
        </div>
        <div className="flex items-center gap-1 px-1">
          <div className="px-1">
            <TbDots />
          </div>
          <span className="text-sm tracking-wide">More</span>
        </div>
      </div>
      <div className="h-8"></div>

      <Accordion.Root type="multiple" defaultValue={["channels", "dms"]}>
        <div className="flex flex-col gap-3">
          <External />
          <Channels />
          <DirectMessages />
        </div>
      </Accordion.Root>
    </div>
  );
};
