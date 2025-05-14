'use client'
import React from 'react'
import Image from 'next/image'
import footer from '@/app/components/footer'

const RemoveAds = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8 font-Poppins">
        <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">How to Remove Ads (Web/Mobile) for Lifetime</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 dark:bg-slate-800">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">Browser Ad Blocking</h2>
            <div className="space-y-6 dark:text-slate-300">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-xl mb-2">Method 1: uBlock Origin (Recommended)</h3>
                <ol className="list-decimal list-inside ml-4 mt-2">
                  <li>Open your browser (Chrome, Firefox, Edge)</li>
                  <li>Go to browser's extension store</li>
                  <li>Search for "uBlock Origin"</li>
                  <li>Click "Add to Browser" or "Install"</li>
                  <li>Restart your browser</li>
                </ol>
                <div className="mt-4 space-y-2">
                <a 
                  href="https://play.google.com/store/search?q=adguard&c=apps&hl=en" 
                  download
                  className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors inline-block mr-2"
                >
                  AdGuard For Mobile
                </a>
                <a 
                  href="https://adguard.com/en/adguard-browser-extension/overview.html" 
                  download
                  className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors inline-block mr-2"
                >
                  AdGuard For Pc
                </a>
                
              </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">Mobile Ad Blocking</h2>
            <div className="space-y-6 dark:text-slate-300">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-xl mb-2">Android Method</h3>
                <p>Install Brave Browser or DNS-level ad blocking:</p>
                <ol className="list-decimal list-inside ml-4 mt-2">
                  <li>Download Brave Browser from Play Store</li>
                  <li>Enable shields in Brave settings</li>
                  <li>Or use DNS-level blocking with AdGuard DNS</li>
                </ol>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-xl mb-2">iOS Method</h3>
                <p>Use Safari content blockers:</p>
                <ol className="list-decimal list-inside ml-4 mt-2">
                  <li>Go to App Store</li>
                  <li>Search for "AdGuard"</li>
                  <li>Install and enable in Safari settings</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">System-wide Ad Blocking</h2>
            <div className="space-y-6 dark:text-slate-300">
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold text-xl mb-2">Pi-hole Method (Advanced)</h3>
                <p>Network-wide ad blocking for all devices:</p>
                <ol className="list-decimal list-inside ml-4 mt-2">
                  <li>Set up a Raspberry Pi</li>
                  <li>Install Pi-hole</li>
                  <li>Configure router to use Pi-hole as DNS</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 p-4 rounded-lg dark:bg-slate-700">
            <h3 className="text-xl font-semibold mb-2 text-yellow-800 dark:text-yellow-400">Important Notes:</h3>
            <ul className="list-disc list-inside space-y-2 text-yellow-700 dark:text-yellow-300">
              <li>Some websites may detect ad blockers</li>
              <li>Consider whitelisting sites you want to support</li>
              <li>Keep your ad blockers updated</li>
              <li>Some methods may require technical knowledge</li>
            </ul>
          </div>
        </div>
      </div>
      {footer()}
    </>
  )
}

export default RemoveAds 