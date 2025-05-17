import React from 'react'
import footer from '@/app/components/footer'
import Image from 'next/image'

const page = () => {
  return (
    <>
      <section className="text-gray-600 body-font cursor-pointer font-Poppins my-14 ">

        <div className="container px-5 p-8 mx-auto">
          <h2 className='flex justify-center items-center my-10 text-black dark:text-white'>Our Courses</h2>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-md dark:bg-slate-800">

                <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80" alt="blog" width={384} height={216} />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">FREE COURSE</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-2 dark:text-white">Web Development</h1>
                  <p className="leading-relaxed mb-3 dark:text-gray-400">Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).A front-end dev takes care of layout, design and interactivity using HTML, CSS and JavaScript. They take an idea from the drawing board and turn it into reality.</p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 dark:text-sky-500">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>


                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-md dark:bg-slate-800">
                <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://superiorcodelabs.com/wp-content/uploads/2023/08/The-Power-and-Potential-of-App-Development-2023-1170x729.png" alt="blog" width={384} height={216} />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">FREE COURSE</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-2 dark:text-white">Mobile App Development</h1>
                  <p className="leading-relaxed mb-3 dark:text-gray-400">Mobile app development is the act or process by which a mobile app is developed for one or more mobile devices, which can include personal digital assistants, enterprise digital assistants, or mobile phones.Operating systems like Windows and MacOS or on mobile platforms like iOS and Android.</p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 dark:text-sky-500">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>


                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-md dark:bg-slate-800">
                <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://plus.unsplash.com/premium_photo-1676637656166-cb7b3a43b81a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="blog" width={384} height={216} />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">FREE COURSE</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-2 dark:text-white">Artifical Intelligence (Ai)</h1>
                  <p className="leading-relaxed mb-3 dark:text-gray-400">Artificial intelligence (AI) is the intelligence of machines or software, as opposed to the intelligence of humans or animals. It is also the field of study in computer science that develops and studies intelligent machines. "AI" may also refer to the machines themselves.</p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 dark:text-sky-500">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill=" none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>

                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-md dark:bg-slate-800">

                <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" alt="blog" width={384} height={216} />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">FREE COURSE</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-2 dark:text-white">Phyton</h1>
                  <p className="leading-relaxed mb-3 dark:text-gray-400">Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming.</p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 dark:text-sky-500">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill=" none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>


                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-md dark:bg-slate-800">

                <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.unsplash.com/photo-1597239450996-ea7c2c564412?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="blog" width={384} height={216} />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">FREE COURSE</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-2 dark:text-white">JavaScript</h1>
                  <p className="leading-relaxed mb-3 dark:text-gray-400">JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.</p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 dark:text-sky-500">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill=" none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>


                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-md dark:bg-slate-800">

                <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://plus.unsplash.com/premium_photo-1669530958591-15cbad83785b?q=80&w=1615&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="blog" width={384} height={216} />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">FREE COURSE</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-2 dark:text-white">Next Js</h1>
                  <p className="leading-relaxed mb-3 dark:text-gray-400">Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.</p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 dark:text-sky-500">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill=" none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>


                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {footer()}
    </>
  )
}

export default page;
