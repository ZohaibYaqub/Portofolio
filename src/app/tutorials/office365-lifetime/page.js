'use client'
import React from 'react'
import Image from 'next/image'
import footer from '@/app/components/footer'

const Office365Lifetime = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8 font-Poppins">
        <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">How to Install Office 365 with Lifetime License</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 dark:bg-slate-800">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">Requirements</h2>
            <div className="space-y-6 dark:text-slate-300">
              <div className="border-l-4 border-green-500 pl-4">
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Windows 10/11 PC</li>
                  <li>Internet connection</li>
                  <li>Office 365 installer</li>
                  <li>Activation script</li>
                  <li>Administrator access</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6 dark:text-slate-300">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-xl mb-2">Step 1: Download & Install Office</h3>
              <ol className="list-decimal list-inside ml-4 mt-2">
                <li>Download Office deployment tool</li>
                <li>Create configuration file</li>
                <li>Run deployment tool</li>
                <li>Wait for installation to complete</li>
                <li>DO NOT sign in when prompted</li>
              </ol>
            </div>
            <div className="mt-4 space-y-2">
                <a 
                  href="/downloads/OfficeSetup.exe" 
                  download
                  className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors inline-block mr-2"
                >
                  Download Office365 Setup
                </a>
                
              </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-xl mb-2">Step 2: Activation Process</h3>
              <ol className="list-decimal list-inside ml-4 mt-2">
                <li>Disable Windows Defender</li>
                <li>Download activation script</li>
                <li>Run as administrator</li>
                <li>Select activation option</li>
                <li>Wait for completion</li>
                <li>Restart PC</li>
              </ol>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-semibold text-xl mb-2">Step 3: Verification</h3>
              <ol className="list-decimal list-inside ml-4 mt-2">
                <li>Open any Office app</li>
                <li>Go to Account settings</li>
                <li>Check activation status</li>
                <li>Verify all features are working</li>
              </ol>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 p-4 rounded-lg dark:bg-slate-700">
            <h3 className="text-xl font-semibold mb-2 text-yellow-800 dark:text-yellow-400">Important Notes:</h3>
            <ul className="list-disc list-inside space-y-2 text-yellow-700 dark:text-yellow-300">
              <li>Keep the activation script for future use</li>
              <li>Don't update Office after activation</li>
              <li>Disable automatic updates</li>
              <li>Create system restore point before starting</li>
              <li>Some features might require internet connection</li>
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

export default Office365Lifetime 