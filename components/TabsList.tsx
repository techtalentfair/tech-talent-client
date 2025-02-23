import React from "react";

type TabsListProps = {
  tabs: string[];
  selectedIndex: number;
  handleTabClick: (index: number) => void;
  className?: string;
};

export default function TabsList({ tabs, selectedIndex, handleTabClick, className }: TabsListProps) {
  return (
    <div
      className={`transition-all duration-75 ease-in-out flex md:space-x-4 border-[1px] border-[#3E3E3E] p-2 md:p-2 rounded-full ${className || ''}`}
    >
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`transition-all duration-75 ease-in-out md:px-4 md:py-2 sm:px-2 sm:py-1 px-1 pt-0.5 pb-0.5 rounded-full focus:outline-none hover:bg-[#A03EE9] hover:text-white font-semibold italic  ${
            index === selectedIndex ? "bg-[#A03EE9] text-white" : "text-[#999]"
          }`}
          onClick={() => handleTabClick(index)}
        >
          <span className="text-xs sm:text-base md:text-lg">{tab}</span>
        </button>
      ))}
    </div>
  );
}
