import React from 'react'
import Icons from '../utils/Icons'
import Profile from './../assets/images/profile/lightPic.jpg'

const Hero = () => {

    const urls = [
        {
            name: 'email',
            url: 'mailto:bilalsheikh2500@gmail.com'
        },
        {
            name: 'whatsapp',
            url: 'https://wa.me/923324187624?text=Hi%20Bilal%2C%20I%20want%20to%20hire%20you%20for%20my%20project'
        },
        {
            name: 'linkedin',
            url: 'https://www.linkedin.com/in/billypentester/'
        },
        {
            name: 'messenger',
            url: 'https://messenger.com/t/billypentester'
        }
    ]

  return (
    <header id="hey" className="my-20 mx-10">
       <div className="flex items-center justify-between">
            <div>
                <h1 className='text-xl font-medium'> Hi, I'm Bilal </h1>
                <h2 className='text-5xl tracking-tight text-gray-800 leading-tight font-semibold my-3'> I design &#38; build simple yet <br/> beautiful websites </h2>
                <div className="flex items-center flex-col sm:flex-row">
                    <p className='me-5 text-lg font-medium mb-4 sm:mb-0'> Let's have a chat </p>
                    <div className="flex items-center space-x-5">
                        {
                            urls.map((url) => (
                                <button key={url.name} className='hover:bg-gray-100 bg-blue-500 hover:text-blue-500 text-gray-100 p-3 rounded-full shadow-md hover:shadow-blue-300 transition duration-500 ease-in-out'>
                                    <a href={url.url} target="_blank">
                                        <Icons type={url.name} paint="h-6 w-6"/>
                                    </a>
                                </button>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='hidden md:inline-block'>
                <img src={Profile} alt="Profile image" className='w-56 rounded-full shadow-md shadow-blue-300'/>
            </div>
       </div>
    </header>
  )
}

export default Hero
