import React from 'react'
import footer from '@/app/components/footer'
import Link from 'next/link'

const Tips = () => {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden font-Poppins   ">
        <div className="container px-5 py-36 mx-auto ">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <h1 className='text-4xl text-center dark:text-slate-300'>Tricks </h1>
            <div className="py-8 px-8 flex flex-wrap md:flex-nowrap shadow-md bg-white rounded-2xl my-5 dark:bg-slate-800 dark:text-white ">
              <div className=" sm:text-center md:w-64 md:mb-0 mb-6 flex-shrink-0 flex-col flex text-center justify-center items-center">
                <span className="font-semibold title-font text-gray-700 dark:text-white ">PC USERS</span>
                <span className="mt-1 text-gray-500 text-sm dark:text-white">28/9/2023</span>
              </div>
              <div className="md:flex-grow ">
                <h2 className=" text-gray-900 title-font mb-2 text-3xl font-bold dark:text-white">HOW TO INSTALL IDM LIFETIME  </h2>
                <p className="leading-relaxed my-3 dark:text-white">I can guide you on how to install Internet Download Manager (IDM) for a lifetime.</p>
                <Link className="no-underline dark:text-white" href="/tutorials/idm-setup"><button className="button">Read More</button></Link>
              </div>
            </div>
            <div className="py-8 px-8 flex flex-wrap md:flex-nowrap shadow-md bg-white rounded-2xl my-5 dark:bg-slate-800">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col text-center justify-center">
              <span className="font-semibold title-font text-gray-700 dark:text-white">PC USER / MOBILE</span>
                <span className="mt-1 text-gray-500 text-sm dark:text-white">28/9/2023</span>
              </div>
              <div className="md:flex-grow">
                <h2 className=" text-gray-900 title-font mb-2 text-3xl font-bold dark:text-white">HOW TO REMOVE ADS  WEB / MBLE FOR LIFETIME </h2>
                <p className="leading-relaxed my-3 dark:text-white">I can provide you with steps on how to remove ads from various platforms or devices, but I'll need more specific information about what you're trying to achieve.</p>
                <Link className="no-underline" href="/tutorials/remove-ads"><button className="button">Read More</button></Link>
              </div>
            </div>
            <div className="py-8  px-8 flex flex-wrap md:flex-nowrap shadow-md bg-white rounded-2xl my-5 dark:bg-slate-800">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col text-center justify-center">
              <span className="font-semibold title-font text-gray-700 dark:text-white">MOBILE USER</span>
                <span className="mt-1 text-gray-500 text-sm dark:text-white">28/9/2023</span>
              </div>
              <div className="md:flex-grow">
                <h2 className=" text-gray-900 title-font mb-2  text-3xl font-bold dark:text-white">HOW TO FREE NETFLIX WITHOUT SUBSCRIPTION ON MOBILE</h2>
                <p className="leading-relaxed my-3 dark:text-white">I can Guide you how to free netflix app without subscription package.</p>
                <Link className="no-underline" href="/tutorials/free-netflix"><button className="button">Read More</button></Link>
              </div>
            </div>

            <div className="py-8  px-8 flex flex-wrap md:flex-nowrap shadow-md bg-white rounded-2xl my-5 dark:bg-slate-800">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col text-center justify-center dark:text-white">
              <span className="font-semibold title-font text-gray-700 dark:text-white">PC USERS</span>
                <span className="mt-1 text-gray-500 text-sm dark:text-white">28/9/2023</span>
              </div>
              <div className="md:flex-grow">
                <h2 className=" text-gray-900 title-font mb-2  text-3xl font-bold dark:text-white">HOW TO PLAY STORE INSTALL IN PC & MACBOOK</h2>
                <p className="leading-relaxed my-3 dark:text-white">I can Easily Explained how to play store install in windows.</p>
                <Link className="no-underline" href="/tutorials/playstore-pc"><button className="button">Read More</button></Link>
              </div>
            </div>

            <div className="py-8  px-8 flex flex-wrap md:flex-nowrap shadow-md bg-white rounded-2xl my-5 dark:bg-slate-800">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col text-center justify-center dark:text-white">
              <span className="font-semibold title-font text-gray-700 dark:text-white">PC USERS</span>
                <span className="mt-1 text-gray-500 text-sm dark:text-white">28/9/2023</span>
              </div>
              <div className="md:flex-grow">
                <h2 className=" text-gray-900 title-font mb-2  text-3xl font-bold dark:text-white">HOW TO INSTALL OFFICE 365 LIFETIME PRODUCT KEY WITHOUT PURCHASE </h2>
                <p className="leading-relaxed my-3 dark:text-white">I can certainly help you with that! To use Office 365 for a lifetime, you'll need to Follow My Steps.</p>
                <Link className="no-underline" href="/tutorials/office365-lifetime"><button className="button">Read More</button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {footer()}
    </>
  )
}

export default Tips