import cnss from './../assets/images/certifications/cnss.jpg'
import develop from './../assets/images/certifications/develop.jpg'
import pentesting from './../assets/images/certifications/pentesting.jpg'
import remote from './../assets/images/certifications/remoteWork.jpeg'

import TutorHub from './../assets/images/projects/tutorhub.png'
import DEX from './../assets/images/projects/dex.png'
import Car from './../assets/images/projects/carpart.png'
import Bus from './../assets/images/projects/buslink.png'
import Covid from './../assets/images/projects/covid.png'
import Weather from './../assets/images/projects/weather.png'
import Wallet from './../assets/images/projects/wallet.png'
import Personality from './../assets/images/projects/personality.png'

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

const publications = [
    {
      title: 'Predict your personality',
      description: 'How does one assess your personality based on a survey or interview question?',
      link: 'https://medium.com/mlearning-ai/predict-your-personality-f2c5d3701dc3',
      image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*gWPQeX8n7qRoajJhbMlJtw.jpeg',
      tags: ['ML', 'AI']
    },
    {
      title: 'Ultimate 10 Stages to Master Backend Development',
      description: "A step-by-step guide to getting a job as a good backend developer",
      link: "https://billypentester.medium.com/ultimate-10-stages-to-master-backend-development-f6f65f22a327",
      image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*cV74X15zJgtxzXwN.png',
      tags: ['JS', 'Backend']
    },
    {
      title: 'Ethics and the IT Professional',
      description: 'Why ethics are important to follow? ',
      link: "https://billypentester.medium.com/ethics-and-the-it-professional-8b108a4f0ee",
      image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*xpdAjNlUPk1O-nsx',
      tags: ['ethics', 'IT']
    }
]

export { urls, expertise, edu, cert, work, publications }

