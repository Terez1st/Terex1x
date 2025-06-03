'use client'

import DemoContainer from "@/components/DemoContainer";
import { MainForm } from "@/components/MainBody";
import Navbar from "@/components/Navbar";
import React, { createContext, useEffect, useState } from "react";

type ActiveTabType = {
  tab: string;
  setTab: (tab: string) => void;
};

// 1. Default safe value for SSR (localStorage lama isticmaalin halkan)
export const ActiveTabContext = createContext<ActiveTabType>({
  tab: 'buy',
  setTab: () => {},
});

function BodyWrapper() {
  const [activeTab, setActiveTab] = useState('buy');

  // 2. Isticmaal localStorage marka browser diyaar yahay
  useEffect(() => {
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab) {
      setActiveTab(savedTab);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('activeTab', activeTab);
  }, [activeTab]);

  return (
    <ActiveTabContext.Provider value={{ tab: activeTab, setTab: setActiveTab }}>
      <Navbar />
      <DemoContainer>
        <MainForm />
      </DemoContainer>
    </ActiveTabContext.Provider>
  );
}

export default BodyWrapper;
