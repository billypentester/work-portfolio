import React from 'react'

import cnss from './../assets/images/cnss.jpg'
import develop from './../assets/images/develop.jpg'
import pentesting from './../assets/images/pentesting.jpg'

const WorkCard = ({title, image}) => {
  return (
      <div data-aos="zoom-in" className="">
          <img src={image} alt="" className="rounded-lg shadow-xl cursor-pointer h-60 object-cover" />
          <h1 className="text-lg font-medium m-3"> {title} </h1>
      </div>
  )
}

const Education = () => {

  const edu = [
    {
      id: 1,
      title: 'Bachelor in Computer Science',
      university: 'COMSATS University Islamabad',
      date: '2019 - 2023',
      city: 'Lahore',
      image: 'https://seeklogo.com/images/C/comsats-university-islamabad-logo-B7C2E461B5-seeklogo.com.png'
    },
    {
      id: 2,
      title: 'Intermediate in Computer Science',
      university: 'Punjab Group of Colleges',
      date: '2017 - 2019',
      city: 'Lahore',
      image:'https://seeklogo.com/images/P/punjab-group-of-colleges-logo-0F6CF800F3-seeklogo.com.png'
    }
  ]

  const cert = [
    {
      title: 'Certified Network Security Specialist',
      image: cnss
    },
    {
      title: 'Develop Applications with GCP',
      image: develop
    },
    {
      title: 'Advance Peneration Testing',
      image: pentesting
    }
  ]


  return (
    <section id="education" className="my-20 mx-10">
        <h1 className='text-5xl tracking-tight text-gray-800 leading-tight font-semibold my-3'> My Education </h1>
        <div className="grid grid-cols-2 gap-10 my-10">
            {
              edu.map((item) => {
                return(
                  <div id={item.id} className="bg-gray-100 shadow-lg rounded-lg px-10 py-10">
                    <div className="flex">
                      <div className="w-1/3">
                        <img src={item.image} className='mx-auto h-24' alt="Graduation Cap" />
                      </div>
                      <div className="w-2/3">
                        <h3 className="text-2xl font-semibold text-gray-800">{item.university}</h3>
                        <p className="mt-3 text-lg text-gray-600">{item.title}</p>
                        <p className="mt-1 text-gray-500">{item.date}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
        </div>
        <div className="grid grid-cols-3 gap-5 my-10">
            {
              cert.map((work, index) => (
                  <WorkCard key={index} title={work.title} image={work.image} />
              ))
            }
        </div>
    </section>
  )
}

export default Education
