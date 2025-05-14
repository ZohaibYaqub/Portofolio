'use client'
import React from 'react'
import Image from 'next/image'
import footer from '@/app/components/footer'

const IdmSetup = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8 font-Poppins">
        <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">How to Install IDM Lifetime</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 dark:bg-slate-800">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">Requirements:</h2>
          <ul className="list-disc list-inside mb-6 space-y-2 dark:text-slate-300">
            <li>Windows PC (Windows 7/8/10/11)</li>
            <li>Internet Connection</li>
            <li>IDM Installation File</li>
            <li>IDM Patch/Crack File</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 dark:text-white">Installation Steps:</h2>
          <div className="space-y-6 dark:text-slate-300">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-xl mb-2">Step 1: Download Required Files</h3>
              <p>First, download the official IDM installer from the Internet Download Manager website and our patch file.</p>
              <div className="mt-4 space-y-2">
                <a 
                  href="/downloads/IdmLifetime.rar" 
                  download
                  className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors inline-block mr-2"
                >
                  Download IDM Setup
                </a>
                
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-xl mb-2">Step 2: Install IDM</h3>
              <p>Run the IDM installer and follow these steps:</p>
              <ol className="list-decimal list-inside ml-4 mt-2">
                <li>Double click the IDM installer</li>
                <li>Click "Next" on all prompts</li>
                <li>Choose "Install" when ready</li>
                <li>DO NOT launch IDM after installation</li>
              </ol>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-xl mb-2">Step 3: Apply Patch</h3>
              <p>Now we'll apply the patch to activate IDM:</p>
              <ol className="list-decimal list-inside ml-4 mt-2">
                <li>Right-click the patch file and "Run as Administrator"</li>
                <li>Click "Patch" button</li>
                <li>Wait for "Successfully Patched" message</li>
                <li>Restart your PC</li>
              </ol>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-semibold text-xl mb-2">Step 4: Verify Installation</h3>
              <p>After restart, open IDM and verify:</p>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>IDM should show "Registered" status</li>
                <li>No trial period messages should appear</li>
                <li>All features should be accessible</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 p-4 rounded-lg dark:bg-slate-700">
            <h3 className="text-xl font-semibold mb-2 text-yellow-800 dark:text-yellow-400">Important Notes:</h3>
            <ul className="list-disc list-inside space-y-2 text-yellow-700 dark:text-yellow-300">
              <li>Keep the patch file for future use</li>
              <li>Disable Windows Defender before applying patch</li>
              <li>Don't update IDM after patching</li>
            </ul>
          </div>
        </div>
      </div>
      {footer()}
    </>
  )
}

export default IdmSetup 