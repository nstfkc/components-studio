import { Header } from "./components/Header";
import { ContextBar } from "./components/ContextBar";
import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Content";

const AppShell = () => {
  return (
    <div className="h-dvh w-screen text-primary p-2">
      <div className="h-full flex flex-col">
        <div className="h-[48px]">
          <Header />
        </div>
        <div className="flex h-[calc(100%-48px)] gap-2">
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
  );
};

export default function Home() {
  return (
    <main>
      <AppShell />
    </main>
  );
}
