import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <>
      <section className="text-gray-600 body-font cursor-pointer font-Poppins  ">
        <div className="container px-5 py-1 mx-auto   ">
          
          <h2 className='flex justify-center items-center my-10 text-black dark:text-white'>Our Courses</h2>
          <div className="flex flex-wrap -m-4 ">
            <div className="p-4 md:w-1/3 ">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-md dark:bg-slate-800">
                <Image className="lg:h-48 md:h-36 sm:max-h-60 w-full object-cover object-center" src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80" alt="blog" width={384} height={216} />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">FREE COURSE</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 dark:text-white">Web Development</h1>
                  <p className="leading-relaxed mb-3 dark:text-gray-400">Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). A front-end dev takes care of layout, design, and interactivity using HTML, CSS, and JavaScript. They take an idea from the drawing board and turn it into reality.</p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 dark:text-sky-500">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-md dark:bg-slate-800">
                <Image className="lg:h-48 md:h-36 sm:h-1/2 w-full object-cover object-center" src="https://superiorcodelabs.com/wp-content/uploads/2023/08/The-Power-and-Potential-of-App-Development-2023-1170x729.png" alt="blog" width={384} height={216} />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">FREE COURSE</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 dark:text-white">Mobile App Development</h1>
                  <p className="leading-relaxed mb-3 dark:text-gray-400">Mobile app development is the act or process by which a mobile app is developed for one or more mobile devices, which can include personal digital assistants, enterprise digital assistants, or mobile phones. Operating systems like Windows and MacOS or on mobile platforms like iOS and Android.</p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 dark:text-sky-500">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-md dark:bg-slate-800">
                <Image className="lg:h-48 md:h-36 sm:h-1/2 w-full object-cover object-center  " src="https://www.xpand-it.com/wp-content/uploads/2022/08/Artificial-intelligence_blog.png" alt="blog" width={384} height={216} />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">FREE COURSE</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 dark:text-white">Artificial Intelligence (AI)</h1>
                  <p className="leading-relaxed mb-3 dark:text-gray-400">Artificial intelligence (AI) is the intelligence of machines or software, as opposed to the intelligence of humans or animals. It is also the field of study in computer science that develops and studies intelligent machines. &quot;AI&quot; may also refer to the machines themselves.</p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 dark:text-sky-500">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page;
