import React from 'react'
import TransSection from './../layouts/TransSection'

const Publications = () => {

  const publications = [
    {
      title: 'Predict your personality',
      description: 'How does one assess your personality based on a survey or interview question?',
      link: 'https://medium.com/mlearning-ai/predict-your-personality-f2c5d3701dc3',
      date: '2021',
      image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*gWPQeX8n7qRoajJhbMlJtw.jpeg',
      tags: ['ML', 'Personality Prediction']
    },
    {
      title: 'Ultimate 10 Stages to Master Backend Development',
      description: "A step-by-step guide to getting a job as a good backend developer",
      link: "https://billypentester.medium.com/ultimate-10-stages-to-master-backend-development-f6f65f22a327",
      date: '2021',
      image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*cV74X15zJgtxzXwN.png',
      tags: ['JS', 'Backend']
    },
    {
      title: 'Ethics and the IT Professional',
      description: 'Why ethics are important to follow? ',
      image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*xpdAjNlUPk1O-nsx',
      tags: ['ethics', 'IT']
    }
  ]

  return (
    <TransSection id={'publications'} title={'Publications'}>
      <div className="grid grid-cols-3 gap-2 my-10">
        {
          publications.map((item, index) => (
            
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={item.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {item.title}
                    {/* <div className="badge badge-secondary">NEW</div> */}
                  </h2>
                  <p>
                    {item.description}
                  </p>
                  <div className="card-actions justify-end">
                    {
                      item.tags.map(tag => (
                        <div className="badge badge-outline">{tag}</div>
                      ))
                    }
                  </div>
                </div>
              </div>
            
          ))
        }
      </div>
    </TransSection>
  )
}

export default Publications
