import clsx from "clsx";
import style from "./TabList.module.css";

const TabList = ({ tabs, activeTab, onTabChange = () => {} }) => {
  const createTabStyle = (tab) => {
    return clsx(style.tab, tab === activeTab && style.tabActive);
  };
  return (
    <div className={style.tabsContainer}>
      <div className={style.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={createTabStyle(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabList;
