'use client'

import DemoContainer from "@/components/DemoContainer";
import { MainForm } from "@/components/MainBody";
import Navbar from "@/components/Navbar";
import React, { createContext, useState } from "react";


export const ActiveTabContext = createContext({tab: localStorage.getItem('activaTab') || 'buy', setTab: (tab: string) => {}})

function BodyWrapper() {
    const [activeTab, setActiveTab] = useState(() => {
        return localStorage.getItem('activeTab') || 'buy';
    })

      return (
        <ActiveTabContext.Provider value={ {tab: activeTab, setTab: setActiveTab} }>
        <Navbar />
        <DemoContainer>
            <MainForm />
        </DemoContainer>
        </ActiveTabContext.Provider>
      )
}

export default BodyWrapper