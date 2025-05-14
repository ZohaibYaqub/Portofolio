'use client'
import React from 'react'
import Image from 'next/image'
import footer from '@/app/components/footer'

const FreeNetflix = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8 font-Poppins">
        <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">How to Get Free Netflix on Mobile</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 dark:bg-slate-800">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">Method 1: Modified Netflix App</h2>
          <div className="space-y-6 dark:text-slate-300">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-xl mb-2">Requirements:</h3>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>Android Device</li>
                <li>Modified Netflix APK file</li>
                <li>VPN App (Optional but recommended)</li>
              </ul>
            </div>
            <div className="mt-4 space-y-2">
                <a 
                  href="https://netfree2.cc/home" 
                  download
                  className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors inline-block mr-2"
                >
                  NetMirror For Pc
                </a>
                
              </div>
              <div className="mt-4 space-y-2">
                <a 
                  href="https://netmirrorapk.com/#download-net-mirror-apk" 
                  download
                  className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors inline-block mr-2"
                >
                  NetMirror For Mobile
                </a>
                
              </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-xl mb-2">Installation Steps:</h3>
              <ol className="list-decimal list-inside ml-4 mt-2">
                <li>Uninstall official Netflix app if installed</li>
                <li>Download the modified Netflix APK</li>
                <li>Enable "Install from Unknown Sources" in settings</li>
                <li>Install the modified APK</li>
                <li>Install and connect to VPN (recommended)</li>
                <li>Open the modified Netflix app</li>
                <li>Create account or login with test credentials</li>
              </ol>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4 mt-8 dark:text-white">Method 2: Netflix Mod Website</h2>
          <div className="space-y-6 dark:text-slate-300">
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-xl mb-2">Requirements:</h3>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>Mobile browser (Chrome/Firefox)</li>
                <li>VPN App</li>
              </ul>
            </div>
         
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-semibold text-xl mb-2">Steps to Follow:</h3>
              <ol className="list-decimal list-inside ml-4 mt-2">
                <li>Install and connect VPN</li>
                <li>Clear browser cache and cookies</li>
                <li>Visit the mod website (link below)</li>
                <li>Create new account</li>
                <li>Start streaming</li>
              </ol>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 p-4 rounded-lg dark:bg-slate-700">
            <h3 className="text-xl font-semibold mb-2 text-yellow-800 dark:text-yellow-400">Important Warnings:</h3>
            <ul className="list-disc list-inside space-y-2 text-yellow-700 dark:text-yellow-300">
              <li>Using modified apps may violate Netflix's terms of service</li>
              <li>Always use VPN for safety</li>
              <li>Don't enter real Netflix credentials in modified apps</li>
              <li>Some features might not work in modified versions</li>
              <li>Consider supporting content creators by getting a real subscription</li>
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

export default FreeNetflix 