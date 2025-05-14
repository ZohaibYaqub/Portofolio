'use client'
import React, { useState } from 'react'
import footer from '../components/footer'
import toast, { Toaster } from 'react-hot-toast'

const workwithus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: [],
  })
  const [resume, setResume] = useState(null)

  const handleChange = (e) => {
    if (e.target.type === 'checkbox') {
      const skill = e.target.value
      const isChecked = e.target.checked
      setFormData(prev => ({
        ...prev,
        skills: isChecked 
          ? [...prev.skills, skill]
          : prev.skills.filter(s => s !== skill)
      }))
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Check file type
      if (file.type === 'application/pdf' || 
          file.type === 'application/msword' || 
          file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        setResume(file)
      } else {
        toast.error('Please upload PDF or Word document only', {
          duration: 3000,
          position: 'top-right',
        })
        e.target.value = null
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('skills', JSON.stringify(formData.skills))
      if (resume) {
        formDataToSend.append('resume', resume)
      }

      const response = await fetch('/api/workwithus', {
        method: 'POST',
        body: formDataToSend
      })

      const data = await response.json()
      
      if (response.ok) {
        toast.success('Application submitted successfully!', {
          duration: 3000,
          position: 'top-right',
        })
        // Clear form
        setFormData({
          name: '',
          email: '',
          phone: '',
          skills: []
        })
        setResume(null)
        e.target.reset()
      } else {
        toast.error(data.message || 'Error submitting application', {
          duration: 3000,
          position: 'top-right',
        })
      }
    } catch (error) {
      toast.error('Error submitting application', {
        duration: 3000,
        position: 'top-right',
      })
    }
  }

  return (
    <>
      <Toaster />
      <section className="text-gray-600 body-font relative font-Poppins">
        <div className="absolute inset-0 bg-gray-300">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.22742707474!2d74.00472007319846!3d31.483103657702156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1694839857732!5m2!1sen!2s" width="100%" height="100%" ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex dark:bg-gray-500">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <p className='text-gray-500 text-base'>Pakistan Only!</p>
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Apply Now</h2>

            <form onSubmit={handleSubmit}>
              <div className="relative mb-2">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-100 rounded border border-transparent outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                  required
                />
              </div>

              <div className="relative mb-2">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
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

              <div className="relative mb-2">
                <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-100 rounded border border-transparent outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                  required
                />
              </div>

              <div className="relative mb-2">
                <label htmlFor="resume" className="leading-7 text-sm text-gray-600">Upload Resume (PDF or Word)</label>
                <input 
                  type="file" 
                  id="resume" 
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="w-full bg-gray-100 rounded border border-transparent outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                  required
                />
              </div>

              <div className="relative mb-2">
                <label className="leading-7 text-sm text-gray-600">Skills</label>
                <div className="flex justify-center flex-col">
                  <label className='my-1'>
                    <input 
                      type="checkbox" 
                      value="FrontEnd Developer" 
                      checked={formData.skills.includes('FrontEnd Developer')}
                      onChange={handleChange}
                    /> FrontEnd Developer
                  </label>
                  <label className='my-1'>
                    <input 
                      type="checkbox" 
                      value="BackEnd Developer"
                      checked={formData.skills.includes('BackEnd Developer')}
                      onChange={handleChange}
                    /> BackEnd Developer
                  </label>
                  <label className='my-1'>
                    <input 
                      type="checkbox" 
                      value="Artificial Intelligence"
                      checked={formData.skills.includes('Artificial Intelligence')}
                      onChange={handleChange}
                    /> Artificial Intelligence
                  </label>
                  <label className='my-1'>
                    <input 
                      type="checkbox" 
                      value="App Development"
                      checked={formData.skills.includes('App Development')}
                      onChange={handleChange}
                    /> App Development
                  </label>
                  <label className='my-1'>
                    <input 
                      type="checkbox" 
                      value="Python"
                      checked={formData.skills.includes('Python')}
                      onChange={handleChange}
                    /> Python
                  </label>
                  <label className='my-1'>
                    <input 
                      type="checkbox" 
                      value="Next.js Full Stack"
                      checked={formData.skills.includes('Next.js Full Stack')}
                      onChange={handleChange}
                    /> Next.js Full Stack
                  </label>
                </div>
              </div>

              <button type="submit" className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg cursor-pointer">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
      {footer()}
    </>
  )
}

export default workwithus