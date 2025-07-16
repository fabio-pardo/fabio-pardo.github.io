'use client'

import { PipTab } from './pip-boy'

interface TabNavigationProps {
  activeTab: PipTab
  onTabChange: (tab: PipTab) => void
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const tabs: PipTab[] = ['STAT', 'INV', 'DATA', 'MAP', 'RADIO']

  return (
    <div className="flex items-center justify-center border-b-2 border-green-500/30">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`pip-tab ${activeTab === tab ? 'active' : ''}`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
} 