import React from 'react'
import Link from 'next/link'
import { BsTwitter } from 'react-icons/bs';
import { GrSnapchat } from 'react-icons/gr';
import { IoLogoWhatsapp } from 'react-icons/io';
import { BsGithub } from 'react-icons/bs';
import footer from '../components/footer';
import Image from 'next/image'


const contact = () => {
  return (
    <>
      <div className="flex justify-center items-center my-14 font-Poppins  ">
        <div className="shadow-2xl max-w-screen-lg flex justify-center items-center flex-col py-16 w-full dark:bg-gray-800 rounded-xl">
          <h2 className='py-6 md:text-4xl '>Feel Free To Contact Me!</h2>
          <Image src="/pic.png" alt="mypic" width={130} height={130} className='rounded-full'/>

          <span className='flex cursor-pointer my-6 '>

            <Link href="https://github.com/ZohaibYaqub" target='_blank'><i className=' text-purple-800 px-4 text-3xl dark:text-white'>{BsGithub()}</i></Link>



            <Link href="https://twitter.com/zohaibyaqub" target='_blank'><i className='px-4 text-3xl text-purple-800 dark:text-white '>{BsTwitter()}</i></Link>



            <Link href="https://www.snapchat.com/add/zohaib-yaqub?share_id=JHufM2Hl6_E&locale=en-PK" target='_blank'><i className='px-4  text-3xl text-purple-800 dark:text-white '>{GrSnapchat()}</i></Link>



            <Link href="https://wa.me/qr/J5PPENYRPZJKC1" target='_blank'><i className='px-4 text-3xl text-purple-800 dark:text-white '>{IoLogoWhatsapp()}</i></Link>


          </span>
        </div>
      </div>
      {footer()}
    </>
  )
}

export default contact