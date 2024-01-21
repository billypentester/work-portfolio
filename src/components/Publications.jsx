import React from 'react'
import TransSection from './../layouts/TransSection'
import { publications } from '../data/config'

const Publications = () => {

  return (
    <TransSection id={'publications'} title={'Publications'}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 my-10">
        {
          publications.map((item, index) => {
            return(
              <a key={index} className="card bg-base-100 shadow-xl" href={item.link} target='_blank'>
                <figure>
                  <img src={item.image} alt={item.title} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title"> {item.title} </h2>
                  <p> {item.description} </p>
                  <div className="card-actions justify-end">
                    {
                      item.tags.map((tag, index) => (
                        <div key={index} className="badge badge-outline">{tag}</div>
                      ))
                    }
                  </div>
                </div>
              </a>
            )
          })
        }
      </div>
    </TransSection>
  )
}

export default Publications
