'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import footer from '../components/footer'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast'

const Login = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()
      
      if (response.ok) {
        toast.success('Login successful!', {
          duration: 3000,
          position: 'top-right',
        })
        // Login successful hone par home page par redirect kar denge
        setTimeout(() => {
          router.push('/')  // Replace '/' with your home page path
        }, 1000)
      } else {
        toast.error(data.message || 'Invalid email or password. Please sign up first.', {
          duration: 3000,
          position: 'top-right',
        })
      }
    } catch (error) {
      toast.error('Error logging in. Please try again.', {
        duration: 3000,
        position: 'top-right',
      })
    }
  }

  return (
    <>
      <Toaster />
      <section className="text-gray-600 body-font font-Poppins">
        <div className="container py-24 mx-auto flex justify-center">
          <div className="md:pr-16 lg:pr-0 pr-0">
            <Image className='hidden md:block' src="https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80" alt="login" width={400} height={500} />
          </div>
          <div className="shadow-2xl lg:w-2/6 md:w-1/2 rounded-lg p-6 flex flex-col md mt-10 md:mt-0 dark:bg-slate-800">
            <h2 className="text-gray-800 text-center text-lg font-medium title-font mb-2 dark:text-white">Login</h2>
            <h2 className="text-gray-500 text-center text-lg font-medium title-font mb-5 dark:text-slate-300">Welcome Back!</h2>

            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600 dark:text-slate-300">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-100 rounded border border-transparent outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                  required
                />
              </div>

              <div className="relative mb-4">
                <label htmlFor="password" className="leading-7 text-sm text-gray-600 dark:text-slate-300">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-gray-100 rounded border border-transparent outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                  required
                />
              </div>

              <div className="flex justify-center">
                <button type="submit" className="my-2 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-black rounded text-lg">
                  Login
                </button>
              </div>
            </form>

            <Link className="no-underline" href="/signup">
              <p className="text-sm font-extralight cursor-pointer text-gray-500 mt-3 text-center my-3 dark:text-slate-300">
                Don't have an account? Sign Up
              </p>
            </Link>
          </div>
        </div>
      </section>
      {footer()}
    </>
  )
}

export default Login