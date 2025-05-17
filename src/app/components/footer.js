import React from 'react'
import { BsTwitter } from 'react-icons/bs';
import { GrSnapchat } from 'react-icons/gr';
import { IoLogoWhatsapp } from 'react-icons/io';
import { BsGithub } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image'
const footer = () => {
    return (
        <>
            <footer className="text-gray-600 body-font font-Poppins  ">
                <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col dark:bg-gray-800 rounded-xl ">
                    <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 py-4">
                        <Image src="/pic.png" alt="mypic" width={50} height={50} className="rounded-full " />
                        <span className="ml-3 text-xl dark:text-white">CodeWithZaibi</span>
                    </div>
                    <div className=" flex text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2  sm:mt-0 mt-4text-base dark:text-slate-400">Copyright © 2025
                        <div href="" className="text-gray-600 ml-1 no-underline px-1 font-medium cursor-none dark:text-slate-400" rel="noopener noreferrer text-base " target="_blank">|   codewithzaibi.com</div>
                    </div>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start cursor-pointer text-xl">
                        <div className="ml-3 text-gray-500 cursor-pointer ">
                            <Link href="https://github.com/ZohaibYaqub" target='_blank'><i className='py-2 h-5 text-xl text-green-600 dark:text-white'>{BsGithub()}</i></Link>

                        </div>
                        <div className="ml-3 text-gray-500 cursor-pointer ">
                            <Link href="https://twitter.com/zohaibyaqub" target='_blank'><i className='py-2 text-green-600 text-xl dark:text-white'>{BsTwitter()}</i></Link>

                        </div>
                        <div className="ml-3 text-gray-500 cursor-pointer">
                            <Link href="https://www.snapchat.com/add/zohaib-yaqub?share_id=JHufM2Hl6_E&locale=en-PK" target='_blank'><i className='py-2  text-xl text-green-600 dark:text-white'>{GrSnapchat()}</i></Link>

                        </div>
                        <div className="ml-3 text-gray-500 cursor-pointer">
                            <Link href="https://wa.me/qr/J5PPENYRPZJKC1" target='_blank'><i className='py-2 text-xl text-green-600 dark:text-white'>{IoLogoWhatsapp()}</i></Link>

                        </div>
                    </span>
                </div>
            </footer>
        </>
    )
}

export default footer