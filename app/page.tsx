import { PropsWithChildren } from "react";
import { Header } from "./components/Header";
import { ContextBar } from "./components/ContextBar";
import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Content";
import { Rightbar } from "./components/Rightbar";

const AppShell = () => {
  return (
    <div className="h-dvh w-screen bg-secondary text-primary p-1">
      <div className="border-[1px] border-white/10 h-full rounded-md">
        <div className="h-full flex flex-col">
          <div>
            <Header />
          </div>
          <div className="flex gap-2 h-full p-2">
            <div className="">
              <ContextBar />
            </div>
            <div className="w-[240px]">
              <Sidebar />
            </div>
            <div className="flex-1">
              <Content />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main>
      <AppShell />
    </main>
  );
}
