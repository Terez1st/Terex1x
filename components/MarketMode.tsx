"use client"

import React, { createContext, useContext, useEffect } from 'react'
import { Button } from './ui/button'
import { useState } from 'react'
import { ActiveTabContext } from '@/components/BodyWrapper'


function MarketMode() {
    const {tab, setTab} = useContext(ActiveTabContext)

    useEffect(() => {
        localStorage.setItem('activeTab', tab)
    }, [tab])

    return (
        <div className='space-x-4 mx-3 grid grid-cols-2 gap-3 sm:mx-16'>
            <Button
                type='reset'
                className={`w-full sm:px-3 h-8 ${tab === 'buy' ? 'bg-blue-600 hover:bg-blue-800' : ''} shadow-2xl`}
                onClick={() => setTab('buy')}>
                BUY
            </Button>

            <Button
                type='reset'
                className={`w-full sm:px-3 h-8 ${tab === 'sell' ? 'bg-blue-600 hover:bg-blue-800' : ''} shadow-2xl`}
                onClick={() => setTab('sell')}>
                SELL
            </Button>
        </div>
    )
}
export default MarketMode;