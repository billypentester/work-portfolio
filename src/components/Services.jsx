import React from 'react'
import Icons from '../utils/Icons'

const Services = () => {
  return (
    <section id="services" className="my-20 bg-gradient-to-b from-blue-200 to-blue-100 shadow-xl rounded-2xl">
        <div className='p-10'>
            <h1 className='text-5xl tracking-tight text-gray-800 leading-tight font-semibold my-3'> Services I Offer </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                <div className="">
                    <div className="bg-white p-3 inline-block rounded-full mb-2">
                        <Icons type='web' paint='h-6 w-6 text-blue-500' />
                    </div>
                    <h1 className='text-2xl font-medium my-5'> Full Stack Development </h1>
                    <p className='text-lg font-medium'> I design and build beautiful websites using ReactJS, NextJS, TailwindCSS, and other modern technologies. </p>
                </div>
                <div className="">
                    <div className="bg-white p-3 inline-block rounded-full mb-2">
                        <Icons type='database' paint='h-6 w-6 text-blue-500' />
                    </div>
                    <h1 className='text-2xl font-medium my-5'> Database Development </h1>
                    <p className='text-lg font-medium'> I design and build beautiful websites using ReactJS, NextJS, TailwindCSS, and other modern technologies. </p>
                </div>
                <div className="">
                    <div className="bg-white p-3 inline-block rounded-full mb-2">
                        <Icons type='blockchain' paint='h-6 w-6 text-blue-500' />
                    </div>
                    <h1 className='text-2xl font-medium my-5'> Blockchain Development </h1>
                    <p className='text-lg font-medium'> I design and build beautiful websites using ReactJS, NextJS, TailwindCSS, and other modern technologies. </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
