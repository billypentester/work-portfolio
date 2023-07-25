import {useState} from 'react'
import TutorHub from './../assets/images/tutorhub.png'
import DEX from './../assets/images/dex.png'
import Car from './../assets/images/carpart.png'
import Bus from './../assets/images/buslink.png'
import covid from './../assets/images/covid.png'
import weather from './../assets/images/weather.png'
import wallet from './../assets/images/wallet.png'
import personality from './../assets/images/personality.png'

const workData = [
    {
        title: 'TutorHub',
        image: TutorHub,
    },
    {
        title: 'Decenteralized Exchange',
        image: DEX,
    },
    {
        title: 'Car Part Ecommerce',
        image: Car,
    },
    {
        title: 'Bus Link',
        image: Bus,
    },
    {
        title: 'Covid Tracker',
        image: covid,
    },
    {
        title: 'Weather App',
        image: weather,
    },
    {
        title: 'Wallet Authenticator',
        image: wallet,
    },
    {
        title: 'Personality Prediction',
        image: personality,
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

const WorkCard = ({title, image}) => {
    return (
        <div className="">
            <img src={image} alt="" className="rounded-2xl shadow-lg " id="openModal" class="cursor-pointer" />
            <h1 className="text-lg font-medium m-3"> {title} </h1>
        </div>
    )
}

export default Work
