import React from 'react'

const score = () => {
    return (
        <>
            <section className="text-gray-600 body-font font-Poppins">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 dark:text-white">505K</h2>
                            <p className="leading-relaxed dark:text-slate-400 ">Users</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 dark:text-white">303K</h2>
                            <p className="leading-relaxed dark:text-slate-400">Subscribes</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 dark:text-white">105</h2>
                            <p className="leading-relaxed dark:text-slate-400">Downloads</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 dark:text-white">15</h2>
                            <p className="leading-relaxed dark:text-slate-400">Products</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default score