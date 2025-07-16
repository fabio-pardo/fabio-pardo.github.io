'use client'

import { useState } from 'react'
import Image from 'next/image'
import { TabNavigation } from './tab-navigation'
import { StatTab } from './tabs/stat-tab'
import { InventoryTab } from './tabs/inventory-tab'
import { DataTab } from './tabs/data-tab'
import { MapTab } from './tabs/map-tab'
import { RadioTab } from './tabs/radio-tab'
import { Clock } from './clock'

export type PipTab = 'STAT' | 'INV' | 'DATA' | 'MAP' | 'RADIO'

export function PipBoy() {
  const [activeTab, setActiveTab] = useState<PipTab>('STAT')

  const renderTabContent = () => {
    switch (activeTab) {
      case 'STAT':
        return <StatTab />
      case 'INV':
        return <InventoryTab />
      case 'DATA':
        return <DataTab />
      case 'MAP':
        return <MapTab />
      case 'RADIO':
        return <RadioTab />
      default:
        return <StatTab />
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black p-4">
      <div className="pip-frame w-full max-w-6xl h-[90vh] p-8">
        {/* Pip-Boy Screen */}
        <div className="pip-screen crt-effect w-full h-full rounded-lg p-6 flex flex-col">
          {/* Header with Navigation */}
          <div className="flex flex-col mb-6">
            <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
            
            {/* Status Bar */}
            <div className="flex items-center justify-between mt-4 text-xs terminal-text">
              <div className="flex items-center gap-4">
                <span>STATUS</span>
                <span className="text-amber-500">LEVEL 10</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span>HP</span>
                  <div className="stat-bar w-24">
                    <div className="stat-bar-fill" style={{ width: '90%' }} />
                  </div>
                  <span>90/100</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>AP</span>
                  <div className="stat-bar w-24">
                    <div className="stat-bar-fill" style={{ width: '75%' }} />
                  </div>
                  <span>75/100</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-hidden">
            {renderTabContent()}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-4 text-xs terminal-text opacity-60">
            <div className="flex items-center gap-2">
              <Image
                src="/pipboy_walking.gif"
                alt="Vault Boy Walking"
                width={30}
                height={30}
                className="opacity-80"
                unoptimized
              />
              <span>PIP-BOY 3000 MK IV</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="blink">◉ REC</span>
              <Clock />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 