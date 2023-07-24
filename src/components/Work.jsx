import React from 'react'


const WorkCard = ({title, image}) => {
    return (
        <div className="">
            <img src={image} alt="" className="rounded-2xl shadow-lg"/>
            <h1 className="text-2xl font-medium my-4"> {title} </h1>
        </div>
    )
}

const workData = [
    {
        title: 'Project 1',
        image: 'https://placehold.co/600x400',
    },
    {
        title: 'Project 2',
        image: 'https://placehold.co/600x400',
    },
    {
        title: 'Project 3',
        image: 'https://placehold.co/600x400',
    },
    {
        title: 'Project 4',
        image: 'https://placehold.co/600x400',
    },
    {
        title: 'Project 5',
        image: 'https://placehold.co/600x400',
    },
    {
        title: 'Project 6',
        image: 'https://placehold.co/600x400',
    },
    {
        title: 'Project 7',
        image: 'https://placehold.co/600x400',
    },
    {
        title: 'Project 8',
        image: 'https://placehold.co/600x400',
    }
]


const Work = () => {
  return (
    <section id="work" className="my-20 mx-10">
        <h1 className='text-5xl tracking-tight text-gray-800 leading-tight font-semibold my-3'> Work I've done </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
            {
                workData.map((work, index) => (
                    <WorkCard key={index} title={work.title} image={work.image} />
                ))
            }
        </div>
    </section>
  )
}

export default Work
