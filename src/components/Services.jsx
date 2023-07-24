import React from 'react'

const Services = () => {
  return (
    <section id="services" className="my-20 bg-gradient-to-b from-blue-200 to-blue-100 shadow-xl rounded-2xl">
        <div className='p-10'>
            <h1 className='text-5xl tracking-tight text-gray-800 leading-tight font-semibold my-3'> Services I Offer </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round"  strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <h1 className='text-2xl font-medium my-4'> Web Development </h1>
                    <p className='text-lg font-medium'> I design and build beautiful websites using ReactJS, NextJS, TailwindCSS, and other modern technologies. </p>
                </div>
                <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round"  strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <h1 className='text-2xl font-medium my-4'> Web Development </h1>
                    <p className='text-lg font-medium'> I design and build beautiful websites using ReactJS, NextJS, TailwindCSS, and other modern technologies. </p>
                </div>
                <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round"  strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <h1 className='text-2xl font-medium my-4'> Web Development </h1>
                    <p className='text-lg font-medium'> I design and build beautiful websites using ReactJS, NextJS, TailwindCSS, and other modern technologies. </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
