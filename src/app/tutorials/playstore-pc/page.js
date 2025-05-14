'use client'
import React from 'react'
import Image from 'next/image'
import footer from '@/app/components/footer'

const PlayStorePC = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8 font-Poppins">
        <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">How to Install Play Store on PC & MacBook</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 dark:bg-slate-800">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">Method 1: Using BlueStacks</h2>
          <div className="space-y-6 dark:text-slate-300">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-xl mb-2">Requirements:</h3>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>Windows 7/8/10/11 or MacOS 10.12 or later</li>
                <li>4GB RAM minimum (8GB recommended)</li>
                <li>5GB free disk space</li>
                <li>Admin access</li>
              </ul>
            </div>
            <div className="mt-4 space-y-2">
                <a 
                  href="/downloads/Playstore.zip" 
                  download
                  className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors inline-block mr-2"
                >
                  Download PlayStorePC Setup
                </a>
                
              </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-xl mb-2">Installation Steps:</h3>
              <ol className="list-decimal list-inside ml-4 mt-2">
                <li>Download BlueStacks installer</li>
                <li>Run the installer as administrator</li>
                <li>Follow installation wizard</li>
                <li>Launch BlueStacks</li>
                <li>Sign in with Google Account</li>
                <li>Access Play Store from home screen</li>
              </ol>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4 mt-8 dark:text-white">Method 2: Using Android Studio</h2>
          <div className="space-y-6 dark:text-slate-300">
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-xl mb-2">Requirements:</h3>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>Windows/MacOS/Linux</li>
                <li>8GB RAM minimum</li>
                <li>10GB free disk space</li>
                <li>Java Development Kit (JDK)</li>
              </ul>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-semibold text-xl mb-2">Steps to Follow:</h3>
              <ol className="list-decimal list-inside ml-4 mt-2">
                <li>Download & install Android Studio</li>
                <li>Create new Android Virtual Device (AVD)</li>
                <li>Select a device definition</li>
                <li>Download system image</li>
                <li>Launch emulator</li>
                <li>Sign in and use Play Store</li>
              </ol>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 p-4 rounded-lg dark:bg-slate-700">
            <h3 className="text-xl font-semibold mb-2 text-yellow-800 dark:text-yellow-400">Troubleshooting Tips:</h3>
            <ul className="list-disc list-inside space-y-2 text-yellow-700 dark:text-yellow-300">
              <li>Enable virtualization in BIOS if required</li>
              <li>Update graphics drivers</li>
              <li>Disable antivirus temporarily during installation</li>
              <li>Check system requirements before installation</li>
            </ul>
          </div>

          <div className="mt-8">
            
          </div>
        </div>
      </div>
      {footer()}
    </>
  )
}

export default PlayStorePC 