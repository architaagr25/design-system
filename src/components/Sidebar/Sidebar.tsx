import { useState } from "react";

interface SidebarProps {
  items: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`h-screen p-4 bg-white dark:bg-neutral-900 text-black dark:text-white ${
        collapsed ? "w-16" : "w-64"
      }`}
      role="navigation"
    >
      <button
        className="text-sm mb-4 text-primary bg-white dark:bg-neutral-900  dark:text-white"
        onClick={() => setCollapsed(!collapsed)}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? "☰" : "Collapse"}
      </button>
      <ul className="space-y-2">
        {items.map((label, index) => (
          <li
            key={index}
            tabIndex={0}
            className="hover:text-primary focus:outline-none bg-white dark:bg-neutral-900 text-black dark:text-white"
            aria-current={index === 0 ? "page" : undefined}
          >
            {collapsed ? label[0] : label}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
