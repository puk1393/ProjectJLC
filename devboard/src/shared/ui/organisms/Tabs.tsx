import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

interface TabsProps {
  children: ReactNode;
}

interface TabProps {
  href: string;
  children: ReactNode;
}

interface PanelProps {
  children: ReactNode;
}

function Tabs({ children }: TabsProps) {
  return <div>{children}</div>;
}

function TabList({ children }: { children: ReactNode }) {
  return <div className="tabs-list">{children}</div>;
}

function Tab({ href, children }: TabProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={isActive ? "tab-active" : "tab-button"}
    >
      {children}
    </Link>
  );
}

function TabPanels({ children }: PanelProps) {
  return <div>{children}</div>;
}

function TabPanel({ children }: PanelProps) {
  return <div>{children}</div>;
}

Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panels = TabPanels;
Tabs.Panel = TabPanel;

export default Tabs;