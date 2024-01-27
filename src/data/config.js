import cnss from './../assets/images/certifications/cnss.webp'
import develop from './../assets/images/certifications/develop.webp'
import pentesting from './../assets/images/certifications/pentesting.webp'
import remote from './../assets/images/certifications/remoteWork.webp'

import TutorHub from './../assets/images/projects/tutorhub.webp'
import DEX from './../assets/images/projects/dex.webp'
import Car from './../assets/images/projects/carpart.webp'
import Bus from './../assets/images/projects/buslink.webp'
import Covid from './../assets/images/projects/covid.webp'
import Weather from './../assets/images/projects/weather.webp'
import Wallet from './../assets/images/projects/wallet.webp'
import Personality from './../assets/images/projects/personality.webp'
import Profile from './../assets/images/profile/lightPic.webp'

import COMSATS from './../assets/images/education/comsats-university-islamabad.webp'
import PGC from './../assets/images/education/punjab-group-of-colleges.webp'

import IT from './../assets/images/publications/it.webp'
import predict from './../assets/images/publications/predict.webp'
import master from './../assets/images/publications/master.webp'

const herolinks = [
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

const expertise = [
    {
        title: 'Frontend',
        skills: [
            {
                name: 'react',
                viewBox: '0 0 32 32'
            },
            {
                name: 'vue',
                viewBox: '0 0 32 32'
            },
            {
                name: 'tailwind',
                viewBox: '0 0 32 32'
            },
            {
                name: 'redux',
                viewBox: '0 0 32 32'
            },
            {
                name: 'typescript',
                viewBox: '0 0 32 32'
            },
            {
                name: 'nextjs',
                viewBox: '0 0 32 32'
            },
            {
                name: 'sass',
                viewBox: '0 -32 256 256'
            }
        ]
    },
    {
        title: 'Backend',
        skills: [
            {
                name: 'nodejs',
                viewBox: '0 0 32 32'
            },
            {
                name: 'expressjs',
                viewBox: '0 0 24 24'
            },
            {
                name: 'firebase',
                viewBox: '0 0 32 32'
            },
            {
                name: 'kafka',
                viewBox: '-78.5 0 413 413'
            },
            {
                name: 'jest',
                viewBox: '0 0 32 32'
            },
            {
                name: 'graphql',
                viewBox: '0 0 32 32'
            }
        ]
    },
    {
        title: 'Database',
        skills: [
            {
                name: 'mysql',
                viewBox: '0 0 24 24'
            },
            {
                name: 'postgresql',
                viewBox: '-4 0 264 264'
            },
            {
                name: 'mongodb',
                viewBox: '0 0 32 32'
            },
            {
                name: 'redis',
                viewBox: '0 -18 256 256'
            }
        ]
    }
]

const urls = [
    {
        name: 'email',
        url: 'mailto:mailto:bilalsheikh2500@gmail.com'
    },
    {
        name: 'whatsapp',
        url: 'https://wa.me/923324187624?text=Hi%20Bilal%2C%20I%20want%20to%20hire%20you%20for%20my%20project'
    },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/billypentester/'
    }
]

const edu = [
    {
      id: 1,
      title: 'Bachelor in Computer Science',
      university: 'COMSATS University Islamabad',
      date: '2019 - 2023',
      city: 'Lahore',
      image: COMSATS
    },
    {
      id: 2,
      title: 'Intermediate in Computer Science',
      university: 'Punjab Group of Colleges',
      date: '2017 - 2019',
      city: 'Lahore',
      image: PGC
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
    },
    {
      title: 'Remote Work Certification',
      image: remote
    }
]

const work = [
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
        image: Covid,
    },
    {
        title: 'Weather App',
        image: Weather,
    },
    {
        title: 'Wallet Authenticator',
        image: Wallet,
    },
    {
        title: 'Personality Prediction',
        image: Personality,
    }
]

const experience = [
    {
        id: 'e1',
        title: 'Software Engineer',
        company: 'Simplex Technology Solutions',
        location: 'Lahore',
        duration: 'Sep 2023 - Present',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXHpuMrOiTl1a6yIZ2C7TrhXm4TLykws22Vw&usqp=CAU'
    },
    {
        id: 'e2',
        title: 'MERN Developer',
        company: 'Fiverr',
        location: 'Remote',
        duration: 'Sep 2022 - Sep 2023',
        logo: 'data:image/png;base64,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'
    }
]

const publications = [
    {
      title: 'Predict your personality',
      description: 'How does one assess your personality based on a survey or interview question?',
      link: 'https://medium.com/mlearning-ai/predict-your-personality-f2c5d3701dc3',
      image: predict,
      tags: ['ML', 'AI']
    },
    {
      title: 'Ultimate 10 Stages to Master Backend Development',
      description: "A step-by-step guide to getting a job as a good backend developer",
      link: "https://billypentester.medium.com/ultimate-10-stages-to-master-backend-development-f6f65f22a327",
      image: master,
      tags: ['JS', 'Backend']
    },
    {
      title: 'Ethics and the IT Professional',
      description: 'Why ethics are important to follow? ',
      link: "https://billypentester.medium.com/ethics-and-the-it-professional-8b108a4f0ee",
      image: IT,
      tags: ['ethics', 'IT']
    }
]

export { urls, expertise, edu, cert, work, publications, Profile, herolinks, experience }

