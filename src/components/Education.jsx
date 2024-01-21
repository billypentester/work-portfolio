import React, {useState} from 'react'
import TransSection from '../layouts/TransSection'
import { edu, cert } from '../data/config'

const WorkCard = ({title, image}) => {
  return (
      <div>
          <img src={image} alt={title} className="rounded-lg shadow-xl cursor-pointer h-60 object-cover" />
          <h1 className="text-lg font-medium m-3"> {title} </h1>
      </div>
  )
}

const Education = () => {

  return (
    <TransSection id="education" title={'My Education'}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
        {
          edu.map((item) => {
            return(
              <div key={item.id} className="bg-gray-100 shadow-lg rounded-lg px-10 py-10">
                <div className="flex flex-col sm:flex-row">
                  <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                    <img src={item.image} className='mx-auto h-24' alt={item.title} />
                  </div>
                  <div className="w-full sm:w-2/3">
                    <h3 className="text-lg sm:text-2xl font-semibold text-gray-800">{item.university}</h3>
                    <p className="mt-3 text-lg text-gray-600">{item.title}</p>
                    <p className="mt-1 text-gray-500">{item.date}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-5 my-10">
        {
          cert.map((work, index) => (
              <WorkCard key={index} title={work.title} image={work.image} />
          ))
        }
      </div>
    </TransSection>
  )
}

export default Education
